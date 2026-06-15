// bil-os/portal.jsx — Hi-fi hand-off wireframes for the AnaCredit Validation
// Portal (the P0 demo build). Rebuilds the rough Streamlit demo in the Kyndryl
// design system. Reuses KPill/KBtn/KIcon/KDot from bil-os/shell.jsx.
// Exports: PortalIntake, PortalRun, PortalReview, PortalEvidence

const PORTAL_STEPS = [
  { n: 1, label: "Data intake" },
  { n: 2, label: "Validation run" },
  { n: 3, label: "Summary & evidence" },
];

function PortalShell({ step, title, sub, headerRight, moments, children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "224px 1fr", width: "100%", height: "100%", background: "var(--bg-2)", fontFamily: "var(--font-sans)", color: "var(--fg-2)", fontSize: 13 }}>
      <aside style={{ background: "var(--k-dark-stone-90)", color: "#fff", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "18px 18px 16px", borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
          <div style={{ background: "#fff", borderRadius: 6, padding: "7px 10px", display: "inline-flex" }}>
            <img src="assets/kyndryl-vital-logo.png" alt="Kyndryl Vital" style={{ height: 22, display: "block" }} />
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 15, marginTop: 12, lineHeight: 1.25 }}>AnaCredit Validation Portal</div>
          <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.55)", marginTop: 3 }}>BiL · P0 demo build · sprint 1</div>
        </div>
        <nav style={{ padding: "14px 10px", display: "flex", flexDirection: "column", gap: 2 }}>
          {PORTAL_STEPS.map((s) => {
            const active = s.n === step;
            return (
              <a key={s.n} href="#" style={{
                display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderRadius: 6,
                background: active ? "rgba(255,255,255,0.10)" : "transparent",
                borderLeft: `3px solid ${active ? "var(--k-warm-red-50)" : "transparent"}`,
                color: active ? "#fff" : "rgba(255,255,255,0.6)", textDecoration: "none",
                fontSize: 12.5, fontWeight: active ? 500 : 400,
              }}>
                <span style={{
                  width: 20, height: 20, borderRadius: 999, flex: "0 0 auto",
                  border: `1.5px solid ${active ? "var(--k-warm-red-40)" : "rgba(255,255,255,0.3)"}`,
                  display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700,
                  color: active ? "var(--k-warm-red-40)" : "rgba(255,255,255,0.6)",
                }}>{s.n}</span>
                {s.label}
              </a>
            );
          })}
        </nav>
        <div style={{ marginTop: "auto", padding: "14px 18px", borderTop: "1px solid rgba(255,255,255,0.10)", display: "flex", flexDirection: "column", gap: 8 }}>
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Run ID</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#fff", marginTop: 2 }}>RUN-2026-06-001</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 3, fontFamily: "var(--font-mono)", fontSize: 9.5, color: "rgba(255,255,255,0.5)" }}>
            <span>snapshot SNP-2026-06-A</span>
            <span>schema v1.0.13 · policy v0.9.2</span>
          </div>
        </div>
      </aside>
      <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 58, background: "#fff", borderBottom: "1px solid var(--border-1)", display: "flex", alignItems: "center", padding: "0 24px", justifyContent: "space-between", flex: "0 0 auto" }}>
          <div>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 17, margin: 0, color: "var(--fg-1)" }}>{title}</h1>
            <div style={{ fontSize: 11, color: "var(--fg-muted)", marginTop: 1 }}>{sub}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>{headerRight}</div>
        </header>
        <div style={{ flex: 1, minHeight: 0, padding: 20, display: "flex", flexDirection: "column", gap: 14, overflow: "hidden" }}>{children}</div>
        <div style={{ flex: "0 0 auto", background: "#fff", borderTop: "1px solid var(--border-1)", padding: "9px 24px", display: "flex", alignItems: "center", gap: 10, fontSize: 11, color: "var(--fg-muted)" }}>
          <span style={{ fontWeight: 700, fontSize: 9.5, letterSpacing: "0.1em", textTransform: "uppercase" }}>Demo contract moments</span>
          {moments.map((m) => <KPill key={m} tone="spruce">{m}</KPill>)}
          <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10 }}>hand-off wireframe · v1.0 · attached to Demo Contract</span>
        </div>
      </div>
    </div>
  );
}

