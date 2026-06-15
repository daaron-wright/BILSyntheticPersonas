// bil-os/cross.jsx — Cross-cutting screens: live agent run + governance inbox.
// Exports: ScreenBilLiveAgent, ScreenBilInbox

/* ---------- Live agent run ---------- */

const RUN_STEPS = [
  { t: '06:02:11', step: 'Ingest & schema validation', actor: 'Integration platform', detail: 'T24 + RFO Master + 4 branch feeds → canonical payload · schema v1.0.13 accepted', state: 'done', mono: 'SNP-2026-06-A' },
  { t: '06:04:39', step: 'Deterministic rule pass', actor: 'OPA runtime · policy set v0.9.2', detail: '14 rules · 2 blocking failures · 7 warnings · reason codes + owner hints emitted', state: 'done', mono: '412 LEI_MISSING · 3 RATE_OUTLIER' },
  { t: '06:05:02', step: 'Exception triage', actor: 'Triage agent (advisory)', detail: 'Clustered 412 failures → 1 root cause (branch LEI feed) · routed to Lending Ops with population count', state: 'done', mono: 'EXC-2214 · EXC-2215' },
  { t: '07:18:44', step: 'Remediation suggestion', actor: 'Suggestion agent (advisory)', detail: 'Proposed feed mapping fix + 3 manual completions · confidence shown with provenance', state: 'active', mono: 'awaiting human decision' },
  { t: '—', step: 'Human review & approval', actor: 'Reuter → Weber', detail: 'Approve, reject, or edit each correction · reasons captured to Trust Record', state: 'pending', mono: 'gate 4' },
  { t: '—', step: 'Attestation & submission', actor: 'Weber (attestor)', detail: 'Evidence pack assembled · SDMX file generated · SOFIE submission + receipt', state: 'pending', mono: 'gate 5–6' },
];

function ScreenBilLiveAgent() {
  return (
    <KShell
      active="liveagent"
      title="Live agent run · cycle 2026-06"
      subtitle="One-click orchestration under governance — agents prepare, humans decide, evidence accumulates"
      headerRight={
        <React.Fragment>
          <KPill tone="spruce"><KDot tone="info" size={5} /> run in progress · gate 4</KPill>
          <KBtn size="sm" icon="play">Replay from snapshot</KBtn>
        </React.Fragment>
      }
    >
      <div style={{ padding: 20, height: '100%', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 14, overflow: 'hidden' }}>
        <KCard eyebrow="Run RUN-2026-06-001 · snapshot SNP-2026-06-A" title="Execution timeline" padded={false}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {RUN_STEPS.map((s, i) => (
              <div key={s.step} style={{ display: 'grid', gridTemplateColumns: '64px 22px 1fr', gap: 12, padding: '12px 16px', borderBottom: i < RUN_STEPS.length - 1 ? '1px solid var(--bg-2)' : 'none', opacity: s.state === 'pending' ? 0.55 : 1 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)', paddingTop: 3 }}>{s.t}</span>
                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                  <span style={{
                    width: 18, height: 18, borderRadius: 999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    background: s.state === 'done' ? 'var(--k-status-success-10)' : s.state === 'active' ? 'var(--k-ai-spruce-12)' : 'var(--bg-3)',
                    border: `1.5px solid ${s.state === 'done' ? 'var(--k-status-success-100)' : s.state === 'active' ? 'var(--k-spruce-60)' : 'var(--border-2)'}`,
                    color: s.state === 'done' ? 'var(--k-status-success-110)' : 'var(--k-spruce-70)',
                  }}>
                    {s.state === 'done' ? <KIcon name="check" size={9} /> : s.state === 'active' ? <span style={{ width: 6, height: 6, borderRadius: 99, background: 'var(--k-spruce-60)' }}></span> : null}
                  </span>
                  {i < RUN_STEPS.length - 1 ? <span style={{ width: 1.5, flex: 1, background: 'var(--border-1)', minHeight: 14 }}></span> : null}
                </span>
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--fg-1)' }}>{s.step}</span>
                    <span style={{ fontSize: 10.5, color: 'var(--k-spruce-70)' }}>{s.actor}</span>
                    {s.state === 'active' ? <KPill tone="spruce">agent is preparing · human decides</KPill> : null}
                  </span>
                  <span style={{ display: 'block', fontSize: 11.5, color: 'var(--fg-2)', marginTop: 2, lineHeight: 1.45 }}>{s.detail}</span>
                  <code style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--fg-muted)', background: 'var(--bg-2)', padding: '2px 6px', borderRadius: 3, marginTop: 4 }}>{s.mono}</code>
                </span>
              </div>
            ))}
          </div>
        </KCard>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
          <KCard eyebrow="Chain of custody · accumulating" title="Evidence pack · RUN-2026-06-001">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7, fontSize: 11.5 }}>
              {[
                ['snapshot_id', 'SNP-2026-06-A', true],
                ['schema_version', '1.0.13', true],
                ['policy_version + hash', '0.9.2 · ab4f…91c2', true],
                ['rule results', '14 rules · 2B / 7W', true],
                ['triage + suggestions', 'EXC-2214 · provenance attached', true],
                ['approval log', 'pending · gate 4', false],
                ['attestation + receipt', 'pending · gate 5–6', false],
              ].map(([k, v, done]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, paddingBottom: 6, borderBottom: '1px solid var(--bg-2)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-2)' }}>{k}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 10, color: done ? 'var(--fg-1)' : 'var(--fg-subtle)' }}>
                    {v}
                    <KDot tone={done ? 'success' : 'muted'} size={5} />
                  </span>
                </div>
              ))}
            </div>
          </KCard>
          <KCard eyebrow="Advisory boundary" title="What the agents may not do" style={{ flex: 1 }}>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, fontSize: 11.5, lineHeight: 1.5 }}>
              {[
                'Alter a reportable value without an approved correction — every change is human-decided with a named reason.',
                'Publish or modify a policy — publication runs through the policy gate with segregation of duties.',
                'Submit to SOFIE — attestation is an explicit human act, blocked while unresolved blockers exist.',
                'Mutate source-system data — suggestions route to Lending Ops as structured requests.',
              ].map((t, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '8px 1fr', gap: 10 }}>
                  <span style={{ width: 4, borderRadius: 2, background: 'var(--k-warm-red-50)', alignSelf: 'stretch' }}></span>
                  <span style={{ color: 'var(--fg-2)' }}>{t}</span>
                </li>
              ))}
            </ul>
          </KCard>
        </div>
      </div>
    </KShell>
  );
}

