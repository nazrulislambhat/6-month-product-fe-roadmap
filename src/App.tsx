import { useState } from 'react';

const roadmap = [
  {
    month: 1,
    label: 'Mar 8 – Apr 8',
    title: 'JavaScript Mastery',
    theme: 'Know the engine, not just the syntax',
    color: '#FF6B35',
    weekdays:
      "Core internals: scope, closures, prototypes, 'this', call/apply/bind",
    weekends:
      'Async JS: event loop, microtasks, promises, async/await, generators + ES6–ES2024 features',
    topics: [
      { name: 'Scope, closures, lexical env', type: 'js' },
      { name: 'Prototypes & prototype chain', type: 'js' },
      { name: "'this' keyword — all 5 rules", type: 'js' },
      { name: 'call, apply, bind', type: 'js' },
      { name: 'Event loop, call stack, task queue', type: 'js' },
      { name: 'Microtasks vs macrotasks', type: 'js' },
      { name: 'Promises (internals + chaining)', type: 'js' },
      { name: 'async/await + error handling', type: 'js' },
      { name: 'Generators & iterators', type: 'js' },
      {
        name: 'ES6–ES2024: destructuring, spread, modules, optional chaining, nullish',
        type: 'js',
      },
      { name: 'WeakMap, WeakSet, Symbol', type: 'js' },
      { name: 'LeetCode Easy: arrays & strings (20 problems)', type: 'dsa' },
    ],
    resources: [
      "javascript.info — read every section, it's the bible",
      "Jake Archibald: 'In the Loop' (YouTube) — event loop visually",
      "You Don't Know JS (free on GitHub) — Scope & Closures, this & Object Prototypes",
      'LeetCode Blind 75 — arrays section',
    ],
    project: {
      name: 'JS Runtime Visualizer',
      desc: 'A browser tool that visually animates the Call Stack, Web APIs, Callback Queue, and Microtask Queue in real time as you type JS code. Users write async code and watch it execute step-by-step with color-coded blocks. Think Loupe (latentflip.com) but built by you.',
      why: "Forces you to deeply understand the event loop. Impressive in interviews AND as a portfolio piece — it's a teaching tool. Shows mastery, not just usage.",
      stack: 'Vanilla JS, no frameworks',
    },
    milestone:
      'Can whiteboard explain closures, prototype chain, and event loop without notes',
  },
  {
    month: 2,
    label: 'Apr 8 – May 8',
    title: 'React — Deep & Wide',
    theme: 'Go far beyond hooks',
    color: '#61DAFB',
    weekdays:
      'React internals: reconciliation, fiber, virtual DOM, rendering behavior, batching',
    weekends:
      'Patterns: compound components, render props, HOCs, portals, context, error boundaries, suspense, concurrent features',
    topics: [
      { name: 'Virtual DOM & Reconciliation algorithm', type: 'react' },
      { name: 'React Fiber — what it is & why it exists', type: 'react' },
      { name: 'Render & commit phases', type: 'react' },
      { name: 'Batching (React 18 automatic batching)', type: 'react' },
      {
        name: 'All hooks: useState, useEffect, useRef, useReducer, useContext, useCallback, useMemo, useId, useTransition, useDeferredValue',
        type: 'react',
      },
      { name: 'Custom hooks — build 8+ real ones', type: 'react' },
      {
        name: 'Context API — correct usage + pitfalls + when NOT to use',
        type: 'react',
      },
      { name: 'Compound components pattern', type: 'react' },
      { name: 'Render props pattern', type: 'react' },
      { name: 'Higher Order Components (HOC)', type: 'react' },
      { name: 'React Portals', type: 'react' },
      { name: 'Error Boundaries', type: 'react' },
      {
        name: 'Suspense + concurrent features (useTransition, useDeferredValue)',
        type: 'react',
      },
      { name: 'forwardRef & useImperativeHandle', type: 'react' },
      {
        name: 'React 19: use(), Actions, Server Components mental model',
        type: 'react',
      },
      { name: 'LeetCode Easy/Medium: hashmaps (20 problems)', type: 'dsa' },
    ],
    resources: [
      'react.dev — official docs, read ALL of it including the deep dives',
      'Nadia Makarevich: Advanced React (advancedreact.com) — best React patterns resource',
      'Theo / t3.gg YouTube — React 19, patterns, real-world usage',
      'React source code (github.com/facebook/react) — skim the reconciler folder',
    ],
    project: {
      name: 'Notion-like Block Editor',
      desc: "A rich text block editor where each block (heading, paragraph, image, code, todo, divider) is its own component. Press '/' to open a floating command menu (portal), drag blocks to reorder, inline markdown shortcuts auto-convert text (## → heading), autosave to localStorage, undo/redo history with useReducer.",
      why: 'Hits compound components, context, custom hooks, portals (slash menu), drag & drop, complex state management — almost every React pattern in one project. This is the kind of build interviewers reference.',
      stack: 'React + TypeScript (start adding TS here)',
    },
    milestone:
      'Can explain React reconciliation, fiber, and all render phases in an interview. Can build any UI pattern without googling.',
  },
  {
    month: 3,
    label: 'May 8 – Jun 8',
    title: 'TypeScript + State Management',
    theme: 'What every product company assumes you know',
    color: '#4ECDC4',
    weekdays:
      'TypeScript: types, interfaces, generics, utility types, type narrowing, discriminated unions',
    weekends:
      'Redux Toolkit + Zustand + TanStack Query — server vs client state, when to use what',
    topics: [
      { name: 'TS: types vs interfaces — when to use each', type: 'ts' },
      { name: 'TS: Generics in functions, components, hooks', type: 'ts' },
      {
        name: 'TS: Utility types — Partial, Pick, Omit, Record, Extract, Exclude, ReturnType, Parameters',
        type: 'ts',
      },
      { name: 'TS: Type narrowing & user-defined type guards', type: 'ts' },
      { name: 'TS: Discriminated unions', type: 'ts' },
      { name: 'TS: Template literal types', type: 'ts' },
      {
        name: 'TS: Typing React — props, events, refs, context, generics in components',
        type: 'ts',
      },
      {
        name: 'Redux Toolkit: createSlice, createAsyncThunk, RTK Query',
        type: 'state',
      },
      {
        name: 'Zustand: store setup, slices, devtools, subscriptions',
        type: 'state',
      },
      {
        name: 'TanStack Query: queries, mutations, caching, optimistic updates, infinite scroll',
        type: 'state',
      },
      {
        name: 'State architecture: local vs context vs Zustand vs React Query',
        type: 'state',
      },
      {
        name: 'LeetCode Medium: linked lists, stacks, queues (20 problems)',
        type: 'dsa',
      },
    ],
    resources: [
      'Total TypeScript (totaltypescript.com) — free exercises, best TS resource online',
      'Redux Toolkit docs — RTK Query section specifically',
      'TanStack Query docs — caching & optimistic updates sections',
      'Matt Pocock YouTube — advanced TypeScript patterns',
    ],
    project: {
      name: 'Real-time Collaborative Task Board',
      desc: 'A Linear/Jira-style board: multiple swimlane columns, drag-and-drop cards across columns, optimistic updates (moves feel instant before server confirms), keyboard shortcuts, activity log for each card, filters by assignee/label, offline indicator with sync on reconnect. Use Supabase Realtime (free tier) for live collaboration between two browser tabs.',
      why: 'Showcases Zustand for UI state, TanStack Query for server state + optimistic updates, TypeScript generics, and real-time — four things interviewers love in one app.',
      stack: 'React + TypeScript + Zustand + TanStack Query + Supabase',
    },
    milestone:
      'Can migrate any JS React codebase to TypeScript. Can architect state management without overthinking. Can explain tradeoffs between every state solution.',
  },
  {
    month: 4,
    label: 'Jun 8 – Jul 8',
    title: 'Performance + Testing',
    theme:
      'What separates Senior from Mid — most candidates skip this entirely',
    color: '#A8E063',
    weekdays:
      'React perf: profiling, memoization traps, code splitting, lazy loading, virtualization, bundle analysis',
    weekends:
      'Testing pyramid: Jest unit, React Testing Library, MSW for API mocking, Cypress E2E basics',
    topics: [
      { name: 'React DevTools Profiler — reading flame graphs', type: 'perf' },
      {
        name: 'When NOT to use memo/useCallback/useMemo (most important lesson)',
        type: 'perf',
      },
      { name: 'React.lazy + Suspense for code splitting', type: 'perf' },
      { name: 'Route-based vs component-level code splitting', type: 'perf' },
      { name: 'Virtual lists: TanStack Virtual or react-window', type: 'perf' },
      {
        name: 'Image optimization: lazy load, WebP, blur-up pattern',
        type: 'perf',
      },
      {
        name: 'Web Vitals: LCP, INP, CLS — measuring and fixing each',
        type: 'perf',
      },
      {
        name: 'Bundle analysis: webpack-bundle-analyzer / vite visualizer',
        type: 'perf',
      },
      { name: 'Jest: unit tests, mocks, spies, fake timers', type: 'testing' },
      {
        name: 'React Testing Library: queries, user-event, async utils, accessibility queries',
        type: 'testing',
      },
      {
        name: 'MSW (Mock Service Worker): API mocking — the modern way',
        type: 'testing',
      },
      {
        name: 'Cypress: E2E flows, intercept network, custom commands',
        type: 'testing',
      },
      { name: 'LeetCode Medium: trees BFS/DFS (20 problems)', type: 'dsa' },
    ],
    resources: [
      "web.dev/performance — Google's guide, free & comprehensive",
      'Kent C. Dodds blog — testing-library.com + his blog on testing philosophy',
      'MSW docs (mswjs.io) — best modern mocking approach',
      'Chrome DevTools Performance tab — learn to use it deeply',
    ],
    project: {
      name: 'Streaming Platform UI (Engineering-focused, not a clone)',
      desc: 'NOT a copy-paste Netflix clone. Focus on the engineering challenges: virtualized carousels handling 1000+ rows without jank, skeleton screens with shimmer, lazy-loaded images with blur-up reveal, route-based code splitting with Suspense, infinite scroll, full test coverage with MSW mocking all API calls, Lighthouse performance score of 90+. Measure and document before/after optimizations.',
      why: "The Lighthouse 90+ constraint means you can't cut corners. Forces every perf technique. Employers see the score in your README and know you take quality seriously.",
      stack:
        'React + TypeScript + TanStack Query + Vitest/Jest + MSW + Cypress',
    },
    milestone:
      'Can profile any React app, identify bottlenecks, fix them, and prove it with metrics. 80%+ test coverage on all projects.',
  },
  {
    month: 5,
    label: 'Jul 8 – Aug 8',
    title: 'Next.js + Frontend System Design',
    theme: 'The two rounds most people fail because they never prepared',
    color: '#C77DFF',
    weekdays:
      'Next.js: App Router, SSR/SSG/ISR/RSC, routing, API routes, middleware, edge functions',
    weekends:
      'Frontend system design: architecture, design systems, real-time, auth, micro-frontends, scalability',
    topics: [
      {
        name: 'Next.js App Router — layouts, loading.tsx, error.tsx, parallel & intercepting routes',
        type: 'nextjs',
      },
      {
        name: 'SSR vs SSG vs ISR vs CSR — tradeoffs and when to choose',
        type: 'nextjs',
      },
      {
        name: 'React Server Components — mental model, when to use',
        type: 'nextjs',
      },
      {
        name: 'Next.js API routes + middleware + edge runtime',
        type: 'nextjs',
      },
      {
        name: 'Image/Font/Script optimization with next/image, next/font',
        type: 'nextjs',
      },
      {
        name: 'FE System Design: component architecture at scale',
        type: 'system',
      },
      {
        name: 'Design system: tokens, theming, component API design',
        type: 'system',
      },
      {
        name: 'Micro-frontends: module federation — concept + tradeoffs',
        type: 'system',
      },
      {
        name: 'Real-time: WebSockets vs SSE vs long polling vs WebRTC — when to use',
        type: 'system',
      },
      {
        name: 'Auth flows: JWT, OAuth 2.0, refresh tokens, session cookies, PKCE',
        type: 'system',
      },
      {
        name: 'Caching strategy: browser, CDN, stale-while-revalidate, cache busting',
        type: 'system',
      },
      {
        name: 'Accessibility: WCAG 2.2, ARIA roles, focus management, keyboard nav',
        type: 'system',
      },
      { name: 'LeetCode Medium: graphs, intro DP (20 problems)', type: 'dsa' },
    ],
    resources: [
      'nextjs.org/docs — App Router section entirely',
      'greatfrontend.com — FE system design questions (paid, worth every rupee for this month)',
      'frontendinterviewhandbook.com — system design section (free)',
      'Leerob.io blog — Next.js real-world patterns by a Vercel engineer',
    ],
    project: {
      name: 'GitHub-like Developer Dashboard',
      desc: 'A Next.js app showcasing every rendering strategy: SSR for public user profiles, ISR for trending repos (revalidate every hour), CSR for the authenticated activity dashboard. Add: real-time notifications via SSE (Server-Sent Events), a CI status badge system with color states, full dark/light theme via CSS variables, WCAG-compliant keyboard navigation throughout. Uses GitHub public API (free, no backend needed).',
      why: 'Forces conscious decisions about SSR vs ISR vs CSR per feature. Real-time, auth patterns, and accessibility all in one app. Next.js is used by almost every product company — this shows mastery.',
      stack: 'Next.js 14+ App Router + TypeScript + TanStack Query + Tailwind',
    },
    milestone:
      'Can structure a complete 45-min frontend system design interview. Can defend SSR vs RSC vs ISR choices confidently.',
  },
  {
    month: 6,
    label: 'Aug 8 – Sep 8',
    title: 'DSA Crunch + Machine Coding',
    theme: 'Interview battle mode',
    color: '#FFD93D',
    weekdays:
      '2 LeetCode problems daily — pattern-focused via Neetcode 150, never random grinding',
    weekends:
      'Machine coding rounds: build full features in 90-min timed sessions with no googling',
    topics: [
      { name: 'Two pointers & sliding window (all variants)', type: 'dsa' },
      { name: 'Binary search on answer', type: 'dsa' },
      { name: 'BFS / DFS on trees + graphs', type: 'dsa' },
      { name: 'Heap / Priority Queue problems', type: 'dsa' },
      {
        name: 'DP 1D: climbing stairs, house robber, coin change',
        type: 'dsa',
      },
      { name: 'DP 2D: grid problems, longest common subsequence', type: 'dsa' },
      { name: 'Machine coding: Infinite scroll news feed', type: 'machine' },
      {
        name: 'Machine coding: Autocomplete with debounce + LRU cache',
        type: 'machine',
      },
      {
        name: 'Machine coding: Drag & drop file uploader with progress',
        type: 'machine',
      },
      {
        name: 'Machine coding: Multi-step onboarding wizard with validation',
        type: 'machine',
      },
      {
        name: 'Machine coding: Real-time chat UI with typing indicators',
        type: 'machine',
      },
      {
        name: 'Machine coding: Spreadsheet grid (Google Sheets mini)',
        type: 'machine',
      },
      { name: 'Machine coding: Rich text editor toolbar', type: 'machine' },
    ],
    resources: [
      'neetcode.io — patterns + free YouTube walkthroughs (best DSA resource, period)',
      'namastedev.com — machine coding rounds, Indian product company focused',
      'bigfrontend.dev — FE-specific coding challenges + JS output questions',
      'LeetCode Top 150 Interview Questions',
    ],
    project: {
      name: 'Component Library — your own mini shadcn/ui',
      desc: 'Build 15 production-quality headless components from scratch with zero UI libraries: Button (all variants + loading state), Input (validation states + floating label), Modal (portal + focus trap + a11y), Tooltip (Popper-style smart positioning), Select (custom with keyboard nav), Toast system, DatePicker, Data Table (sort + filter + pagination), Tabs, Accordion, Combobox, Slider, Progress, Badge, Skeleton. Each component has Storybook stories and unit tests.',
      why: "Machine coding rounds test this exact skill. Building from scratch means you truly understand what's inside libraries. Storybook deploy = live interactive portfolio that speaks for itself.",
      stack: 'React + TypeScript, zero UI libraries, Storybook, Vitest',
    },
    milestone:
      'Solve any Medium LeetCode in under 25 min. Complete any machine coding round in 90 min with clean, tested, accessible code.',
  },
  {
    month: 7,
    label: 'Sep 8 – Oct 8',
    title: 'Mock Interviews + Offers',
    theme: "You're ready. Pull the trigger.",
    color: '#FF6B6B',
    weekdays:
      '2 mock interview sessions/week + fix weak spots + 10 applications/week minimum',
    weekends:
      'System design mocks + behavioral prep + portfolio polish + salary research',
    topics: [
      { name: 'Mock: JS internals rounds x4 (Pramp / peers)', type: 'mock' },
      { name: 'Mock: React/TypeScript coding rounds x4', type: 'mock' },
      { name: 'Mock: Machine coding rounds x6 (timed, strict)', type: 'mock' },
      { name: 'Mock: System design rounds x4', type: 'mock' },
      {
        name: 'Behavioral: 10 STAR stories prepared (leadership, conflict, failure, impact)',
        type: 'mock',
      },
      {
        name: 'Resume: one-page, ATS-optimized, tailored per company tier',
        type: 'apply',
      },
      {
        name: 'GitHub: all 6 projects live with READMEs, demo GIFs, Vercel deploys',
        type: 'apply',
      },
      {
        name: 'LinkedIn: DM engineers + EMs at target companies directly',
        type: 'apply',
      },
      {
        name: 'Negotiation: use levels.fyi + Blind before accepting any offer',
        type: 'apply',
      },
    ],
    resources: [
      'Pramp.com — free peer mock interviews (use it aggressively)',
      'interviewing.io — paid, but real interviewers from FAANG if budget allows',
      'levels.fyi — salary benchmarking before any negotiation',
      'Glassdoor + Blind — company-specific interview question banks',
    ],
    project: {
      name: 'Portfolio Site — make it unforgettable',
      desc: 'Not a template. A custom-designed Next.js site: page transitions with Framer Motion, interactive project showcases with live demos embedded in iframes, a technical blog with MDX where you document your 7-month journey (this alone gets you referrals), dark/light theme, Lighthouse 95+ score. This is the last thing a recruiter sees before calling you.',
      why: 'You now have 6 strong projects. Engineers who apply with a compelling portfolio get callbacks 3x faster. Your blog posts about what you built signal senior thinking to hiring managers.',
      stack: 'Next.js + MDX + Framer Motion + Tailwind',
    },
    milestone:
      '2+ offers in hand by Oct 8. You went from HCLTech to a product company in 7 months through deliberate practice.',
  },
];

