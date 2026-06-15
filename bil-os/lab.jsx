// bil-os/lab.jsx — Horizon 2 screens: scenario lab, policy-as-code gate,
// human approval queue. Exports: ScreenBilScenario, ScreenBilGate, ScreenBilQueue

/* ---------- Scenario lab ---------- */

const SCENARIO_REACTIONS = [
  { id: 'P-BIL-01', name: 'Claire Weber', role: 'Head of Reg. Reporting', stance: 'Conditional approve', tone: 'warning', says: 'I sign only if the override carries a named reason and the evidence pack shows the unresolved warning explicitly.', metric: 'approves at T-31h' },
  { id: 'P-BIL-04', name: 'Marc Holzem', role: 'CRO / Policy lead', stance: 'Escalate', tone: 'error', says: 'A blocking deterministic failure this close to cut-off is a waiver decision, not a peer-to-peer fix. Take it to the formal path.', metric: 'demands waiver path' },
  { id: 'P-BIL-05', name: 'Sofia Krier', role: 'Lending Ops Owner', stance: 'Fix at source', tone: 'spruce', says: 'Give me the field, the population count, and two hours. A reporting-side patch now means the same red item next month.', metric: 'ETA 2h source fix' },
  { id: 'P-BIL-06', name: 'Paul Faber', role: 'Internal Audit Lead', stance: 'Observe', tone: 'info', says: 'Whatever you choose, the run must replay. If the waiver is informal, this scenario becomes a finding.', metric: 'requires replay' },
];

