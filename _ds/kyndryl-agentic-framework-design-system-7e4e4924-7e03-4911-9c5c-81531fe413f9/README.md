# Kyndryl CMDB Design System

A design system derived from the **Kyndryl Agentic Framework — CMDB Data Quality** Next.js workspace. It captures the tokens, composite patterns, and UX themes the app uses to surface CMDB trust posture, triage stale/orphaned CIs, drive reconciliation and correction-request workflows, and investigate business impact through a knowledge graph.

The system is Kyndryl-branded and aligned to **Shidoka (Bridge)** — Kyndryl's foundation design system. Warm Red `#FF462D` is the brand accent; **Spruce** `#29707A` is the interactive workhorse (links, primary buttons, focus rings, selected state). It is intentionally calm, dense, and evidence-first: every number has a reason, every recommendation has provenance, every action shows its blast radius before it runs.

---

## Sources

This DS is compiled from two inputs:

**1 · Shidoka foundation (brand authority, primary source for tokens)**
- `@kyndryl-design-system/shidoka-foundation` — palette, type, space, radii, semantic aliases (`$k-color-*`, `$k-text-*`, `$k-background-*`, `Opacity.AI.*`)
- `@kyndryl-design-system/shidoka-icons` — iconography (Kyndryl house set)
- Brand accent: **Warm Red 50** `#FF462D`
- Interactive (primary button, link, focus): **Spruce 60** `#29707A`
- Three gray ramps — **Dark Stone** (default UI), **Cool Gray** (dashboards/charts), **Warm Gray** (marketing surfaces)
- Type stack — **TWK Everett** (display, 20px+), **Roboto** (body 14–18px, dense UI), **Geist Mono** (code/IDs)
- RAG status taxonomy — Critical / Error / Warning / Success / Information, stops 10/20/100/110

**2 · CMDB Data Quality app (applied patterns & composites)**
- **Repo:** `daaron-wright/KyndrylAgenticFramework_cmdb-data-quality` (branch: `Template`)
- **Logo:** `public/kyndryl-logo.png` → `assets/kyndryl-logo.png`
- **Composite patterns** (archetypes A–E from the brief):
  - A. Posture & confidence → `components/cdp/dashboard/kpi-grid.tsx`, `kpi-warning-actions.tsx`, `access-snapshot-cards.tsx` (CMDBTrustOverviewCard)
  - B. Findings & triage → `access-snapshot-cards.tsx`, `components/cdp/chat/signals-panel.tsx`
  - C. Recommendation & action → `components/cdp/chat/chat-interface.tsx`, `scenario-projection.tsx`, `snapshot-card.tsx` (ExecutionConfirmationCard)
  - D. Investigation & graph → `components/cdp/investigation/cmdb-knowledge-graph.tsx`, `cmdb-knowledge-graph-visuals.tsx`
  - E. Conversational & narrative → `components/cdp/chat/chat-message.tsx`, `snapshot-card.tsx`
- **Shell & nav:** `components/cdp/layout/app-shell.tsx`

The design-system tab in this project previews each token cluster and the full CMDB workspace as a clickable UI kit at `ui_kits/cmdb/index.html`.

### Token naming (Shidoka-native)

Tokens are exposed under two parallel names so both Shidoka-native and preview-markup consumers can use them:

| Shidoka-native | Short alias | What it is |
|---|---|---|
| `--k-warm-red-50` | `--kyn-accent` | Brand accent |
| `--k-spruce-60` | `--kyn-primary`, `--primary` | Interactive primary |
| `--k-dark-stone-90` | `--fg-1` | Body heading / KPI number |
| `--k-cool-gray-10` | `--bg-2` | Page/surface tint |
| `--k-status-error-100` | `--sev-critical-solid` | Error solid |
| `--k-space-1-x` | `--space-4` | 16px step |
| `--k-radius-md` | `--radius` | 8px card radius |
| `--k-ai-spruce-12` | — | AI-surface tint |

