// bil-os/talk.jsx — "Talk to persona" interview stage for the BiL synthetic
// personas. Cinematic dark surface: PersonaOrb embodiment, cited transcript,
// roster, context filters, traceability window.
// Exports: ScreenBilTalk

// Voice IDs for ElevenLabs TTS per persona
const PERSONA_VOICES = {
  'P-BIL-01': '35TZ7cBoYATiH37sLH1S', // Claire Weber
};

const BIL_TALK = {
  'P-BIL-01': {
    name: 'Claire Weber',
    label: 'The Reporting Lead',
    photo: 'assets/personas/claire.png',
    role: 'Head of Regulatory Reporting · owns the deadline',
    accent: '#FF8766',
    accentDeep: '#FF462D',
    orbMood: 'cautious',
    sourceCount: 6,
    version: 'v0.9',
    contextLabel: 'Measured · deadline-aware',
    quote: 'If I still need three calls to understand a red item, the UI has not solved the problem.',
    sample: [
      { who: 'you', t: 'Walk me through the last week of a monthly AnaCredit run.' },
      { who: 'persona', t: 'Validation results land late, so the final week is triage. We sort blockers from warnings, chase owners for corrections, and re-run the file — sometimes three or four times. The closer the deadline, the more decisions are made on the phone instead of on paper.' },
      { who: 'you', t: 'What happens when a red item appears at T-36 hours?' },
      { who: 'persona', t: 'Three calls — the ops lead, the source owner, sometimes IT. Each call reconstructs context the system should have kept. I approve an exception, and the reason lives in an email, if it lives anywhere.' },
      { who: 'you', t: 'What does that do to your sign-off?' },
      { who: 'persona', t: 'I sign knowing the number is right but the story is scattered. If the BCL asks six months later how an exception was approved, we rebuild it from memory.' },
    ],
    sources: [
      { id: 'TRN-RR-01', kind: 'transcript', label: 'Synthetic interview · executive-issue framing', weight: 0.32, snippet: '"the reporting team owns the deadline, even if the cause sits upstream"', date: '2026-05-28' },
      { id: 'TRN-RR-04', kind: 'transcript', label: 'Synthetic interview · evidence for submission', weight: 0.24, snippet: '"whether the file is reproducible from the captured snapshot"', date: '2026-05-28' },
      { id: 'TRN-RR-05', kind: 'transcript', label: 'Synthetic interview · AI trust threshold', weight: 0.19, snippet: '"it cannot silently alter a reportable value"', date: '2026-05-28' },
      { id: 'DOC-BIL-3', kind: 'doc', label: 'BiL current-state deck · correction loop', weight: 0.14, snippet: 'INVOKE rework loops; corrections handled case by case', date: '2026-05-12' },
      { id: 'RACI-R2', kind: 'board', label: 'Persona/RACI wall · override decision row', weight: 0.11, snippet: 'Approve deterministic override → A: Head of Reg. Reporting', date: '2026-06-03' },
    ],
    probes: ['Walk me through the worst correction loop of the last year', 'Which warnings would you accept at the deadline?', 'Who approves an exception today?', 'Where does the evidence of a run live?'],
  },
  'P-BIL-05': {
    name: 'Sofia Krier',
    label: 'The Source Owner',
    role: 'Lending Ops · T24 owner · fixes at the right layer',
    accent: '#5BA2AE',
    accentDeep: '#29707A',
    orbMood: 'engaged',
    sourceCount: 5,
    version: 'v0.9',
    contextLabel: 'Engaged · upstream view',
    quote: 'Suggested fixes are fine; silent upstream mutation is not.',
    sample: [
      { who: 'you', t: 'How do AnaCredit issues usually reach your team today?', ts: '00:00:32' },
      { who: 'persona', t: 'Late and compressed. We get asked for an explanation when the central process is already under time pressure, which means sensible source fixes are suddenly treated like urgent exceptions.', ts: '00:00:36', cites: ['TRN-LO-01', 'BP-COL-6'] },
      { who: 'you', t: 'What should never happen automatically?', ts: '00:01:14' },
      { who: 'persona', t: 'Any change that effectively rewrites business meaning in the source without domain review. Suggested fixes are fine; silent upstream mutation is not.', ts: '00:01:18', cites: ['TRN-LO-04'] },
      { who: 'you', t: 'What does a fix request look like when it reaches you?' },
      { who: 'persona', t: '“T24 data is wrong” — no field, no population, no consequence. We spend the first day finding out what is actually being asked. When the request is specific, the fix itself is often hours, not days.' },
    ],
    sources: [
      { id: 'TRN-LO-01', kind: 'transcript', label: 'Synthetic interview · late escalations', weight: 0.36, snippet: '"sensible source fixes treated like urgent exceptions"', date: '2026-05-28' },
      { id: 'TRN-LO-03', kind: 'transcript', label: 'Synthetic interview · what she needs', weight: 0.22, snippet: '"the rule, the specific field, the affected population"', date: '2026-05-28' },
      { id: 'TRN-LO-04', kind: 'transcript', label: 'Synthetic interview · automation red line', weight: 0.18, snippet: '"silent upstream mutation is not"', date: '2026-05-28' },
      { id: 'TRN-LO-06', kind: 'transcript', label: 'Synthetic interview · trust condition', weight: 0.13, snippet: '"fix problems at the right layer"', date: '2026-05-28' },
      { id: 'BP-COL-6', kind: 'board', label: 'Breakpoint Map · correction loop column', weight: 0.11, snippet: 'unclear owner, evidence gaps, repeated fixes', date: '2026-06-03' },
    ],
    probes: ['Which T24 fields are operationally overloaded?', 'What does a good source-fix request contain?', 'How fast can a branch feed actually change?', 'What breaks if we bypass you?'],
  },
  'P-BIL-06': {
    name: 'Paul Faber',
    label: 'The Auditor',
    photo: 'assets/personas/paul.png',
    role: 'Internal Audit · replay-first · SoD guardian',
    accent: '#91C4CC',
    accentDeep: '#29707A',
    orbMood: 'drift',
    sourceCount: 5,
    version: 'v0.9',
    contextLabel: 'Skeptical · evidence-led',
    quote: 'Can I replay it? If not, the process is relying on memory somewhere.',
    sample: [
      { who: 'you', t: 'What is your first question when reviewing a new control workflow?', ts: '00:00:18' },
      { who: 'persona', t: 'Can I replay it? If the answer is no, I already know the process is relying on memory or informal evidence somewhere.', ts: '00:00:21', cites: ['TRN-IA-01'] },
      { who: 'you', t: 'What typically goes wrong in evidence packs?', ts: '00:00:54' },
      { who: 'persona', t: 'They prove the final number but not the control story. You can see what was reported, but not which rule was applied, who overrode what, or which version was in force.', ts: '00:00:58', cites: ['TRN-IA-02', 'TR-EVT-02'] },
      { who: 'you', t: 'Where does the current process rely on memory?' },
      { who: 'persona', t: 'The handoffs. Who decided to resubmit, why a warning was accepted, which version of the rules ran — that knowledge sits with individuals. When someone is on leave, the audit trail is effectively on leave with them.' },
    ],
    sources: [
      { id: 'TRN-IA-01', kind: 'transcript', label: 'Synthetic interview · replay question', weight: 0.34, snippet: '"relying on memory or informal evidence somewhere"', date: '2026-05-28' },
      { id: 'TRN-IA-02', kind: 'transcript', label: 'Synthetic interview · evidence-pack gaps', weight: 0.24, snippet: '"prove the final number but not the control story"', date: '2026-05-28' },
      { id: 'TRN-IA-03', kind: 'transcript', label: 'Synthetic interview · Trust Record fields', weight: 0.18, snippet: '"snapshot ID, policy version, rule results, approval logs…"', date: '2026-05-28' },
      { id: 'TR-EVT-04', kind: 'board', label: 'Trust Record board · human decision row', weight: 0.13, snippet: 'decision, decision_reason, approver_id — replay required', date: '2026-06-03' },
      { id: 'PAC-SOD', kind: 'doc', label: 'PaC schema · segregationOfDuties rule', weight: 0.11, snippet: 'no one person authors, approves, publishes, and attests', date: '2026-05-12' },
    ],
    probes: ['Which handoff worries you most?', 'How long must evidence be retained?', 'What makes an override defensible?', 'What can you not replay today?'],
  },
  'P-BIL-02': {
    name: 'Tom Reuter', label: 'The Ops Lead', photo: 'assets/personas/tom.png', role: 'AnaCredit Ops Lead · runs the monthly cycle',
    accent: '#5BA2AE', accentDeep: '#29707A', orbMood: 'engaged', sourceCount: 6, version: 'v0.9', contextLabel: 'Pragmatic · cycle-tested',
    quote: 'The same failures come back, but the surrounding evidence is always scattered.',
    sample: [
      { who: 'you', t: 'Where does the cycle actually lose its time?', ts: '00:00:41' },
      { who: 'persona', t: 'Reconstructing context. The defect classes repeat every month, but the evidence lives in files, emails, and memory. My job has quietly become hunting, not deciding.', ts: '00:00:45', cites: ['TRN-OPS-01', 'BP-COL-6'] },
      { who: 'you', t: 'What happens when the same defect comes back next month?' },
      { who: 'persona', t: 'We treat it as new. The fix history lives in closed email threads, so the root-cause work resets. The defect classes repeat — LEI gaps, sector codes, stale collateral values — but the institutional memory does not.' },
    ],
    sources: [
      { id: 'TRN-OPS-01', kind: 'transcript', label: 'Synthetic interview · context reconstruction', weight: 0.34, snippet: '"evidence is always scattered"', date: '2026-05-28' },
      { id: 'TRN-OPS-03', kind: 'transcript', label: 'Synthetic interview · triage wishlist', weight: 0.26, snippet: '"owner, severity, pattern, suggestion — pre-assembled"', date: '2026-05-28' },
      { id: 'TRN-OPS-04', kind: 'transcript', label: 'Synthetic interview · recurrence memory', weight: 0.21, snippet: '"no structural memory of last month\u2019s treatment"', date: '2026-05-28' },
      { id: 'BP-COL-6', kind: 'board', label: 'Breakpoint Map · correction loop column', weight: 0.19, snippet: 'no owner routing · defects recur monthly', date: '2026-06-03' },
    ],
    probes: ['Which defect class costs you the most hours?', 'How do you find the owner of a failure?', 'When is an override justified?', 'What does month-end actually look like?'],
  },
  'P-BIL-03': {
    name: 'Ana Marques', label: 'The Data Steward', photo: 'assets/personas/ana.png', role: 'Chief Data Officer · owns meaning across systems',
    accent: '#91C4CC', accentDeep: '#29707A', orbMood: 'cautious', sourceCount: 6, version: 'v0.9', contextLabel: 'Precise · lineage-first',
    quote: 'The bank often has data, but not a stable steward for the meaning of the data.',
    sample: [
      { who: 'you', t: 'Where do stewardship gaps actually show up?', ts: '00:00:36' },
      { who: 'persona', t: 'In shared fields. They look governed until the first exception appears — then everyone discovers the boundary was implicit. Ownership gaps are invisible until they are expensive.', ts: '00:00:40', cites: ['TRN-CDO-01', 'OLT-R1'] },
      { who: 'you', t: 'Where does meaning actually break between systems?' },
      { who: 'persona', t: 'At the handoff. A field leaves T24 meaning one thing and arrives in the reporting layer meaning something slightly different — counterparty class, default status. Nobody changed the data; the interpretation changed. Without a named steward, both readings are right until the regulator disagrees.' },
    ],
    sources: [
      { id: 'TRN-CDO-01', kind: 'transcript', label: 'Synthetic interview · implicit boundaries', weight: 0.34, snippet: '"governed-looking until the first exception lands"', date: '2026-05-28' },
      { id: 'TRN-CDO-02', kind: 'transcript', label: 'Synthetic interview · one-loan trace value', weight: 0.27, snippet: '"field-level accountability"', date: '2026-05-28' },
      { id: 'TRN-CDO-05', kind: 'transcript', label: 'Synthetic interview · observed vs inferred', weight: 0.2, snippet: '"observed data and inferred classification must never blur"', date: '2026-05-28' },
      { id: 'OLT-R1', kind: 'board', label: 'One-Loan Trace · steward column', weight: 0.19, snippet: 'CDO data steward on counterparty rows', date: '2026-06-03' },
    ],
    probes: ['Which field has no steward today?', 'Which shared fields are riskiest?', 'Where does meaning break across the handoff?', 'Who arbitrates when two systems disagree?'],
  },
  'P-BIL-04': {
    name: 'Marc Holzem', label: 'The Risk Officer', photo: 'assets/personas/marc.png', role: 'CRO · protects the challenge function',
    accent: '#FF8766', accentDeep: '#FF462D', orbMood: 'drift', sourceCount: 6, version: 'v0.9', contextLabel: 'Guarded · challenge-ready',
    quote: 'Speed without auditability is not a win in a regulated control process.',
    sample: [
      { who: 'you', t: 'Where does the current process worry you most?' },
      { who: 'persona', t: 'Manual corrections under deadline pressure. A value changes between validation and submission and the rationale is informal. Each one is sensible in isolation; in aggregate they are an unmanaged risk channel.' },
      { who: 'you', t: 'Why does the rule-layer separation matter so much to you?', ts: '00:01:05' },
      { who: 'persona', t: 'Because challenge depends on it. If deterministic rules and probabilistic suggestions blur, I can no longer ask “why did the system decide this” — and a control I cannot challenge is not a control.', ts: '00:01:09', cites: ['TRN-CRO-02', 'RC-CAT'], pending: true },
    ],
    sources: [
      { id: 'TRN-CRO-01', kind: 'transcript', label: 'Synthetic interview · accountability line', weight: 0.36, snippet: '"cannot outsource accountability to a model"', date: '2026-05-28' },
      { id: 'TRN-CRO-02', kind: 'transcript', label: 'Synthetic interview · layer separation', weight: 0.27, snippet: '"blur them and challenge becomes impossible"', date: '2026-05-28' },
      { id: 'TRN-CRO-04', kind: 'transcript', label: 'Synthetic interview · material overrides', weight: 0.19, snippet: '"severity, impact, owner, rationale on anything material"', date: '2026-05-28' },
      { id: 'RC-CAT', kind: 'board', label: 'Rule Catalogue · authority + rule type columns', weight: 0.18, snippet: 'deterministic vs interpretive split per rule', date: '2026-06-03' },
    ],
    probes: ['Which rule is really an interpretation?', 'What evidence makes an override defensible?', 'Where do informal corrections happen today?', 'What risk accumulates unseen?'],
  },
  'P-BIL-07': {
    name: 'Elise Hoffmann', label: 'The Liaison', role: 'Supervisor Liaison · owns the BCL conversation',
    accent: '#5BA2AE', accentDeep: '#29707A', orbMood: 'cautious', sourceCount: 6, version: 'v0.9', contextLabel: 'Composed · regulator-facing',
    quote: 'The issue is rarely only the value; it is whether the bank can respond clearly and consistently.',
    sample: [
      { who: 'you', t: 'What happens when a correction request lands today?', ts: '00:00:33' },
      { who: 'persona', t: 'A credibility test on a 20-working-day clock. I assemble the story while the regulator waits — and what weakens confidence fastest is two teams telling different versions of it.', ts: '00:00:37', cites: ['TRN-LIA-01', 'TR-EVT-07'] },
      { who: 'you', t: 'What does a good response to the BCL contain?', ts: '00:01:12' },
      { who: 'persona', t: 'Issue summary, the run it belongs to, rule context, affected scope, deterministic versus interpretive, the corrective action, and a named approver. One consistent story per request — signed by a human.', ts: '00:01:16', cites: ['TRN-LIA-03'], pending: true },
    ],
    sources: [
      { id: 'TRN-LIA-01', kind: 'transcript', label: 'Synthetic interview · credibility test', weight: 0.35, snippet: '"different teams telling different versions"', date: '2026-05-28' },
      { id: 'TRN-LIA-03', kind: 'transcript', label: 'Synthetic interview · response pack', weight: 0.27, snippet: '"one consistent story per correction request"', date: '2026-05-28' },
      { id: 'TRN-LIA-04', kind: 'transcript', label: 'Synthetic interview · structured feedback', weight: 0.2, snippet: '"classified, routed, linked to the run"', date: '2026-05-28' },
      { id: 'TR-EVT-07', kind: 'board', label: 'Trust Record · feedback ingested row', weight: 0.18, snippet: 'feedback_item_id · classification · run linkage', date: '2026-06-03' },
    ],
    probes: ['What does the BCL actually ask first?', 'One-off or structural — how do you tell?', 'What timing commitments are safe?', 'What must never be auto-sent?'],
  },
  'P-BIL-08': {
    name: 'Olivier Gorin', label: 'The Sponsor', photo: 'assets/personas/olivier.jpg', role: 'Executive Sponsor · funds the build',
    accent: '#FF8766', accentDeep: '#FF462D', orbMood: 'engaged', sourceCount: 6, version: 'v0.9', contextLabel: 'Decisive · value-led',
    quote: 'Every month a team I rarely see performs a quiet rescue, and we book it as business as usual.',
    sample: [
      { who: 'you', t: 'How does the AnaCredit process show up at your level?' },
      { who: 'persona', t: 'As cost, and as risk I cannot quantify. Every month a team I rarely see performs a quiet rescue, and the bank books it as business as usual. The cost is real but spread thin enough that no single line item triggers action.' },
      { who: 'you', t: 'What number do you actually steer on today?' },
      { who: 'persona', t: 'None that I trust. I hear that quality is improving, without a baseline. What I need is resubmission rate, correction-loop hours, and time-to-answer when the regulator asks — measured, with owners.' },
    ],
    sources: [
      { id: 'TRN-SPO-01', kind: 'transcript', label: 'Synthetic interview · lighthouse logic', weight: 0.34, snippet: '"the reusable asset is the governed operating pattern"', date: '2026-05-28' },
      { id: 'TRN-SPO-02', kind: 'transcript', label: 'Synthetic interview · what funding needs', weight: 0.28, snippet: '"funding stories without baselines"', date: '2026-05-28' },
      { id: 'TRN-SPO-03', kind: 'transcript', label: 'Synthetic interview · control story framing', weight: 0.2, snippet: '"funding control, speed, and confidence — not a tech story"', date: '2026-05-28' },
      { id: 'VSC-D1', kind: 'board', label: 'Value Scorecard · sponsor decisions', weight: 0.18, snippet: 'publish metrics to steering monthly', date: '2026-06-03' },
    ],
    probes: ['What does the monthly rescue actually cost?', 'Which metric would you defend at steering?', 'Where is the unquantified risk?', 'Which decision are you avoiding?'],
  },
  'P-BIL-09': {
    name: 'David Schmit', label: 'The Platform Lead', photo: 'assets/personas/david.png', role: 'IT Integration Lead · contracts, versions, replay',
    accent: '#91C4CC', accentDeep: '#29707A', orbMood: 'engaged', sourceCount: 6, version: 'v0.9', contextLabel: 'Methodical · version-aware',
    quote: 'Manual uploads are doing control work today, and that work is undocumented.',
    sample: [
      { who: 'you', t: 'What actually happens in the manual upload steps?' },
      { who: 'persona', t: 'Control work nobody wrote down. The person uploading checks the file shape, spots odd volumes, holds back a feed that looks wrong. None of that is in a procedure — it lives in their hands.' },
      { who: 'you', t: 'What does a schema change look like today?' },
      { who: 'persona', t: 'BCL publishes a new version and we discover the impact by running into it. Mapping updates, test files, release timing — coordinated by email across three teams. A version event is treated as a surprise, every time.' },
    ],
    sources: [
      { id: 'TRN-IT-01', kind: 'transcript', label: 'Synthetic interview · hidden checkpoints', weight: 0.35, snippet: '"control work nobody wrote down"', date: '2026-05-28' },
      { id: 'TRN-IT-02', kind: 'transcript', label: 'Synthetic interview · versioning first', weight: 0.27, snippet: '"schema change is an engineering event"', date: '2026-05-28' },
      { id: 'TRN-IT-04', kind: 'transcript', label: 'Synthetic interview · advisory boundary', weight: 0.2, snippet: '"behind a controlled interface — never the policy result"', date: '2026-05-28' },
      { id: 'CGM-G2', kind: 'board', label: 'Control Gate Model · schema validation gate', weight: 0.18, snippet: 'schema mismatch always blocks', date: '2026-06-03' },
    ],
    probes: ['Which manual step hides a control?', 'How does a schema change land today?', 'What breaks replay today?', 'Where do versions live?'],
  },
  'P-BIL-10': {
    name: 'Mia Janssens', label: 'The Product Owner', role: 'Product / Engineering Owner · slices the build',
    accent: '#FF8766', accentDeep: '#FF462D', orbMood: 'cautious', sourceCount: 6, version: 'v0.9', contextLabel: 'Focused · scope-guarding',
    quote: 'There is no burning failure, only chronic cost — that is exactly why nothing changes.',
    sample: [
      { who: 'you', t: 'Where does the current process resist change?' },
      { who: 'persona', t: 'It works — that is the problem. Heroics produce a compliant file every month, so there is no burning failure, only chronic cost. Improving it means touching a chain where any undocumented step might be load-bearing.' },
      { who: 'you', t: 'What do you need to know before changing any step?' },
      { who: 'persona', t: 'What it consumes, what it produces, who relies on it, and what breaks downstream when it is wrong. Today that knowledge is interview-only — it lives in people, not in artifacts.' },
    ],
    sources: [
      { id: 'TRN-PO-01', kind: 'transcript', label: 'Synthetic interview · architecture too early', weight: 0.34, snippet: '"attractive demos, weak production foundations"', date: '2026-05-28' },
      { id: 'TRN-PO-02', kind: 'transcript', label: 'Synthetic interview · definition of done', weight: 0.28, snippet: '"built, tested, logged, explainable, approved, replayable"', date: '2026-05-28' },
      { id: 'TRN-PO-03', kind: 'transcript', label: 'Synthetic interview · deterministic first', weight: 0.2, snippet: '"learning follows behind — not in front"', date: '2026-05-28' },
      { id: 'DC-P0', kind: 'board', label: 'Demo Contract · P0 acceptance tests', weight: 0.18, snippet: 'no approval possible without reason text', date: '2026-06-03' },
    ],
    probes: ['Which step is load-bearing but undocumented?', 'Where does chronic cost hide?', 'What would break first if volumes doubled?', 'Who holds the process knowledge?'],
  },
};

