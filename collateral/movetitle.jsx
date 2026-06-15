// movetitle.jsx — big "move divider" title slides that sit in front of each
// of the six moves. Each one states, overtly: (1) the risk this move retires
// on the AI-transformation journey, and (2) how AI co-creates inside this move.
// Calm dark dividers; AI content uses the Shidoka spruce (Opacity.AI) surface.
// Exports: MoveTitleSlide, MOVE_TITLES

const MT_THESIS = "We don't ask you to trust AI on faith. We co-create it, interrogate every output with the people accountable for it, and freeze only what survives.";

const MOVE_TITLES = [
  {
    g: 0, n: "00", time: "pre-work", color: "#5BA2AE", glyph: "cohort",
    title: "The cohort",
    lede: "Before the room meets, we model who it answers to.",
    risk: "A workshop that designs for stakeholders nobody validated — decisions that fall apart the moment a real, accountable voice pushes back.",
    aiTag: "Synthetic stakeholders · AI composites from transcripts",
    ai: "Ten synthetic personas — AI composites built from real interview transcripts — stand in for every accountable stakeholder. Their probes are pinned to every board, ready to challenge each decision the moment it is made.",
    outcome: "Cohort live · probes pinned on every board",
  },
  {
    g: 1, n: "01", time: "09:30–10:20", color: "#29707A", glyph: "value",
    title: "Frame the value",
    lede: "We fund numbers with owners and dates — not a story.",
    risk: "“Better quality”, funded on faith — with no baseline, no one can ever prove the AI changed anything.",
    aiTag: "AI personas interrogate · the room validates live",
    ai: "The room fills the scorecard live. The AI-composite sponsor and reporting lead interrogate every metric — “would this justify funding at steering?” — and only measurable targets with a named owner survive.",
    outcome: "7 metrics · 3 sponsor decisions",
  },
  {
    g: 2, n: "02", time: "10:20–11:35", color: "#3E8AC2", glyph: "trace",
    title: "Trace one loan",
    lede: "We automate nothing whose meaning has no owner.",
    risk: "Automating a field whose stewardship is only implicit — meaning drifts the instant the first exception lands.",
    aiTag: "Stewardship probed per field · before any automation",
    ai: "One real exposure is walked field by field. The AI-composite CDO and lending-ops owner probe each row — “who owns the meaning after the handoff?” — and any unstewarded field is flagged un-automatable.",
    outcome: "1 loan traced · stewards named",
  },
  {
    g: 3, n: "03", time: "11:35–12:35", color: "#8A4FBF", glyph: "rules",
    title: "Sort what rules apply",
    lede: "We keep the deterministic and the probabilistic visibly apart.",
    risk: "A model suggestion wearing the costume of a hard rule — once they blur, challenge becomes impossible.",
    aiTag: "Validated rules → Policy-as-Code · the agent's rulebook",
    ai: "Rules are written as testable statements. The AI-composite CRO and IT lead probe each one — “is this a suggestion pretending to be a rule?” — and only deterministic, source-backed rules reach the policy-as-code the agents will run.",
    outcome: "7 rules tagged · OPA shortlist",
  },
  {
    g: 4, n: "04", time: "13:20–14:20", color: "#E68A00", glyph: "gates",
    title: "Draw the gates",
    lede: "Every gate names a human and leaves a record you can replay.",
    risk: "A faster process that still needs three phone calls to understand a red item — speed bought at the cost of auditability.",
    aiTag: "Human-in-the-loop gates · replayable evidence",
    ai: "Six control gates are drawn and stress-played against a live failure. The AI-composite reporting and audit leads probe each one — “could you replay this from its evidence alone?” — fixing a human checkpoint at every gate the agents will later run.",
    outcome: "6 gates · approvers named",
  },
  {
    g: 5, n: "05", time: "16:10–17:00", color: "#FF462D", glyph: "target",
    title: "Envisioned target state",
    lede: "Only now do we show the AI running it — bounded by everything the room just froze.",
    risk: "An impressive agentic demo built on unresolved foundations — hidden manual work, unclear owners, unsettled authority.",
    aiTag: "Agentic AI runs it · inside the frozen contract",
    ai: "The agentic AI process runs the target state end-to-end in hours, human in the loop, with no manual corrections — plugged into a frozen demo contract and driven by policy-as-code generated from the rules the room just validated.",
    outcome: "Demo contract · P0 frozen · sprint 1 starts",
  },
];

/* self-contained move glyph (mirrors the day-overview icon set) */
function MtGlyph({ kind, color, size = 30 }) {
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
  return <svg width={size} height={size} viewBox="0 0 32 32" style={{ display: "block" }} aria-hidden="true">{g}</svg>;
}

function MtCheck({ size = 13, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M6 16l6 6 14-14"></path>
    </svg>
  );
}

function MtArc({ size = 14, color = "currentColor" }) {
  // small "retire / remove" glyph — a barred circle
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" style={{ flexShrink: 0 }}>
      <circle cx="16" cy="16" r="11"></circle>
      <path d="M9 23L23 9"></path>
    </svg>
  );
}

