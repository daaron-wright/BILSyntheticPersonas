// canvases-c.jsx — Trust Record (A1), Demo Contract board (A1), Open questions log (A3).
// Fully pre-filled from pre-work. Exports: TrustRecord, DemoContract, OpenQuestionsLog

/* ---------- Trust Record ---------- */

const TRUST_EVENTS = [
  { e: "Source payload received", fields: "snapshot_id · schema_version · source_system_ids · timestamp_utc", auto: "Yes", pii: "Low", retention: "Regulatory archive · 10y", access: "Reporting · IT · Audit", replay: "Yes", missing: "Run cannot start — block at gate 1" },
  { e: "Policy set executed", fields: "policy_version · policy_hash · rule results · duration", auto: "Yes", pii: "Low", retention: "Regulatory archive · 10y", access: "Reporting · Audit", replay: "Yes", missing: "Run invalid — block at gate 3" },
  { e: "AI suggestion generated", fields: "suggestion_id · model_ref · provenance refs · confidence", auto: "Yes", pii: "Medium", retention: "Operational · 3y", access: "Reporting · Audit · Risk", replay: "Yes", missing: "Suggestion hidden from UI — advisory must be traceable" },
  { e: "Human decision made", fields: "decision · decision_reason · approver_id · timestamp_utc", auto: "No — explicit act", pii: "Medium", retention: "Regulatory archive · 10y", access: "Audit · Reporting leads", replay: "Yes", missing: "Block at gate 4 — no silent approvals" },
  { e: "Override accepted", fields: "override_id · waiver ref · dual approver_ids · blast radius", auto: "No — explicit act", pii: "Medium", retention: "Regulatory archive · 10y", access: "Audit · CRO", replay: "Yes", missing: "Override invalid — escalate to waiver path" },
  { e: "Submission sent", fields: "submission_hash · receipt_id · file reference · channel", auto: "Yes", pii: "Low", retention: "Regulatory archive · 10y", access: "Reporting · Liaison · Audit", replay: "Yes", missing: "Resubmit from snapshot; incident raised" },
  { e: "Feedback ingested", fields: "feedback_item_id · classification · run linkage · owner", auto: "Yes", pii: "Low", retention: "Operational · 5y", access: "Reporting · Source owners", replay: "No", missing: "Manual intake fallback, flagged in inbox" },
];

