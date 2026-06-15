// persona-orb.jsx — Luminous orb: a rotating 3D sphere of crisp colored
// particles spiraling around a bright white core, with flowing "arm" tails.
// Inspired by Kyndryl Vital brand artwork. No blur — particles stay sharp;
// bloom comes from the white core gradient layered behind them.

// Mood palettes drive particle hue selection.
const ORB_PALETTES = {
  engaged: {
    hues:  ['#E94B4B', '#FF8766', '#FFB46A', '#E68A00', '#46B7C7', '#3E8AC2', '#5C6A73', '#29707A'],
    coreTint: 'rgba(255,255,255,0.92)',
    halo:    'rgba(255, 200, 160, 0.32)',
    bg:      'linear-gradient(135deg, var(--k-warm-gray-20) 0%, var(--k-warm-gray-10) 45%, #FBFAF6 100%)',
    chrome:  'light',
  },
  cautious: {
    hues:  ['#2C6FA0', '#3E8AC2', '#29707A', '#5BA2AE', '#5C6A73', '#3D8590', '#FF6647'],
    coreTint: 'rgba(255,255,255,0.94)',
    halo:    'rgba(91, 162, 174, 0.28)',
    bg:      'linear-gradient(135deg, var(--k-cool-gray-20) 0%, var(--k-cool-gray-10) 45%, #F8FBFC 100%)',
    chrome:  'light',
  },
  drift: {
    hues:  ['#5C6A73', '#4F5A63', '#6B7780', '#98A3AB', '#3E8AC2', '#5BA2AE'],
    coreTint: 'rgba(255,255,255,0.86)',
    halo:    'rgba(120, 150, 175, 0.22)',
    bg:      'linear-gradient(135deg, var(--k-cool-gray-30) 0%, var(--k-cool-gray-20) 45%, var(--k-cool-gray-10) 100%)',
    chrome:  'light',
  },
  agitated: {
    hues:  ['#FF462D', '#E63A22', '#FF6647', '#FF8766', '#E68A00', '#5C6A73'],
    coreTint: 'rgba(255,255,255,0.94)',
    halo:    'rgba(255, 120, 90, 0.34)',
    bg:      'linear-gradient(135deg, #F7E8E0 0%, #FBF1EC 45%, #FDFAF8 100%)',
    chrome:  'light',
  },
};

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

