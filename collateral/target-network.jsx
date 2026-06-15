// target-network.jsx — "Current → Agentic AI target state" as a KAF node
// network (same visual grammar as the KAF architecture graph: plane-colored
// nodes, bezier edges, dashed advisory paths, region frames).
// Exports: TargetStateNetwork

const TN_W = 2000, TN_H = 1060, TN_HEAD = 64;

const TN_PLANES = {
  source: { label: "Sources", color: "#6B7780" },
  relay: { label: "Manual relay", color: "#9AA4AB" },
  ingest: { label: "Ingestion", color: "#29707A" },
  policy: { label: "Policy plane · OPA", color: "#8A4FBF" },
  agent: { label: "Agentic AI", color: "#FF462D" },
  human: { label: "Human plane", color: "#5BA2AE" },
  output: { label: "Evidence", color: "#1F5580" },
  external: { label: "External", color: "#3D3D3D" },
};

const TN_NODES = {
  // ---- current (top region) ----
  c_branch: { x: 60, y: 76, w: 180, h: 48, plane: "source", title: "Branch / subsidiary" },
  c_t24: { x: 60, y: 140, w: 180, h: 48, plane: "source", title: "T24" },
  c_var: { x: 60, y: 204, w: 180, h: 48, plane: "source", title: "… various sources" },
  c_rfo: { x: 360, y: 124, w: 190, h: 62, plane: "relay", title: "RFO Master", sub: "manual merge decisions" },
  c_stage: { x: 670, y: 124, w: 190, h: 62, plane: "relay", title: "Staging AnaCredit", sub: "mapping sheets · ~30 min" },
  c_invoke: { x: 980, y: 124, w: 180, h: 62, plane: "relay", title: "INVOKE", sub: "manual upload · packaging" },
  c_sofie: { x: 1700, y: 124, w: 200, h: 62, plane: "external", title: "Regulator · SOFIE", sub: "V1.0 report · ~1 hr" },
  c_team: { x: 1310, y: 236, w: 210, h: 56, plane: "relay", title: "BiL AnaCredit team", sub: "case-by-case corrections" },

  // ---- target (bottom region) ----
  t_branch: { x: 60, y: 480, w: 180, h: 48, plane: "source", title: "Branch / subsidiary" },
  t_t24: { x: 60, y: 544, w: 180, h: 48, plane: "source", title: "T24" },
  t_var: { x: 60, y: 608, w: 180, h: 48, plane: "source", title: "… various sources" },
  t_rfo: { x: 360, y: 528, w: 190, h: 64, plane: "ingest", title: "RFO Master", sub: "contracted ingestion · SNP-id" },
  t_opa: { x: 690, y: 426, w: 260, h: 56, plane: "policy", title: "OPA · PaC runtime", sub: "policy set v0.9 · generated from the schema" },
  t_agent: { x: 670, y: 536, w: 300, h: 92, plane: "agent", title: "Agentic AI system", sub: "validate · triage · suggest · evidence", accent: true },
  t_team: { x: 700, y: 712, w: 240, h: 60, plane: "human", title: "BiL AnaCredit team", sub: "approve · override · attest" },
  t_evidence: { x: 1310, y: 712, w: 230, h: 60, plane: "output", title: "Trust Record", sub: "replayable evidence · per run" },
  t_sofie: { x: 1700, y: 536, w: 200, h: 64, plane: "external", title: "Regulator · SOFIE", sub: "no manual corrections" },
};

function tnAnchor(id, side) {
  const n = TN_NODES[id];
  if (side === "r") return [n.x + n.w, n.y + n.h / 2];
  if (side === "l") return [n.x, n.y + n.h / 2];
  if (side === "t") return [n.x + n.w / 2, n.y];
  if (side === "b") return [n.x + n.w / 2, n.y + n.h];
  return [n.x + n.w / 2, n.y + n.h / 2];
}