/* ---------- Governance inbox ---------- */

const INBOX_ITEMS = [
  { id: 'OVR-118', when: 'today 09:12', who: 'Claire Weber', what: 'Edited suggested correction on EXC-2214 — kept mapping fix, rejected auto-completion of 3 LEIs pending registry lookup', learn: 'Suggestion confidence for LEI auto-completion lowered · registry lookup added as precondition', tone: 'spruce' },
  { id: 'OVR-117', when: 'today 08:40', who: 'Marc Holzem', what: 'Reclassified RC-007 from deterministic to interpretive — multi-debtor natural-person treatment needs a policy decision', learn: 'Rule Catalogue updated · RC-007 moved to authority-unresolved parking lot', tone: 'warning' },
  { id: 'OVR-116', when: 'yesterday', who: 'Sofia Krier', what: 'Rejected reporting-side patch for sector codes — demanded source fix with population count', learn: 'Routing rule updated: sector-code defects → Lending Ops first, reporting fallback only at T-8h', tone: 'spruce' },
  { id: 'OVR-115', when: 'yesterday', who: 'Paul Faber', what: 'Flagged evidence pack missing previous-treatment reference on recurring defects', learn: 'Trust Record field added: prior_occurrence_ref on rule-failure events', tone: 'info' },
];

function ScreenBilInbox() {
  return (
    <KShell
      active="inbox"
      title="Governance inbox · learned from you"
      subtitle="Every human override is logged, explained, and folded back into rules, routing, and personas — with provenance"
      headerRight={<KPill tone="spruce">4 overrides this cycle · all traceable</KPill>}
    >
      <div style={{ padding: 20, height: '100%', display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden' }}>
        {INBOX_ITEMS.map((m) => (
          <KCard key={m.id} padded={true}>
            <div style={{ display: 'grid', gridTemplateColumns: '74px 150px 1.4fr 1fr', gap: 16, alignItems: 'flex-start' }}>
              <span>
                <code style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-1)', background: 'var(--bg-2)', padding: '3px 7px', borderRadius: 4 }}>{m.id}</code>
                <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--fg-muted)', marginTop: 5 }}>{m.when}</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 26, height: 26, borderRadius: 6, background: 'var(--k-ai-spruce-12)', color: 'var(--k-spruce-70)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 11 }}>{m.who.split(' ').map((w) => w[0]).join('')}</span>
                <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--fg-1)' }}>{m.who}</span>
              </span>
              <span style={{ fontSize: 12, color: 'var(--fg-2)', lineHeight: 1.5 }}>{m.what}</span>
              <span style={{ background: 'var(--k-ai-spruce-06)', borderRadius: 6, padding: '8px 12px', fontSize: 11, lineHeight: 1.5, color: 'var(--fg-2)' }}>
                <span style={{ display: 'block', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--k-spruce-70)', marginBottom: 3 }}>System learned</span>
                {m.learn}
              </span>
            </div>
          </KCard>
        ))}
        <KCard padded={true} eyebrow="Why this inbox exists" title="Overrides are training data with governance">
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.55, color: 'var(--fg-2)', maxWidth: 820 }}>
            Learning is controlled, not ad hoc: an override never silently changes a rule. It produces a <strong style={{ color: 'var(--fg-1)' }}>governed recommendation</strong> — a policy backlog item, a routing change, or a persona update — which passes the same policy gate as any other change. The personas in the registry re-weight from this log, which is what keeps them referenceable instead of stale.
          </p>
        </KCard>
      </div>
    </KShell>
  );
}

Object.assign(window, { ScreenBilLiveAgent, ScreenBilInbox });