function TrustRecord() {
  return (
    <SheetFrame
      lens="evidence"
      eyebrow="15:15–16:10 · 50–60 min · 1 frame"
      title="Trust Record"
      sub="All seven trust-changing events pre-specified — the full submission run replays from this record. Workshop job: verify fields against what audit and supervision would actually ask for, then ratify retention classes."
      fmt={FMT.A1L}
      titleSize={30}
    >
      <table className="ktable">
        <colgroup>
          <col style={{ width: 200 }} /><col style={{ width: 350 }} /><col style={{ width: 130 }} /><col style={{ width: 120 }} />
          <col style={{ width: 170 }} /><col /><col style={{ width: 100 }} /><col />
        </colgroup>
        <thead>
          <tr>
            <th>Event / decision</th><th>Mandatory fields</th><th>Auto-captured</th><th>Personal data risk</th>
            <th>Retention class</th><th>Access roles</th><th>Replay required</th><th>Control if missing</th>
          </tr>
        </thead>
        <tbody>
          {TRUST_EVENTS.map((r) => (
            <tr key={r.e} style={{ height: 80 }}>
              <td className="row-label" style={{ width: "auto" }}>{r.e}</td>
              <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>{r.fields}</td>
              <td>{r.auto}</td>
              <td style={{ color: r.pii === "Medium" ? "var(--k-status-warning-110)" : undefined }}>{r.pii}</td>
              <td>{r.retention}</td>
              <td>{r.access}</td>
              <td>{r.replay}</td>
              <td>{r.missing}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }}>
        <div className="panel">
          <div className="panel-head">Minimum evidence pack — satisfies reporting, audit, and engineering</div>
          <div className="panel-body" style={{ minHeight: 64 }}>
            snapshot_id · policy_version + hash · rule results · approval log · override reasons · submission receipt · feedback linkage. Replay test: regenerate the submission file from the pack alone, byte-identical.
          </div>
        </div>
        <div className="panel">
          <div className="panel-head">Privacy / retention follow-ups for security &amp; legal</div>
          <div className="panel-body" style={{ minHeight: 64 }}>
            Approval logs carry actor IDs (GDPR) — retention and archive location to DPO (OQ-03, +20 wd). Access-role model for decision histories follows entitlements work (OQ-04).
          </div>
        </div>
      </div>
    </SheetFrame>
  );
}

/* ---------- Demo Contract board ---------- */

// after-state: which hand-off wireframe plugs into which demo-moment row
// (TOBE_STEPS + Portal* components are provided by tobe-journey.jsx / bil-os/portal.jsx)
const DEMO_WF_MAP = { 0: { wf: 0, span: 1 }, 1: { wf: 1, span: 3 }, 4: { wf: 2, span: 1 }, 5: { wf: 3, span: 2 }, 7: { wf: null, span: 1 } };

function WfCell({ i, onOpenWf }) {
  const m = DEMO_WF_MAP[i];
  if (!m) return null;
  if (m.wf === null) {
    return (
      <td style={{ background: "var(--bg-2)", verticalAlign: "middle", textAlign: "center", fontSize: 10.5, color: "var(--fg-muted)", lineHeight: 1.4 }}>
        P1 · designed in the<br />next increment
      </td>
    );
  }
  const steps = window.TOBE_STEPS || [];
  const step = steps[m.wf] || {};
  const C = window[step.comp];
  const w = 186, scale = w / 1440;
  return (
    <td rowSpan={m.span} style={{ background: "var(--bg-2)", verticalAlign: "middle", padding: 8 }}>
      <div onClick={() => onOpenWf && onOpenWf(m.wf)} style={{ cursor: "pointer", display: "flex", flexDirection: "column", gap: 5, alignItems: "center" }}>
        <div style={{ width: w, height: Math.round(900 * scale), overflow: "hidden", borderRadius: 6, border: "1px solid var(--border-1)", boxShadow: "0 3px 10px rgba(15,23,42,0.14)", position: "relative", background: "#fff", flex: "0 0 auto" }}>
          <div style={{ width: 1440, height: 900, transform: `scale(${scale})`, transformOrigin: "top left", pointerEvents: "none" }}>{C ? <C /> : null}</div>
          <div style={{ position: "absolute", right: 5, bottom: 5, background: "rgba(20,22,25,0.78)", color: "#fff", fontSize: 8.5, fontWeight: 600, padding: "2px 7px", borderRadius: 999 }}>expand ⤤</div>
        </div>
        <div style={{ fontSize: 9.5, color: "var(--fg-muted)", display: "flex", gap: 6, alignItems: "center", whiteSpace: "nowrap" }}>
          <span style={{ fontFamily: "var(--font-mono)" }}>{step.wf}</span>
          <span style={{ color: "var(--fg-1)", fontWeight: 500 }}>{step.title}</span>
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--k-warm-red-50)" }}>{step.moments}</span>
        </div>
      </div>
    </td>
  );
}

