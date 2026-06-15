// bil-os/ops.jsx — "Nascent business operations" screen: downstream impact of
// the AnaCredit build, attributed to persona-aware decisions, plus the reuse
// pipeline toward the agentic-bank operating layer.
// Exports: ScreenBilOps

const OPS_KPIS = [
  { k: 'Cycle time · data to submission', v: '−58%', sub: 'multi-day → same-cycle window', points: [20, 19, 17, 15, 12, 10, 9, 8], tone: 'var(--k-status-success-100)', attr: 'Control Gate Model · gates 1–3 automated' },
  { k: 'First-pass acceptance', v: '94%', sub: 'baseline est. 81% · target ≥95%', points: [10, 11, 11, 12, 13, 14, 15, 16], tone: 'var(--k-status-success-100)', attr: 'Rule Catalogue R-0.9 · deterministic layer' },
  { k: 'Analyst hours per cycle', v: '−41h', sub: 'triage shifts from hunting to deciding', points: [18, 17, 15, 14, 12, 11, 10, 9], tone: 'var(--k-status-success-100)', attr: 'Exception triage agent · owner routing' },
  { k: 'Evidence completeness', v: '100%', sub: 'by construction · replay verified', points: [8, 10, 12, 14, 16, 16, 16, 16], tone: 'var(--k-spruce-60)', attr: 'Trust Record · evidence service' },
];

const OPS_FLOWS = [
  { fn: 'Regulatory reporting', now: 'Monthly AnaCredit run on KAF rails', next: 'BCL feedback loop closed in-system', persona: 'Weber · Hoffmann', state: 'live pilot' },
  { fn: 'Lending operations', now: 'Structured source-fix requests with population counts', next: 'Pre-cycle source quality gate in T24', persona: 'Krier', state: 'nascent' },
  { fn: 'Data governance', now: 'Critical-data inventory from One-Loan Trace', next: 'Steward sign-off embedded in lineage cards', persona: 'Marques', state: 'nascent' },
  { fn: 'Risk & compliance', now: 'Authority-tagged rule lifecycle in Git', next: 'Policy intake parses ECB/BCL updates to change records', persona: 'Holzem', state: 'nascent' },
  { fn: 'Internal audit', now: 'Replayable runs · evidence packs on demand', next: 'Continuous control testing against live runs', persona: 'Faber', state: 'nascent' },
];

const REUSE_PIPE = [
  { name: 'AnaCredit', phase: 'Now', note: 'lighthouse — this build' },
  { name: 'AnaCredit/FINREP recon', phase: 'Next', note: 'same rails, recon rule family' },
  { name: 'FINREP / COREP', phase: 'Later', note: 'reuse policy lifecycle + evidence layer' },
  { name: 'Enterprise control plane', phase: 'Later', note: 'governed agentic flows beyond reporting' },
];

function ScreenBilOps() {
  return (
    <KShell
      active="business"
      title="Nascent business operations"
      subtitle="Downstream impact across functions, attributed to persona-aware decisions — design targets from the value scorecard, not achieved outcomes"
      headerRight={
        <React.Fragment>
          <KPill tone="spruce">design targets · v0.9</KPill>
          <KBtn size="sm" icon="chart">Open value scorecard</KBtn>
        </React.Fragment>
      }
    >
      <div style={{ padding: 20, height: '100%', display: 'grid', gridTemplateRows: 'auto 1fr auto', gap: 14, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {OPS_KPIS.map((s) => (
            <KCard key={s.k} padded={true}>
              <KEyebrow>{s.k}</KEyebrow>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8, marginTop: 6 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 500, color: 'var(--fg-1)', letterSpacing: '-0.01em', lineHeight: 1 }}>{s.v}</span>
                <KSparkline points={s.points} color={s.tone} width={72} height={26} />
              </div>
              <div style={{ fontSize: 11, color: 'var(--fg-muted)', marginTop: 6 }}>{s.sub}</div>
              <div style={{ fontSize: 10, color: 'var(--k-spruce-70)', marginTop: 8, paddingTop: 8, borderTop: '1px solid var(--bg-2)', display: 'flex', gap: 6, alignItems: 'center' }}>
                <KIcon name="spark" size={11} />
                <span>{s.attr}</span>
              </div>
            </KCard>
          ))}
        </div>
        <KCard eyebrow="Operations becoming possible · by function" title="Where the operating model is turning nascent" padded={false} style={{ minHeight: 0 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr>
                {['Function', 'Operating now', 'Becomes possible next', 'Anchored persona', 'State'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: '9px 16px', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-muted)', borderBottom: '1px solid var(--border-1)', background: 'var(--bg-2)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {OPS_FLOWS.map((f) => (
                <tr key={f.fn} style={{ borderBottom: '1px solid var(--bg-2)' }}>
                  <td style={{ padding: '11px 16px', fontWeight: 500, color: 'var(--fg-1)' }}>{f.fn}</td>
                  <td style={{ padding: '11px 16px', color: 'var(--fg-2)' }}>{f.now}</td>
                  <td style={{ padding: '11px 16px', color: 'var(--fg-2)' }}>{f.next}</td>
                  <td style={{ padding: '11px 16px', fontSize: 11.5, color: 'var(--k-spruce-70)' }}>{f.persona}</td>
                  <td style={{ padding: '11px 16px' }}>{f.state === 'live pilot' ? <KPill tone="success">live pilot</KPill> : <KPill tone="spruce">nascent</KPill>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </KCard>
        <KCard eyebrow="Reuse pipeline · the sponsor's actual bet" title="From lighthouse to operating layer" padded={true}>
          <div style={{ display: 'flex', alignItems: 'stretch', gap: 0 }}>
            {REUSE_PIPE.map((r, i) => (
              <React.Fragment key={r.name}>
                <div style={{ flex: 1, border: '1px solid var(--border-1)', borderRadius: 8, padding: '10px 14px', background: i === 0 ? 'var(--k-ai-spruce-06)' : '#fff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 13.5, color: 'var(--fg-1)' }}>{r.name}</span>
                    <KPill tone={r.phase === 'Now' ? 'spruce' : r.phase === 'Next' ? 'info' : 'neutral'}>{r.phase}</KPill>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--fg-muted)', marginTop: 4 }}>{r.note}</div>
                </div>
                {i < REUSE_PIPE.length - 1 ? <div style={{ alignSelf: 'center', padding: '0 8px', color: 'var(--fg-subtle)', fontSize: 16 }}>→</div> : null}
              </React.Fragment>
            ))}
          </div>
        </KCard>
      </div>
    </KShell>
  );
}

Object.assign(window, { ScreenBilOps });