---

## Index

- `README.md` — this file
- `colors_and_type.css` — all tokens: palette, semantic, status taxonomy, type scale, radii, shadows, motion
- `SKILL.md` — cross-compatible skill definition for use with Claude Code
- `assets/` — logos and icon reference
- `fonts/` — TWK Everett brand sans (OTF + web TTF)
- `preview/` — cards that populate the Design System tab (grouped Type, Colors, Spacing, Primitives, Components, Templates, States, Brand)
- `ui_kits/cmdb/` — clickable UI kit recreating Dashboard, Stale-CI triage, Recommendation drawer, Investigation graph, Correction-request review
- `ui_kits/shidoka-components/` — Shidoka component reference (buttons, inputs, dropdown, badges, cards, table, accordion, notifications, modal/drawer, progress/loaders, tooltips, AI primitives)
- `ui_kits/shidoka-shell/` — Shidoka shell demo (header + workspace switcher + apps flyout + collapsible local nav + footer) with Dashboard and Triage screens
- `ui_kits/shidoka-charts/` — Shidoka charts kit: bar (grouped / stacked / 100%-stacked / horizontal), line & area, scatter & bubble, doughnut & pie, radar & polar, meter-gauges, sankey, tree/dendrogram, matrix/heatmap, choropleth, boxplot — all on Shidoka palettes (categorical, sequential01, divergent01, RAG)

---

## Five-layer architecture

The system is structured as **foundations → primitives → composites → templates → states**. Every composite exists once in Figma / React and is reused.

**Layer 1 · Foundations (tokens)** — all in `colors_and_type.css`: color (brand, surface, text, semantic, severity, chart, workflow-status), type (display/h1–h4/body/body-sm/caption/code + `font-variant-numeric: tabular-nums` for numbers), space (4→64), radius (sm/md/lg), elevation (flat→overlay→popover), motion (fast/base/slow + reduce-motion fallback), iconography (one library at 16/20/24, severity icons paired with labels).

**Layer 2 · Primitives** — shadcn/ui layer (~30 curated), plus **semantic primitives** with opinionated props: `SeverityPill`, `ConfidenceBadge`, `FreshnessBadge`, `DeltaIndicator`, `StatusBadge`, `SourceAttribution`. Preview cards under the Primitives group.

### Agentic primitives — every badge is a control point

Primitives in this system are not passive chrome. Each one represents a decision the agent already made, and carries an inline affordance that lets the user push back on that decision without navigating away. The primitive **is** the smallest unit of human-in-the-loop control.

**Visual contract.** Agentic primitives carry a dotted underline on the primary value and a trailing `•••` indicator that fades in on hover / focus. On click they open a popover anchored to the badge with 2–4 targeted actions.

**Action vocabulary (per primitive).**
- `ConfidenceBadge` — **override**, **ask for more evidence**, **snooze**, **teach the agent**
- `FreshnessBadge` — **force refresh**, **change stale threshold**, **notify owner**, **pin as trusted**
- `DeltaIndicator` — **explain this change**, **set alert threshold**, **compare periods**, **teach what caused this**
- `StatusBadge` — **advance / approve**, **reassign reviewer**, **add note**, **reject / rollback**
- `SourceAttribution` — **open source**, **view provenance**, **request re-derivation**, **dispute**

**Reversibility model.** Non-destructive actions apply instantly with a passive confirmation toast. Destructive actions — anything that changes future agent behaviour, bypasses a safety check, or writes to the audit trail — require an in-popover confirm step with explicit language about the blast radius.

**Feedback loop — "Learned from you" inbox.** Every override is treated as a teaching signal and written to an inbox the user owns (`preview/agentic-inbox.html`). Each row shows: the action taken, what it was derived from, and the blast radius the agent applied — *"applied to 147 similar items · avg confidence −20.18"*. This closes the loop: the user sees their corrections compound into systemic change, rather than disappearing into opaque model updates.

