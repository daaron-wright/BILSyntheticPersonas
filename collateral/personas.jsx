// personas.jsx — 10 synthetic persona profiles (A4 landscape), human-centered
// format: portrait + quote + context · goals · frustrations · AI trust scales.
// Composites built from the synthetic interview transcripts — not real BiL staff.
// Exports: PersonaCard, PERSONAS, FMT_A4L

const FMT_A4L = { w: 1123, h: 794, tag: "A4 · 297×210 mm" };

const PERSONAS = [
  {
    id: "P-BIL-01",
    name: "Claire Weber",
    initials: "CW",
    photo: "assets/personas/claire.png",
    meta: "she/her · 47 · Luxembourg City",
    role: "Head of Regulatory Reporting",
    chips: ["Head of Reg. Reporting", "11 yrs at BiL", "Team of 7", "owns the deadline"],
    quote: "If I still need three calls to understand a red item, the UI has not solved the problem.",
    about: [
      "Claire owns the monthly AnaCredit submission and the conversation when it goes wrong. By the time the bank is discussing corrections, her team owns the deadline — even when the cause sits upstream. ",
      "She is rewarded for clean cycles, judged on regulator returns, and asked to attest to numbers assembled under time pressure.",
    ],
    context: [
      ["Reports to", "CFO"],
      ["Scope", "AnaCredit · FINREP · BCL returns"],
      ["Systems", "INVOKE · SOFIE · staging"],
      ["Owns (A)", "Submission readiness · overrides"],
      ["Loudest in", "Value · Controls · Evidence"],
    ],
    goals: [
      { t: "A clean evidence pack every cycle, by default", s: "Defensibility is the real signal — efficiency is welcome, secondary." },
      { t: "Fewer late escalations and regulator returns", s: "Every return becomes a governance problem she has to narrate upward." },
      { t: "Triage in minutes, not phone calls", s: "Failed rule, severity, lineage, owner, previous treatment — on one screen." },
    ],
    frustrations: [
      { tone: "error", t: "One rejection code hides three causes", s: "Bad source data, bad mapping, or interpretation — outside, they all look like \u201creporting got it wrong\u201d." },
      { tone: "warning", t: "Owns the deadline, not the cause", s: "Upstream defects become her escalations in the last 48 hours." },
      { tone: "info", t: "Evidence assembled by memory", s: "Reconstructing who approved what costs days each quarter." },
    ],
    scales: [
      { left: "AI may act", right: "AI suggests only", pos: 0.74, note: "recommend and summarise — never silently alter a reportable value" },
      { left: "Trusts defaults", right: "Demands evidence", pos: 0.85, note: "which rule set ran, who approved, is the file reproducible" },
    ],
  },
  {
    id: "P-BIL-02",
    name: "Tom Reuter",
    initials: "TR",
    photo: "assets/personas/tom.png",
    meta: "he/him · 38 · Esch-sur-Alzette",
    role: "AnaCredit Ops Lead",
    chips: ["Ops Lead", "6 yrs on AnaCredit", "2 analysts", "runs the cycle"],
    quote: "The same failures come back, but the surrounding evidence is always scattered.",
    about: [
      "Tom runs the monthly mechanics: consolidation, staging, INVOKE runs, correction loops. His real job has become reconstructing context — the same defect classes return every cycle with their evidence spread across files, emails, and memory. ",
      "He wants his time to shift from hunting to deciding.",
    ],
    context: [
      ["Reports to", "Head of Reg. Reporting"],
      ["Scope", "Monthly run · exception triage"],
      ["Systems", "T24 extracts · staging · INVOKE"],
      ["Owns (R)", "Triage · corrections · resubmission"],
      ["Loudest in", "Data · Controls"],
    ],
    goals: [
      { t: "Triage that arrives pre-assembled", s: "Likely owner, rule severity, historical pattern, suggested remediation." },
      { t: "Before-and-after evidence on every change", s: "Plus whether the same problem was seen last month — or root-cause work resets." },
      { t: "A system that is boring in the right way", s: "Routine issues caught consistently, routed clearly, overridden only with a named reason." },
    ],
    frustrations: [
      { tone: "error", t: "Identifier and classification detective work", s: "Small-looking defects that expose a broken relationship, never a single-cell fix." },
      { tone: "warning", t: "Context reconstruction eats the cycle", s: "Evidence scattered across files, emails, and memory." },
      { tone: "info", t: "Recurring defects, reset learning", s: "No structural memory of last month's treatment." },
    ],
    scales: [
      { left: "AI may act", right: "AI suggests only", pos: 0.55, note: "automation fine for routine; interpretation and multi-record changes stay human" },
      { left: "Trusts defaults", right: "Demands evidence", pos: 0.7, note: "before/after values and the reason for the change" },
    ],
  },
  {
    id: "P-BIL-03",
    name: "Ana Marques",
    initials: "AM",
    photo: "assets/personas/ana.png",
    meta: "she/her · 45 · Luxembourg City",
    role: "Chief Data Officer",
    chips: ["CDO", "3 yrs at BiL", "data stewardship", "lineage authority"],
    quote: "The bank often has data, but not a stable steward for the meaning of the data.",
    about: [
      "Ana's concern is ownership gaps — shared fields that look governed until an exception appears and everyone discovers the stewardship boundary was implicit. ",
      "For her, the one-loan trace is the workshop's most valuable hour: it turns \u201cthe source is T24\u201d into field-level accountability.",
    ],
    context: [
      ["Reports to", "COO"],
      ["Scope", "Data governance · stewardship"],
      ["Systems", "RFO Master · data catalog"],
      ["Owns (A)", "Source-data correction · lineage"],
      ["Loudest in", "Data · Policy"],
    ],
    goals: [
      { t: "A critical-data inventory for AnaCredit", s: "Every attribute mapped to steward, transformation, and evidence source." },
      { t: "Source-of-truth vs. policy-derived, separated", s: "Observed data and inferred classification must never blur." },
      { t: "Stewardship that survives system boundaries", s: "Meaning needs an owner after every handoff, not just at origin." },
    ],
    frustrations: [
      { tone: "error", t: "Shared fields with no true owner", s: "Governed-looking until the first exception lands." },
      { tone: "warning", t: "Vague provenance statements", s: "\u201cIt comes from T24\u201d is not a lineage." },
      { tone: "info", t: "Engineering asked to encode ambiguity", s: "Build starts before stewardship is resolved." },
    ],
    scales: [
      { left: "AI may act", right: "AI suggests only", pos: 0.68, note: "useful for diagnosis; risky when it blurs observed vs. inferred" },
      { left: "Trusts defaults", right: "Demands evidence", pos: 0.8, note: "source, steward, transformation owner, rule path — per attribute" },
    ],
  },
  {
    id: "P-BIL-04",
    name: "Marc Holzem",
    initials: "MH",
    photo: "assets/personas/marc.png",
    meta: "he/him · 52 · Strassen",
    role: "Chief Risk Officer",
    chips: ["CRO", "risk & policy", "challenge function", "board reporting"],
    quote: "Speed without auditability is not a win in a regulated control process.",
    about: [
      "Marc protects the bank's risk narrative. Weak reporting controls contaminate it: if the bank cannot explain the pipeline behind a regulatory number, confidence in the whole control environment falls. ",
      "His red line for the agentic agenda: acceleration is fine — delegation of accountability to a model is not.",
    ],
    context: [
      ["Reports to", "CEO · Board risk committee"],
      ["Scope", "Risk appetite · policy authority"],
      ["Systems", "Risk warehouse · committee packs"],
      ["Owns (A)", "Rule interpretation · material overrides"],
      ["Loudest in", "Policy · Controls"],
    ],
    goals: [
      { t: "Hard separation of rule layers", s: "Deterministic rules vs. probabilistic suggestions — blur them and challenge becomes impossible." },
      { t: "Severity, impact, owner, rationale on anything material", s: "Plus recurrence — has this issue been seen before?" },
      { t: "A faster process that is also more legible", s: "The first release is unacceptable if it trades auditability for speed." },
    ],
    frustrations: [
      { tone: "error", t: "Acceleration mistaken for delegation", s: "The bank cannot outsource accountability to a model." },
      { tone: "warning", t: "Illegible automation", s: "A workflow that is faster but harder to challenge is a net loss." },
      { tone: "info", t: "Risk story drift across frameworks", s: "AnaCredit decisions that quietly contradict FINREP." },
    ],
    scales: [
      { left: "AI may act", right: "AI suggests only", pos: 0.82, note: "material overrides, interpretive classifications, residual warnings — all human" },
      { left: "Trusts defaults", right: "Demands evidence", pos: 0.9, note: "challenge requires the full decision path" },
    ],
  },
  {
    id: "P-BIL-05",
    name: "Sofia Krier",
    initials: "SK",
    meta: "she/her · 41 · Mamer",
    role: "Lending Ops Owner",
    chips: ["Lending Ops", "T24 owner", "source systems", "9 yrs at BiL"],
    quote: "We get asked for an explanation when the process is already under deadline pressure.",
    about: [
      "Sofia owns the source systems where AnaCredit problems actually live. Issues reach her late and compressed, so sensible source fixes get treated like urgent exceptions. ",
      "A regulatory field can look simple at reporting level and still be product-dependent or operationally overloaded in the source.",
    ],
    context: [
      ["Reports to", "Head of Lending Operations"],
      ["Scope", "T24 · branch / subsidiary feeds"],
      ["Systems", "T24 · product configuration"],
      ["Owns (R)", "Source corrections · root causes"],
      ["Loudest in", "Data · People"],
    ],
    goals: [
      { t: "Early visibility, structured requests", s: "Rule, exact field, affected population, downstream consequence — then she can move fast." },
      { t: "Fixes at the right layer", s: "Not every issue should become a reporting-only workaround." },
      { t: "Population counts to justify prioritisation", s: "Source-system change competes with product work; evidence wins the slot." },
    ],
    frustrations: [
      { tone: "error", t: "Late, compressed escalations", s: "Source fixes demanded as urgent exceptions near the deadline." },
      { tone: "warning", t: "Reporting-level assumptions about sources", s: "The source system was not built around the regulator's logic." },
      { tone: "info", t: "Recurring issues without counts", s: "Hard to justify prioritisation without affected-population data." },
    ],
    scales: [
      { left: "AI may act", right: "AI suggests only", pos: 0.78, note: "suggested fixes fine; silent upstream mutation of business meaning never" },
      { left: "Trusts defaults", right: "Demands evidence", pos: 0.65, note: "exact source field, population count, recurrence" },
    ],
  },
  {
    id: "P-BIL-06",
    name: "Paul Faber",
    initials: "PF",
    photo: "assets/personas/paul.png",
    meta: "he/him · 49 · Luxembourg City",
    role: "Internal Audit Lead",
    chips: ["Internal Audit", "control testing", "SoD guardian", "replay-first"],
    quote: "Can I replay it? If not, the process is relying on memory somewhere.",
    about: [
      "Paul's first question of any new control workflow is whether it can be replayed end to end. Evidence packs that prove the final number but not the control story are his recurring finding. ",
      "Audit-ready is not perfection — it is reproducibility, complete evidence, stable access control, and a clear \u201cwhy\u201d.",
    ],
    context: [
      ["Reports to", "Audit committee"],
      ["Scope", "Control design · evidence review"],
      ["Systems", "Audit workpapers · log access"],
      ["Owns (C)", "Trust Record design · SoD review"],
      ["Loudest in", "Evidence"],
    ],
    goals: [
      { t: "Replay any run from its Trust Record", s: "Snapshot ID, policy version, rule results, approvals, overrides, submission, feedback linkage." },
      { t: "Segregation of duties by design", s: "No one person authors, approves, publishes, and attests the same change." },
      { t: "Provenance on every AI suggestion", s: "A recommendation supported by nothing adds narrative, not assurance." },
    ],
    frustrations: [
      { tone: "error", t: "Evidence proves the number, not the control story", s: "Which rule applied, who overrode what, which version was in force — missing." },
      { tone: "warning", t: "Informal evidence in the loop", s: "Email threads standing in for approval logs." },
      { tone: "info", t: "Access control as an afterthought", s: "Who may see decision histories is rarely designed up front." },
    ],
    scales: [
      { left: "AI may act", right: "AI suggests only", pos: 0.8, note: "advisory content with strong provenance, clearly marked" },
      { left: "Trusts defaults", right: "Demands evidence", pos: 0.95, note: "if it isn't captured, it didn't happen" },
    ],
  },
  {
    id: "P-BIL-07",
    name: "Elise Hoffmann",
    initials: "EH",
    meta: "she/her · 44 · Luxembourg City",
    role: "Supervisor Liaison",
    chips: ["Regulator-facing", "BCL contact", "response packs", "one voice"],
    quote: "The issue is rarely only the value; it is whether the bank can respond clearly and consistently.",
    about: [
      "Elise owns the conversation with the BCL when a correction request lands — and every request is an instant credibility test. ",
      "What weakens confidence fastest is different teams telling different versions of the same story; that usually means evidence is fragmented or ownership unsettled.",
    ],
    context: [
      ["Reports to", "Head of Reg. Reporting"],
      ["Scope", "BCL / ECB correspondence"],
      ["Systems", "Feedback workbooks · response packs"],
      ["Owns (R)", "Feedback intake · response assembly"],
      ["Loudest in", "Evidence · Close"],
    ],
    goals: [
      { t: "One consistent story per correction request", s: "Rule context, affected scope, deterministic vs. interpretive, remediation path, timing." },
      { t: "Feedback as structured input", s: "Classified, routed, linked to the run — never just an email prompt." },
      { t: "Response packs without manual reconstruction", s: "Issue summary, run ID, lineage, corrective action, named approver." },
    ],
    frustrations: [
      { tone: "error", t: "Fragmented evidence at the worst moment", s: "Assembling the story while the regulator waits." },
      { tone: "warning", t: "20-working-day clocks", s: "BCL revision deadlines compress everything downstream." },
      { tone: "info", t: "One-off vs. structural, unclear", s: "She can't say whether an issue signals a deeper weakness." },
    ],
    scales: [
      { left: "AI may act", right: "AI suggests only", pos: 0.6, note: "drafting and classification welcome; external responses stay human-signed" },
      { left: "Trusts defaults", right: "Demands evidence", pos: 0.75, note: "full chain from feedback receipt to approved correction" },
    ],
  },
  {
    id: "P-BIL-08",
    name: "Olivier Gorin",
    initials: "OG",
    photo: "assets/personas/olivier.jpg",
    meta: "he/him · 55 · Luxembourg City",
    role: "Executive Sponsor",
    chips: ["Sponsor", "COO office", "funds the build", "agentic-bank agenda"],
    quote: "AnaCredit is only the lighthouse. The reusable asset is the governed operating pattern.",
    about: [
      "Olivier sponsors this because AnaCredit is a practical place to prove the bank can modernise a regulated workflow safely — specific enough to build, important enough to matter. ",
      "He needs decisions from the workshop, not inspiration: problem statement, metrics, decision rights, and what the first release will actually prove.",
    ],
    context: [
      ["Reports to", "CEO"],
      ["Scope", "Funding · phase-exit decisions"],
      ["Systems", "Steering packs · value scorecard"],
      ["Owns (A)", "Sponsor decisions · go / no-go"],
      ["Loudest in", "Value · Close"],
    ],
    goals: [
      { t: "A defensible value claim", s: "Measurable reduction in manual effort and cycle time, better first-pass quality." },
      { t: "Decision rights settled before build", s: "Engineering should not discover the operating model while building the platform." },
      { t: "A reusable governed pattern", s: "Policy, agents, approval, evidence, replay — beyond this one use case." },
    ],
    frustrations: [
      { tone: "error", t: "Impressive demos on unresolved foundations", s: "Hidden manual work, unclear owners, unresolved authority." },
      { tone: "warning", t: "Funding stories without baselines", s: "\u201cBetter quality\u201d — measured how?" },
      { tone: "info", t: "Technology framing", s: "The bank is funding control, speed, and confidence — not a tech story." },
    ],
    scales: [
      { left: "AI may act", right: "AI suggests only", pos: 0.45, note: "automate prepared control work — accountability stays visible" },
      { left: "Trusts defaults", right: "Demands evidence", pos: 0.6, note: "metrics that justify continued funding" },
    ],
  },
  {
    id: "P-BIL-09",
    name: "David Schmit",
    initials: "DS",
    photo: "assets/personas/david.png",
    meta: "he/him · 39 · Bertrange",
    role: "IT Integration Lead",
    chips: ["IT lead", "platform & contracts", "versioning", "replay / rollback"],
    quote: "Manual uploads are doing control work today, and that work is undocumented.",
    about: [
      "David sees the biggest technical risk in hidden checkpoints — the control work currently performed by manual uploads and handoffs that nobody wrote down. Automate them and the control must be replaced deliberately. ",
      "Versioning is his day-one requirement: schema, rule, payload, release timing.",
    ],
    context: [
      ["Reports to", "CIO"],
      ["Scope", "Integration · runtime platform"],
      ["Systems", "Orchestrator · OPA · schema registry"],
      ["Owns (R)", "Hotfix clearance · releases"],
      ["Loudest in", "Controls · Policy"],
    ],
    goals: [
      { t: "Contracted payloads and a golden dataset before build", s: "Plus exception taxonomy, rule catalog, approval model — or engineering builds on assumptions." },
      { t: "Replay, rollback, observability from day one", s: "A run ID that ties payload, rule set, decisions, and evidence together." },
      { t: "Version changes as release management", s: "BCL schema v1.0.13 → v1.0.14 is an engineering event, not a footnote." },
    ],
    frustrations: [
      { tone: "error", t: "Undocumented control work in manual steps", s: "Invisible until automation removes it." },
      { tone: "warning", t: "Discovery that skips versioning", s: "The detail that decides stable vs. brittle." },
      { tone: "info", t: "Advisory and authoritative conflated", s: "AI suggestions must sit behind a controlled interface." },
    ],
    scales: [
      { left: "AI may act", right: "AI suggests only", pos: 0.62, note: "advisory service behind a controlled interface — never the policy result" },
      { left: "Trusts defaults", right: "Demands evidence", pos: 0.8, note: "inspect a run end to end; reverse a release safely" },
    ],
  },
  {
    id: "P-BIL-10",
    name: "Mia Janssens",
    initials: "MJ",
    meta: "she/her · 36 · Luxembourg City",
    role: "Product / Engineering Owner",
    chips: ["Product owner", "backlog & scope", "demo contract", "first release"],
    quote: "In this use case, \u201cworks on sample data\u201d is not enough.",
    about: [
      "Mia protects the first release from scope ambiguity. Her biggest risk is building the full target architecture before rule authority and artifact contracts are stable — attractive demos, weak production foundations. ",
      "Her definition of done: built, tested, logged, explainable, approved, replayable.",
    ],
    context: [
      ["Reports to", "Head of Digital / CIO"],
      ["Scope", "Backlog · acceptance criteria"],
      ["Systems", "Issue tracker · demo environment"],
      ["Owns (A)", "Demo Contract · backlog slicing"],
      ["Loudest in", "Close"],
    ],
    goals: [
      { t: "Acceptance criteria in business language, testable in engineering language", s: "The Demo Contract must be clear enough to drive backlog slicing." },
      { t: "Deterministic first, learning behind", s: "Validation, lineage, human review, evidence — then reconciliation and learning." },
      { t: "Open questions logged publicly", s: "Owner, impact, due date — hidden ambiguity slows delivery later." },
    ],
    frustrations: [
      { tone: "error", t: "Full target architecture, too early", s: "Before rule authority and contracts are stable." },
      { tone: "warning", t: "Workshop outputs that don't slice", s: "Themes instead of testable criteria." },
      { tone: "info", t: "Hidden ambiguity", s: "Unowned open questions surfacing mid-sprint." },
    ],
    scales: [
      { left: "AI may act", right: "AI suggests only", pos: 0.5, note: "ship the deterministic layer first; suggestions are P2 scope" },
      { left: "Trusts defaults", right: "Demands evidence", pos: 0.7, note: "no guesswork on hierarchy, contracts, approval boundaries" },
    ],
  },
];

