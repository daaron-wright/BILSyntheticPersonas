// contract-stage.jsx — "Freeze the demo" as a widescreen interactive stage
// (2300×1180). Eight demo moments as large clickable cards; Before (workshop
// close) / After (hand-off) toggle; click any moment to expand full contract
// detail beside its near-full-size wireframe. Exports: DemoContractStage
// Uses: DEMO_MOMENTS + DC_BUILT_FROM (canvases-c), TOBE_STEPS + Portal* (tobe-journey / portal).

const DCS_W = 2300, DCS_H = 1380;

// demo moment → wireframe index in TOBE_STEPS (null = next increment)
const DCS_WF = [0, 1, 1, 1, 2, 3, 3, null];

// walkthrough trim — show only the core agentic loop (validate → AI suggests →
// human approves → evidence). Indices into the global DEMO_MOMENTS (8).
const DCS_FEATURED = [1, 3, 4, 5];
// wireframe shown per featured moment (override keeps the three screens distinct)
const DCS_WF_BY_MOMENT = { 1: 1, 3: 2, 4: 2, 5: 3 };

// personas who validated each board the contract is built from
const DCS_RAIL_VOICES = { "BRD-01": ["HL", "CW"], "BRD-02": ["MH"], "BRD-03": ["MH"], "BRD-04": ["CW"] };

function DcsCheck({ size = 10 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="var(--k-status-success-110)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M6 16l6 6 14-14"></path></svg>
  );
}