const typeColors = {
  js: '#FF6B35',
  react: '#61DAFB',
  ts: '#3178C6',
  state: '#764ABC',
  perf: '#A8E063',
  testing: '#F48FB1',
  nextjs: '#e0e0e0',
  system: '#C77DFF',
  dsa: '#FFD93D',
  machine: '#4ECDC4',
  mock: '#FF6B6B',
  apply: '#80DEEA',
};

const typeLabels = {
  js: 'JavaScript',
  react: 'React',
  ts: 'TypeScript',
  state: 'State Mgmt',
  perf: 'Performance',
  testing: 'Testing',
  nextjs: 'Next.js',
  system: 'System Design',
  dsa: 'DSA',
  machine: 'Machine Coding',
  mock: 'Mock',
  apply: 'Apply',
};

const projectSummary = [
  { name: 'JS Runtime Visualizer', stack: 'Vanilla JS', month: 0 },
  { name: 'Notion Block Editor', stack: 'React + TS', month: 1 },
  { name: 'Collab Task Board', stack: '+ Supabase', month: 2 },
  { name: 'Streaming UI', stack: 'Perf + Tests', month: 3 },
  { name: 'GitHub Dashboard', stack: 'Next.js', month: 4 },
  { name: 'Component Library', stack: 'Storybook', month: 5 },
  { name: 'Portfolio Site', stack: 'Next.js + MDX', month: 6 },
];

