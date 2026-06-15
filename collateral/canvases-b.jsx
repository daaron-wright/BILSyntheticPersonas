// canvases-b.jsx — PaC Rule Catalogue (A1), Control Gate Model (A1), Persona/RACI wall (A1).
// Visual boards (authority ladder + rule cards · swimlane gate pipeline).
// Exports: RuleCatalogue, ControlGateModel, RaciWall

/* ================= Rule Catalogue — authority ladder + rule cards ================= */

const RC_TIERS = [
  { n: 1, name: "Binding regulation", c: "#5B2E8F", runtime: true, eg: "Reg (EU) 2016/867" },
  { n: 2, name: "Official guidance", c: "#7A42AD", runtime: true, eg: "ECB Manual · validation checks" },
  { n: 3, name: "National instruction", c: "#8A4FBF", runtime: true, eg: "BCL schema · comparison method" },
  { n: 4, name: "Internal policy", c: "#A879D2", runtime: true, eg: "BiL SOPs · approval matrices" },
  { n: 5, name: "AI assist / heuristic", c: "#9AA4AB", runtime: false, eg: "suggestions · clustering" },
];

const RULE_SEEDS = [
  { id: "RC-001", stmt: "Counterparty LEI / national ID present and well-formed for non-natural-person debtors", tier: 2, cite: "ECB validation checks · referential", type: "Block", sev: "E", opa: "OPA", tests: 3, release: true },
  { id: "RC-002", stmt: "Instruments reconcile to FINREP carrying amounts within BCL tolerance", tier: 3, cite: "BCL comparison methodology", type: "Recon", sev: "W", opa: "Later", tests: 3, release: false, note: "deferred · recon phase" },
  { id: "RC-003", stmt: "Counterparty sector code exists in the ESA 2010 referential", tier: 2, cite: "ECB validation checks · referential", type: "Block", sev: "E", opa: "OPA", tests: 4, release: true },
  { id: "RC-004", stmt: "Instruments ≥ €25,000 commitment threshold are in reporting scope", tier: 1, cite: "Reg (EU) 2016/867 · Art. 4", type: "Block", sev: "E", opa: "OPA", tests: 2, release: true },
  { id: "RC-005", stmt: "Interest rate within plausible band for product class and period", tier: 2, cite: "ECB plausibility checks", type: "Plausibility", sev: "W", opa: "OPA", tests: 2, release: false, note: "ships behind analyst-review flag" },
  { id: "RC-006", stmt: "Legal final maturity not earlier than inception date", tier: 2, cite: "ECB validation checks · consistency", type: "Block", sev: "E", opa: "OPA", tests: 2, release: true },
  { id: "RC-007", stmt: "Multi-debtor instruments with one natural-person debtor — treatment", tier: null, cite: "ECB Manual Part I · interpretation open", type: "Interpretive", sev: "W", opa: "Later", tests: 4, release: false, parked: true },
];

function RcSev({ sev }) {
  const err = sev === "E";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4, fontSize: 9, fontWeight: 700, letterSpacing: "0.05em",
      color: err ? "var(--k-status-error-110)" : "var(--k-status-warning-110)",
      background: err ? "var(--k-status-error-10)" : "var(--k-status-warning-10)",
      border: `1px solid ${err ? "var(--k-status-error-20)" : "var(--k-status-warning-20)"}`,
      borderRadius: 999, padding: "2px 8px", flex: "0 0 auto",
    }}>
      <svg width="9" height="9" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4l14 24H2L16 4z M16 13v7"></path></svg>
      {err ? "ERROR" : "WARN"}
    </span>
  );
}