function DcsThumb({ wfIdx, w, onClick, caption }) {
  const steps = window.TOBE_STEPS || [];
  const step = steps[wfIdx] || {};
  const C = window[step.comp];
  const scale = w / 1440;
  return (
    <div onClick={onClick} style={{ width: w, height: Math.round(900 * scale), overflow: "hidden", borderRadius: 8, border: "1px solid var(--border-1)", position: "relative", background: "var(--bg-2)", cursor: "pointer", flex: "0 0 auto" }}>
      <div style={{ width: 1440, height: 900, transform: `scale(${scale})`, transformOrigin: "top left", pointerEvents: "none" }}>{C ? <C /> : null}</div>
      <div style={{ position: "absolute", right: 8, bottom: 8, background: "rgba(20,22,25,0.78)", color: "#fff", fontSize: 10, fontWeight: 600, padding: "3px 9px", borderRadius: 999 }}>{step.wf} · expand ⤢</div>
      {caption ? (
        <div style={{ position: "absolute", left: 8, bottom: 8, maxWidth: "62%", background: "rgba(20,22,25,0.78)", color: "rgba(255,255,255,0.92)", fontSize: 9.5, fontStyle: "italic", padding: "3px 10px", borderRadius: 999, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{caption}</div>
      ) : null}
    </div>
  );
}

function DcsCard({ m, i, wfIdx, after, onOpen }) {
  const steps = window.TOBE_STEPS || [];
  const wfStep = wfIdx !== null && wfIdx !== undefined ? steps[wfIdx] : null;
  return (
    <div onClick={() => onOpen(i)} style={{
      background: "#fff", border: "1px solid var(--border-1)", borderTop: `4px solid ${m.prio === "P0" ? "var(--k-warm-red-50)" : "var(--k-cool-gray-40)"}`,
      borderRadius: 12, padding: "16px 18px 14px", display: "flex", flexDirection: "column", gap: 10, minWidth: 0,
      boxShadow: "0 1px 4px rgba(15,23,42,0.06)", cursor: "pointer",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 34, lineHeight: 1, color: m.prio === "P0" ? "var(--k-warm-red-50)" : "var(--fg-muted)" }}>D{i + 1}</span>
        <span style={{ minWidth: 0, flex: 1 }}>
          <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 19, color: "var(--fg-1)", lineHeight: 1.1 }}>{m.m}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 3, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--k-spruce-70)" }}>← {m.ref}</span>
            {wfStep
              ? <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "var(--font-mono)", fontSize: 9.5, color: "#8A4FBF", border: "1px solid rgba(138,79,191,0.35)", borderRadius: 999, padding: "1px 8px" }}>▣ {wfStep.wf} · {wfStep.title} ⤤</span>
              : <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "var(--fg-subtle)", border: "1px dashed var(--border-2)", borderRadius: 999, padding: "1px 8px" }}>screen · next increment</span>}
          </span>
        </span>
        <span className="pill eg-pick" style={{ fontSize: 12, padding: "3px 12px", flex: "0 0 auto", background: m.prio === "P0" ? "rgba(255,70,45,0.08)" : undefined, borderColor: m.prio === "P0" ? "var(--k-warm-red-50)" : undefined, color: m.prio === "P0" ? "var(--k-warm-red-60, #D63A24)" : undefined }}>{m.prio}</span>
      </div>
      {after ? (
        wfIdx !== null
          ? <DcsThumb wfIdx={wfIdx} w={486} caption={`“${m.principle}” — ${m.ini}`} onClick={(e) => { e.stopPropagation(); onOpen(i); }} />
          : <div style={{ height: 304, borderRadius: 8, border: "1px dashed var(--border-2)", background: "var(--bg-2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, padding: "0 24px", textAlign: "center" }}>
              <span style={{ fontSize: 13, color: "var(--fg-muted)" }}>P1 · designed in the next increment</span>
              <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 11.5, color: "var(--fg-2)", lineHeight: 1.4 }}>“{m.principle}” — {m.who}</span>
            </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
          <div style={{ fontSize: 14.5, color: "var(--fg-1)", lineHeight: 1.4, textWrap: "pretty" }}>{m.prove}</div>
          <div style={{ display: "grid", gridTemplateColumns: "92px 1fr", gap: "5px 10px", fontSize: 12 }}>
            {[["Data", m.data], ["Rule / policy", m.rule], ["Evidence", m.evidence]].map(([k, v]) => (
              <React.Fragment key={k}>
                <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", paddingTop: 2 }}>{k}</span>
                <span style={{ color: "var(--fg-2)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v}</span>
              </React.Fragment>
            ))}
          </div>
          {/* human-led principle — what the previous work taught us, cited */}
          <div style={{ marginTop: "auto", background: "var(--k-ai-spruce-06)", border: "1px solid var(--k-ai-spruce-20)", borderRadius: 8, padding: "8px 11px", display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
              <span style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--k-spruce-70)" }}>Human-led principle</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 8.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--k-status-success-110)" }}><DcsCheck size={9} /> validated in the room</span>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 12.5, lineHeight: 1.35, color: "var(--fg-1)" }}>&ldquo;{m.principle}&rdquo;</div>
            <div style={{ fontSize: 10.5, color: "var(--fg-muted)", lineHeight: 1.4 }}><strong style={{ color: "var(--fg-2)", fontWeight: 600 }}>Pain it retires</strong> — {m.pain}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 1 }}>
              <span style={{ width: 16, height: 16, borderRadius: 999, background: "var(--k-ai-spruce-12)", color: "var(--k-spruce-70)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 7.5, fontWeight: 700, flex: "0 0 auto" }}>{m.ini}</span>
              <span style={{ fontSize: 10, color: "var(--k-spruce-70)", fontWeight: 600, whiteSpace: "nowrap" }}>{m.who}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--fg-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 }}>← {m.cite}</span>
            </div>
          </div>
          {/* per-tile co-creation sketch — user-uploaded */}
          <div onClick={(e) => e.stopPropagation()} style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: 10, alignItems: "center" }}>
            <image-slot id="dcs-ideation" shape="rounded" radius="6"
              placeholder="Drop sketch"
              style={{ width: 96, height: 60, background: "var(--bg-2)" }}></image-slot>
            <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-muted)", lineHeight: 1.5 }}>Co-creation sketch<br /><span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: 10.5, color: "var(--fg-muted)" }}>ideated against this insight</span></span>
          </div>
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 8, borderTop: "1px solid var(--bg-2)", paddingTop: 9 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 11.5, color: "var(--fg-2)" }}>
          <span style={{ width: 22, height: 22, borderRadius: 999, background: "var(--k-ai-spruce-12)", color: "var(--k-spruce-70)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700 }}>{m.owner.split(" ").map((w) => w[0]).join("")}</span>
          {m.owner}
        </span>
        <span style={{ marginLeft: "auto", fontSize: 11, color: "var(--fg-muted)", display: "inline-flex", alignItems: "center", gap: 5 }}>
          <svg width="11" height="11" viewBox="0 0 32 32" fill="none" stroke="var(--k-status-success-110)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 16l6 6 14-14"></path></svg>
          {m.test}
        </span>
      </div>
    </div>
  );
}

