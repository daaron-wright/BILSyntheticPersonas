// cohort.jsx — "The cohort" wall: 10 synthetic personas as compact visual
// tiles, used as the pre-work foundation of the co-creation day. The full ten
// stay on the wall as context, but only a featured few are clickable and walked
// in the click-through (keeps the exec story tight).
// Requires PERSONAS (collateral/personas.jsx). Exports: CohortBoard, COHORT_FEATURED

// the personas you can actually talk to in the click-through (exec-steering trio)
const COHORT_FEATURED = ["P-BIL-08", "P-BIL-01", "P-BIL-04"]; // Sponsor · Reg Reporting · CRO

function CohortTile({ p, featured, onOpen }) {
  const loud = (p.context.find((c) => c[0] === "Loudest in") || [])[1] || "";
  return (
    <div onClick={featured ? onOpen : undefined} style={{
      background: "#fff",
      border: featured ? "1px solid var(--k-spruce-30)" : "1px solid var(--border-1)",
      boxShadow: featured ? "0 6px 18px rgba(41,112,122,0.12)" : "0 1px 3px rgba(15,23,42,0.05)",
      borderRadius: 10, padding: "16px 16px 14px", display: "flex", flexDirection: "column", gap: 10,
      minWidth: 0, cursor: featured ? "pointer" : "default",
      opacity: featured ? 1 : 0.62, transition: "opacity 0.15s ease",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {p.photo ? (
          <img src={p.photo} alt={p.name} style={{
            width: 56, height: 56, borderRadius: 10, flex: "0 0 auto",
            objectFit: "cover", display: "block",
            filter: featured ? "none" : "grayscale(0.55)",
          }} />
        ) : (
          <span style={{
            width: 56, height: 56, borderRadius: 10, flex: "0 0 auto",
            background: "linear-gradient(135deg, #29707A, #5BA2AE)", color: "#fff",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 19,
          }}>{p.initials}</span>
        )}
        <span style={{ minWidth: 0 }}>
          <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 15.5, color: "var(--fg-1)", lineHeight: 1.1 }}>{p.name}</span>
          <span style={{ display: "block", fontSize: 11, color: "var(--fg-muted)", marginTop: 2 }}>{p.role}</span>
        </span>
      </div>
      <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 13.5, lineHeight: 1.35, color: "var(--fg-1)", flex: 1, textWrap: "pretty" }}>
        &ldquo;{p.quote}&rdquo;
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, borderTop: "1px solid var(--bg-2)", paddingTop: 8 }}>
        <span style={{ fontSize: 10, color: "var(--k-spruce-70)", fontWeight: 600 }}>{loud}</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <code style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--fg-subtle)", background: "transparent", padding: 0 }}>{p.id}</code>
          {featured ? (
            <span style={{ fontSize: 10, fontWeight: 600, color: "#fff", background: "var(--k-spruce-60)", borderRadius: 999, padding: "3px 10px", whiteSpace: "nowrap" }}>Talk →</span>
          ) : (
            <span style={{ fontSize: 9.5, fontWeight: 600, color: "var(--fg-muted)", background: "var(--bg-2)", border: "1px solid var(--border-1)", borderRadius: 999, padding: "3px 9px", whiteSpace: "nowrap" }}>Pre-work voice</span>
          )}
        </span>
      </div>
    </div>
  );
}