function ScreenBilScenario() {
  return (
    <KShell
      active="scenario"
      title="Scenario lab · SCN-04"
      subtitle="Blocking deterministic failure discovered 36h before BCL cut-off — played against the persona cohort before any build decision"
      headerRight={
        <React.Fragment>
          <KBtn size="sm" icon="refresh">Re-run cohort</KBtn>
          <KBtn size="sm" kind="primary" icon="flask">Promote to Control Gate Model</KBtn>
        </React.Fragment>
      }
    >
      <div style={{ padding: 20, height: '100%', display: 'grid', gridTemplateRows: 'auto 1fr auto', gap: 14, overflow: 'hidden' }}>
        <KCard eyebrow="Scenario under test" title="SCN-04 · Late blocking failure" padded={true}
          action={<div style={{ display: 'flex', gap: 6 }}><KPill tone="error">deterministic block</KPill><KPill tone="warning">T-36h</KPill><KPill tone="spruce">gate 3 → 4</KPill></div>}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: 16, fontSize: 12 }}>
            <div style={{ lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--fg-1)' }}>RC-001 fails on 412 instruments:</strong> counterparty LEI missing for a branch-originated portfolio. Deterministic block at gate 3; submission impossible while unresolved. The lab asks: who decides, who fixes, what evidence is produced, and does the deadline survive?
            </div>
            <div>
              <KEyebrow style={{ marginBottom: 6 }}>Inputs</KEyebrow>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, lineHeight: 1.7, color: 'var(--fg-2)' }}>
                snapshot SNP-2026-06-A<br />policy set v0.9 · 14 rules<br />golden dataset GD-03<br />RACI wall · BRD-11
              </div>
            </div>
            <div>
              <KEyebrow style={{ marginBottom: 6 }}>Outcome under current model</KEyebrow>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginTop: 2 }}>
                <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5 }}><span>Deadline held</span><KPill tone="success">yes · T-4h</KPill></span>
                <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5 }}><span>Evidence complete</span><KPill tone="success">yes</KPill></span>
                <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5 }}><span>Root cause closed</span><KPill tone="warning">deferred → backlog</KPill></span>
              </div>
            </div>
          </div>
        </KCard>
        <KCard eyebrow="Cohort reaction · 4 of 10 personas decisive in this scenario" title="How the room responds" padded={false} style={{ minHeight: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', height: '100%' }}>
            {SCENARIO_REACTIONS.map((r, i) => (
              <div key={r.id} style={{ padding: '14px 16px', borderRight: i < 3 ? '1px solid var(--bg-2)' : 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                  <span style={{ width: 28, height: 28, borderRadius: 6, background: 'var(--k-ai-spruce-12)', color: 'var(--k-spruce-70)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 11.5 }}>{r.name.split(' ').map((w) => w[0]).join('')}</span>
                  <span>
                    <span style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'var(--fg-1)' }}>{r.name}</span>
                    <span style={{ display: 'block', fontSize: 10, color: 'var(--fg-muted)' }}>{r.role}</span>
                  </span>
                </div>
                <KPill tone={r.tone} style={{ alignSelf: 'flex-start' }}>{r.stance}</KPill>
                <div style={{ fontSize: 11.5, lineHeight: 1.5, color: 'var(--fg-2)', fontStyle: 'italic', flex: 1 }}>&ldquo;{r.says}&rdquo;</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)', borderTop: '1px solid var(--bg-2)', paddingTop: 8 }}>{r.metric}</div>
              </div>
            ))}
          </div>
        </KCard>
        <KCard padded={true} eyebrow="What the lab writes back" title="Outputs to workshop boards">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', fontSize: 11.5 }}>
            <KPill tone="spruce">Control Gate Model · override path at gate 4 confirmed</KPill>
            <KPill tone="spruce">RACI wall · emergency hotfix row stress-tested</KPill>
            <KPill tone="spruce">Trust Record · override-accepted event fields verified</KPill>
            <KPill tone="warning">Open questions · waiver approver pair still unnamed</KPill>
          </div>
        </KCard>
      </div>
    </KShell>
  );
}

/* ---------- Policy gate ---------- */

const GATE_CHECKS = [
  { name: 'Authority resolved', detail: 'RC-001 cites ECB validation checks (tier 2) · version-pinned', status: 'pass' },
  { name: 'Evidence fields declared', detail: 'rule_id, severity, reason_code, snapshot_id — matches Trust Record', status: 'pass' },
  { name: 'Test pack green', detail: '3/3 golden cases · valid LEI / malformed / missing', status: 'pass' },
  { name: 'Segregation of duties', detail: 'author Janssens · approver Holzem · attestor Weber — no overlap', status: 'pass' },
  { name: 'Human review boundary', detail: 'block auto-executes; override requires named approver + reason', status: 'pass' },
  { name: 'Rollback package', detail: 'previous policy version pinned · rollback tested on GD-03', status: 'warn' },
];

function ScreenBilGate() {
  return (
    <KShell
      active="policy"
      title="Policy-as-code gate · release R-0.9"
      subtitle="Every rule passes six checks before OPA publication — no check, no release"
      headerRight={
        <React.Fragment>
          <KBtn size="sm">View rego diff</KBtn>
          <KBtn size="sm" kind="primary" icon="check">Approve &amp; publish</KBtn>
        </React.Fragment>
      }
    >
      <div style={{ padding: 20, height: '100%', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14, overflow: 'hidden' }}>
        <KCard eyebrow="Candidate · from Rule Catalogue BRD-08" title="RC-001 · Counterparty LEI completeness" padded={false}>
          <div style={{ padding: 16, borderBottom: '1px solid var(--bg-2)', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <KPill tone="info">authority 2 · official guidance</KPill>
            <KPill tone="error">deterministic block</KPill>
            <KPill tone="spruce">OPA executable</KPill>
            <KPill>severity E</KPill>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {GATE_CHECKS.map((c, i) => (
              <div key={c.name} style={{ display: 'grid', gridTemplateColumns: '26px 1fr', gap: 12, padding: '12px 16px', borderBottom: i < GATE_CHECKS.length - 1 ? '1px solid var(--bg-2)' : 'none', alignItems: 'flex-start' }}>
                <span style={{
                  width: 22, height: 22, borderRadius: 999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
                  background: c.status === 'pass' ? 'var(--k-status-success-10)' : 'var(--k-status-warning-10)',
                  color: c.status === 'pass' ? 'var(--k-status-success-110)' : 'var(--k-status-warning-110)',
                  border: `1px solid ${c.status === 'pass' ? 'var(--k-status-success-20)' : 'var(--k-status-warning-20)'}`,
                }}>
                  <KIcon name={c.status === 'pass' ? 'check' : 'warn'} size={11} />
                </span>
                <span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, fontWeight: 500, color: 'var(--fg-1)' }}>
                    {c.name}
                    {c.status === 'warn' ? <KPill tone="warning">rollback rehearsal pending</KPill> : null}
                  </span>
                  <span style={{ display: 'block', fontSize: 11, color: 'var(--fg-muted)', marginTop: 2 }}>{c.detail}</span>
                </span>
              </div>
            ))}
          </div>
        </KCard>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
          <KCard eyebrow="Decision payload · what OPA will emit" title="Decision contract">
            <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 10.5, lineHeight: 1.65, color: 'var(--fg-1)', background: 'var(--bg-2)', padding: 12, borderRadius: 6, overflow: 'hidden' }}>{`{
  "rule_id": "RC-001",
  "policy_version": "0.9.2",
  "policy_hash": "ab4f…91c2",
  "schema_version": "1.0.13",
  "decision": "block",
  "reason_code": "LEI_MISSING",
  "owner_hint": "lending_ops",
  "snapshot_id": "SNP-2026-06-A"
}`}</pre>
          </KCard>
          <KCard eyebrow="Release train" title="R-0.9 · first OPA release" padded={true} style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
              {[
                ['RC-001 LEI completeness', 'this gate', 'spruce'],
                ['RC-003 sector code referential', 'queued', 'neutral'],
                ['RC-004 €25,000 threshold scope', 'queued', 'neutral'],
                ['RC-002 FINREP reconciliation', 'deferred · P1', 'warning'],
                ['RC-007 multi-debtor natural person', 'blocked · authority unresolved', 'error'],
              ].map(([r, s, t]) => (
                <div key={r} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, paddingBottom: 7, borderBottom: '1px solid var(--bg-2)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-1)' }}>{r}</span>
                  <KPill tone={t}>{s}</KPill>
                </div>
              ))}
              <div style={{ fontSize: 11, color: 'var(--fg-muted)', lineHeight: 1.5, marginTop: 2 }}>
                Publication requires Compliance approval (Holzem) and writes policy_version + hash to the Trust Record. Rollback package is part of the release, not an afterthought.
              </div>
            </div>
          </KCard>
        </div>
      </div>
    </KShell>
  );
}