**API convention.** All agentic primitives accept `value`, `onOverride`, `onTeach`, `onDispute`, and `role` props. The popover surface is handled by `colors_and_type.css` (`.agentic` / `.agentic-pop`) and the shared controller `preview/agentic.js`; individual primitives only declare their actions. A `role=readonly` prop downgrades the primitive to a passive badge with no chevron — same visual token, no affordance.

### Agentic interaction states — the live surface

The agentic primitives above govern the *post-hoc* surface (override a decision after it landed). Six **interaction-state primitives** govern the *live* surface — what the agent is doing in the moment. They are first-class members of the system and are demonstrated in `preview/agentic-states.html` (canonical reference) and `preview/agentic-flow.html` (full composed live run).

| Primitive | When it renders | Surface | Blocking? |
|---|---|---|---|
| **AgentStatusBar** | `run.started` / `thinking` / `streaming` / `paused` / `done` | Top of any agentic surface (sticky) | No |
| **StepTimeline** | `step.started` / `step.completed` | Right rail or inline | No |
| **ToolCallCard** | `tool.requested` (gate) / `tool.executing` / `tool.completed` | Inline in stream | Sometimes |
| **HumanInputRequest** | `input.required` | Inline in stream (amber, breaks AI gradient on purpose) | **Yes** |
| **HandoffCard** | `handoff.dispatched` / `handoff.received` (agent→agent or agent→human) | Inline in stream | Sometimes (→ human) |
| **StateDeltaToast** | `state.delta` (agent updated a value visible elsewhere) | Bottom-left ambient | No |

**Interaction model.** Every state surfaces user agency in-place: pause/resume the run from the AgentStatusBar; edit tool args (dashed underline) before approving in a ToolCallCard; pick a named tie-break in a HumanInputRequest; approve once / approve all from any active StepTimeline row; branch a parallel run from any AgentStatusBar; inject a correction mid-stream. The session-level **step-through mode** (toggle on the AgentStatusBar) governs whether non-destructive tool calls are gated or run silently — destructive tools (`graph.write`, `cmdb.write`, `incident.create`) **always** gate regardless.

**Visual contract.** Every live primitive uses the AI gradient border (`spruce-60 ↔ warm-red-50`, 28% α) on white — same vocabulary as `ChatMessage` and `SnapshotCard`. The single exception is `HumanInputRequest`, which switches to an amber surface so the user's eye catches it on a long scroll. Activity is signalled by a single moving element (pulsing dot, streaming caret, animated timeline marker) — no spinners, no progress bars except inside StepTimeline rows.

**Composition with retrofit components.** `composite-chat.html` and `ai-modal-chat.html` now host an AgentStatusBar above the message stream and inline ToolCallCards between messages; `components-execution.html` ships both an *in-flight* (live, with row-level Approve once / Approve all controls) and *completed* variant of the timeline. The audit trail still flows into the **Learned from you** inbox — the live primitives are ephemeral, the inbox is permanent.

**Layer 3 · Composites** — the centre of gravity:
- Posture: `TrustScoreGauge`, `KpiTile`, `KpiGrid`, `StatusBannerCard`
- Triage: `FindingCard`, `InspectorDrawer`, `SignalsPanel`, `ReconciliationDashboardCard`
- Action: `RecommendationCard`, `ScenarioProjectionCard`, `ExecutionTimeline`, `ExecutiveSummaryCard`
- Graph: `GraphCanvas`, `GraphControlRail`, `GraphInspector`, `ImpactRollup`
- Chat: `ChatMessage`, `SnapshotCard`, `HighlightLink`
- Workflow: `ReviewQueueTemplate` (Access Review / Change / Correction)

**Layer 4 · Templates** — 5 page shells plus the `AppShell`: `DashboardTemplate`, `TriageTemplate`, `InvestigationTemplate`, `ReviewQueueTemplate`, `ConversationTemplate`. New pages are composed, not designed.