const DEMO_MOMENTS = [
  { m: "Ingest source payload", ref: "BRD-04 G1–G2 · SCH-01", prove: "Platform is version-aware before any policy logic executes", data: "Golden dataset GD-03 · sample T24 payload", rule: "Source contract + schema registry", evidence: "Run header shows schema version", test: "Run starts only on supported schema", prio: "P0", owner: "David Schmit", ini: "DS", who: "David Schmit", cite: "BRD-04 G1 · gate interrogation", pain: "Manual uploads were doing undocumented control work — schema changes landed as surprises.", principle: "Replace hidden checkpoints deliberately — a removed manual step must become an explicit control." },
  { m: "Run deterministic validation", ref: "BRD-03 R-0.9 · DOC-1", prove: "Policy-as-Code is authoritative for the blocking layer", data: "GD-03 incl. known-bad cases", rule: "Policy set v0.9 · RC-001/003/004/006", evidence: "Rule IDs, severity, reason codes on screen", test: "2 seeded blockers caught · zero false pass", prio: "P0", owner: "Mia Janssens", ini: "MH", who: "Marc Holzem", cite: "BRD-03 · authority ladder", pain: "Rules lived in tribal memory; deterministic and interpretive blurred until challenge was impossible.", principle: "A control I cannot challenge is not a control — deterministic rules stay separate and citable." },
  { m: "Explain exception", ref: "BRD-02 lineage · BRD-04 G4", prove: "Triage is operational, not merely technical", data: "EXC-2214 cluster (412 LEI failures)", rule: "Owner-hint routing rules", evidence: "Lineage, owner, suggested action visible", test: "Analyst identifies owner in under 1 min", prio: "P0", owner: "Tom Reuter", ini: "TR", who: "Tom Reuter", cite: "cohort · context-hunting pain", pain: "Triage meant hunting context across files, emails and memory — the same defects every month.", principle: "Hand the analyst the decision, not the hunt — owner, lineage and history arrive pre-assembled." },
  { m: "Suggest remediation", ref: "SCH-01 tier-5 · advisory", prove: "AI is advisory, with provenance — never authoritative", data: "Recurring sector-defect history", rule: "Suggester confidence policy", evidence: "Provenance chips on every suggestion", test: "Each suggestion carries ≥2 source refs", prio: "P1", owner: "Mia Janssens", ini: "SK", who: "Sofia Krier", cite: "BRD-02 · source field column", pain: "Sensible source fixes arrived late and compressed, treated as urgent exceptions.", principle: "AI suggests with provenance; the fix lands at the right layer — never silent upstream mutation." },
  { m: "Human approve / reject", ref: "BRD-04 G4 · RACI wall", prove: "Human-in-the-loop governance works under pressure", data: "Live exception queue", rule: "Approval matrix (RACI wall)", evidence: "Reason captured → Trust Record row", test: "No approval possible without reason text", prio: "P0", owner: "Claire Weber", ini: "CW", who: "Claire Weber", cite: "BRD-04 G4 · interrogated live", pain: "A red item at T-36h meant three phone calls; approvals left no written reason behind.", principle: "No reason, no approval — the human decides, and the words are part of the record." },
  { m: "Produce evidence pack", ref: "BRD-04 TR bar · DOC-3", prove: "Chain of custody is complete by construction", data: "RUN-2026-06-001", rule: "Trust Record schema", evidence: "Pack: snapshot, policy, approvals, receipt", test: "Replay reproduces the decision path", prio: "P0", owner: "David Schmit", ini: "PF", who: "Paul Faber", cite: "BRD-04 · trust record bar", pain: "Evidence packs proved the final number but not the control story behind it.", principle: "Replayable from the record alone — a process relying on memory is not auditable." },
  { m: "Submit / receipt", ref: "BRD-04 G5–G6", prove: "Submission is blocked while blockers remain", data: "Attested submission file", rule: "Gate 5–6 entry conditions", evidence: "Receipt + archive record", test: "Submission impossible with open blocker", prio: "P0", owner: "Claire Weber", ini: "CW", who: "Claire Weber", cite: "BRD-04 G5–G6 · gates", pain: "Submission under deadline pressure with blocker state unclear until too late.", principle: "The deadline never outranks an open blocker — the gate holds, visibly." },
  { m: "Parse feedback", ref: "TSN-01 · closed loop", prove: "Closed-loop remediation capability", data: "BCL-style workbook (Overview / Incl / Excl)", rule: "Classification taxonomy", evidence: "Items mapped back to run artifacts", test: "Every item gets class + owner + run link", prio: "P1", owner: "Elise Hoffmann", ini: "EH", who: "Elise Hoffmann", cite: "cohort · 20-day clock", pain: "A 20-working-day clock while the story was assembled by hand — two teams, two versions.", principle: "One consistent story per request — classified, run-linked, signed by a human." },
];