// [from, fromSide, to, toSide, label, dashed, color]
const TN_EDGES = [
  // current
  ["c_branch", "r", "c_rfo", "l"],
  ["c_t24", "r", "c_rfo", "l"],
  ["c_var", "r", "c_rfo", "l"],
  ["c_rfo", "r", "c_stage", "l", "rules + mappings"],
  ["c_stage", "r", "c_invoke", "l", "manual upload"],
  ["c_invoke", "r", "c_sofie", "l", "report sent"],
  ["c_sofie", "b", "c_team", "r", "corrections ~1–2 wks", true],
  ["c_team", "l", "c_var", "r", "fixes case by case", true],
  // target
  ["t_branch", "r", "t_rfo", "l"],
  ["t_t24", "r", "t_rfo", "l"],
  ["t_var", "r", "t_rfo", "l"],
  ["t_rfo", "r", "t_agent", "l", "canonical payload"],
  ["t_opa", "b", "t_agent", "t", "deterministic decisions", true, "#8A4FBF"],
  ["t_agent", "r", "t_sofie", "l", "V1.0 report · few hours"],
  ["t_agent", "b", "t_team", "t", "exceptions + suggestions", false, "#5BA2AE"],
  ["t_team", "r", "t_agent", "r", "approvals + learning ⟲", true, "#5BA2AE"],
  ["t_team", "l", "t_var", "b", "structured feedback to source owners", true, "#5BA2AE"],
  ["t_agent", "b", "t_evidence", "t", "every gate writes", false, "#1F5580"],
  ["t_team", "r", "t_evidence", "l", null, false, "#1F5580"],
  ["t_sofie", "b", "t_evidence", "r", "feedback parsed + linked", true],
];

function tnEdgePath(e) {
  const [from, fs, to, ts] = e;
  const [x1, y1] = tnAnchor(from, fs);
  const [x2, y2] = tnAnchor(to, ts);
  const ext = (s, x, y) => s === "r" ? [x + 64, y] : s === "l" ? [x - 64, y] : s === "t" ? [x, y - 52] : [x, y + 52];
  const [c1x, c1y] = ext(fs, x1, y1);
  const [c2x, c2y] = ext(ts, x2, y2);
  return { d: `M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`, mx: (x1 + x2) / 2, my: (y1 + y2) / 2 };
}