/* ============ 1 · Data intake ============ */

const PREVIEW_ROWS = [
  ["CP-0001", "INS-00001", "Term loan", "2,276,811", "EUR", "1.6756", "2031-10-05", "Securities"],
  ["CP-0002", "INS-00002", "Overdraft", "19,360,203", "CHF", "5.6857", "2027-03-20", "Guarantee"],
  ["CP-0003", "INS-00003", "Term loan", "16,381,559", "USD", "5.9930", "2026-11-24", "Real estate"],
  ["CP-0004", "INS-00004", "Term loan", "11,000,017", "GBP", "1.4566", "2028-11-05", "Cash"],
  ["CP-0005", "INS-00005", "Repo", "10,853,730", "EUR", "3.2542", "2030-02-22", "Cash"],
  ["CP-0006", "INS-00006", "Mortgage", "21,472,018", "CHF", "6.7503", "2027-06-11", "Securities"],
];

function PortalIntake() {
  return (
    <PortalShell
      step={1}
      title="Data intake"
      sub="Run starts only on a supported schema — version-aware before any policy logic executes"
      headerRight={<KPill tone="success"><KDot tone="success" size={5} /> schema v1.0.13 · supported</KPill>}
      moments={["D1 · Ingest source payload"]}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 14, flex: "0 0 auto" }}>
        <KCard padded={true}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{
              flex: 1, border: "1.5px dashed var(--border-2)", borderRadius: 8, padding: "20px 18px",
              display: "flex", alignItems: "center", gap: 14, background: "var(--bg-2)",
            }}>
              <span style={{ width: 38, height: 38, borderRadius: 8, background: "var(--k-ai-spruce-12)", color: "var(--k-spruce-70)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <KIcon name="doc" size={18} />
              </span>
              <span>
                <span style={{ display: "block", fontSize: 13.5, fontWeight: 500, color: "var(--fg-1)" }}>Drop source payload here</span>
                <span style={{ display: "block", fontSize: 11, color: "var(--fg-muted)", marginTop: 2 }}>T24 · RFO Master · branch feeds — contracted CSV/XML, max 200 MB</span>
              </span>
              <KBtn style={{ marginLeft: "auto" }}>Browse files</KBtn>
            </div>
            <KBtn kind="primary" icon="play">Use golden dataset GD-03</KBtn>
          </div>
        </KCard>
        <KCard eyebrow="Run header · written to Trust Record" title="This run" padded={true}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-mono)", fontSize: 10.5 }}>
            {[["snapshot_id", "SNP-2026-06-A"], ["schema_version", "1.0.13 ✓ registry"], ["source_system_ids", "T24 · RFO · BR-01…04"], ["policy_version", "0.9.2 · ab4f…91c2"]].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 8, paddingBottom: 5, borderBottom: "1px solid var(--bg-2)" }}>
                <span style={{ color: "var(--fg-muted)" }}>{k}</span>
                <span style={{ color: "var(--fg-1)" }}>{v}</span>
              </div>
            ))}
          </div>
        </KCard>
      </div>
      <KCard eyebrow="GD-03 · 600 records · 6 entities" title="Payload preview" padded={false} style={{ flex: 1, minHeight: 0 }}
        action={<KPill>instrument · counterparty · protection linked</KPill>}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr>
              {["counterparty_id", "instrument_id", "type", "exposure", "ccy", "rate", "maturity", "protection"].map((h) => (
                <th key={h} style={{ textAlign: "left", padding: "8px 14px", fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--fg-muted)", borderBottom: "1px solid var(--border-1)", background: "var(--bg-2)", fontFamily: "var(--font-mono)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PREVIEW_ROWS.map((r) => (
              <tr key={r[1]} style={{ borderBottom: "1px solid var(--bg-2)" }}>
                {r.map((c, i) => (
                  <td key={i} style={{ padding: "7px 14px", fontFamily: i < 2 ? "var(--font-mono)" : "inherit", fontSize: i < 2 ? 11 : 12, color: i === 0 || i === 1 ? "var(--fg-1)" : "var(--fg-2)", textAlign: i === 3 || i === 5 ? "right" : "left" }}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </KCard>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, flex: "0 0 auto" }}>
        <span style={{ alignSelf: "center", fontSize: 11, color: "var(--fg-muted)" }}>Acceptance test: run refuses unsupported schema versions</span>
        <KBtn kind="primary" icon="play">Start validation run</KBtn>
      </div>
    </PortalShell>
  );
}

/* ============ 2 · Validation run ============ */

const RUN_COLS = [
  {
    cat: "Completeness", rule: "RC-001 · LEI completeness", status: "pass",
    log: ["Loading rule from policy set v0.9.2", "Scanning 600 records in 3 batches", "0 null identifiers found"],
    result: "PASSED — 600 records checked",
  },
  {
    cat: "Referential", rule: "RC-003 · sector referential", status: "pass",
    log: ["ESA 2010 referential v2026.1 pinned", "Cross-referencing 600 sector codes", "0 unknown codes"],
    result: "PASSED — referential intact",
  },
  {
    cat: "Plausibility", rule: "RC-005 · rate band", status: "warn",
    log: ["Evaluating interest_rate by product class", "Applying plausibility bands", "369 large-exposure warnings flagged"],
    result: "WARN — 369 auto-accepted, logged to audit trail",
  },
  {
    cat: "Consistency", rule: "RC-008 · non-negative exposure", status: "fail",
    log: ["Applying rego deny: exposure_amount ≥ 0", "Scanning 600 exposure records", "4 negative exposures detected"],
    result: "BLOCKED — human review required",
  },
  {
    cat: "Scope", rule: "RC-004 · €25,000 threshold", status: "pass",
    log: ["Resolving commitment per debtor", "Boundary cases ±1 EUR tested", "All 600 records in scope"],
    result: "PASSED — scope confirmed",
  },
];

const RUN_STATUS = {
  pass: { label: "Done", tone: "success" },
  warn: { label: "Warn", tone: "warning" },
  fail: { label: "Blocked", tone: "error" },
};

function PortalRun() {
  return (
    <PortalShell
      step={2}
      title="Validation run · parallel pipeline"
      sub="Deterministic OPA layer is authoritative — agents explain and suggest, never decide"
      headerRight={
        <React.Fragment>
          <KPill tone="error">1 blocker</KPill>
          <KPill tone="warning">369 warnings</KPill>
          <KBtn size="sm" icon="refresh">Replay</KBtn>
        </React.Fragment>
      }
      moments={["D2 · Deterministic validation", "D3 · Explain exception", "D4 · Suggest remediation"]}
    >
      <KCard padded={false} style={{ flex: 1, minHeight: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", height: "100%" }}>
          {RUN_COLS.map((c, i) => {
            const st = RUN_STATUS[c.status];
            return (
              <div key={c.cat} style={{ padding: "14px 16px", borderRight: i < 4 ? "1px solid var(--bg-2)" : "none", display: "flex", flexDirection: "column", gap: 10, background: c.status === "fail" ? "var(--k-status-error-10)" : "transparent" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 14.5, color: "var(--fg-1)" }}>{c.cat}</div>
                  <code style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "var(--fg-muted)", background: "transparent", padding: 0 }}>{c.rule}</code>
                </div>
                <KPill tone={st.tone} style={{ alignSelf: "flex-start" }}><KDot tone={st.tone} size={5} /> {st.label}</KPill>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 10.5, color: "var(--fg-muted)", lineHeight: 1.4 }}>
                  {c.log.map((l, j) => (
                    <span key={j} style={{ display: "grid", gridTemplateColumns: "10px 1fr", gap: 6 }}>
                      <span style={{ color: "var(--fg-subtle)" }}>›</span>{l}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: "auto", fontSize: 11, fontWeight: 500, color: c.status === "fail" ? "var(--k-status-error-110)" : c.status === "warn" ? "var(--k-status-warning-110)" : "var(--k-status-success-110)", borderTop: "1px solid var(--bg-3)", paddingTop: 8 }}>{c.result}</div>
              </div>
            );
          })}
        </div>
      </KCard>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 14, flex: "0 0 auto" }}>
        <KCard eyebrow="Fix suggestion agent · advisory · provenance attached" title="RC-008 — 4 negative exposures" padded={true}>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{ flex: 1, fontSize: 12, lineHeight: 1.5, color: "var(--fg-2)" }}>
              <strong style={{ color: "var(--fg-1)" }}>Finding:</strong> CP-0013 (−311,979) · CP-0088 (−391,708) · CP-0235 (−372,131) · CP-0512 (−75,930). Pattern matches sign-inversion defect from branch feed BR-02 seen in cycles 03–05. <strong style={{ color: "var(--fg-1)" }}>Suggestion:</strong> sign correction per record + structured source-fix request to Lending Ops.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5, flex: "0 0 auto" }}>
              <KPill tone="spruce">AnaCredit Reg. Art. 6</KPill>
              <KPill tone="spruce">BiL DQ guideline v3.1</KPill>
              <KPill tone="spruce">prior: OVR-116 · cycle 05</KPill>
            </div>
          </div>
        </KCard>
        <KCard eyebrow="Gate 4 entry" title="What happens next" padded={true}>
          <div style={{ fontSize: 12, lineHeight: 1.55, color: "var(--fg-2)" }}>
            Submission stays <strong style={{ color: "var(--k-status-error-110)" }}>blocked</strong> while the blocker is unresolved. The 4 records route to human review with lineage and suggestion attached — <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5 }}>EXC-2214</span>.
          </div>
        </KCard>
      </div>
    </PortalShell>
  );
}

