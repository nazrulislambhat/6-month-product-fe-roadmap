import { useState, useEffect, useCallback } from "react";

const roadmap = [
  {
    month: 1, label: "Mar 8 – Apr 8", title: "JavaScript Mastery",
    theme: "Know the engine, not just the syntax", color: "#FF6B35",
    weekdays: "Core internals: scope, closures, prototypes, 'this', call/apply/bind",
    weekends: "Async JS: event loop, microtasks, promises, async/await, generators + ES6–ES2024 features",
    topics: [
      { name: "Scope, closures, lexical env", type: "js" },
      { name: "Prototypes & prototype chain", type: "js" },
      { name: "'this' keyword — all 5 rules", type: "js" },
      { name: "call, apply, bind", type: "js" },
      { name: "Event loop, call stack, task queue", type: "js" },
      { name: "Microtasks vs macrotasks", type: "js" },
      { name: "Promises (internals + chaining)", type: "js" },
      { name: "async/await + error handling", type: "js" },
      { name: "Generators & iterators", type: "js" },
      { name: "ES6–ES2024: destructuring, spread, modules, optional chaining, nullish", type: "js" },
      { name: "WeakMap, WeakSet, Symbol", type: "js" },
      { name: "LeetCode Easy: arrays & strings (20 problems)", type: "dsa" },
    ],
    resources: [
      "javascript.info — read every section, it's the bible",
      "Jake Archibald: 'In the Loop' (YouTube) — event loop visually",
      "You Don't Know JS (free on GitHub) — Scope & Closures, this & Object Prototypes",
      "LeetCode Blind 75 — arrays section",
    ],
    project: { name: "JS Runtime Visualizer", stack: "Vanilla JS, no frameworks", desc: "A browser tool that visually animates the Call Stack, Web APIs, Callback Queue, and Microtask Queue in real time as you type JS code. Users write async code and watch it execute step-by-step with color-coded blocks. Think Loupe (latentflip.com) but built by you.", why: "Forces you to deeply understand the event loop. Impressive in interviews AND as a portfolio piece — it's a teaching tool. Shows mastery, not just usage." },
    milestone: "Can whiteboard explain closures, prototype chain, and event loop without notes",
  },
  {
    month: 2, label: "Apr 8 – May 8", title: "React — Deep & Wide",
    theme: "Go far beyond hooks", color: "#61DAFB",
    weekdays: "React internals: reconciliation, fiber, virtual DOM, rendering behavior, batching",
    weekends: "Patterns: compound components, render props, HOCs, portals, context, error boundaries, Suspense, concurrent features",
    topics: [
      { name: "Virtual DOM & Reconciliation algorithm", type: "react" },
      { name: "React Fiber — what it is & why it exists", type: "react" },
      { name: "Render & commit phases", type: "react" },
      { name: "Batching (React 18 automatic batching)", type: "react" },
      { name: "All hooks: useState, useEffect, useRef, useReducer, useContext, useCallback, useMemo, useId, useTransition, useDeferredValue", type: "react" },
      { name: "Custom hooks — build 8+ real ones", type: "react" },
      { name: "Context API — correct usage + pitfalls + when NOT to use", type: "react" },
      { name: "Compound components pattern", type: "react" },
      { name: "Render props pattern", type: "react" },
      { name: "Higher Order Components (HOC)", type: "react" },
      { name: "React Portals", type: "react" },
      { name: "Error Boundaries", type: "react" },
      { name: "Suspense + concurrent features (useTransition, useDeferredValue)", type: "react" },
      { name: "forwardRef & useImperativeHandle", type: "react" },
      { name: "React 19: use(), Actions, Server Components mental model", type: "react" },
      { name: "LeetCode Easy/Medium: hashmaps (20 problems)", type: "dsa" },
    ],
    resources: [
      "react.dev — official docs, read ALL of it including deep dives",
      "Nadia Makarevich: Advanced React (advancedreact.com) — best React patterns resource",
      "Theo / t3.gg YouTube — React 19, patterns, real-world usage",
      "React source code (github.com/facebook/react) — skim the reconciler folder",
    ],
    project: { name: "Notion-like Block Editor", stack: "React + TypeScript", desc: "A rich text block editor where each block (heading, paragraph, image, code, todo, divider) is its own component. Press '/' to open a floating command menu (portal), drag blocks to reorder, inline markdown shortcuts auto-convert text (## → heading), autosave to localStorage, undo/redo history with useReducer.", why: "Hits compound components, context, custom hooks, portals (slash menu), drag & drop, complex state management — almost every React pattern in one project. This is the kind of build interviewers reference." },
    milestone: "Can explain React reconciliation, fiber, and all render phases in an interview. Can build any UI pattern without googling.",
  },
  {
    month: 3, label: "May 8 – Jun 8", title: "TypeScript + State Management",
    theme: "What every product company assumes you know", color: "#4ECDC4",
    weekdays: "TypeScript: types, interfaces, generics, utility types, type narrowing, discriminated unions",
    weekends: "Redux Toolkit + Zustand + TanStack Query — server vs client state, when to use what",
    topics: [
      { name: "TS: types vs interfaces — when to use each", type: "ts" },
      { name: "TS: Generics in functions, components, hooks", type: "ts" },
      { name: "TS: Utility types — Partial, Pick, Omit, Record, Extract, Exclude, ReturnType, Parameters", type: "ts" },
      { name: "TS: Type narrowing & user-defined type guards", type: "ts" },
      { name: "TS: Discriminated unions", type: "ts" },
      { name: "TS: Template literal types", type: "ts" },
      { name: "TS: Typing React — props, events, refs, context, generics in components", type: "ts" },
      { name: "Redux Toolkit: createSlice, createAsyncThunk, RTK Query", type: "state" },
      { name: "Zustand: store setup, slices, devtools, subscriptions", type: "state" },
      { name: "TanStack Query: queries, mutations, caching, optimistic updates, infinite scroll", type: "state" },
      { name: "State architecture: local vs context vs Zustand vs React Query", type: "state" },
      { name: "LeetCode Medium: linked lists, stacks, queues (20 problems)", type: "dsa" },
    ],
    resources: [
      "Total TypeScript (totaltypescript.com) — free exercises, best TS resource online",
      "Redux Toolkit docs — RTK Query section specifically",
      "TanStack Query docs — caching & optimistic updates sections",
      "Matt Pocock YouTube — advanced TypeScript patterns",
    ],
    project: { name: "Real-time Collaborative Task Board", stack: "React + TypeScript + Zustand + Supabase", desc: "A Linear/Jira-style board: multiple swimlane columns, drag-and-drop cards across columns, optimistic updates (moves feel instant before server confirms), keyboard shortcuts, activity log for each card, filters by assignee/label, offline indicator with sync on reconnect. Use Supabase Realtime (free tier) for live collaboration between two browser tabs.", why: "Showcases Zustand for UI state, TanStack Query for server state + optimistic updates, TypeScript generics, and real-time — four things interviewers love in one app." },
    milestone: "Can migrate any JS React codebase to TypeScript. Can architect state management without overthinking.",
  },
  {
    month: 4, label: "Jun 8 – Jul 8", title: "Performance + Testing",
    theme: "What separates Senior from Mid — most candidates skip this entirely", color: "#A8E063",
    weekdays: "React perf: profiling, memoization traps, code splitting, lazy loading, virtualization, bundle analysis",
    weekends: "Testing pyramid: Jest unit, React Testing Library, MSW for API mocking, Cypress E2E basics",
    topics: [
      { name: "React DevTools Profiler — reading flame graphs", type: "perf" },
      { name: "When NOT to use memo/useCallback/useMemo (most important lesson)", type: "perf" },
      { name: "React.lazy + Suspense for code splitting", type: "perf" },
      { name: "Route-based vs component-level code splitting", type: "perf" },
      { name: "Virtual lists: TanStack Virtual or react-window", type: "perf" },
      { name: "Image optimization: lazy load, WebP, blur-up pattern", type: "perf" },
      { name: "Web Vitals: LCP, INP, CLS — measuring and fixing each", type: "perf" },
      { name: "Bundle analysis: webpack-bundle-analyzer / vite visualizer", type: "perf" },
      { name: "Jest: unit tests, mocks, spies, fake timers", type: "testing" },
      { name: "React Testing Library: queries, user-event, async utils, accessibility queries", type: "testing" },
      { name: "MSW (Mock Service Worker): API mocking — the modern way", type: "testing" },
      { name: "Cypress: E2E flows, intercept network, custom commands", type: "testing" },
      { name: "LeetCode Medium: trees BFS/DFS (20 problems)", type: "dsa" },
    ],
    resources: [
      "web.dev/performance — Google's guide, free & comprehensive",
      "Kent C. Dodds blog — testing-library.com + his blog on testing philosophy",
      "MSW docs (mswjs.io) — best modern mocking approach",
      "Chrome DevTools Performance tab — learn to use it deeply",
    ],
    project: { name: "Streaming Platform UI (Engineering-focused)", stack: "React + TS + TanStack Query + Vitest + MSW + Cypress", desc: "NOT a copy-paste Netflix clone. Focus on engineering challenges: virtualized carousels handling 1000+ rows without jank, skeleton screens with shimmer, lazy-loaded images with blur-up reveal, route-based code splitting with Suspense, infinite scroll, full test coverage with MSW mocking all API calls, Lighthouse performance score of 90+. Measure and document before/after optimizations.", why: "The Lighthouse 90+ constraint means you can't cut corners. Forces every perf technique. Employers see the score in your README and know you take quality seriously." },
    milestone: "Can profile any React app, identify bottlenecks, fix them, and prove it with metrics. 80%+ test coverage.",
  },
  {
    month: 5, label: "Jul 8 – Aug 8", title: "Next.js + Frontend System Design",
    theme: "The two rounds most people fail because they never prepared", color: "#C77DFF",
    weekdays: "Next.js: App Router, SSR/SSG/ISR/RSC, routing, API routes, middleware, edge functions",
    weekends: "Frontend system design: architecture, design systems, real-time, auth, micro-frontends, scalability",
    topics: [
      { name: "Next.js App Router — layouts, loading.tsx, error.tsx, parallel & intercepting routes", type: "nextjs" },
      { name: "SSR vs SSG vs ISR vs CSR — tradeoffs and when to choose", type: "nextjs" },
      { name: "React Server Components — mental model, when to use", type: "nextjs" },
      { name: "Next.js API routes + middleware + edge runtime", type: "nextjs" },
      { name: "Image/Font/Script optimization with next/image, next/font", type: "nextjs" },
      { name: "FE System Design: component architecture at scale", type: "system" },
      { name: "Design system: tokens, theming, component API design", type: "system" },
      { name: "Micro-frontends: module federation — concept + tradeoffs", type: "system" },
      { name: "Real-time: WebSockets vs SSE vs long polling vs WebRTC", type: "system" },
      { name: "Auth flows: JWT, OAuth 2.0, refresh tokens, session cookies, PKCE", type: "system" },
      { name: "Caching strategy: browser, CDN, stale-while-revalidate, cache busting", type: "system" },
      { name: "Accessibility: WCAG 2.2, ARIA roles, focus management, keyboard nav", type: "system" },
      { name: "LeetCode Medium: graphs, intro DP (20 problems)", type: "dsa" },
    ],
    resources: [
      "nextjs.org/docs — App Router section entirely",
      "greatfrontend.com — FE system design questions (paid, worth every rupee for this month)",
      "frontendinterviewhandbook.com — system design section (free)",
      "Leerob.io blog — Next.js real-world patterns by a Vercel engineer",
    ],
    project: { name: "GitHub-like Developer Dashboard", stack: "Next.js 14+ App Router + TypeScript + TanStack Query + Tailwind", desc: "A Next.js app showcasing every rendering strategy: SSR for public user profiles, ISR for trending repos (revalidate every hour), CSR for the authenticated activity dashboard. Add: real-time notifications via SSE, a CI status badge system, full dark/light theme via CSS variables, WCAG-compliant keyboard navigation. Uses GitHub public API (free, no backend needed).", why: "Forces conscious decisions about SSR vs ISR vs CSR per feature. Real-time, auth patterns, and accessibility all in one app. Next.js is used by almost every product company — this shows mastery." },
    milestone: "Can structure a complete 45-min frontend system design interview. Can defend SSR vs RSC vs ISR choices confidently.",
  },
  {
    month: 6, label: "Aug 8 – Sep 8", title: "DSA Crunch + Machine Coding",
    theme: "Interview battle mode", color: "#FFD93D",
    weekdays: "2 LeetCode problems daily — pattern-focused via Neetcode 150, never random grinding",
    weekends: "Machine coding rounds: build full features in 90-min timed sessions with no googling",
    topics: [
      { name: "Two pointers & sliding window (all variants)", type: "dsa" },
      { name: "Binary search on answer", type: "dsa" },
      { name: "BFS / DFS on trees + graphs", type: "dsa" },
      { name: "Heap / Priority Queue problems", type: "dsa" },
      { name: "DP 1D: climbing stairs, house robber, coin change", type: "dsa" },
      { name: "DP 2D: grid problems, longest common subsequence", type: "dsa" },
      { name: "Machine coding: Infinite scroll news feed", type: "machine" },
      { name: "Machine coding: Autocomplete with debounce + LRU cache", type: "machine" },
      { name: "Machine coding: Drag & drop file uploader with progress", type: "machine" },
      { name: "Machine coding: Multi-step onboarding wizard with validation", type: "machine" },
      { name: "Machine coding: Real-time chat UI with typing indicators", type: "machine" },
      { name: "Machine coding: Spreadsheet grid (Google Sheets mini)", type: "machine" },
      { name: "Machine coding: Rich text editor toolbar", type: "machine" },
    ],
    resources: [
      "neetcode.io — patterns + free YouTube walkthroughs (best DSA resource, period)",
      "namastedev.com — machine coding rounds, Indian product company focused",
      "bigfrontend.dev — FE-specific coding challenges + JS output questions",
      "LeetCode Top 150 Interview Questions",
    ],
    project: { name: "Component Library — your own mini shadcn/ui", stack: "React + TypeScript, zero UI libraries, Storybook, Vitest", desc: "Build 15 production-quality headless components from scratch with zero UI libraries: Button, Input (floating label + validation), Modal (portal + focus trap + a11y), Tooltip (smart positioning), Select (keyboard nav), Toast system, DatePicker, Data Table (sort + filter + pagination), Tabs, Accordion, Combobox, Slider, Progress, Badge, Skeleton. Each component has Storybook stories and unit tests.", why: "Machine coding rounds test this exact skill. Building from scratch means you truly understand what's inside libraries. Storybook deploy = live interactive portfolio that speaks for itself." },
    milestone: "Solve any Medium LeetCode in under 25 min. Complete any machine coding round in 90 min with clean, tested, accessible code.",
  },
  {
    month: 7, label: "Sep 8 – Oct 8", title: "Mock Interviews + Offers",
    theme: "You're ready. Pull the trigger.", color: "#FF6B6B",
    weekdays: "2 mock interview sessions/week + fix weak spots + 10 applications/week minimum",
    weekends: "System design mocks + behavioral prep + portfolio polish + salary research",
    topics: [
      { name: "Mock: JS internals rounds ×4 (Pramp / peers)", type: "mock" },
      { name: "Mock: React/TypeScript coding rounds ×4", type: "mock" },
      { name: "Mock: Machine coding rounds ×6 (timed, strict)", type: "mock" },
      { name: "Mock: System design rounds ×4", type: "mock" },
      { name: "Behavioral: 10 STAR stories prepared", type: "mock" },
      { name: "Resume: one-page, ATS-optimized, tailored per company tier", type: "apply" },
      { name: "GitHub: all 6 projects live with READMEs, demo GIFs, Vercel deploys", type: "apply" },
      { name: "LinkedIn: DM engineers + EMs at target companies directly", type: "apply" },
      { name: "Negotiation: use levels.fyi + Blind before accepting any offer", type: "apply" },
    ],
    resources: [
      "Pramp.com — free peer mock interviews (use it aggressively)",
      "interviewing.io — paid, real interviewers from FAANG if budget allows",
      "levels.fyi — salary benchmarking before any negotiation",
      "Glassdoor + Blind — company-specific interview question banks",
    ],
    project: { name: "Portfolio Site — make it unforgettable", stack: "Next.js + MDX + Framer Motion + Tailwind", desc: "Not a template. A custom-designed Next.js site: page transitions with Framer Motion, interactive project showcases with live demos embedded, a technical blog with MDX where you document your 7-month journey (this alone gets you referrals), dark/light theme, Lighthouse 95+ score.", why: "You now have 6 strong projects. Engineers who apply with a compelling portfolio get callbacks 3× faster. Your blog posts about what you built signal senior thinking to hiring managers." },
    milestone: "2+ offers in hand by Oct 8. HCLTech → Product Company in 7 months through deliberate practice.",
  },
];