function TNNode({ id }) {
  const n = TN_NODES[id];
  const P = TN_PLANES[n.plane];
  return (
    <div style={{
      position: "absolute", left: n.x, top: n.y, width: n.w, height: n.h,
      background: n.accent ? "var(--k-warm-red-50)" : "#fff",
      border: n.accent ? "none" : "1px solid var(--border-1)",
      borderTop: n.accent ? "none" : `3px solid ${P.color}`,
      borderRadius: 8, padding: "8px 12px", boxSizing: "border-box",
      display: "flex", flexDirection: "column", justifyContent: "center", gap: 2,
      boxShadow: n.accent ? "0 10px 28px rgba(255,70,45,0.35)" : "0 1px 2px rgba(15,23,42,.05)",
      fontFamily: "var(--font-sans)",
    }}>
      <div style={{ fontSize: n.accent ? 16 : 12.5, fontWeight: 500, color: n.accent ? "#fff" : "var(--fg-1)", lineHeight: 1.25, fontFamily: n.accent ? "var(--font-display)" : "var(--font-sans)" }}>
        {n.title}
        {n.accent ? <span style={{ marginLeft: 8, fontSize: 8.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff", background: "rgba(255,255,255,0.22)", padding: "2px 6px", borderRadius: 3, verticalAlign: 2 }}>AI</span> : null}
      </div>
      {n.sub ? <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: n.accent ? "rgba(255,255,255,0.85)" : "var(--fg-muted)", lineHeight: 1.3 }}>{n.sub}</div> : null}
    </div>
  );
}

function TargetStateNetwork() {
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg-2)", position: "relative", fontFamily: "var(--font-sans)", overflow: "hidden" }}>
      {/* header */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: TN_HEAD, background: "#fff", borderBottom: "1px solid var(--border-1)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", zIndex: 3 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src="assets/kyndryl-vital-logo.png" alt="Kyndryl Vital" style={{ height: 26 }} />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 17, color: "var(--fg-1)" }}>AnaCredit process in BiL · current → target</span>
          <span style={{ fontSize: 11, color: "var(--fg-muted)" }}>dashed = advisory / feedback paths</span>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {Object.keys(TN_PLANES).map((k) => (
            <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10, color: "var(--fg-muted)" }}>
              <span style={{ width: 10, height: 4, borderRadius: 2, background: TN_PLANES[k].color }}></span>{TN_PLANES[k].label}
            </span>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", top: TN_HEAD, left: 0, width: TN_W, height: TN_H - TN_HEAD }}>
        {/* region frames */}
        <div style={{ position: "absolute", left: 28, top: 36, width: TN_W - 56, height: 296, border: "1.5px dashed var(--border-2)", borderRadius: 14, background: "rgba(255,255,255,0.45)" }}>
          <span style={{ position: "absolute", top: -11, left: 18, background: "var(--bg-2)", padding: "0 10px", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-muted)" }}>
            Current process — manual relay · e2e ~1–2 weeks
          </span>
        </div>
        <div style={{ position: "absolute", left: 28, top: 396, width: TN_W - 56, height: 478, border: "2px solid var(--k-warm-red-50)", borderRadius: 14, background: "#fff" }}>
          <span style={{ position: "absolute", top: -13, left: 18, background: "var(--k-warm-red-50)", color: "#fff", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 999 }}>
            Envisioned target state — Agentic AI process · e2e ~few hours
          </span>
          <span style={{ position: "absolute", top: -12, right: 18, display: "flex", gap: 6 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--k-warm-red-50)", background: "#fff", border: "1px solid rgba(255,70,45,0.4)", borderRadius: 999, padding: "3px 10px" }}>human in the loop</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-muted)", background: "#fff", border: "1px solid var(--border-2)", borderRadius: 999, padding: "3px 10px" }}>no manual corrections</span>
          </span>
        </div>

        {/* bridge note */}
        <div style={{ position: "absolute", left: 48, top: 348, display: "flex", alignItems: "center", gap: 10, fontSize: 12.5, color: "var(--fg-2)", zIndex: 2 }}>
          <span style={{ fontSize: 16, color: "var(--k-warm-red-50)" }}>↓</span>
          <span><strong style={{ color: "var(--fg-1)" }}>The four co-creation activities define the orange node</strong> — metrics, lineage, rules, gates — captured as the PaC schema and generated into the policy plane.</span>
        </div>

        {/* edges */}
        <svg width={TN_W} height={TN_H - TN_HEAD} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <defs>
            <marker id="tn-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--k-cool-gray-40)"></path>
            </marker>
          </defs>
          {TN_EDGES.map((e, i) => {
            const { d, mx, my } = tnEdgePath(e);
            const color = e[6] || "var(--k-cool-gray-40)";
            return (
              <g key={i}>
                <path d={d} fill="none" stroke={color} strokeWidth="1.6" strokeDasharray={e[5] ? "5 4" : "none"} markerEnd="url(#tn-arr)" opacity="0.9"></path>
                {e[4] ? (
                  <g>
                    <rect x={mx - String(e[4]).length * 2.95 - 7} y={my - 9} width={String(e[4]).length * 5.9 + 14} height={17} rx="8.5" fill="#fff" stroke="var(--border-1)" strokeWidth="1" opacity="0.96"></rect>
                    <text x={mx} y={my + 3.5} textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, fill: "var(--fg-muted)" }}>{e[4]}</text>
                  </g>
                ) : null}
              </g>
            );
          })}
        </svg>

        {/* nodes */}
        {Object.keys(TN_NODES).map((id) => <TNNode key={id} id={id} />)}

        {/* automation points strip inside target region */}
        <div style={{ position: "absolute", left: 60, top: 812, width: TN_W - 140, display: "flex", gap: 22, fontSize: 11.5, color: "var(--fg-muted)" }}>
          <span><strong style={{ color: "var(--fg-1)" }}>1</strong> · all ingestion automated</span>
          <span><strong style={{ color: "var(--fg-1)" }}>2</strong> · deterministic checks enforced by OPA from the PaC schema</span>
          <span><strong style={{ color: "var(--fg-1)" }}>3</strong> · fixes suggested for every error — humans decide</span>
          <span><strong style={{ color: "var(--fg-1)" }}>4</strong> · structured feedback to downstream sources</span>
          <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10 }}>wireframes: section 06 · WF-01…04</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TargetStateNetwork });