/* ============ 3 · Human review ============ */

const REVIEW_RECORDS = [
  { id: "CP-0013", bad: "−311,979.00", fix: "311,979.00", state: "applied" },
  { id: "CP-0088", bad: "−391,708.00", fix: "391,708.00", state: "applied" },
  { id: "CP-0235", bad: "−372,131.00", fix: "372,131.00", state: "pending" },
  { id: "CP-0512", bad: "−75,930.00", fix: "75,930.00", state: "pending" },
];

function PortalReview() {
  return (
    <PortalShell
      step={2}
      title="Exception review · EXC-2214"
      sub="No approval without a reason — every decision writes actor, reason, and timestamp to the Trust Record"
      headerRight={<KPill tone="warning">2 of 4 decided</KPill>}
      moments={["D5 · Human approve / reject"]}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1.45fr 1fr", gap: 14, flex: 1, minHeight: 0 }}>
        <KCard eyebrow="RC-008 · agent suggestion per record — apply, edit, or reject" title="4 records · sign correction" padded={false}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {REVIEW_RECORDS.map((r, i) => (
              <div key={r.id} style={{ display: "grid", gridTemplateColumns: "86px 1fr 1fr auto", gap: 14, alignItems: "center", padding: "12px 16px", borderBottom: i < 3 ? "1px solid var(--bg-2)" : "none", opacity: r.state === "applied" ? 0.65 : 1 }}>
                <code style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--fg-1)", background: "var(--bg-2)", padding: "4px 8px", borderRadius: 4, textAlign: "center" }}>{r.id}</code>
                <span>
                  <span style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)" }}>Reported</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--k-status-error-110)" }}>{r.bad}</span>
                </span>
                <span>
                  <span style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)" }}>Suggested</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--fg-1)" }}>{r.fix}</span>
                </span>
                {r.state === "applied" ? (
                  <KPill tone="success"><KDot tone="success" size={5} /> applied · reason logged</KPill>
                ) : (
                  <span style={{ display: "flex", gap: 6 }}>
                    <KBtn size="sm" kind="primary" icon="check">Apply</KBtn>
                    <KBtn size="sm">Reject</KBtn>
                  </span>
                )}
              </div>
            ))}
          </div>
        </KCard>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, minHeight: 0 }}>
          <KCard eyebrow="Lineage · why you can trust this view" title="CP-0235 · context" padded={true}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 11.5 }}>
              {[
                ["Source", "BR-02 branch feed · field EXP_AMT"],
                ["Steward", "Sofia Krier · Lending Ops"],
                ["Previous treatment", "OVR-116 · cycle 05 · same defect class"],
                ["Downstream", "instrument dataset · counterparty-risk"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 8, paddingBottom: 5, borderBottom: "1px solid var(--bg-2)" }}>
                  <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", paddingTop: 1 }}>{k}</span>
                  <span style={{ color: "var(--fg-1)" }}>{v}</span>
                </div>
              ))}
            </div>
          </KCard>
          <KCard eyebrow="Decision · gate 4" title="Approve correction set" padded={true} style={{ flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, height: "100%" }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 4 }}>Decision reason · required</div>
                <div style={{ border: "1px solid var(--border-2)", borderRadius: 6, padding: "9px 12px", fontSize: 12, color: "var(--fg-1)", background: "#fff" }}>
                  Sign-inversion defect in BR-02 feed; corrected per agent suggestion. Source fix requested via EXC-2215.
                </div>
              </div>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                <span style={{ fontSize: 10.5, color: "var(--fg-muted)" }}>Signing as <strong style={{ color: "var(--fg-1)" }}>Claire Weber</strong> · writes decision · reason · actor_id · timestamp_utc</span>
                <KBtn kind="primary" icon="check">Approve 4 corrections</KBtn>
              </div>
            </div>
          </KCard>
        </div>
      </div>
    </PortalShell>
  );
}