**Layer 5 · States matrix (non-negotiable)** — every composite ships: `loading` (skeleton matching final shape, not a spinner), `empty` (explanatory + next-step CTA), `filtered-empty` (offers Clear filters), `error` (human cause + retry + escalate), `stale` (FreshnessBadge → warning + banner when data is older than threshold), `unauthorized` (what the user can see + how to request access), `executing` (disabled CTAs + inline progress), `success-after-action` (ExecutionTimeline or toast with undo where possible). Rendered together in `preview/states-matrix.html`.

**Permission-aware API convention.** Every action-bearing composite accepts `role` or `capabilities` props; the DS enforces the `full → review → readonly` fallback chain automatically.

---

## Content Fundamentals

**Voice.** Operational, precise, quietly authoritative. Never exclamation-marked, never cheerful. The copy reads like a senior SRE describing what the system is actually doing — not marketing, not cheerleading, not "AI magic".

**Person.** Mostly third person, present tense, describing state: *"62% of CIs verified in the last 30 days"*, *"3 orphaned records were detected overnight"*. Second person ("you") is reserved for direct instructions inside drawers and prompts: *"Review and approve"*, *"Investigate this CI"*. First person ("I", "we") is avoided — the agent speaks **about** its work, not **as** a character, except in explainability panels where "Agent is now monitoring…" is the one sanctioned voice.

**Casing.**
- `Sentence case` for titles, card headings, buttons, and nav ("Change requests", not "Change Requests" and never "CHANGE REQUESTS").
- `UPPERCASE` reserved for eyebrows / kickers — `EXECUTION PIPELINE`, `OPTIMISATION`, `RECONCILIATION TRIGGERS` — always with `letter-spacing: 0.14em` and `font-weight: 700`.
- Severity pills (`CRITICAL`, `HIGH`, `MEDIUM`, `LOW`) are uppercase micro-labels; status chips (`Healthy`, `Degraded`, `Impacted`, `Unknown`) are sentence case.
- Acronyms kept literal: `CMDB`, `CI`, `BU`, `RBAC`, `KPI`. Never "cmdb".

**Numbers & units.** Always specific. `62%` not "most". `12-week trend` not "recent". Deltas are prefixed (`+3.4% WoW`, `−180 stale CIs`). Timestamps follow `dd-mm-yyyy HH:mm`. Ticket IDs follow `bINC#######`. Priorities use the canonical `1- Immediate / 2- Urgent / 3- High / 4- Medium / 5- Low` format.

**Tone examples (lifted from the repo):**
- Neutral/confident: *"Severity rolls up from active impacted nodes."*
- Instructional: *"Adjust the filters or select a node or edge to see rolled-up process severity."*
- Agent attribution: *"Powered by agentic AI"*, *"Agent is now monitoring…"*
- Warning, non-alarmist: *"Investigate with AI"* (not "⚠️ URGENT ACTION REQUIRED")

**Emoji.** Not used. Ever. Replaced by lucide / carbon line icons or status dots. The brief makes this explicit.

**Anti-patterns.** No exclamation points. No "AI-powered ✨". No "Oops!", no "Let's get started!". No ALL-CAPS shouting inside card bodies. No invented confidence percentages without a reason paragraph attached.

---

## Visual Foundations

**Colour.** Two brand hues do different jobs: **Warm Red 50** `#FF462D` is the accent — logo, brand moments, destructive attention. **Spruce 60** `#29707A` is the interactive workhorse — primary buttons, links, selected state, focus rings, and the primary data-viz series. Kyndryl **blue** is demoted to a data-viz slot, not a primary surface. The working neutral is **Cool Gray** (dashboard chrome, tables) with **Dark Stone** for text and borders; **Warm Gray** is reserved for marketing/brand surfaces only. Status colours follow Shidoka RAG — **Critical / Error / Warning / Success / Information**, stops 10 (bg) · 20 (border) · 100 (solid) · 110 (dark fg). Severity is **always** paired with an icon or label, never conveyed by colour alone. AI-surface tints (`--k-ai-spruce-*`, `--k-ai-warm-red-*`) are the sanctioned way to mark agent-generated content.

