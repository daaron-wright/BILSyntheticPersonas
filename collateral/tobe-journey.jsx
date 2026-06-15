// tobe-journey.jsx — Demo Contract before/after frame: Before = the contract as
// the room froze it (P0 stamp); After = hand-off, with the hi-fi wireframes
// (WF-01…04) plugged into the rows and expandable in place — referencing
// section 06 · Hand-off. Exports: DemoContractBeforeAfter, TOBE_STEPS

const TOBE_STEPS = [
  { wf: "WF-01", title: "Data intake", moments: "D1", comp: "PortalIntake" },
  { wf: "WF-02", title: "Validation run", moments: "D2–D4", comp: "PortalRun" },
  { wf: "WF-03", title: "Exception review", moments: "D5", comp: "PortalReview" },
  { wf: "WF-04", title: "Summary & evidence", moments: "D6–D7", comp: "PortalEvidence" },
];

const THUMB_W = 264;
const THUMB_H = 165;

function WFThumb({ step, onOpen }) {
  const C = window[step.comp];
  const scale = THUMB_W / 1440;
  return (
    <div onClick={onOpen} style={{ cursor: "pointer", display: "flex", flexDirection: "column", gap: 8, flex: "0 0 auto" }}>
      <div style={{
        width: THUMB_W, height: THUMB_H, overflow: "hidden", borderRadius: 8,
        border: "1px solid rgba(255,255,255,0.18)", background: "var(--bg-2)",
        boxShadow: "0 6px 18px rgba(0,0,0,0.35)", position: "relative",
      }}>
        <div style={{ width: 1440, height: 900, transform: `scale(${scale})`, transformOrigin: "top left", pointerEvents: "none" }}>
          {C ? <C /> : null}
        </div>
        <div style={{
          position: "absolute", right: 8, bottom: 8, background: "rgba(20,22,25,0.78)", color: "#fff",
          fontSize: 9.5, fontWeight: 600, padding: "3px 9px", borderRadius: 999, letterSpacing: "0.04em",
        }}>expand ⤢</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: THUMB_W }}>
        <span style={{ fontSize: 12, color: "#fff", fontWeight: 500 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,255,255,0.55)", marginRight: 7 }}>{step.wf}</span>
          {step.title}
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "var(--k-warm-red-40)", border: "1px solid rgba(255,70,45,0.45)", borderRadius: 999, padding: "2px 8px" }}>{step.moments}</span>
      </div>
    </div>
  );
}

function DemoContractBeforeAfter() {
  const [after, setAfter] = React.useState(false);
  const [open, setOpen] = React.useState(null);
  const OpenComp = open !== null ? window[TOBE_STEPS[open].comp] : null;
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", position: "relative", background: "var(--k-dark-stone-90)" }}>
      {/* toggle header */}
      <div style={{
        height: 56, flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 20px", color: "#fff", fontFamily: "var(--font-sans)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{
            width: 30, height: 30, borderRadius: 999, background: "var(--k-warm-red-50)", color: "#fff",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 15,
          }}>5</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 17 }}>Freeze the demo</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,255,255,0.55)" }}>16:10–17:00</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>
            {after ? "wireframes plugged into the rows · tap to expand · full set in 06" : "→ P0 scope frozen · owners named"}
          </span>
          <div style={{ display: "flex", background: "rgba(255,255,255,0.10)", borderRadius: 999, padding: 3, cursor: "pointer" }} onClick={() => setAfter(!after)}>
            <span style={{
              padding: "5px 14px", borderRadius: 999, fontSize: 11.5, fontWeight: 600,
              background: !after ? "#fff" : "transparent", color: !after ? "var(--k-dark-stone-90)" : "rgba(255,255,255,0.65)",
            }}>Before · workshop close</span>
            <span style={{
              padding: "5px 14px", borderRadius: 999, fontSize: 11.5, fontWeight: 600,
              background: after ? "#fff" : "transparent", color: after ? "var(--k-dark-stone-90)" : "rgba(255,255,255,0.65)",
            }}>After · hand-off</span>
          </div>
        </div>
      </div>

      {/* contract */}
      <div style={{ flex: 1, position: "relative", background: "#fff", minHeight: 0 }}>
        {after ? (
          <DemoContract wf={true} full={true} onOpenWf={setOpen} />
        ) : (
          <OutcomeFrame>
            <DemoContract full={true} />
          </OutcomeFrame>
        )}
      </div>

      {/* expand overlay */}
      {open !== null ? (
        <div style={{ position: "absolute", inset: 0, zIndex: 30, background: "rgba(8,10,12,0.82)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 0 }}>
          <div style={{ width: 1440, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px 12px" }}>
            <span style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 19 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(255,255,255,0.55)", marginRight: 10 }}>{TOBE_STEPS[open].wf} · {TOBE_STEPS[open].moments}</span>
              {TOBE_STEPS[open].title}
              <span style={{ fontSize: 12, fontFamily: "var(--font-sans)", fontWeight: 400, color: "rgba(255,255,255,0.55)", marginLeft: 12 }}>part of 06 · Hand-off · hi-fi wireframes</span>
            </span>
            <span style={{ display: "flex", gap: 8 }}>
              <button onClick={() => setOpen(Math.max(0, open - 1))} style={tjBtn} disabled={open === 0}>← Prev</button>
              <button onClick={() => setOpen(Math.min(TOBE_STEPS.length - 1, open + 1))} style={tjBtn} disabled={open === TOBE_STEPS.length - 1}>Next →</button>
              <button onClick={() => setOpen(null)} style={{ ...tjBtn, background: "var(--k-warm-red-50)", border: "1px solid var(--k-warm-red-50)" }}>Close ✕</button>
            </span>
          </div>
          <div style={{ width: 1440, height: 900, borderRadius: 10, overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.5)", flex: "0 0 auto" }}>
            {OpenComp ? <OpenComp /> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

const tjBtn = {
  padding: "7px 14px", borderRadius: 6, background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.25)", color: "#fff", fontSize: 12, fontWeight: 500,
  fontFamily: "var(--font-sans)", cursor: "pointer",
};

Object.assign(window, { DemoContractBeforeAfter, TOBE_STEPS });
