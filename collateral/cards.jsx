// cards.jsx — A6 exit card, A4 agenda amendment, A4 sticker sheet,
// A5 rule-authority cards (×5), A5 persona cards (×10).
// Exports: ExitCard, AgendaSheet, StickerSheet, AuthorityCard, PersonaCard,
//          AUTHORITY_TIERS, PERSONAS

function ExitCard() {
  return (
    <SheetFrame
      lens="exit"
      eyebrow="09:20–09:30 · 1 per participant"
      title="Igloo exit card"
      fmt={FMT.A6P}
      titleSize={20}
      compact={true}
      footNote={false}
    >
      <div className="write-block">
        <div>
          <div className="write-q">1 · What felt riskiest?</div>
          <div className="write-lines" style={{ marginTop: 14 }}><div className="wl"></div><div className="wl"></div></div>
        </div>
        <div>
          <div className="write-q">2 · What felt slowest?</div>
          <div className="write-lines" style={{ marginTop: 14 }}><div className="wl"></div><div className="wl"></div></div>
        </div>
        <div>
          <div className="write-q">3 · What would you need in order to trust a controlled one-click workflow?</div>
          <div className="write-lines" style={{ marginTop: 14 }}><div className="wl"></div><div className="wl"></div><div className="wl"></div></div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 2 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)" }}>Role</span>
          <div style={{ flex: 1, borderBottom: "1px solid var(--border-2)" }}></div>
        </div>
      </div>
    </SheetFrame>
  );
}

const AGENDA = [
  ["09:00–09:20", "Igloo immersive briefing", "Establish shared context and pressure", "Shared mental model", "exit"],
  ["09:20–09:30", "Exit capture", "Capture immediate reactions and trust thresholds", "Exit cards / pulse sheet", "exit"],
  ["09:30–10:20", "Value", "Define measurable business case and sponsor decisions", "Value Scorecard", "value"],
  ["10:20–11:35", "Data", "Map breakpoints and follow one representative loan", "Breakpoint Map + One-Loan Trace", "data"],
  ["11:35–12:35", "Policy", "Convert rules into authority-tagged candidate controls", "Policy-as-Code Rule Catalogue", "policy"],
  ["12:35–13:20", "Lunch", "Reset", "—", null],
  ["13:20–14:20", "Controls", "Define gates, exceptions, overrides, and approvals", "Control Gate Model", "controls"],
  ["14:20–15:15", "People", "Assign decision rights, remediation ownership, and escalation", "Persona/RACI Map", "people"],
  ["15:15–16:10", "Evidence", "Design audit-ready chain of custody and retention logic", "Trust Record", "evidence"],
  ["16:10–17:00", "Demo contract and handoff", "Fix first-build proof points and dependencies", "Demo Contract + handoff checklist", "close"],
];

