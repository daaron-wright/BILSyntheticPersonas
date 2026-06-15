/* @ds-bundle: {"format":3,"namespace":"KyndrylAgenticFrameworkDesignSystem_7e4e49","components":[{"name":"HtmlEmbed","sourcePath":"storybook/src/_shared/HtmlEmbed.tsx"},{"name":"Thinking","sourcePath":"storybook/src/agentic/AgentStatusBar.stories.tsx"},{"name":"Streaming","sourcePath":"storybook/src/agentic/AgentStatusBar.stories.tsx"},{"name":"Paused","sourcePath":"storybook/src/agentic/AgentStatusBar.stories.tsx"},{"name":"Done","sourcePath":"storybook/src/agentic/AgentStatusBar.stories.tsx"},{"name":"AgentStatusBar","sourcePath":"storybook/src/agentic/AgentStatusBar.tsx"},{"name":"AllStates","sourcePath":"storybook/src/states/States.stories.tsx"},{"name":"FullRun","sourcePath":"storybook/src/agentic/Agentic.stories.tsx"},{"name":"Inbox","sourcePath":"storybook/src/agentic/Agentic.stories.tsx"},{"name":"Reference","sourcePath":"storybook/src/agentic/Agentic.stories.tsx"},{"name":"AgentToAgent","sourcePath":"storybook/src/agentic/HandoffCard.stories.tsx"},{"name":"ToHuman","sourcePath":"storybook/src/agentic/HandoffCard.stories.tsx"},{"name":"HandoffCard","sourcePath":"storybook/src/agentic/HandoffCard.tsx"},{"name":"TieBreak","sourcePath":"storybook/src/agentic/HumanInputRequest.stories.tsx"},{"name":"HumanInputRequest","sourcePath":"storybook/src/agentic/HumanInputRequest.tsx"},{"name":"TrustScore","sourcePath":"storybook/src/agentic/StateDeltaToast.stories.tsx"},{"name":"StaleCount","sourcePath":"storybook/src/agentic/StateDeltaToast.stories.tsx"},{"name":"StateDeltaToast","sourcePath":"storybook/src/agentic/StateDeltaToast.tsx"},{"name":"InFlight","sourcePath":"storybook/src/agentic/StepTimeline.stories.tsx"},{"name":"Completed","sourcePath":"storybook/src/agentic/ToolCallCard.stories.tsx"},{"name":"StepTimeline","sourcePath":"storybook/src/agentic/StepTimeline.tsx"},{"name":"Requested","sourcePath":"storybook/src/agentic/ToolCallCard.stories.tsx"},{"name":"Destructive","sourcePath":"storybook/src/agentic/ToolCallCard.stories.tsx"},{"name":"Executing","sourcePath":"storybook/src/agentic/ToolCallCard.stories.tsx"},{"name":"ToolCallCard","sourcePath":"storybook/src/agentic/ToolCallCard.tsx"},{"name":"KpiGrid","sourcePath":"storybook/src/composites/Composites.stories.tsx"},{"name":"TrustGauge","sourcePath":"storybook/src/composites/Composites.stories.tsx"},{"name":"StatusBanner","sourcePath":"storybook/src/composites/Composites.stories.tsx"},{"name":"Recommendation","sourcePath":"storybook/src/composites/Composites.stories.tsx"},{"name":"ExecutionTimeline","sourcePath":"storybook/src/composites/Composites.stories.tsx"},{"name":"ExecutiveSummary","sourcePath":"storybook/src/composites/Composites.stories.tsx"},{"name":"ImpactRollup","sourcePath":"storybook/src/composites/Composites.stories.tsx"},{"name":"Scenario","sourcePath":"storybook/src/composites/Composites.stories.tsx"},{"name":"Chat","sourcePath":"storybook/src/composites/Composites.stories.tsx"},{"name":"DAGGraph","sourcePath":"storybook/src/composites/Composites.stories.tsx"},{"name":"Table","sourcePath":"storybook/src/composites/Composites.stories.tsx"},{"name":"Buttons","sourcePath":"storybook/src/composites/Composites.stories.tsx"},{"name":"Badges","sourcePath":"storybook/src/composites/Composites.stories.tsx"},{"name":"Logo","sourcePath":"storybook/src/foundations/Brand.stories.tsx"},{"name":"Icons","sourcePath":"storybook/src/foundations/Brand.stories.tsx"},{"name":"Brand","sourcePath":"storybook/src/foundations/Colors.stories.tsx"},{"name":"Neutrals","sourcePath":"storybook/src/foundations/Colors.stories.tsx"},{"name":"Severity","sourcePath":"storybook/src/foundations/Colors.stories.tsx"},{"name":"StatusRAG","sourcePath":"storybook/src/foundations/Colors.stories.tsx"},{"name":"Chart","sourcePath":"storybook/src/foundations/Colors.stories.tsx"},{"name":"Scale","sourcePath":"storybook/src/foundations/Spacing.stories.tsx"},{"name":"Radii","sourcePath":"storybook/src/foundations/Spacing.stories.tsx"},{"name":"Elevation","sourcePath":"storybook/src/foundations/Spacing.stories.tsx"},{"name":"Display","sourcePath":"storybook/src/foundations/Type.stories.tsx"},{"name":"Body","sourcePath":"storybook/src/foundations/Type.stories.tsx"},{"name":"CMDB_Workspace","sourcePath":"storybook/src/kits/Kits.stories.tsx"},{"name":"Shidoka_Components","sourcePath":"storybook/src/kits/Kits.stories.tsx"},{"name":"Shidoka_Shell","sourcePath":"storybook/src/kits/Kits.stories.tsx"},{"name":"Shidoka_Charts","sourcePath":"storybook/src/kits/Kits.stories.tsx"},{"name":"Default","sourcePath":"storybook/src/primitives/SourceAttribution.stories.tsx"},{"name":"Low","sourcePath":"storybook/src/primitives/SeverityPill.stories.tsx"},{"name":"Readonly","sourcePath":"storybook/src/primitives/ConfidenceBadge.stories.tsx"},{"name":"ConfidenceBadge","sourcePath":"storybook/src/primitives/ConfidenceBadge.tsx"},{"name":"Up","sourcePath":"storybook/src/primitives/DeltaIndicator.stories.tsx"},{"name":"Down","sourcePath":"storybook/src/primitives/DeltaIndicator.stories.tsx"},{"name":"Inverted","sourcePath":"storybook/src/primitives/DeltaIndicator.stories.tsx"},{"name":"DeltaIndicator","sourcePath":"storybook/src/primitives/DeltaIndicator.tsx"},{"name":"Today","sourcePath":"storybook/src/primitives/FreshnessBadge.stories.tsx"},{"name":"Fresh","sourcePath":"storybook/src/primitives/FreshnessBadge.stories.tsx"},{"name":"Stale","sourcePath":"storybook/src/primitives/FreshnessBadge.stories.tsx"},{"name":"FreshnessBadge","sourcePath":"storybook/src/primitives/FreshnessBadge.tsx"},{"name":"Critical","sourcePath":"storybook/src/primitives/SeverityPill.stories.tsx"},{"name":"High","sourcePath":"storybook/src/primitives/SeverityPill.stories.tsx"},{"name":"Medium","sourcePath":"storybook/src/primitives/SeverityPill.stories.tsx"},{"name":"WithLabel","sourcePath":"storybook/src/primitives/SeverityPill.stories.tsx"},{"name":"SeverityPill","sourcePath":"storybook/src/primitives/SeverityPill.tsx"},{"name":"NoConfidence","sourcePath":"storybook/src/primitives/SourceAttribution.stories.tsx"},{"name":"SourceAttribution","sourcePath":"storybook/src/primitives/SourceAttribution.tsx"},{"name":"Approved","sourcePath":"storybook/src/primitives/StatusBadge.stories.tsx"},{"name":"Pending","sourcePath":"storybook/src/primitives/StatusBadge.stories.tsx"},{"name":"Executed","sourcePath":"storybook/src/primitives/StatusBadge.stories.tsx"},{"name":"Healthy","sourcePath":"storybook/src/primitives/StatusBadge.stories.tsx"},{"name":"Impacted","sourcePath":"storybook/src/primitives/StatusBadge.stories.tsx"},{"name":"StatusBadge","sourcePath":"storybook/src/primitives/StatusBadge.tsx"},{"name":"Dashboard","sourcePath":"storybook/src/templates/Templates.stories.tsx"},{"name":"Triage","sourcePath":"storybook/src/templates/Templates.stories.tsx"},{"name":"Investigation","sourcePath":"storybook/src/templates/Templates.stories.tsx"},{"name":"ReviewQueue","sourcePath":"storybook/src/templates/Templates.stories.tsx"},{"name":"Conversation","sourcePath":"storybook/src/templates/Templates.stories.tsx"}],"sourceHashes":{"assets/icons/ki.js":"bcf5b5ab4919","handoff/specs.js":"03fae50dceff","preview/agentic.js":"e9b97b7752f4","preview/deck-stage.js":"ad1c016a6256","storybook-static/sb.js":"fbd43aab168f","storybook-static/stories.js":"89740d2f71d4","storybook/.storybook/main.ts":"e8bb922040a7","storybook/.storybook/manager.ts":"ef1f6b0e2624","storybook/.storybook/preview.ts":"c47ec331e36a","storybook/src/_shared/HtmlEmbed.tsx":"f4ae64d34e4d","storybook/src/agentic/AgentStatusBar.stories.tsx":"ca0a3eaf06bc","storybook/src/agentic/AgentStatusBar.tsx":"222060c4afd0","storybook/src/agentic/Agentic.stories.tsx":"4e7dcec40669","storybook/src/agentic/HandoffCard.stories.tsx":"a76079314e78","storybook/src/agentic/HandoffCard.tsx":"8926955bef25","storybook/src/agentic/HumanInputRequest.stories.tsx":"ddf47dbdaf53","storybook/src/agentic/HumanInputRequest.tsx":"bff8a6ffab98","storybook/src/agentic/StateDeltaToast.stories.tsx":"8f8699e3dead","storybook/src/agentic/StateDeltaToast.tsx":"467501e2dd6e","storybook/src/agentic/StepTimeline.stories.tsx":"082aeb6f37d6","storybook/src/agentic/StepTimeline.tsx":"a2a054f605c3","storybook/src/agentic/ToolCallCard.stories.tsx":"92ba2b6a3c39","storybook/src/agentic/ToolCallCard.tsx":"a223d64835e1","storybook/src/composites/Composites.stories.tsx":"f891fdbfc55d","storybook/src/foundations/Brand.stories.tsx":"53a02824e731","storybook/src/foundations/Colors.stories.tsx":"736f8e2c8cca","storybook/src/foundations/Spacing.stories.tsx":"07569d1c504a","storybook/src/foundations/Type.stories.tsx":"80ace826fc6f","storybook/src/kits/Kits.stories.tsx":"e5402a2273d0","storybook/src/primitives/ConfidenceBadge.stories.tsx":"01f140e12575","storybook/src/primitives/ConfidenceBadge.tsx":"4331dfd90d32","storybook/src/primitives/DeltaIndicator.stories.tsx":"c04721be6759","storybook/src/primitives/DeltaIndicator.tsx":"55f687aed0ef","storybook/src/primitives/FreshnessBadge.stories.tsx":"50cc41edf70e","storybook/src/primitives/FreshnessBadge.tsx":"42cc9f96918e","storybook/src/primitives/SeverityPill.stories.tsx":"6b7b13ffe97f","storybook/src/primitives/SeverityPill.tsx":"f97629606cfb","storybook/src/primitives/SourceAttribution.stories.tsx":"6a9b110b35e6","storybook/src/primitives/SourceAttribution.tsx":"e39708bbb3db","storybook/src/primitives/StatusBadge.stories.tsx":"a4686e788b71","storybook/src/primitives/StatusBadge.tsx":"c1fc527f010e","storybook/src/states/States.stories.tsx":"c9730632f7a6","storybook/src/templates/Templates.stories.tsx":"513efde5bda1"},"inlinedExternals":[],"duplicateExports":[{"name":"meta","paths":["storybook/src/agentic/AgentStatusBar.stories.tsx","storybook/src/agentic/Agentic.stories.tsx","storybook/src/agentic/HandoffCard.stories.tsx","storybook/src/agentic/HumanInputRequest.stories.tsx","storybook/src/agentic/StateDeltaToast.stories.tsx","storybook/src/agentic/StepTimeline.stories.tsx","storybook/src/agentic/ToolCallCard.stories.tsx","storybook/src/composites/Composites.stories.tsx","storybook/src/foundations/Brand.stories.tsx","storybook/src/foundations/Colors.stories.tsx","storybook/src/foundations/Spacing.stories.tsx","storybook/src/foundations/Type.stories.tsx","storybook/src/kits/Kits.stories.tsx","storybook/src/primitives/ConfidenceBadge.stories.tsx","storybook/src/primitives/DeltaIndicator.stories.tsx","storybook/src/primitives/FreshnessBadge.stories.tsx","storybook/src/primitives/SeverityPill.stories.tsx","storybook/src/primitives/SourceAttribution.stories.tsx","storybook/src/primitives/StatusBadge.stories.tsx","storybook/src/states/States.stories.tsx","storybook/src/templates/Templates.stories.tsx"]},{"name":"AllStates","paths":["storybook/src/agentic/Agentic.stories.tsx","storybook/src/states/States.stories.tsx"]},{"name":"Completed","paths":["storybook/src/agentic/StepTimeline.stories.tsx","storybook/src/agentic/ToolCallCard.stories.tsx"]},{"name":"Default","paths":["storybook/src/primitives/ConfidenceBadge.stories.tsx","storybook/src/primitives/SourceAttribution.stories.tsx"]},{"name":"Low","paths":["storybook/src/primitives/ConfidenceBadge.stories.tsx","storybook/src/primitives/SeverityPill.stories.tsx"]}],"unexposedExports":[{"name":"config","sourcePath":"storybook/.storybook/main.ts"},{"name":"meta","sourcePath":"storybook/src/templates/Templates.stories.tsx"},{"name":"preview","sourcePath":"storybook/.storybook/preview.ts"}]} */

