// cocreate.jsx — co-creation layer: sticky-note callouts, blank/filled toggle
// frame, journey board, and frozen-outcome stamp.
// Exports: ActivityFrame, JourneyBoard, OutcomeFrame, ACTIVITIES

const ACTIVITIES = [
  {
    n: 1, key: "value", title: "Frame the value", time: "09:30–10:20",
    color: "#29707A", w: 1600, h: 1131,
    outcome: "7 metrics · 3 sponsor decisions",
    voices: [
      { ini: "OG", name: "Olivier Gorin", role: "Executive Sponsor", quote: "Funding stories without baselines — “better quality”, measured how?", probe: "Would this scorecard justify continued funding at steering?", validates: "targets + horizons are measurable", x: 72, y: 18, r: 1.5, component: "Sponsor decisions strip", rect: { x: 2.2, y: 78, w: 95.6, h: 17 }, response: "Yes — if every target stays a number with a date. Two baselines are still estimates; mark them as estimated and I will read all three decisions aloud and own them at steering." },
      { ini: "CW", name: "Claire Weber", role: "Head of Reg. Reporting", quote: "Defensibility is the real signal — efficiency is welcome, secondary.", probe: "Which of these metrics would you put your name against?", validates: "owners + evidence sources", x: 42, y: 68, r: -1.5, component: "Metric cards · owner & evidence rows", rect: { x: 2.2, y: 12, w: 95.6, h: 64 }, response: "Resubmission rate and correction-loop hours — both have an evidence source I control. The other five need a named owner beside them before I would defend this scorecard anywhere." },
    ],
    stickies: [
      { x: 30, y: 22, r: -2.5, head: "Confirm", text: "Every baseline gets a category: Known · Estimated · Unknown." },
      { x: 54, y: 38, r: 1.5, head: "Harden", text: "\u201cBetter quality\u201d \u2192 \u201cmeasured how?\u201d Targets must be numbers with a horizon." },
      { x: 16, y: 66, r: 2, head: "Decide", text: "Sponsor reads the card aloud and confirms 3 decisions before the room moves on." },
    ],
  },
  {
    n: 2, key: "trace", title: "Trace one loan", time: "10:20–11:35",
    color: "#3E8AC2", w: 1600, h: 1131,
    outcome: "1 loan traced · stewards named",
    voices: [
      { ini: "MH", name: "Marc Holzem", role: "Chief Risk Officer", quote: "If no one owns the meaning of a field, no one can be challenged when it drifts.", probe: "Who is accountable for this field's meaning after the handoff?", validates: "steward column — every row", x: 64, y: 14, r: -2, component: "Steward column", rect: { x: 66.5, y: 12, w: 16, h: 58 }, response: "Counterparty identification has an owner in the column — good. Three rows still say unclear, and that is exactly where meaning drifts. Name an accountable owner there before anything about them is automated; an unowned field is an unmanaged risk." },
    ],
    stickies: [
      { x: 24, y: 18, r: 2, head: "Pick", text: "One real reporting exposure — the EUR 2.4M corporate term loan." },
      { x: 52, y: 40, r: -1.5, head: "Walk", text: "Left to right per field: source → mapping → rule → steward → evidence." },
      { x: 28, y: 70, r: -2, head: "Flag", text: "No steward for a field? It cannot be automated safely. Mark it." },
    ],
  },
  {
    n: 3, key: "rules", title: "Sort the rules", time: "11:35–12:35",
    color: "#8A4FBF", w: 1600, h: 1131,
    outcome: "7 rules tagged · OPA shortlist",
    voices: [
      { ini: "MH", name: "Marc Holzem", role: "Chief Risk Officer", quote: "If deterministic rules and probabilistic suggestions blur, challenge becomes impossible.", probe: "Is anything here a suggestion pretending to be a rule?", validates: "authority tiers + rule types", x: 12, y: 46, r: 2, component: "Authority ladder", rect: { x: 2.2, y: 12, w: 22, h: 70 }, response: "Two rows are interpretations wearing rule costume — the citation column exposes them. Keep those out of the deterministic tier and the challenge function survives. That separation is what I sign." },
    ],
    stickies: [
      { x: 26, y: 20, r: -2, head: "Write", text: "Rules as testable statements — one per row, in the room's own words." },
      { x: 50, y: 36, r: 2, head: "Tag", text: "Authority 1–5 with a citation. Can't name the source? \u201cAuthority unresolved\u201d — parked." },
      { x: 70, y: 62, r: -1.5, head: "Vote", text: "Dot-vote the first OPA release: deterministic, source-backed, testable only." },
    ],
  },
  {
    n: 4, key: "gates", title: "Draw the gates", time: "13:20–14:20",
    color: "#E68A00", w: 1600, h: 1131,
    outcome: "6 gates · approvers named",
    voices: [
      { ini: "CW", name: "Claire Weber", role: "Head of Reg. Reporting", quote: "If I still need three calls to understand a red item, the UI has not solved the problem.", probe: "At T-36h, who do you actually call — and is that this map?", validates: "approvers + override paths", x: 14, y: 64, r: -2, component: "Gate cards · approver & override", rect: { x: 2.2, y: 40, w: 95.6, h: 27 }, response: "Gate four was the gap — the approver is now named, so a red item at T-36h is one call, not three. The override path is the part I will hold you to in the demo." },
    ],
    stickies: [
      { x: 22, y: 47, r: 2, head: "Define", text: "Fill each gate top to bottom: entry, check, approver, override, evidence." },
      { x: 44, y: 47, r: -2, head: "Stress", text: "Play SCN-04 — a blocking failure at T-36h — through all six gates, live." },
      { x: 78, y: 56, r: 1.5, head: "Expose", text: "Mark every gate that rests on unwritten internal policy. Those become open questions." },
    ],
  },
];