function AgendaSheet() {
  return (
    <SheetFrame
      lens="allday"
      eyebrow="1 per participant · day navigation"
      title="One-page agenda amendment"
      sub="The Igloo stays intact. The rest of the day is a deliberate artifact sequence: each lens resolves into a named output, and the day closes on a demo contract — not open-ended ideation."
      fmt={FMT.A4P}
      titleSize={24}
    >
      <table className="ktable">
        <colgroup>
          <col style={{ width: 92 }} /><col style={{ width: 150 }} /><col /><col style={{ width: 180 }} />
        </colgroup>
        <thead>
          <tr><th>Time</th><th>Module</th><th>Purpose</th><th>Primary output</th></tr>
        </thead>
        <tbody>
          {AGENDA.map((r, i) => (
            <tr key={i}>
              <td style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, whiteSpace: "nowrap" }}>{r[0]}</td>
              <td>
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {r[4] ? <span style={{ width: 8, height: 8, borderRadius: 99, background: LENS[r[4]].color, flex: "0 0 auto" }}></span> : <span style={{ width: 8 }}></span>}
                  <span style={{ fontWeight: 500, color: "var(--fg-1)" }}>{r[1]}</span>
                </span>
              </td>
              <td style={{ fontSize: 12 }}>{r[2]}</td>
              <td style={{ fontSize: 12 }}>{r[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ fontSize: 11.5, color: "var(--fg-muted)", lineHeight: 1.5 }}>
        Working agreements: every automated rule carries an authority label and version · every material value traces to a source field, mapper, and steward · deterministic validation, plausibility review, and reconciliation stay separate layers · human approval and evidence capture are explicit at each gate.
      </div>
    </SheetFrame>
  );
}

/* ---------- sticker sheet ---------- */

const SEV_STICKERS = [
  { key: "C", label: "Critical", solid: "var(--k-status-critical-100)", use: "Severe failure / data loss" },
  { key: "E", label: "Error", solid: "var(--k-status-error-100)", use: "Actionable failure" },
  { key: "W", label: "Warning", solid: "var(--k-status-warning-100)", use: "Needs verification" },
  { key: "S", label: "Success", solid: "var(--k-status-success-100)", use: "Confirmed / resolved" },
  { key: "I", label: "Info", solid: "var(--k-status-info-100)", use: "Context only" },
];

const PRIO_STICKERS = [
  { key: "P0", solid: "var(--k-dark-stone-90)", use: "First demo must prove" },
  { key: "P1", solid: "var(--k-cool-gray-50)", use: "Next increment" },
  { key: "P2", solid: "var(--k-cool-gray-30)", use: "Later / reuse layer" },
];

const FLAG_STICKERS = [
  { label: "Authority unresolved", bg: "var(--k-status-warning-10)", bd: "var(--k-status-warning-20)", fg: "var(--k-status-warning-110)" },
  { label: "Owner unknown", bg: "var(--k-status-error-10)", bd: "var(--k-status-error-20)", fg: "var(--k-status-error-110)" },
  { label: "Blocker", bg: "var(--k-status-critical-10)", bd: "var(--k-status-critical-20)", fg: "var(--k-status-critical-110)" },
  { label: "Policy decision needed", bg: "var(--k-spruce-10)", bd: "var(--k-spruce-20)", fg: "var(--k-spruce-80)" },
];

function StickerSheet() {
  return (
    <SheetFrame
      lens="allday"
      eyebrow="1 set · prioritization and risk marking"
      title="Dot and severity sticker sheet"
      sub="Shidoka RAG taxonomy — every dot carries a letter and a printed label, never colour alone. Cut along dashed lines, or duplicate the digital frame and drag dots onto canvases."
      fmt={FMT.A4P}
      titleSize={24}
      footNote={false}
    >
      <div className="cutline">
        <div className="t-caption" style={{ marginBottom: 12 }}>Severity dots · Shidoka RAG</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {SEV_STICKERS.map((s) => (
            <div key={s.key} className="sticker-row">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="sticker-dot" style={{ background: s.solid }}>{s.key}</span>
              ))}
              <span style={{ fontSize: 12, color: "var(--fg-2)", marginLeft: 6 }}>
                <strong style={{ color: "var(--fg-1)" }}>{s.label}</strong>
                <span style={{ color: "var(--fg-muted)" }}> — {s.use}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="cutline">
        <div className="t-caption" style={{ marginBottom: 12 }}>Priority dots · demo contract</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {PRIO_STICKERS.map((s) => (
            <div key={s.key} className="sticker-row">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="sticker-dot" style={{ background: s.solid }}>{s.key}</span>
              ))}
              <span style={{ fontSize: 12, color: "var(--fg-muted)", marginLeft: 6 }}>{s.use}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="cutline">
        <div className="t-caption" style={{ marginBottom: 12 }}>Flag stickers · parking-lot markers</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {FLAG_STICKERS.map((f) => (
            <React.Fragment key={f.label}>
              <span className="sticker-flag" style={{ background: f.bg, border: `1px solid ${f.bd}`, color: f.fg }}>{f.label}</span>
              <span className="sticker-flag" style={{ background: f.bg, border: `1px solid ${f.bd}`, color: f.fg }}>{f.label}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </SheetFrame>
  );
}

/* ---------- rule authority cards ---------- */

const AUTHORITY_TIERS = [
  {
    n: 1, name: "Binding regulation", runtime: "Yes",
    desc: "ECB Regulation (EU) 2016/867 and mandatory local circulars or instructions. Defines the reporting requirement itself.",
    example: "Art. 4 reporting population · €25,000 threshold",
  },
  {
    n: 2, name: "Official guidance", runtime: "Yes",
    desc: "ECB Manual, Q&As, validation checks, plausibility checks, and comparison methodologies. Interprets — does not create — obligations.",
    example: "Manual Part I §3 observed-agent logic",
  },
  {
    n: 3, name: "National operating instruction", runtime: "Yes",
    desc: "BCL reporting dates, agent lists, validation rules, comparison methodology, and SDMX schema versions. Operationally authoritative for Luxembourg.",
    example: "BCL schema v1.0.13 → v1.0.14 (Jul 2026)",
  },
  {
    n: 4, name: "Internal policy", runtime: "Yes",
    desc: "BiL SOPs, approval matrices, release and rollback standards. Must never contradict tiers 1–3.",
    example: "Override approval matrix · attestation SOP",
  },
  {
    n: 5, name: "AI assist / heuristic", runtime: "No",
    desc: "LLM suggestions, clustering, remediation recommendations. Advisory only — never authoritative for a reported value.",
    example: "Suggested fix for recurring sector-code defect",
  },
];

function AuthorityCard({ tier }) {
  const isAI = tier.runtime === "No";
  return (
    <SheetFrame
      lens="policy"
      eyebrow={`Rule authority · tier ${tier.n} of 5`}
      title={tier.name}
      fmt={FMT.A5L}
      titleSize={21}
      compact={true}
      footNote={false}
    >
      <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 64, lineHeight: 1,
          color: isAI ? "var(--fg-subtle)" : LENS.policy.color, flex: "0 0 auto", letterSpacing: "-0.02em",
        }}>{tier.n}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
          <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.5 }}>{tier.desc}</p>
          <div className="kv">
            <span className="k">Runtime</span>
            <span className="v" style={{ fontWeight: 700, color: isAI ? "var(--k-status-warning-110)" : "var(--k-status-success-110)" }}>
              {isAI ? "Not authoritative for runtime" : "Authoritative for runtime"}
            </span>
            <span className="k">Example</span>
            <span className="v" style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>{tier.example}</span>
          </div>
        </div>
      </div>
    </SheetFrame>
  );
}

Object.assign(window, { ExitCard, AgendaSheet, StickerSheet, AuthorityCard, AUTHORITY_TIERS });