/* ---------- pieces ---------- */

function PersonaPortrait({ initials }) {
  return (
    <svg width="92" height="92" viewBox="0 0 112 112" style={{ display: "block" }}>
      <defs>
        <linearGradient id={"pp-bg-" + initials} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#29707A"></stop>
          <stop offset="1" stopColor="#5BA2AE"></stop>
        </linearGradient>
        <linearGradient id={"pp-fg-" + initials} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.95"></stop>
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.65"></stop>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="112" height="112" rx="6" fill={"url(#pp-bg-" + initials + ")"}></rect>
      <circle cx="56" cy="46" r="42" fill="rgba(255,255,255,0.10)"></circle>
      <circle cx="56" cy="44" r="20" fill={"url(#pp-fg-" + initials + ")"}></circle>
      <path d="M16 112 C 18 86, 36 70, 56 70 C 76 70, 94 86, 96 112 Z" fill={"url(#pp-fg-" + initials + ")"}></path>
      <text x="56" y="50" textAnchor="middle" style={{ fontFamily: '"TWK Everett", sans-serif', fontSize: 18, fontWeight: 500, fill: "#29707A", letterSpacing: "-0.02em" }}>{initials}</text>
    </svg>
  );
}

function TrustScale({ s }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, color: "var(--fg-2)", marginBottom: 4, gap: 8 }}>
        <span style={{ fontWeight: 500, whiteSpace: "nowrap" }}>{s.left}</span>
        <span style={{ fontWeight: 500, whiteSpace: "nowrap" }}>{s.right}</span>
      </div>
      <div style={{ position: "relative", height: 8, borderRadius: 999, background: "linear-gradient(90deg, var(--k-warm-red-50) 0%, var(--bg-3) 50%, var(--k-spruce-60) 100%)", opacity: 0.18 }}></div>
      <div style={{ position: "relative", marginTop: -8, height: 8 }}>
        <div style={{ position: "absolute", left: (s.pos * 100) + "%", top: -3, width: 14, height: 14, borderRadius: 999, background: "#fff", border: "2px solid var(--k-spruce-60)", transform: "translateX(-50%)", boxShadow: "0 1px 2px rgba(15,23,42,0.1)" }}></div>
      </div>
      <div style={{ fontSize: 10.5, color: "var(--fg-muted)", fontStyle: "italic", marginTop: 6, lineHeight: 1.4 }}>{s.note}</div>
    </div>
  );
}