function CohortBoard({ talkBeat }) {
  // featured personas, resolved to their PERSONAS index, in walk order
  const featuredIdx = React.useMemo(
    () => COHORT_FEATURED.map((id) => PERSONAS.findIndex((p) => p.id === id)).filter((i) => i >= 0),
    []
  );
  const isFeatured = (i) => featuredIdx.includes(i);

  // ?talk=P-BIL-XX deep-links straight into a persona conversation
  const [open, setOpen] = React.useState(() => {
    try {
      const t = new URLSearchParams(location.search).get("talk");
      if (t) {
        const i = PERSONAS.findIndex((p) => p.id === t);
        if (i >= 0) return i;
      }
    } catch (e) {}
    return null;
  });

  // beat-driven host (walkthrough): 0 closes · 1..n opens the n-th featured persona.
  React.useEffect(() => {
    if (talkBeat === undefined || talkBeat === null) return;
    const k = talkBeat - 1; // 0-based featured index
    setOpen(k >= 0 && k < featuredIdx.length ? featuredIdx[k] : null);
  }, [talkBeat]);

  const Talk = window.ScreenBilTalk;
  const S = 0.72; // 1440×900 talk stage scaled into the 2000×780 board
  // cycle within the featured set
  const cycle = (d) => setOpen((o) => {
    const pos = featuredIdx.indexOf(o);
    const base = pos >= 0 ? pos : 0;
    return featuredIdx[(base + d + featuredIdx.length) % featuredIdx.length];
  });
  const pos = open !== null ? featuredIdx.indexOf(open) : -1;

  return (
    <div style={{
      width: "100%", height: "100%", background: "var(--bg-2)", fontFamily: "var(--font-sans)",
      display: "flex", flexDirection: "column", padding: "40px 52px 36px", boxSizing: "border-box", gap: 24,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg-muted)" }}>Pre-work · synthetic cohort · composites, not real interviews</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 36, color: "var(--fg-1)", letterSpacing: "-0.015em", marginTop: 6 }}>
            Who's already in the room
          </div>
          <div style={{ fontSize: 14, color: "var(--fg-muted)", marginTop: 8, maxWidth: "66ch", lineHeight: 1.5 }}>
            All ten synthetic voices shaped the draft boards and stay pinned where they'll push back hardest. For this walkthrough, <strong style={{ color: "var(--fg-1)" }}>three are open to talk to live</strong> — the sponsor, the reporting lead, and the risk officer.
          </div>
        </div>
        <img src="assets/kyndryl-vital-logo.png" alt="Kyndryl Vital" style={{ height: 32, marginBottom: 6 }} />
      </div>
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridTemplateRows: "1fr 1fr", gap: 16, minHeight: 0 }}>
        {PERSONAS.map((p, i) => <CohortTile key={p.id} p={p} featured={isFeatured(i)} onOpen={() => setOpen(i)} />)}
      </div>

      {/* expandable talk-to-persona overlay */}
      {open !== null && Talk ? (
        <div style={{ position: "absolute", inset: 0, zIndex: 30, background: "rgba(8,10,12,0.85)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 1440 * S, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2px 10px" }}>
            <span style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 17 }}>
              Talk to persona — {PERSONAS[open].name}
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,255,255,0.55)", marginLeft: 10 }}>{PERSONAS[open].id} · synthetic{pos >= 0 ? ` · ${pos + 1} / ${featuredIdx.length}` : ""}</span>
            </span>
            <span style={{ display: "flex", gap: 8 }}>
              <button onClick={() => cycle(-1)} style={cohortBtn}>← Prev</button>
              <button onClick={() => cycle(1)} style={cohortBtn}>Next →</button>
              <button onClick={() => setOpen(null)} style={{ ...cohortBtn, background: "var(--k-warm-red-50)", border: "1px solid var(--k-warm-red-50)" }}>Close ✕</button>
            </span>
          </div>
          <div style={{ width: 1440 * S, height: 900 * S, borderRadius: 10, overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.5)", flex: "0 0 auto" }}>
            <div style={{ width: 1440, height: 900, transform: `scale(${S})`, transformOrigin: "top left" }}>
              <Talk personaId={PERSONAS[open].id} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

const cohortBtn = {
  padding: "6px 13px", borderRadius: 6, background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.25)", color: "#fff", fontSize: 12, fontWeight: 500,
  fontFamily: "var(--font-sans)", cursor: "pointer",
};

Object.assign(window, { CohortBoard, COHORT_FEATURED });
