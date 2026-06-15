// bil-os/shell.jsx — KAF (Kyndryl Agentic Framework) app shell + primitives
// for the AnaCredit Persona OS screens. Adapted from the Synthetic Persona DS.
// Exports: KShell, KCard, KPill, KBtn, KEyebrow, KIcon, KDot, KSparkline

function KIcon({ name, size = 16 }) {
  const paths = {
    dashboard: 'M4 4h10v10H4zM18 4h10v10H18zM4 18h10v10H4zM18 18h10v10H18z',
    group: 'M11 13a4 4 0 100-8 4 4 0 000 8zM21 14a3 3 0 100-6 3 3 0 000 6zM4 26a7 7 0 0114 0M18 24a5 5 0 0110 0',
    bot: 'M10 8h12a2 2 0 012 2v12a2 2 0 01-2 2H10a2 2 0 01-2-2V10a2 2 0 012-2zM12 14h2M18 14h2M12 20h8M16 4v4',
    chart: 'M6 26V14M14 26V8M22 26V18M30 26V4',
    check: 'M6 16l6 6 14-14',
    info: 'M16 4a12 12 0 100 24 12 12 0 000-24z M16 10v2 M16 14v8',
    warn: 'M16 4l14 24H2L16 4z M16 12v8 M16 24v0.5',
    refresh: 'M28 8v8h-8 M4 24v-8h8 M6 12a10 10 0 0117-4 M26 20a10 10 0 01-17 4',
    play: 'M8 4l20 12-20 12V4z',
    user: 'M16 4a6 6 0 100 12 6 6 0 000-12z M4 28a12 12 0 0124 0',
    doc: 'M8 4h12l6 6v18H8V4z M20 4v6h6',
    spark: 'M16 4l3 9 9 3-9 3-3 9-3-9-9-3 9-3z',
    flask: 'M12 4h8 M14 4v8L6 26h20L18 12V4',
    pulse: 'M2 16h6l3-10 6 20 3-10h10',
    lightbulb: 'M16 4a8 8 0 00-5 14v4a2 2 0 002 2h6a2 2 0 002-2v-4a8 8 0 00-5-14z M13 28h6',
    book: 'M6 4h14a4 4 0 014 4v20H10a4 4 0 01-4-4V4z M6 24h18',
    anomaly: 'M2 22l5-10 4 6 5-12 4 8 4-4 4 12',
    filter: 'M4 6h24l-9 11v9l-6-3v-6L4 6z',
    network: 'M16 4l4 4-4 4-4-4zM4 16l4 4-4 4-4-4zM28 16l4 4-4 4-4-4zM16 28l4 4-4 4-4-4zM16 8v8M16 16v8M8 16h16',
  };
  const d = paths[name] || paths.dashboard;
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d={d}></path>
    </svg>
  );
}

const KAF_NAV = [
  { id: 'registry', label: 'Persona registry', icon: 'group', g: 'Horizon 1 · Registry' },
  { id: 'evidence', label: 'Evidence intake', icon: 'doc', g: 'Horizon 1 · Registry' },
  { id: 'talk', label: 'Talk to persona', icon: 'user', g: 'Horizon 1 · Registry' },
  { id: 'scenario', label: 'Scenario lab', icon: 'flask', g: 'Horizon 2 · Lab & Gate' },
  { id: 'policy', label: 'Policy gate', icon: 'check', g: 'Horizon 2 · Lab & Gate' },
  { id: 'approval', label: 'Approval queue', icon: 'filter', g: 'Horizon 2 · Lab & Gate' },
  { id: 'business', label: 'Business impact', icon: 'chart', g: 'Nascent business ops' },
  { id: 'liveagent', label: 'Live agent run', icon: 'pulse', g: 'Cross-cutting' },
  { id: 'inbox', label: 'Governance inbox', icon: 'lightbulb', g: 'Cross-cutting' },
];

function KShell({ active, title, subtitle, headerRight, children }) {
  const groups = [];
  KAF_NAV.forEach((n) => { if (!groups.includes(n.g)) groups.push(n.g); });
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '208px 1fr', width: '100%', height: '100%', background: 'var(--bg-2)', fontFamily: 'var(--font-sans)', color: 'var(--fg-2)', fontSize: 13 }}>
      <aside style={{ background: '#fff', borderRight: '1px solid var(--border-1)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 56, display: 'flex', alignItems: 'center', padding: '0 16px', borderBottom: '1px solid var(--border-1)', gap: 10 }}>
          <img src='assets/kyndryl-vital-logo.png' alt='Kyndryl Vital' style={{ height: 24 }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 12.5, letterSpacing: '-0.005em', color: 'var(--fg-1)' }}>KAF · AnaCredit</span>
        </div>
        <nav style={{ flex: 1, padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 1, overflow: 'hidden' }}>
          {groups.map((g) => (
            <React.Fragment key={g}>
              <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-muted)', padding: '10px 12px 4px' }}>{g}</div>
              {KAF_NAV.filter((n) => n.g === g).map((n) => (
                <a key={n.id} href="#" style={{
                  display: 'flex', alignItems: 'center', gap: 10, padding: '6px 10px', borderRadius: 6,
                  background: active === n.id ? 'var(--bg-3)' : 'transparent',
                  color: active === n.id ? 'var(--fg-1)' : 'var(--fg-2)',
                  textDecoration: 'none', fontSize: 12, fontWeight: active === n.id ? 500 : 400,
                }}>
                  <KIcon name={n.icon} size={14} />
                  <span>{n.label}</span>
                </a>
              ))}
            </React.Fragment>
          ))}
        </nav>
        <div style={{ padding: 12, borderTop: '1px solid var(--border-1)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 999, background: 'var(--k-dark-stone-90)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600 }}>KW</div>
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <div style={{ fontSize: 12, color: 'var(--fg-1)', fontWeight: 500 }}>Kyndryl workshop lead</div>
            <div style={{ fontSize: 10, color: 'var(--fg-muted)' }}>BiL · AnaCredit engagement</div>
          </div>
        </div>
      </aside>
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <header style={{ height: 56, background: '#fff', borderBottom: '1px solid var(--border-1)', display: 'flex', alignItems: 'center', padding: '0 24px', justifyContent: 'space-between', flex: '0 0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 16, margin: 0, letterSpacing: '-0.005em', color: 'var(--fg-1)' }}>{title}</h1>
            {subtitle ? <div style={{ fontSize: 11, color: 'var(--fg-muted)' }}>{subtitle}</div> : null}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>{headerRight}</div>
        </header>
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative', minHeight: 0 }}>{children}</div>
      </div>
    </div>
  );
}