const BIL_ROSTER = [
  { id: 'P-BIL-01', name: 'Claire Weber', role: 'Head of Reg. Reporting', ev: 6, tone: 'spruce', status: 'live' },
  { id: 'P-BIL-02', name: 'Tom Reuter', role: 'AnaCredit Ops Lead', ev: 6, tone: 'spruce', status: 'live' },
  { id: 'P-BIL-03', name: 'Ana Marques', role: 'Chief Data Officer', ev: 6, tone: 'spruce', status: 'live' },
  { id: 'P-BIL-04', name: 'Marc Holzem', role: 'Chief Risk Officer', ev: 6, tone: 'spruce', status: 'live' },
  { id: 'P-BIL-05', name: 'Sofia Krier', role: 'Lending Ops Owner', ev: 5, tone: 'spruce', status: 'live' },
  { id: 'P-BIL-06', name: 'Paul Faber', role: 'Internal Audit Lead', ev: 5, tone: 'warning', status: 'review' },
  { id: 'P-BIL-07', name: 'Elise Hoffmann', role: 'Supervisor Liaison', ev: 6, tone: 'spruce', status: 'live' },
  { id: 'P-BIL-08', name: 'Olivier Gorin', role: 'Executive Sponsor', ev: 6, tone: 'spruce', status: 'live' },
  { id: 'P-BIL-09', name: 'David Schmit', role: 'IT Integration Lead', ev: 6, tone: 'spruce', status: 'live' },
  { id: 'P-BIL-10', name: 'Mia Janssens', role: 'Product / Eng Owner', ev: 6, tone: 'spruce', status: 'live' },
];