function RcCard({ r, blank, n }) {
  if (blank) {
    return (
      <div className="co-area" style={{ borderRadius: 8, border: "1px dashed var(--k-ai-spruce-20)", padding: "10px 14px", display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <code style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--fg-subtle)", background: "transparent", padding: 0 }}>RC-{String(n + 1).padStart(3, "0")}</code>
          <span className="enum-hint">block · warn · plausibility · recon · interpretive</span>
        </div>
        <div style={{ fontSize: 11, color: "var(--fg-subtle)" }}>Rule statement — testable, in the room's own words</div>
        <div style={{ marginTop: "auto", display: "flex", gap: 8 }}>
          <span className="enum-hint">authority 1–5 + citation</span>
          <span className="enum-hint" style={{ marginLeft: "auto" }}>OPA: Yes / No / Later</span>
        </div>
      </div>
    );
  }
  const T = RC_TIERS.find((t) => t.n === r.tier);
  return (
    <div style={{
      background: "#fff", border: "1px solid var(--border-1)", borderLeft: `4px solid ${r.parked ? "var(--k-status-warning-100)" : T.c}`,
      borderRadius: "0 8px 8px 0", padding: "10px 14px", display: "flex", flexDirection: "column", gap: 6,
      boxShadow: "0 1px 3px rgba(15,23,42,0.05)", minWidth: 0,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <code style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, fontWeight: 700, color: "var(--fg-1)", background: "var(--bg-2)", padding: "2px 6px", borderRadius: 3 }}>{r.id}</code>
        <RcSev sev={r.sev} />
        <span style={{ fontSize: 9.5, fontWeight: 600, color: "var(--fg-muted)", border: "1px solid var(--border-1)", borderRadius: 999, padding: "2px 8px" }}>{r.type}</span>
        <span style={{
          marginLeft: "auto", fontSize: 9, fontWeight: 700, letterSpacing: "0.06em", borderRadius: 999, padding: "2px 8px", flex: "0 0 auto",
          background: r.opa === "OPA" ? "var(--k-ai-spruce-12)" : "var(--bg-3)",
          color: r.opa === "OPA" ? "var(--k-spruce-70)" : "var(--fg-muted)",
        }}>{r.opa === "OPA" ? "OPA · R-0.9" : "LATER"}</span>
      </div>
      <div style={{ fontSize: 11.5, color: "var(--fg-1)", lineHeight: 1.35, textWrap: "pretty" }}>{r.stmt}</div>
      <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 8, fontSize: 9.5, color: "var(--fg-muted)" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
          <span style={{ width: 8, height: 8, borderRadius: 2, background: r.parked ? "var(--k-status-warning-100)" : T.c, flex: "0 0 auto" }}></span>
          {r.parked ? "authority unresolved" : `Tier ${r.tier} · ${T.name}`}
        </span>
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", minWidth: 0 }}>{r.cite}</span>
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", flex: "0 0 auto" }}>{r.tests} tests</span>
      </div>
    </div>
  );
}

function RuleCatalogue({ blank }) {
  const counts = RC_TIERS.map((t) => RULE_SEEDS.filter((r) => r.tier === t.n).length);
  return (
    <SheetFrame
      lens="policy"
      eyebrow="Activity 3 · 11:35–12:35 · 60 min"
      title="Policy-as-Code Rule Catalogue"
      sub={blank
        ? "Co-creation template — write rules as testable statements and pin each to the source hierarchy. No citation, no release."
        : "Outcome — seven rules authority-tagged against the source hierarchy; four ratified into the first OPA release, one parked."}
      fmt={FMT.A1L}
      titleSize={30}
      code="BRD-03"
      refs={["→ SCH-01 · sourceHierarchy[]", "R-0.9 → DOC-1", "→ DC-01"]}
    >
      <div style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: 18, flex: "1 1 auto", minHeight: 0 }}>
        {/* authority ladder */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-muted)" }}>Source hierarchy — what may decide</span>
          {RC_TIERS.map((t, i) => (
            <div key={t.n} style={{
              flex: 1, display: "flex", alignItems: "center", gap: 12,
              background: t.runtime ? "#fff" : "var(--bg-2)",
              border: "1px solid var(--border-1)", borderLeft: `5px solid ${t.c}`,
              borderRadius: "0 8px 8px 0", padding: "10px 14px",
              marginRight: i * 14,
              boxShadow: "0 1px 2px rgba(15,23,42,0.04)",
            }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 27, color: t.c, lineHeight: 1, flex: "0 0 auto" }}>{t.n}</span>
              <span style={{ minWidth: 0, flex: 1 }}>
                <span style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "var(--fg-1)", lineHeight: 1.15 }}>{t.name}</span>
                <span style={{ display: "block", fontSize: 9.5, fontFamily: "var(--font-mono)", color: "var(--fg-muted)", marginTop: 2 }}>{t.eg}</span>
              </span>
              <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, flex: "0 0 auto" }}>
                <span style={{
                  fontSize: 8.5, fontWeight: 700, letterSpacing: "0.06em", borderRadius: 999, padding: "2px 8px",
                  background: t.runtime ? "var(--k-status-success-10)" : "var(--k-status-warning-10)",
                  color: t.runtime ? "var(--k-status-success-110)" : "var(--k-status-warning-110)",
                  border: `1px solid ${t.runtime ? "var(--k-status-success-20)" : "var(--k-status-warning-20)"}`,
                }}>{t.runtime ? "RUNTIME ✓" : "ADVISORY ONLY"}</span>
                {!blank && counts[t.n - 1] > 0 ? <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "var(--fg-muted)" }}>{counts[t.n - 1]} rule{counts[t.n - 1] > 1 ? "s" : ""}</span> : null}
              </span>
            </div>
          ))}
          <span style={{ fontSize: 10, color: "var(--fg-muted)", lineHeight: 1.4 }}>Tier 5 can suggest, cluster, and explain — it can never set <code style={{ fontFamily: "var(--font-mono)", fontSize: 9.5 }}>authoritativeForRuntime</code>.</span>
        </div>

        {/* rule cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridAutoRows: "1fr", gap: 10, minWidth: 0 }}>
          {RULE_SEEDS.map((r, n) => <RcCard key={r.id} r={r} blank={blank} n={n} />)}
          <div className={blank ? "co-area" : ""} style={{ border: "1px dashed var(--border-2)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "var(--fg-subtle)", gap: 6 }}>
            + the rule the room knows and this draft missed
          </div>
        </div>
      </div>

      {/* release rail */}
      <div style={{ flex: "0 0 auto", background: "var(--k-dark-stone-90)", borderRadius: 10, padding: "12px 18px", display: "flex", alignItems: "center", gap: 12, color: "#fff" }}>
        <span style={{ display: "flex", flexDirection: "column", gap: 2, flex: "0 0 auto" }}>
          <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Dot-voted</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 15 }}>First OPA release · R-0.9</span>
        </span>
        {blank ? (
          <span className="co-area" style={{ flex: 1, minHeight: 34, borderRadius: 6, display: "flex", alignItems: "center", padding: "4px 12px" }}><span className="ghost-prompt" style={{ color: "#9FD4DB", opacity: 1 }}>dot-vote the release — deterministic · source-backed · testable only</span></span>
        ) : (
          <React.Fragment>
            <span style={{ display: "flex", gap: 6, flex: "0 0 auto" }}>
              {RULE_SEEDS.filter((r) => r.release).map((r) => (
                <span key={r.id} style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, fontWeight: 700, background: "rgba(138,79,191,0.25)", border: "1px solid rgba(168,121,210,0.5)", color: "#D8C2EE", borderRadius: 6, padding: "5px 10px" }}>{r.id}</span>
              ))}
            </span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 15 }}>→</span>
            <span style={{ background: "#8A4FBF", borderRadius: 6, padding: "5px 12px", fontSize: 11, fontWeight: 600, flex: "0 0 auto" }}>OPA runtime</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "rgba(255,255,255,0.55)", flex: "0 0 auto" }}>policy set v0.9 · golden pack GD-03</span>
            <span style={{ marginLeft: "auto", display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" }}>
              <span style={{ fontSize: 9.5, color: "#FFD899", border: "1px solid rgba(230,138,0,0.5)", background: "rgba(230,138,0,0.15)", borderRadius: 999, padding: "3px 10px" }}>RC-007 parked · CRO decision OQ-07</span>
              <span style={{ fontSize: 9.5, color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 999, padding: "3px 10px" }}>RC-005 behind analyst flag</span>
              <span style={{ fontSize: 9.5, color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 999, padding: "3px 10px" }}>RC-002 deferred · recon</span>
            </span>
          </React.Fragment>
        )}
      </div>
    </SheetFrame>
  );
}