function PersonaOrb({
  mood = 'engaged',
  accent = '#FF8766',
  density = 4200,             // particle count — sphere + arms + dust
  personaName = 'Persona',
  moodLabel = 'Engaged · steady',
  speaking: speakingProp = true,
  onMoodChange,
}) {
  const wrapRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const stateRef = React.useRef({
    particles: [],
    w: 0, h: 0, cx: 0, cy: 0, R: 0,
    mouse: { x: null, y: null, hold: false, inside: false, vx: 0, vy: 0 },
    pulses: [],
    t0: 0,
    amp: 0, targetAmp: 0,
    speaking: speakingProp,
    palette: ORB_PALETTES[mood] || ORB_PALETTES.engaged,
    accent,
    rotY: 0,
    rotX: -0.25,            // slight downward tilt — sphere viewed from above
  });
  const [speaking, setSpeaking] = React.useState(speakingProp);
  const [dispAmp, setDispAmp] = React.useState(0);
  const [hudMood, setHudMood] = React.useState(mood);

  React.useEffect(() => { stateRef.current.speaking = speaking; }, [speaking]);
  React.useEffect(() => {
    const pal = ORB_PALETTES[hudMood] || ORB_PALETTES.engaged;
    stateRef.current.palette = pal;
    // Recolor existing particles when mood changes
    stateRef.current.particles.forEach(p => { p.color = pal.hues[p.hi % pal.hues.length]; });
  }, [hudMood]);
  React.useEffect(() => { stateRef.current.accent = accent; }, [accent]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const ctx = canvas.getContext('2d');
    const s = stateRef.current;
    let raf = 0;

    function resize() {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      s.w = rect.width; s.h = rect.height;
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      s.cx = rect.width / 2;
      s.cy = rect.height / 2;
      s.R  = Math.min(rect.width, rect.height) * 0.5 * 0.62;
      if (s.particles.length !== density) initParticles();
    }

    // Build the particle field.
    // 70% live on the sphere shell with a spiral-arm radius modulation.
    // 22% are "arm" trails — radius extends well outside the sphere.
    // 8% are stardust drifting individually.
    function initParticles() {
      const pal = stateRef.current.palette;
      const arr = [];
      const N = density;
      const N_SHELL = Math.floor(N * 0.70);
      const N_ARM   = Math.floor(N * 0.22);
      const N_DUST  = N - N_SHELL - N_ARM;

      // Shell — Fibonacci sphere distribution
      for (let i = 0; i < N_SHELL; i++) {
        const f = (i + 0.5) / N_SHELL;
        const phi = Math.acos(1 - 2 * f);                // 0..PI
        const theta = i * GOLDEN_ANGLE;
        // Spiral arms: bump radius along a swirl path
        const armPhase = theta - phi * 4;
        const armBoost = Math.pow(Math.max(0, Math.cos(armPhase)), 3);   // sharp arms
        const radius   = 0.86 + armBoost * 0.18;
        // Hue chosen from palette in sectors of theta — gives color "regions"
        const hueIdx = Math.floor(((theta % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI)) / (2 * Math.PI / pal.hues.length));
        arr.push({
          kind: 'shell',
          theta, phi, radius,
          x: Math.sin(phi) * Math.cos(theta) * radius,
          y: Math.cos(phi) * radius,
          z: Math.sin(phi) * Math.sin(theta) * radius,
          hi: hueIdx, color: pal.hues[hueIdx],
          size: 0.7 + Math.random() * 0.9,
          jitter: Math.random() * 0.4 - 0.2,
          phase: Math.random() * Math.PI * 2,
          mx: 0, my: 0,     // mouse displacement
        });
      }

      // Flowing arms — denser sweep on equator-ish band, radius up to 1.55
      for (let i = 0; i < N_ARM; i++) {
        const f = i / N_ARM;
        // bias phi around equator (PI/2) but allow up to PI/2 ± 1.0
        const phi = Math.PI / 2 + (Math.random() - 0.5) * 1.7;
        const theta = i * GOLDEN_ANGLE * 1.7 + Math.random() * 0.4;
        // Radius extends outside; modulated to create comet-like streamers
        const armPhase = theta - phi * 6;
        const armBoost = Math.pow(Math.max(0, Math.cos(armPhase * 0.6)), 2);
        const radius = 1.0 + armBoost * 0.55 + Math.random() * 0.05;
        const hueIdx = Math.floor(((theta % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI)) / (2 * Math.PI / pal.hues.length));
        arr.push({
          kind: 'arm',
          theta, phi, radius,
          x: Math.sin(phi) * Math.cos(theta) * radius,
          y: Math.cos(phi) * radius,
          z: Math.sin(phi) * Math.sin(theta) * radius,
          hi: hueIdx, color: pal.hues[hueIdx],
          size: 0.55 + Math.random() * 0.7,
          jitter: 0,
          phase: Math.random() * Math.PI * 2,
          mx: 0, my: 0,
        });
      }

      // Stardust — sparse, just outside the orb
      for (let i = 0; i < N_DUST; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = 1.3 + Math.pow(Math.random(), 2) * 0.9;
        const yOff = (Math.random() - 0.5) * 1.6;
        const hueIdx = Math.floor(Math.random() * pal.hues.length);
        arr.push({
          kind: 'dust',
          theta: a, phi: 0, radius: r,
          x: Math.cos(a) * r,
          y: yOff,
          z: Math.sin(a) * r,
          hi: hueIdx, color: pal.hues[hueIdx],
          size: 0.5 + Math.random() * 0.7,
          jitter: 0,
          phase: Math.random() * Math.PI * 2,
          mx: 0, my: 0,
        });
      }

      s.particles = arr;
    }

    function sampleAmp(t) {
      if (!s.speaking) return 0.05 + Math.sin(t * 0.5) * 0.03;
      const lfo  = Math.sin(t * 0.8) * 0.5 + 0.5;
      const syll = Math.max(0, Math.sin(t * 5.0 + Math.sin(t * 1.4) * 2));
      const burst= Math.pow(Math.max(0, Math.sin(t * 3.2)), 6) * 0.6;
      const n    = (Math.random() - 0.5) * 0.05;
      return Math.min(1, 0.20 + lfo * 0.18 + syll * 0.38 + burst + n);
    }

    function loop(now) {
      raf = requestAnimationFrame(loop);
      if (!s.t0) s.t0 = now;
      const t = (now - s.t0) / 1000;
      const dt = 1 / 60;
      const pal = stateRef.current.palette;
      const cx = s.cx, cy = s.cy, R = s.R;

      // amplitude
      s.targetAmp = sampleAmp(t);
      s.amp += (s.targetAmp - s.amp) * 0.15;
      const amp = s.amp;

      // rotation — speaking slightly speeds it up
      s.rotY += dt * (0.12 + amp * 0.10);

      // pulses
      for (let i = s.pulses.length - 1; i >= 0; i--) {
        s.pulses[i].t += dt;
        if (s.pulses[i].t > 1.6) s.pulses.splice(i, 1);
      }

      // Clear (no trail — we don't want blur)
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, s.w, s.h);

      // CORE — bright luminous white sphere with layered halo
      drawCore(ctx, cx, cy, R, amp, pal);

      // Pulse rings (subtle stroke on light bg)
      ctx.globalCompositeOperation = 'source-over';
      for (let k = 0; k < s.pulses.length; k++) {
        const pu = s.pulses[k];
        const r0 = R * (0.5 + pu.t * 1.4);
        const aL = Math.max(0, 0.40 - pu.t * 0.30);
        ctx.strokeStyle = hexToRgba(stateRef.current.accent, aL);
        ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.arc(cx, cy, r0, 0, Math.PI * 2); ctx.stroke();
      }

      // PARTICLES — rotate around Y and slight tilt around X
      const cY = Math.cos(s.rotY), sY = Math.sin(s.rotY);
      const cX = Math.cos(s.rotX), sX = Math.sin(s.rotX);
      const focal = 2.4, camZ = 2.6;
      const mx = s.mouse.inside ? s.mouse.x : null;
      const my = s.mouse.inside ? s.mouse.y : null;
      const hold = s.mouse.hold;

      // Pulse contribution to radius
      let pulseR = 0;
      for (let k = 0; k < s.pulses.length; k++) {
        const pu = s.pulses[k];
        const env = Math.exp(-Math.pow((pu.t - 0.5) / 0.30, 2));
        pulseR += env * 0.18;
      }

      // Particles drawn opaquely on light bg
      ctx.globalCompositeOperation = 'source-over';
      const parts = s.particles;
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];

        // Apply gentle per-particle wobble
        const breathe = 1 + amp * 0.05 + Math.sin(t * 1.2 + p.phase) * 0.01 + pulseR;
        const px = p.x * breathe;
        const py = p.y * breathe;
        const pz = p.z * breathe;

        // Rotate around Y
        const rx1 = px * cY + pz * sY;
        const rz1 = -px * sY + pz * cY;
        // Then rotate around X
        const ry2 = py * cX - rz1 * sX;
        const rz2 = py * sX + rz1 * cX;
        const rx2 = rx1;

        // Project to 2D (perspective)
        const scale = focal / (camZ - rz2);
        let sx = cx + rx2 * R * scale + p.mx;
        let sy = cy + ry2 * R * scale + p.my;

        // Mouse interaction — gently push/pull screen-space position
        if (mx !== null) {
          const dx = sx - mx, dy = sy - my;
          const d = Math.hypot(dx, dy);
          const range = hold ? 220 : 130;
          if (d < range && d > 1) {
            const k = (1 - d / range);
            if (hold) { p.mx -= (dx / d) * k * 1.6; p.my -= (dy / d) * k * 1.6; }
            else      { p.mx += (dx / d) * k * 1.2; p.my += (dy / d) * k * 1.2; }
          }
        }
        // Spring back to 0
        p.mx *= 0.92; p.my *= 0.92;
        sx += p.mx; sy += p.my;

        // Off-screen cull
        if (sx < -10 || sx > s.w + 10 || sy < -10 || sy > s.h + 10) continue;

        // Depth-based alpha & size — front particles more vivid
        const depth = (rz2 + 1.4) / 2.8;   // ~0..1 (front=1)
        const dot = Math.max(0.06, depth);
        const sz = p.size * (0.5 + dot * 1.1);

        // Less aggressive dimming near the (smaller) core — we want particles visible through it
        const distFromCenter = Math.hypot(sx - cx, sy - cy);
        const coreFalloff = Math.min(1, Math.max(0.55, (distFromCenter - R * 0.12) / (R * 0.18)));

        // Base alpha tuned for source-over on light bg
        const baseAlpha = p.kind === 'dust' ? 0.42 : p.kind === 'arm' ? 0.78 : 0.92;
        const alpha = baseAlpha * dot * coreFalloff * (0.65 + amp * 0.25);

        ctx.fillStyle = hexToRgba(p.color, Math.min(0.95, alpha));
        ctx.beginPath();
        ctx.arc(sx, sy, sz, 0, Math.PI * 2);
        ctx.fill();
      }

      setDispAmp(amp);
    }

    // Pointer
    function onMove(e) {
      const rect = wrap.getBoundingClientRect();
      s.mouse.x = e.clientX - rect.left;
      s.mouse.y = e.clientY - rect.top;
      s.mouse.inside = true;
    }
    function onLeave() { s.mouse.inside = false; }
    function onDown(e) { s.mouse.hold = true; s.pulses.push({ t: 0 }); onMove(e); }
    function onUp() { s.mouse.hold = false; }

    wrap.addEventListener('pointermove', onMove);
    wrap.addEventListener('pointerleave', onLeave);
    wrap.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      wrap.removeEventListener('pointermove', onMove);
      wrap.removeEventListener('pointerleave', onLeave);
      wrap.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
    };
  }, [density]);

  const MOOD_CHIPS = [
    { k: 'engaged',  label: 'Engaged',  desc: 'warm balance · steady' },
    { k: 'cautious', label: 'Cautious', desc: 'spruce-led · measured' },
    { k: 'drift',    label: 'Drifting', desc: 'cool · low engagement' },
    { k: 'agitated', label: 'Agitated', desc: 'warm flares · churn risk' },
  ];

  const pal = ORB_PALETTES[hudMood] || ORB_PALETTES.engaged;

  return (
    <div ref={wrapRef} style={{
      position: 'relative', width: '100%', height: '100%',
      overflow: 'hidden', borderRadius: 10,
      background: pal.bg,
      border: '1px solid rgba(255,255,255,0.07)',
      cursor: 'crosshair', userSelect: 'none', touchAction: 'none',
    }}>
      <canvas ref={canvasRef} style={{
        display: 'block', position: 'absolute', inset: 0,
      }} />

      <OrbHUD personaName={personaName} moodLabel={moodLabel} accent={accent}
        dispAmp={dispAmp} speaking={speaking} setSpeaking={setSpeaking}
        hudMood={hudMood} setHudMood={setHudMood} onMoodChange={onMoodChange}
        chips={MOOD_CHIPS} />
    </div>
  );
}

