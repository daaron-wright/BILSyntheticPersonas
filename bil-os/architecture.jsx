// bil-os/architecture.jsx — KAF (Kyndryl Agentic Framework) system architecture
// for the BiL AnaCredit build: sources → ingestion → policy/agent plane →
// human plane → outputs, with the Persona OS governance loop underneath.
// Pure DOM + SVG node graph, no diagram library. Exports: ScreenBilArchitecture

const ARCH_W = 1800, ARCH_H = 1010;

const PLANES = {
  source: { label: 'Sources', color: '#6B7780' },
  ingest: { label: 'Ingestion', color: '#29707A' },
  policy: { label: 'Policy & agents', color: '#8A4FBF' },
  human: { label: 'Human plane', color: '#FF462D' },
  output: { label: 'Outputs & evidence', color: '#1F5580' },
  external: { label: 'External', color: '#3D3D3D' },
  persona: { label: 'Persona OS · governance loop', color: '#5BA2AE' },
};

const NODES = {
  t24: { x: 40, y: 120, w: 196, h: 60, plane: 'source', title: 'T24 core banking', sub: 'loans · counterparties' },
  rfo: { x: 40, y: 200, w: 196, h: 60, plane: 'source', title: 'RFO Master', sub: 'reference & consolidation' },
  branch: { x: 40, y: 280, w: 196, h: 60, plane: 'source', title: 'Branch / subsidiary feeds', sub: 'contracted payloads' },
  reg: { x: 40, y: 472, w: 196, h: 68, plane: 'source', title: 'ECB / BCL updates', sub: 'regulation · manual · schemas' },

  orch: { x: 318, y: 168, w: 218, h: 84, plane: 'ingest', title: 'Orchestrator · contracted ingestion', sub: 'canonical payload · SNP-id' },
  schema: { x: 318, y: 300, w: 218, h: 60, plane: 'ingest', title: 'Schema registry', sub: 'v1.0.13 → v1.0.14 · versioned' },
  intake: { x: 318, y: 472, w: 218, h: 68, plane: 'policy', title: 'Regulatory change intake', sub: 'change record · impact · owner' },

  repo: { x: 626, y: 56, w: 218, h: 60, plane: 'policy', title: 'Policy repo · Git', sub: 'rego · versions · rollback packs' },
  opa: { x: 626, y: 168, w: 218, h: 84, plane: 'policy', title: 'OPA / PaC runtime', sub: 'deterministic block · warn · reason codes' },
  plaus: { x: 626, y: 300, w: 218, h: 64, plane: 'policy', title: 'Plausibility & recon service', sub: 'indicators · FINREP comparison' },
  triage: { x: 626, y: 412, w: 218, h: 64, plane: 'policy', title: 'Triage agent · advisory', sub: 'cluster · root cause · owner hint', ai: true },
  suggest: { x: 626, y: 504, w: 218, h: 64, plane: 'policy', title: 'Remediation suggester · advisory', sub: 'proposed fixes · provenance', ai: true },

  ui: { x: 938, y: 200, w: 226, h: 84, plane: 'human', title: 'Control UI · exception queue', sub: 'rule · severity · lineage · owner' },
  queue: { x: 938, y: 340, w: 226, h: 68, plane: 'human', title: 'Approval queue · HITL', sub: 'approve / reject / edit + reason' },
  attest: { x: 938, y: 460, w: 226, h: 60, plane: 'human', title: 'Attestation', sub: 'explicit human act · gate 5' },

  writer: { x: 1268, y: 168, w: 226, h: 84, plane: 'output', title: 'SDMX writer · submission connector', sub: 'report file · receipt' },
  evidence: { x: 1268, y: 312, w: 226, h: 84, plane: 'output', title: 'Evidence service · Trust Record', sub: 'replayable chain of custody' },
  feedback: { x: 1268, y: 460, w: 226, h: 60, plane: 'output', title: 'Feedback parser', sub: 'workbook → classified items' },

  bcl: { x: 1592, y: 196, w: 168, h: 60, plane: 'external', title: 'BCL · SOFIE', sub: 'submission channel' },
  fbwb: { x: 1592, y: 460, w: 168, h: 60, plane: 'external', title: 'BCL feedback', sub: '20 wd / 5 d clocks' },

  corpus: { x: 318, y: 760, w: 218, h: 64, plane: 'persona', title: 'Evidence corpus · pre-work', sub: 'transcripts · decks · boards' },
  registry: { x: 626, y: 760, w: 218, h: 64, plane: 'persona', title: 'Persona registry · H1', sub: '10 referenceable composites' },
  talk: { x: 626, y: 862, w: 218, h: 56, plane: 'persona', title: 'Talk to persona', sub: 'cited interrogation' },
  lab: { x: 938, y: 760, w: 226, h: 64, plane: 'persona', title: 'Scenario lab · H2', sub: 'play decisions vs. cohort' },
  pgate: { x: 1268, y: 760, w: 226, h: 64, plane: 'persona', title: 'Policy gate · H2', sub: '6 checks before publication' },
  inbox: { x: 938, y: 862, w: 226, h: 56, plane: 'persona', title: 'Governance inbox', sub: 'overrides → governed learning' },
};