/* ================= Control Gate Model — swimlane pipeline ================= */

const GATES = [
  { name: "Data receipt", lane: "sys", check: "Arrival monitor vs. source contract", approver: "— automated", override: "Partial run by Ops Lead · logged", sla: "Hours from availability", evidence: "snapshot_id · source_system_ids" },
  { name: "Schema validation", lane: "sys", check: "Schema vs. registry · v1.0.13", approver: "— automated", override: "None — mismatch always blocks", sla: "Same run", evidence: "schema_version · validation_report" },
  { name: "Deterministic pass", lane: "sys", check: "OPA policy set v0.9 · 14 rules", approver: "— automated", override: "Waiver path · dual approval", sla: "Same run", evidence: "rule results · policy hash" },
  { name: "Exception review", lane: "hum", check: "Triage clusters + suggestions (advisory)", approver: "Reuter → Weber", override: "Escalation matrix · named reason", sla: "Same day · critical", evidence: "decision · reason · approver_id" },
  { name: "Attestation", lane: "hum", check: "Evidence-pack completeness", approver: "Weber (attestor)", override: "None — a human act", sla: "Cycle window", evidence: "attestation record · pack_id" },
  { name: "Submission", lane: "sys", check: "Channel handshake + receipt", approver: "— post-attestation", override: "Re-run from snapshot", sla: "Cut-off T-4h", evidence: "submission_hash · receipt_id" },
];