/* ---------- Approval queue ---------- */

const QUEUE_ITEMS = [
  { id: 'EXC-2214', kind: 'Override request', sev: 'error', what: 'Accept residual warning W-031 (plausibility · interest rate outlier) for 3 instruments', who: 'Reuter → Weber', sla: '4h to cut-off', state: 'awaiting approver' },
  { id: 'EXC-2215', kind: 'Source correction', sev: 'warning', what: 'Sector reclassification for 28 counterparties · NACE mapping fix in T24', who: 'Marques → Krier', sla: 'next cycle', state: 'owner accepted' },
  { id: 'POL-0921', kind: 'Policy publication', sev: 'info', what: 'RC-001 v0.9.2 → production policy set', who: 'Janssens → Holzem', sla: 'before next run', state: 'gate passed' },
  { id: 'WVR-0103', kind: 'Emergency waiver', sev: 'critical', what: 'Hotfix mapping for branch LEI feed · rollback pinned', who: 'Schmit → Holzem + Weber', sla: 'T-36h scenario', state: 'dual approval' },
];

function ScreenBilQueue() {
  return (
    <KShell
      active="approval"
      title="Human approval queue"
      subtitle="The gate between system action and accountable decision — every item carries lineage, owner, and SLA"
      headerRight={<KPill tone="warning">4 open · 1 critical</KPill>}
    >
      <div style={{ padding: 20, height: '100%', display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden' }}>
        {QUEUE_ITEMS.map((q) => (
          <KCard key={q.id} padded={true}>
            <div style={{ display: 'grid', gridTemplateColumns: '90px 130px 1fr 170px 130px auto', gap: 14, alignItems: 'center' }}>
              <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-1)', background: 'var(--bg-2)', padding: '4px 8px', borderRadius: 4, textAlign: 'center' }}>{q.id}</code>
              <KPill tone={q.sev === 'critical' ? 'error' : q.sev}>{q.kind}</KPill>
              <span style={{ fontSize: 12.5, color: 'var(--fg-1)', lineHeight: 1.4 }}>{q.what}</span>
              <span style={{ fontSize: 11.5, color: 'var(--fg-2)' }}>
                <span style={{ display: 'block', fontWeight: 500, color: 'var(--fg-1)' }}>{q.who}</span>
                <span style={{ display: 'block', fontSize: 10.5, color: 'var(--fg-muted)' }}>{q.state}</span>
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: q.sev === 'critical' || q.sla.includes('4h') ? 'var(--k-status-error-110)' : 'var(--fg-muted)' }}>{q.sla}</span>
              <span style={{ display: 'flex', gap: 6 }}>
                <KBtn size="sm" kind="primary">Approve</KBtn>
                <KBtn size="sm">Reject</KBtn>
              </span>
            </div>
          </KCard>
        ))}
        <KCard padded={true} eyebrow="Queue rule" title="Nothing approves itself">
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.55, color: 'var(--fg-2)', maxWidth: 760 }}>
            Approvals capture <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}>decision · decision_reason · approver_id · timestamp_utc</code> to the Trust Record. Material overrides and emergency waivers require the dual-approval pairs fixed on the RACI wall. AI suggestions can prepare any item in this queue; they can close none of them.
          </p>
        </KCard>
      </div>
    </KShell>
  );
}

Object.assign(window, { ScreenBilScenario, ScreenBilGate, ScreenBilQueue });