function ScreenBilTalk({ personaId = 'P-BIL-01' }) {
  const p = BIL_TALK[personaId] || BIL_TALK['P-BIL-01'];
  return (
    <div style={{ width: '100%', height: '100%', background: '#07090C', color: '#E7EAEE', fontFamily: 'var(--font-sans)', display: 'grid', gridTemplateRows: 'auto 1fr', overflow: 'hidden' }}>
      <BilTalkHeader p={p} pid={personaId} />
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)', gap: 14, padding: '14px 28px 24px', minHeight: 0 }}>
        <BilStage p={p} pid={personaId} />
        <BilConversation p={p} personaId={personaId} />
      </div>
    </div>
  );
}

function BilTalkHeader({ p, pid }) {
  return (
    <div style={{ padding: '20px 28px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
        <div style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.46)' }}>Talk to persona · synthetic — not a real person</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 48, lineHeight: 1.04, letterSpacing: '-0.02em', color: p.accent }}>{p.label}</h1>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '5px 14px 5px 6px', borderRadius: 999, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            {p.photo ? (
              <img src={p.photo} alt={p.name} style={{ width: 28, height: 28, borderRadius: 999, objectFit: 'cover', display: 'block', border: `1px solid ${p.accent}` }} />
            ) : (
              <span style={{ width: 28, height: 28, borderRadius: 999, background: 'rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.8)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10.5, fontWeight: 700 }}>{p.name.split(' ').map((w) => w[0]).join('')}</span>
            )}
            <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.82)' }}>{p.name}</span>
            <span style={{ width: 1, height: 10, background: 'rgba(255,255,255,0.18)' }}></span>
            <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.55)' }}>{p.role.split(' · ')[0]}</span>
          </div>
        </div>
      </div>
      <button style={{ ...talkChip, flex: '0 0 auto' }}>Use answer in board</button>
    </div>
  );
}