(() => {

const __ds_ns = (window.KyndrylAgenticFrameworkDesignSystem_7e4e49 = window.KyndrylAgenticFrameworkDesignSystem_7e4e49 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/icons/ki.js
try { (() => {
/* Shidoka Icon Loader
 * Inline the icon sprite at document start so <use href="#icon-name"/>
 * works across file:// and served contexts without CORS quirks.
 * Usage:
 *   <script src="../../assets/icons/ki.js" defer></script>
 *   <svg class="ki"><use href="#icon-dashboard"/></svg>
 */
(function () {
  // Resolve sprite path relative to THIS script, so it works from any depth.
  var thisScript = document.currentScript || function () {
    var s = document.getElementsByTagName('script');
    return s[s.length - 1];
  }();
  var base = thisScript ? thisScript.src.replace(/[^/]+$/, '') : '';
  var url = base + 'sprite.svg';
  function inject(svgText) {
    var wrap = document.createElement('div');
    wrap.setAttribute('aria-hidden', 'true');
    wrap.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    wrap.innerHTML = svgText;
    // Insert at the start of body so <use> refs resolve everywhere.
    if (document.body) {
      document.body.insertBefore(wrap, document.body.firstChild);
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        document.body.insertBefore(wrap, document.body.firstChild);
      });
    }
  }
  fetch(url).then(function (r) {
    return r.text();
  }).then(inject).catch(function () {
    // Graceful fallback — silently ignore; icons simply won't render.
    console.warn('[ki] Failed to load icon sprite at', url);
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons/ki.js", error: String((e && e.message) || e) }); }

// handoff/specs.js
try { (() => {
/* =========================================================
   Per-component spec registry.
   Keyed by preview filename. Used by handoff/component.html.
   Schema:
     name           — display name
     tag            — category tag (Type/Color/Component/Composite/...)
     group          — comma-list: foundation,primitive,component,composite,agentic,template,state,brand
     summary        — one-paragraph elevator pitch
     anatomy        — short prose describing parts
     props          — array of {name, type, default, notes} (omit for foundations)
     tokens         — array of {name, role} — token usage
     states         — array of states the surface implements (subset of 8)
     do             — array of strings
     dont           — array of strings
     edgeCases      — array of strings
     related        — array of preview filenames
   ========================================================= */
window.SPECS = {
  /* ---------- Foundations ---------- */
  'type-display.html': {
    name: 'Display type',
    tag: 'Type',
    group: 'foundation',
    summary: 'TWK Everett (light/regular) is the display family. Reserved for hero numbers, page titles, and major statement text. Never used for body copy or UI labels.',
    anatomy: 'Six tiers from `.t-hero` (96px) down to `.t-h3` (24px). Letter-spacing tightens as size grows; line-height is fixed at `--lh-tight` for headers.',
    tokens: [{
      name: '--font-display',
      role: 'TWK Everett family stack'
    }, {
      name: '--lh-tight',
      role: 'Line height for h1–h3'
    }, {
      name: '--tracking-display',
      role: 'Negative tracking for hero numbers'
    }],
    do: ['Use `.t-hero` for the single most important number on a screen.', 'Pair with `.t-caption` (uppercase eyebrow) above the display number.', 'Use light/regular weights only — never bold.'],
    dont: ['Use TWK Everett for body or labels.', 'Mix display weights inside a single tile.', 'Apply `text-transform: uppercase` — display type is sentence/title case.'],
    related: ['type-body.html']
  },
  'type-body.html': {
    name: 'Body type',
    tag: 'Type',
    group: 'foundation',
    summary: 'Roboto for UI copy, Geist Mono for IDs, timestamps, and any tabular value. Body type carries the operator UI; weight + size do all the hierarchy work.',
    anatomy: 'Body classes: `.t-body` (14px), `.t-body-sm` (12px), `.t-caption` (11px UPPERCASE eyebrow with `--tracking-eyebrow`). Mono classes: `.t-mono`, `.t-mono-sm`.',
    tokens: [{
      name: '--font-sans',
      role: 'Roboto family stack'
    }, {
      name: '--font-mono',
      role: 'Geist Mono family stack'
    }, {
      name: '--tracking-eyebrow',
      role: 'Letter-spacing for uppercase eyebrows'
    }],
    do: ['Use mono for IDs, timestamps, hex codes, percentages in dense tables.', 'Use `.t-caption` for category labels above primary content.', 'Apply `font-variant-numeric: tabular-nums` on any column of numbers.'],
    dont: ['Use mono for prose.', 'Use `.t-caption` as a regular subhead — it is reserved for eyebrows.', 'Lower the body size below 12px; that is the floor.'],
    related: ['type-display.html']
  },
  'colors-brand.html': {
    name: 'Brand color',
    tag: 'Color',
    group: 'foundation',
    summary: 'Warm Red and Spruce are the two brand ramps. Warm Red is reserved for brand moments and critical state; Spruce is the workhorse interactive accent.',
    anatomy: 'Each ramp has 10 stops (10–110). Stops 50–60 are the brand mid; 80–110 are the dark variants used for text on tinted surfaces.',
    tokens: [{
      name: '--k-warm-red-50',
      role: 'Brand red mid; critical state border'
    }, {
      name: '--k-spruce-60',
      role: 'Primary interactive accent'
    }, {
      name: '--k-spruce-110',
      role: 'Text on spruce-tinted surfaces'
    }],
    do: ['Use Spruce for primary buttons, active states, and AI gradient borders.', 'Reserve Warm Red for brand moments and critical severity.', 'Pair brand fills with brand-100/110 text (never neutral).'],
    dont: ['Use Warm Red for high-severity (use the severity tokens instead).', 'Mix Spruce and Warm Red as adjacent fills — they vibrate.', 'Tint UI chrome with brand colors; chrome stays neutral.'],
    related: ['colors-slate.html', 'colors-status.html']
  },
  'colors-slate.html': {
    name: 'Neutrals',
    tag: 'Color',
    group: 'foundation',
    summary: 'Three neutral families: Dark Stone (true black ramp), Cool Gray (UI chrome), Warm Gray (paper / surfaces). Picking the right neutral is the single biggest taste move in the system.',
    anatomy: '9-stop ramps. Cool Gray for borders, dividers, table chrome. Warm Gray for canvas backgrounds. Dark Stone for type and high-contrast surfaces.',
    tokens: [{
      name: '--bg-1',
      role: 'Page background — Warm Gray 10'
    }, {
      name: '--bg-2',
      role: 'Surface — Warm Gray 20'
    }, {
      name: '--border-1',
      role: 'Default border — Cool Gray 30'
    }, {
      name: '--fg-1',
      role: 'Primary text — Dark Stone 110'
    }],
    do: ['Use Warm Gray for canvases (paper feel).', 'Use Cool Gray for chrome (rails, borders, table headers).', 'Use Dark Stone only for type and dark mode surfaces.'],
    dont: ['Mix Warm Gray and Cool Gray on the same surface — pick one.', 'Use pure white; surfaces are always tinted neutral.'],
    related: ['colors-brand.html']
  },
  'colors-status.html': {
    name: 'Status taxonomy',
    tag: 'Color',
    group: 'foundation',
    summary: 'Four status colors (success / warning / danger / info), each with four stops (10/20/100/110) for surface, border, fg, and emphasis. The taxonomy is closed — do not invent new status families.',
    anatomy: 'Stop 10 = surface tint, 20 = border, 100 = foreground/icon, 110 = emphasis text on tint. The four families never blend.',
    tokens: [{
      name: '--k-status-success-10/20/100/110',
      role: 'Healthy / OK'
    }, {
      name: '--k-status-warning-10/20/100/110',
      role: 'Stale / approaching'
    }, {
      name: '--k-status-danger-10/20/100/110',
      role: 'Critical / impacted'
    }, {
      name: '--k-status-info-10/20/100/110',
      role: 'Notices, neutral signals'
    }],
    do: ['Always pair status fill with the matching icon and label.', 'Use stop 10 for surface tint, 110 for text on that tint.'],
    dont: ['Invent a fifth status family.', 'Use status colors for chrome or branding.'],
    related: ['colors-severity.html', 'colors-brand.html']
  },
  'colors-severity.html': {
    name: 'Severity scale',
    tag: 'Color',
    group: 'foundation',
    summary: 'Five-stop severity ramp (Critical → High → Medium → Low → OK). Maps to severity-{level} tokens for fill, border, fg. Severity is "how bad"; status is "where in the lifecycle". Never conflate.',
    anatomy: 'Severity tokens are an alias layer over status tokens, with Critical pulled distinct from Danger to allow Warm Red brand differentiation.',
    tokens: [{
      name: '--sev-critical-bg/fg/border',
      role: 'Critical'
    }, {
      name: '--sev-high-bg/fg/border',
      role: 'High'
    }, {
      name: '--sev-medium-bg/fg/border',
      role: 'Medium'
    }, {
      name: '--sev-low-bg/fg/border',
      role: 'Low'
    }, {
      name: '--sev-ok-bg/fg/border',
      role: 'OK'
    }],
    do: ['Use severity tokens on `<SeverityPill>` only.', 'Always pair color with the icon + uppercase label.'],
    dont: ['Use severity color to convey workflow status.', 'Render severity by color alone, no label.'],
    related: ['components-badges.html', 'colors-status.html']
  },
  'colors-chart.html': {
    name: 'Chart palette',
    tag: 'Color',
    group: 'foundation',
    summary: 'Categorical 10-slot palette, order-locked. Slot 1 is always Spruce 60 (primary accent); subsequent slots ordered for max chromatic separation. Order is part of the contract.',
    anatomy: '10 slots tested for color-blind separation (deuteranopia, protanopia). Sequential and diverging ramps live in their own files.',
    tokens: Array.from({
      length: 10
    }, (_, i) => ({
      name: `--k-chart-${i + 1}`,
      role: `Slot ${i + 1}`
    })),
    do: ['Use slot 1 for the primary series only.', 'Use slots in order; do not reshuffle.', 'Test with the color-blind simulator before shipping a new chart.'],
    dont: ['Pick chart colors by hand outside the palette.', 'Use severity or status colors as series colors.'],
    related: ['colors-brand.html']
  },
  'spacing-scale.html': {
    name: 'Spacing scale',
    tag: 'Spacing',
    group: 'foundation',
    summary: '4pt base scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64. Every gap, padding, and margin in the system snaps to this scale.',
    anatomy: 'Tokens `--space-1` through `--space-10`. Large jumps after `--space-6` (24px) reflect that bigger gaps need more visual difference, not arithmetic continuation.',
    tokens: [{
      name: '--space-1',
      role: '4px — tight inline gap'
    }, {
      name: '--space-2',
      role: '8px — default chip padding'
    }, {
      name: '--space-3',
      role: '12px — control padding y'
    }, {
      name: '--space-4',
      role: '16px — card inner gap'
    }, {
      name: '--space-5',
      role: '20px'
    }, {
      name: '--space-6',
      role: '24px — section gap'
    }, {
      name: '--space-7',
      role: '32px — major rhythm'
    }, {
      name: '--space-8',
      role: '40px'
    }],
    do: ['Snap every spacing value to a token.'],
    dont: ['Hardcode pixel values outside the scale.'],
    related: ['spacing-radii.html', 'spacing-elevation.html']
  },
  'spacing-radii.html': {
    name: 'Radii',
    tag: 'Spacing',
    group: 'foundation',
    summary: 'Four corner radii: 2 / 4 / 8 / 16. Form controls = 2/4, cards = 8, large surfaces / drawers = 16. Pills override to fully rounded.',
    anatomy: 'Tokens `--radius-1` through `--radius-4`. Pills use `border-radius: 999px` directly.',
    tokens: [{
      name: '--radius-1',
      role: '2px — inputs, table cells'
    }, {
      name: '--radius-2',
      role: '4px — buttons, chips'
    }, {
      name: '--radius-3',
      role: '8px — cards, banners'
    }, {
      name: '--radius-4',
      role: '16px — drawers, modals'
    }],
    do: ['Use pill radius for severity/status badges only.'],
    dont: ['Mix radii inside a single composite.'],
    related: ['spacing-scale.html']
  },
  'spacing-elevation.html': {
    name: 'Elevation',
    tag: 'Spacing',
    group: 'foundation',
    summary: 'Borders + tint, not shadow. The system uses one subtle shadow token (`--shadow-card`) for hover/active lift; default elevation is conveyed by border + surface tint.',
    anatomy: 'Three levels: flat (border only), raised (border + bg-2), floating (border + bg-2 + `--shadow-card`).',
    tokens: [{
      name: '--shadow-card',
      role: 'Subtle 1px shadow for hover/floating'
    }, {
      name: '--border-1',
      role: 'Default border'
    }],
    do: ['Convey hierarchy with borders + tint.'],
    dont: ['Stack heavy drop shadows for "depth".'],
    related: ['spacing-scale.html']
  },
  /* ---------- Primitives ---------- */
  'primitives-confidence.html': {
    name: 'ConfidenceBadge',
    tag: 'Agentic',
    group: 'primitive,agentic',
    summary: 'Shows the agent\'s confidence in a value. Always agentic — it represents a model decision the user can push back on.',
    anatomy: '`[ value% ] [•••]` — value in monospace with dotted underline; trailing chevron opens the rationale + actions popover.',
    props: [{
      name: 'value',
      type: 'number (0–100)',
      default: 'required',
      notes: 'Render as integer. Clamp at 99.'
    }, {
      name: 'rationale',
      type: 'string',
      default: 'required',
      notes: 'No rationale → don\'t render the badge.'
    }, {
      name: 'evidence',
      type: 'string[]',
      default: '—',
      notes: 'Source IDs in popover.'
    }, {
      name: 'onOverride',
      type: '(newValue) => void',
      default: '—',
      notes: 'User sets a new value.'
    }, {
      name: 'onTeach',
      type: '(signal) => void',
      default: '—',
      notes: 'Writes to "Learned from you" inbox.'
    }, {
      name: 'onDispute',
      type: '() => void',
      default: '—'
    }],
    tokens: [{
      name: '--fg-1',
      role: 'Value text'
    }, {
      name: 'font-variant-numeric: tabular-nums',
      role: 'Value rendering'
    }, {
      name: '.agentic-pop',
      role: 'Popover surface'
    }],
    states: ['default', 'hover', 'active', 'loading', 'error'],
    do: ['Always show rationale in the popover header.', 'Log every override to the agentic inbox via `onTeach`.', 'Use mono for the value with tabular-nums.'],
    dont: ['Render without a `rationale`.', 'Show > 99 — clamp to avoid implying certainty.', 'Use color alone to convey confidence level.'],
    edgeCases: ['No rationale yet: do not render the badge — render a SkeletonChip.', 'Override pending sync: show `--k-status-warning-110` underline.', 'Disputed: replace value with em-dash, show `disputed` chip.'],
    related: ['primitives-source.html', 'agentic-inbox.html']
  },
  'primitives-freshness.html': {
    name: 'FreshnessBadge',
    tag: 'Agentic',
    group: 'primitive,agentic',
    summary: 'How old is this data. Switches to warning tint when older than `staleThresholdDays`. Always shows a banner at the surface level when stale — never silently re-fetches.',
    anatomy: 'Pill with leading dot (status color), label like "Last verified 14d ago", trailing chevron for popover.',
    props: [{
      name: 'lastVerifiedAt',
      type: 'Date | ISOString',
      default: 'required'
    }, {
      name: 'staleThresholdDays',
      type: 'number',
      default: '7'
    }, {
      name: 'source',
      type: 'string',
      default: '—',
      notes: 'e.g. "CMDB.discovery"'
    }, {
      name: 'onRefresh',
      type: '() => void',
      default: '—'
    }, {
      name: 'onChangeThreshold',
      type: '(days) => void',
      default: '—'
    }, {
      name: 'onPin',
      type: '() => void',
      default: '—',
      notes: 'Marks "trusted as-is".'
    }],
    tokens: [{
      name: '--fg-muted',
      role: 'Fresh text'
    }, {
      name: '--k-status-warning-110',
      role: 'Approaching stale'
    }, {
      name: '--k-status-warning-10',
      role: 'Stale tint surface'
    }],
    states: ['fresh', 'approaching', 'stale', 'loading', 'error'],
    do: ['Show a surface-level banner when data is stale.', 'Use `lastVerifiedAt` as the source of truth, not render time.'],
    dont: ['Compute staleness from render time.', 'Hide stale data — keep it visible behind the banner.', 'Auto-refresh silently.'],
    related: ['primitives-source.html', 'components-status-banner.html']
  },
  'primitives-delta.html': {
    name: 'DeltaIndicator',
    tag: 'Agentic',
    group: 'primitive,agentic',
    summary: 'Period-over-period change with explanatory popover. Up isn\'t always green — direction must be specified per metric.',
    anatomy: 'Arrow icon + signed value + period label. Popover offers Explain / Set threshold / Compare periods / Teach.',
    props: [{
      name: 'value',
      type: 'number',
      default: 'required',
      notes: 'Signed.'
    }, {
      name: 'unit',
      type: "'pct' | 'abs' | 'count'",
      default: "'pct'"
    }, {
      name: 'period',
      type: 'string',
      default: 'required',
      notes: 'WoW, 30d, custom.'
    }, {
      name: 'direction',
      type: "'up-good' | 'up-bad' | 'neutral'",
      default: 'required',
      notes: 'Drives color semantics.'
    }, {
      name: 'onExplain',
      type: '() => void',
      default: '—'
    }],
    tokens: [{
      name: '--k-status-success-100',
      role: 'Up + up-good'
    }, {
      name: '--k-warm-red-50',
      role: 'Down + up-good'
    }, {
      name: '--fg-muted',
      role: 'Neutral'
    }],
    do: ['Spec the direction explicitly per metric.', 'Use arrow icons, not + / − glyphs.'],
    dont: ['Assume up = good.', 'Render without a period label.'],
    related: ['primitives-confidence.html', 'components-kpi.html']
  },
  'primitives-source.html': {
    name: 'SourceAttribution',
    tag: 'Agentic',
    group: 'primitive,agentic',
    summary: 'Footer line on agent-generated cards. Names the dataset, timestamp, and confidence. Replaces "AI sparkle" decoration.',
    anatomy: '`[ki-chip] dataset · timestamp · confidence% [•••]` — timestamp in mono.',
    props: [{
      name: 'dataset',
      type: 'string',
      default: 'required'
    }, {
      name: 'timestamp',
      type: 'Date',
      default: 'required'
    }, {
      name: 'confidence',
      type: 'number',
      default: '—'
    }, {
      name: 'provenance',
      type: 'ProvenanceNode[]',
      default: '—',
      notes: 'Lineage tree in popover.'
    }],
    tokens: [{
      name: '--font-mono',
      role: 'Timestamp'
    }, {
      name: '--fg-muted',
      role: 'Footer text'
    }],
    do: ['Always present on agent-generated content.', 'Use mono for the timestamp.'],
    dont: ['Skip on cards with a model recommendation.', 'Show "AI" or sparkle emoji as a stand-in.'],
    related: ['primitives-confidence.html', 'components-recommendation.html']
  },
  'primitives-status.html': {
    name: 'StatusBadge',
    tag: 'Primitive',
    group: 'primitive',
    summary: 'Sentence-case chip for operational or workflow status. Distinct from severity: severity is "how bad", status is "where in the lifecycle".',
    anatomy: 'Pill with leading dot in status color, sentence-case label, optional trailing chevron for the agentic popover.',
    props: [{
      name: 'status',
      type: "'healthy' | 'degraded' | 'impacted' | 'unknown' | 'pending' | 'approved' | 'executed' | 'rejected'",
      default: 'required'
    }, {
      name: 'label',
      type: 'string',
      default: 'derived'
    }, {
      name: 'role',
      type: "'full' | 'review' | 'readonly'",
      default: "'full'",
      notes: '`readonly` removes the chevron.'
    }],
    tokens: [{
      name: '--k-status-success-10/100/110',
      role: 'Healthy'
    }, {
      name: '--k-status-warning-10/100/110',
      role: 'Pending / Degraded'
    }, {
      name: '--k-status-danger-10/100/110',
      role: 'Impacted / Rejected'
    }],
    states: ['default', 'hover', 'loading', 'unauthorized'],
    do: ['Sentence case (Healthy, Pending).', 'Pair with a colored dot — never color-only background.'],
    dont: ['Use status to indicate severity.', 'Strip the chevron unless `role=\'readonly\'`.'],
    related: ['components-badges.html']
  },
  /* ---------- Components ---------- */
  'components-badges.html': {
    name: 'Badges',
    tag: 'Component',
    group: 'component',
    summary: 'SeverityPill is the canonical severity surface — uppercase pill with icon + label. Status chips render alongside but use sentence case.',
    anatomy: '`[icon] [LABEL]` for SeverityPill (10–11px, `--tracking-eyebrow`); `[•] [Label]` for StatusBadge (sentence case).',
    props: [{
      name: 'severity',
      type: "'critical' | 'high' | 'medium' | 'low' | 'ok'",
      default: 'required'
    }, {
      name: 'label',
      type: 'string',
      default: 'severity.toUpperCase()'
    }, {
      name: 'density',
      type: "'default' | 'compact'",
      default: "'default'",
      notes: 'Compact for table cells.'
    }],
    tokens: [{
      name: '--sev-{severity}-bg',
      role: 'Background'
    }, {
      name: '--sev-{severity}-fg',
      role: 'Foreground'
    }, {
      name: '--sev-{severity}-border',
      role: 'Border'
    }, {
      name: '--tracking-eyebrow',
      role: 'Letter-spacing'
    }],
    states: ['default', 'hover', 'compact'],
    do: ['Always pair color with icon and uppercase label.', 'Use compact variant inside table cells.'],
    dont: ['Use SeverityPill for workflow state — use StatusBadge.', 'Render with color only and no label.'],
    related: ['primitives-status.html', 'colors-severity.html']
  },
  'components-buttons.html': {
    name: 'Buttons',
    tag: 'Component',
    group: 'component',
    summary: 'Three button kinds: primary (Spruce 60 fill), secondary (white + border), ghost (Spruce text, no chrome). Destructive = primary + Warm Red 50.',
    anatomy: '36px height default, 4px radius (`--radius-2`), 14px label. Icon + label or label alone.',
    props: [{
      name: 'kind',
      type: "'primary' | 'secondary' | 'ghost' | 'destructive'",
      default: "'secondary'"
    }, {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'"
    }, {
      name: 'icon',
      type: 'IconName',
      default: '—'
    }, {
      name: 'loading',
      type: 'boolean',
      default: 'false'
    }, {
      name: 'disabled',
      type: 'boolean',
      default: 'false'
    }],
    tokens: [{
      name: '--k-spruce-60',
      role: 'Primary fill'
    }, {
      name: '--k-warm-red-50',
      role: 'Destructive fill'
    }, {
      name: '--radius-2',
      role: 'Corner radius'
    }],
    states: ['default', 'hover', 'active', 'loading', 'disabled'],
    do: ['One primary per surface.', 'Use ghost for tertiary navigation.'],
    dont: ['Stack two primaries side by side.', 'Use destructive for non-destructive actions.'],
    related: ['components-recommendation.html']
  },
  'components-kpi.html': {
    name: 'KPI tiles',
    tag: 'Component',
    group: 'component',
    summary: 'Single KPI surface. Number + label + delta + freshness + optional source line. Composes the primitives.',
    anatomy: 'Label (caption eyebrow) → VALUE (display type) → delta + freshness on the same baseline → optional source footer.',
    props: [{
      name: 'label',
      type: 'string',
      default: 'required',
      notes: 'Sentence case.'
    }, {
      name: 'value',
      type: 'number | string',
      default: 'required'
    }, {
      name: 'unit',
      type: 'string',
      default: '—',
      notes: '%, CIs, $, none.'
    }, {
      name: 'delta',
      type: 'DeltaIndicatorProps',
      default: '—'
    }, {
      name: 'freshness',
      type: 'FreshnessBadgeProps',
      default: '—'
    }, {
      name: 'source',
      type: 'SourceAttributionProps',
      default: '—'
    }, {
      name: 'tone',
      type: "'default' | 'attention' | 'success'",
      default: "'default'",
      notes: 'Drives left-border accent only.'
    }, {
      name: 'onClick',
      type: '() => void',
      default: '—',
      notes: 'Whole tile becomes a button if provided.'
    }],
    tokens: [{
      name: '--card',
      role: 'Surface'
    }, {
      name: '--border-1',
      role: 'Border'
    }, {
      name: '.t-kpi-lg / .t-kpi',
      role: 'Number type'
    }, {
      name: '.t-caption',
      role: 'Eyebrow label'
    }],
    states: ['default', 'loading', 'empty', 'error', 'stale'],
    do: ['Use `attention` tone only when value crosses a threshold.', 'Always include freshness when data is mutable.'],
    dont: ['Stack two KPI numbers in one tile.', 'Use display type for the label.'],
    related: ['primitives-delta.html', 'primitives-freshness.html', 'primitives-source.html']
  },
  'components-gauge.html': {
    name: 'Trust score gauge',
    tag: 'Component',
    group: 'component',
    summary: 'Semi-circular gauge for the CMDB trust score 0–100. Pairs with FreshnessBadge and DeltaIndicator. Bands convey RAG.',
    anatomy: 'Half-arc from -90° to +90°. Track in `--bg-3`, fill in band-tinted gradient, value text centered below.',
    props: [{
      name: 'value',
      type: 'number (0–100)',
      default: 'required'
    }, {
      name: 'target',
      type: 'number',
      default: '—',
      notes: 'Optional target marker.'
    }, {
      name: 'bands',
      type: '[{from, to, tone}]',
      default: 'required',
      notes: 'RAG bands.'
    }, {
      name: 'freshness',
      type: 'FreshnessBadgeProps',
      default: '—'
    }, {
      name: 'delta',
      type: 'DeltaIndicatorProps',
      default: '—'
    }],
    tokens: [{
      name: '--bg-3',
      role: 'Track'
    }, {
      name: '--sev-*',
      role: 'Band fills'
    }],
    states: ['default', 'loading', 'empty', 'stale'],
    do: ['Always render with bands — value alone is meaningless.'],
    dont: ['Use a full-circle gauge — semi-circle only.'],
    related: ['components-kpi.html']
  },
  'components-table.html': {
    name: 'Data table',
    tag: 'Component',
    group: 'component',
    summary: 'Dense operator table with severity row accents, tabular numerals, and hover-row affordances. The default for every list view.',
    anatomy: '32px row height, 12px cell padding x, 4px severity accent on the left of severity-bearing rows.',
    props: [{
      name: 'rows',
      type: 'Row[]',
      default: 'required'
    }, {
      name: 'columns',
      type: 'Column[]',
      default: 'required'
    }, {
      name: 'density',
      type: "'comfortable' | 'compact'",
      default: "'comfortable'"
    }, {
      name: 'sortBy',
      type: 'ColumnId',
      default: '—'
    }, {
      name: 'onSelect',
      type: '(rowId) => void',
      default: '—'
    }],
    tokens: [{
      name: 'font-variant-numeric: tabular-nums',
      role: 'Number columns'
    }, {
      name: '--bg-2',
      role: 'Header row'
    }, {
      name: '--sev-{severity}-border',
      role: 'Row accent'
    }],
    states: ['default', 'loading', 'empty', 'filtered', 'error'],
    do: ['Right-align numeric columns.', 'Use tabular-nums on every numeric column.'],
    dont: ['Use full borders between every cell — rely on row hover.'],
    related: ['components-badges.html']
  },
  'components-status-banner.html': {
    name: 'Status banner',
    tag: 'Component',
    group: 'component',
    summary: 'Surface-level banner above the main content. Used for stale data, unauthorized state, and execution success/failure.',
    anatomy: 'Full-width strip, status-tinted bg, leading icon, message, optional action button on the right.',
    props: [{
      name: 'tone',
      type: "'info' | 'warning' | 'danger' | 'success'",
      default: 'required'
    }, {
      name: 'title',
      type: 'string',
      default: 'required'
    }, {
      name: 'message',
      type: 'string',
      default: '—'
    }, {
      name: 'action',
      type: '{ label, onClick }',
      default: '—'
    }, {
      name: 'dismissible',
      type: 'boolean',
      default: 'false'
    }],
    tokens: [{
      name: '--k-status-{tone}-10',
      role: 'Tint background'
    }, {
      name: '--k-status-{tone}-20',
      role: 'Border'
    }, {
      name: '--k-status-{tone}-110',
      role: 'Text'
    }],
    states: ['default', 'dismissed', 'loading-action'],
    do: ['Use for stale data above the surface.', 'Pair with a Refresh action when stale.'],
    dont: ['Use for transient toasts — use StateDeltaToast.', 'Stack more than two banners.'],
    related: ['primitives-freshness.html']
  },
  'components-recommendation.html': {
    name: 'Recommendation card',
    tag: 'Component',
    group: 'component',
    summary: 'The agent\'s proposed action. Title (imperative) + rationale + projected impact + 3-way CTA. Role-gated.',
    anatomy: 'Spruce-tinted top border, title, rationale paragraph, embedded ScenarioProjectionCard, footer with Execute / Send for review / Dismiss.',
    props: [{
      name: 'title',
      type: 'string',
      default: 'required',
      notes: 'Imperative: "Reconcile 14 stale CIs".'
    }, {
      name: 'rationale',
      type: 'string',
      default: 'required'
    }, {
      name: 'signals',
      type: 'SignalsPanelProps',
      default: '—'
    }, {
      name: 'projection',
      type: 'ScenarioProjectionCardProps',
      default: '—'
    }, {
      name: 'confidence',
      type: 'number',
      default: '—'
    }, {
      name: 'role',
      type: "'full' | 'review' | 'readonly'",
      default: 'required'
    }, {
      name: 'onExecute',
      type: '() => void',
      default: 'required for role=full'
    }, {
      name: 'onSendForReview',
      type: '() => void',
      default: 'required'
    }, {
      name: 'onDismiss',
      type: '() => void',
      default: 'required'
    }],
    tokens: [{
      name: '--k-spruce-60',
      role: 'Top border accent'
    }, {
      name: '--card',
      role: 'Surface'
    }],
    states: ['default', 'executing', 'success', 'error', 'unauthorized'],
    do: ['Render the projection before allowing Execute.', 'Use imperative title voice.'],
    dont: ['Render without a `rationale`.', 'Allow Execute without first showing the projection.'],
    edgeCases: ['role=review → Execute hidden, Send for review primary.', 'role=readonly → all CTAs hidden, "Request access" banner instead.'],
    related: ['composite-scenario.html', 'primitives-confidence.html']
  },
  'components-execution.html': {
    name: 'Execution timeline',
    tag: 'Component',
    group: 'component',
    summary: 'Vertical timeline of execution steps. Two variants: in-flight (live) with Approve once / Approve all gates, and completed (audit).',
    anatomy: 'Vertical track, status dots per step (success/active/pending/failed), label and timestamps to the right.',
    props: [{
      name: 'steps',
      type: '[{label, status, startedAt, completedAt, error?}]',
      default: 'required'
    }, {
      name: 'mode',
      type: "'live' | 'completed'",
      default: "'completed'"
    }, {
      name: 'onApproveOnce',
      type: '() => void',
      default: '—',
      notes: 'Live mode only.'
    }, {
      name: 'onApproveAll',
      type: '() => void',
      default: '—',
      notes: 'Live mode only.'
    }],
    tokens: [{
      name: '--k-status-success-100',
      role: 'Completed dot'
    }, {
      name: '--k-spruce-60',
      role: 'Active dot'
    }],
    states: ['live', 'completed', 'error', 'paused'],
    do: ['Show failed steps in completed view — never hide them.'],
    dont: ['Re-order steps after start.'],
    related: ['agentic-flow.html']
  },
  /* ---------- Composites ---------- */
  'composite-chat.html': {
    name: 'Chat (composite)',
    tag: 'Composite',
    group: 'composite,agentic',
    summary: 'Conversation surface composed of ChatMessage + AgentStatusBar (sticky top) + inline ToolCallCards + SnapshotCards. The agentic primary surface.',
    anatomy: 'Sticky AgentStatusBar, scrollable message list, inline tool calls, embedded snapshot cards, composer at the bottom.',
    props: [{
      name: 'messages',
      type: 'ChatMessageProps[]',
      default: 'required'
    }, {
      name: 'agentState',
      type: "'thinking' | 'streaming' | 'paused' | 'done'",
      default: "'done'"
    }, {
      name: 'onSend',
      type: '(text) => void',
      default: 'required'
    }, {
      name: 'onPause',
      type: '() => void',
      default: '—'
    }, {
      name: 'role',
      type: "'full' | 'review' | 'readonly'",
      default: "'full'"
    }],
    tokens: [{
      name: 'AI gradient border',
      role: 'Spruce-60 ↔ Warm-Red-50, 28% α'
    }],
    states: ['idle', 'streaming', 'paused', 'awaiting-input', 'error'],
    do: ['Single moving element — pulsing dot, not spinner.', 'Use third person in agent messages.'],
    dont: ['First person in agent voice.', 'Append exclamation marks.'],
    related: ['agentic-states.html', 'ai-modal-chat.html']
  },
  'composite-exec-summary.html': {
    name: 'Executive summary',
    tag: 'Composite',
    group: 'composite',
    summary: 'Narrative + sources + 3-tile KPI row. The default top-of-page composite for executive dashboards.',
    anatomy: 'Title, paragraph (with HighlightLinks to underlying data), 3 KpiTiles below, SourceAttribution footer.',
    props: [{
      name: 'title',
      type: 'string',
      default: 'required'
    }, {
      name: 'narrative',
      type: 'RichContent',
      default: 'required',
      notes: 'Supports HighlightLink inlines.'
    }, {
      name: 'kpis',
      type: 'KpiTileProps[]',
      default: 'required',
      notes: 'Exactly 3.'
    }, {
      name: 'source',
      type: 'SourceAttributionProps',
      default: 'required'
    }],
    states: ['default', 'loading', 'empty', 'stale'],
    do: ['Always 3 KPIs — never 2 or 4.', 'Inline HighlightLinks to enable drill-down.'],
    dont: ['Render without SourceAttribution.'],
    related: ['components-kpi.html', 'primitives-source.html']
  },
  'composite-impact-rollup.html': {
    name: 'Impact rollup',
    tag: 'Composite',
    group: 'composite',
    summary: 'Tree-style rollup: CIs → apps → processes → BUs → domains. Counts and severity flow up the tree.',
    anatomy: 'Tree with collapsible levels, count badges per level, severity tint flowing from leaves to root.',
    props: [{
      name: 'tree',
      type: 'RollupNode',
      default: 'required'
    }, {
      name: 'collapsedLevels',
      type: 'number[]',
      default: '[]'
    }, {
      name: 'onSelect',
      type: '(nodeId) => void',
      default: '—'
    }],
    states: ['default', 'loading', 'empty', 'filtered'],
    do: ['Show counts at every level.'],
    dont: ['Render without a configured rollup hierarchy.'],
    related: ['dag-graph-kit.html']
  },
  'composite-scenario.html': {
    name: 'Scenario projection',
    tag: 'Composite',
    group: 'composite',
    summary: '"If we run this, here\'s what changes." Before / after pair on KPIs with affected entity counts.',
    anatomy: 'Two KpiTiles side by side, arrow between, breakdown row underneath (CIs / apps / processes / BUs / domains).',
    props: [{
      name: 'before',
      type: 'KpiTileProps',
      default: 'required'
    }, {
      name: 'after',
      type: 'KpiTileProps',
      default: 'required'
    }, {
      name: 'affectedCount',
      type: 'number',
      default: 'required'
    }, {
      name: 'breakdown',
      type: '{CIs, apps, processes, BUs, domains}',
      default: 'required'
    }],
    states: ['default', 'loading', 'empty'],
    do: ['Always show the breakdown of affected entities.'],
    dont: ['Show projection without scenario assumptions.'],
    related: ['components-recommendation.html']
  },
  /* ---------- Agentic ---------- */
  'agentic-states.html': {
    name: 'Agentic states',
    tag: 'Live',
    group: 'agentic',
    summary: 'The six live interaction primitives shown in isolation: AgentStatusBar, StepTimeline, ToolCallCard, HumanInputRequest, HandoffCard, StateDeltaToast.',
    anatomy: 'Each renders independently with the AI gradient border (`spruce-60 ↔ warm-red-50`, 28% α) on white. Single moving element only.',
    states: ['idle', 'thinking', 'streaming', 'awaiting-input', 'paused', 'done', 'error'],
    do: ['One AgentStatusBar per surface.', 'Use the pulsing dot — never a spinner.'],
    dont: ['Stack multiple moving elements.', 'Use the AI gradient on non-agentic surfaces.'],
    related: ['agentic-flow.html', 'composite-chat.html']
  },
  'agentic-flow.html': {
    name: 'Agentic flow',
    tag: 'Live',
    group: 'agentic',
    summary: 'A composed live run end-to-end: AgentStatusBar streaming, StepTimeline progressing, ToolCallCard with editable args, HumanInputRequest gate, HandoffCard.',
    anatomy: 'Top: status bar. Right rail: step timeline. Center: tool calls + responses. Modal-blocking: HumanInputRequest when triggered.',
    states: ['streaming', 'awaiting-input', 'paused', 'done'],
    do: ['Gate destructive tools (graph.write, cmdb.write) behind HumanInputRequest.'],
    dont: ['Run destructive tools without a gate.'],
    related: ['agentic-states.html']
  },
  'agentic-states-deck.html': {
    name: 'Agentic deck',
    tag: 'Live',
    group: 'agentic',
    summary: 'Deck-style reference of all live states. Useful for review meetings and engineering handoff.',
    related: ['agentic-states.html']
  },
  'agentic-inbox.html': {
    name: '"Learned from you" inbox',
    tag: 'Agentic',
    group: 'agentic',
    summary: 'Audit trail of every override the user made on agent decisions. The system\'s commitment to explainability.',
    anatomy: 'List of override entries: (timestamp, surface, before → after, rationale). Filter by surface and date.',
    props: [{
      name: 'entries',
      type: 'OverrideEntry[]',
      default: 'required'
    }, {
      name: 'filterBy',
      type: "'surface' | 'date' | 'kind'",
      default: 'date'
    }, {
      name: 'onUndo',
      type: '(entryId) => void',
      default: '—'
    }],
    states: ['default', 'empty', 'filtered'],
    do: ['Every override surfaces here — without exception.'],
    dont: ['Allow agent decisions to bypass the inbox.'],
    related: ['primitives-confidence.html']
  },
  'ai-launch-button.html': {
    name: 'AI launch button',
    tag: 'Agentic',
    group: 'agentic',
    summary: 'Entry point to agentic surfaces. Pill-shaped, Spruce border, pulsing dot, "Ask agent" label.',
    anatomy: '40px height, fully rounded, leading pulsing dot, label, optional shortcut hint on the right.',
    props: [{
      name: 'label',
      type: 'string',
      default: '"Ask agent"'
    }, {
      name: 'shortcut',
      type: 'string',
      default: '—'
    }, {
      name: 'onLaunch',
      type: '() => void',
      default: 'required'
    }],
    states: ['default', 'hover', 'active', 'unauthorized'],
    do: ['Place in the global header, top-right.'],
    dont: ['Use a sparkle icon.'],
    related: ['ai-modal-chat.html']
  },
  'ai-modal-chat.html': {
    name: 'AI modal chat',
    tag: 'Agentic',
    group: 'agentic',
    summary: 'Modal-form chat surface with tool calls. Used as the entry experience from the AI launch button.',
    related: ['composite-chat.html', 'ai-launch-button.html']
  },
  'ai-loader.html': {
    name: 'AI loader',
    tag: 'Agentic',
    group: 'agentic',
    summary: 'Drifting dot-field with Warm Red + Spruce blob morph. The system\'s canonical "agent is working" loader. Replaces all spinners on agentic surfaces.',
    anatomy: 'Two large radial gradient blobs (Warm Red 50 + Spruce 60, 28% α) animating position; dot-field overlay drifting at 0.5x.',
    states: ['idle', 'active'],
    do: ['Use on agentic surfaces only.', 'Pair with a state label (Sketching it out / Drafting / Resolving).'],
    dont: ['Use as a generic page loader.', 'Stack with a spinner.'],
    related: ['agentic-states.html']
  },
  'ai-chat-history.html': {
    name: 'AI chat history',
    tag: 'Agentic',
    group: 'agentic',
    summary: 'Past conversations rail. Pinned, recent, archived sections. Each entry shows title + last-active timestamp.',
    related: ['composite-chat.html', 'ai-modal-chat.html']
  },
  'ai-feedback-sources.html': {
    name: 'AI feedback / sources',
    tag: 'Agentic',
    group: 'agentic',
    summary: 'Inline thumbs / sources affordance under agent messages. Clicking sources opens the SourceAttribution popover.',
    related: ['primitives-source.html', 'composite-chat.html']
  },
  /* ---------- Graph ---------- */
  'dag-graph-kit.html': {
    name: 'DAG & graph kit',
    tag: 'Graph',
    group: 'composite',
    summary: 'Investigation surface kit: 3 LOD node atoms (pill / card / expanded), 9 semantic node types, 8 lifecycle states, 4 edge styles, 4 layouts (DAG-h, DAG-v, radial, force).',
    anatomy: 'Canvas with pan/zoom, minimap, legend, left action rail, top/bottom chrome, right Workflow Event Log. Layout switcher in the toolbar.',
    props: [{
      name: 'nodes',
      type: 'GraphNode[]',
      default: 'required'
    }, {
      name: 'edges',
      type: 'GraphEdge[]',
      default: 'required'
    }, {
      name: 'layout',
      type: "'dag-h' | 'dag-v' | 'radial' | 'force'",
      default: "'dag-h'"
    }, {
      name: 'lod',
      type: "'pill' | 'card' | 'expanded'",
      default: 'auto-by-zoom'
    }, {
      name: 'dataset',
      type: "'workflow' | 'ontology'",
      default: "'workflow'"
    }, {
      name: 'onSelect',
      type: '(nodeId) => void',
      default: '—'
    }],
    states: ['default', 'loading', 'empty', 'error', 'filtered'],
    do: ['Auto-switch LOD at zoom thresholds.', 'Show the minimap on canvases > 8 nodes.'],
    dont: ['Bake layout into nodes.', 'Hide the minimap on big canvases.'],
    related: ['template-investigation.html', 'composite-impact-rollup.html']
  },
  /* ---------- Templates ---------- */
  'template-dashboard.html': {
    name: 'Dashboard template',
    tag: 'Template',
    group: 'template',
    summary: 'Page shell: header + KpiGrid + 2-column composite area + ExecutionTimeline rail.',
    anatomy: 'Header (60px) → KpiGrid (3 tiles) → 2-col grid (composites) → right rail (timeline).',
    related: ['components-kpi.html']
  },
  'template-triage.html': {
    name: 'Triage template',
    tag: 'Template',
    group: 'template',
    summary: 'Page shell: filter rail (left) + FindingCard list (center) + InspectorDrawer (right).',
    anatomy: 'Filter rail (240px) → finding list (flex) → drawer (320–480px).',
    related: ['components-badges.html']
  },
  'template-investigation.html': {
    name: 'Investigation template',
    tag: 'Template',
    group: 'template',
    summary: 'Page shell: GraphCanvas centerpiece + GraphInspector right + WorkflowEventLog.',
    related: ['dag-graph-kit.html']
  },
  'template-review.html': {
    name: 'Review queue template',
    tag: 'Template',
    group: 'template',
    summary: 'One template, three uses: Access Review / Change Request / Correction Request. Filterable table + detail drawer + approve/reject/defer + audit trail.',
    related: ['components-table.html']
  },
  'template-conversation.html': {
    name: 'Conversation template',
    tag: 'Template',
    group: 'template',
    summary: 'Full-height ChatMessage stream with embedded SnapshotCards. The agentic-first page.',
    related: ['composite-chat.html']
  },
  /* ---------- States ---------- */
  'states-matrix.html': {
    name: 'States matrix',
    tag: 'States',
    group: 'state',
    summary: 'All 8 states for every component: default, loading, empty, filtered-empty, error, stale, unauthorized, in-flight. The system\'s hard contract — every component must implement all 8.',
    anatomy: 'Grid of (component × state). Skeleton loading, empty illustrations, error banner, stale tint, unauthorized fallback.',
    states: ['default', 'loading', 'empty', 'filtered-empty', 'error', 'stale', 'unauthorized', 'in-flight'],
    do: ['Implement all 8 states before merging a new component.'],
    dont: ['Ship without the unauthorized state — show what they CAN see.'],
    related: ['components-status-banner.html']
  },
  /* ---------- Brand ---------- */
  'brand-logo.html': {
    name: 'Brand logo',
    tag: 'Brand',
    group: 'brand',
    summary: 'Kyndryl wordmark. Clear-space rules and minimum size codified.',
    anatomy: 'Lowercase wordmark. Clear-space = height of the "k". Minimum size = 16px on screen.',
    do: ['Use in the global header at 16–20px height.', 'Maintain clear-space.'],
    dont: ['Tint the wordmark.', 'Stack with a sparkle icon.'],
    related: ['brand-icons.html']
  },
  'brand-icons.html': {
    name: 'Icon library',
    tag: 'Brand',
    group: 'brand',
    summary: '17 Shidoka symbols mapped to roles: severity, status, agentic, navigation, action.',
    anatomy: '24×24 stroke icons. Stroke 1.5px, no fill. Color comes from `currentColor`.',
    do: ['Use stroke icons only.', 'Inherit color from `currentColor`.'],
    dont: ['Mix stroke and fill icons.', 'Use emoji as a stand-in.'],
    related: ['brand-logo.html']
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "handoff/specs.js", error: String((e && e.message) || e) }); }

// preview/agentic.js
try { (() => {
/* Agentic-primitive popover controller.
   Wires up .agentic triggers to their sibling .agentic-pop panels, handles
   destructive confirm steps, and shows the "learned from you" toast on
   teaching-signal actions. Shared by all primitive preview cards. */
(function () {
  const OPEN_ATTR = 'aria-expanded';
  let currentTrigger = null;
  function closeAll() {
    document.querySelectorAll('.agentic[aria-expanded="true"]').forEach(el => {
      el.setAttribute(OPEN_ATTR, 'false');
      const pop = el.parentElement.querySelector('.agentic-pop');
      if (pop) pop.removeAttribute('data-open');
    });
    currentTrigger = null;
  }
  function openTrigger(trigger) {
    if (currentTrigger && currentTrigger !== trigger) closeAll();
    trigger.setAttribute(OPEN_ATTR, 'true');
    const pop = trigger.parentElement.querySelector('.agentic-pop');
    if (pop) {
      pop.setAttribute('data-open', 'true');
      // Reset any open confirm states
      pop.querySelectorAll('.ap-confirm').forEach(c => c.hidden = true);
      pop.querySelectorAll('.ap-actions').forEach(c => c.hidden = false);
    }
    currentTrigger = trigger;
  }
  function toast(msg) {
    let t = document.querySelector('.agentic-toast');
    if (!t) {
      t = document.createElement('div');
      t.className = 'agentic-toast';
      t.innerHTML = '<span class="at-dot"></span><span class="at-msg"></span>' + '<button type="button" data-act="undo">Undo</button>' + '<button type="button" data-act="inbox">View inbox</button>';
      document.body.appendChild(t);
      t.addEventListener('click', e => {
        const act = e.target.getAttribute && e.target.getAttribute('data-act');
        if (act) t.removeAttribute('data-show');
      });
    }
    t.querySelector('.at-msg').textContent = msg;
    t.setAttribute('data-show', 'true');
    clearTimeout(t._hideT);
    t._hideT = setTimeout(() => t.removeAttribute('data-show'), 3800);
  }
  document.addEventListener('click', e => {
    const trigger = e.target.closest('.agentic');
    if (trigger) {
      e.preventDefault();
      const open = trigger.getAttribute(OPEN_ATTR) === 'true';
      if (open) closeAll();else openTrigger(trigger);
      return;
    }
    // action inside popover
    const action = e.target.closest('.ap-action');
    if (action) {
      const destructive = action.classList.contains('is-destructive');
      const pop = action.closest('.agentic-pop');
      if (destructive) {
        const confirm = pop.querySelector('.ap-confirm[data-for="' + action.dataset.act + '"]');
        if (confirm) {
          pop.querySelectorAll('.ap-actions').forEach(c => c.hidden = true);
          confirm.hidden = false;
          return;
        }
      }
      const label = action.dataset.toast || action.textContent.trim().split('\n')[0];
      closeAll();
      toast(label);
      return;
    }
    // confirm buttons
    const confirmBtn = e.target.closest('.ap-confirm button');
    if (confirmBtn) {
      const isPrimary = confirmBtn.classList.contains('ap-primary');
      const pop = confirmBtn.closest('.agentic-pop');
      closeAll();
      if (isPrimary) {
        toast(confirmBtn.dataset.toast || 'Taught the agent · added to inbox');
      }
      return;
    }
    // outside click closes
    if (currentTrigger && !e.target.closest('.agentic-pop')) closeAll();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAll();
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "preview/agentic.js", error: String((e && e.message) || e) }); }

// preview/deck-stage.js
try { (() => {
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const pad2 = n => String(n).padStart(2, '0');
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
    }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    /* Tap zones for mobile — back/forward thirds like Stories.
       Transparent, no visible UI, don't block the overlay. */
    .tapzones {
      position: fixed;
      inset: 0;
      display: flex;
      z-index: 2147482000;
      pointer-events: none;
    }
    .tapzone {
      flex: 1;
      pointer-events: auto;
      -webkit-tap-highlight-color: transparent;
    }
    /* Only activate tap zones on coarse pointers (touch devices). */
    @media (hover: hover) and (pointer: fine) {
      .tapzones { display: none; }
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      ::slotted(*:last-child) {
        break-after: auto;
        page-break-after: auto;
      }
      .overlay, .tapzones { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTapBack = this._onTapBack.bind(this);
      this._onTapForward = this._onTapForward.bind(this);
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      // Initial collection + layout happens via slotchange, which fires on mount.
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        this._fit();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Tap zones (mobile): left third = back, right third = forward.
      const tapzones = document.createElement('div');
      tapzones.className = 'tapzones export-hidden';
      tapzones.setAttribute('aria-hidden', 'true');
      tapzones.setAttribute('data-noncommentable', '');
      const tzBack = document.createElement('div');
      tzBack.className = 'tapzone tapzone--back';
      const tzMid = document.createElement('div');
      tzMid.className = 'tapzone tapzone--mid';
      tzMid.style.pointerEvents = 'none';
      const tzFwd = document.createElement('div');
      tzFwd.className = 'tapzone tapzone--fwd';
      tzBack.addEventListener('click', this._onTapBack);
      tzFwd.addEventListener('click', this._onTapForward);
      tapzones.append(tzBack, tzMid, tzFwd);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-noncommentable', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._go(this._index - 1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._go(this._index + 1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));
      this._root.append(style, stage, tapzones, overlay);
      this._canvas = canvas;
      this._slot = slot;
      this._overlay = overlay;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }';
    }
    _onSlotChange() {
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        // Determine a label for comment flow: prefer explicit data-label,
        // then an existing data-screen-label, then first heading, else "Slide".
        let label = slide.getAttribute('data-label');
        if (!label) {
          const existing = slide.getAttribute('data-screen-label');
          if (existing) {
            // Strip any leading number the author may have included.
            label = existing.replace(/^\s*\d+\s*/, '').trim() || existing;
          }
        }
        if (!label) {
          const h = slide.querySelector('h1, h2, h3, [data-title]');
          if (h) label = (h.textContent || '').trim().slice(0, 40);
        }
        if (!label) label = 'Slide';
        slide.setAttribute('data-screen-label', `${pad2(n)} ${label}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
    }
    _loadNotes() {
      const tag = document.getElementById('speaker-notes');
      if (!tag) {
        this._notes = [];
        return;
      }
      try {
        const parsed = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(parsed)) this._notes = parsed;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
        this._notes = [];
      }
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      if (!this._overlay) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _fit() {
      if (!this._canvas) return;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        return;
      }
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onTapBack(e) {
      e.preventDefault();
      this._go(this._index - 1, 'tap');
    }
    _onTapForward(e) {
      e.preventDefault();
      this._go(this._index + 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._go(this._index + 1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._go(this._index - 1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._go(this._index + 1, 'api');
    }
    prev() {
      this._go(this._index - 1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "preview/deck-stage.js", error: String((e && e.message) || e) }); }

// storybook-static/sb.js
try { (() => {
/* =============================================================
   Storybook host — Kyndryl Agentic Framework
   ============================================================= */
(function () {
  const STORIES = window.STORIES || [];
  const $ = id => document.getElementById(id);

  // ---- State ----
  const state = {
    storyId: null,
    tab: "canvas",
    zoom: 1,
    bg: "dotted",
    theme: "light",
    addonTab: "controls",
    args: {},
    actions: []
  };

  // ---- URL hash ----
  function readHash() {
    const m = location.hash.match(/^#\/(?:story|docs)\/([^?]+)/);
    if (m) state.storyId = decodeURIComponent(m[1]);
    if (location.hash.startsWith("#/docs/")) state.tab = "docs";
  }
  function writeHash() {
    if (!state.storyId) return;
    const prefix = state.tab === "docs" ? "docs" : "story";
    history.replaceState(null, "", `#/${prefix}/${state.storyId}`);
  }

  // ---- Tree ----
  function groupBy(arr, key) {
    const out = {};
    arr.forEach(s => {
      (out[s[key]] = out[s[key]] || []).push(s);
    });
    return out;
  }
  function renderTree(filter) {
    const tree = $("sb-tree");
    tree.innerHTML = "";
    const f = (filter || "").trim().toLowerCase();
    let visible = STORIES;
    if (f) {
      visible = STORIES.filter(s => (s.group + s.component + s.name).toLowerCase().includes(f));
    }
    if (!visible.length) {
      tree.innerHTML = '<div class="sb-empty">No stories match.</div>';
      return;
    }
    const byGroup = groupBy(visible, "group");
    const groupOrder = ["Welcome", "Foundations", "Primitives", "Agentic", "Composites", "Templates", "States", "Kits"];
    const groups = Object.keys(byGroup).sort((a, b) => {
      const ai = groupOrder.indexOf(a),
        bi = groupOrder.indexOf(b);
      return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });
    groups.forEach(g => {
      const groupEl = document.createElement("div");
      groupEl.className = "sb-group";
      const head = document.createElement("button");
      head.className = "sb-group-header";
      head.innerHTML = `<span class="sb-caret">▾</span><span>${g}</span>`;
      head.addEventListener("click", () => {
        groupEl.dataset.collapsed = groupEl.dataset.collapsed === "true" ? "false" : "true";
      });
      groupEl.appendChild(head);
      const body = document.createElement("div");
      body.className = "sb-group-body";
      const byComp = groupBy(byGroup[g], "component");
      Object.keys(byComp).forEach(c => {
        const compEl = document.createElement("div");
        compEl.className = "sb-component";
        const ch = document.createElement("button");
        ch.className = "sb-component-header";
        ch.innerHTML = `<span class="sb-caret">▾</span>
          <svg class="sb-component-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <rect x="2.5" y="2.5" width="11" height="11" rx="2"/>
            <path d="M2.5 6.5h11M6.5 2.5v11"/>
          </svg>
          <span>${c}</span>`;
        ch.addEventListener("click", () => {
          compEl.dataset.collapsed = compEl.dataset.collapsed === "true" ? "false" : "true";
        });
        compEl.appendChild(ch);
        const compBody = document.createElement("div");
        compBody.className = "sb-component-body";
        byComp[c].forEach(s => {
          const btn = document.createElement("button");
          btn.className = "sb-story" + (s.id === state.storyId ? " is-active" : "");
          btn.dataset.id = s.id;
          btn.innerHTML = `<span class="sb-story-dot"></span><span>${s.name}</span>`;
          btn.addEventListener("click", () => selectStory(s.id));
          compBody.appendChild(btn);
        });
        compEl.appendChild(compBody);
        body.appendChild(compEl);
      });
      groupEl.appendChild(body);
      tree.appendChild(groupEl);
    });
  }
  function selectStory(id) {
    state.storyId = id;
    state.actions = [];
    const story = STORIES.find(s => s.id === id);
    state.args = Object.assign({}, story && story.args);
    writeHash();
    document.querySelectorAll(".sb-story").forEach(el => {
      el.classList.toggle("is-active", el.dataset.id === id);
    });
    renderStage();
    renderAddons();
  }

  // ---- Stage ----
  function renderStage() {
    const story = STORIES.find(s => s.id === state.storyId);
    if (!story) return;
    if (state.tab === "canvas") {
      $("sb-canvas-wrap").hidden = false;
      $("sb-docs").hidden = true;
      const url = withArgs(story.iframe, state.args);
      const frame = $("sb-canvas");
      if (frame.dataset.url !== url) {
        frame.dataset.url = url;
        frame.src = url;
      }
      const scaler = $("sb-canvas-scaler");
      scaler.style.maxWidth = "100%";
      scaler.style.width = "100%";
      scaler.style.height = "100%";
      scaler.style.minHeight = "100%";
      $("sb-canvas").style.width = "100%";
      $("sb-canvas").style.height = "100%";
      scaler.style.transform = `scale(${state.zoom})`;
      scaler.style.transformOrigin = "top left";
    } else {
      $("sb-canvas-wrap").hidden = true;
      $("sb-docs").hidden = false;
      $("sb-docs").innerHTML = renderDocs(story);
    }
    $("sb-zoom-readout").textContent = Math.round(state.zoom * 100) + "%";
    document.querySelectorAll(".sb-tab").forEach(el => {
      el.classList.toggle("is-active", el.dataset.tab === state.tab);
    });
  }
  function withArgs(url, args) {
    if (!args || !Object.keys(args).length) return url;
    const u = new URL(url, location.href);
    Object.entries(args).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== "") u.searchParams.set(k, v);
    });
    return u.pathname + u.search + u.hash;
  }

  // ---- Docs ----
  function renderDocs(story) {
    const d = story.docs || {};
    const eyebrow = d.eyebrow || (story.group || "").toUpperCase();
    const title = `${story.component} · ${story.name}`;
    const lead = d.lead || "";
    const overview = (d.overview || []).map(p => `<p>${p}</p>`).join("");
    const when = (d.whenToUse || []).map(p => `<li>${p}</li>`).join("");
    const dont = (d.dont || []).map(p => `<div class="sb-dont"><strong>Don't</strong>${p}</div>`).join("");
    const dos = (d.do || []).map(p => `<div class="sb-do"><strong>Do</strong>${p}</div>`).join("");
    const a11y = (d.a11y || []).map(p => `<div class="sb-a11y-row">${p}</div>`).join("");
    const argRows = Object.entries(story.argTypes || {}).map(([k, t]) => {
      const opts = (t.options || []).join(" · ");
      return `<tr><td><code>${k}</code></td><td>${t.control}${opts ? " — " + opts : ""}</td><td><code>${t.default ?? ""}</code></td></tr>`;
    }).join("");
    return `
      <div class="sb-docs-inner">
        <div class="sb-docs-eyebrow">${eyebrow}</div>
        <h1>${title}</h1>
        ${lead ? `<p class="sb-docs-lead">${lead}</p>` : ""}
        ${overview ? `<h2>Overview</h2>${overview}` : ""}
        <h2>Canvas</h2>
        <div class="sb-docs-canvas"><iframe src="${withArgs(story.iframe, story.args || {})}" style="height:${story.height || 600}px"></iframe></div>
        ${when ? `<h2>When to use</h2><ul>${when}</ul>` : ""}
        ${dos || dont ? `<h2>Do / Don't</h2><div class="sb-docs-grid">${dos}${dont}</div>` : ""}
        ${a11y ? `<h2>Accessibility</h2>${a11y}` : ""}
        ${argRows ? `<h2>API</h2><table style="width:100%;border-collapse:collapse;font-size:12.5px">
          <thead><tr style="text-align:left;color:var(--fg-muted);font-weight:500;border-bottom:1px solid var(--border-1)"><th style="padding:6px 8px">Prop</th><th>Type</th><th>Default</th></tr></thead>
          <tbody>${argRows}</tbody>
        </table>` : ""}
      </div>`;
  }

  // ---- Addons ----
  function renderAddons() {
    const story = STORIES.find(s => s.id === state.storyId);
    if (!story) return;
    // Controls
    const controlsPane = $("sb-addon-controls");
    const argTypes = story.argTypes || {};
    if (!Object.keys(argTypes).length) {
      controlsPane.innerHTML = '<div class="sb-empty-pane">This story has no controls. Stories with variants expose controls here — try a Primitive (e.g. SeverityPill, ConfidenceBadge).</div>';
    } else {
      controlsPane.innerHTML = Object.entries(argTypes).map(([k, t]) => renderControl(k, t, state.args[k])).join("");
      controlsPane.querySelectorAll("[data-control]").forEach(el => {
        const name = el.dataset.control;
        const kind = el.dataset.kind;
        if (kind === "radio") {
          el.querySelectorAll(".sb-radio-pill").forEach(p => {
            p.addEventListener("click", () => updateArg(name, p.dataset.value));
          });
        } else if (kind === "toggle") {
          el.addEventListener("click", () => updateArg(name, el.getAttribute("aria-checked") !== "true"));
        } else {
          el.addEventListener("input", () => updateArg(name, el.type === "number" ? Number(el.value) : el.value));
          el.addEventListener("change", () => updateArg(name, el.type === "number" ? Number(el.value) : el.value));
        }
      });
    }
    // Source
    $("sb-addon-source").innerHTML = '<pre><code>' + escapeHtml(`<iframe src="${story.iframe}"></iframe>\n\n// Args:\n${JSON.stringify(state.args, null, 2)}`) + '</code></pre>';
    // A11y
    const a = story.docs && story.docs.a11y || ["Color is paired with text or icon — no color-only signalling.", "Focus rings inherit the Spruce ring token (`--ring`)."];
    $("sb-addon-a11y").innerHTML = a.map(x => `<div class="sb-a11y-row">${x}</div>`).join("");
    // Actions
    renderActions();
  }
  function renderControl(name, type, value) {
    const v = value ?? type.default ?? "";
    if (type.control === "radio" || type.control === "select") {
      if (type.control === "select") {
        return `<div class="sb-control-row"><span class="sb-control-label">${name}</span>
          <select data-control="${name}" data-kind="select">
            ${type.options.map(o => `<option value="${o}" ${o == v ? "selected" : ""}>${o || "(none)"}</option>`).join("")}
          </select></div>`;
      }
      return `<div class="sb-control-row"><span class="sb-control-label">${name}</span>
        <span class="sb-radio-group" data-control="${name}" data-kind="radio">
          ${type.options.map(o => `<button class="sb-radio-pill ${o == v ? "is-active" : ""}" data-value="${o}">${o}</button>`).join("")}
        </span></div>`;
    }
    if (type.control === "range") {
      return `<div class="sb-control-row"><span class="sb-control-label">${name}</span>
        <input data-control="${name}" data-kind="range" type="range" min="${type.min}" max="${type.max}" step="${type.step || 1}" value="${v}"></div>`;
    }
    if (type.control === "number") {
      return `<div class="sb-control-row"><span class="sb-control-label">${name}</span>
        <input data-control="${name}" data-kind="number" type="number" value="${v}"></div>`;
    }
    if (type.control === "boolean") {
      return `<div class="sb-control-row"><span class="sb-control-label">${name}</span>
        <button class="sb-toggle" data-control="${name}" data-kind="toggle" aria-checked="${v ? "true" : "false"}"></button></div>`;
    }
    // text
    return `<div class="sb-control-row"><span class="sb-control-label">${name}</span>
      <input data-control="${name}" data-kind="text" type="text" value="${v ?? ""}"></div>`;
  }
  function updateArg(name, value) {
    state.args[name] = value;
    logAction(name, value);
    renderStage();
    renderAddons();
  }
  function logAction(name, value) {
    state.actions.unshift({
      t: new Date().toLocaleTimeString(),
      name,
      value
    });
    state.actions = state.actions.slice(0, 12);
  }
  function renderActions() {
    const pane = $("sb-addon-actions");
    if (!state.actions.length) {
      pane.innerHTML = '<div class="sb-empty-pane">Actions will log here as you change controls. e.g. <code>severity = "HIGH"</code></div>';
      return;
    }
    pane.innerHTML = state.actions.map(a => `<div class="sb-action-row">
         <span class="sb-action-time">${a.t}</span>
         <span class="sb-action-name">${a.name}</span>
         <span>= ${escapeHtml(JSON.stringify(a.value))}</span>
       </div>`).join("");
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[c]);
  }

  // ---- Wiring ----
  function wire() {
    $("sb-search").addEventListener("input", e => renderTree(e.target.value));
    document.addEventListener("keydown", e => {
      if (e.key === "/" && document.activeElement !== $("sb-search")) {
        e.preventDefault();
        $("sb-search").focus();
      }
    });
    document.querySelectorAll(".sb-tab").forEach(b => {
      b.addEventListener("click", () => {
        state.tab = b.dataset.tab;
        writeHash();
        renderStage();
      });
    });
    $("sb-zoom-in").addEventListener("click", () => {
      state.zoom = Math.min(2, state.zoom + 0.1);
      renderStage();
    });
    $("sb-zoom-out").addEventListener("click", () => {
      state.zoom = Math.max(0.4, state.zoom - 0.1);
      renderStage();
    });
    $("sb-zoom-reset").addEventListener("click", () => {
      state.zoom = 1;
      renderStage();
    });
    $("sb-bg-toggle").addEventListener("click", () => {
      const order = ["dotted", "grid", "white", "dark"];
      state.bg = order[(order.indexOf(state.bg) + 1) % order.length];
      $("sb-canvas-wrap").dataset.bg = state.bg;
    });
    $("sb-grid-toggle").addEventListener("click", () => {
      $("sb-canvas-wrap").dataset.bg = $("sb-canvas-wrap").dataset.bg === "grid" ? "dotted" : "grid";
      state.bg = $("sb-canvas-wrap").dataset.bg;
    });
    $("sb-theme-toggle").addEventListener("click", () => {
      state.theme = state.theme === "light" ? "dark" : "light";
      document.body.dataset.theme = state.theme;
      $("sb-theme-readout").textContent = state.theme === "light" ? "Light" : "Dark";
    });
    $("sb-fullscreen").addEventListener("click", () => {
      const story = STORIES.find(s => s.id === state.storyId);
      if (story) window.open(withArgs(story.iframe, state.args), "_blank");
    });
    document.querySelectorAll(".sb-addon-tab").forEach(b => {
      b.addEventListener("click", () => {
        state.addonTab = b.dataset.addon;
        document.querySelectorAll(".sb-addon-tab").forEach(x => x.classList.toggle("is-active", x === b));
        document.querySelectorAll(".sb-addon-pane").forEach(p => {
          p.classList.toggle("is-active", p.id === "sb-addon-" + state.addonTab);
        });
      });
    });
    $("sb-addons-collapse").addEventListener("click", () => {
      const m = $("sb-main");
      m.dataset.addonsCollapsed = m.dataset.addonsCollapsed === "true" ? "false" : "true";
    });
    window.addEventListener("hashchange", () => {
      readHash();
      selectStory(state.storyId);
    });
  }

  // ---- Boot ----
  readHash();
  if (!state.storyId) state.storyId = "welcome--introduction";
  renderTree("");
  selectStory(state.storyId);
  wire();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook-static/sb.js", error: String((e && e.message) || e) }); }

// storybook-static/stories.js
try { (() => {
/* =============================================================
   Stories registry — Kyndryl Agentic Framework
   -------------------------------------------------------------
   Each story is a flat record. The sidebar groups them by
   `group` then `component`. Stories load by setting the
   canvas iframe src to `iframe`. Optional fields:
     - args: initial control state
     - argTypes: control schema { name: {control, options, default} }
     - docs: rich docs object (overview, when, dont, do, a11y)
     - source: code snippet shown in the Source addon
     - height: preferred canvas height in px
   ============================================================= */
window.STORIES = [/* ---------- WELCOME ---------- */
{
  id: "welcome--introduction",
  title: "Welcome / Introduction",
  group: "Welcome",
  component: "Welcome",
  name: "Introduction",
  iframe: "stories/welcome.html",
  height: 1200,
  docs: {
    eyebrow: "DESIGN SYSTEM",
    lead: "A design system derived from the Kyndryl Agentic Framework — CMDB Data Quality Next.js workspace. It captures the tokens, composite patterns, and UX themes the app uses to surface CMDB trust posture, triage stale or orphaned CIs, drive reconciliation and correction-request workflows, and investigate business impact through a knowledge graph.",
    overview: ["Aligned to Shidoka (Bridge) — Kyndryl's foundation design system.", "Warm Red #FF462D is the brand accent; Spruce #29707A is the interactive workhorse.", "Calm, dense, evidence-first: every number has a reason, every recommendation has provenance, every action shows its blast radius before it runs."]
  }
}, /* ---------- FOUNDATIONS ---------- */
{
  id: "foundations-colors--brand",
  group: "Foundations",
  component: "Colors",
  name: "Brand",
  iframe: "../preview/colors-brand.html",
  height: 600
}, {
  id: "foundations-colors--slate",
  group: "Foundations",
  component: "Colors",
  name: "Neutrals",
  iframe: "../preview/colors-slate.html",
  height: 600
}, {
  id: "foundations-colors--severity",
  group: "Foundations",
  component: "Colors",
  name: "Severity",
  iframe: "../preview/colors-severity.html",
  height: 500
}, {
  id: "foundations-colors--status",
  group: "Foundations",
  component: "Colors",
  name: "Status RAG",
  iframe: "../preview/colors-status.html",
  height: 500
}, {
  id: "foundations-colors--chart",
  group: "Foundations",
  component: "Colors",
  name: "Chart palette",
  iframe: "../preview/colors-chart.html",
  height: 600
}, {
  id: "foundations-type--display",
  group: "Foundations",
  component: "Type",
  name: "Display",
  iframe: "../preview/type-display.html",
  height: 500
}, {
  id: "foundations-type--body",
  group: "Foundations",
  component: "Type",
  name: "Body",
  iframe: "../preview/type-body.html",
  height: 500
}, {
  id: "foundations-spacing--scale",
  group: "Foundations",
  component: "Spacing",
  name: "Scale",
  iframe: "../preview/spacing-scale.html",
  height: 400
}, {
  id: "foundations-spacing--radii",
  group: "Foundations",
  component: "Spacing",
  name: "Radii",
  iframe: "../preview/spacing-radii.html",
  height: 320
}, {
  id: "foundations-spacing--elevation",
  group: "Foundations",
  component: "Spacing",
  name: "Elevation",
  iframe: "../preview/spacing-elevation.html",
  height: 320
}, {
  id: "foundations-icons--library",
  group: "Foundations",
  component: "Icons",
  name: "Library",
  iframe: "../preview/brand-icons.html",
  height: 600
}, {
  id: "foundations-brand--logo",
  group: "Foundations",
  component: "Brand",
  name: "Logo",
  iframe: "../preview/brand-logo.html",
  height: 360
}, /* ---------- PRIMITIVES ---------- */
{
  id: "primitives-severitypill--default",
  group: "Primitives",
  component: "SeverityPill",
  name: "Default",
  iframe: "stories/primitive-severity-pill.html",
  height: 220,
  args: {
    severity: "CRITICAL",
    label: ""
  },
  argTypes: {
    severity: {
      control: "radio",
      options: ["CRITICAL", "HIGH", "MEDIUM", "LOW"],
      default: "CRITICAL"
    },
    label: {
      control: "text",
      default: ""
    }
  },
  docs: {
    eyebrow: "PRIMITIVE",
    lead: "Severity is the canonical taxonomy for triage. SeverityPill renders a small uppercase chip whose color and label come from the same token.",
    whenToUse: ["Triage rows, finding cards, KPI tiles where the user has to skim severity quickly.", "Always paired with an icon or label — never color-only (a11y rule)."],
    dont: ["Don't invent custom severities. The taxonomy is fixed: CRITICAL · HIGH · MEDIUM · LOW.", "Don't use it as a generic tag. For non-severity status use StatusBadge."],
    do: ["Pair with a count or an icon when sitting next to other pills.", "Use sentence case in surrounding copy — only the pill itself is uppercase."],
    a11y: ["Color is paired with text — passes WCAG 1.4.1 (not color-only).", "Min hit area only required when interactive. Static pills don't need 44px."]
  }
}, {
  id: "primitives-confidencebadge--default",
  group: "Primitives",
  component: "ConfidenceBadge",
  name: "Default",
  iframe: "stories/primitive-confidence-badge.html",
  height: 240,
  args: {
    value: 92,
    role: "full"
  },
  argTypes: {
    value: {
      control: "range",
      min: 0,
      max: 100,
      step: 1,
      default: 92
    },
    role: {
      control: "radio",
      options: ["full", "review", "readonly"],
      default: "full"
    }
  },
  docs: {
    eyebrow: "AGENTIC PRIMITIVE",
    lead: "Confidence the agent has in a recommendation. Click to override, ask for more evidence, snooze, or teach the agent.",
    whenToUse: ["Anywhere the agent surfaces a derived number — recommendations, scoring, scenario projections."],
    dont: ["Don't invent confidence values without an underlying reason paragraph (`Rationale`)."],
    do: ["Pair with `SourceAttribution` so users can trace the evidence."],
    a11y: ["Popover is keyboard-reachable; Esc closes; focus returns to the badge."]
  }
}, {
  id: "primitives-freshnessbadge--default",
  group: "Primitives",
  component: "FreshnessBadge",
  name: "Default",
  iframe: "stories/primitive-freshness-badge.html",
  height: 240,
  args: {
    ageDays: 3,
    threshold: 7
  },
  argTypes: {
    ageDays: {
      control: "range",
      min: 0,
      max: 60,
      step: 1,
      default: 3
    },
    threshold: {
      control: "range",
      min: 1,
      max: 30,
      step: 1,
      default: 7
    }
  },
  docs: {
    eyebrow: "AGENTIC PRIMITIVE",
    lead: "How fresh the underlying data is. Crosses into a warning state once `ageDays > threshold`.",
    whenToUse: ["Every card backed by data: KPIs, recommendations, graph nodes."],
    dont: ["Don't approximate (\"recent\"). Always show a number or a relative time."],
    do: ["Force-refresh, change threshold, notify owner — all available in the popover."],
    a11y: ["Stale state announces to screen readers via `aria-live=\"polite\"` when threshold is crossed."]
  }
}, {
  id: "primitives-deltaindicator--default",
  group: "Primitives",
  component: "DeltaIndicator",
  name: "Default",
  iframe: "stories/primitive-delta-indicator.html",
  height: 220,
  args: {
    delta: 3.4,
    unit: "%",
    direction: "up"
  },
  argTypes: {
    delta: {
      control: "number",
      default: 3.4
    },
    unit: {
      control: "select",
      options: ["%", "pts", "CIs", ""],
      default: "%"
    },
    direction: {
      control: "radio",
      options: ["up", "down"],
      default: "up"
    }
  },
  docs: {
    eyebrow: "PRIMITIVE",
    lead: "Signed delta vs a reference period. Always prefixed with + or − and an arrow icon.",
    whenToUse: ["KPI tiles, scenario projections, anywhere a value is moving."],
    dont: ["Don't drop the sign or unit. \"3.4\" alone is ambiguous."],
    do: ["Color the arrow according to whether the direction is desirable, not the sign."]
  }
}, {
  id: "primitives-statusbadge--default",
  group: "Primitives",
  component: "StatusBadge",
  name: "Default",
  iframe: "stories/primitive-status-badge.html",
  height: 240,
  args: {
    status: "Approved"
  },
  argTypes: {
    status: {
      control: "radio",
      options: ["Pending", "Approved", "Executed", "Rejected", "Healthy", "Degraded", "Impacted", "Unknown"],
      default: "Approved"
    }
  },
  docs: {
    eyebrow: "PRIMITIVE",
    lead: "Workflow and graph status chip. Sentence case (not uppercase like SeverityPill).",
    whenToUse: ["Review queue rows, graph node tooltips, audit trails."],
    dont: ["Don't use it for severity — that's SeverityPill."]
  }
}, {
  id: "primitives-sourceattribution--default",
  group: "Primitives",
  component: "SourceAttribution",
  name: "Default",
  iframe: "../preview/primitives-source.html",
  height: 280,
  docs: {
    eyebrow: "AGENTIC PRIMITIVE",
    lead: "Provenance footer that lives at the bottom of any agent-derived card. Dataset · timestamp · confidence.",
    whenToUse: ["Every card the agent generates."],
    dont: ["Don't bury this. Provenance is a first-class element, not a footnote."]
  }
}, /* ---------- AGENTIC PRIMITIVES (live surface) ---------- */
{
  id: "agentic-states--all",
  group: "Agentic",
  component: "States",
  name: "All states",
  iframe: "../preview/agentic-states.html",
  height: 1100
}, {
  id: "agentic-flow--full-run",
  group: "Agentic",
  component: "Flow",
  name: "Full live run",
  iframe: "../preview/agentic-flow.html",
  height: 900
}, {
  id: "agentic-inbox--learned",
  group: "Agentic",
  component: "Inbox",
  name: "Learned from you",
  iframe: "../preview/agentic-inbox.html",
  height: 800
}, {
  id: "agentic-states-deck--reference",
  group: "Agentic",
  component: "States",
  name: "Reference deck",
  iframe: "../preview/agentic-states-deck.html",
  height: 900
}, /* ---------- COMPOSITES ---------- */
{
  id: "composites-kpi--grid",
  group: "Composites",
  component: "KPI",
  name: "Grid",
  iframe: "../preview/components-kpi.html",
  height: 380
}, {
  id: "composites-gauge--trustscore",
  group: "Composites",
  component: "Gauge",
  name: "Trust score",
  iframe: "../preview/components-gauge.html",
  height: 360
}, {
  id: "composites-statusbanner--default",
  group: "Composites",
  component: "StatusBanner",
  name: "Default",
  iframe: "../preview/components-status-banner.html",
  height: 320
}, {
  id: "composites-recommendation--default",
  group: "Composites",
  component: "Recommendation",
  name: "Default",
  iframe: "../preview/components-recommendation.html",
  height: 600
}, {
  id: "composites-execution--timeline",
  group: "Composites",
  component: "ExecutionTimeline",
  name: "In-flight & completed",
  iframe: "../preview/components-execution.html",
  height: 700
}, {
  id: "composites-execsummary--card",
  group: "Composites",
  component: "ExecutiveSummary",
  name: "Card",
  iframe: "../preview/composite-exec-summary.html",
  height: 600
}, {
  id: "composites-impact--rollup",
  group: "Composites",
  component: "ImpactRollup",
  name: "Card",
  iframe: "../preview/composite-impact-rollup.html",
  height: 600
}, {
  id: "composites-scenario--projection",
  group: "Composites",
  component: "ScenarioProjection",
  name: "Card",
  iframe: "../preview/composite-scenario.html",
  height: 600
}, {
  id: "composites-chat--default",
  group: "Composites",
  component: "Chat",
  name: "Conversation",
  iframe: "../preview/composite-chat.html",
  height: 800
}, {
  id: "composites-chat--ai-modal",
  group: "Composites",
  component: "Chat",
  name: "AI modal chat",
  iframe: "../preview/ai-modal-chat.html",
  height: 800
}, {
  id: "composites-chat--history",
  group: "Composites",
  component: "Chat",
  name: "AI chat history",
  iframe: "../preview/ai-chat-history.html",
  height: 600
}, {
  id: "composites-chat--feedback",
  group: "Composites",
  component: "Chat",
  name: "AI feedback / sources",
  iframe: "../preview/ai-feedback-sources.html",
  height: 600
}, {
  id: "composites-chat--launch-button",
  group: "Composites",
  component: "Chat",
  name: "AI launch button",
  iframe: "../preview/ai-launch-button.html",
  height: 240
}, {
  id: "composites-chat--ai-loader",
  group: "Composites",
  component: "Chat",
  name: "AI loader",
  iframe: "../preview/ai-loader.html",
  height: 240
}, {
  id: "composites-graph--dag",
  group: "Composites",
  component: "Graph",
  name: "DAG kit",
  iframe: "../preview/dag-graph-kit.html",
  height: 700
}, {
  id: "composites-table--default",
  group: "Composites",
  component: "Table",
  name: "Default",
  iframe: "../preview/components-table.html",
  height: 600
}, {
  id: "composites-buttons--default",
  group: "Composites",
  component: "Buttons",
  name: "Default",
  iframe: "../preview/components-buttons.html",
  height: 200
}, {
  id: "composites-badges--default",
  group: "Composites",
  component: "Badges",
  name: "Default",
  iframe: "../preview/components-badges.html",
  height: 240
}, /* ---------- TEMPLATES ---------- */
{
  id: "templates--dashboard",
  group: "Templates",
  component: "Dashboard",
  name: "Default",
  iframe: "../preview/template-dashboard.html",
  height: 1100
}, {
  id: "templates--triage",
  group: "Templates",
  component: "Triage",
  name: "Default",
  iframe: "../preview/template-triage.html",
  height: 1100
}, {
  id: "templates--investigation",
  group: "Templates",
  component: "Investigation",
  name: "Default",
  iframe: "../preview/template-investigation.html",
  height: 1100
}, {
  id: "templates--review",
  group: "Templates",
  component: "ReviewQueue",
  name: "Default",
  iframe: "../preview/template-review.html",
  height: 1100
}, {
  id: "templates--conversation",
  group: "Templates",
  component: "Conversation",
  name: "Default",
  iframe: "../preview/template-conversation.html",
  height: 1100
}, /* ---------- STATES MATRIX ---------- */
{
  id: "states-matrix--all",
  group: "States",
  component: "Matrix",
  name: "All states",
  iframe: "../preview/states-matrix.html",
  height: 1400
}, /* ---------- KITS ---------- */
{
  id: "kits-cmdb--workspace",
  group: "Kits",
  component: "CMDB",
  name: "Workspace",
  iframe: "../ui_kits/cmdb/index.html",
  height: 1200
}, {
  id: "kits-shidoka--components",
  group: "Kits",
  component: "Shidoka",
  name: "Components",
  iframe: "../ui_kits/shidoka-components/index.html",
  height: 1200
}, {
  id: "kits-shidoka--shell",
  group: "Kits",
  component: "Shidoka",
  name: "Shell",
  iframe: "../ui_kits/shidoka-shell/index.html",
  height: 1200
}, {
  id: "kits-shidoka--charts",
  group: "Kits",
  component: "Shidoka",
  name: "Charts",
  iframe: "../ui_kits/shidoka-charts/index.html",
  height: 1200
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook-static/stories.js", error: String((e && e.message) || e) }); }

// storybook/.storybook/main.ts
try { (() => {
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y", "@storybook/addon-interactions", "@storybook/addon-themes"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  staticDirs: ["../public", "../../assets", "../../fonts", "../../preview", "../../ui_kits"],
  docs: {
    autodocs: "tag"
  }
};
Object.assign(__ds_scope, { config });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/.storybook/main.ts", error: String((e && e.message) || e) }); }

// storybook/.storybook/manager.ts
try { (() => {
const kyndryl = create({
  base: "light",
  brandTitle: "Kyndryl Agentic Framework",
  brandUrl: "/",
  colorPrimary: "#FF462D",
  colorSecondary: "#29707A",
  appBg: "#F2F4F5",
  appContentBg: "#FFFFFF",
  appBorderColor: "#E6E6E6",
  appBorderRadius: 8,
  textColor: "#141414",
  textInverseColor: "#FFFFFF",
  barTextColor: "#5C5C5C",
  barSelectedColor: "#29707A",
  barBg: "#FFFFFF",
  fontBase: '"Roboto", system-ui, sans-serif',
  fontCode: '"Geist Mono", ui-monospace, monospace'
});
addons.setConfig({
  theme: kyndryl
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/.storybook/manager.ts", error: String((e && e.message) || e) }); }

// storybook/.storybook/preview.ts
try { (() => {
const preview = {
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "Page",
      values: [{
        name: "Page",
        value: "#FFFFFF"
      }, {
        name: "Surface",
        value: "#F2F4F5"
      }, {
        name: "Dark",
        value: "#141414"
      }]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    options: {
      storySort: {
        order: ["Welcome", "Foundations", "Primitives", "Agentic", "Composites", "Templates", "States", "Kits"]
      }
    }
  },
  decorators: [withThemeByDataAttribute({
    themes: {
      Light: "light",
      Dark: "dark"
    },
    defaultTheme: "Light",
    attributeName: "data-theme"
  })],
  tags: ["autodocs"]
};
Object.assign(__ds_scope, { preview });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/.storybook/preview.ts", error: String((e && e.message) || e) }); }

// storybook/src/_shared/HtmlEmbed.tsx
try { (() => {
/** Wraps a static HTML preview from /preview/ as an embedded story. */
const HtmlEmbed = ({
  src,
  height = 600,
  title = "Embedded preview"
}) => /*#__PURE__*/React.createElement("iframe", {
  title: title,
  src: src,
  style: {
    width: "100%",
    height,
    border: "1px solid var(--border-1)",
    borderRadius: 8,
    background: "#fff"
  }
});
Object.assign(__ds_scope, { HtmlEmbed });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/_shared/HtmlEmbed.tsx", error: String((e && e.message) || e) }); }

// storybook/src/agentic/AgentStatusBar.tsx
try { (() => {
/** Live agent status — sticky bar at the top of any agentic surface. */

const stateMeta = {
  started: {
    label: "Starting",
    color: "var(--k-spruce-60)"
  },
  thinking: {
    label: "Thinking",
    color: "var(--k-spruce-60)"
  },
  streaming: {
    label: "Streaming",
    color: "var(--k-spruce-60)"
  },
  paused: {
    label: "Paused",
    color: "var(--k-status-warning-100)"
  },
  done: {
    label: "Done",
    color: "var(--k-status-success-100)"
  }
};
const AgentStatusBar = ({
  state,
  agent = "Reconciliation Agent",
  step,
  onPauseResume,
  onBranch,
  stepThrough,
  onStepThroughChange
}) => {
  const meta = stateMeta[state];
  const live = state === "thinking" || state === "streaming";
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-live": "polite",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "8px 14px",
      background: "linear-gradient(90deg, var(--k-ai-spruce-06), var(--k-ai-warm-red-06))",
      border: "1px solid rgba(41,112,122,0.25)",
      borderRadius: 8,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--fg-1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: meta.color,
      boxShadow: live ? `0 0 0 0 ${meta.color}` : "none",
      animation: live ? "kaPulse 1.4s ease-out infinite" : "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, agent), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-muted)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: meta.color,
      fontWeight: 500
    }
  }, meta.label), step && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-muted)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--fg-2)"
    }
  }, step)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 11,
      color: "var(--fg-muted)"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!stepThrough,
    onChange: e => onStepThroughChange?.(e.target.checked)
  }), "Step-through"), onBranch && /*#__PURE__*/React.createElement("button", {
    onClick: onBranch,
    style: btnStyle
  }, "Branch"), onPauseResume && /*#__PURE__*/React.createElement("button", {
    onClick: onPauseResume,
    style: btnStyle
  }, state === "paused" ? "Resume" : "Pause")), /*#__PURE__*/React.createElement("style", null, `@keyframes kaPulse { 0% { box-shadow: 0 0 0 0 currentColor; } 70% { box-shadow: 0 0 0 6px transparent; } 100% { box-shadow: 0 0 0 0 transparent; } }`));
};
const btnStyle = {
  font: "inherit",
  fontSize: 11,
  padding: "3px 9px",
  border: "1px solid var(--border-1)",
  borderRadius: 4,
  background: "#fff",
  color: "var(--fg-1)",
  cursor: "pointer"
};
Object.assign(__ds_scope, { AgentStatusBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/agentic/AgentStatusBar.tsx", error: String((e && e.message) || e) }); }

// storybook/src/agentic/AgentStatusBar.stories.tsx
try { (() => {
const meta = {
  title: "Agentic/AgentStatusBar",
  component: __ds_scope.AgentStatusBar,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "radio",
      options: ["started", "thinking", "streaming", "paused", "done"]
    },
    agent: {
      control: "text"
    },
    step: {
      control: "text"
    },
    stepThrough: {
      control: "boolean"
    }
  },
  parameters: {
    docs: {
      description: {
        component: "Sticky bar above any agentic surface. Surfaces run state, the active step, and per-session controls (pause/resume, branch, step-through)."
      }
    }
  }
};
const Thinking = {
  args: {
    state: "thinking",
    agent: "Reconciliation Agent",
    step: "Step 2/5 · Resolving stale CIs"
  }
};
const Streaming = {
  args: {
    state: "streaming",
    agent: "Reconciliation Agent",
    step: "Step 3/5 · Drafting recommendation"
  }
};
const Paused = {
  args: {
    state: "paused",
    agent: "Reconciliation Agent",
    step: "Step 3/5 · Awaiting input"
  }
};
const Done = {
  args: {
    state: "done",
    agent: "Reconciliation Agent",
    step: "5/5 complete"
  }
};
Object.assign(__ds_scope, { meta, Thinking, Streaming, Paused, Done });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/agentic/AgentStatusBar.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/agentic/Agentic.stories.tsx
try { (() => {
const meta = {
  title: "Agentic/Reference flows",
  component: __ds_scope.HtmlEmbed,
  tags: ["autodocs"]
};
const AllStates = {
  args: {
    src: "/agentic-states.html",
    height: 1100
  }
};
const FullRun = {
  args: {
    src: "/agentic-flow.html",
    height: 900
  }
};
const Inbox = {
  args: {
    src: "/agentic-inbox.html",
    height: 800
  }
};
const Reference = {
  args: {
    src: "/agentic-states-deck.html",
    height: 900
  }
};
Object.assign(__ds_scope, { meta, AllStates, FullRun, Inbox, Reference });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/agentic/Agentic.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/agentic/HandoffCard.tsx
try { (() => {
const HandoffCard = ({
  from,
  to,
  kind = "agent",
  reason,
  onAck
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    border: "1px solid rgba(41,112,122,0.25)",
    background: "linear-gradient(90deg, var(--k-ai-spruce-06), var(--k-ai-warm-red-06))",
    borderRadius: 8,
    padding: "10px 14px",
    maxWidth: 480,
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    color: "var(--fg-1)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 9,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    fontWeight: 700,
    color: "var(--k-spruce-70)",
    marginBottom: 6
  }
}, "HANDOFF \xB7 ", kind === "human" ? "TO HUMAN" : "AGENT → AGENT"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: reason ? 8 : 0
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontWeight: 500
  }
}, from), /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "12",
  viewBox: "0 0 16 12",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  style: {
    color: "var(--fg-muted)"
  },
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M1 6h13M10 2l4 4-4 4",
  strokeLinecap: "round",
  strokeLinejoin: "round"
})), /*#__PURE__*/React.createElement("span", {
  style: {
    fontWeight: 500,
    color: kind === "human" ? "var(--k-warm-red-50)" : "var(--k-spruce-70)"
  }
}, to), onAck && /*#__PURE__*/React.createElement("button", {
  onClick: onAck,
  style: {
    marginLeft: "auto",
    font: "inherit",
    fontSize: 11,
    padding: "3px 9px",
    border: "1px solid var(--border-1)",
    borderRadius: 4,
    background: "#fff",
    cursor: "pointer"
  }
}, "Acknowledge")), reason && /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11.5,
    color: "var(--fg-2)",
    lineHeight: 1.5
  }
}, reason));
Object.assign(__ds_scope, { HandoffCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/agentic/HandoffCard.tsx", error: String((e && e.message) || e) }); }

// storybook/src/agentic/HandoffCard.stories.tsx
try { (() => {
const meta = {
  title: "Agentic/HandoffCard",
  component: __ds_scope.HandoffCard,
  tags: ["autodocs"],
  argTypes: {
    kind: {
      control: "radio",
      options: ["agent", "human"]
    }
  }
};
const AgentToAgent = {
  args: {
    from: "Reconciliation Agent",
    to: "Impact Agent",
    kind: "agent",
    reason: "Reconciliation complete — handing off impact analysis on 23 affected CIs."
  }
};
const ToHuman = {
  args: {
    from: "Reconciliation Agent",
    to: "Aaron Wright",
    kind: "human",
    reason: "Confidence below threshold (58%). Needs human review before write."
  }
};
Object.assign(__ds_scope, { meta, AgentToAgent, ToHuman });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/agentic/HandoffCard.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/agentic/HumanInputRequest.tsx
try { (() => {
const HumanInputRequest = ({
  question,
  options,
  onChoose
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--k-status-warning-10)",
    border: "1px solid var(--k-status-warning-20)",
    borderRadius: 8,
    padding: "12px 14px",
    maxWidth: 480,
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    color: "var(--k-status-warning-110)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 9,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    fontWeight: 700,
    marginBottom: 6
  }
}, "HUMAN INPUT REQUIRED"), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "0 0 10px",
    color: "var(--fg-1)",
    fontSize: 13.5,
    lineHeight: 1.5
  }
}, question), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6
  }
}, options.map(o => /*#__PURE__*/React.createElement("button", {
  key: o,
  onClick: () => onChoose?.(o),
  style: {
    font: "inherit",
    fontSize: 12,
    padding: "5px 12px",
    background: "#fff",
    border: "1px solid var(--k-status-warning-20)",
    borderRadius: 4,
    color: "var(--fg-1)",
    cursor: "pointer"
  }
}, o))));
Object.assign(__ds_scope, { HumanInputRequest });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/agentic/HumanInputRequest.tsx", error: String((e && e.message) || e) }); }

// storybook/src/agentic/HumanInputRequest.stories.tsx
try { (() => {
const meta = {
  title: "Agentic/HumanInputRequest",
  component: __ds_scope.HumanInputRequest,
  tags: ["autodocs"]
};
const TieBreak = {
  args: {
    question: "Two owners are equally likely for bINC4429181. Which should I attribute the stale record to?",
    options: ["Aaron Wright (Platform)", "Priya Shah (Network)", "Skip and flag for review"]
  }
};
Object.assign(__ds_scope, { meta, TieBreak });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/agentic/HumanInputRequest.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/agentic/StateDeltaToast.tsx
try { (() => {
const StateDeltaToast = ({
  field,
  oldValue,
  newValue,
  onUndo,
  onView
}) => /*#__PURE__*/React.createElement("div", {
  role: "status",
  "aria-live": "polite",
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 14px",
    background: "var(--fg-1)",
    color: "#fff",
    borderRadius: 8,
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    boxShadow: "var(--shadow-pop)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 6,
    height: 6,
    borderRadius: 999,
    background: "var(--k-spruce-30)"
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)"
  }
}, field), /*#__PURE__*/React.createElement("span", {
  style: {
    opacity: 0.7
  }
}, String(oldValue)), /*#__PURE__*/React.createElement("span", {
  style: {
    opacity: 0.7
  }
}, "\u2192"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontWeight: 500
  }
}, String(newValue)), onView && /*#__PURE__*/React.createElement("button", {
  onClick: onView,
  style: toastBtn
}, "View"), onUndo && /*#__PURE__*/React.createElement("button", {
  onClick: onUndo,
  style: toastBtn
}, "Undo"));
const toastBtn = {
  font: "inherit",
  fontSize: 11,
  padding: "2px 8px",
  marginLeft: 4,
  background: "transparent",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.3)",
  borderRadius: 4,
  cursor: "pointer"
};
Object.assign(__ds_scope, { StateDeltaToast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/agentic/StateDeltaToast.tsx", error: String((e && e.message) || e) }); }

// storybook/src/agentic/StateDeltaToast.stories.tsx
try { (() => {
const meta = {
  title: "Agentic/StateDeltaToast",
  component: __ds_scope.StateDeltaToast,
  tags: ["autodocs"]
};
const TrustScore = {
  args: {
    field: "trust_score",
    oldValue: 76,
    newValue: 82
  }
};
const StaleCount = {
  args: {
    field: "stale_cis",
    oldValue: 1843,
    newValue: 1663
  }
};
Object.assign(__ds_scope, { meta, TrustScore, StaleCount });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/agentic/StateDeltaToast.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/agentic/StepTimeline.tsx
try { (() => {
const dotStyles = {
  pending: {
    background: "var(--bg-3)"
  },
  active: {
    background: "var(--k-spruce-60)",
    boxShadow: "0 0 0 4px rgba(41,112,122,0.15)"
  },
  done: {
    background: "var(--k-status-success-100)"
  },
  failed: {
    background: "var(--k-status-error-100)"
  }
};
const StepTimeline = ({
  steps,
  onApproveOnce,
  onApproveAll
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    border: "1px solid var(--border-1)",
    borderRadius: 8,
    padding: 12,
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    color: "var(--fg-1)",
    maxWidth: 420,
    background: "#fff"
  }
}, /*#__PURE__*/React.createElement("header", {
  style: {
    display: "flex",
    alignItems: "center",
    marginBottom: 8
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 9,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    fontWeight: 700,
    color: "var(--fg-muted)"
  }
}, "STEP TIMELINE"), onApproveAll && /*#__PURE__*/React.createElement("button", {
  onClick: onApproveAll,
  style: {
    marginLeft: "auto",
    font: "inherit",
    fontSize: 11,
    padding: "3px 9px",
    border: "1px solid var(--border-1)",
    borderRadius: 4,
    background: "#fff",
    cursor: "pointer"
  }
}, "Approve all")), /*#__PURE__*/React.createElement("ol", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 8
  }
}, steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
  key: i,
  style: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 10,
    height: 10,
    borderRadius: 999,
    marginTop: 4,
    flexShrink: 0,
    ...dotStyles[s.state]
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    minWidth: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontWeight: s.state === "active" ? 500 : 400,
    color: s.state === "pending" ? "var(--fg-muted)" : "var(--fg-1)"
  }
}, s.title), s.note && /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    color: "var(--fg-muted)"
  }
}, s.note)), s.state === "active" && onApproveOnce && /*#__PURE__*/React.createElement("button", {
  onClick: () => onApproveOnce(i),
  style: {
    font: "inherit",
    fontSize: 11,
    padding: "2px 8px",
    border: "1px solid var(--k-spruce-30)",
    borderRadius: 4,
    background: "var(--k-ai-spruce-12)",
    color: "var(--k-spruce-80)",
    cursor: "pointer"
  }
}, "Approve once")))));
Object.assign(__ds_scope, { StepTimeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/agentic/StepTimeline.tsx", error: String((e && e.message) || e) }); }

// storybook/src/agentic/StepTimeline.stories.tsx
try { (() => {
const meta = {
  title: "Agentic/StepTimeline",
  component: __ds_scope.StepTimeline,
  tags: ["autodocs"]
};
const InFlight = {
  args: {
    steps: [{
      title: "Read CI graph",
      state: "done",
      note: "depth=2 · 147 nodes"
    }, {
      title: "Detect stale records",
      state: "done",
      note: "23 candidates"
    }, {
      title: "Resolve owners",
      state: "active",
      note: "4/23 unresolved"
    }, {
      title: "Draft correction request",
      state: "pending"
    }, {
      title: "Submit for review",
      state: "pending"
    }]
  }
};
const Completed = {
  args: {
    steps: [{
      title: "Read CI graph",
      state: "done"
    }, {
      title: "Detect stale records",
      state: "done"
    }, {
      title: "Resolve owners",
      state: "done"
    }, {
      title: "Draft correction request",
      state: "done"
    }, {
      title: "Submit for review",
      state: "done"
    }]
  }
};
Object.assign(__ds_scope, { meta, InFlight, Completed });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/agentic/StepTimeline.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/agentic/ToolCallCard.tsx
try { (() => {
const ToolCallCard = ({
  toolName,
  args,
  state = "requested",
  destructive,
  onApprove,
  onApproveAll,
  onReject
}) => {
  const isGate = state === "requested";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1px solid ${destructive ? "var(--k-status-error-20)" : "rgba(41,112,122,0.25)"}`,
      background: destructive ? "var(--k-status-error-10)" : "#fff",
      borderRadius: 8,
      padding: "10px 12px",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--fg-1)",
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      fontWeight: 700,
      color: destructive ? "var(--k-status-error-110)" : "var(--k-spruce-70)"
    }
  }, state === "completed" ? "TOOL · COMPLETED" : state === "executing" ? "TOOL · EXECUTING" : state === "failed" ? "TOOL · FAILED" : "TOOL · GATE"), destructive && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      fontWeight: 700,
      color: "var(--k-status-error-110)"
    }
  }, "\xB7 DESTRUCTIVE"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--fg-muted)"
    }
  }, toolName)), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: "8px 10px",
      background: "var(--bg-2)",
      borderRadius: 4,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--fg-1)",
      overflowX: "auto",
      lineHeight: 1.45
    }
  }, JSON.stringify(args, null, 2)), isGate && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 8,
      justifyContent: "flex-end"
    }
  }, onReject && /*#__PURE__*/React.createElement("button", {
    onClick: onReject,
    style: ghostBtn
  }, "Reject"), onApproveAll && /*#__PURE__*/React.createElement("button", {
    onClick: onApproveAll,
    style: ghostBtn
  }, "Approve all"), onApprove && /*#__PURE__*/React.createElement("button", {
    onClick: onApprove,
    style: destructive ? destructiveBtn : primaryBtn
  }, "Approve once")));
};
const baseBtn = {
  font: "inherit",
  fontSize: 11.5,
  padding: "5px 12px",
  borderRadius: 4,
  border: "1px solid var(--border-1)",
  cursor: "pointer"
};
const ghostBtn = {
  ...baseBtn,
  background: "#fff",
  color: "var(--fg-1)"
};
const primaryBtn = {
  ...baseBtn,
  background: "var(--k-spruce-60)",
  color: "#fff",
  borderColor: "var(--k-spruce-60)"
};
const destructiveBtn = {
  ...baseBtn,
  background: "var(--k-status-error-100)",
  color: "#fff",
  borderColor: "var(--k-status-error-100)"
};
Object.assign(__ds_scope, { ToolCallCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/agentic/ToolCallCard.tsx", error: String((e && e.message) || e) }); }

// storybook/src/agentic/ToolCallCard.stories.tsx
try { (() => {
const meta = {
  title: "Agentic/ToolCallCard",
  component: __ds_scope.ToolCallCard,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "radio",
      options: ["requested", "executing", "completed", "failed"]
    },
    destructive: {
      control: "boolean"
    }
  }
};
const Requested = {
  args: {
    toolName: "graph.read",
    args: {
      ci: "bINC4429181",
      depth: 2
    },
    state: "requested"
  }
};
const Destructive = {
  args: {
    toolName: "cmdb.write",
    args: {
      ci: "bINC4429181",
      action: "decommission"
    },
    state: "requested",
    destructive: true
  }
};
const Executing = {
  args: {
    toolName: "graph.read",
    args: {
      ci: "bINC4429181",
      depth: 2
    },
    state: "executing"
  }
};
const Completed = {
  args: {
    toolName: "graph.read",
    args: {
      ci: "bINC4429181",
      depth: 2
    },
    state: "completed"
  }
};
Object.assign(__ds_scope, { meta, Requested, Destructive, Executing, Completed });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/agentic/ToolCallCard.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/composites/Composites.stories.tsx
try { (() => {
const meta = {
  title: "Composites",
  component: __ds_scope.HtmlEmbed,
  tags: ["autodocs"]
};
const KpiGrid = {
  args: {
    src: "/components-kpi.html",
    height: 380
  }
};
const TrustGauge = {
  args: {
    src: "/components-gauge.html",
    height: 360
  }
};
const StatusBanner = {
  args: {
    src: "/components-status-banner.html",
    height: 320
  }
};
const Recommendation = {
  args: {
    src: "/components-recommendation.html",
    height: 600
  }
};
const ExecutionTimeline = {
  args: {
    src: "/components-execution.html",
    height: 700
  }
};
const ExecutiveSummary = {
  args: {
    src: "/composite-exec-summary.html",
    height: 600
  }
};
const ImpactRollup = {
  args: {
    src: "/composite-impact-rollup.html",
    height: 600
  }
};
const Scenario = {
  args: {
    src: "/composite-scenario.html",
    height: 600
  }
};
const Chat = {
  args: {
    src: "/composite-chat.html",
    height: 800
  }
};
const DAGGraph = {
  args: {
    src: "/dag-graph-kit.html",
    height: 700
  }
};
const Table = {
  args: {
    src: "/components-table.html",
    height: 600
  }
};
const Buttons = {
  args: {
    src: "/components-buttons.html",
    height: 200
  }
};
const Badges = {
  args: {
    src: "/components-badges.html",
    height: 240
  }
};
Object.assign(__ds_scope, { meta, KpiGrid, TrustGauge, StatusBanner, Recommendation, ExecutionTimeline, ExecutiveSummary, ImpactRollup, Scenario, Chat, DAGGraph, Table, Buttons, Badges });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/composites/Composites.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/foundations/Brand.stories.tsx
try { (() => {
const meta = {
  title: "Foundations/Brand",
  component: __ds_scope.HtmlEmbed,
  tags: ["autodocs"]
};
const Logo = {
  args: {
    src: "/brand-logo.html",
    height: 360
  }
};
const Icons = {
  args: {
    src: "/brand-icons.html",
    height: 600
  }
};
Object.assign(__ds_scope, { meta, Logo, Icons });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/foundations/Brand.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/foundations/Colors.stories.tsx
try { (() => {
const meta = {
  title: "Foundations/Colors",
  component: __ds_scope.HtmlEmbed,
  tags: ["autodocs"]
};
const Brand = {
  args: {
    src: "/colors-brand.html",
    height: 600
  }
};
const Neutrals = {
  args: {
    src: "/colors-slate.html",
    height: 600
  }
};
const Severity = {
  args: {
    src: "/colors-severity.html",
    height: 500
  }
};
const StatusRAG = {
  args: {
    src: "/colors-status.html",
    height: 500
  }
};
const Chart = {
  args: {
    src: "/colors-chart.html",
    height: 600
  }
};
Object.assign(__ds_scope, { meta, Brand, Neutrals, Severity, StatusRAG, Chart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/foundations/Colors.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/foundations/Spacing.stories.tsx
try { (() => {
const meta = {
  title: "Foundations/Spacing & Radii",
  component: __ds_scope.HtmlEmbed,
  tags: ["autodocs"]
};
const Scale = {
  args: {
    src: "/spacing-scale.html",
    height: 400
  }
};
const Radii = {
  args: {
    src: "/spacing-radii.html",
    height: 320
  }
};
const Elevation = {
  args: {
    src: "/spacing-elevation.html",
    height: 320
  }
};
Object.assign(__ds_scope, { meta, Scale, Radii, Elevation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/foundations/Spacing.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/foundations/Type.stories.tsx
try { (() => {
const meta = {
  title: "Foundations/Type",
  component: __ds_scope.HtmlEmbed,
  tags: ["autodocs"]
};
const Display = {
  args: {
    src: "/type-display.html",
    height: 500
  }
};
const Body = {
  args: {
    src: "/type-body.html",
    height: 500
  }
};
Object.assign(__ds_scope, { meta, Display, Body });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/foundations/Type.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/kits/Kits.stories.tsx
try { (() => {
const meta = {
  title: "Kits",
  component: __ds_scope.HtmlEmbed,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  }
};
const CMDB_Workspace = {
  args: {
    src: "/cmdb/index.html",
    height: 1200
  },
  name: "CMDB · Workspace"
};
const Shidoka_Components = {
  args: {
    src: "/shidoka-components/index.html",
    height: 1200
  },
  name: "Shidoka · Components"
};
const Shidoka_Shell = {
  args: {
    src: "/shidoka-shell/index.html",
    height: 1200
  },
  name: "Shidoka · Shell"
};
const Shidoka_Charts = {
  args: {
    src: "/shidoka-charts/index.html",
    height: 1200
  },
  name: "Shidoka · Charts"
};
Object.assign(__ds_scope, { meta, CMDB_Workspace, Shidoka_Components, Shidoka_Shell, Shidoka_Charts });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/kits/Kits.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/primitives/ConfidenceBadge.tsx
try { (() => {
const ConfidenceBadge = ({
  value,
  role = "full"
}) => {
  const low = value < 70;
  return /*#__PURE__*/React.createElement("span", {
    tabIndex: role === "readonly" ? -1 : 0,
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 6,
      padding: "5px 10px 5px 12px",
      borderRadius: 999,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 500,
      background: low ? "var(--k-status-warning-10)" : "var(--k-ai-spruce-12)",
      color: low ? "var(--k-status-warning-110)" : "var(--k-spruce-80)",
      border: `1px solid ${low ? "var(--k-status-warning-20)" : "rgba(41,112,122,0.25)"}`,
      cursor: role === "readonly" ? "default" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 14,
      fontWeight: 500,
      borderBottom: role === "readonly" ? "0" : "1px dotted currentColor"
    }
  }, value, "%"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      opacity: 0.85
    }
  }, "confidence"), role !== "readonly" && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.6,
      fontSize: 10
    }
  }, "\u25BE"));
};
Object.assign(__ds_scope, { ConfidenceBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/primitives/ConfidenceBadge.tsx", error: String((e && e.message) || e) }); }

// storybook/src/primitives/ConfidenceBadge.stories.tsx
try { (() => {
const meta = {
  title: "Primitives/ConfidenceBadge",
  component: __ds_scope.ConfidenceBadge,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1
      }
    },
    role: {
      control: "radio",
      options: ["full", "review", "readonly"]
    }
  },
  parameters: {
    docs: {
      description: {
        component: "Confidence the agent has in a derived recommendation. Click to override, ask for evidence, snooze, or teach the agent."
      }
    }
  }
};
const Default = {
  args: {
    value: 92,
    role: "full"
  }
};
const Low = {
  args: {
    value: 58,
    role: "full"
  }
};
const Readonly = {
  args: {
    value: 92,
    role: "readonly"
  }
};
Object.assign(__ds_scope, { meta, Default, Low, Readonly });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/primitives/ConfidenceBadge.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/primitives/DeltaIndicator.tsx
try { (() => {
const DeltaIndicator = ({
  delta,
  unit = "%",
  direction,
  invertSemantics = false,
  referenceLabel = "vs last week"
}) => {
  const dir = direction ?? (delta >= 0 ? "up" : "down");
  const desirable = invertSemantics ? dir === "down" : dir === "up";
  const sign = delta >= 0 ? "+" : "";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontFamily: "var(--font-display)",
      fontSize: 18,
      fontWeight: 500,
      fontVariantNumeric: "tabular-nums",
      color: desirable ? "var(--k-status-success-110)" : "var(--k-status-error-110)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, dir === "up" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 7h10v10"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 7l10 10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 7v10H7"
  }))), /*#__PURE__*/React.createElement("span", null, sign, delta, unit), referenceLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--fg-muted)",
      marginLeft: 4
    }
  }, referenceLabel));
};
Object.assign(__ds_scope, { DeltaIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/primitives/DeltaIndicator.tsx", error: String((e && e.message) || e) }); }

// storybook/src/primitives/DeltaIndicator.stories.tsx
try { (() => {
const meta = {
  title: "Primitives/DeltaIndicator",
  component: __ds_scope.DeltaIndicator,
  tags: ["autodocs"],
  argTypes: {
    delta: {
      control: "number"
    },
    unit: {
      control: "select",
      options: ["%", "pts", "CIs", ""]
    },
    direction: {
      control: "radio",
      options: ["up", "down"]
    },
    invertSemantics: {
      control: "boolean"
    },
    referenceLabel: {
      control: "text"
    }
  },
  parameters: {
    docs: {
      description: {
        component: "Signed delta vs a reference period. Always prefixed with + or − and an arrow icon. Color is driven by whether the direction is desirable (use `invertSemantics` for metrics where 'down is good')."
      }
    }
  }
};
const Up = {
  args: {
    delta: 3.4,
    unit: "%",
    referenceLabel: "vs last week"
  }
};
const Down = {
  args: {
    delta: -180,
    unit: " CIs",
    referenceLabel: "stale CIs WoW"
  }
};
const Inverted = {
  args: {
    delta: 12,
    unit: "%",
    invertSemantics: true,
    referenceLabel: "error rate WoW"
  }
};
Object.assign(__ds_scope, { meta, Up, Down, Inverted });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/primitives/DeltaIndicator.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/primitives/FreshnessBadge.tsx
try { (() => {
const FreshnessBadge = ({
  ageDays,
  threshold = 7,
  label
}) => {
  const stale = ageDays > threshold;
  const display = label ?? (ageDays === 0 ? "Today" : `${ageDays}d ago`);
  return /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-live": "polite",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 10px",
      borderRadius: 999,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      background: stale ? "var(--k-status-warning-10)" : "var(--bg-2)",
      color: stale ? "var(--k-status-warning-110)" : "var(--fg-2)",
      border: `1px solid ${stale ? "var(--k-status-warning-20)" : "var(--border-1)"}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: stale ? "var(--k-status-warning-100)" : "var(--k-status-success-100)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      borderBottom: "1px dotted currentColor"
    }
  }, display), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7
    }
  }, stale ? "stale" : "verified"));
};
Object.assign(__ds_scope, { FreshnessBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/primitives/FreshnessBadge.tsx", error: String((e && e.message) || e) }); }

// storybook/src/primitives/FreshnessBadge.stories.tsx
try { (() => {
const meta = {
  title: "Primitives/FreshnessBadge",
  component: __ds_scope.FreshnessBadge,
  tags: ["autodocs"],
  argTypes: {
    ageDays: {
      control: {
        type: "range",
        min: 0,
        max: 60,
        step: 1
      }
    },
    threshold: {
      control: {
        type: "range",
        min: 1,
        max: 30,
        step: 1
      }
    },
    label: {
      control: "text"
    }
  },
  parameters: {
    docs: {
      description: {
        component: "Data freshness indicator. Crosses to a warning state when `ageDays > threshold`. " + "Pair with a `FreshnessBadge` on every card backed by data — never approximate (\"recent\")."
      }
    }
  }
};
const Today = {
  args: {
    ageDays: 0,
    threshold: 7
  }
};
const Fresh = {
  args: {
    ageDays: 3,
    threshold: 7
  }
};
const Stale = {
  args: {
    ageDays: 14,
    threshold: 7
  }
};
Object.assign(__ds_scope, { meta, Today, Fresh, Stale });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/primitives/FreshnessBadge.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/primitives/SeverityPill.tsx
try { (() => {
const styles = {
  CRITICAL: {
    color: "var(--sev-critical-fg)",
    background: "var(--sev-critical-bg)",
    borderColor: "var(--sev-critical-border)"
  },
  HIGH: {
    color: "var(--sev-high-fg)",
    background: "var(--sev-high-bg)",
    borderColor: "var(--sev-high-border)"
  },
  MEDIUM: {
    color: "var(--sev-medium-fg)",
    background: "var(--sev-medium-bg)",
    borderColor: "var(--sev-medium-border)"
  },
  LOW: {
    color: "var(--sev-low-fg)",
    background: "var(--sev-low-bg)",
    borderColor: "var(--sev-low-border)"
  }
};
const SeverityPill = ({
  severity,
  label
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 10px",
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    fontFamily: "var(--font-sans)",
    border: "1px solid",
    ...styles[severity]
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 6,
    height: 6,
    borderRadius: 999,
    background: "currentColor"
  }
}), /*#__PURE__*/React.createElement("span", null, severity), label ? /*#__PURE__*/React.createElement("span", {
  style: {
    fontWeight: 500,
    letterSpacing: 0,
    textTransform: "none",
    opacity: 0.75,
    marginLeft: 4
  }
}, "\xB7 ", label) : null);
Object.assign(__ds_scope, { SeverityPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/primitives/SeverityPill.tsx", error: String((e && e.message) || e) }); }

// storybook/src/primitives/SeverityPill.stories.tsx
try { (() => {
const meta = {
  title: "Primitives/SeverityPill",
  component: __ds_scope.SeverityPill,
  tags: ["autodocs"],
  argTypes: {
    severity: {
      control: "radio",
      options: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]
    },
    label: {
      control: "text"
    }
  },
  parameters: {
    docs: {
      description: {
        component: "Canonical triage taxonomy. The taxonomy is fixed: CRITICAL · HIGH · MEDIUM · LOW. " + "Severity is never color-only — the value is always paired with the label."
      }
    }
  }
};
const Critical = {
  args: {
    severity: "CRITICAL"
  }
};
const High = {
  args: {
    severity: "HIGH"
  }
};
const Medium = {
  args: {
    severity: "MEDIUM"
  }
};
const Low = {
  args: {
    severity: "LOW"
  }
};
const WithLabel = {
  args: {
    severity: "HIGH",
    label: "12 findings"
  }
};
Object.assign(__ds_scope, { meta, Critical, High, Medium, Low, WithLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/primitives/SeverityPill.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/primitives/SourceAttribution.tsx
try { (() => {
const SourceAttribution = ({
  dataset,
  timestamp,
  confidence,
  rationale
}) => /*#__PURE__*/React.createElement("footer", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
    padding: "10px 14px",
    background: "var(--k-ai-spruce-06)",
    borderTop: "1px solid var(--border-1)",
    borderRadius: "0 0 8px 8px",
    fontFamily: "var(--font-sans)",
    fontSize: 11,
    color: "var(--fg-muted)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 6,
    height: 6,
    borderRadius: 999,
    background: "var(--k-spruce-60)"
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontWeight: 500,
    color: "var(--k-spruce-70)"
  }
}, "Powered by agentic AI")), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--border-2)"
  }
}, "\xB7"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)"
  }
}, "dataset: ", dataset), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--border-2)"
  }
}, "\xB7"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)"
  }
}, timestamp), typeof confidence === "number" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--border-2)"
  }
}, "\xB7"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)"
  }
}, "confidence ", confidence, "%")), rationale && /*#__PURE__*/React.createElement("span", {
  style: {
    marginLeft: "auto",
    color: "var(--k-spruce-60)",
    textDecoration: "underline",
    cursor: "pointer"
  }
}, rationale));
Object.assign(__ds_scope, { SourceAttribution });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/primitives/SourceAttribution.tsx", error: String((e && e.message) || e) }); }

// storybook/src/primitives/SourceAttribution.stories.tsx
try { (() => {
const meta = {
  title: "Primitives/SourceAttribution",
  component: __ds_scope.SourceAttribution,
  tags: ["autodocs"],
  argTypes: {
    dataset: {
      control: "text"
    },
    timestamp: {
      control: "text"
    },
    confidence: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1
      }
    },
    rationale: {
      control: "text"
    }
  },
  parameters: {
    docs: {
      description: {
        component: "Provenance footer that lives at the bottom of any agent-derived card. Dataset · timestamp · confidence. Don't bury this — provenance is first-class."
      }
    }
  }
};
const Default = {
  args: {
    dataset: "cmdb_ci_v3",
    timestamp: "27-04-2026 14:32",
    confidence: 92,
    rationale: "View provenance →"
  }
};
const NoConfidence = {
  args: {
    dataset: "incident_log_v2",
    timestamp: "27-04-2026 09:14"
  }
};
Object.assign(__ds_scope, { meta, Default, NoConfidence });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/primitives/SourceAttribution.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/primitives/StatusBadge.tsx
try { (() => {
const map = {
  Pending: ["var(--wf-pending)", "var(--k-status-warning-10)", "var(--k-status-warning-20)"],
  Approved: ["var(--wf-approved)", "var(--k-spruce-10)", "var(--k-spruce-20)"],
  Executed: ["var(--wf-executed)", "var(--k-spruce-10)", "var(--k-spruce-20)"],
  Rejected: ["var(--fg-muted)", "var(--bg-2)", "var(--border-1)"],
  Healthy: ["var(--status-healthy)", "var(--k-status-success-10)", "var(--k-status-success-20)"],
  Degraded: ["var(--status-degraded)", "var(--k-status-warning-10)", "var(--k-status-warning-20)"],
  Impacted: ["var(--status-impacted)", "var(--k-status-error-10)", "var(--k-status-error-20)"],
  Unknown: ["var(--fg-muted)", "var(--bg-2)", "var(--border-1)"]
};
const StatusBadge = ({
  status
}) => {
  const [fg, bg, bd] = map[status];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 10px",
      borderRadius: 999,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 500,
      color: fg,
      background: bg,
      border: `1px solid ${bd}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "currentColor"
    }
  }), status);
};
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/primitives/StatusBadge.tsx", error: String((e && e.message) || e) }); }

// storybook/src/primitives/StatusBadge.stories.tsx
try { (() => {
const meta = {
  title: "Primitives/StatusBadge",
  component: __ds_scope.StatusBadge,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "radio",
      options: ["Pending", "Approved", "Executed", "Rejected", "Healthy", "Degraded", "Impacted", "Unknown"]
    }
  }
};
const Approved = {
  args: {
    status: "Approved"
  }
};
const Pending = {
  args: {
    status: "Pending"
  }
};
const Executed = {
  args: {
    status: "Executed"
  }
};
const Healthy = {
  args: {
    status: "Healthy"
  }
};
const Impacted = {
  args: {
    status: "Impacted"
  }
};
Object.assign(__ds_scope, { meta, Approved, Pending, Executed, Healthy, Impacted });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/primitives/StatusBadge.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/states/States.stories.tsx
try { (() => {
const meta = {
  title: "States/Matrix",
  component: __ds_scope.HtmlEmbed,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  }
};
const AllStates = {
  args: {
    src: "/states-matrix.html",
    height: 1400
  }
};
Object.assign(__ds_scope, { meta, AllStates });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/states/States.stories.tsx", error: String((e && e.message) || e) }); }

// storybook/src/templates/Templates.stories.tsx
try { (() => {
const meta = {
  title: "Templates",
  component: __ds_scope.HtmlEmbed,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  }
};
const Dashboard = {
  args: {
    src: "/template-dashboard.html",
    height: 1100
  }
};
const Triage = {
  args: {
    src: "/template-triage.html",
    height: 1100
  }
};
const Investigation = {
  args: {
    src: "/template-investigation.html",
    height: 1100
  }
};
const ReviewQueue = {
  args: {
    src: "/template-review.html",
    height: 1100
  }
};
const Conversation = {
  args: {
    src: "/template-conversation.html",
    height: 1100
  }
};
Object.assign(__ds_scope, { meta, Dashboard, Triage, Investigation, ReviewQueue, Conversation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "storybook/src/templates/Templates.stories.tsx", error: String((e && e.message) || e) }); }

__ds_ns.HtmlEmbed = __ds_scope.HtmlEmbed;

__ds_ns.Thinking = __ds_scope.Thinking;

__ds_ns.Streaming = __ds_scope.Streaming;

__ds_ns.Paused = __ds_scope.Paused;

__ds_ns.Done = __ds_scope.Done;

__ds_ns.AgentStatusBar = __ds_scope.AgentStatusBar;

__ds_ns.AllStates = __ds_scope.AllStates;

__ds_ns.FullRun = __ds_scope.FullRun;

__ds_ns.Inbox = __ds_scope.Inbox;

__ds_ns.Reference = __ds_scope.Reference;

__ds_ns.AgentToAgent = __ds_scope.AgentToAgent;

__ds_ns.ToHuman = __ds_scope.ToHuman;

__ds_ns.HandoffCard = __ds_scope.HandoffCard;

__ds_ns.TieBreak = __ds_scope.TieBreak;

__ds_ns.HumanInputRequest = __ds_scope.HumanInputRequest;

__ds_ns.TrustScore = __ds_scope.TrustScore;

__ds_ns.StaleCount = __ds_scope.StaleCount;

__ds_ns.StateDeltaToast = __ds_scope.StateDeltaToast;

__ds_ns.InFlight = __ds_scope.InFlight;

__ds_ns.Completed = __ds_scope.Completed;

__ds_ns.StepTimeline = __ds_scope.StepTimeline;

__ds_ns.Requested = __ds_scope.Requested;

__ds_ns.Destructive = __ds_scope.Destructive;

__ds_ns.Executing = __ds_scope.Executing;

__ds_ns.ToolCallCard = __ds_scope.ToolCallCard;

__ds_ns.KpiGrid = __ds_scope.KpiGrid;

__ds_ns.TrustGauge = __ds_scope.TrustGauge;

__ds_ns.StatusBanner = __ds_scope.StatusBanner;

__ds_ns.Recommendation = __ds_scope.Recommendation;

__ds_ns.ExecutionTimeline = __ds_scope.ExecutionTimeline;

__ds_ns.ExecutiveSummary = __ds_scope.ExecutiveSummary;

__ds_ns.ImpactRollup = __ds_scope.ImpactRollup;

__ds_ns.Scenario = __ds_scope.Scenario;

__ds_ns.Chat = __ds_scope.Chat;

__ds_ns.DAGGraph = __ds_scope.DAGGraph;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Buttons = __ds_scope.Buttons;

__ds_ns.Badges = __ds_scope.Badges;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Icons = __ds_scope.Icons;

__ds_ns.Brand = __ds_scope.Brand;

__ds_ns.Neutrals = __ds_scope.Neutrals;

__ds_ns.Severity = __ds_scope.Severity;

__ds_ns.StatusRAG = __ds_scope.StatusRAG;

__ds_ns.Chart = __ds_scope.Chart;

__ds_ns.Scale = __ds_scope.Scale;

__ds_ns.Radii = __ds_scope.Radii;

__ds_ns.Elevation = __ds_scope.Elevation;

__ds_ns.Display = __ds_scope.Display;

__ds_ns.Body = __ds_scope.Body;

__ds_ns.CMDB_Workspace = __ds_scope.CMDB_Workspace;

__ds_ns.Shidoka_Components = __ds_scope.Shidoka_Components;

__ds_ns.Shidoka_Shell = __ds_scope.Shidoka_Shell;

__ds_ns.Shidoka_Charts = __ds_scope.Shidoka_Charts;

__ds_ns.Default = __ds_scope.Default;

__ds_ns.Low = __ds_scope.Low;

__ds_ns.Readonly = __ds_scope.Readonly;

__ds_ns.ConfidenceBadge = __ds_scope.ConfidenceBadge;

__ds_ns.Up = __ds_scope.Up;

__ds_ns.Down = __ds_scope.Down;

__ds_ns.Inverted = __ds_scope.Inverted;

__ds_ns.DeltaIndicator = __ds_scope.DeltaIndicator;

__ds_ns.Today = __ds_scope.Today;

__ds_ns.Fresh = __ds_scope.Fresh;

__ds_ns.Stale = __ds_scope.Stale;

__ds_ns.FreshnessBadge = __ds_scope.FreshnessBadge;

__ds_ns.Critical = __ds_scope.Critical;

__ds_ns.High = __ds_scope.High;

__ds_ns.Medium = __ds_scope.Medium;

__ds_ns.WithLabel = __ds_scope.WithLabel;

__ds_ns.SeverityPill = __ds_scope.SeverityPill;

__ds_ns.NoConfidence = __ds_scope.NoConfidence;

__ds_ns.SourceAttribution = __ds_scope.SourceAttribution;

__ds_ns.Approved = __ds_scope.Approved;

__ds_ns.Pending = __ds_scope.Pending;

__ds_ns.Executed = __ds_scope.Executed;

__ds_ns.Healthy = __ds_scope.Healthy;

__ds_ns.Impacted = __ds_scope.Impacted;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Dashboard = __ds_scope.Dashboard;

__ds_ns.Triage = __ds_scope.Triage;

__ds_ns.Investigation = __ds_scope.Investigation;

__ds_ns.ReviewQueue = __ds_scope.ReviewQueue;

__ds_ns.Conversation = __ds_scope.Conversation;

})();