const CGM_W = 1536, CGM_H = 270, CGM_SYS_Y = 78, CGM_HUM_Y = 196;

function CgmPipeline({ blank }) {
  const cx = (i) => CGM_W / 12 + (i * CGM_W) / 6;
  const cy = (g) => (g.lane === "sys" ? CGM_SYS_Y : CGM_HUM_Y);
  let path = `M ${cx(0)} ${cy(GATES[0])}`;
  for (let i = 1; i < GATES.length; i++) {
    const x1 = cx(i - 1), y1 = cy(GATES[i - 1]), x2 = cx(i), y2 = cy(GATES[i]);
    path += y1 === y2 ? ` L ${x2} ${y2}` : ` C ${x1 + 110} ${y1}, ${x2 - 110} ${y2}, ${x2} ${y2}`;
  }
  return (
    <div style={{ position: "relative", height: CGM_H, flex: "0 0 auto" }}>
      {/* lanes */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 26, height: 102, background: "var(--k-ai-spruce-06)", borderRadius: 10, border: "1px solid var(--k-ai-spruce-12)" }}>
        <span style={{ position: "absolute", top: 8, left: 14, fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--k-spruce-70)" }}>System acts — automated, deterministic</span>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, top: 144, height: 102, background: "rgba(255,70,45,0.04)", borderRadius: 10, border: "1px solid rgba(255,70,45,0.12)" }}>
        <span style={{ position: "absolute", top: 8, left: 14, fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--k-warm-red-60, #D63A24)" }}>Humans decide — explicit, named, reasoned</span>
      </div>
      <svg width="100%" height={CGM_H} viewBox={`0 0 ${CGM_W} ${CGM_H}`} preserveAspectRatio="none" style={{ position: "absolute", inset: 0 }}>
        <path d={path} fill="none" stroke="var(--k-cool-gray-40)" strokeWidth="2.5"></path>
      </svg>
      {/* SCN-04 token between G3 and G4 */}
      {!blank ? (
        <div style={{ position: "absolute", left: `${((cx(2) + cx(3)) / 2 / CGM_W) * 100}%`, top: 124, transform: "translateX(-50%)", background: "#fff", border: "1.5px dashed var(--k-warm-red-50)", color: "var(--k-warm-red-50)", borderRadius: 999, padding: "3px 11px", fontSize: 9.5, fontWeight: 700, fontFamily: "var(--font-mono)", whiteSpace: "nowrap", zIndex: 3 }}>
          SCN-04 · blocking failure at T-36h ▸ survived
        </div>
      ) : (
        <div style={{ position: "absolute", left: `${((cx(2) + cx(3)) / 2 / CGM_W) * 100}%`, top: 124, transform: "translateX(-50%)", background: "var(--k-ai-spruce-06)", border: "1px dashed var(--k-ai-spruce-20)", color: "var(--fg-subtle)", borderRadius: 999, padding: "3px 11px", fontSize: 9.5, whiteSpace: "nowrap", zIndex: 3 }}>
          play one live failure through all six gates
        </div>
      )}
      {GATES.map((g, i) => (
        <div key={g.name} style={{ position: "absolute", left: `${(cx(i) / CGM_W) * 100}%`, top: cy(g), transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, zIndex: 2 }}>
          <span style={{
            width: 46, height: 46, borderRadius: 999, display: "inline-flex", alignItems: "center", justifyContent: "center",
            background: g.lane === "sys" ? "var(--k-spruce-60)" : "var(--k-warm-red-50)", color: "#fff",
            fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 19,
            boxShadow: "0 6px 16px rgba(15,23,42,0.22)", border: "3px solid #fff",
          }}>{i + 1}</span>
          <span style={{ fontSize: 10.5, fontWeight: 600, color: "var(--fg-1)", background: "rgba(255,255,255,0.92)", borderRadius: 4, padding: "1px 7px", whiteSpace: "nowrap" }}>{g.name}</span>
        </div>
      ))}
    </div>
  );
}

function ControlGateModel({ blank }) {
  return (
    <SheetFrame
      lens="controls"
      eyebrow="Activity 4 · 13:20–14:20 · 60 min"
      title="Control Gate Model"
      sub={blank
        ? "Co-creation template — six named gates across two lanes. The room defines each gate, then stress-tests the model with a live failure scenario."
        : "Outcome — six gates across the system/human lanes; survived SCN-04 at T-36h. This board IS the template for the Policy-as-Code schema: gates → process.step[], approvals → controls."}
      fmt={FMT.A1L}
      titleSize={30}
      code="BRD-04"
      refs={["→ SCH-01 · controls + process.step[]", "→ DOC-2 · gate config", "→ DC-01"]}
    >
      <CgmPipeline blank={blank} />

      {/* gate detail cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10, flex: "1 1 auto", minHeight: 0 }}>
        {GATES.map((g, i) => (
          <div key={g.name} style={{ background: "#fff", border: "1px solid var(--border-1)", borderTop: `3px solid ${g.lane === "sys" ? "var(--k-spruce-60)" : "var(--k-warm-red-50)"}`, borderRadius: 8, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 7, minWidth: 0 }}>
            {[["Check", g.check, "What runs automatically?"], ["Approver", g.approver, "Who signs — by name?"], ["Override", g.override, "What is the escape path?"], ["SLA", g.sla, "How fast, near cut-off?"]].map(([k, v, ghost]) => (
              <div key={k}>
                <div style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 2 }}>{k}</div>
                {blank
                  ? <div className="co-area" style={{ minHeight: 24, borderRadius: 4, padding: "3px 6px" }}><span className="ghost-prompt" style={{ fontSize: 9 }}>{ghost}</span></div>
                  : <div style={{ fontSize: 10.5, color: k === "Approver" ? "var(--fg-1)" : "var(--fg-2)", fontWeight: k === "Approver" ? 600 : 400, lineHeight: 1.35 }}>{v}</div>}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* trust record bar */}
      <div style={{ flex: "0 0 auto", background: "var(--k-dark-stone-90)", borderRadius: 10, padding: "10px 16px", display: "grid", gridTemplateColumns: "150px repeat(6, 1fr)", gap: 10, alignItems: "center", color: "#fff" }}>
        <span>
          <span style={{ display: "block", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Every gate writes</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 14 }}>Trust Record</span>
        </span>
        {GATES.map((g) => (
          <span key={g.name} style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0 }}>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, flex: "0 0 auto" }}>↓</span>
            {blank
              ? <span className="co-area" style={{ flex: 1, height: 16, borderRadius: 3 }}></span>
              : <span style={{ fontFamily: "var(--font-mono)", fontSize: 8.5, color: "rgba(255,255,255,0.75)", lineHeight: 1.3 }}>{g.evidence}</span>}
          </span>
        ))}
      </div>

      {/* outcome panels */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, flex: "0 0 auto" }}>
        <div className="panel">
          <div className="panel-head">Exception &amp; override map</div>
          <div className={"panel-body" + (blank ? " co-area" : "")} style={{ minHeight: 56, fontSize: 11.5 }}>
            {blank ? null : "Deadline vs. control conflict → formal waiver (WVR), dual approval: Weber + Holzem. Never an informal skip; the waiver writes blast radius to the Trust Record."}
          </div>
        </div>
        <div className="panel">
          <div className="panel-head">Gates resting on unwritten internal policy</div>
          <div className={"panel-body" + (blank ? " co-area" : "")} style={{ minHeight: 56, fontSize: 11.5 }}>
            {blank ? null : "Gate 4 — escalation pairs near deadline (committee ratification pending, OQ-01). Gate 5 — delegated attestor for absence cover, unwritten."}
          </div>
        </div>
        <div className="panel">
          <div className="panel-head">Control-UI must-show list (for the demo)</div>
          <div className={"panel-body" + (blank ? " co-area" : "")} style={{ minHeight: 56, fontSize: 11.5 }}>
            {blank ? null : "Failed rule + severity · source lineage · current owner · previous treatment · approval status · schema + policy version of the run."}
          </div>
        </div>
      </div>
    </SheetFrame>
  );
}