/* ---------- sticky note ---------- */

function Sticky({ s, n, color }) {
  return (
    <div style={{
      position: "absolute", left: s.x + "%", top: s.y + "%", width: 218,
      transform: `rotate(${s.r}deg)`,
      background: "#fff",
      border: "1px solid var(--border-1)",
      borderRadius: 6,
      boxShadow: "0 10px 22px rgba(15,23,42,0.16), 0 2px 5px rgba(15,23,42,0.10)",
      padding: "14px 16px 16px", zIndex: 5,
      fontFamily: "var(--font-sans)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <span style={{
          width: 22, height: 22, borderRadius: 999, background: color, color: "#fff",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, fontWeight: 700, flex: "0 0 auto",
        }}>{n}</span>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 16, color: "var(--fg-1)" }}>{s.head}</span>
      </div>
      <div style={{ fontSize: 12, lineHeight: 1.45, color: "var(--fg-2)" }}>{s.text}</div>
    </div>
  );
}

/* ---------- step pills — the 1·2·3 activity instruction sequence in banner form ---------- */

const coHexA = (hex, a) => {
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
};

// `active` highlights the step being run; `done` marks how many are complete.
function ActivityStepPills({ activity, active = -1, done = 0 }) {
  const a = activity;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0, fontFamily: "var(--font-sans)" }}>
      {a.stickies.map((s, i) => {
        const isActive = i === active;
        const isDone = !isActive && i < done;
        const dim = !isActive && !isDone && (active >= 0 || done > 0);
        return (
          <React.Fragment key={i}>
            {i > 0 ? (
              <span aria-hidden="true" style={{ color: "var(--border-2)", fontSize: 14, flex: "0 0 auto" }}>→</span>
            ) : null}
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 9, minWidth: 0,
              background: "#fff", border: `1px solid ${isActive ? a.color : "var(--border-1)"}`, borderRadius: 999,
              padding: "5px 14px 5px 6px",
              boxShadow: isActive ? `0 0 0 3px ${coHexA(a.color, 0.18)}` : "0 1px 3px rgba(15,23,42,0.06)",
              opacity: dim ? 0.45 : 1,
              transition: "opacity 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease",
            }}>
              <span style={{
                width: 22, height: 22, borderRadius: 999, background: isDone ? "var(--k-status-success-100)" : a.color, color: "#fff",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 700, flex: "0 0 auto",
              }}>{isDone ? <ProbeCheck size={10} color="#fff" /> : i + 1}</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 13.5, color: "var(--fg-1)", whiteSpace: "nowrap", flex: "0 0 auto" }}>{s.head}</span>
              <span title={s.text} style={{ fontSize: 11, color: "var(--fg-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 }}>{s.text}</span>
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ---------- persona probe — interrogation moment (blank) / validation stamp (filled) ---------- */
// `live` turns the static card into a realtime interrogation: select the
// impacted board component → ask the pre-baked probe → streamed response →
// validated, tied back to the activity outcome.

// keyframes for the live probe (blinking caret, pulsing dot)
(function () {
  if (document.getElementById("co-live-kf")) return;
  const st = document.createElement("style");
  st.id = "co-live-kf";
  st.textContent = "@keyframes coBlink{0%,100%{opacity:1}50%{opacity:0}}@keyframes coPulse{0%,100%{opacity:1}50%{opacity:0.3}}";
  document.head.appendChild(st);
})();

function ProbeCrosshair({ size = 11 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" style={{ flexShrink: 0 }}>
      <circle cx="16" cy="16" r="8"></circle>
      <path d="M16 2v6M16 24v6M2 16h6M24 16h6"></path>
    </svg>
  );
}

function ProbeCheck({ size = 11, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M6 16l6 6 14-14"></path>
    </svg>
  );
}

// dashed spotlight over the board region the probe interrogates
function ProbeSpotlight({ rect, label, done }) {
  const c = done ? "var(--k-status-success-100)" : "var(--k-spruce-60)";
  return (
    <div style={{
      position: "absolute", left: rect.x + "%", top: rect.y + "%", width: rect.w + "%", height: rect.h + "%",
      zIndex: 4, pointerEvents: "none",
      border: `2px dashed ${c}`, borderRadius: 10,
      background: done ? "rgba(30,150,80,0.04)" : "var(--k-ai-spruce-06)",
      boxShadow: done ? "0 0 0 4px rgba(30,150,80,0.08)" : "0 0 0 4px rgba(41,112,122,0.10)",
    }}>
      <span style={{
        position: "absolute", top: -12, left: 14, display: "inline-flex", alignItems: "center", gap: 6,
        background: c, color: "#fff", borderRadius: 999, padding: "3px 11px",
        fontSize: 9.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
        fontFamily: "var(--font-sans)", whiteSpace: "nowrap",
      }}>
        {done ? <ProbeCheck size={10} color="#fff" /> : <ProbeCrosshair size={10} />}
        {label} · {done ? "validated" : "selected"}
      </span>
    </div>
  );
}

/* photo-aware avatar for probe tiles — falls back to initials */
const CO_PHOTOS = {
  CW: "assets/personas/claire.png", TR: "assets/personas/tom.png", AM: "assets/personas/ana.png",
  MH: "assets/personas/marc.png", PF: "assets/personas/paul.png", OG: "assets/personas/olivier.jpg",
  DS: "assets/personas/david.png",
};
function CoAvatar({ ini, name, size = 26, radius = 6, ring }) {
  const photo = CO_PHOTOS[ini];
  if (photo) {
    return <img src={photo} alt={name || ini} style={{
      width: size, height: size, borderRadius: radius, objectFit: "cover", display: "block",
      flex: "0 0 auto", border: ring ? `2px solid ${ring}` : "none", boxSizing: "border-box",
    }} />;
  }
  return <span style={{
    width: size, height: size, borderRadius: radius, background: "var(--k-ai-spruce-12)", color: "var(--k-spruce-70)",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    fontFamily: "var(--font-display)", fontWeight: 500, fontSize: Math.round(size * 0.42), flex: "0 0 auto",
    border: ring ? `2px solid ${ring}` : "none", boxSizing: "border-box",
  }}>{ini}</span>;
}

function PersonaProbeLive({ v, outcome, forceStage }) {
  const [stage, setStage] = React.useState("idle"); // idle → armed → asking → validated
  const [typed, setTyped] = React.useState(0);
  const first = v.name.split(" ")[0];
  const resp = v.response || "";

  // external drive: the walkthrough navigation steps the probe through its phases
  React.useEffect(() => {
    if (forceStage === undefined) return;
    if (forceStage === "idle") { setTyped(0); setStage("idle"); }
    else if (forceStage === "armed") { setTyped(0); setStage("armed"); }
    else if (forceStage === "ask") setStage((st) => (st === "asking" || st === "validated" ? st : "asking"));
  }, [forceStage]);

  React.useEffect(() => {
    if (stage !== "asking") return;
    const id = setInterval(() => setTyped((t) => Math.min(t + 3, resp.length)), 26);
    return () => clearInterval(id);
  }, [stage]);

  React.useEffect(() => {
    if (stage === "asking" && resp.length > 0 && typed >= resp.length) {
      const id = setTimeout(() => setStage("validated"), 650);
      return () => clearTimeout(id);
    }
  }, [stage, typed]);

  const idle = stage === "idle";
  const done = stage === "validated";
  const streaming = stage === "asking";
  const reset = () => { setTyped(0); setStage("idle"); };

  const eyebrowChip = done
    ? { text: "validated", bg: "var(--k-status-success-10)", fg: "var(--k-status-success-110)" }
    : streaming
      ? { text: "responding", bg: "var(--k-ai-spruce-12)", fg: "var(--k-spruce-70)", pulse: true }
      : stage === "armed"
        ? { text: "component selected", bg: "var(--k-ai-spruce-12)", fg: "var(--k-spruce-70)" }
        : { text: "live", bg: "var(--bg-3)", fg: "var(--fg-muted)" };

  return (
    <React.Fragment>
      {!idle && v.rect ? <ProbeSpotlight rect={v.rect} label={v.component} done={done} /> : null}
      <div
        onClick={idle ? () => setStage("armed") : undefined}
        style={{
          position: "absolute", left: v.x + "%", top: v.y + "%", width: idle ? 258 : 304,
          transform: `rotate(${idle ? v.r : 0}deg)`,
          background: "#fff", borderLeft: `4px solid ${done ? "var(--k-status-success-100)" : "var(--k-spruce-60)"}`,
          boxShadow: idle ? "0 10px 24px rgba(15,23,42,0.18), 0 2px 5px rgba(15,23,42,0.10)" : "0 18px 44px rgba(15,23,42,0.26), 0 3px 8px rgba(15,23,42,0.12)",
          padding: "11px 14px 12px", zIndex: idle ? 5 : 8, borderRadius: "0 6px 6px 0",
          fontFamily: "var(--font-sans)", cursor: idle ? "pointer" : "default",
          transition: "box-shadow 0.2s ease",
        }}>

        {/* eyebrow + live status */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 7 }}>
          <span style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--k-spruce-70)" }}>Interrogate · validate</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: eyebrowChip.bg, color: eyebrowChip.fg, borderRadius: 999, padding: "2px 8px", fontSize: 8.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            <span style={{ width: 5, height: 5, borderRadius: 999, background: "currentColor", animation: eyebrowChip.pulse ? "coPulse 1s ease-in-out infinite" : "none" }}></span>
            {eyebrowChip.text}
          </span>
        </div>

        {/* impacted persona */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
          <CoAvatar ini={v.ini} name={v.name} size={30} radius={6} />
          <span style={{ minWidth: 0 }}>
            <span style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--fg-1)", lineHeight: 1.1 }}>{v.name}</span>
            <span style={{ display: "block", fontSize: 10, color: "var(--fg-muted)" }}>{idle ? `${v.role} · synthetic` : `Impacted persona · ${v.role}`}</span>
          </span>
        </div>

        {idle ? (
          <React.Fragment>
            <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 12, lineHeight: 1.35, color: "var(--fg-muted)" }}>&ldquo;{v.quote}&rdquo;</div>
            <button style={{
              marginTop: 9, width: "100%", display: "flex", alignItems: "center", gap: 8, textAlign: "left",
              background: "var(--k-ai-spruce-06)", border: "1px dashed var(--k-spruce-60)", borderRadius: 6,
              padding: "7px 10px", cursor: "pointer", fontFamily: "var(--font-sans)", color: "var(--k-spruce-70)",
            }}>
              <span style={{ width: 16, height: 16, borderRadius: 999, background: "var(--k-spruce-60)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, flex: "0 0 auto" }}>1</span>
              <ProbeCrosshair />
              <span style={{ fontSize: 10.5, fontWeight: 600, minWidth: 0 }}>Select on board · <span style={{ color: "var(--fg-1)" }}>{v.component}</span></span>
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* selected component chip */}
            <div style={{ display: "flex", alignItems: "center", gap: 7, background: "var(--k-ai-spruce-12)", borderRadius: 6, padding: "5px 9px", marginBottom: 8 }}>
              <ProbeCheck size={10} color="var(--k-spruce-70)" />
              <span style={{ fontSize: 10, fontWeight: 600, color: "var(--k-spruce-70)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.component} · selected on board</span>
            </div>

            {/* the pre-baked question */}
            <div style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 3 }}>You ask</div>
            <div style={{ fontSize: 12, fontWeight: 500, color: "var(--fg-1)", lineHeight: 1.4 }}>{v.probe}</div>

            {stage === "armed" ? (
              <button onClick={() => setStage("asking")} style={{
                marginTop: 9, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "var(--k-spruce-60)", border: "none", borderRadius: 6, padding: "8px 12px",
                cursor: "pointer", fontFamily: "var(--font-sans)", color: "#fff", fontSize: 11.5, fontWeight: 600,
              }}>
                <span style={{ width: 16, height: 16, borderRadius: 999, background: "rgba(255,255,255,0.22)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700 }}>2</span>
                Ask {first} →
              </button>
            ) : (
              <div style={{ borderTop: "1px solid var(--bg-3)", marginTop: 8, paddingTop: 8 }}>
                <div style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--k-spruce-70)", marginBottom: 3 }}>
                  {first} {streaming ? "· responding · grounded in transcripts" : "· answered"}
                </div>
                <div style={{ fontSize: 11.5, lineHeight: 1.45, color: "var(--fg-2)", minHeight: 32 }}>
                  {resp.slice(0, streaming ? typed : resp.length)}
                  {streaming ? <span style={{ display: "inline-block", width: 6, height: 11, background: "var(--k-spruce-60)", marginLeft: 2, verticalAlign: "-1px", animation: "coBlink 0.8s steps(1) infinite" }}></span> : null}
                </div>
              </div>
            )}

            {done ? (
              <div style={{ borderTop: "1px solid var(--bg-3)", marginTop: 8, paddingTop: 8 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
                  <span style={{ paddingTop: 2 }}><ProbeCheck size={11} color="var(--k-status-success-110)" /></span>
                  <span style={{ fontSize: 10.5, lineHeight: 1.4, color: "var(--fg-2)" }}>
                    <strong style={{ color: "var(--k-status-success-110)", fontWeight: 600 }}>Validated</strong> — {v.validates}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginTop: 6 }}>
                  <span style={{ fontSize: 10, color: "var(--fg-muted)", minWidth: 0 }}>→ counts toward outcome · <strong style={{ color: "var(--fg-1)", fontWeight: 500 }}>{outcome}</strong></span>
                  <button onClick={reset} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 9.5, fontWeight: 600, color: "var(--fg-muted)", textDecoration: "underline", flex: "0 0 auto" }}>redo</button>
                </div>
              </div>
            ) : null}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

function PersonaProbe({ v, filled, live, outcome, forceStage }) {
  if (filled) {
    return (
      <div style={{
        position: "absolute", left: v.x + "%", top: v.y + "%", zIndex: 5,
        display: "flex", alignItems: "center", gap: 7,
        background: "#fff", border: "1px solid var(--k-status-success-20)", borderRadius: 999,
        padding: "4px 12px 4px 5px", boxShadow: "0 4px 12px rgba(15,23,42,0.14)",
        fontFamily: "var(--font-sans)", transform: `rotate(${v.r / 2}deg)`,
      }}>
        <CoAvatar ini={v.ini} name={v.name} size={22} radius={999} />
        <svg width="11" height="11" viewBox="0 0 32 32" fill="none" stroke="var(--k-status-success-110)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M6 16l6 6 14-14"></path></svg>
        <span style={{ fontSize: 10.5, color: "var(--fg-2)", whiteSpace: "nowrap" }}>
          <strong style={{ color: "var(--k-status-success-110)", fontWeight: 600 }}>Validated</strong> with {v.name.split(" ")[0]} — {v.validates}
        </span>
      </div>
    );
  }
  if (live) return <PersonaProbeLive v={v} outcome={outcome} forceStage={forceStage} />;
  return (
    <div style={{
      position: "absolute", left: v.x + "%", top: v.y + "%", width: 258,
      transform: `rotate(${v.r}deg)`,
      background: "#fff", borderLeft: "4px solid var(--k-spruce-60)",
      boxShadow: "0 10px 24px rgba(15,23,42,0.18), 0 2px 5px rgba(15,23,42,0.10)",
      padding: "11px 14px 12px", zIndex: 5, borderRadius: "0 6px 6px 0",
      fontFamily: "var(--font-sans)",
    }}>
      <div style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--k-spruce-70)", marginBottom: 7 }}>Interrogate · validate</div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
        <CoAvatar ini={v.ini} name={v.name} size={30} radius={6} />
        <span style={{ minWidth: 0 }}>
          <span style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--fg-1)", lineHeight: 1.1 }}>{v.name}</span>
          <span style={{ display: "block", fontSize: 10, color: "var(--fg-muted)" }}>{v.role} · synthetic</span>
        </span>
      </div>
      <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 12, lineHeight: 1.35, color: "var(--fg-muted)" }}>&ldquo;{v.quote}&rdquo;</div>
      <div style={{ borderTop: "1px solid var(--bg-3)", marginTop: 8, paddingTop: 8 }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: "var(--fg-1)", lineHeight: 1.4 }}>Ask: {v.probe}</div>
        <div style={{ fontSize: 10.5, color: "var(--fg-muted)", marginTop: 4 }}>Validates → <span style={{ color: "var(--k-spruce-70)", fontWeight: 600 }}>{v.validates}</span></div>
      </div>
      <div style={{ marginTop: 8, fontSize: 10.5, fontWeight: 600, color: "var(--k-spruce-70)" }}>Talk to persona →</div>
    </div>
  );
}

