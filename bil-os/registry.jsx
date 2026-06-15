// bil-os/registry.jsx — Horizon 1 screens: referenceable persona registry +
// evidence intake. Exports: ScreenBilRegistry, ScreenBilEvidence

const REG_ROWS = [
  { id: 'P-BIL-01', name: 'Claire Weber', role: 'Head of Regulatory Reporting', ev: 6, boards: 5, trust: 'Suggest-only on reportable values', drift: 0.08, status: 'live', loud: 'Value · Controls · Evidence' },
  { id: 'P-BIL-02', name: 'Tom Reuter', role: 'AnaCredit Ops Lead', ev: 6, boards: 4, trust: 'Routine automation, named-reason overrides', drift: 0.05, status: 'live', loud: 'Data · Controls' },
  { id: 'P-BIL-03', name: 'Ana Marques', role: 'Chief Data Officer', ev: 6, boards: 4, trust: 'Diagnosis yes, inferred classification flagged', drift: 0.07, status: 'live', loud: 'Data · Policy' },
  { id: 'P-BIL-04', name: 'Marc Holzem', role: 'Chief Risk Officer', ev: 6, boards: 3, trust: 'Hard rule-layer separation', drift: 0.04, status: 'live', loud: 'Policy · Controls' },
  { id: 'P-BIL-05', name: 'Sofia Krier', role: 'Lending Ops Owner', ev: 5, boards: 3, trust: 'No silent upstream mutation', drift: 0.11, status: 'live', loud: 'Data · People' },
  { id: 'P-BIL-06', name: 'Paul Faber', role: 'Internal Audit Lead', ev: 5, boards: 3, trust: 'Replayable runs, provenance on suggestions', drift: 0.13, status: 'review', loud: 'Evidence' },
  { id: 'P-BIL-07', name: 'Elise Hoffmann', role: 'Supervisor Liaison', ev: 6, boards: 3, trust: 'Structured feedback, human-signed responses', drift: 0.06, status: 'live', loud: 'Evidence · Close' },
  { id: 'P-BIL-08', name: 'Henri Lambert', role: 'Executive Sponsor', ev: 6, boards: 4, trust: 'Automate prepared work, visible accountability', drift: 0.03, status: 'live', loud: 'Value · Close' },
  { id: 'P-BIL-09', name: 'David Schmit', role: 'IT Integration Lead', ev: 6, boards: 4, trust: 'Advisory behind controlled interface', drift: 0.09, status: 'live', loud: 'Controls · Policy' },
  { id: 'P-BIL-10', name: 'Mia Janssens', role: 'Product / Engineering Owner', ev: 6, boards: 5, trust: 'Deterministic first, learning behind', drift: 0.06, status: 'live', loud: 'Close' },
];