function KCard({ title, eyebrow, action, children, style, padded = true }) {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 8, display: 'flex', flexDirection: 'column', minWidth: 0, ...style }}>
      {(title || eyebrow) ? (
        <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <div style={{ minWidth: 0 }}>
            {eyebrow ? <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>{eyebrow}</div> : null}
            {title ? <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 14, color: 'var(--fg-1)', marginTop: eyebrow ? 2 : 0 }}>{title}</div> : null}
          </div>
          {action}
        </div>
      ) : null}
      <div style={{ padding: padded ? 16 : 0, flex: 1, minWidth: 0, minHeight: 0 }}>{children}</div>
    </div>
  );
}

function KPill({ children, tone = 'neutral', style }) {
  const tones = {
    neutral: { bg: 'var(--bg-3)', fg: 'var(--fg-2)', bd: 'var(--border-1)' },
    spruce: { bg: 'var(--k-ai-spruce-12)', fg: 'var(--k-spruce-70)', bd: 'rgba(41,112,122,0.20)' },
    warm: { bg: 'var(--k-ai-warm-red-12)', fg: 'var(--k-warm-red-70)', bd: 'rgba(255,70,45,0.25)' },
    success: { bg: 'var(--k-status-success-10)', fg: 'var(--k-status-success-110)', bd: 'var(--k-status-success-20)' },
    warning: { bg: 'var(--k-status-warning-10)', fg: 'var(--k-status-warning-110)', bd: 'var(--k-status-warning-20)' },
    error: { bg: 'var(--k-status-error-10)', fg: 'var(--k-status-error-110)', bd: 'var(--k-status-error-20)' },
    info: { bg: 'var(--k-status-info-10)', fg: 'var(--k-status-info-110)', bd: 'var(--k-status-info-20)' },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 8px', borderRadius: 999, fontSize: 10.5, fontWeight: 600, background: t.bg, color: t.fg, border: `1px solid ${t.bd}`, whiteSpace: 'nowrap', ...style }}>{children}</span>
  );
}

function KEyebrow({ children, style }) {
  return <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-muted)', ...style }}>{children}</div>;
}

function KBtn({ children, kind = 'secondary', size = 'md', icon, style }) {
  const sizes = { sm: { h: 26, pad: '0 10px', fs: 11 }, md: { h: 32, pad: '0 14px', fs: 12.5 } }[size];
  const kinds = {
    primary: { bg: 'var(--k-spruce-60)', fg: '#fff', bd: 'var(--k-spruce-60)' },
    secondary: { bg: '#fff', fg: 'var(--fg-1)', bd: 'var(--border-1)' },
    danger: { bg: 'var(--k-warm-red-50)', fg: '#fff', bd: 'var(--k-warm-red-50)' },
  }[kind];
  return (
    <button style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: sizes.h, padding: sizes.pad, borderRadius: 4, fontSize: sizes.fs, fontWeight: 500, fontFamily: 'inherit', background: kinds.bg, color: kinds.fg, border: `1px solid ${kinds.bd}`, cursor: 'pointer', whiteSpace: 'nowrap', ...style }}>
      {icon ? <KIcon name={icon} size={size === 'sm' ? 12 : 14} /> : null}
      {children}
    </button>
  );
}

function KDot({ tone = 'success', size = 6 }) {
  const map = {
    success: 'var(--k-status-success-100)', warning: 'var(--k-status-warning-100)',
    error: 'var(--k-status-error-100)', info: 'var(--k-spruce-60)', muted: 'var(--fg-muted)', accent: 'var(--k-warm-red-50)',
  };
  return <span style={{ display: 'inline-block', width: size, height: size, borderRadius: 999, background: map[tone] || tone, flexShrink: 0 }}></span>;
}

function KSparkline({ points = [10, 12, 8, 14, 11, 16, 13, 18], color = 'var(--k-status-success-100)', width = 80, height = 24 }) {
  const max = Math.max(...points), min = Math.min(...points);
  const range = max - min || 1;
  const step = width / (points.length - 1);
  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${(i * step).toFixed(1)} ${(height - ((p - min) / range) * (height - 2) - 1).toFixed(1)}`).join(' ');
  return (
    <svg width={width} height={height} style={{ display: 'block', overflow: 'visible' }}>
      <path d={`${d} L ${width} ${height} L 0 ${height} Z`} fill={color} opacity="0.10"></path>
      <path d={d} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
}

Object.assign(window, { KShell, KCard, KPill, KBtn, KEyebrow, KIcon, KDot, KSparkline });