function DemoContractStage({ beat }) {
  const [after, setAfter] = React.useState(false);
  const [open, setOpen] = React.useState(null);
  const [schema, setSchema] = React.useState(null); // null | "template" | "filled"
  const [wf, setWf] = React.useState(null); // to-be journey screen index
  const MOMENTS = DCS_FEATURED.map((oi) => (window.DEMO_MOMENTS || [])[oi]).filter(Boolean);
  const WF = DCS_FEATURED.map((oi) => DCS_WF_BY_MOMENT[oi]);

  // the to-be journey is only visualized after the room's ideation photo is
  // dropped: await → generating (animated reveal) → ready
  const [journey, setJourney] = React.useState(() => {
    try { return localStorage.getItem("dcs.tobe.generated") === "1" ? "ready" : "await"; } catch (e) { return "await"; }
  });
  const [revealN, setRevealN] = React.useState(0);
  const slotRef = React.useRef(null);

  // any upload (a sketch on a tile, or the ideation capture) starts the
  // generation automatically; clearing every upload resets the journey
  const [hasUpload, setHasUpload] = React.useState(false);
  const stageRef = React.useRef(null);
  React.useEffect(() => {
    const root = stageRef.current;
    if (!root) return;
    const check = () => {
      const any = Array.from(root.querySelectorAll("image-slot")).some((el) => el.hasAttribute("data-filled"));
      setHasUpload(any);
      if (any && journey === "await") {
        setRevealN(0);
        setJourney("generating");
      } else if (!any && journey !== "await") {
        setJourney("await");
        try { localStorage.removeItem("dcs.tobe.generated"); } catch (e) {}
      }
    };
    const mo = new MutationObserver(check);
    mo.observe(root, { subtree: true, attributes: true, attributeFilter: ["data-filled"] });
    check();
    return () => mo.disconnect();
  }, [journey]);

  // generation animation — screens resolve one by one, then the schema tile
  React.useEffect(() => {
    if (journey !== "generating") return;
    const total = (window.TOBE_STEPS || []).length + 1;
    const t = setInterval(() => setRevealN((n) => Math.min(n + 1, total)), 1100);
    return () => clearInterval(t);
  }, [journey]);
  React.useEffect(() => {
    if (journey !== "generating") return;
    const total = (window.TOBE_STEPS || []).length + 1;
    if (revealN >= total) {
      const t = setTimeout(() => {
        setJourney("ready");
        try { localStorage.setItem("dcs.tobe.generated", "1"); } catch (e) {}
      }, 900);
      return () => clearTimeout(t);
    }
  }, [journey, revealN]);

  // beat-driven host (walkthrough): 0 = stage · 1..n = expand moment n · n+1 = hand-off.
  // Direct clicks still work in between.
  React.useEffect(() => {
    if (beat === undefined || beat === null) return;
    const n = MOMENTS.length;
    setOpen(beat >= 1 && beat <= n ? beat - 1 : null);
    setAfter(beat > n);
    if (beat >= 1) { setSchema(null); setWf(null); }
  }, [beat]);

  const BUILT = window.DC_BUILT_FROM || [];
  const steps = window.TOBE_STEPS || [];
  const Schema = window.PacSchemaBoard;
  const m = open !== null ? MOMENTS[open] : null;
  const wfIdx = open !== null ? WF[open] : null;
  const WfComp = wfIdx !== null && wfIdx !== undefined && steps[wfIdx] ? window[steps[wfIdx].comp] : null;
  const cycle = (d) => setOpen((o) => (o + d + MOMENTS.length) % MOMENTS.length);
  const SCH_S = 0.92; // 1600×1131 schema sheet scaled into the stage

  return (
    <div ref={stageRef} style={{ width: "100%", height: "100%", background: "var(--bg-2)", fontFamily: "var(--font-sans)", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
      {/* header */}
      <div style={{ flex: "0 0 auto", background: "var(--k-dark-stone-90)", color: "#fff", padding: "0 28px", height: 78, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
          <span style={{ width: 36, height: 36, borderRadius: 999, background: "var(--k-warm-red-50)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18 }}>5</span>
          <span>
            <span style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 23 }}>Freeze the demo — Demo Contract</span>
              <span className="board-code" style={{ fontSize: 12 }}>DC-01</span>
            </span>
            <span style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>
              {after ? "Hand-off — each moment carries its wireframe and the human principle it answers to." : "Workshop close — the core agentic loop as the room froze it. Every moment cites the pain it retires and who taught us."}
            </span>
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, flex: "0 0 auto" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>Core agentic loop · 4 moments · owners named</span>
          <div style={{ display: "flex", background: "rgba(255,255,255,0.10)", borderRadius: 999, padding: 3, cursor: "pointer" }} onClick={() => setAfter(!after)}>
            <span style={{ padding: "7px 18px", borderRadius: 999, fontSize: 13, fontWeight: 600, background: !after ? "#fff" : "transparent", color: !after ? "var(--k-dark-stone-90)" : "rgba(255,255,255,0.65)" }}>Before · workshop close</span>
            <span style={{ padding: "7px 18px", borderRadius: 999, fontSize: 13, fontWeight: 600, background: after ? "#fff" : "transparent", color: after ? "var(--k-dark-stone-90)" : "rgba(255,255,255,0.65)" }}>After · hand-off</span>
          </div>
        </div>
      </div>

      {/* built-from rail */}
      <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center", gap: 12, padding: "11px 28px", background: "#fff", borderBottom: "1px solid var(--border-1)" }}>
        <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-muted)", flex: "0 0 auto" }}>Built from co-creation · human-led</span>
        {BUILT.map(([c, t], i) => (
          <React.Fragment key={c}>
            <span onClick={c === "SCH-01" ? () => setSchema("template") : undefined} style={{ display: "inline-flex", alignItems: "center", gap: 7, minWidth: 0, cursor: c === "SCH-01" ? "pointer" : "default" }}>
              <span className="ref-chip" style={{ color: "var(--k-warm-red-50)", fontWeight: 700, fontSize: 10.5, borderColor: c === "SCH-01" ? "var(--k-warm-red-50)" : undefined }}>{c}</span>
              <span style={{ fontSize: 11.5, color: "var(--fg-2)", whiteSpace: "nowrap", textDecoration: c === "SCH-01" ? "underline dotted" : "none", textUnderlineOffset: 3 }}>{t}{c === "SCH-01" ? " ⤤" : ""}</span>
              {(DCS_RAIL_VOICES[c] || []).length ? (
                <span style={{ display: "inline-flex", marginLeft: 1 }} title={`validated live by ${(DCS_RAIL_VOICES[c] || []).join(" + ")}`}>
                  {DCS_RAIL_VOICES[c].map((ini, j) => (
                    <span key={ini + j} style={{ width: 16, height: 16, borderRadius: 999, background: "var(--k-ai-spruce-12)", border: "1.5px solid #fff", color: "var(--k-spruce-70)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 7, fontWeight: 700, marginLeft: j > 0 ? -5 : 0 }}>{ini}</span>
                  ))}
                </span>
              ) : null}
            </span>
            {i < BUILT.length - 1 ? <span style={{ color: "var(--fg-subtle)", fontSize: 12 }}>→</span> : null}
          </React.Fragment>
        ))}
      </div>

      {/* moment cards */}
      <div style={{ flex: 1, minHeight: 0, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "min-content", alignContent: "center", gap: 16, padding: "18px 28px" }}>
        {MOMENTS.map((mm, i) => <DcsCard key={mm.m} m={mm} i={i} wfIdx={WF[i]} after={after} onOpen={setOpen} />)}
      </div>

      {/* to-be journey — only visualized after the ideation capture is uploaded */}
      <div style={{ flex: "0 0 auto", margin: "0 28px 20px", background: "var(--k-dark-stone-90)", borderRadius: 12, display: "flex", alignItems: "center", gap: 18, padding: "18px 24px" }}>
        <style>{"@keyframes dcsShim { 0% { background-position: -300px 0; } 100% { background-position: 300px 0; } } @keyframes dcsDot { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } } @keyframes dcsIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }"}</style>
        <div style={{ width: 216, flex: "0 0 auto", display: "flex", flexDirection: "column", gap: 6 }}>
          {journey === "await" ? (
            <React.Fragment>
              <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>Pause · co-creation ideation</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22, color: "#fff", lineHeight: 1.15 }}>From insights to screens</span>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", lineHeight: 1.45 }}>Drop one sketch on any tile — it fills all eight — then generate.</span>
            </React.Fragment>
          ) : journey === "generating" ? (
            <React.Fragment>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 9.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--k-warm-red-40)" }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--k-warm-red-50)", animation: "dcsDot 0.9s ease-in-out infinite" }}></span>
                Generating screens
              </span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22, color: "#fff", lineHeight: 1.15 }}>AnaCredit Validation Portal</span>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", lineHeight: 1.45 }}>
                {(() => {
                  const st = window.TOBE_STEPS || [];
                  if (revealN < st.length) return `Composing ${st[revealN] ? st[revealN].title : "…"} from the ideation capture…`;
                  return "Linking the Policy-as-Code schema…";
                })()}
              </span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>Attached to this contract</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22, color: "#fff", lineHeight: 1.15 }}>The to-be journey</span>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", lineHeight: 1.45 }}>Generated from the room’s ideation. Tap a screen or the schema to expand.</span>
            </React.Fragment>
          )}
        </div>

        {/* ideation capture slot — stays mounted in every state */}
        <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
          <image-slot ref={slotRef} id="dcs-ideation" shape="rounded" radius="10"
            placeholder="Drop the ideation photo"
            style={{ width: 232, height: 150, background: "rgba(255,255,255,0.05)" }}></image-slot>
          <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>Ideation capture · from the room</span>
        </div>

        {journey === "ready" ? (
          <React.Fragment>
            {steps.map((s, i) => {
              const C = window[s.comp];
              const tw = 232, ts = tw / 1440;
              return (
                <React.Fragment key={s.wf}>
                  <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 18, flex: "0 0 auto" }}>→</span>
                  <div onClick={() => { setOpen(null); setSchema(null); setWf(i); }} style={{ cursor: "pointer", display: "flex", flexDirection: "column", gap: 6, flex: "0 0 auto", animation: "dcsIn 0.45s ease both" }}>
                    <div style={{ width: tw, height: Math.round(900 * ts), overflow: "hidden", borderRadius: 8, border: "1px solid rgba(255,255,255,0.18)", background: "var(--bg-2)", boxShadow: "0 6px 18px rgba(0,0,0,0.35)", position: "relative" }}>
                      <div style={{ width: 1440, height: 900, transform: `scale(${ts})`, transformOrigin: "top left", pointerEvents: "none" }}>{C ? <C /> : null}</div>
                      <div style={{ position: "absolute", right: 6, bottom: 6, background: "rgba(20,22,25,0.78)", color: "#fff", fontSize: 9, fontWeight: 600, padding: "2px 8px", borderRadius: 999 }}>expand ⤤</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: tw }}>
                      <span style={{ fontSize: 11, color: "#fff", fontWeight: 500 }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "rgba(255,255,255,0.55)", marginRight: 6 }}>{s.wf}</span>
                        {s.title}
                      </span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--k-warm-red-40)", border: "1px solid rgba(255,70,45,0.45)", borderRadius: 999, padding: "1px 7px" }}>{s.moments}</span>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 18, flex: "0 0 auto" }}>→</span>
            <div onClick={() => { setOpen(null); setWf(null); setSchema("template"); }} style={{ cursor: "pointer", flex: 1, minWidth: 0, alignSelf: "stretch", border: "1.5px dashed rgba(168,121,210,0.6)", borderRadius: 10, background: "rgba(138,79,191,0.12)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px 14px", textAlign: "center", animation: "dcsIn 0.45s ease both" }}>
              <span className="board-code" style={{ color: "#C9A8E6", fontSize: 13 }}>SCH-01</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 16, color: "#fff", lineHeight: 1.2 }}>Policy-as-Code schema</span>
              <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.6)" }}>template → real · generates DOC-1…5 ⤤</span>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {steps.map((s, i) => {
              const C = window[s.comp];
              const tw = 232, ts = tw / 1440;
              const generating = journey === "generating";
              const revealed = generating && i < revealN;
              return (
                <React.Fragment key={s.wf}>
                  <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 18, flex: "0 0 auto" }}>→</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: "0 0 auto" }}>
                    {revealed ? (
                      <div style={{ width: tw, height: Math.round(900 * ts), overflow: "hidden", borderRadius: 8, border: "1px solid rgba(255,255,255,0.18)", background: "var(--bg-2)", position: "relative", animation: "dcsIn 0.45s ease both" }}>
                        <div style={{ width: 1440, height: 900, transform: `scale(${ts})`, transformOrigin: "top left", pointerEvents: "none" }}>{C ? <C /> : null}</div>
                      </div>
                    ) : (
                      <div style={{
                        width: tw, height: Math.round(900 * ts), borderRadius: 8,
                        border: generating ? "1px solid rgba(255,255,255,0.14)" : "1.5px dashed rgba(255,255,255,0.22)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: generating
                          ? "linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.04) 75%) 0 0 / 600px 100%"
                          : "rgba(255,255,255,0.03)",
                        animation: generating ? "dcsShim 1.2s linear infinite" : "none",
                      }}>
                        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>{generating ? "generating…" : "screen"}</span>
                      </div>
                    )}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: tw }}>
                      <span style={{ fontSize: 10, color: revealed ? "#fff" : "rgba(255,255,255,0.4)", fontWeight: 500 }}>
                        {revealed ? <span><span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "rgba(255,255,255,0.55)", marginRight: 5 }}>{s.wf}</span>{s.title}</span> : "generated after ideation"}
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 18, flex: "0 0 auto" }}>→</span>
            <div style={{
              flex: 1, minWidth: 0, alignSelf: "stretch", borderRadius: 10,
              border: "1.5px dashed rgba(168,121,210,0.4)",
              background: journey === "generating" && revealN >= steps.length
                ? "linear-gradient(90deg, rgba(138,79,191,0.08) 25%, rgba(138,79,191,0.2) 50%, rgba(138,79,191,0.08) 75%) 0 0 / 600px 100%"
                : "rgba(138,79,191,0.06)",
              animation: journey === "generating" && revealN >= steps.length ? "dcsShim 1.2s linear infinite" : "none",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px 14px", textAlign: "center",
            }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.2 }}>{journey === "generating" && revealN >= steps.length ? "Linking the schema…" : "Policy-as-Code schema"}</span>
            </div>
          </React.Fragment>
        )}
      </div>

      {/* expand overlay */}
      {m ? (
        <div style={{ position: "absolute", inset: 0, zIndex: 30, background: "rgba(8,10,12,0.85)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 2080, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px 14px" }}>
            <span style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 24 }}>
              <span style={{ color: "var(--k-warm-red-40)", marginRight: 12 }}>D{open + 1}</span>
              {m.m}
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "rgba(255,255,255,0.55)", marginLeft: 14 }}>{m.prio} · ← {m.ref}</span>
            </span>
            <span style={{ display: "flex", gap: 8 }}>
              <button onClick={() => cycle(-1)} style={dcsBtn}>← Prev</button>
              <button onClick={() => cycle(1)} style={dcsBtn}>Next →</button>
              <button onClick={() => setOpen(null)} style={{ ...dcsBtn, background: "var(--k-warm-red-50)", border: "1px solid var(--k-warm-red-50)" }}>Close ✕</button>
            </span>
          </div>
          <div style={{ width: 2080, display: "flex", gap: 20, alignItems: "stretch" }}>
            {/* contract detail */}
            <div style={{ flex: "0 0 600px", background: "#fff", borderRadius: 12, padding: "22px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 20, color: "var(--fg-1)", lineHeight: 1.3, textWrap: "pretty" }}>{m.prove}</div>
              {/* human-led principle — full citation */}
              <div style={{ background: "var(--k-ai-spruce-06)", border: "1px solid var(--k-ai-spruce-20)", borderRadius: 8, padding: "11px 14px", display: "flex", flexDirection: "column", gap: 5 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--k-spruce-70)" }}>Human-led principle</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--k-status-success-110)" }}><DcsCheck size={10} /> validated in the room</span>
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 14.5, lineHeight: 1.4, color: "var(--fg-1)" }}>&ldquo;{m.principle}&rdquo;</div>
                <div style={{ fontSize: 11.5, color: "var(--fg-muted)", lineHeight: 1.45 }}><strong style={{ color: "var(--fg-2)", fontWeight: 600 }}>Pain it retires</strong> — {m.pain}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 2 }}>
                  <span style={{ width: 20, height: 20, borderRadius: 999, background: "var(--k-ai-spruce-12)", color: "var(--k-spruce-70)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 8.5, fontWeight: 700, flex: "0 0 auto" }}>{m.ini}</span>
                  <span style={{ fontSize: 11, color: "var(--k-spruce-70)", fontWeight: 600 }}>{m.who}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-muted)" }}>← {m.cite}</span>
                </div>
              </div>
              {/* this insight's co-creation sketch — same upload as the tile */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 200px", gap: 12, alignItems: "center" }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-muted)", lineHeight: 1.6 }}>Co-creation sketch<br /><span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: 11.5 }}>what the room drew against this insight — the screen at right is generated from it</span></span>
                <image-slot id="dcs-ideation" shape="rounded" radius="8"
                  placeholder="Drop this insight's sketch"
                  style={{ width: 200, height: 124, background: "var(--bg-2)" }}></image-slot>
              </div>
              {[["Required data", m.data], ["Required rule / policy", m.rule], ["Visible evidence", m.evidence], ["Acceptance test", m.test]].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 3 }}>{k}</div>
                  <div style={{ fontSize: 14.5, color: "var(--fg-1)", lineHeight: 1.45 }}>{v}</div>
                </div>
              ))}
              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 12, borderTop: "1px solid var(--bg-2)", paddingTop: 14 }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 5 }}>Screens referenced</div>
                  {WfComp ? (
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12, color: "var(--fg-1)", border: "1px solid rgba(138,79,191,0.35)", background: "rgba(138,79,191,0.06)", borderRadius: 8, padding: "6px 12px" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: "#8A4FBF" }}>{steps[wfIdx].wf}</span>
                      {steps[wfIdx].title} · {steps[wfIdx].moments}
                      <span style={{ fontSize: 10.5, color: "var(--fg-muted)" }}>— shown at right · part of the to-be journey</span>
                    </span>
                  ) : (
                    <span style={{ display: "inline-flex", alignItems: "center", fontSize: 12, color: "var(--fg-muted)", border: "1px dashed var(--border-2)", borderRadius: 8, padding: "6px 12px" }}>no screen yet — P1 · designed in the next increment</span>
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 32, height: 32, borderRadius: 999, background: "var(--k-ai-spruce-12)", color: "var(--k-spruce-70)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>{m.owner.split(" ").map((w) => w[0]).join("")}</span>
                  <span>
                    <span style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--fg-1)" }}>{m.owner}</span>
                    <span style={{ display: "block", fontSize: 11, color: "var(--fg-muted)" }}>named owner · accepted in the room</span>
                  </span>
                  <span className="pill eg-pick" style={{ marginLeft: "auto", fontSize: 13, padding: "4px 14px" }}>{m.prio}</span>
                </div>
                <button onClick={() => setSchema("template")} style={{
                  display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left", cursor: "pointer",
                  background: "rgba(138,79,191,0.06)", border: "1px solid rgba(138,79,191,0.35)", borderRadius: 8, padding: "10px 14px",
                  fontFamily: "var(--font-sans)",
                }}>
                  <span className="board-code" style={{ color: "#8A4FBF", fontSize: 12 }}>SCH-01</span>
                  <span style={{ minWidth: 0, flex: 1 }}>
                    <span style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--fg-1)" }}>Policy-as-Code schema — governs this moment</span>
                    <span style={{ display: "block", fontSize: 10.5, color: "var(--fg-muted)", marginTop: 2 }}>view as template, then toggle to the real instance</span>
                  </span>
                  <span style={{ color: "#8A4FBF", fontSize: 16, flex: "0 0 auto" }}>⤤</span>
                </button>
              </div>
            </div>
            {/* wireframe */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {WfComp ? (
                <div style={{ width: 1440, height: 900, borderRadius: 12, overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.5)", flex: "0 0 auto" }}>
                  <WfComp />
                </div>
              ) : (
                <div style={{ width: 1440, height: 900, borderRadius: 12, border: "1.5px dashed rgba(255,255,255,0.25)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, color: "rgba(255,255,255,0.6)" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 26 }}>No screen yet — P1 scope</span>
                  <span style={{ fontSize: 14 }}>The feedback parser is designed in the next increment (TSN-01 closed loop).</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}

      {/* to-be journey screen overlay */}
      {wf !== null ? (
        <div style={{ position: "absolute", inset: 0, zIndex: 40, background: "rgba(8,10,12,0.85)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 1440, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2px 12px" }}>
            <span style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 21 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "rgba(255,255,255,0.55)", marginRight: 10 }}>{steps[wf].wf} · {steps[wf].moments}</span>
              {steps[wf].title}
              <span style={{ fontSize: 12, fontFamily: "var(--font-sans)", fontWeight: 400, color: "rgba(255,255,255,0.55)", marginLeft: 12 }}>the to-be journey · attached to DC-01</span>
            </span>
            <span style={{ display: "flex", gap: 8 }}>
              <button onClick={() => setWf((wf + steps.length - 1) % steps.length)} style={dcsBtn}>← Prev</button>
              <button onClick={() => setWf((wf + 1) % steps.length)} style={dcsBtn}>Next →</button>
              <button onClick={() => setWf(null)} style={{ ...dcsBtn, background: "var(--k-warm-red-50)", border: "1px solid var(--k-warm-red-50)" }}>Close ✕</button>
            </span>
          </div>
          <div style={{ width: 1440, height: 900, borderRadius: 12, overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.5)", flex: "0 0 auto" }}>
            {window[steps[wf].comp] ? React.createElement(window[steps[wf].comp]) : null}
          </div>
        </div>
      ) : null}

      {/* PaC schema overlay — template first, toggle to real */}
      {schema && Schema ? (
        <div style={{ position: "absolute", inset: 0, zIndex: 50, background: "rgba(8,10,12,0.9)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 1600 * SCH_S, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2px 12px" }}>
            <span style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 21 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "#C9A8E6", marginRight: 12, fontWeight: 700 }}>SCH-01</span>
              Policy-as-Code schema
              <span style={{ fontSize: 12, fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.55)", marginLeft: 12 }}>{schema === "template" ? "template — what the day fills" : "real — the stored instance"}</span>
            </span>
            <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div style={{ display: "flex", background: "rgba(255,255,255,0.10)", borderRadius: 999, padding: 3, cursor: "pointer" }} onClick={() => setSchema(schema === "template" ? "filled" : "template")}>
                <span style={{ padding: "6px 16px", borderRadius: 999, fontSize: 12, fontWeight: 600, background: schema === "template" ? "#fff" : "transparent", color: schema === "template" ? "var(--k-dark-stone-90)" : "rgba(255,255,255,0.65)" }}>Template</span>
                <span style={{ padding: "6px 16px", borderRadius: 999, fontSize: 12, fontWeight: 600, background: schema === "filled" ? "#fff" : "transparent", color: schema === "filled" ? "var(--k-dark-stone-90)" : "rgba(255,255,255,0.65)" }}>Filled · real</span>
              </div>
              <button onClick={() => setSchema(null)} style={{ ...dcsBtn, background: "var(--k-warm-red-50)", border: "1px solid var(--k-warm-red-50)" }}>Close ✕</button>
            </span>
          </div>
          <div style={{ width: 1600 * SCH_S, height: 1131 * SCH_S, borderRadius: 12, overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.5)", flex: "0 0 auto" }}>
            <div style={{ width: 1600, height: 1131, transform: `scale(${SCH_S})`, transformOrigin: "top left" }}>
              <Schema blank={schema === "template"} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

const dcsBtn = {
  padding: "8px 16px", borderRadius: 6, background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.25)", color: "#fff", fontSize: 13, fontWeight: 500,
  fontFamily: "var(--font-sans)", cursor: "pointer",
};

Object.assign(window, { DemoContractStage, DCS_FEATURED });