function ScreenBilRegistry() {
  return (
    <KShell
      active="registry"
      title="Persona registry · BiL AnaCredit cohort"
      subtitle={<span>10 referenceable synthetic personas · every number traces to a transcript answer or a board cell</span>}
      headerRight={
        <React.Fragment>
          <KBtn size="sm" icon="refresh">Rebuild from evidence</KBtn>
          <KBtn size="sm" kind="primary" icon="user">Talk to persona</KBtn>
        </React.Fragment>
      }
    >
      <div style={{ padding: 20, height: '100%', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, flex: '0 0 auto' }}>
          {[
            { k: 'Personas in registry', v: '10', sub: 'all referenceable · v0.9', tone: 'var(--k-spruce-60)' },
            { k: 'Evidence objects', v: '58', sub: '10 transcripts · 14 boards · 34 doc anchors', tone: 'var(--k-spruce-60)' },
            { k: 'Trust thresholds captured', v: '10 / 10', sub: 'AI autonomy + evidence demands per role', tone: 'var(--k-status-success-100)' },
            { k: 'Awaiting human review', v: '1', sub: 'P-BIL-06 · audit framing update', tone: 'var(--k-status-warning-100)' },
          ].map((s) => (
            <KCard key={s.k} padded={true}>
              <KEyebrow>{s.k}</KEyebrow>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 500, color: 'var(--fg-1)', letterSpacing: '-0.01em', marginTop: 6, lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontSize: 11, color: 'var(--fg-muted)', marginTop: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: 99, background: s.tone }}></span>{s.sub}
              </div>
            </KCard>
          ))}
        </div>
        <KCard eyebrow="Horizon 1 · referenceable" title="Registry" padded={false} style={{ flex: 1, minHeight: 0 }}
          action={<div style={{ display: 'flex', gap: 6 }}><KPill tone="spruce">cohort: AnaCredit workshop</KPill><KPill>sort: decision weight</KPill></div>}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr>
                {['Persona', 'Role', 'Evidence', 'Boards referenced', 'AI trust line', 'Drift', 'Status'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: '9px 14px', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-muted)', borderBottom: '1px solid var(--border-1)', background: 'var(--bg-2)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {REG_ROWS.map((r) => (
                <tr key={r.id} style={{ borderBottom: '1px solid var(--bg-2)' }}>
                  <td style={{ padding: '8px 14px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                      <span style={{ width: 26, height: 26, borderRadius: 6, background: 'var(--k-ai-spruce-12)', color: 'var(--k-spruce-70)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 11 }}>{r.name.split(' ').map((w) => w[0]).join('')}</span>
                      <span>
                        <span style={{ display: 'block', fontWeight: 500, color: 'var(--fg-1)', fontSize: 12 }}>{r.name}</span>
                        <code style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--fg-muted)', background: 'transparent', padding: 0 }}>{r.id} · v0.9</code>
                      </span>
                    </span>
                  </td>
                  <td style={{ padding: '8px 14px', color: 'var(--fg-2)' }}>{r.role}<span style={{ display: 'block', fontSize: 10, color: 'var(--fg-muted)' }}>{r.loud}</span></td>
                  <td style={{ padding: '8px 14px', fontFamily: 'var(--font-mono)', fontSize: 11 }}>{r.ev} TRN</td>
                  <td style={{ padding: '8px 14px', fontFamily: 'var(--font-mono)', fontSize: 11 }}>{r.boards} BRD</td>
                  <td style={{ padding: '8px 14px', fontSize: 11.5, color: 'var(--fg-2)' }}>{r.trust}</td>
                  <td style={{ padding: '8px 14px', fontFamily: 'var(--font-mono)', fontSize: 11, color: r.drift > 0.1 ? 'var(--k-status-warning-110)' : 'var(--fg-2)' }}>{r.drift.toFixed(2)}</td>
                  <td style={{ padding: '8px 14px' }}>
                    {r.status === 'live' ? <KPill tone="success"><KDot tone="success" size={5} /> live</KPill> : <KPill tone="warning"><KDot tone="warning" size={5} /> review</KPill>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </KCard>
      </div>
    </KShell>
  );
}

/* ---------- Evidence intake ---------- */

const EVIDENCE_SOURCES = [
  { id: 'TRN-01…10', kind: 'Synthetic transcripts', n: 10, detail: '6 Q/A per role · trust thresholds, evidence demands, failure stories', status: 'parsed', weight: 'primary' },
  { id: 'DOC-BIL-1', kind: 'Igloo narrative deck', n: 8, detail: '8 scenes · regulatory pressure → target state → six lenses', status: 'parsed', weight: 'context' },
  { id: 'DOC-BIL-3', kind: 'Current-state process deck', n: 12, detail: 'T24 / RFO / branch sources · INVOKE loops · SOFIE submission', status: 'parsed', weight: 'primary' },
  { id: 'DOC-BIL-4', kind: 'Project brief', n: 6, detail: 'value hypothesis 50–70% effort reduction · phase logic', status: 'parsed', weight: 'primary' },
  { id: 'ECB-VAL', kind: 'ECB validation checks', n: 14, detail: 'referential integrity · completeness · consistency families', status: 'parsed', weight: 'authority' },
  { id: 'BCL-INS', kind: 'BCL instructions page', n: 9, detail: 'schema v1.0.13 → v1.0.14 · comparison methodology · contacts', status: 'parsed', weight: 'authority' },
  { id: 'BRD-01…14', kind: 'Pre-filled workshop boards', n: 14, detail: 'value scorecard → demo contract · all cells citeable', status: 'linked', weight: 'workshop' },
];

function ScreenBilEvidence() {
  return (
    <KShell
      active="evidence"
      title="Evidence intake · pre-work corpus"
      subtitle="What the personas and boards are built from — every artifact parsed, chunked, and citeable"
      headerRight={<KBtn size="sm" kind="primary" icon="doc">Add source</KBtn>}
    >
      <div style={{ padding: 20, height: '100%', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 14, overflow: 'hidden' }}>
        <KCard eyebrow="7 source families · 63 chunks" title="Corpus" padded={false}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {EVIDENCE_SOURCES.map((s, i) => (
              <div key={s.id} style={{ display: 'grid', gridTemplateColumns: '92px 1fr auto', gap: 12, alignItems: 'center', padding: '11px 16px', borderBottom: i < EVIDENCE_SOURCES.length - 1 ? '1px solid var(--bg-2)' : 'none' }}>
                <code style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--k-spruce-70)', background: 'var(--k-ai-spruce-06)', padding: '3px 6px', borderRadius: 3, textAlign: 'center' }}>{s.id}</code>
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: 'block', fontSize: 12.5, fontWeight: 500, color: 'var(--fg-1)' }}>{s.kind}</span>
                  <span style={{ display: 'block', fontSize: 11, color: 'var(--fg-muted)', marginTop: 1 }}>{s.detail}</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <KPill tone={s.weight === 'authority' ? 'info' : s.weight === 'primary' ? 'spruce' : 'neutral'}>{s.weight}</KPill>
                  <KPill tone="success">{s.status}</KPill>
                </span>
              </div>
            ))}
          </div>
        </KCard>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
          <KCard eyebrow="Coverage" title="Lens coverage from pre-work">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['Value', 0.82], ['Data', 0.9], ['Policy', 0.74], ['Controls', 0.86], ['People', 0.95], ['Evidence', 0.88],
              ].map(([lens, v]) => (
                <div key={lens}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 3 }}>
                    <span style={{ fontWeight: 500, color: 'var(--fg-1)' }}>{lens}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg-muted)' }}>{Math.round(v * 100)}%</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 99, background: 'var(--bg-3)' }}>
                    <div style={{ width: (v * 100) + '%', height: '100%', borderRadius: 99, background: 'var(--k-spruce-60)' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </KCard>
          <KCard eyebrow="Honesty rule" title="What this corpus is not">
            <p style={{ margin: 0, fontSize: 12, lineHeight: 1.55, color: 'var(--fg-2)' }}>
              The transcripts are <strong style={{ color: 'var(--fg-1)' }}>deliberately synthetic</strong> — workshop-ready composites, not records of actual BiL interviews. Boards pre-filled from this corpus are drafts to be confirmed in the room. Any cell a participant overturns is logged to the governance inbox and re-weighted in the registry.
            </p>
          </KCard>
        </div>
      </div>
    </KShell>
  );
}

Object.assign(window, { ScreenBilRegistry, ScreenBilEvidence });