/* ---------- blank/filled toggle frame ---------- */
// Uncontrolled by default (own header + toggle). Pass `filled` + `onToggle`
// to control it externally, and `chrome={false}` to hide the header bar.
// `stickies={false}` suppresses the numbered on-board step cards (e.g. when the
// host surface shows the same sequence as ActivityStepPills in its own banner).
function ActivityFrame({ activity, filled: filledProp, onToggle, chrome = true, stickies = true, live = false, probeStages, children }) {
  const [filledState, setFilledState] = React.useState(false);
  const controlled = filledProp !== undefined;
  const filled = controlled ? filledProp : filledState;
  const toggle = () => (controlled ? (onToggle && onToggle(!filled)) : setFilledState(!filled));
  const a = activity;
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "var(--bg-3)" }}>
      {chrome ? (
      <div style={{
        height: 56, flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 20px", background: "var(--k-dark-stone-90)", color: "#fff", fontFamily: "var(--font-sans)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{
            width: 30, height: 30, borderRadius: 999, background: a.color, color: "#fff",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 15,
          }}>{a.n}</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 17 }}>{a.title}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,255,255,0.55)" }}>{a.time}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {!filled ? (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10.5, color: "rgba(255,255,255,0.65)" }}>
              <span style={{ width: 13, height: 13, background: "var(--k-ai-spruce-06)", border: "1px solid var(--k-ai-spruce-20)", borderRadius: 3, flex: "0 0 auto" }}></span>
              tinted = room input
            </span>
          ) : null}
          <span style={{ display: "flex", alignItems: "center", marginRight: 2 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, marginRight: 9, fontSize: 9.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9FCCD4" }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--k-spruce-40)" }}></span>
              AI personas
            </span>
            {(a.voices || []).map((v, i) => (
              <span key={v.ini + i} title={v.name} style={{ display: "inline-flex", marginLeft: i > 0 ? -7 : 0 }}>
                <CoAvatar ini={v.ini} name={v.name} size={26} radius={999} ring="var(--k-dark-stone-90)" />
              </span>
            ))}
          </span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>→ {a.outcome}</span>
          <div style={{ display: "flex", background: "rgba(255,255,255,0.10)", borderRadius: 999, padding: 3, cursor: "pointer" }} onClick={toggle}>
            <span style={{
              padding: "5px 14px", borderRadius: 999, fontSize: 11.5, fontWeight: 600,
              background: !filled ? "#fff" : "transparent", color: !filled ? "var(--k-dark-stone-90)" : "rgba(255,255,255,0.65)",
            }}>Co-creation</span>
            <span style={{
              padding: "5px 14px", borderRadius: 999, fontSize: 11.5, fontWeight: 600,
              background: filled ? "#fff" : "transparent", color: filled ? "var(--k-dark-stone-90)" : "rgba(255,255,255,0.65)",
            }}>Outcome</span>
          </div>
        </div>
      </div>
      ) : null}
      <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
        {children(filled)}
        {stickies && !filled ? a.stickies.map((s, i) => <Sticky key={i} s={s} n={i + 1} color={a.color} />) : null}
        {(a.voices || []).map((v, i) => <PersonaProbe key={"v" + i} v={v} filled={filled} live={live} outcome={a.outcome} forceStage={probeStages ? probeStages[i] : undefined} />)}
      </div>
    </div>
  );
}