/* ============ 4 · Summary & evidence ============ */

function Donut() {
  // pass 595 (green), auto-accepted 369-overlap shown as ring segments: simplify 3 segments
  const segs = [
    { v: 0.55, c: "var(--k-status-success-100)", label: "pass" },
    { v: 0.34, c: "var(--k-cool-gray-30)", label: "auto-accepted" },
    { v: 0.11, c: "var(--k-spruce-60)", label: "resolved" },
  ];
  let acc = 0;
  const R = 54, C = 2 * Math.PI * R;
  return (
    <svg width="170" height="170" viewBox="0 0 140 140">
      {segs.map((s) => {
        const dash = `${s.v * C} ${C}`;
        const rot = acc * 360 - 90;
        acc += s.v;
        return <circle key={s.label} cx="70" cy="70" r={R} fill="none" stroke={s.c} strokeWidth="20" strokeDasharray={dash} transform={`rotate(${rot} 70 70)`}></circle>;
      })}
      <text x="70" y="66" textAnchor="middle" style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, fill: "var(--fg-1)" }}>600</text>
      <text x="70" y="84" textAnchor="middle" style={{ fontFamily: "var(--font-sans)", fontSize: 9, fill: "var(--fg-muted)" }}>records · 14 rules</text>
    </svg>
  );
}