function anchor(id, side) {
  const n = NODES[id];
  if (side === 'r') return [n.x + n.w, n.y + n.h / 2];
  if (side === 'l') return [n.x, n.y + n.h / 2];
  if (side === 't') return [n.x + n.w / 2, n.y];
  if (side === 'b') return [n.x + n.w / 2, n.y + n.h];
  return [n.x + n.w / 2, n.y + n.h / 2];
}

// from, fromSide, to, toSide, label?, dashed?, color?
const EDGES = [
  ['t24', 'r', 'orch', 'l'],
  ['rfo', 'r', 'orch', 'l'],
  ['branch', 'r', 'orch', 'l'],
  ['schema', 't', 'orch', 'b', 'version pin'],
  ['orch', 'r', 'opa', 'l', 'canonical payload'],
  ['repo', 'b', 'opa', 't', 'policy set + hash'],
  ['opa', 'b', 'plaus', 't'],
  ['opa', 'r', 'ui', 'l', 'blocks · warnings'],
  ['plaus', 'r', 'ui', 'l'],
  ['opa', 'b', 'triage', 't', null, true],
  ['triage', 'b', 'suggest', 't', null, true],
  ['triage', 'r', 'ui', 'l', 'owner hint', true],
  ['suggest', 'r', 'queue', 'l', 'proposal + provenance', true],
  ['ui', 'b', 'queue', 't'],
  ['queue', 'b', 'attest', 't', 'no unresolved blockers'],
  ['attest', 'r', 'writer', 'l'],
  ['writer', 'r', 'bcl', 'l', 'SDMX + receipt'],
  ['opa', 'r', 'evidence', 'l', null, false, '#1F5580'],
  ['queue', 'r', 'evidence', 'l', 'decisions + reasons', false, '#1F5580'],
  ['writer', 'b', 'evidence', 't'],
  ['fbwb', 'l', 'feedback', 'r'],
  ['feedback', 'b', 'intake', 'b', 'structural items', false, '#8A4FBF'],
  ['reg', 'r', 'intake', 'l'],
  ['intake', 't', 'repo', 'l', 'authoring → gate'],
  ['corpus', 'r', 'registry', 'l'],
  ['registry', 'r', 'lab', 'l'],
  ['registry', 'b', 'talk', 't'],
  ['lab', 'r', 'pgate', 'l', 'stress-tested rules'],
  ['pgate', 't', 'repo', 'b', 'approved publication', false, '#5BA2AE'],
  ['queue', 'b', 'inbox', 't', 'overrides', true, '#5BA2AE'],
  ['inbox', 'l', 'registry', 'b', 're-weight personas', true, '#5BA2AE'],
];

function edgePath(e) {
  const [from, fs, to, ts] = e;
  const [x1, y1] = anchor(from, fs);
  const [x2, y2] = anchor(to, ts);
  // control points extend along the anchor direction
  const ext = (s, x, y) => s === 'r' ? [x + 56, y] : s === 'l' ? [x - 56, y] : s === 't' ? [x, y - 48] : [x, y + 48];
  const [c1x, c1y] = ext(fs, x1, y1);
  const [c2x, c2y] = ext(ts, x2, y2);
  return { d: `M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`, mx: (x1 + x2) / 2, my: (y1 + y2) / 2 };
}

function ArchNode({ id }) {
  const n = NODES[id];
  const P = PLANES[n.plane];
  return (
    <div style={{
      position: 'absolute', left: n.x, top: n.y, width: n.w, height: n.h,
      background: n.ai ? 'var(--k-ai-spruce-06)' : '#fff',
      border: `1px solid ${n.ai ? 'rgba(41,112,122,0.35)' : 'var(--border-1)'}`,
      borderTop: `3px solid ${P.color}`,
      borderRadius: 8, padding: '8px 12px',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2,
      boxShadow: '0 1px 2px rgba(15,23,42,.04)',
    }}>
      <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--fg-1)', lineHeight: 1.25, fontFamily: 'var(--font-sans)' }}>
        {n.title}
        {n.ai ? <span style={{ marginLeft: 6, fontSize: 8.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--k-spruce-70)', background: 'var(--k-ai-spruce-12)', padding: '1px 5px', borderRadius: 3 }}>AI</span> : null}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--fg-muted)', lineHeight: 1.3 }}>{n.sub}</div>
    </div>
  );
}