/* ---------- outcome frame (demo contract) ---------- */

function OutcomeFrame({ children }) {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {children}
    </div>
  );
}

/* ---------- day overview — 00–05 centerpiece intro ---------- */

const DAY_GROUPS = [
  { n: "00", time: "pre-work", title: "The cohort", icon: "cohort", desc: "10 synthetic personas from pre-work", outcome: "cohort live · probes pinned", color: "#5BA2AE", kind: "pre" },
  { n: "01", time: "09:30–10:20", title: "Frame the value", icon: "value", desc: "Baselines and targets, owned", outcome: "7 metrics · 3 sponsor decisions", color: "#29707A" },
  { n: "02", time: "10:20–11:35", title: "Trace one loan", icon: "trace", desc: "One real exposure, field by field", outcome: "1 loan traced · stewards named", color: "#3E8AC2" },
  { n: "03", time: "11:35–12:35", title: "Sort what rules apply", icon: "rules", desc: "Testable rules, tagged by authority", outcome: "7 rules tagged · OPA shortlist", color: "#8A4FBF" },
  { n: "04", time: "13:20–14:20", title: "Draw the gates", icon: "gates", desc: "Six control gates, stress-played", outcome: "6 gates · approvers named", color: "#E68A00" },
  { n: "05", time: "16:10–17:00", title: "Envisioned target state", icon: "target", desc: "Demo contract frozen for the build", outcome: "demo contract · P0 frozen", color: "#FF462D", kind: "target" },
];