export default function Roadmap() {
  const [active, setActive] = useState(0);
  const [checked, setChecked] = useState({});
  const [tab, setTab] = useState('topics');

  const m = roadmap[active];
  const toggle = (k) => setChecked((p) => ({ ...p, [k]: !p[k] }));

  const total = roadmap.reduce((s, r) => s + r.topics.length, 0);
  const done = Object.values(checked).filter(Boolean).length;
  const pct = Math.round((done / total) * 100);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#07070e',
        color: '#dde',
        fontFamily: "'IBM Plex Mono','Fira Code',monospace",
      }}
    >
      {/* Sticky header */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          background: '#07070e',
          borderBottom: '1px solid #181828',
          padding: '18px 24px 14px',
        }}
      >
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: 10,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 9,
                  color: '#333',
                  letterSpacing: 4,
                  textTransform: 'uppercase',
                  marginBottom: 3,
                }}
              >
                HCLTech Senior FE → Product Company
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  background: `linear-gradient(90deg,#fff 0%,${m.color} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  transition: 'all 0.3s',
                }}
              >
                7-Month Crack Plan · Mar 8 – Oct 8, 2025
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: 4,
              }}
            >
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <div
                  style={{
                    width: 130,
                    height: 4,
                    background: '#151525',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${pct}%`,
                      height: '100%',
                      background: `linear-gradient(90deg,${m.color},#a78bfa)`,
                      transition: 'width 0.5s',
                    }}
                  />
                </div>
                <span style={{ fontSize: 10, color: m.color }}>{pct}%</span>
              </div>
              <span style={{ fontSize: 9, color: '#333' }}>
                ~21.5h/week · ~630h total
              </span>
            </div>
          </div>

          <div
            style={{ display: 'flex', gap: 5, marginTop: 14, flexWrap: 'wrap' }}
          >
            {roadmap.map((r, i) => (
              <button
                key={i}
                onClick={() => {
                  setActive(i);
                  setTab('topics');
                }}
                style={{
                  padding: '5px 12px',
                  borderRadius: 5,
                  fontFamily: 'inherit',
                  fontSize: 10,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border:
                    active === i
                      ? `1.5px solid ${r.color}`
                      : '1.5px solid #181828',
                  background: active === i ? `${r.color}14` : 'transparent',
                  color: active === i ? r.color : '#3a3a5a',
                  fontWeight: active === i ? 700 : 400,
                }}
              >
                M{r.month}{' '}
                <span style={{ opacity: 0.6, fontSize: 8 }}>
                  {r.label.split('–')[0].trim()}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 980, margin: '0 auto', padding: '20px 24px' }}>
        {/* Month card header */}
        <div
          style={{
            background: `linear-gradient(135deg,${m.color}0d 0%,#0e0e1c 70%)`,
            border: `1px solid ${m.color}22`,
            borderRadius: 12,
            padding: '18px 22px',
            marginBottom: 14,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 9,
                color: m.color,
                letterSpacing: 3,
                textTransform: 'uppercase',
                marginBottom: 3,
              }}
            >
              Month {m.month} · {m.label}
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: '#fff',
                marginBottom: 3,
              }}
            >
              {m.title}
            </div>
            <div style={{ fontSize: 11, color: '#666', fontStyle: 'italic' }}>
              {m.theme}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 7 }}>
            {['topics', 'project', 'resources'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 6,
                  fontFamily: 'inherit',
                  fontSize: 10,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  background: tab === t ? m.color : 'transparent',
                  border: `1px solid ${tab === t ? m.color : '#1e1e30'}`,
                  color: tab === t ? '#000' : '#555',
                }}
              >
                {t === 'project' ? '🚀 ' : ''}
                {t}
              </button>
            ))}
          </div>
        </div>

        {tab === 'topics' && (
          <>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 10,
                marginBottom: 14,
              }}
            >
              {[
                ['Weekdays 2–3h', m.weekdays, '#222'],
                ['Weekends 4–5h', m.weekends, m.color],
              ].map(([lbl, val, accent], i) => (
                <div
                  key={i}
                  style={{
                    background: '#0c0c18',
                    borderRadius: 8,
                    padding: '12px 16px',
                    borderLeft: `3px solid ${accent}40`,
                  }}
                >
                  <div
                    style={{
                      fontSize: 8,
                      color: '#333',
                      letterSpacing: 3,
                      textTransform: 'uppercase',
                      marginBottom: 6,
                    }}
                  >
                    {lbl}
                  </div>
                  <div style={{ fontSize: 11, color: '#bbb', lineHeight: 1.7 }}>
                    {val}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: '#0b0b17',
                border: '1px solid #181828',
                borderRadius: 10,
                padding: '16px 18px',
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  color: '#333',
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  marginBottom: 12,
                }}
              >
                Topics Checklist ·{' '}
                {m.topics.filter((_, i) => checked[`${m.month}-${i}`]).length}/
                {m.topics.length} done
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 5,
                }}
              >
                {m.topics.map((t, i) => {
                  const k = `${m.month}-${i}`,
                    dn = checked[k];
                  return (
                    <div
                      key={i}
                      onClick={() => toggle(k)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 8,
                        padding: '7px 10px',
                        borderRadius: 6,
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                        background: dn
                          ? `${typeColors[t.type]}0a`
                          : 'transparent',
                        border: `1px solid ${dn ? typeColors[t.type] + '30' : '#151525'}`,
                      }}
                    >
                      <div
                        style={{
                          width: 13,
                          height: 13,
                          borderRadius: 3,
                          flexShrink: 0,
                          marginTop: 1,
                          border: `1.5px solid ${dn ? typeColors[t.type] : '#252535'}`,
                          background: dn ? typeColors[t.type] : 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 8,
                          color: '#000',
                          fontWeight: 900,
                          transition: 'all 0.2s',
                        }}
                      >
                        {dn ? '✓' : ''}
                      </div>
                      <span
                        style={{
                          fontSize: 10,
                          color: dn ? '#444' : '#ccc',
                          flex: 1,
                          textDecoration: dn ? 'line-through' : 'none',
                          lineHeight: 1.5,
                        }}
                      >
                        {t.name}
                      </span>
                      <span
                        style={{
                          fontSize: 7,
                          padding: '1px 5px',
                          borderRadius: 8,
                          background: `${typeColors[t.type]}18`,
                          color: typeColors[t.type],
                          flexShrink: 0,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {typeLabels[t.type]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              style={{
                background: `${m.color}0a`,
                border: `1px solid ${m.color}25`,
                borderRadius: 10,
                padding: '13px 16px',
                display: 'flex',
                gap: 10,
                alignItems: 'flex-start',
              }}
            >
              <span style={{ fontSize: 18 }}>🎯</span>
              <div>
                <div
                  style={{
                    fontSize: 9,
                    color: m.color,
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    marginBottom: 4,
                  }}
                >
                  End of Month Goal
                </div>
                <div style={{ fontSize: 12, color: '#ddd', lineHeight: 1.7 }}>
                  {m.milestone}
                </div>
              </div>
            </div>
          </>
        )}

        {tab === 'project' && (
          <div
            style={{
              background: '#0b0b17',
              border: `1px solid ${m.color}30`,
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                padding: '20px 24px',
                borderBottom: `1px solid ${m.color}15`,
                background: `linear-gradient(135deg,${m.color}0a 0%,transparent 100%)`,
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  color: m.color,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  marginBottom: 6,
                }}
              >
                Month {m.month} Project
              </div>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 900,
                  color: '#fff',
                  marginBottom: 8,
                }}
              >
                {m.project.name}
              </div>
              <span
                style={{
                  fontSize: 9,
                  padding: '3px 10px',
                  borderRadius: 10,
                  background: `${m.color}18`,
                  color: m.color,
                }}
              >
                {m.project.stack}
              </span>
            </div>
            <div
              style={{
                padding: '20px 24px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 9,
                    color: '#333',
                    letterSpacing: 3,
                    textTransform: 'uppercase',
                    marginBottom: 10,
                  }}
                >
                  What You're Building
                </div>
                <div style={{ fontSize: 12, color: '#ccc', lineHeight: 1.8 }}>
                  {m.project.desc}
                </div>
              </div>
              <div
                style={{
                  background: '#07070e',
                  border: `1px solid ${m.color}20`,
                  borderRadius: 8,
                  padding: '16px',
                }}
              >
                <div
                  style={{
                    fontSize: 9,
                    color: m.color,
                    letterSpacing: 3,
                    textTransform: 'uppercase',
                    marginBottom: 10,
                  }}
                >
                  💡 Why This Project
                </div>
                <div style={{ fontSize: 12, color: '#999', lineHeight: 1.8 }}>
                  {m.project.why}
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 'resources' && (
          <div
            style={{
              background: '#0b0b17',
              border: '1px solid #181828',
              borderRadius: 12,
              padding: '20px 24px',
            }}
          >
            <div
              style={{
                fontSize: 9,
                color: '#333',
                letterSpacing: 3,
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              Learning Resources
            </div>
            {m.resources.map((r, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 12,
                  padding: '12px 0',
                  borderBottom:
                    i < m.resources.length - 1 ? '1px solid #111122' : 'none',
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    background: `${m.color}18`,
                    border: `1px solid ${m.color}25`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    flexShrink: 0,
                  }}
                >
                  {['📖', '🎥', '📚', '🔗'][i] || '📎'}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: '#bbb',
                    lineHeight: 1.6,
                    paddingTop: 4,
                  }}
                >
                  {r}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects strip */}
        <div style={{ marginTop: 22 }}>
          <div
            style={{
              fontSize: 9,
              color: '#282838',
              letterSpacing: 3,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            All 7 Projects
          </div>
          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
            {projectSummary.map((p, i) => (
              <div
                key={i}
                onClick={() => {
                  setActive(i);
                  setTab('project');
                }}
                style={{
                  padding: '8px 13px',
                  borderRadius: 8,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border: `1px solid ${active === i ? roadmap[i].color + '50' : '#141424'}`,
                  background:
                    active === i ? `${roadmap[i].color}0e` : '#0b0b17',
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: active === i ? '#fff' : '#777',
                    fontWeight: 600,
                    marginBottom: 2,
                  }}
                >
                  {p.name}
                </div>
                <div style={{ fontSize: 8, color: roadmap[i].color }}>
                  {p.stack}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategy */}
        <div
          style={{
            marginTop: 20,
            background: '#0b0b17',
            border: '1px solid #181828',
            borderRadius: 12,
            padding: '18px 22px',
          }}
        >
          <div
            style={{
              fontSize: 9,
              color: '#282838',
              letterSpacing: 3,
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            Hard Truths & Strategy
          </div>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9 }}
          >
            {[
              [
                'React ≠ hooks only',
                "Most candidates only know hooks. Fiber, reconciliation, patterns, concurrent features — that's what 'Senior' actually means in interviews.",
              ],
              [
                'Projects > tutorials',
                "Don't watch 5 more hours of tutorials. Build the projects listed. Struggling through real problems is the actual learning.",
              ],
              [
                'Machine coding > DSA for Senior FE',
                'At Razorpay, Groww, BrowserStack — machine coding is weighted heavier than LeetCode for Senior FE. Prioritize accordingly.',
              ],
              [
                'Neetcode 150, not 500 random',
                'Pattern recognition beats random grinding. 150 problems understood deeply beats 400 memorized solutions.',
              ],
              [
                'Deploy everything. No exceptions.',
                "'I built it locally' does not exist. Every project needs a live Vercel URL. Free. No excuses.",
              ],
              [
                'Your HCLTech Senior title is leverage',
                "You're not a fresher. DM engineers on LinkedIn directly, skip portals when possible. Senior tag opens doors.",
              ],
            ].map(([title, desc], i) => (
              <div
                key={i}
                style={{
                  background: '#07070e',
                  borderRadius: 8,
                  padding: '11px 14px',
                  border: '1px solid #141422',
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: '#e0e0ff',
                    fontWeight: 700,
                    marginBottom: 4,
                  }}
                >
                  {title}
                </div>
                <div style={{ fontSize: 10, color: '#555', lineHeight: 1.6 }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}
        >
          {Object.entries(typeLabels).map(([k, l]) => (
            <div
              key={k}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                fontSize: 9,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 2,
                  background: typeColors[k],
                }}
              />
              <span style={{ color: '#2a2a3a' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