const typeColors: Record<string, string> = {
  js: "#FF6B35", react: "#61DAFB", ts: "#3178C6", state: "#764ABC",
  perf: "#A8E063", testing: "#F48FB1", nextjs: "#aaaaaa",
  system: "#C77DFF", dsa: "#FFD93D", machine: "#4ECDC4",
  mock: "#FF6B6B", apply: "#80DEEA",
};
const typeLabels: Record<string, string> = {
  js: "JavaScript", react: "React", ts: "TypeScript", state: "State Mgmt",
  perf: "Performance", testing: "Testing", nextjs: "Next.js",
  system: "System Design", dsa: "DSA", machine: "Machine Coding",
  mock: "Mock", apply: "Apply",
};
const projectSummary = [
  { name: "JS Runtime Visualizer", stack: "Vanilla JS" },
  { name: "Notion Block Editor", stack: "React + TS" },
  { name: "Collab Task Board", stack: "+ Supabase" },
  { name: "Streaming UI", stack: "Perf + Tests" },
  { name: "GitHub Dashboard", stack: "Next.js" },
  { name: "Component Library", stack: "Storybook" },
  { name: "Portfolio Site", stack: "Next.js + MDX" },
];

const STORAGE_KEY = "fe-roadmap-progress";
const THEME_KEY = "fe-roadmap-theme";