// Bright luminous core on LIGHT bg — soft white bloom + warm/cool halo per mood
function drawCore(ctx, cx, cy, R, amp, pal) {
  ctx.globalCompositeOperation = 'source-over';
  const haloR = R * (0.62 + amp * 0.06);
  const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, haloR);
  halo.addColorStop(0,    pal.halo);
  halo.addColorStop(0.50, pal.halo.replace(/[\d.]+\)$/, '0.10)'));
  halo.addColorStop(1,    'rgba(0,0,0,0)');
  ctx.fillStyle = halo;
  ctx.beginPath(); ctx.arc(cx, cy, haloR, 0, Math.PI * 2); ctx.fill();

  const coreR = R * (0.16 + amp * 0.03);
  const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR);
  core.addColorStop(0,    pal.coreTint);
  core.addColorStop(0.55, 'rgba(255,255,255,0.55)');
  core.addColorStop(0.85, 'rgba(255,255,255,0.18)');
  core.addColorStop(1,    'rgba(255,255,255,0)');
  ctx.fillStyle = core;
  ctx.beginPath(); ctx.arc(cx, cy, coreR, 0, Math.PI * 2); ctx.fill();

  const innerN = 32;
  for (let i = 0; i < innerN; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * coreR * 0.65;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    const hue = pal.hues[i % pal.hues.length];
    ctx.fillStyle = hexToRgba(hue, 0.32 + Math.random() * 0.22);
    ctx.fillRect(x, y, 1.0, 1.0);
  }
}