const FRUST_TONE = {
  error: "var(--k-status-error-100)",
  warning: "var(--k-status-warning-100)",
  info: "var(--k-spruce-60)",
};

function PCardPanel({ eyebrow, title, children }) {
  return (
    <div style={{ background: "#fff", border: "1px solid var(--border-1)", borderRadius: 8, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
      <div>
        <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-muted)" }}>{eyebrow}</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 500, color: "var(--fg-1)", marginTop: 2 }}>{title}</div>
      </div>
      {children}
    </div>
  );
}

function PersonaCard({ p, idx }) {
  return (
    <SheetFrame
      lens="people"
      eyebrow={`Synthetic persona ${String(idx + 1).padStart(2, "0")} / 10 · composite, not a real person`}
      title={`${p.name} — ${p.role}`}
      fmt={FMT_A4L}
      titleSize={22}
      compact={true}
      footNote={false}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 12, height: "100%" }}>
        {/* hero: portrait + quote/about + context */}
        <div style={{ background: "#fff", border: "1px solid var(--border-1)", borderRadius: 8, display: "grid", gridTemplateColumns: "218px 1fr 240px", overflow: "hidden" }}>
          <div style={{ background: "linear-gradient(160deg, var(--k-ai-spruce-12) 0%, var(--k-ai-spruce-06) 60%, #fff 100%)", padding: "16px 16px 14px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, borderRight: "1px solid var(--border-1)" }}>
            <PersonaPortrait initials={p.initials} />
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em", color: "var(--fg-1)", lineHeight: 1.1 }}>{p.name}</div>
              <div style={{ fontSize: 11, color: "var(--fg-muted)", marginTop: 2 }}>{p.meta}</div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {p.chips.map((t) => (
                <span key={t} style={{ fontSize: 9.5, padding: "2px 7px", borderRadius: 999, background: "#fff", color: "var(--fg-2)", border: "1px solid var(--border-1)", fontWeight: 500 }}>{t}</span>
              ))}
            </div>
            <code style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--fg-muted)", background: "transparent", padding: 0 }}>{p.id} · v0.1 · synthetic</code>
          </div>
          <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 12 }}>
            <div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 44, lineHeight: 0.4, color: "var(--k-spruce-30)", display: "inline-block", marginRight: 5, verticalAlign: "sub" }}>&ldquo;</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 18.5, lineHeight: 1.3, color: "var(--fg-1)", letterSpacing: "-0.01em", fontWeight: 400, textWrap: "pretty" }}>{p.quote}</span>
            </div>
            <div style={{ fontSize: 12, color: "var(--fg-2)", lineHeight: 1.5, textWrap: "pretty" }}>
              {p.about[0]}<strong style={{ color: "var(--fg-1)" }}>{p.about[1]}</strong>
            </div>
          </div>
          <div style={{ background: "var(--bg-2)", padding: "16px 16px", borderLeft: "1px solid var(--border-1)", display: "flex", flexDirection: "column", gap: 9 }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-muted)" }}>Context</div>
            {p.context.map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 8, fontSize: 10.5 }}>
                <span style={{ color: "var(--fg-muted)", flex: "0 0 auto" }}>{k}</span>
                <span style={{ color: "var(--fg-1)", fontWeight: 500, textAlign: "right" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* row 2: goals / frustrations / trust */}
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1.05fr 1fr", gap: 12, flex: "1 1 auto" }}>
          <PCardPanel eyebrow="Goals · ranked" title={`What ${p.name.split(" ")[0]} wants`}>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
              {p.goals.map((g, i) => (
                <li key={i} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 9 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 300, color: "var(--k-spruce-60)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>{"0" + (i + 1)}</span>
                  <div>
                    <div style={{ fontSize: 11.5, color: "var(--fg-1)", fontWeight: 500, lineHeight: 1.35 }}>{g.t}</div>
                    <div style={{ fontSize: 10.5, color: "var(--fg-muted)", marginTop: 2, lineHeight: 1.4 }}>{g.s}</div>
                  </div>
                </li>
              ))}
            </ul>
          </PCardPanel>
          <PCardPanel eyebrow="Frustrations" title="What gets in the way">
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {p.frustrations.map((f, i) => (
                <li key={i} style={{ display: "grid", gridTemplateColumns: "8px 1fr", gap: 9, padding: "5px 0", borderBottom: i < p.frustrations.length - 1 ? "1px solid var(--bg-2)" : "none" }}>
                  <span style={{ width: 4, alignSelf: "stretch", borderRadius: 2, background: FRUST_TONE[f.tone] }}></span>
                  <div>
                    <div style={{ fontSize: 11.5, color: "var(--fg-1)", fontWeight: 500, lineHeight: 1.35 }}>{f.t}</div>
                    <div style={{ fontSize: 10.5, color: "var(--fg-muted)", marginTop: 2, lineHeight: 1.4 }}>{f.s}</div>
                  </div>
                </li>
              ))}
            </ul>
          </PCardPanel>
          <PCardPanel eyebrow="AI trust threshold" title="Working with the agent">
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {p.scales.map((s, i) => <TrustScale key={i} s={s} />)}
            </div>
            <div style={{ marginTop: "auto", padding: "8px 10px", background: "var(--k-ai-spruce-06)", borderRadius: 6, fontSize: 10, color: "var(--fg-2)", lineHeight: 1.45 }}>
              Characteristic composite from the synthetic interview transcripts — not a record of an actual BiL interview.
            </div>
          </PCardPanel>
        </div>
      </div>
    </SheetFrame>
  );
}

Object.assign(window, { PersonaCard, PERSONAS, FMT_A4L });