const talkChip = { padding: '6px 12px', borderRadius: 6, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.78)', fontSize: 11.5, fontWeight: 500, fontFamily: 'var(--font-sans)', cursor: 'pointer' };

function BilStage({ p, pid }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 10, border: '1px solid rgba(255,255,255,0.07)', background: '#06080B', minHeight: 0, display: 'grid', gridTemplateRows: '1fr auto' }}>
      <div style={{ position: 'relative', minHeight: 0 }}>
        <PersonaOrb mood={p.orbMood} accent={p.accentDeep} personaName={p.name} moodLabel={p.contextLabel} speaking={true} density={3200} />
        {/* portrait embodied at the orb's center */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          {p.photo ? (
            <img src={p.photo} alt={p.name} style={{
              width: 148, height: 148, borderRadius: 999, objectFit: 'cover', display: 'block',
              border: `2px solid ${p.accent}`, boxShadow: `0 0 0 6px rgba(0,0,0,0.45), 0 0 56px ${p.accentDeep}66`,
            }} />
          ) : (
            <span style={{
              width: 148, height: 148, borderRadius: 999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(255,255,255,0.05)', border: `2px solid ${p.accent}`, boxShadow: `0 0 0 6px rgba(0,0,0,0.45), 0 0 56px ${p.accentDeep}66`,
              fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 44, color: p.accent,
            }}>{p.name.split(' ').map((w) => w[0]).join('')}</span>
          )}
        </div>
      </div>
      <div style={{ padding: '12px 22px 14px', background: '#0A0D11', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: 5 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 16, lineHeight: 1.35, color: 'rgba(255,255,255,0.92)', letterSpacing: '-0.005em', textWrap: 'pretty' }}>
          <span style={{ color: p.accent, fontWeight: 500 }}>&ldquo;</span>{p.quote}<span style={{ color: p.accent, fontWeight: 500 }}>&rdquo;</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>
          <span>Built from the pre-work interviews and workshop boards.</span>
        </div>
      </div>
    </div>
  );
}

