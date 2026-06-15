// canvases-a.jsx — Value Scorecard (A1), Breakpoint Map (A0), One-Loan Trace (A1).
// Visual boards (Shidoka KPI-card + lineage-flow grammar), pre-filled from pre-work.
// Exports: ValueScorecard, BreakpointMap, OneLoanTrace

/* ================= Value Scorecard — KPI cards ================= */

const VALUE_METRICS = [
  { short: "Cycle time", big: "−50–70%", unit: "data availability → submission", base: "multi-day · correction loop ~1 wk", conf: "Estimated", pct: 0.65, horizon: "First release + 2 cycles", owner: "Head of Reg. Reporting", evidence: "Run timestamps · evidence pack", offtrack: "Re-scope automation coverage with sponsor", dir: "down" },
  { short: "First-pass acceptance", big: "≥95%", unit: "accepted without correction", base: "~81% · last 6 cycles, est.", conf: "Estimated", pct: 0.81, horizon: "Release + 3 cycles", owner: "Head of Reg. Reporting", evidence: "INVOKE + BCL acceptance logs", offtrack: "Audit deterministic rule coverage", dir: "up" },
  { short: "Defect leakage", big: "≤1 / qtr", unit: "correction requests from BCL", base: "3–5 requests / quarter today", conf: "Estimated", pct: 0.7, horizon: "2 quarters post-release", owner: "AnaCredit Ops Lead", evidence: "BCL feedback workbooks", offtrack: "Stand up root-cause review board", dir: "down" },
  { short: "Analyst hours", big: "≤30h", unit: "manual touches per cycle", base: "~70h / cycle — untracked", conf: "Unknown", pct: 0.57, horizon: "Release + 2 cycles", owner: "AnaCredit Ops Lead", evidence: "Time sampling · 2 cycles", offtrack: "Re-prioritise triage automation backlog", dir: "down" },
  { short: "Automation coverage", big: "≥80%", unit: "deterministic checks in OPA", base: "~15% of checks systematised", conf: "Estimated", pct: 0.8, horizon: "First release", owner: "Product / Eng Owner", evidence: "Policy set count vs. catalogue", offtrack: "Cut P1 scope; protect P0 set", dir: "up" },
  { short: "Evidence completeness", big: "100%", unit: "by construction, replay-tested", base: "reconstructed manually on request", conf: "Known", pct: 1, horizon: "First release", owner: "IT Lead + Internal Audit", evidence: "Trust Record replay test", offtrack: "Block release — non-negotiable", dir: "up" },
  { short: "Recon turnaround", big: "≤5 wd", unit: "reconciliation issue closure", base: "~20 working days, manual", conf: "Known", pct: 0.75, horizon: "Phase 2 · recon release", owner: "Supervisor Liaison", evidence: "Feedback parser metrics", offtrack: "Add recon analyst capacity", dir: "down" },
];

const SPONSOR_DECISIONS = [
  "Publish cycle-time and first-pass metrics to steering monthly — no private dashboards.",
  "Fund the golden dataset build and second two analysts to pre-work for two cycles.",
  "Mandate named dual-approval pairs for overrides and waivers before go-live.",
];

function VsDelta({ dir }) {
  const up = dir === "up";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: 26, height: 26, borderRadius: 999, flex: "0 0 auto",
      background: "var(--k-status-success-10)", border: "1px solid var(--k-status-success-20)",
      color: "var(--k-status-success-110)",
    }}>
      <svg width="12" height="12" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        {up ? <path d="M8 24 L24 8 M12 8 h12 v12" /> : <path d="M8 8 L24 24 M24 12 v12 h-12" />}
      </svg>
    </span>
  );
}

function VsBar({ pct, blank }) {
  return (
    <div style={{ position: "relative", height: 8, borderRadius: 999, background: "var(--bg-3)", overflow: "hidden" }}>
      {!blank ? <div style={{ width: (pct * 100) + "%", height: "100%", borderRadius: 999, background: "linear-gradient(90deg, var(--k-spruce-40), var(--k-spruce-60))" }}></div> : null}
    </div>
  );
}