/* ---------- Persona / RACI wall (unchanged) ---------- */

// Columns reference the synthetic personas (see persona cards P-BIL-01…10)
const RACI_ROLES = [
  { name: "Henri Lambert", role: "Executive sponsor" },
  { name: "Claire Weber", role: "Head of Reg. Reporting" },
  { name: "Tom Reuter", role: "AnaCredit Ops Lead" },
  { name: "Ana Marques", role: "CDO / Data steward" },
  { name: "Marc Holzem", role: "CRO / Policy lead" },
  { name: "Sofia Krier", role: "Lending Ops owner" },
  { name: "David Schmit", role: "IT lead" },
  { name: "Paul Faber", role: "Internal Audit" },
  { name: "Elise Hoffmann", role: "Supervisor liaison" },
  { name: "Mia Janssens", role: "Product / Eng owner" },
];

const RACI_DECISIONS = [
  { d: "Interpret rule change", seed: ["I", "R", "C", "C", "A", "I", "I", "I", "C", "I"] },
  { d: "Approve deterministic override", seed: ["I", "A", "R", "C", "C", "I", "I", "I", "I", "I"] },
  { d: "Approve submission readiness", seed: ["I", "A", "R", "I", "C", "I", "C", "I", "I", "I"] },
  { d: "Own source correction", seed: ["I", "C", "C", "A", "I", "R", "C", "I", "I", "I"] },
  { d: "Close recurring root cause", seed: ["I", "C", "C", "C", "I", "R", "C", "I", "I", "A"] },
  { d: "Approve emergency hotfix", seed: ["I", "A", "I", "I", "C", "I", "R", "I", "I", "C"] },
];