**Type.** Shidoka pairs two families:
- **TWK Everett** — Kyndryl's corporate sans, bundled in `fonts/`. Used for **display type 20px and above**: page titles, section headings, card titles, KPI numbers. Weights 300–900 available; most UI uses 400/500.
- **Roboto** — the body workhorse, **14–18px**, dense UI, table cells, form labels, paragraph copy. Weights 300/400/500/700.
- **Geist Mono** — code, ticket IDs, CI names, JSON, timestamps. Replaces the previous IBM Plex Mono.
- **Noto Kufi / Noto Naskh Arabic** — RTL first-class, not retrofit.

The `--font-display` and `--font-sans` tokens are kept distinct so consumers can pick either explicitly; heading rules in this stylesheet already route to `--font-display` automatically.

**Spacing.** 4-pt base, standard scale `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48`. Cards use `p-4` or `p-6`; KPI tiles `px-6 py-4`. Page gutter is `p-6`. Data tables use `py-2.5` row height with `px-3` cell padding — dense, Jira-adjacent, not Salesforce-sparse.

**Backgrounds.** Almost exclusively flat white and `slate-50`. **No gradients** except the rare brand moment (the login screen and the trust-score gauge gap-fill). No full-bleed photography. No hand-drawn illustrations. No repeating textures. Section headers use `bg-slate-50/70` as a tint, not an image. This is a tool for operators; the surface stays quiet so data can speak.

**Animation.** Restrained. Accordion/drawer slide-in uses `duration-200` with `cubic-bezier(0.4, 0, 0.2, 1)`. Loading spinners (`animate-spin`), message fade-in (`fadeIn 0.5s ease-out`), and title cross-fade (`titleChange 0.5s`) are the only motion patterns. No bounces, no elastic easing, no Lottie. Motion is feedback, not decoration.

**Hover.** `bg-secondary/50` (slate-100 at 50%) for nav items, `bg-accent` for buttons, `bg-muted/40` for list rows. Primary buttons darken to `primary/90`. Links underline on hover. Icons stay the same colour — the background moves, not the glyph.

**Press / active.** Active nav item is `bg-secondary` with full colour plus `strokeWidth 2.5` on the icon (idle is `strokeWidth 2`) — **weight, not colour, carries active state**. No shrink-on-press, no ripple.

**Borders.** Everywhere. `1px solid var(--border-1)` is the default, `slate-200` in hex. Cards are border-first, shadow-almost-never. Internal dividers on cards use `border-slate-100`. Severity-tinted borders (rose-200, amber-200, emerald-200) on signal cards match their severity bg.

**Shadows.** Rare and subtle. `shadow-sm` on cards, `shadow-2xl` only on the DAG side-panel and drawers. The UI leans on **borders + background tint** to separate layers, not elevation. This keeps the screen calm even when 6 cards are stacked.

**Corner radii.** Shidoka is restrained: **2 / 4 / 8 / 16**. `--radius: 8px` is the card default; inputs, buttons, chips, and severity-border cards use `4px`; dialogs/drawers step up to `16px`; status dots, avatars, and severity pills are fully pill-shaped. Nothing is sharp-cornered except data-table cells.

**Transparency & blur.** Used sparingly: `bg-slate-50/70` tints on section headers, `backdrop-blur-[1px]` behind the explainability drawer, and `bg-black/20` scrim under modals. Never on primary content.

