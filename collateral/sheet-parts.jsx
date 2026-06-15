// sheet-parts.jsx — shared chrome for all collateral sheets.
// Exports: SheetFrame, Eg, EgPills, BlankCells, LENS, FMT

const LENS = {
  exit:     { label: "Exit capture", color: "#3D3D3D" },
  value:    { label: "Value",        color: "#29707A" },
  data:     { label: "Data",         color: "#3E8AC2" },
  policy:   { label: "Policy",       color: "#8A4FBF" },
  controls: { label: "Controls",     color: "#E68A00" },
  people:   { label: "People",       color: "#5BA2AE" },
  evidence: { label: "Evidence",     color: "#1F5580" },
  close:    { label: "Demo close",   color: "#FF462D" },
  allday:   { label: "Whole day",    color: "#6B7780" },
};

// px sizes — true ISO paper aspect ratios (√2)
const FMT = {
  A0L: { w: 2000, h: 1414, tag: "A0 · 1189×841 mm" },
  A1L: { w: 1600, h: 1131, tag: "A1 · 841×594 mm" },
  A3L: { w: 1100, h: 778,  tag: "A3 · 420×297 mm" },
  A4P: { w: 794,  h: 1123, tag: "A4 · 210×297 mm" },
  A5L: { w: 620,  h: 438,  tag: "A5 · 210×148 mm" },
  A6P: { w: 420,  h: 595,  tag: "A6 · 105×148 mm" },
};

// Sheet wrapper: rule + header + body + footer
// code = board id chip (e.g. "BRD-04") · refs = cross-reference chips in the footer
function SheetFrame({ lens, eyebrow, title, sub, fmt, footNote, titleSize = 26, compact = false, code, refs, children }) {
  const L = LENS[lens];
  const pad = compact ? "14px 18px 12px" : undefined;
  return (
    <div className="sheet">
      <div className="sheet-rule" style={{ background: L.color }}></div>
      <div className="sheet-head" style={compact ? { padding: pad } : undefined}>
        <div className="sh-left">
          <div className="sheet-eyebrow">
            <span className="lens-chip" style={{ background: L.color }}>{L.label}</span>
            <span>{eyebrow}</span>
          </div>
          <div className="sheet-title" style={{ fontSize: titleSize }}>{title}</div>
          {sub ? <div className="sheet-sub" style={{ fontSize: compact ? 11 : 13 }}>{sub}</div> : null}
        </div>
        <div className="sh-right">
          <img className="sheet-logo" src="assets/kyndryl-vital-logo.png" alt="Kyndryl Vital" style={compact ? { height: 16 } : undefined} />
          {code ? <span className="board-code">{code}</span> : null}
        </div>
      </div>
      <div className="sheet-body" style={compact ? { padding: "14px 18px", gap: 12 } : undefined}>{children}</div>
      <div className="sheet-foot" style={compact ? { padding: "8px 18px" } : undefined}>
        <span>AnaCredit Workshop · BiL · Kyndryl Agentic Framework</span>
      </div>
    </div>
  );
}

// Example (pre-seeded) cell content
function Eg({ children, tag = true }) {
  return (
    <span className="eg">{tag ? <span className="eg-tag">EG</span> : null}{children}</span>
  );
}

// Enum pill set; pick marks the example-selected pill
function EgPills({ options, pick }) {
  return (
    <div className="pillset">
      {options.map((o) => (
        <span key={o} className={"pill" + (o === pick ? " eg-pick" : "")}>{o}</span>
      ))}
    </div>
  );
}

// n blank <td>s — co marks them as co-creation input zones (yellow fill)
function BlankCells({ n, co = true }) {
  return (
    <React.Fragment>
      {Array.from({ length: n }).map((_, i) => (
        <td key={i} className={"blank" + (co ? " co-input" : "")}></td>
      ))}
    </React.Fragment>
  );
}

Object.assign(window, { SheetFrame, Eg, EgPills, BlankCells, LENS, FMT });