const safeGet = async (key) => {
  try { const r = await window.storage.get(key); return r?.value ?? null; } catch { return null; }
};
const safeSet = async (key, val) => {
  try { await window.storage.set(key, val); return true; } catch { return false; }
};

export default function Roadmap() {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState("topics");
  const [dark, setDark] = useState(true);
  const [checked, setChecked] = useState({});
  const [hydrated, setHydrated] = useState(false);
  const [saveStatus, setSaveStatus] = useState("idle");

  const m = roadmap[active];

  // ── Load persisted data once on mount (non-blocking) ──────────────────────
  useEffect(() => {
    (async () => {
      const [prog, theme] = await Promise.all([safeGet(STORAGE_KEY), safeGet(THEME_KEY)]);
      if (prog) { try { setChecked(JSON.parse(prog)); } catch {} }
      if (theme) setDark(theme === "dark");
      setHydrated(true);
    })();
  }, []);

  // ── Persist checkboxes (skip first render before hydration) ───────────────
  useEffect(() => {
    if (!hydrated) return;
    setSaveStatus("saving");
    safeSet(STORAGE_KEY, JSON.stringify(checked)).then((ok) => {
      setSaveStatus(ok ? "saved" : "error");
      setTimeout(() => setSaveStatus("idle"), 1800);
    });
  }, [checked]); // eslint-disable-line

  // ── Persist theme ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (!hydrated) return;
    safeSet(THEME_KEY, dark ? "dark" : "light");
  }, [dark]); // eslint-disable-line

  const toggle = useCallback((k) => setChecked(p => ({ ...p, [k]: !p[k] })), []);

  const total = roadmap.reduce((s, r) => s + r.topics.length, 0);
  const done = Object.values(checked).filter(Boolean).length;
  const pct = Math.round((done / total) * 100);

  // ── Theme tokens ───────────────────────────────────────────────────────────
  const T = dark ? {
    bg: "#07070e", bg2: "#0b0b17", bg3: "#0e0e1c", bg4: "#0c0c18",
    border: "#181828", border2: "#151525", border3: "#141424",
    text: "#dde", text2: "#ccc", text3: "#bbb", text4: "#999",
    muted: "#555", muted2: "#333", muted3: "#282838",
    headerBg: "#07070e", cardInner: "#07070e",
  } : {
    bg: "#f4f5f9", bg2: "#ffffff", bg3: "#eef0f7", bg4: "#f0f2f9",
    border: "#dde0ed", border2: "#e4e7f2", border3: "#dce0ef",
    text: "#1a1a2e", text2: "#2a2a42", text3: "#3a3a58", text4: "#555577",
    muted: "#888aaa", muted2: "#aaaacc", muted3: "#bbbbdd",
    headerBg: "#ffffff", cardInner: "#f7f8fd",
  };

  const saveLabel = saveStatus === "saving" ? "saving…" : saveStatus === "saved" ? "✓ saved" : saveStatus === "error" ? "⚠ error" : null;
  const saveColor = saveStatus === "saved" ? "#4ECDC4" : saveStatus === "error" ? "#FF6B6B" : T.muted2;

  return (
    <div style={{ minHeight: "100vh", background: T.bg, color: T.text, fontFamily: "'IBM Plex Mono','Fira Code',monospace", transition: "background 0.3s, color 0.3s" }}>

      {/* ── Sticky header ── */}
      <div style={{ position: "sticky", top: 0, zIndex: 20, background: T.headerBg, borderBottom: `1px solid ${T.border}`, padding: "16px 24px 12px", backdropFilter: "blur(8px)", transition: "background 0.3s" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
            <div>
              <div style={{ fontSize: 9, color: T.muted2, letterSpacing: 4, textTransform: "uppercase", marginBottom: 3 }}>HCLTech Senior FE → Product Company</div>
              <div style={{ fontSize: 20, fontWeight: 800, background: `linear-gradient(90deg,${dark ? "#fff" : "#1a1a2e"} 0%,${m.color} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", transition: "all 0.3s" }}>
                7-Month Crack Plan · Mar 8 – Oct 8, 2025
              </div>
            </div>

            {/* Right side: save status + progress + theme toggle */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                {/* Save status */}
                {saveLabel && (
                  <span style={{ fontSize: 9, color: saveColor, letterSpacing: 1, transition: "color 0.3s" }}>{saveLabel}</span>
                )}
                {/* Progress */}
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <div style={{ width: 120, height: 4, background: T.border2, borderRadius: 2, overflow: "hidden" }}>
                    <div style={{ width: `${pct}%`, height: "100%", background: `linear-gradient(90deg,${m.color},#a78bfa)`, transition: "width 0.5s" }} />
                  </div>
                  <span style={{ fontSize: 10, color: m.color, minWidth: 30 }}>{pct}%</span>
                </div>
                {/* Dark/light toggle */}
                <button
                  onClick={() => setDark(d => !d)}
                  title={dark ? "Switch to light mode" : "Switch to dark mode"}
                  style={{
                    width: 36, height: 20, borderRadius: 10, border: `1.5px solid ${T.border}`,
                    background: dark ? "#1e1e30" : "#e0e4f0",
                    cursor: "pointer", position: "relative", transition: "background 0.3s",
                    flexShrink: 0,
                  }}
                >
                  <div style={{
                    position: "absolute", top: 2, left: dark ? 17 : 2,
                    width: 12, height: 12, borderRadius: "50%",
                    background: dark ? "#a78bfa" : "#FFD93D",
                    transition: "left 0.25s, background 0.3s",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 7,
                  }}>
                    {dark ? "🌙" : "☀"}
                  </div>
                </button>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 9, color: T.muted2 }}>{done}/{total} topics · ~21.5h/week · ~630h total</span>
              </div>
            </div>
          </div>

          {/* Month tabs */}
          <div style={{ display: "flex", gap: 5, marginTop: 14, flexWrap: "wrap" }}>
            {roadmap.map((r, i) => (
              <button key={i} onClick={() => { setActive(i); setTab("topics"); }} style={{
                padding: "5px 12px", borderRadius: 5, fontFamily: "inherit", fontSize: 10, cursor: "pointer", transition: "all 0.2s",
                border: active === i ? `1.5px solid ${r.color}` : `1.5px solid ${T.border}`,
                background: active === i ? `${r.color}14` : "transparent",
                color: active === i ? r.color : T.muted,
                fontWeight: active === i ? 700 : 400,
              }}>
                M{r.month} <span style={{ opacity: 0.6, fontSize: 8 }}>{r.label.split("–")[0].trim()}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 980, margin: "0 auto", padding: "20px 24px" }}>

        {/* ── Month card header ── */}
        <div style={{ background: `linear-gradient(135deg,${m.color}0d 0%,${T.bg3} 70%)`, border: `1px solid ${m.color}22`, borderRadius: 12, padding: "18px 22px", marginBottom: 14, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontSize: 9, color: m.color, letterSpacing: 3, textTransform: "uppercase", marginBottom: 3 }}>Month {m.month} · {m.label}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: T.text, marginBottom: 3 }}>{m.title}</div>
            <div style={{ fontSize: 11, color: T.muted, fontStyle: "italic" }}>{m.theme}</div>
          </div>
          <div style={{ display: "flex", gap: 7 }}>
            {["topics", "project", "resources"].map(t => (
              <button key={t} onClick={() => setTab(t)} style={{
                padding: "6px 14px", borderRadius: 6, fontFamily: "inherit", fontSize: 10, cursor: "pointer", transition: "all 0.2s", fontWeight: 700, textTransform: "capitalize",
                background: tab === t ? m.color : "transparent",
                border: `1px solid ${tab === t ? m.color : T.border}`,
                color: tab === t ? (dark ? "#000" : "#fff") : T.muted,
              }}>{t === "project" ? "🚀 " : ""}{t}</button>
            ))}
          </div>
        </div>

        {/* ── TOPICS TAB ── */}
        {tab === "topics" && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
              {[["Weekdays 2–3h", m.weekdays, T.border], ["Weekends 4–5h", m.weekends, m.color]].map(([lbl, val, accent], i) => (
                <div key={i} style={{ background: T.bg4, borderRadius: 8, padding: "12px 16px", borderLeft: `3px solid ${accent}60`, transition: "background 0.3s" }}>
                  <div style={{ fontSize: 8, color: T.muted2, letterSpacing: 3, textTransform: "uppercase", marginBottom: 6 }}>{lbl}</div>
                  <div style={{ fontSize: 11, color: T.text3, lineHeight: 1.7 }}>{val}</div>
                </div>
              ))}
            </div>

            <div style={{ background: T.bg2, border: `1px solid ${T.border}`, borderRadius: 10, padding: "16px 18px", marginBottom: 14, transition: "background 0.3s" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div style={{ fontSize: 9, color: T.muted2, letterSpacing: 3, textTransform: "uppercase" }}>
                  Topics Checklist
                </div>
                <div style={{ fontSize: 9, color: m.color }}>
                  {m.topics.filter((_, i) => checked[`${m.month}-${i}`]).length}/{m.topics.length} done
                </div>
              </div>
              {/* Month mini progress bar */}
              <div style={{ height: 2, background: T.border2, borderRadius: 1, marginBottom: 14, overflow: "hidden" }}>
                <div style={{
                  height: "100%", borderRadius: 1, background: m.color, transition: "width 0.4s",
                  width: `${Math.round((m.topics.filter((_, i) => checked[`${m.month}-${i}`]).length / m.topics.length) * 100)}%`
                }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
                {m.topics.map((t, i) => {
                  const k = `${m.month}-${i}`, dn = checked[k];
                  return (
                    <div key={i} onClick={() => toggle(k)} style={{
                      display: "flex", alignItems: "flex-start", gap: 8, padding: "7px 10px", borderRadius: 6, cursor: "pointer", transition: "all 0.15s",
                      background: dn ? `${typeColors[t.type]}12` : T.bg4,
                      border: `1px solid ${dn ? typeColors[t.type] + "40" : T.border2}`,
                    }}>
                      <div style={{
                        width: 13, height: 13, borderRadius: 3, flexShrink: 0, marginTop: 1,
                        border: `1.5px solid ${dn ? typeColors[t.type] : T.muted2}`,
                        background: dn ? typeColors[t.type] : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 8, color: dark ? "#000" : "#fff", fontWeight: 900, transition: "all 0.2s",
                      }}>
                        {dn ? "✓" : ""}
                      </div>
                      <span style={{ fontSize: 10, color: dn ? T.muted : T.text2, flex: 1, textDecoration: dn ? "line-through" : "none", lineHeight: 1.5 }}>{t.name}</span>
                      <span style={{ fontSize: 7, padding: "1px 5px", borderRadius: 8, background: `${typeColors[t.type]}18`, color: typeColors[t.type], flexShrink: 0, whiteSpace: "nowrap" }}>{typeLabels[t.type]}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ background: `${m.color}0a`, border: `1px solid ${m.color}25`, borderRadius: 10, padding: "13px 16px", display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 18 }}>🎯</span>
              <div>
                <div style={{ fontSize: 9, color: m.color, letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>End of Month Goal</div>
                <div style={{ fontSize: 12, color: T.text2, lineHeight: 1.7 }}>{m.milestone}</div>
              </div>
            </div>
          </>
        )}

        {/* ── PROJECT TAB ── */}
        {tab === "project" && (
          <div style={{ background: T.bg2, border: `1px solid ${m.color}30`, borderRadius: 12, overflow: "hidden", transition: "background 0.3s" }}>
            <div style={{ padding: "20px 24px", borderBottom: `1px solid ${m.color}15`, background: `linear-gradient(135deg,${m.color}0a 0%,transparent 100%)` }}>
              <div style={{ fontSize: 9, color: m.color, letterSpacing: 3, textTransform: "uppercase", marginBottom: 6 }}>Month {m.month} Project</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: T.text, marginBottom: 8 }}>{m.project.name}</div>
              <span style={{ fontSize: 9, padding: "3px 10px", borderRadius: 10, background: `${m.color}18`, color: m.color }}>{m.project.stack}</span>
            </div>
            <div style={{ padding: "20px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <div style={{ fontSize: 9, color: T.muted2, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>What You're Building</div>
                <div style={{ fontSize: 12, color: T.text3, lineHeight: 1.8 }}>{m.project.desc}</div>
              </div>
              <div style={{ background: T.cardInner, border: `1px solid ${m.color}20`, borderRadius: 8, padding: "16px", transition: "background 0.3s" }}>
                <div style={{ fontSize: 9, color: m.color, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>💡 Why This Project</div>
                <div style={{ fontSize: 12, color: T.text4, lineHeight: 1.8 }}>{m.project.why}</div>
              </div>
            </div>
          </div>
        )}

        {/* ── RESOURCES TAB ── */}
        {tab === "resources" && (
          <div style={{ background: T.bg2, border: `1px solid ${T.border}`, borderRadius: 12, padding: "20px 24px", transition: "background 0.3s" }}>
            <div style={{ fontSize: 9, color: T.muted2, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Learning Resources</div>
            {m.resources.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: i < m.resources.length - 1 ? `1px solid ${T.border}` : "none" }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: `${m.color}18`, border: `1px solid ${m.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 }}>
                  {["📖", "🎥", "📚", "🔗"][i] || "📎"}
                </div>
                <div style={{ fontSize: 12, color: T.text3, lineHeight: 1.6, paddingTop: 4 }}>{r}</div>
              </div>
            ))}
          </div>
        )}

        {/* ── Projects strip ── */}
        <div style={{ marginTop: 22 }}>
          <div style={{ fontSize: 9, color: T.muted3, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>All 7 Projects</div>
          <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
            {projectSummary.map((p, i) => (
              <div key={i} onClick={() => { setActive(i); setTab("project"); }} style={{
                padding: "8px 13px", borderRadius: 8, cursor: "pointer", transition: "all 0.2s",
                border: `1px solid ${active === i ? roadmap[i].color + "50" : T.border}`,
                background: active === i ? `${roadmap[i].color}0e` : T.bg2,
              }}>
                <div style={{ fontSize: 10, color: active === i ? T.text : T.muted, fontWeight: 600, marginBottom: 2 }}>{p.name}</div>
                <div style={{ fontSize: 8, color: roadmap[i].color }}>{p.stack}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Strategy ── */}
        <div style={{ marginTop: 20, background: T.bg2, border: `1px solid ${T.border}`, borderRadius: 12, padding: "18px 22px", transition: "background 0.3s" }}>
          <div style={{ fontSize: 9, color: T.muted3, letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Hard Truths & Strategy</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
            {[
              ["React ≠ hooks only", "Most candidates only know hooks. Fiber, reconciliation, patterns, concurrent features — that's what 'Senior' actually means in interviews."],
              ["Projects > tutorials", "Don't watch 5 more hours of tutorials. Build the projects listed. Struggling through real problems is the actual learning."],
              ["Machine coding > DSA for Senior FE", "At Razorpay, Groww, BrowserStack — machine coding is weighted heavier than LeetCode for Senior FE. Prioritize accordingly."],
              ["Neetcode 150, not 500 random", "Pattern recognition beats random grinding. 150 problems understood deeply beats 400 memorized solutions."],
              ["Deploy everything. No exceptions.", "'I built it locally' does not exist. Every project needs a live Vercel URL. Free. No excuses."],
              ["Your HCLTech Senior title is leverage", "You're not a fresher. DM engineers on LinkedIn directly, skip portals when possible. Senior tag opens doors."],
            ].map(([title, desc], i) => (
              <div key={i} style={{ background: T.cardInner, borderRadius: 8, padding: "11px 14px", border: `1px solid ${T.border2}`, transition: "background 0.3s" }}>
                <div style={{ fontSize: 11, color: T.text, fontWeight: 700, marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 10, color: T.muted, lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Legend ── */}
        <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
          {Object.entries(typeLabels).map(([k, l]) => (
            <div key={k} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 9 }}>
              <div style={{ width: 6, height: 6, borderRadius: 2, background: typeColors[k] }} />
              <span style={{ color: T.muted3 }}>{l}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 28, paddingBottom: 24, fontSize: 9, color: T.muted3 }}>
          Progress auto-saved · {done} of {total} topics complete
        </div>
      </div>
    </div>
  );
}