**Layout rules.** Fixed left sidebar (`w-64`, collapsible to `w-0`), fixed top header (`h-16`), resizable right panel (300–900px) for the Agentic Workflow Pipeline DAG, scrollable main region. Content is grid-first: `grid gap-4 grid-cols-2 xl:grid-cols-3` for KPI tiles, `xl:grid-cols-[1.1fr_0.9fr]` for chart pairs.

**Imagery.** There essentially isn't any — no stock photos, no hero images. The only "imagery" is the Kyndryl wordmark, lucide/carbon icons, and the knowledge-graph canvas itself. When imagery *is* needed (e.g. a login splash), use a flat brand-blue field with the wordmark centred.

**Density.** High. This is a triage surface — every pixel earns its keep. Type can go as small as 10–11px for meta/eyebrow labels; KPI numbers jump to 24–28px to anchor the scan.

---

## Iconography

The system uses the **Shidoka Icon Library** (`@kyndryl-design-system/shidoka-icons`) as the single source of truth. All UI icons — navigation, status, actions, agentic affordances, metadata — come from this set. No lucide, no Carbon, no heroicons, no emoji.

**Delivery.** Icons ship as an inline SVG sprite at `assets/icons/sprite.svg`, loaded once per page by `assets/icons/ki.js`. The loader injects the sprite at the start of `<body>` so `<use href="#icon-…"/>` resolves reliably under `file://` as well as HTTP. Helper classes in `colors_and_type.css` handle sizing and tonal backgrounds:

- **Size scale** — `.ki-14` / `.ki-16` / `.ki-20` / `.ki-24` / `.ki-32` / `.ki-48`. 16 is the default; 14 pairs with 12–13px inline text; 20 for card heads; 24 for toolbars; 32 / 48 for feature moments and empty states.
- **Color** — always `currentColor`. Icons inherit from enclosing text color, so they pick up `--fg-1`, `--fg-muted`, severity foregrounds, and button text without ceremony.
- **Tonal chips** — `.ki-chip` (neutral), `.ki-chip.is-brand` (warm-red wash), `.ki-chip.is-spruce` (spruce wash). Use for product-nav tiles and feature cards.

**Set shipped (17 symbols).** Navigation & product: `dashboard`, `analytics`, `network`, `group`, `chat-bot`, `document-chart`. Agentic & insight: `recommend`, `lightbulb`, `anomaly`. Status: `checkmark-filled`, `error-filled`, `warning-alt`, `information`. Meta & motion: `filter`, `log-out`, `arrow-up-right`, `arrow-down-right`. Extend the sprite by adding `<symbol id="icon-<name>" viewBox="0 0 32 32">` entries alongside the existing ones.

**Pairing rules.** Severity is never color-only — always icon + label. Deltas use `arrow-up-right` / `arrow-down-right`, never `+` / `−` glyphs alone. Agentic affordances (Investigate with AI, recommendations) always carry `lightbulb` or `recommend`. The Kyndryl wordmark at `assets/kyndryl-logo.png` is the one raster asset.

**Unicode, emoji.** Not used. Status dots are `<span>` circles with a background-color token, never `🔴`.

---

## Data visualisation

The charts kit (`ui_kits/shidoka-charts/`) is the reference for any visualisation that ships inside a Kyndryl surface. It is built on **Chart.js 4** with Shidoka palette tokens, matching the real Shidoka `@kyndryl-design-system/shidoka-charts` package patterns.

**Palette rules.**
- **Categorical** (10 slots, order-locked: Spruce · Warm Red · Blue · Purple · Orange · Cool Gray · Teal · Coral · Navy · Crimson) — series that are mutually exclusive & unordered (products, teams, environments). Start at slot 1, repeat in order, never sort by hue affinity.
- **Sequential01** (single-hue Spruce, 10 steps) — ordinal magnitude. Heatmaps, choropleth, density.
- **Divergent01** (Warm Red ↔ neutral ↔ Spruce, 7 stops) — signed deltas where values cross a meaningful midpoint (variance vs target, sentiment, under/over).
- **RAG** (Success / Warning / Error / Info / Critical) — only to encode operational status. Never for neutral categories.