function DayMoveIcon({ kind, color }) {
  const s = { stroke: color, strokeWidth: 2, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" };
  let g = null;
  if (kind === "cohort") {
    g = <g {...s}>
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M4 26c0-4.4 3.6-7 8-7s8 2.6 8 7"></path>
      <circle cx="23" cy="11" r="3"></circle>
      <path d="M22 17.5c3.5 0.3 6 2.5 6 5.8"></path>
    </g>;
  } else if (kind === "value") {
    g = <g {...s}>
      <path d="M5 27V14M12 27V8M19 27v-9M26 27V11"></path>
      <path d="M5 9l7-4 7 5 7-4" opacity="0.55"></path>
    </g>;
  } else if (kind === "trace") {
    g = <g {...s}>
      <circle cx="6" cy="7" r="2.5"></circle>
      <circle cx="26" cy="25" r="2.5"></circle>
      <path d="M8.5 7H18a4 4 0 014 4v3a4 4 0 01-4 4h-6a4 4 0 00-4 4v0a3 3 0 003 3h12.5"></path>
    </g>;
  } else if (kind === "rules") {
    g = <g {...s}>
      <path d="M5 7h4M5 16h4M5 25h4"></path>
      <path d="M13 7h14M13 16h14M13 25h8" opacity="0.55"></path>
      <path d="M22.5 22.5l2.5 2.5 4.5-5"></path>
    </g>;
  } else if (kind === "gates") {
    g = <g {...s}>
      <path d="M4 16h7M21 16h7"></path>
      <rect x="11" y="9" width="10" height="14" rx="2"></rect>
      <path d="M14.5 16.5l2 2 3.5-4"></path>
    </g>;
  } else {
    g = <g {...s}>
      <circle cx="16" cy="16" r="11"></circle>
      <circle cx="16" cy="16" r="6" opacity="0.55"></circle>
      <circle cx="16" cy="16" r="1.6" fill={color} stroke="none"></circle>
    </g>;
  }
  return <svg width="34" height="34" viewBox="0 0 32 32" style={{ display: "block" }} aria-hidden="true">{g}</svg>;
}

function DayOverviewBoard() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#fff", fontFamily: "var(--font-sans)", display: "flex", flexDirection: "column", padding: "56px 64px 48px", boxSizing: "border-box" }}>
      {/* heading */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg-muted)" }}>AnaCredit co-creation day · BiL × Kyndryl Vital</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 50, color: "var(--fg-1)", letterSpacing: "-0.015em", marginTop: 8, lineHeight: 1.08 }}>
            One day, six moves —<br />co-created, interrogated, validated.
          </div>
          <div style={{ fontSize: 15.5, color: "var(--fg-2)", marginTop: 12, lineHeight: 1.5, maxWidth: "74ch", textWrap: "pretty" }}>
            How we derisk BiL's move to agentic AI: we co-create every decision with <strong style={{ color: "var(--fg-1)" }}>AI stand-ins for the people who'll be accountable</strong>, interrogate each output live, and freeze only what survives.
          </div>
        </div>
        <span style={{ flex: "0 0 auto", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--k-warm-red-50)", border: "1px solid rgba(255,70,45,0.4)", background: "rgba(255,70,45,0.06)", borderRadius: 999, padding: "8px 18px", whiteSpace: "nowrap" }}>
            00 → 05 · ends in a frozen demo contract
        </span>
      </div>

      {/* six moves */}
      <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "stretch", gap: 0, marginTop: 44 }}>
        {DAY_GROUPS.map((g, i) => {
          const target = g.kind === "target";
          const pre = g.kind === "pre";
          return (
            <React.Fragment key={g.n}>
              <div style={{
                flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 10,
                background: target ? "var(--k-dark-stone-90)" : pre ? "var(--k-ai-spruce-06)" : "#fff",
                border: `1px solid ${target ? "var(--k-dark-stone-90)" : "var(--border-1)"}`,
                borderTop: `4px solid ${g.color}`, borderRadius: 12, padding: "20px 20px 18px",
                boxShadow: "0 1px 4px rgba(15,23,42,0.06)",
              }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 44, lineHeight: 1, color: g.color }}>{g.n}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: target ? "rgba(255,255,255,0.55)" : "var(--fg-muted)", whiteSpace: "nowrap" }}>{g.time}</span>
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 21, lineHeight: 1.15, color: target ? "#fff" : "var(--fg-1)" }}>{g.title}</div>
                <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, padding: "12px 0 4px" }}>
                  <DayMoveIcon kind={g.icon} color={g.color} />
                  <span style={{ fontSize: 12.5, lineHeight: 1.4, color: target ? "rgba(255,255,255,0.7)" : "var(--fg-2)", textWrap: "pretty" }}>{g.desc}</span>
                </div>
                <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 7, borderTop: `1px solid ${target ? "rgba(255,255,255,0.14)" : "var(--bg-2)"}`, paddingTop: 12 }}>
                  <ProbeCheck size={11} color="var(--k-status-success-100)" />
                  <span style={{ fontSize: 11.5, fontWeight: 600, color: target ? "#fff" : "var(--fg-1)", lineHeight: 1.3 }}>{g.outcome}</span>
                </div>
              </div>
              {i < DAY_GROUPS.length - 1 ? (
                <span style={{ alignSelf: "center", color: "var(--fg-subtle)", fontSize: 20, padding: "0 10px", flex: "0 0 auto" }}>→</span>
              ) : null}
            </React.Fragment>
          );
        })}
      </div>

      {/* how every move runs */}
      <div style={{ flex: "0 0 auto", marginTop: 36, background: "var(--k-dark-stone-90)", borderRadius: 12, display: "flex", alignItems: "center", gap: 24, padding: "18px 28px", color: "#fff" }}>
        <div style={{ flex: "0 0 auto" }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>How every move runs</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 19, marginTop: 3 }}>Validated live, on the board</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0, flex: 1, justifyContent: "center" }}>
          {[
            ["1", "Co-create", "the room fills the board, step by step"],
            ["2", "Interrogate", "select a component · ask the impacted AI persona"],
            ["3", "Validate", "the answer is tied to the outcome — frozen"],
          ].map(([n, h, t], i) => (
            <React.Fragment key={n}>
              {i > 0 ? <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 15 }}>→</span> : null}
              <span style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 999, padding: "7px 16px 7px 8px" }}>
                <span style={{ width: 22, height: 22, borderRadius: 999, background: "var(--k-warm-red-50)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flex: "0 0 auto" }}>{n}</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 14.5, whiteSpace: "nowrap" }}>{h}</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", whiteSpace: "nowrap" }}>{t}</span>
              </span>
            </React.Fragment>
          ))}
        </div>
        <span style={{ flex: "0 0 auto", fontFamily: "var(--font-mono)", fontSize: 10.5, color: "rgba(255,255,255,0.55)" }}>P-BIL-01…10 · synthetic AI cohort validates every move</span>
      </div>
    </div>
  );
}