function RaciWall() {
  return (
    <SheetFrame
      lens="people"
      eyebrow="14:20–15:15 · 45–55 min · 1 frame"
      title="Persona / RACI map"
      sub="Columns are the ten synthetic personas (P-BIL-01…10); letters pre-assigned from the transcripts and scenario lab SCN-04. Workshop job: contest every A — exactly one accountable owner per row."
      fmt={FMT.A1L}
      titleSize={30}
    >
      <table className="ktable">
        <colgroup>
          <col style={{ width: 250 }} />
          {RACI_ROLES.map((r, i) => <col key={i} />)}
        </colgroup>
        <thead>
          <tr>
            <th>Decision / action</th>
            {RACI_ROLES.map((r) => (
              <th key={r.role} style={{ fontSize: 10 }}>
                <span style={{ display: "block", textTransform: "none", letterSpacing: 0, fontSize: 11.5, color: "var(--fg-1)", fontWeight: 500 }}>{r.name}</span>
                <span style={{ display: "block", marginTop: 2, fontWeight: 400 }}>{r.role}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {RACI_DECISIONS.map((row) => (
            <tr key={row.d} style={{ height: 80 }}>
              <td className="row-label" style={{ width: "auto" }}>{row.d}</td>
              {RACI_ROLES.map((r, ci) => (
                <td key={ci} className="raci-cell" style={row.seed[ci] === "A" ? { background: "var(--k-ai-spruce-12)", fontWeight: 700 } : undefined}>
                  {row.seed[ci]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 12, color: "var(--fg-muted)" }}>
        <span className="t-caption" style={{ marginRight: 2 }}>Legend</span>
        <span><strong style={{ color: "var(--fg-1)", fontFamily: "var(--font-mono)" }}>R</strong> responsible — does the work</span>
        <span><strong style={{ color: "var(--fg-1)", fontFamily: "var(--font-mono)" }}>A</strong> accountable — exactly one per row (tinted)</span>
        <span><strong style={{ color: "var(--fg-1)", fontFamily: "var(--font-mono)" }}>C</strong> consulted</span>
        <span><strong style={{ color: "var(--fg-1)", fontFamily: "var(--font-mono)" }}>I</strong> informed</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }}>
        <div className="panel">
          <div className="panel-head">Trust-threshold summary — minimum evidence each function needs to trust the system</div>
          <div className="panel-body" style={{ minHeight: 72 }}>
            Audit: replayable run from Trust Record · CRO: hard split of deterministic vs. probabilistic · Reporting: who approved which exception, reproducible file · CDO: steward per critical attribute · Lending Ops: field, population count, recurrence · IT: run ID tying payload, rules, decisions, evidence.
          </div>
        </div>
        <div className="panel">
          <div className="panel-head">Governance open questions — explicit actions, not side notes</div>
          <div className="panel-body" style={{ minHeight: 72 }}>
            OQ-01 committee + approval structure (Weber, +10 wd) · OQ-04 entitlements per persona (Schmit, +15 wd) · OQ-07 RC-007 interpretation (Holzem, +15 wd). Full list on the Open Questions log.
          </div>
        </div>
      </div>
    </SheetFrame>
  );
}

Object.assign(window, { RuleCatalogue, ControlGateModel, RaciWall });