**Chart type inventory.** Bar (grouped · stacked · 100%-stacked · horizontal), line, filled area, stacked area, scatter, bubble, doughnut, pie, radar, polar area, meter-gauge (semi-circle doughnut with target marker), sankey, tree / dendrogram / force-directed graph, heatmap / matrix, choropleth / bubble-map, boxplot / violin.

**Defaults.** Roboto 11px labels · Dark Stone 90 titles · Cool Gray 30 (`#64748B`) ticks · Cool Gray 10 (`#F1F5F9`) gridlines · Cool Gray 20 (`#E2E8F0`) axis borders · 4px bar border-radius · tooltips in Dark Stone 90 with 4px radius · legend bottom with 10×10 swatches. Numbers are tabular-nums everywhere.

**Pairing with primitives.** Trust-score gauges pair with `FreshnessBadge` (when was this last computed?) and `DeltaIndicator` (+/- vs last period). Sankey / tree nodes surface `StatusBadge` on hover. Bar & line charts never stand alone — every chart card carries a source line (`ConfigureSources` pattern: dataset · timestamp · confidence).

---

## UX Themes the DS Encodes (reminder of the brief)

1. **Explainability.** Every number carries a reason — `Rationale` slot on recommendations, `Signals` primitive, `SourceAttribution` footer ("Powered by agentic AI", dataset + timestamp). The highlight-link pattern (bold text in a message ↔ snapshot card below) is a first-class primitive.
2. **Trust & provenance.** Data-freshness badges ("Today", "Last verified 3d ago", "12-week trend") on every card. Canonical status taxonomy: Healthy/Degraded/Impacted/Unknown on graph; Critical/High/Medium/Low/OK on pills; Pending/Approved/Executed/Rejected on workflow items. Confidence % is a badge, not free text. Target-vs-current is the default framing.
3. **User agency.** Every agent recommendation carries a three-way affordance (`Execute` / `Send for Review` / `Dismiss`), permission-gated. Batch actions always have a single-item equivalent. Dismissal is cheap and reversible.
4. **Human-in-the-loop review.** Correction Request / Change Request / Access Review are one component family: filterable table + detail drawer + approve/reject/defer + audit trail + owner + timestamp + reason.
5. **Consequence transparency.** Impact-rollup visuals (CIs/apps/processes/BUs/domains) appear **before** an action, not only after. Post-action, the execution-confirmation timeline closes the loop.
6. **Progressive disclosure.** Card summary → row/node detail → drawer/inspector. Always three layers.
7. **A11y & i18n.** RTL mirroring baked in. Severity is never colour-only — always paired with icon or label.

---

## Caveats

- **Fonts.** TWK Everett is bundled in `fonts/` (OTF + web TTF). Roboto and Geist Mono are Google-Fonts-hosted; the Arabic pair matches Shidoka's RTL guidance.
- **Token values are Shidoka-faithful** (palette, radii, space, type roles, RAG stops). Exact hex stops for intermediate ramp positions (e.g. `warm-red-30`, `cool-gray-40`) are interpolated to fit Shidoka's published end-stops; if pixel-exact parity with a Figma export is required, substitute from the Shidoka source.
- **Shidoka icon library.** Shipped as an inline SVG sprite at `assets/icons/sprite.svg` with 17 curated symbols. Icons are stylistic recreations faithful to Shidoka's 32-grid, 2px-padding authoring conventions; for pixel-exact parity with a production Shidoka export, substitute from the npm package.
- **One theme.** Only the Kyndryl / Shidoka theme is shipped. The underlying `ClientThemeProvider` architecture from the CMDB repo is multi-tenant-ready for additional themes.
- **UI kit is cosmetic.** Knowledge-graph canvas, DAG panel, and recharts visuals are rendered as static high-fidelity mocks, not wired to React Flow or recharts.