function ScreenBilArchitecture() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'var(--bg-2)', position: 'relative', fontFamily: 'var(--font-sans)', overflow: 'hidden' }}>
      {/* header strip */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 64, background: '#fff', borderBottom: '1px solid var(--border-1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', zIndex: 3 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <img src="assets/kyndryl-vital-logo.png" alt="Kyndryl Vital" style={{ height: 26, alignSelf: 'center' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 17, color: 'var(--fg-1)' }}>KAF system architecture · BiL AnaCredit</span>
          <span style={{ fontSize: 11, color: 'var(--fg-muted)' }}>runtime rails left to right · Persona OS governance loop below · advisory agents never touch the authoritative path</span>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {Object.keys(PLANES).map((k) => (
            <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10, color: 'var(--fg-muted)' }}>
              <span style={{ width: 10, height: 4, borderRadius: 2, background: PLANES[k].color }}></span>{PLANES[k].label}
            </span>
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', top: 64, left: 0, width: ARCH_W, height: ARCH_H - 64 }}>
        <div style={{ position: 'relative', width: ARCH_W, height: ARCH_H - 64 }}>
          {/* persona OS region */}
          <div style={{ position: 'absolute', left: 296, top: 716, width: 1220, height: 224, border: '1px dashed rgba(91,162,174,0.55)', borderRadius: 12, background: 'rgba(91,162,174,0.04)' }}>
            <span style={{ position: 'absolute', top: -9, left: 16, background: 'var(--bg-2)', padding: '0 8px', fontSize: 9.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3D8590' }}>Persona OS · Horizon 1 + 2 · governs the rails above</span>
          </div>
          {/* agent advisory region note */}
          <div style={{ position: 'absolute', left: 608, top: 396, width: 254, height: 190, border: '1px dashed rgba(41,112,122,0.4)', borderRadius: 12 }}>
            <span style={{ position: 'absolute', bottom: -9, left: 14, background: 'var(--bg-2)', padding: '0 8px', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--k-spruce-70)' }}>advisory only · dashed paths</span>
          </div>

          <svg width={ARCH_W} height={ARCH_H - 64} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <defs>
              <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--k-cool-gray-40)"></path>
              </marker>
            </defs>
            {EDGES.map((e, i) => {
              const { d, mx, my } = edgePath(e);
              const color = e[6] || 'var(--k-cool-gray-40)';
              return (
                <g key={i}>
                  <path d={d} fill="none" stroke={color} strokeWidth="1.5" strokeDasharray={e[5] ? '5 4' : 'none'} markerEnd="url(#arr)" opacity="0.85"></path>
                  {e[4] ? (
                    <g>
                      <rect x={mx - String(e[4]).length * 2.9 - 6} y={my - 9} width={String(e[4]).length * 5.8 + 12} height={16} rx="8" fill="#fff" stroke="var(--border-1)" strokeWidth="1" opacity="0.95"></rect>
                      <text x={mx} y={my + 3} textAnchor="middle" style={{ fontFamily: 'var(--font-mono)', fontSize: 9, fill: 'var(--fg-muted)' }}>{e[4]}</text>
                    </g>
                  ) : null}
                </g>
              );
            })}
          </svg>

          {Object.keys(NODES).map((id) => <ArchNode key={id} id={id} />)}

          {/* gates strip */}
          <div style={{ position: 'absolute', left: 40, top: 620, width: 1454, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-muted)', marginRight: 8 }}>Control gates</span>
            {['1 · Data receipt', '2 · Schema validation', '3 · Deterministic pass', '4 · Exception review', '5 · Attestation', '6 · Submission'].map((g, i) => (
              <React.Fragment key={g}>
                <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--fg-2)', border: '1px solid var(--border-1)', background: '#fff', borderRadius: 99, padding: '3px 10px' }}>{g}</span>
                {i < 5 ? <span style={{ color: 'var(--fg-subtle)', fontSize: 11 }}>→</span> : null}
              </React.Fragment>
            ))}
            <span style={{ marginLeft: 'auto', fontSize: 10, color: 'var(--fg-muted)', fontFamily: 'var(--font-mono)' }}>every gate writes to the Trust Record</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ScreenBilArchitecture });