// what each piece of co-creation contributed to this contract
const DC_BUILT_FROM = [
  ["BRD-01", "7 metrics · 3 sponsor decisions"],
  ["BRD-02", "8 elements traced · stewards named"],
  ["BRD-03", "R-0.9 · 4 rules ratified"],
  ["BRD-04", "6 gates → schema template"],
  ["SCH-01", "PaC schema · DOC-1…5 generated"],
  ["P-BIL-01…10", "cohort validated every board"],
  ["WF-01…04", "hand-off wireframes"],
];

function DemoContract({ wf, onOpenWf, full }) {
  return (
    <SheetFrame
      lens="close"
      eyebrow={wf ? "Hand-off · sprint 1 · wireframes attached" : "16:10–17:00 · demo contract + handoff · 1 frame"}
      title="Demo Contract"
      sub={wf
        ? "After — the frozen P0 scope with the hi-fi wireframe that delivers each demo moment plugged into its row. Tap a screen to expand; the full set lives in 06 · Hand-off."
        : "Before — as the room froze it. The culmination of co-creation: every moment traces back to a board, the schema, or the cohort."}
      fmt={FMT.A1L}
      titleSize={30}
      code="DC-01"
      refs={["← BRD-01…04", "← SCH-01", "WF-01…04", "OQ-01…07"]}
    >
      {full ? (
        <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center", gap: 10, background: "var(--bg-2)", border: "1px solid var(--border-1)", borderRadius: 8, padding: "9px 14px" }}>
          <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-muted)", flex: "0 0 auto" }}>Built from co-creation</span>
          {DC_BUILT_FROM.map(([c, t], i) => (
            <React.Fragment key={c}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, minWidth: 0 }}>
                <span className="ref-chip" style={{ color: "var(--k-warm-red-50)", fontWeight: 700 }}>{c}</span>
                <span style={{ fontSize: 10, color: "var(--fg-2)", whiteSpace: "nowrap" }}>{t}</span>
              </span>
              {i < DC_BUILT_FROM.length - 1 ? <span style={{ color: "var(--fg-subtle)", fontSize: 11 }}>→</span> : null}
            </React.Fragment>
          ))}
        </div>
      ) : null}
      <table className="ktable kt-snug">
        <colgroup>
          <col style={{ width: 160 }} /><col /><col /><col /><col /><col /><col style={{ width: 96 }} /><col style={{ width: 118 }} />
          {wf ? <col style={{ width: 210 }} /> : null}
        </colgroup>
        <thead>
          <tr>
            <th>Demo moment</th><th>Must prove</th><th>Required data</th><th>Required rule / policy</th>
            <th>Visible evidence</th><th>Acceptance test</th><th>Priority</th><th>Owner</th>
            {wf ? <th>Hi-fi wireframe · to-be</th> : null}
          </tr>
        </thead>
        <tbody>
          {DEMO_MOMENTS.map((r, i) => (
            <tr key={r.m}>
              <td className="row-label" style={{ width: "auto" }}>
                {r.m}
                {full ? <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 8.5, color: "var(--k-spruce-70)", fontWeight: 400, marginTop: 3 }}>← {r.ref}</span> : null}
              </td>
              <td style={{ color: "var(--fg-1)" }}>{r.prove}</td>
              <td>{r.data}</td>
              <td>{r.rule}</td>
              <td>{r.evidence}</td>
              <td>{r.test}</td>
              <td><span className="pill eg-pick" style={{ fontSize: 10.5, padding: "1px 9px" }}>{r.prio}</span></td>
              <td>{r.owner}</td>
              {wf ? <WfCell i={i} onOpenWf={onOpenWf} /> : null}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
        <div className="panel">
          <div className="panel-head">P0 — first demo must prove</div>
          <div className="panel-body" style={{ minHeight: 48, fontSize: 11.5 }}>
            Version-aware ingest · OPA blocking layer · lineage on every exception · human approve with reason · submission blocked on unresolved blockers · evidence pack · replay by run ID.
          </div>
        </div>
        <div className="panel">
          <div className="panel-head">Engineering handoff — done when</div>
          <div className="panel-body" style={{ minHeight: 48, fontSize: 11.5 }}>
            Golden dataset GD-03 signed off (Marques) · source payload contract agreed (Schmit + Krier) · Rule Catalogue source-backed (Holzem) · gates approved (Weber) · Trust Record fields agreed (Faber).
          </div>
        </div>
        <div className="panel">
          <div className="panel-head">Dependencies &amp; risks before sprint 1</div>
          <div className="panel-body" style={{ minHeight: 48, fontSize: 11.5 }}>
            SOFIE test endpoint access (Schmit, OQ-05) · waiver approver pair ratification (OQ-01) · RC-007 interpretation blocks multi-debtor demo data (OQ-07).
          </div>
        </div>
      </div>
    </SheetFrame>
  );
}