const FINDINGS = [
  { rule: "RC-001", cat: "Completeness", sev: "Blocking", status: ["PASS", "success"], rows: 0 },
  { rule: "RC-005", cat: "Plausibility", sev: "Warning", status: ["AUTO-ACCEPTED · logged", "warning"], rows: 369 },
  { rule: "RC-008", cat: "Consistency", sev: "Blocking", status: ["RESOLVED · human approved", "spruce"], rows: 4 },
];

function PortalEvidence() {
  return (
    <PortalShell
      step={3}
      title="Summary & evidence pack"
      sub="The run replays from this pack alone — byte-identical submission file"
      headerRight={
        <React.Fragment>
          <KPill tone="success"><KDot tone="success" size={5} /> ready for attestation</KPill>
          <KBtn size="sm" icon="refresh">Replay run</KBtn>
        </React.Fragment>
      }
      moments={["D6 · Produce evidence pack", "D7 · Submit / receipt"]}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, flex: "0 0 auto" }}>
        {[["Completeness", "Done", "success"], ["Referential", "Done", "success"], ["Plausibility", "Warn · accepted", "warning"], ["Consistency", "Resolved", "spruce"], ["Scope", "Done", "success"]].map(([k, v, t]) => (
          <KCard key={k} padded={true}>
            <KEyebrow>{k}</KEyebrow>
            <div style={{ marginTop: 7 }}><KPill tone={t}><KDot tone={t === "spruce" ? "info" : t} size={5} /> {v}</KPill></div>
          </KCard>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "auto 1.4fr 1fr", gap: 14, flex: 1, minHeight: 0 }}>
        <KCard eyebrow="Rule outcomes" title="RUN-2026-06-001" padded={true}>
          <Donut />
          <div style={{ display: "flex", flexDirection: "column", gap: 5, marginTop: 8, fontSize: 11 }}>
            {[["var(--k-status-success-100)", "pass — no action"], ["var(--k-cool-gray-30)", "warnings auto-accepted, logged"], ["var(--k-spruce-60)", "blockers resolved by human"]].map(([c, l]) => (
              <span key={l} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <span style={{ width: 9, height: 9, borderRadius: 2, background: c }}></span>{l}
              </span>
            ))}
          </div>
        </KCard>
        <KCard eyebrow="Findings" title="What this cycle surfaced" padded={false}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr>
                {["Rule", "Category", "Severity", "Status", "Rows"].map((h) => (
                  <th key={h} style={{ textAlign: "left", padding: "8px 14px", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", borderBottom: "1px solid var(--border-1)", background: "var(--bg-2)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FINDINGS.map((f) => (
                <tr key={f.rule} style={{ borderBottom: "1px solid var(--bg-2)" }}>
                  <td style={{ padding: "9px 14px", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-1)" }}>{f.rule}</td>
                  <td style={{ padding: "9px 14px" }}>{f.cat}</td>
                  <td style={{ padding: "9px 14px" }}>{f.sev}</td>
                  <td style={{ padding: "9px 14px" }}><KPill tone={f.status[1]}>{f.status[0]}</KPill></td>
                  <td style={{ padding: "9px 14px", fontFamily: "var(--font-mono)", fontSize: 11, textAlign: "right" }}>{f.rows}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ padding: "11px 14px", fontSize: 11.5, color: "var(--fg-2)", background: "var(--k-ai-spruce-06)", margin: 12, borderRadius: 6, lineHeight: 1.5 }}>
            <strong style={{ color: "var(--fg-1)" }}>Closed loop:</strong> RC-008 root cause routed to Lending Ops as EXC-2215 with population count — fix at the source, not another reporting patch.
          </div>
        </KCard>
        <KCard eyebrow="Evidence pack · chain of custody" title="Contents" padded={true}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-mono)", fontSize: 10.5, flex: 1 }}>
            {[["snapshot + schema", "SNP-2026-06-A · v1.0.13"], ["policy set + hash", "0.9.2 · ab4f…91c2"], ["rule results", "14 rules · 600 records"], ["decisions + reasons", "4 approvals · Claire Weber"], ["suggestion provenance", "2 sources per suggestion"], ["input SHA-256", "a8fd…42db"]].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 8, paddingBottom: 5, borderBottom: "1px solid var(--bg-2)" }}>
                <span style={{ color: "var(--fg-muted)" }}>{k}</span>
                <span style={{ color: "var(--fg-1)", textAlign: "right" }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
            <KBtn kind="primary" icon="doc">Download evidence pack (.zip)</KBtn>
            <KBtn icon="check">Proceed to attestation — Claire Weber</KBtn>
          </div>
        </KCard>
      </div>
    </PortalShell>
  );
}

Object.assign(window, { PortalIntake, PortalRun, PortalReview, PortalEvidence });