/* ---------- journey board ---------- */

function MiniBoard({ kind, color }) {
  // tiny abstract glyph of each template
  const cell = (x, y, w, h, f) => <rect key={`${x}-${y}-${w}-${h}-${f || "g"}`} x={x} y={y} width={w} height={h} rx="1.5" fill={f || "#E2E4E7"}></rect>;
  let inner = null;
  if (kind === "value") {
    inner = <g>{[0, 1, 2, 3].map((r) => [0, 1, 2, 3, 4].map((c) => cell(8 + c * 21, 14 + r * 13, 17, 9, c === 0 ? color : undefined)))}</g>;
  } else if (kind === "trace") {
    inner = <g>
      {[0, 1, 2].map((r) => cell(8, 14 + r * 16, 24, 12, color))}
      {[0, 1, 2].map((r) => [0, 1, 2].map((c) => cell(38 + c * 25, 14 + r * 16, 21, 12)))}
      <path d="M34 20 h2 M34 36 h2 M34 52 h2" stroke={color} strokeWidth="1.5"></path>
    </g>;
  } else if (kind === "rules") {
    inner = <g>
      {[0, 1, 2, 3].map((r) => <g key={r}>
        {cell(8, 12 + r * 13, 10, 9, color)}
        {cell(22, 12 + r * 13, 50, 9)}
        <circle cx="82" cy={16.5 + r * 13} r="4.5" fill={r < 3 ? color : "#E2E4E7"}></circle>
      </g>)}
    </g>;
  } else if (kind === "gates") {
    inner = <g>
      {[0, 1, 2, 3].map((c) => <g key={c}>
        {cell(8 + c * 24, 16, 18, 34, c % 2 ? "#E2E4E7" : undefined)}
        {cell(8 + c * 24, 16, 18, 7, color)}
        {c < 3 ? <path d={`M${27 + c * 24} 33 l4 0`} stroke={color} strokeWidth="2"></path> : null}
      </g>)}
    </g>;
  } else {
    inner = <g>
      {[0, 1, 2].map((r) => cell(8, 12 + r * 14, 64, 10))}
      <path d="M76 18 l5 5 9 -11" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
    </g>;
  }
  return (
    <svg width="96" height="66" viewBox="0 0 96 66" style={{ display: "block" }}>
      <rect x="1" y="1" width="94" height="64" rx="6" fill="#fff" stroke="#D8DBDE"></rect>
      {inner}
    </svg>
  );
}