function hexToRgba(hex, a) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

// HUD overlay
function OrbHUD({ personaName, moodLabel, accent, dispAmp, speaking, setSpeaking,
                  hudMood, setHudMood, onMoodChange, chips }) {
  return (
    <>
      <div style={{
        position: 'absolute', top: 14, left: 16, right: 16,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', pointerEvents: 'none',
        color: 'rgba(20,20,30,0.62)', fontFamily: 'var(--font-mono)', fontSize: 10.5,
        letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600,
        zIndex: 2,
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: accent, boxShadow: `0 0 8px ${accent}` }} />
          {personaName} · synthetic embodiment
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          mood · <span style={{ color: 'var(--fg-1)' }}>{moodLabel}</span>
        </span>
      </div>

      <div style={{
        position: 'absolute', right: 18, top: 60, bottom: 110, width: 5,
        display: 'flex', flexDirection: 'column-reverse', gap: 3,
        pointerEvents: 'none', zIndex: 2,
      }}>
        {[...Array(22)].map((_, i) => {
          const threshold = (i + 1) / 22;
          const on = dispAmp > threshold;
          const hot = i >= 22 - 5;
          return <span key={i} style={{
            width: 4, height: 5, borderRadius: 1,
            background: on ? (hot ? accent : 'rgba(20,20,30,0.55)') : 'rgba(20,20,30,0.10)',
            transition: 'background 80ms linear',
          }} />;
        })}
      </div>

      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: '14px 18px 16px', zIndex: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14,
        background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.55) 60%, rgba(255,255,255,0.78) 100%)',
        backdropFilter: 'blur(2px)',
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={() => setSpeaking(s => !s)} style={{
            width: 48, height: 48, borderRadius: 999, cursor: 'pointer',
            background: speaking ? `${accent}26` : 'rgba(20,20,30,0.06)',
            border: `1px solid ${speaking ? accent : 'rgba(20,20,30,0.18)'}`,
            color: 'var(--fg-1)', backdropFilter: 'blur(8px)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 200ms ease',
          }}>
            {speaking ? (
              <svg width="14" height="14" viewBox="0 0 32 32" fill="currentColor">
                <rect x="9" y="6" width="5" height="20" rx="1.5" />
                <rect x="18" y="6" width="5" height="20" rx="1.5" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                <path d="M10 6l16 10-16 10V6z" />
              </svg>
            )}
          </button>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 15,
            color: 'var(--fg-1)', letterSpacing: '-0.005em',
          }}>
            {speaking ? 'Speaking · live' : 'Listening for prompt'}
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '0.1em',
              color: 'rgba(20,20,30,0.55)', textTransform: 'uppercase', marginTop: 2,
            }}>
              {Math.round(dispAmp * 100)}% articulation · {(440 + Math.round(dispAmp * 60))} Hz
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {chips.map(c => {
            const active = c.k === hudMood;
            return (
              <button key={c.k} onClick={() => { setHudMood(c.k); onMoodChange && onMoodChange(c.k); }}
                style={{
                  padding: '7px 12px', borderRadius: 999, cursor: 'pointer',
                  fontFamily: 'var(--font-sans)', fontSize: 11.5, fontWeight: 500,
                  background: active ? `${accent}1f` : 'rgba(255,255,255,0.55)',
                  border: `1px solid ${active ? accent : 'rgba(20,20,30,0.14)'}`,
                  color: active ? 'var(--fg-1)' : 'rgba(20,20,30,0.74)',
                  backdropFilter: 'blur(6px)',
                  display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start',
                  lineHeight: 1.1, gap: 2,
                }}>
                <span>{c.label}</span>
                <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em',
                  color: active ? 'rgba(20,20,30,0.66)' : 'rgba(20,20,30,0.46)' }}>{c.desc}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

Object.assign(window, { PersonaOrb });