function MoveTitleSlide({ move }) {
  const m = move;
  const idx = MOVE_TITLES.indexOf(m);
  const total = MOVE_TITLES.length;
  return (
    <div data-screen-label={`Title ${m.n}`} style={{
      width: "100%", height: "100%", background: "var(--k-dark-stone-90)",
      fontFamily: "var(--font-sans)", color: "#fff", boxSizing: "border-box",
      display: "flex", flexDirection: "column", position: "relative", overflow: "hidden",
    }}>
      {/* top accent rule */}
      <div style={{ height: 6, flex: "0 0 auto", background: m.color }}></div>

      {/* faint oversized move number, watermark on the right */}
      <div aria-hidden="true" style={{
        position: "absolute", right: -36, top: -52, fontFamily: "var(--font-display)", fontWeight: 200,
        fontSize: 620, lineHeight: 1, color: m.color, opacity: 0.06, letterSpacing: "-0.04em", pointerEvents: "none",
      }}>{m.n}</div>

      <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", padding: "70px 96px 64px", position: "relative", zIndex: 1 }}>

        {/* eyebrow row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flex: "0 0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{
              width: 52, height: 52, borderRadius: 12, flex: "0 0 auto",
              border: `1px solid ${m.color}`, background: "rgba(255,255,255,0.03)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
            }}>
              <MtGlyph kind={m.glyph} color={m.color} size={28} />
            </span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: m.color }}>
                Derisking the AI journey
              </div>
              <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", marginTop: 4, fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>
                Move {m.n} of 05 · {m.time}
              </div>
            </div>
          </div>
          {/* progress ticks */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flex: "0 0 auto" }}>
            {MOVE_TITLES.map((mm, i) => (
              <span key={mm.n} style={{
                width: i === idx ? 30 : 9, height: 9, borderRadius: 999,
                background: i === idx ? m.color : i < idx ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.14)",
                transition: "all .2s ease",
              }}></span>
            ))}
          </div>
        </div>

        {/* hero — number + title + lede */}
        <div style={{ flex: "0 0 auto", marginTop: 46, display: "flex", alignItems: "flex-start", gap: 44 }}>
          <span style={{
            fontFamily: "var(--font-display)", fontWeight: 200, fontSize: 232, lineHeight: 0.82,
            color: m.color, letterSpacing: "-0.04em", flex: "0 0 auto",
          }}>{m.n}</span>
          <div style={{ minWidth: 0, paddingTop: 6 }}>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 78, lineHeight: 1.02,
              letterSpacing: "-0.02em", color: "#fff", textWrap: "balance",
            }}>{m.title}</div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 30, lineHeight: 1.32,
              color: "rgba(255,255,255,0.82)", marginTop: 20, maxWidth: "30ch", textWrap: "pretty",
            }}>{m.lede}</div>
          </div>
        </div>

        {/* two panels — the risk retired · how AI co-creates */}
        <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "1fr 1.18fr", gap: 28, flex: "0 0 auto" }}>
          {/* the risk we retire */}
          <div style={{
            background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.10)",
            borderLeft: "3px solid rgba(255,255,255,0.28)", borderRadius: 12, padding: "24px 28px",
            display: "flex", flexDirection: "column", gap: 12,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <MtArc size={15} color="rgba(255,255,255,0.6)" />
              <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                The risk we retire
              </span>
            </div>
            <div style={{ fontSize: 19, lineHeight: 1.5, color: "rgba(255,255,255,0.8)", textWrap: "pretty" }}>{m.risk}</div>
          </div>

          {/* how AI co-creates here — spruce AI surface */}
          <div style={{
            background: "rgba(41,112,122,0.20)", border: "1px solid rgba(91,162,174,0.45)",
            borderLeft: "3px solid var(--k-spruce-40)", borderRadius: 12, padding: "24px 28px",
            display: "flex", flexDirection: "column", gap: 12,
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A9D3DA" }}>
                How we co-create with AI here
              </span>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6, flex: "0 0 auto",
                background: "var(--k-spruce-40)", color: "var(--k-dark-stone-90)", borderRadius: 999,
                padding: "3px 10px", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--k-dark-stone-90)" }}></span>
                AI in the loop
              </span>
            </div>
            <div style={{ fontSize: 19, lineHeight: 1.5, color: "rgba(255,255,255,0.92)", textWrap: "pretty" }}>{m.ai}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 2, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "#A9D3DA", letterSpacing: "0.02em" }}>{m.aiTag}</span>
            </div>
          </div>
        </div>

        {/* footer — thesis through-line + outcome chip */}
        <div style={{ flex: "0 0 auto", marginTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, maxWidth: "62ch" }}>
            <span style={{ width: 3, alignSelf: "stretch", background: m.color, borderRadius: 2, flex: "0 0 auto" }}></span>
            <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "rgba(255,255,255,0.55)", fontStyle: "italic", textWrap: "pretty" }}>{MT_THESIS}</span>
          </div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 12, flex: "0 0 auto",
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 999,
            padding: "11px 20px 11px 16px",
          }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, borderRadius: 999, background: "rgba(31,143,74,0.22)", flex: "0 0 auto" }}>
              <MtCheck size={13} color="#5FCB8A" />
            </span>
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
              <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>What this move freezes</span>
              <span style={{ fontSize: 15, fontWeight: 500, color: "#fff", marginTop: 2 }}>{m.outcome}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { MoveTitleSlide, MOVE_TITLES });