function BilRoster({ activeId }) {
  return (
    <div style={{ background: '#0E1116', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '12px 14px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.36)', marginBottom: 2 }}>10 in cohort · built from pre-work</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 15, color: '#E7EAEE' }}>Roster of personas</div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6 }}>
        {BIL_ROSTER.map((r) => {
          const active = r.id === activeId;
          return (
            <div key={r.id} style={{ padding: '7px 9px', borderRadius: 7, background: active ? 'rgba(255,70,45,0.10)' : 'rgba(255,255,255,0.03)', border: `1px solid ${active ? 'rgba(255,70,45,0.36)' : 'rgba(255,255,255,0.08)'}`, display: 'grid', gridTemplateColumns: '24px 1fr', gap: 8, alignItems: 'center', cursor: 'pointer' }}>
              <span style={{ width: 24, height: 24, borderRadius: 5, background: active ? '#FF462D' : 'rgba(255,255,255,0.08)', color: active ? '#fff' : 'rgba(255,255,255,0.74)', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 10.5, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{r.name.split(' ').map((w) => w[0]).join('')}</span>
              <span style={{ minWidth: 0 }}>
                <span style={{ display: 'block', fontSize: 10.5, fontWeight: 500, color: '#E7EAEE', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.name}</span>
                <span style={{ display: 'block', fontSize: 9, color: 'rgba(255,255,255,0.46)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.role}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BilTrace({ p }) {
  const last = [...p.sample].reverse().find((m) => m.who === 'persona') || {};
  const cites = last.cites || [];
  const kindLabel = { transcript: 'TRN', doc: 'DOC', board: 'BRD' };
  return (
    <div style={{ background: '#0E1116', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '12px 14px', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.36)', marginBottom: 2 }}>What grounds the answer</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 15, color: '#E7EAEE' }}>Traceability window</div>
        </div>
        <button style={{ ...talkChip, padding: '3px 8px', fontSize: 10.5 }}>Export trail</button>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 5 }}>
        {p.sources.map((s) => {
          const hot = cites.includes(s.id);
          return (
            <div key={s.id} style={{ display: 'grid', gridTemplateColumns: '44px 1fr auto', gap: 9, alignItems: 'center', padding: '6px 9px', borderRadius: 6, background: hot ? 'rgba(91,162,174,0.10)' : 'rgba(255,255,255,0.02)', border: `1px solid ${hot ? 'rgba(91,162,174,0.32)' : 'rgba(255,255,255,0.06)'}` }}>
              <span style={{ width: 42, height: 24, borderRadius: 4, background: hot ? 'rgba(91,162,174,0.18)' : 'rgba(255,255,255,0.05)', color: hot ? '#91C4CC' : 'rgba(255,255,255,0.46)', border: `1px solid ${hot ? 'rgba(91,162,174,0.32)' : 'rgba(255,255,255,0.08)'}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 9.5, fontWeight: 700, letterSpacing: '0.06em' }}>{kindLabel[s.kind] || 'SRC'}</span>
              <span style={{ minWidth: 0 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 10.5, color: '#E7EAEE', fontWeight: 500 }}>
                  <code style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, color: hot ? '#91C4CC' : 'rgba(255,255,255,0.5)', background: 'transparent', padding: 0 }}>{s.id}</code>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.label}</span>
                </span>
                <span style={{ display: 'block', fontSize: 9.5, color: 'rgba(255,255,255,0.52)', marginTop: 1, fontStyle: s.kind === 'transcript' ? 'italic' : 'normal', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.snippet}</span>
              </span>
              <span style={{ textAlign: 'right', minWidth: 44 }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 10.5, color: hot ? p.accent : 'rgba(255,255,255,0.72)', fontWeight: 600 }}>{Math.round(s.weight * 100)}%</span>
                <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 8.5, color: 'rgba(255,255,255,0.36)' }}>{s.date.slice(5)}</span>
              </span>
            </div>
          );
        })}
      </div>
      <div style={{ paddingTop: 8, marginTop: 6, borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'rgba(255,255,255,0.46)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        <span>{cites.length} hot · {p.sources.length} total</span>
        <span style={{ color: '#91C4CC' }}>highlight follows current line</span>
      </div>
    </div>
  );
}

// Build a grounding system prompt from the persona's data
function buildPersonaSystemPrompt(p) {
  const sourceList = p.sources.map(s =>
    `[${s.id}] (${s.kind}) ${s.label} — ${s.snippet} (weight: ${Math.round(s.weight * 100)}%)`
  ).join('\n');

  const sampleConvo = p.sample.map(m =>
    `${m.who === 'you' ? 'Interviewer' : p.name}: ${m.t}`
  ).join('\n');

  return `You are ${p.name}, "${p.label}".
Role: ${p.role}
Context: ${p.contextLabel}
Signature quote: "${p.quote}"

You are a synthetic persona — an AI composite built from pre-work interview transcripts and workshop boards for the Bank of Luxembourg AnaCredit project. You are NOT a real person. You embody the perspective, concerns, and language patterns captured in the source material below.

## How to respond
- Stay in character as ${p.name} at all times. Speak in first person.
- Ground every answer in the source material and sample transcript below. Do not invent facts about BiL's systems, processes, or people that aren't in your sources.
- When you reference a specific insight, mention the source ID in brackets, e.g. [${p.sources[0]?.id}].
- Match the tone and vocabulary from the sample transcript — ${p.name.split(' ')[0]} is ${p.contextLabel.toLowerCase()}.
- Keep answers concise (2-4 sentences typical). Be direct, not performative.
- If asked something outside your source material, say so honestly — "That's outside what I was briefed on" or similar.
- Never break character to discuss being an AI or LLM. You are the persona.

## Source material (${p.sourceCount} evidence items, weighted by relevance)
${sourceList}

## Sample transcript (calibration — match this voice and depth)
${sampleConvo}

## Suggested probe areas (topics you have strong grounding on)
${p.probes.join('\n')}`;
}

// Send a chat message to the persona via the proxy server
async function sendChatMessage(persona, messages) {
  const system = buildPersonaSystemPrompt(persona);
  const apiMessages = messages.map(m => ({
    role: m.who === 'you' ? 'user' : 'assistant',
    content: m.t,
  }));

  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ system, messages: apiMessages }),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const errMsg = data?.error?.message || data?.error || `HTTP ${res.status}`;
    throw new Error(typeof errMsg === 'string' ? errMsg : JSON.stringify(errMsg));
  }

  // Claude API returns { content: [{ type: 'text', text: '...' }] }
  if (data?.content && Array.isArray(data.content)) {
    const text = data.content.filter(b => b.type === 'text').map(b => b.text).join('');
    if (text) return text;
  }

  // Fallback: surface whatever we got as a readable error
  const fallback = data?.error?.message || data?.error;
  if (fallback) throw new Error(typeof fallback === 'string' ? fallback : JSON.stringify(fallback));
  return 'No response';
}

// Text-to-speech via ElevenLabs proxy
async function speakText(text, personaId) {
  const voice_id = PERSONA_VOICES[personaId] || null;
  if (!voice_id) return null;
  const res = await fetch('/api/tts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, voice_id }),
  });
  if (!res.ok) throw new Error('TTS failed');
  const blob = await res.blob();
  return URL.createObjectURL(blob);
}

function SpeakButton({ text, personaId, accent, autoPlay }) {
  const voice_id = PERSONA_VOICES[personaId];
  const [state, setState] = React.useState(autoPlay ? 'loading' : 'idle'); // idle | loading | playing
  const audioRef = React.useRef(null);

  if (!voice_id) return null;

  const doSpeak = React.useCallback(async () => {
    setState('loading');
    try {
      const url = await speakText(text, personaId);
      if (!url) { setState('idle'); return; }
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => setState('idle');
      audio.onerror = () => setState('idle');
      await audio.play();
      setState('playing');
    } catch {
      setState('idle');
    }
  }, [text, personaId]);

  // Auto-play on mount if requested
  React.useEffect(() => {
    if (autoPlay) {
      doSpeak();
    }
  }, [autoPlay, doSpeak]);

  const handleClick = async () => {
    if (state === 'playing' && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setState('idle');
      return;
    }
    doSpeak();
  };

  const speakerIcon = state === 'playing' ? (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor"/></svg>
  ) : (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><path d="M15.54 8.46a5 5 0 010 7.07"/><path d="M19.07 4.93a10 10 0 010 14.14"/></svg>
  );

  return (
    <button onClick={handleClick} title={state === 'playing' ? 'Stop' : 'Listen'} style={{
      width: 24, height: 24, borderRadius: 999, border: `1px solid ${accent}44`,
      background: state === 'playing' ? `${accent}22` : 'rgba(255,255,255,0.04)',
      color: accent, fontSize: 9, cursor: 'pointer', display: 'inline-flex',
      alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: 4,
      opacity: state === 'loading' ? 0.5 : 1, transition: 'opacity 0.15s, background 0.15s',
    }}>{state === 'loading' ? <span style={{ fontSize: 10 }}>...</span> : speakerIcon}</button>
  );
}

function BilConversation({ p, personaId }) {
  const first = p.name.split(' ')[0];
  const scrollRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const recognitionRef = React.useRef(null);
  const [messages, setMessages] = React.useState(() =>
    p.sample.map(m => ({ who: m.who, t: m.t, cites: m.cites }))
  );
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [listening, setListening] = React.useState(false);

  // Auto-scroll on new messages
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const send = async (text) => {
    if (!text.trim() || loading) return;
    const userMsg = { who: 'you', t: text.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const reply = await sendChatMessage(p, updated);
      setMessages(prev => [...prev, { who: 'persona', t: reply }]);
      // Auto-play voice for personas with a voice ID
      if (PERSONA_VOICES[personaId]) {
        try {
          const url = await speakText(reply, personaId);
          if (url) {
            const audio = new Audio(url);
            audio.play();
          }
        } catch (e) { console.log('TTS auto-play failed:', e); }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const handleProbe = (text) => {
    setInput(text);
    send(text);
  };

  const toggleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError('Speech recognition is not supported in this browser.');
      return;
    }

    if (listening && recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = false;

    let finalTranscript = '';

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event) => {
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }
      setInput(finalTranscript + interim);
    };

    recognition.onend = () => {
      setListening(false);
      recognitionRef.current = null;
      if (finalTranscript.trim()) {
        send(finalTranscript.trim());
      }
    };

    recognition.onerror = (e) => {
      setListening(false);
      recognitionRef.current = null;
      if (e.error !== 'aborted') setError('Mic error: ' + e.error);
    };

    recognition.start();
  };

  return (
    <div style={{ background: '#0E1116', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: 18, display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
      {/* transcript — scrollable message list */}
      <div ref={scrollRef} style={{ flex: 1, minHeight: 0, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 13, paddingRight: 4 }}>
        {messages.map((m, i) => {
          const isYou = m.who === 'you';
          return (
            <div key={i} style={{ minWidth: 0, display: 'grid', gridTemplateColumns: '24px 1fr', gap: 9 }}>
              {isYou ? (
                <span style={{ width: 22, height: 22, borderRadius: 999, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.55)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, marginTop: 1 }}>You</span>
              ) : p.photo ? (
                <img src={p.photo} alt={first} style={{ width: 22, height: 22, borderRadius: 999, objectFit: 'cover', display: 'block', border: `1px solid ${p.accent}`, marginTop: 1 }} />
              ) : (
                <span style={{ width: 22, height: 22, borderRadius: 999, background: 'rgba(255,255,255,0.10)', color: p.accent, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, marginTop: 1 }}>{p.name.split(' ').map((w) => w[0]).join('')}</span>
              )}
              <span style={{ minWidth: 0 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, color: isYou ? 'rgba(255,255,255,0.42)' : p.accent, marginBottom: 3 }}>
                  {isYou ? 'You' : first}
                  {!isYou && <SpeakButton text={m.t} personaId={personaId} accent={p.accent} autoPlay={!!m.autoSpeak} />}
                </span>
                <span style={{ display: 'block', fontSize: 13, lineHeight: 1.5, color: isYou ? 'rgba(255,255,255,0.78)' : '#F1F3F6', textWrap: 'pretty', whiteSpace: 'pre-wrap' }}>{m.t}</span>
              </span>
            </div>
          );
        })}
        {/* Typing indicator */}
        {loading && (
          <div style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: 9 }}>
            {p.photo ? (
              <img src={p.photo} alt={first} style={{ width: 22, height: 22, borderRadius: 999, objectFit: 'cover', display: 'block', border: `1px solid ${p.accent}`, marginTop: 1 }} />
            ) : (
              <span style={{ width: 22, height: 22, borderRadius: 999, background: 'rgba(255,255,255,0.10)', color: p.accent, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, marginTop: 1 }}>{p.name.split(' ').map((w) => w[0]).join('')}</span>
            )}
            <span>
              <span style={{ display: 'block', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, color: p.accent, marginBottom: 3 }}>{first}</span>
              <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: p.accent, opacity: 0.6, animation: 'chDot 1.2s ease infinite' }}></span>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: p.accent, opacity: 0.6, animation: 'chDot 1.2s ease 0.2s infinite' }}></span>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: p.accent, opacity: 0.6, animation: 'chDot 1.2s ease 0.4s infinite' }}></span>
              </span>
            </span>
          </div>
        )}
        {/* Error display */}
        {error && (
          <div style={{ padding: '8px 12px', borderRadius: 6, background: 'rgba(255,70,45,0.12)', border: '1px solid rgba(255,70,45,0.3)', color: '#FFB8A3', fontSize: 12, lineHeight: 1.4 }}>
            {error}
          </div>
        )}
      </div>
      {/* try asking — clickable probes */}
      <div>
        <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(255,255,255,0.36)', marginBottom: 8 }}>Try asking</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {p.probes.map((t) => (
            <span key={t} onClick={() => handleProbe(t)} style={{ padding: '6px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', fontSize: 11.5, cursor: loading ? 'wait' : 'pointer', opacity: loading ? 0.5 : 1, transition: 'opacity 0.15s' }}>{t}</span>
          ))}
        </div>
      </div>
      {/* ask box — real input */}
      <div style={{ display: 'grid', gridTemplateColumns: '32px 1fr auto', gap: 8, alignItems: 'center', padding: '8px 10px', borderRadius: 6, background: '#161A21', border: listening ? '1px solid rgba(255,70,45,0.5)' : '1px solid rgba(255,255,255,0.08)', transition: 'border-color 0.2s' }}>
        <button onClick={toggleVoiceInput} disabled={loading} title={listening ? 'Stop listening' : 'Speak your question'} style={{ width: 30, height: 30, borderRadius: 999, background: listening ? 'rgba(255,70,45,0.35)' : 'rgba(255,70,45,0.14)', border: '1px solid rgba(255,70,45,0.36)', color: listening ? '#FF462D' : '#FFB8A3', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: loading ? 'default' : 'pointer', transition: 'background 0.2s, color 0.2s', animation: listening ? 'chDot 1.2s ease infinite' : 'none' }}>
          <svg width="13" height="13" viewBox="0 0 32 32" fill="none"><rect x="12" y="4" width="8" height="14" rx="4" fill="currentColor"></rect><path d="M8 16a8 8 0 0016 0M16 24v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"></path></svg>
        </button>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder={`Ask ${first} anything\u2026`}
          disabled={loading}
          style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: 12.5, color: '#E7EAEE', fontFamily: 'var(--font-sans)', width: '100%' }}
        />
        <button
          onClick={() => send(input)}
          disabled={loading || !input.trim()}
          style={{ padding: '7px 14px', borderRadius: 5, cursor: loading || !input.trim() ? 'default' : 'pointer', background: loading || !input.trim() ? '#5C3328' : '#FF462D', border: '1px solid #FF462D', color: '#fff', fontSize: 12, fontWeight: 600, opacity: loading || !input.trim() ? 0.5 : 1, transition: 'opacity 0.15s, background 0.15s' }}>
          {loading ? '...' : 'Ask'}
        </button>
      </div>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', lineHeight: 1.45 }}>
        Answers are grounded in the pre-work interviews and workshop boards. Powered by Claude.
      </div>
    </div>
  );
}

Object.assign(window, { ScreenBilTalk, BIL_ROSTER });
