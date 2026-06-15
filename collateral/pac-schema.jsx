// pac-schema.jsx — Policy-as-Code schema board (the contract that generates
// the policy documents) + current vs Agentic AI target-state board.
// Exports: PacSchemaBoard, TargetStateBoard

/* ============ PaC schema board ============ */

const PAC_DEFS = [
  {
    name: "sourceHierarchy[]", from: "BRD-03 · authority tags",
    fields: [
      ["priority", "integer · 1–5"],
      ["type", "binding_regulation · official_guidance · national_operating_instruction · internal_policy · ai_assist_or_heuristic"],
      ["authoritativeForRuntime", "boolean — false for tier 5 (AI)"],
    ],
  },
  {
    name: "controls", from: "BRD-04 · gates + RACI",
    fields: [
      ["humanInLoop.requiredFor[]", "policy publication · ambiguous interpretation · material override · attestation · emergency hotfix"],
      ["segregationOfDuties.rule", "no one person authors, approves, publishes, and attests"],
      ["auditTrailFields[]", "12 fields · minItems 6 — run, policy, snapshot, decision, actor, timestamp…"],
    ],
  },
  {
    name: "process · step[]", from: "BRD-04 · gate model",
    fields: [
      ["step.mode", "automated · human · mixed"],
      ["step.decisionType", "deterministic · plausibility · reconciliation · approval · submission · change_management"],
      ["step.approvalRequired", "boolean — true at gates 4–5"],
    ],
  },
  {
    name: "metric[]", from: "BRD-01 · value scorecard",
    fields: [
      ["name · unit · owner", "required"],
      ["baseline · target", "free-typed — Known / Estimated / Unknown lives in the scorecard"],
    ],
  },
];

const PAC_INSTANCE = `{
  "useCase": {
    "name": "AnaCredit Policy-as-Code
             operating model",
    "jurisdiction": "EU · Luxembourg
             national implementation"
  },
  "sourceHierarchy": [
    { "priority": 1,
      "type": "binding_regulation",
      "authoritativeForRuntime": true },
    { "priority": 5,
      "type": "ai_assist_or_heuristic",
      "authoritativeForRuntime": false }
  ],
  "controls": {
    "humanInLoop": { "requiredFor": [
      "material override",
      "submission attestation" ] },
    "auditTrailFields": [
      "process_run_id", "policy_id",
      "policy_version", "policy_hash",
      "data_snapshot_id", "decision",
      "decision_reason", "actor_id",
      "timestamp_utc", "submission_id" ]
  },
  "processes": [ { "id": "monthly_run",
    "steps": [ { "sequence": 3,
      "mode": "automated",
      "decisionType": "deterministic",
      "approvalRequired": false } ] } ]
}`;

const PAC_GENERATES = [
  { doc: "OPA rego modules + test packs", src: "sourceHierarchy + rule catalogue", note: "deterministic blocking layer · version-pinned, rollback included" },
  { doc: "Control gate configuration", src: "process.steps + controls.humanInLoop", note: "gates 1–6 · who approves, what blocks, what overrides" },
  { doc: "Trust Record / evidence-pack spec", src: "controls.auditTrailFields", note: "replayable chain of custody per run" },
  { doc: "Process runbooks + RACI bindings", src: "process.actors + steps", note: "monthly run · feedback intake · change intake" },
  { doc: "Scorecard metric definitions", src: "metric[]", note: "baselines, targets, owners — published to steering" },
];