/* ---------- Open questions / governance log ---------- */

const OQ_SEEDS = [
  { q: "Exact BiL committee and approval structure for policy publication", lens: "People", impact: "Approval matrix cannot be encoded; releases stall", owner: "Claire Weber", due: "Workshop + 10 wd", status: "Open" },
  { q: "Which low-risk exception classes may auto-remediate", lens: "Controls", impact: "Automation coverage target unverifiable; P2 scope undefined", owner: "Marc Holzem", due: "Workshop + 15 wd", status: "Open" },
  { q: "Retention periods and archive location for approval logs carrying actor IDs (GDPR)", lens: "Evidence", impact: "Evidence layer design blocked for PII-bearing fields", owner: "DPO + Paul Faber", due: "Workshop + 20 wd", status: "Owned" },
  { q: "Final role-based entitlements per persona (reporting, source owners, approvers, audit)", lens: "Controls", impact: "Control-UI access model cannot be built", owner: "David Schmit", due: "Workshop + 15 wd", status: "Open" },
  { q: "Production submission connector details for SOFIE", lens: "Close", impact: "Demo runs on a stub; production path unproven", owner: "David Schmit", due: "Workshop + 25 wd", status: "Open" },
  { q: "Observed-agent scope: which branches and subsidiaries are explicitly in or out", lens: "Data", impact: "Population risk — entities sitting \u201cimplicitly in scope\u201d", owner: "Ana Marques", due: "Workshop + 10 wd", status: "Owned" },
  { q: "RC-007 multi-debtor natural-person treatment — interpretation decision", lens: "Policy", impact: "Rule stays in parking lot; demo data set incomplete", owner: "Marc Holzem", due: "Workshop + 15 wd", status: "Open" },
];

function OpenQuestionsLog() {
  return (
    <SheetFrame
      lens="allday"
      eyebrow="Whole day · capture as you go"
      title="Open questions / governance log"
      sub="Seven items pre-logged from pre-work, each with owner, impact, and due date. Workshop job: add what the room surfaces, and convert any \u201cside note\u201d into a row before close."
      fmt={FMT.A3L}
      titleSize={26}
    >
      <table className="ktable">
        <colgroup>
          <col style={{ width: 44 }} /><col style={{ width: 290 }} /><col style={{ width: 84 }} /><col /><col style={{ width: 140 }} /><col style={{ width: 118 }} /><col style={{ width: 84 }} />
        </colgroup>
        <thead>
          <tr>
            <th>#</th><th>Question / unresolved item</th><th>Raised in</th><th>Impact if unresolved</th><th>Owner</th><th>Due date</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {OQ_SEEDS.map((r, i) => (
            <tr key={i} style={{ height: 56 }}>
              <td style={{ fontFamily: "var(--font-mono)", fontSize: 11.5 }}>{"OQ-" + String(i + 1).padStart(2, "0")}</td>
              <td style={{ color: "var(--fg-1)" }}>{r.q}</td>
              <td>{r.lens}</td>
              <td style={{ fontSize: 11.5 }}>{r.impact}</td>
              <td>{r.owner}</td>
              <td style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>{r.due}</td>
              <td style={{ color: r.status === "Owned" ? "var(--k-status-success-110)" : "var(--k-status-warning-110)", fontWeight: 500 }}>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </SheetFrame>
  );
}

Object.assign(window, { TrustRecord, DemoContract, OpenQuestionsLog, DEMO_MOMENTS, DC_BUILT_FROM });