function VsMetricCard({ m, blank }) {
  return (
    <div style={{ background: "#fff", border: "1px solid var(--border-1)", borderTop: "3px solid var(--k-spruce-60)", borderRadius: 10, padding: "14px 16px 12px", display: "flex", flexDirection: "column", gap: 8, minWidth: 0, boxShadow: "0 1px 3px rgba(15,23,42,0.05)" }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-muted)" }}>{m.short}</div>
      {blank ? (
        <div className="co-area" style={{ borderRadius: 6, height: 46, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--fg-subtle)" }}>target — measured how?</div>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 33, lineHeight: 1, color: "var(--fg-1)", letterSpacing: "-0.01em" }}>{m.big}</span>
          <VsDelta dir={m.dir} />
        </div>
      )}
      <div style={{ fontSize: 10.5, color: "var(--fg-muted)", lineHeight: 1.35 }}>{blank ? m.unit : m.unit}</div>
      <VsBar pct={m.pct} blank={blank} />
      <div style={{ fontSize: 10.5, color: blank ? "var(--fg-subtle)" : "var(--fg-2)", display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", flex: "0 0 auto" }}>from</span>
        {blank ? <span className="co-area" style={{ flex: 1, height: 14, borderRadius: 3 }}></span> : <span style={{ minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.base}</span>}
      </div>
      <EgPills options={["Known", "Estimated", "Unknown"]} pick={blank ? undefined : m.conf} />
      <div style={{ borderTop: "1px solid var(--bg-2)", paddingTop: 8, display: "flex", flexDirection: "column", gap: 4, fontSize: 10.5 }}>
        {[["Owner", m.owner], ["Horizon", m.horizon], ["Evidence", m.evidence]].map(([k, v]) => (
          <div key={k} style={{ display: "grid", gridTemplateColumns: "58px 1fr", gap: 6 }}>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", paddingTop: 1 }}>{k}</span>
            {blank ? <span className="co-area" style={{ height: 13, borderRadius: 3 }}></span> : <span style={{ color: "var(--fg-1)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v}</span>}
          </div>
        ))}
      </div>
      <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "4px 1fr", gap: 8, alignItems: "stretch" }}>
        <span style={{ borderRadius: 2, background: "var(--k-status-warning-100)" }}></span>
        {blank
          ? <span className="co-area" style={{ height: 26, borderRadius: 4 }}></span>
          : <span style={{ fontSize: 10, color: "var(--fg-muted)", lineHeight: 1.35 }}><strong style={{ color: "var(--fg-1)", fontWeight: 500 }}>If off-track:</strong> {m.offtrack}</span>}
      </div>
    </div>
  );
}

function ValueScorecard({ blank }) {
  return (
    <SheetFrame
      lens="value"
      eyebrow="Activity 1 · 09:30–10:20 · 50 min"
      title="Value Scorecard"
      sub={blank
        ? "Co-creation template — one card per metric. Force every target into a number with a horizon, then the sponsor reads the card wall aloud."
        : "Outcome — seven measurable metric cards confirmed in the room, three sponsor decisions on record, two baselines still to collect."}
      fmt={FMT.A1L}
      titleSize={30}
      code="BRD-01"
      refs={["→ SCH-01 · metric[]", "→ DC-01"]}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "1fr", gap: 14, flex: "1 1 auto", minHeight: 0 }}>
        {VALUE_METRICS.map((m) => <VsMetricCard key={m.short} m={m} blank={blank} />)}
        {/* 8th slot — missing baselines */}
        <div style={{ background: "var(--bg-2)", border: "1px dashed var(--border-2)", borderRadius: 10, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-muted)" }}>Missing baselines to collect</div>
          {blank ? (
            <div className="co-area" style={{ borderRadius: 6, flex: 1, padding: "8px 10px" }}><span className="ghost-prompt">Which baselines does nobody actually know? Name them — with an owner and a sampling plan.</span></div>
          ) : (
            <div style={{ fontSize: 11.5, color: "var(--fg-2)", lineHeight: 1.5 }}>
              <strong style={{ color: "var(--fg-1)" }}>Analyst hours / cycle</strong> — time sampling over two cycles; no tracking today.<br />
              <strong style={{ color: "var(--fg-1)" }}>True first-pass rate</strong> — six-cycle INVOKE log pull, owner: Ops Lead.
            </div>
          )}
          <div style={{ marginTop: "auto", fontSize: 10, color: "var(--fg-subtle)" }}>Unknown baselines are allowed — hiding them is not.</div>
        </div>
      </div>
      {/* sponsor decisions strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, flex: "0 0 auto" }}>
        {SPONSOR_DECISIONS.map((d, i) => (
          <div key={i} style={{ background: "var(--k-dark-stone-90)", borderRadius: 10, padding: "14px 18px", display: "flex", gap: 14, alignItems: "flex-start", color: "#fff" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 34, lineHeight: 1, color: "var(--k-spruce-40, #5BA2AE)", flex: "0 0 auto" }}>{"0" + (i + 1)}</span>
            <span style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Sponsor decision</span>
              {blank
                ? <span className="co-area" style={{ minHeight: 40, borderRadius: 5, padding: "6px 9px" }}><span className="ghost-prompt">{["What gets published, to whom, how often?", "What gets funded before sprint 1?", "What gets mandated before go-live?"][i]}</span></span>
                : <span style={{ fontSize: 12.5, lineHeight: 1.45 }}>{d}</span>}
              {!blank ? (
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10, color: "var(--k-status-success-100)", fontWeight: 600 }}>
                  <svg width="11" height="11" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 16l6 6 14-14"></path></svg>
                  confirmed aloud — Olivier Gorin
                </span>
              ) : <span style={{ fontSize: 10, color: "rgba(255,255,255,0.45)" }}>sponsor reads the wall aloud to confirm</span>}
            </span>
          </div>
        ))}
      </div>
    </SheetFrame>
  );
}

/* ================= Breakpoint Map (unchanged matrix wall) ================= */

const BP_STEPS = [
  { step: "Source extraction", sys: "T24 · RFO Master · branch / subsidiary files" },
  { step: "Consolidation / RFO handoff", sys: "RFO Master · spreadsheets · local extracts" },
  { step: "Staging / mapping", sys: "Staging area · mapping sheets" },
  { step: "Validation / INVOKE", sys: "INVOKE · upload tool · manual packaging" },
  { step: "Submission / SOFIE", sys: "SOFIE · regulator interface · feedback workbook" },
  { step: "Correction loop", sys: "Source tickets · email threads · spreadsheets" },
];

const BP_ROWS = ["Trigger / input", "Pain or failure mode", "Root-cause hypothesis", "Current owner", "Downstream impact", "Evidence today", "Priority"];

const BP_CELLS = [
  { "Trigger / input": "Month-end cut; extracts arrive by file drop", "Pain or failure mode": "Missing or late branch files discovered mid-cycle", "Root-cause hypothesis": "No source contract or arrival monitoring", "Current owner": "Source owners (per system, informal)", "Downstream impact": "Whole-cycle delay; rushed validation window", "Evidence today": "Email trail only", prio: ["Critical", "var(--k-status-critical-100)"] },
  { "Trigger / input": "All extracts present in RFO Master", "Pain or failure mode": "Inconsistent reference values across feeds", "Root-cause hypothesis": "No golden reference set; manual merge decisions", "Current owner": "AnaCredit team (by default)", "Downstream impact": "Identifier defects surface late, at validation", "Evidence today": "Spreadsheet versions, no merge log", prio: ["Error", "var(--k-status-error-100)"] },
  { "Trigger / input": "Consolidated dataset handed to analysts", "Pain or failure mode": "Mapping logic undocumented (\u201c~30 min of rules\u201d)", "Root-cause hypothesis": "Logic lives in sheets and analyst memory", "Current owner": "Reporting analysts", "Downstream impact": "Untestable transformations; key-person risk", "Evidence today": "Mapping sheets, unversioned", prio: ["Error", "var(--k-status-error-100)"] },
  { "Trigger / input": "Staged data ready for INVOKE run", "Pain or failure mode": "Validation failures discovered at end of chain", "Root-cause hypothesis": "Checks run once, late — not at each handoff", "Current owner": "Reporting analysts", "Downstream impact": "Compressed correction window before cut-off", "Evidence today": "INVOKE reports, per run only", prio: ["Critical", "var(--k-status-critical-100)"] },
  { "Trigger / input": "Reporting-lead sign-off", "Pain or failure mode": "Corrections requested after submission", "Root-cause hypothesis": "No pre-submission reconciliation vs. FINREP", "Current owner": "Reporting lead", "Downstream impact": "Regulator credibility erosion; rework", "Evidence today": "Submission receipts; feedback workbook", prio: ["Warning", "var(--k-status-warning-100)"] },
  { "Trigger / input": "BCL feedback or INVOKE failure", "Pain or failure mode": "Case-by-case fixes; loop runs ~1 week", "Root-cause hypothesis": "No owner routing; no recurrence memory", "Current owner": "Unclear — resolved by escalation", "Downstream impact": "Same defects recur monthly", "Evidence today": "Email threads", prio: ["Critical", "var(--k-status-critical-100)"] },
];

const DEFECT_CLASSES = [
  { k: "Source", c: "#3E8AC2" }, { k: "Reference", c: "#5BA2AE" }, { k: "Mapping", c: "#8A4FBF" },
  { k: "Rule", c: "#E68A00" }, { k: "Submission handling", c: "#6B7780" },
];

function BreakpointMap() {
  return (
    <SheetFrame
      lens="data"
      eyebrow="10:20–11:35 · part 1 of 2 · wall frame"
      title="Breakpoint Map"
      sub="Pre-filled from the BiL current-state deck and transcripts. Workshop job: challenge each cell with failure cards, re-classify defect classes, and re-vote priority with severity dots."
      fmt={FMT.A0L}
      titleSize={34}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span className="t-caption">Defect classes</span>
        {DEFECT_CLASSES.map((d) => (
          <span key={d.k} className="pill" style={{ borderColor: d.c, color: "var(--fg-1)" }}>
            <span style={{ width: 8, height: 8, borderRadius: 99, background: d.c, marginRight: 7 }}></span>{d.k}
          </span>
        ))}
        <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--fg-muted)" }}>Current-state flow → left to right · sticky notes land in cells</span>
      </div>
      <table className="ktable" style={{ flex: "1 1 auto" }}>
        <colgroup>
          <col style={{ width: 190 }} />
          {BP_STEPS.map((s, i) => <col key={i} />)}
        </colgroup>
        <thead>
          <tr>
            <th style={{ background: "#fff", border: "none" }}></th>
            {BP_STEPS.map((s, i) => (
              <th key={i} style={{ padding: "12px 14px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, textTransform: "none", letterSpacing: 0, color: "var(--fg-1)", fontFamily: "var(--font-display)", fontWeight: 500 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)" }}>{i + 1}</span>
                  {s.step}
                  {i < BP_STEPS.length - 1 ? <span style={{ marginLeft: "auto", color: "var(--fg-subtle)" }}>→</span> : null}
                </span>
                <span style={{ display: "block", marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 400, letterSpacing: 0, textTransform: "none", color: "var(--fg-muted)" }}>{s.sys}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {BP_ROWS.map((row) => (
            <tr key={row} style={{ height: row === "Priority" ? 60 : 100 }}>
              <td className="row-label">{row}</td>
              {BP_CELLS.map((col, ci) => (
                <td key={ci}>
                  {row === "Priority" ? (
                    <span className="pill" style={{ borderColor: col.prio[1], color: "var(--fg-1)" }}>
                      <span style={{ width: 9, height: 9, borderRadius: 99, background: col.prio[1], marginRight: 7 }}></span>{col.prio[0]}
                    </span>
                  ) : (
                    <span style={{ fontSize: 12.5 }}>{col[row]}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
        <div className="panel">
          <div className="panel-head">Cannot automate safely yet — lineage or stewardship unclear</div>
          <div className="panel-body" style={{ minHeight: 64 }}>
            Branch/subsidiary counterparty reference fields — no named steward after consolidation. Collateral valuations — manual interpretation in valuation chain, steward unresolved.
          </div>
        </div>
        <div className="panel">
          <div className="panel-head">Selected exposure for the one-loan trace</div>
          <div className="panel-body" style={{ minHeight: 64 }}>
            Stylised corporate term loan: T24-originated, EUR 2.4M, property collateral, two debtors.
          </div>
        </div>
      </div>
    </SheetFrame>
  );
}

/* ================= One-Loan Trace — lineage flow ================= */

const TRACE_STAGES = [
  { k: "Source", c: "#1F5580" },
  { k: "Transformation", c: "#29707A" },
  { k: "Rule / check", c: "#8A4FBF" },
  { k: "Steward", c: "#5BA2AE" },
  { k: "Evidence", c: "#6B7780" },
];

const TRACE_ROWS = [
  { el: "Counterparty ID", ent: "Counterparty reference", chips: ["T24 · CUST.NO + RCS/LEI", "RIAD-aligned ID mapping", "RC-001 · LEI completeness", "Ana Marques · CDO", "Lineage card + snapshot ID"], sev: "block", risk: "Branch entities lack stable IDs" },
  { el: "Legal form", ent: "Counterparty reference", chips: ["RFO Master · LEGAL.FORM", "Code table → enumeration", "Referential vs. RIAD", "Ana Marques · CDO", "Code-table version ref"], sev: "block", risk: "Free-text values in older records" },
  { el: "Sector", ent: "Counterparty reference", chips: ["RFO Master · SECTOR", "ESA 2010 mapping v2026.1", "RC-003 · referential", "Ana Marques · CDO", "Mapping table + change log"], sev: "block", risk: "Dual-coded counterparties ambiguous" },
  { el: "Instrument type", ent: "Instrument dataset", chips: ["T24 · LD.LOANS.TYPE", "Product → type matrix", "Enumeration validation", "Sofia Krier · Lending Ops", "Product config export"], sev: "block", risk: "New products land unmapped" },
  { el: "Interest rate", ent: "Instrument dataset", chips: ["T24 · INTEREST.RATE + basis", "Annualised normalisation", "RC-005 · plausibility band", "Sofia Krier · Lending Ops", "Rate calc worksheet"], sev: "warn", risk: "Basis conventions differ by branch" },
  { el: "Maturity", ent: "Instrument dataset", chips: ["T24 · MATURITY.DATE", "Date normalisation · ISO 8601", "RC-006 · vs. inception", "Sofia Krier · Lending Ops", "Rule result in pack"], sev: "block", risk: "Rolled-over loans keep stale dates" },
  { el: "Protection link", ent: "Cpty-instrument + protection", chips: ["T24 · COLLATERAL.ID", "Bridge-table link build", "Referential integrity", "Tom Reuter · Ops Lead", "Linkage report per run"], sev: "block", risk: "Many-to-many links partly manual" },
  { el: "Collateral value", ent: "Protection received", chips: ["Collateral sys · VALUATION", "FX + haircut normalisation", "Plausibility vs. index", "Risk + Lending Ops · shared", "Valuation certificate ref"], sev: "warn", risk: "Stale valuations on property" },
];

/* entity model — one loan is three joined records, told simply */
function EntityModelGraph() {
  const NODES = [
    { name: "Counterparty", plain: "who owes the money", c: "#1F5580", n: 3 },
    { name: "Instrument", plain: "what is owed — the loan itself", c: "#29707A", n: 3 },
    { name: "Protection", plain: "what secures it", c: "#5BA2AE", n: 2 },
  ];
  const JOINS = ["counterparty-instrument", "protection-received"];
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 16, color: "var(--fg-1)", marginBottom: 10, letterSpacing: "-0.01em" }}>
        One loan ≠ one row.<br />It is three records, joined by keys.
      </div>
      {NODES.map((node, i) => (
        <React.Fragment key={node.name}>
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            background: node.c + "12", borderLeft: `4px solid ${node.c}`,
            borderRadius: "0 8px 8px 0", padding: "12px 14px",
          }}>
            <span style={{ minWidth: 0, flex: 1 }}>
              <span style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--fg-1)", lineHeight: 1.1 }}>{node.name}</span>
              <span style={{ display: "block", fontSize: 10.5, color: "var(--fg-muted)", marginTop: 3 }}>{node.plain}</span>
            </span>
            <span style={{ textAlign: "right", flex: "0 0 auto" }}>
              <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 26, lineHeight: 1, color: "var(--k-status-warning-110)" }}>{node.n}</span>
              <span style={{ display: "block", fontSize: 8.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", marginTop: 2 }}>traced →</span>
            </span>
          </div>
          {i < NODES.length - 1 ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2px 0" }}>
              <span style={{ width: 1.5, height: 9, background: "var(--k-cool-gray-40)" }}></span>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                border: "1px dashed var(--k-cool-gray-40)", borderRadius: 999,
                padding: "3px 12px", background: "#fff",
                fontFamily: "var(--font-mono)", fontSize: 8.5, color: "var(--fg-muted)",
              }}>
                <svg width="10" height="10" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M13 19a6 6 0 0 1 0-8.5l4-4a6 6 0 0 1 8.5 8.5l-2.5 2.5 M19 13a6 6 0 0 1 0 8.5l-4 4a6 6 0 0 1-8.5-8.5l2.5-2.5"></path></svg>
                {JOINS[i]}
              </span>
              <span style={{ width: 1.5, height: 9, background: "var(--k-cool-gray-40)" }}></span>
            </div>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}

function TraceChip({ text, stage, sev, blank }) {
  const S = TRACE_STAGES[stage];
  if (blank) {
    return <div className="co-area" style={{ flex: 1, minWidth: 0, height: 44, borderRadius: 6, border: "1px dashed var(--k-ai-spruce-20)" }}></div>;
  }
  const isRule = stage === 2;
  const isSteward = stage === 3;
  return (
    <div style={{
      flex: 1, minWidth: 0, height: 44, borderRadius: 6, background: "#fff",
      border: "1px solid var(--border-1)", borderTop: `3px solid ${S.c}`,
      display: "flex", alignItems: "center", gap: 7, padding: "0 9px",
      boxShadow: "0 1px 2px rgba(15,23,42,0.05)",
    }}>
      {isRule ? (
        <span style={{ width: 8, height: 8, borderRadius: sev === "block" ? 2 : 99, background: sev === "block" ? "var(--k-status-error-100)" : "var(--k-status-warning-100)", flex: "0 0 auto" }}></span>
      ) : null}
      {isSteward ? (
        <span style={{ width: 20, height: 20, borderRadius: 999, background: "var(--k-ai-spruce-12)", color: "var(--k-spruce-70)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 8.5, fontWeight: 700, flex: "0 0 auto" }}>
          {text.split(" ").slice(0, 2).map((w) => w[0]).join("")}
        </span>
      ) : null}
      <span style={{ fontSize: 10.5, color: "var(--fg-1)", lineHeight: 1.25, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{text}</span>
      {isRule ? <span style={{ marginLeft: "auto", fontSize: 8.5, fontWeight: 700, letterSpacing: "0.06em", color: sev === "block" ? "var(--k-status-error-110)" : "var(--k-status-warning-110)", flex: "0 0 auto" }}>{sev === "block" ? "BLOCK" : "WARN"}</span> : null}
    </div>
  );
}

function TraceArrow() {
  return <span style={{ color: "var(--fg-subtle)", fontSize: 12, flex: "0 0 14px", textAlign: "center" }}>→</span>;
}

function OneLoanTrace({ blank }) {
  return (
    <SheetFrame
      lens="data"
      eyebrow="Activity 2 · 10:20–11:35 · 1 per group"
      title="One-Loan Trace"
      sub={blank
        ? "Co-creation template — pick one real exposure and trace each business element source → evidence. No steward, no automation."
        : "Outcome — the EUR 2.4M corporate term loan traced end to end; every element has a named steward and an evidence artifact."}
      fmt={FMT.A1L}
      titleSize={30}
      code="BRD-02"
      refs={["→ BRD-03 · rules", "→ SCH-01 · lineage", "→ DC-01"]}
    >
      <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 18, flex: "1 1 auto", minHeight: 0 }}>
        {/* exposure card + entity model */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ background: "var(--k-dark-stone-90)", color: "#fff", borderRadius: 10, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>The exposure</span>
            {blank ? (
              <div className="co-area" style={{ borderRadius: 6, height: 64 }}></div>
            ) : (
              <React.Fragment>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 30, lineHeight: 1, letterSpacing: "-0.01em" }}>EUR 2.4M</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.75)" }}>Corporate term loan · real reporting exposure</span>
              </React.Fragment>
            )}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {(blank ? ["pick one real loan"] : ["T24-originated", "property collateral", "two debtors"]).map((t) => (
                <span key={t} style={{ fontSize: 9.5, padding: "3px 9px", borderRadius: 999, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.16)", color: "rgba(255,255,255,0.8)" }}>{t}</span>
              ))}
            </div>
          </div>
          {/* entity-relationship diagram */}
          <div style={{ background: "#fff", border: "1px solid var(--border-1)", borderRadius: 10, padding: "14px 16px 10px", flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-muted)" }}>Entity model — trace relationships, not a flat record</span>
            <EntityModelGraph />
            <span style={{ fontSize: 10, color: "var(--fg-muted)", lineHeight: 1.4 }}>The amber counts are the eight traced elements — each lands in one of the three joined records.</span>
          </div>
          {/* stage legend */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {TRACE_STAGES.map((s) => (
              <span key={s.k} style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 9.5, color: "var(--fg-muted)" }}>
                <span style={{ width: 10, height: 4, borderRadius: 2, background: s.c }}></span>{s.k}
              </span>
            ))}
          </div>
        </div>

        {/* lineage tracks */}
        <div style={{ display: "flex", flexDirection: "column", gap: 7, minWidth: 0 }}>
          <div style={{ display: "flex", gap: 0, alignItems: "center" }}>
            <span style={{ flex: "0 0 128px" }}></span>
            {TRACE_STAGES.map((s, i) => (
              <React.Fragment key={s.k}>
                <span style={{ flex: 1, fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-muted)", textAlign: "center" }}>{s.k}</span>
                {i < TRACE_STAGES.length - 1 ? <span style={{ flex: "0 0 14px" }}></span> : null}
              </React.Fragment>
            ))}
            <span style={{ flex: "0 0 150px", fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--k-status-warning-110)", textAlign: "center" }}>Risk note</span>
          </div>
          {TRACE_ROWS.map((r) => (
            <div key={r.el} style={{ display: "flex", alignItems: "center", gap: 0, flex: 1, minHeight: 0 }}>
              <span style={{ flex: "0 0 128px", paddingRight: 10 }}>
                <span style={{ display: "block", fontSize: 11.5, fontWeight: 600, color: "var(--fg-1)", lineHeight: 1.2 }}>{r.el}</span>
                <span style={{ display: "block", fontSize: 8.5, fontFamily: "var(--font-mono)", color: "var(--fg-muted)", marginTop: 2 }}>{r.ent}</span>
              </span>
              {r.chips.map((c, i) => (
                <React.Fragment key={i}>
                  <TraceChip text={c} stage={i} sev={r.sev} blank={blank} />
                  {i < r.chips.length - 1 ? <TraceArrow /> : null}
                </React.Fragment>
              ))}
              <span style={{ flex: "0 0 150px", paddingLeft: 10 }}>
                {blank
                  ? <span className="co-area" style={{ display: "block", height: 30, borderRadius: 5 }}></span>
                  : <span style={{ display: "flex", alignItems: "flex-start", gap: 5, fontSize: 9.5, color: "var(--k-status-warning-110)", lineHeight: 1.3 }}>
                      <svg width="10" height="10" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}><path d="M16 4l14 24H2L16 4z M16 13v7 M16 24v0.5"></path></svg>
                      {r.risk}
                    </span>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SheetFrame>
  );
}

Object.assign(window, { ValueScorecard, BreakpointMap, OneLoanTrace });