function PacSchemaBoard({ blank }) {
  return (
    <SheetFrame
      lens="policy"
      eyebrow={blank ? "Template · direct output of activity 4 — filled during the day" : "Direct output of activity 4 · stored in the Demo Contract"}
      title="Policy-as-Code schema"
      sub={blank
        ? "The skeleton the day fills: gates become process.step[], approvals become controls, authority tags become sourceHierarchy[]. The $defs are fixed — the instance and the documents arrive from the boards."
        : "The gate model is the template: gates become process.step[], approvals become controls, authority tags become sourceHierarchy[]. The filled boards are instances of this one JSON Schema — the build generates every policy document from it."}
      fmt={FMT.A1L}
      titleSize={30}
      footNote={false}
      code="SCH-01"
      refs={["← BRD-01…04 inputs", "→ DOC-1…5 generated", "stored in DC-01"]}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.95fr 1.05fr", gap: 18, flex: "1 1 auto", minHeight: 0 }}>
        {/* schema defs */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="t-caption">$defs — what the schema validates</div>
          {PAC_DEFS.map((d) => (
            <div key={d.name} className="panel" style={{ flex: 1 }}>
              <div className="panel-head" style={{ textTransform: "none", letterSpacing: 0 }}>
                <code style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-1)", background: "transparent", padding: 0 }}>{d.name}</code>
                <span style={{ fontSize: 10, color: "var(--k-spruce-70)", fontWeight: 600, textTransform: "none", letterSpacing: 0 }}>← {d.from}</span>
              </div>
              <div className="panel-body" style={{ display: "flex", flexDirection: "column", gap: 6, padding: "10px 16px" }}>
                {d.fields.map(([k, v]) => (
                  <div key={k} style={{ display: "grid", gridTemplateColumns: "210px 1fr", gap: 10, fontSize: 11, lineHeight: 1.4 }}>
                    <code style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "#8A4FBF", background: "transparent", padding: 0 }}>{k}</code>
                    <span style={{ color: "var(--fg-2)" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* instance */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, minHeight: 0 }}>
          <div className="t-caption">{blank ? "Seed instance — written here as the boards fill" : "Seed instance — directly usable by engineering"}</div>
          {blank ? (
            <div className="co-area" style={{ flex: 1, borderRadius: "var(--radius)", border: "1px dashed var(--k-ai-spruce-20)", padding: "18px 20px", display: "flex", flexDirection: "column", gap: 14 }}>
              <span className="ghost-prompt" style={{ fontSize: 13 }}>The instance assembles live, field by field:</span>
              {[
                ["sourceHierarchy[]", "← BRD-03 · as the room tags authority"],
                ["controls.humanInLoop", "← BRD-04 · as approvers are named"],
                ["process.steps[]", "← BRD-04 · as the six gates are drawn"],
                ["metric[]", "← BRD-01 · as targets harden"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", flexDirection: "column", gap: 3, borderLeft: "3px solid var(--k-ai-spruce-20)", paddingLeft: 12 }}>
                  <code style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "#8A4FBF", background: "transparent", padding: 0 }}>{k}</code>
                  <span style={{ fontSize: 11, color: "var(--fg-muted)" }}>{v}</span>
                </div>
              ))}
              <span className="ghost-prompt" style={{ marginTop: "auto" }}>Nothing here is typed by hand twice — the boards are the input form.</span>
            </div>
          ) : (
            <pre style={{
              margin: 0, flex: 1, fontFamily: "var(--font-mono)", fontSize: 11, lineHeight: 1.5,
              background: "var(--k-dark-stone-90)", color: "#D7DCE0", borderRadius: "var(--radius)",
              padding: "16px 18px", overflow: "hidden",
            }}>{PAC_INSTANCE}</pre>
          )}
        </div>
        {/* generated documents */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="t-caption">Generated policy documents</div>
          {PAC_GENERATES.map((g, i) => (
            <div key={g.doc} className={blank ? "co-area" : ""} style={{
              border: blank ? "1px dashed var(--k-ai-spruce-20)" : "1px solid var(--border-1)", borderLeft: blank ? "4px solid var(--k-ai-spruce-20)" : "4px solid #8A4FBF",
              borderRadius: "0 var(--radius) var(--radius) 0", padding: "11px 14px", background: blank ? undefined : "#fff", flex: 1,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 14.5, color: blank ? "var(--fg-muted)" : "var(--fg-1)" }}>{g.doc}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--fg-subtle)" }}>{"DOC-" + (i + 1)}</span>
              </div>
              <div style={{ fontSize: 10.5, color: "#8A4FBF", marginTop: 3, fontFamily: "var(--font-mono)" }}>from {g.src}</div>
              {blank
                ? <div className="ghost-prompt" style={{ marginTop: 4 }}>generated on approval — never hand-maintained</div>
                : <div style={{ fontSize: 11.5, color: "var(--fg-muted)", marginTop: 4, lineHeight: 1.4 }}>{g.note}</div>}
            </div>
          ))}
        </div>
      </div>
      <div style={{
        display: "flex", alignItems: "center", gap: 10, padding: "12px 18px",
        background: "var(--k-ai-spruce-06)", borderRadius: "var(--radius)", fontSize: 12.5, color: "var(--fg-2)",
      }}>
        <strong style={{ color: "var(--fg-1)", fontFamily: "var(--font-display)", fontWeight: 500 }}>Lifecycle:</strong>
        <span>schema instance → 6-check policy gate (human-approved) → generated documents → OPA runtime + Trust Record → <strong style={{ color: "var(--fg-1)" }}>stored as SCH-01 in the Demo Contract</strong>.</span>
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--fg-muted)" }}>tier-5 AI sources can never set authoritativeForRuntime: true</span>
      </div>
    </SheetFrame>
  );
}

/* ============ target-state board ============ */

function TSBox({ children, w, dark, accent, style }) {
  return (
    <div style={{
      width: w, padding: "12px 14px", borderRadius: 8, textAlign: "center",
      background: accent ? "var(--k-warm-red-50)" : dark ? "#1F5580" : "#fff",
      color: accent || dark ? "#fff" : "var(--fg-1)",
      border: accent ? "none" : dark ? "none" : "1px solid var(--border-1)",
      fontFamily: "var(--font-sans)", fontSize: 13.5, fontWeight: 500, lineHeight: 1.3,
      boxShadow: accent ? "0 8px 24px rgba(255,70,45,0.30)" : "0 1px 3px rgba(15,23,42,0.07)",
      flex: "0 0 auto", position: "relative", ...style,
    }}>{children}</div>
  );
}

function TSArrow({ label, grow, dashed }) {
  return (
    <div style={{ flex: grow ? 1 : "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, minWidth: 40, padding: "0 6px" }}>
      {label ? <span style={{ fontSize: 10.5, color: "var(--fg-muted)", whiteSpace: "nowrap", fontFamily: "var(--font-mono)" }}>{label}</span> : null}
      <div style={{ width: "100%", borderTop: `2px ${dashed ? "dashed" : "solid"} var(--k-cool-gray-40)`, position: "relative" }}>
        <span style={{ position: "absolute", right: -1, top: -5, color: "var(--k-cool-gray-40)", fontSize: 12, lineHeight: 1 }}>▸</span>
      </div>
    </div>
  );
}

function SourceStack() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: "0 0 auto" }}>
      {["Branch / subsidiary", "T24", "… various sources"].map((s) => (
        <div key={s} style={{
          width: 150, padding: "8px 10px", borderRadius: 6, background: "#1F5580", color: "#fff",
          fontSize: 12, fontWeight: 500, textAlign: "center", fontFamily: "var(--font-sans)",
        }}>{s}</div>
      ))}
    </div>
  );
}