function JourneyBoard() {
  const steps = ACTIVITIES.map((a) => ({ ...a, kind: a.key }));
  return (
    <div style={{
      width: "100%", height: "100%", background: "#fff", fontFamily: "var(--font-sans)",
      display: "flex", flexDirection: "column", padding: "44px 56px 40px", boxSizing: "border-box",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg-muted)" }}>AnaCredit co-creation day · BiL × Kyndryl</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 44, color: "var(--fg-1)", letterSpacing: "-0.015em", marginTop: 6 }}>
            Four activities. One demo contract.
          </div>
        </div>
        <img src="assets/kyndryl-vital-logo.png" alt="Kyndryl Vital" style={{ height: 36, marginTop: 10 }} />
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 0, marginTop: 8 }}>
        {steps.map((a, i) => (
          <React.Fragment key={a.key}>
            <div style={{
              flex: 1, border: "1px solid var(--border-1)", borderTop: `5px solid ${a.color}`,
              borderRadius: 10, padding: "22px 22px 20px", display: "flex", flexDirection: "column", gap: 14,
              background: "#fff", boxShadow: "0 1px 3px rgba(15,23,42,0.05)",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 40, color: a.color, lineHeight: 1 }}>{"0" + a.n}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)" }}>{a.time}</span>
              </div>
              <MiniBoard kind={a.kind} color={a.color} />
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22, color: "var(--fg-1)" }}>{a.title}</div>
                <div style={{ fontSize: 12.5, color: "var(--fg-muted)", marginTop: 5 }}>→ {a.outcome}</div>
              </div>
            </div>
            <div style={{ flex: "0 0 36px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--fg-subtle)", fontSize: 22 }}>→</div>
          </React.Fragment>
        ))}
        <div style={{
          flex: 1.15, borderRadius: 10, padding: "22px 22px 20px",
          background: "var(--k-dark-stone-90)", color: "#fff",
          display: "flex", flexDirection: "column", gap: 14, boxShadow: "0 8px 24px rgba(15,23,42,0.25)",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 40, color: "var(--k-warm-red-40)", lineHeight: 1 }}>05</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>16:10–17:00</span>
          </div>
          <MiniBoard kind="contract" color="#FF462D" />
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22 }}>Freeze the demo</div>
            <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.6)", marginTop: 5 }}>→ P0 scope, owners named, sprint 1 starts</div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, fontSize: 13, color: "var(--fg-muted)" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 26, height: 16, background: "#fff", border: "1px solid var(--border-1)", borderRadius: 3, boxShadow: "0 1px 3px rgba(15,23,42,0.18)", display: "inline-block" }}></span>
          <span>Boards start <strong style={{ color: "var(--fg-1)" }}>blank with stickies</strong> — <span style={{ background: "var(--k-ai-spruce-06)", border: "1px solid var(--k-ai-spruce-20)", borderRadius: 3, padding: "1px 6px" }}>tinted cells</span> mark where the room writes — and toggle to the <strong style={{ color: "var(--fg-1)" }}>filled outcome</strong>.</span>
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "flex" }}>
            {["CW", "TR", "AM", "MH", "SK", "PF", "EH", "HL", "DS", "MJ"].map((ini, i) => (
              <span key={ini} style={{ display: "inline-flex", marginLeft: i > 0 ? -6 : 0 }}>
                <CoAvatar ini={ini} size={26} radius={999} ring="#fff" />
              </span>
            ))}
          </span>
          <span>Persona probes pinned on every board <strong style={{ color: "var(--fg-1)" }}>interrogate the template and validate the outcome</strong>.</span>
        </span>
      </div>
    </div>
  );
}

Object.assign(window, { ActivityFrame, ActivityStepPills, JourneyBoard, OutcomeFrame, ACTIVITIES, Sticky, PersonaProbe, DayOverviewBoard });