function TargetStateBoard() {
  return (
    <div style={{
      width: "100%", height: "100%", background: "#fff", fontFamily: "var(--font-sans)",
      display: "flex", flexDirection: "column", padding: "40px 56px 36px", boxSizing: "border-box", gap: 20,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg-muted)" }}>AnaCredit process in BiL · why we're in the room</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 40, color: "var(--fg-1)", letterSpacing: "-0.015em", marginTop: 6 }}>
            From manual relay to governed agentic run
          </div>
        </div>
        <img src="assets/kyndryl-vital-logo.png" alt="Kyndryl Vital" style={{ height: 24, marginTop: 8 }} />
      </div>

      {/* current */}
      <div style={{ border: "1px solid var(--border-1)", borderRadius: 12, padding: "20px 26px 22px", background: "var(--bg-2)", opacity: 0.92 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18, color: "var(--fg-muted)" }}>Current process — manual relay</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--fg-muted)", border: "1px solid var(--border-2)", borderRadius: 999, padding: "4px 12px", background: "#fff" }}>e2e ~ 1–2 weeks</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SourceStack />
          <TSArrow grow />
          <TSBox w={130} dark>RFO Master</TSBox>
          <TSArrow grow label="rules + mappings · ~30 min" />
          <TSBox w={130} dark>Staging AnaCredit</TSBox>
          <TSArrow grow label="manual upload" />
          <TSBox w={120} dark>INVOKE</TSBox>
          <TSArrow grow label="report sent" />
          <TSBox w={130} dark>Regulator (SOFIE)</TSBox>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
          <span style={{ fontSize: 11.5, color: "var(--fg-muted)", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 26, borderTop: "2px dashed var(--k-cool-gray-40)" }}></span>
            corrections requested ~1–2 weeks → BiL team → case-by-case fixes back to sources
          </span>
        </div>
      </div>

      {/* arrow between */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 4px" }}>
        <span style={{ fontSize: 18, color: "var(--k-warm-red-50)" }}>↓</span>
        <span style={{ fontSize: 13, color: "var(--fg-2)" }}><strong style={{ color: "var(--fg-1)" }}>The four activities define everything the orange box needs:</strong> metrics, lineage, rules, gates — captured as the PaC schema.</span>
      </div>

      {/* target */}
      <div style={{ border: "2px solid var(--k-warm-red-50)", borderRadius: 12, padding: "20px 26px 22px", background: "#fff", position: "relative", flex: 1 }}>
        <div style={{ position: "absolute", top: -13, left: 22, background: "var(--k-warm-red-50)", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 999 }}>Envisioned target state</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18, color: "var(--fg-1)" }}>Agentic AI process — human in the loop</span>
          <span style={{ display: "flex", gap: 8 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--k-warm-red-60, #D63A24)", border: "1px solid rgba(255,70,45,0.4)", borderRadius: 999, padding: "4px 12px", background: "rgba(255,70,45,0.06)" }}>e2e ~ few hours</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--fg-muted)", border: "1px solid var(--border-2)", borderRadius: 999, padding: "4px 12px" }}>no manual corrections</span>
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SourceStack />
          <TSArrow grow />
          <TSBox w={130} dark>RFO Master</TSBox>
          <TSArrow grow />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, flex: "0 0 auto" }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 10.5, fontWeight: 700, color: "#8A4FBF",
              border: "1.5px dashed #8A4FBF", borderRadius: 6, padding: "3px 12px", background: "rgba(138,79,191,0.05)",
            }}>OPA · PaC schema</div>
            <div style={{ width: 1.5, height: 12, background: "#8A4FBF" }}></div>
            <TSBox w={210} accent style={{ padding: "18px 16px", fontSize: 16 }}>
              Agentic AI system
              <span style={{ display: "block", fontSize: 10.5, fontWeight: 400, opacity: 0.85, marginTop: 3 }}>validate · triage · suggest · evidence</span>
            </TSBox>
            <div style={{ width: 1.5, height: 12, background: "var(--k-spruce-60)" }}></div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{
                fontSize: 11.5, fontWeight: 500, color: "var(--fg-1)", border: "1px solid var(--border-1)",
                borderRadius: 6, padding: "7px 14px", background: "var(--bg-2)",
              }}>BiL AnaCredit team</div>
              <span style={{ fontSize: 10.5, color: "var(--k-spruce-70)", fontFamily: "var(--font-mono)", maxWidth: 150, lineHeight: 1.35 }}>agent learning + approval with human in loop ⟲</span>
            </div>
          </div>
          <TSArrow grow label="V1.0 report sent" />
          <TSBox w={130} dark>Regulator (SOFIE)</TSBox>
        </div>
        <div style={{ display: "flex", gap: 18, marginTop: 16, fontSize: 11.5, color: "var(--fg-muted)" }}>
          <span><strong style={{ color: "var(--fg-1)" }}>1</strong> · all ingestion steps automated</span>
          <span><strong style={{ color: "var(--fg-1)" }}>2</strong> · deterministic checks enforced by OPA from the PaC schema</span>
          <span><strong style={{ color: "var(--fg-1)" }}>3</strong> · automated fixes suggested for all errors — humans decide</span>
          <span><strong style={{ color: "var(--fg-1)" }}>4</strong> · holistic, structured feedback to downstream sources</span>
        </div>
      </div>
    </div>
  );
}

// (legacy linear TargetStateBoard above is superseded by collateral/target-network.jsx)
Object.assign(window, { PacSchemaBoard });
