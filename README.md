# 🚀 7-Month Senior Frontend Engineer — Product Company Crack Plan
### HCLTech → Product Company | Mar 8 – Oct 8, 2025

---

## ⏱ Time Commitment

| Period | Hours/Day | Days | Weekly Hours | Monthly Hours |
|--------|-----------|------|-------------|---------------|
| Weekdays | 2–3h | 5 | 12.5h | ~54h |
| Weekends | 4–5h | 2 | 9h | ~36h |
| **Total** | — | 7 | **~21.5h** | **~90h** |

> **7 months × ~90h = ~630 hours of deliberate practice**

---

## 🗓 Monthly Overview

| Month | Period | Focus | Monthly Hours |
|-------|--------|-------|--------------|
| 1 | Mar 8 – Apr 8 | JavaScript Mastery | ~90h |
| 2 | Apr 8 – May 8 | React — Deep & Wide | ~90h |
| 3 | May 8 – Jun 8 | TypeScript + State Management | ~90h |
| 4 | Jun 8 – Jul 8 | Performance + Testing | ~90h |
| 5 | Jul 8 – Aug 8 | Next.js + Frontend System Design | ~90h |
| 6 | Aug 8 – Sep 8 | DSA Crunch + Machine Coding | ~90h |
| 7 | Sep 8 – Oct 8 | Mock Interviews + Applications | ~90h |

---

## 📅 Month 1 — JavaScript Mastery
**Mar 8 – Apr 8 | ~90h | Theme: Know the engine, not just the syntax**

- **Weekdays (2–3h):** Core internals — scope, closures, prototypes, `this`, `call`/`apply`/`bind`
- **Weekends (4–5h):** Async JS — event loop, microtasks, promises, async/await, generators + ES6–ES2024

### Topics
- Scope, closures, lexical environment
- Prototypes & prototype chain
- `this` keyword — all 5 binding rules
- `call`, `apply`, `bind`
- Event loop, call stack, task queue
- Microtasks vs macrotasks
- Promises (internals + chaining)
- async/await + error handling patterns
- Generators & iterators
- ES6–ES2024: destructuring, spread, modules, optional chaining, nullish coalescing
- WeakMap, WeakSet, Symbol
- LeetCode Easy: arrays & strings (20 problems)

### Resources
- [javascript.info](https://javascript.info) — read every section, it's the bible
- Jake Archibald: "In the Loop" (YouTube) — event loop visually explained
- You Don't Know JS (free on GitHub) — Scope & Closures + this & Object Prototypes
- LeetCode Blind 75 — arrays section

### 🚀 Month Project: JS Runtime Visualizer
> A browser tool that animates the Call Stack, Web APIs, Callback Queue, and Microtask Queue in real time as you type JS code. Users write async code and watch it execute step-by-step with color-coded blocks — like Loupe (latentflip.com) but built by you.
>
> **Stack:** Vanilla JS — no frameworks  
> **Why:** Forces deep understanding of the event loop. Impressive in interviews AND as a portfolio piece — it's a teaching tool, not a toy app.

### 🎯 Milestone
Can whiteboard-explain closures, prototype chain, and the event loop without notes.

---

## 📅 Month 2 — React Deep & Wide
**Apr 8 – May 8 | ~90h | Theme: Go far beyond hooks**

- **Weekdays (2–3h):** React internals — reconciliation, fiber, virtual DOM, rendering behavior, batching
- **Weekends (4–5h):** Patterns — compound components, render props, HOCs, portals, context, error boundaries, Suspense, concurrent features

### Topics
- Virtual DOM & reconciliation algorithm
- React Fiber — what it is & why it exists
- Render & commit phases
- Batching (React 18 automatic batching)
- All hooks: `useState`, `useEffect`, `useRef`, `useReducer`, `useContext`, `useCallback`, `useMemo`, `useId`, `useTransition`, `useDeferredValue`
- Custom hooks — build 8+ real ones
- Context API — correct usage, pitfalls, and when NOT to use
- Compound components pattern
- Render props pattern
- Higher Order Components (HOC)
- React Portals
- Error Boundaries
- Suspense + concurrent features (`useTransition`, `useDeferredValue`)
- `forwardRef` & `useImperativeHandle`
- React 19: `use()`, Actions, Server Components mental model

### Resources
- [react.dev](https://react.dev) — official docs, read ALL of it including deep dives
- Nadia Makarevich: Advanced React (advancedreact.com) — best React patterns resource
- Theo / t3.gg YouTube — React 19, patterns, real-world usage
- React source code (github.com/facebook/react) — skim the reconciler folder

### 🚀 Month Project: Notion-like Block Editor
> A rich text block editor where each block (heading, paragraph, image, code, todo, divider) is its own component. Press `/` for a floating command menu (portal), drag blocks to reorder, inline markdown shortcuts auto-convert text (`##` → heading), autosave to localStorage, full undo/redo with `useReducer`.
>
> **Stack:** React + TypeScript (start adding TS here)  
> **Why:** Hits compound components, context, custom hooks, portals, drag & drop, complex state management — almost every React pattern in one project.

### 🎯 Milestone
Can explain React reconciliation, Fiber, and all render phases in an interview. Can implement any UI pattern without googling.

---

## 📅 Month 3 — TypeScript + State Management
**May 8 – Jun 8 | ~90h | Theme: What every product company assumes you know**

- **Weekdays (2–3h):** TypeScript — types, interfaces, generics, utility types, type narrowing, discriminated unions
- **Weekends (4–5h):** Redux Toolkit + Zustand + TanStack Query — server vs client state, when to use what

### Topics
- TS: types vs interfaces — when to use each
- TS: Generics in functions, components, and hooks
- TS: Utility types — `Partial`, `Pick`, `Omit`, `Record`, `Extract`, `Exclude`, `ReturnType`, `Parameters`
- TS: Type narrowing & user-defined type guards
- TS: Discriminated unions
- TS: Template literal types
- TS: Typing React — props, events, refs, context, generics in components
- Redux Toolkit: `createSlice`, `createAsyncThunk`, RTK Query
- Zustand: store setup, slices, devtools, subscriptions
- TanStack Query: queries, mutations, caching, optimistic updates, infinite scroll
- State architecture decision tree: local vs context vs Zustand vs React Query
- LeetCode Medium: linked lists, stacks, queues (20 problems)

### Resources
- [Total TypeScript](https://totaltypescript.com) — free exercises, best TS resource online
- Redux Toolkit docs — RTK Query section specifically
- TanStack Query docs — caching & optimistic updates sections
- Matt Pocock YouTube — advanced TypeScript patterns

### 🚀 Month Project: Real-time Collaborative Task Board
> A Linear/Jira-style board: multiple swimlane columns, drag-and-drop cards, optimistic updates (moves feel instant before server confirms), keyboard shortcuts, activity log per card, filters by assignee/label, offline indicator with sync on reconnect. Supabase Realtime (free tier) for live collaboration between two browser tabs.
>
> **Stack:** React + TypeScript + Zustand + TanStack Query + Supabase  
> **Why:** Showcases Zustand for UI state, TanStack Query for server state + optimistic updates, TypeScript generics, and real-time — four things interviewers love, in one app.

### 🎯 Milestone
Can migrate any JS React codebase to TypeScript. Can architect state management without overthinking. Can defend tradeoffs between every state solution.

---

## 📅 Month 4 — Performance + Testing
**Jun 8 – Jul 8 | ~90h | Theme: What separates Senior from Mid — most candidates skip this entirely**

- **Weekdays (2–3h):** React perf — profiling, memoization traps, code splitting, lazy loading, virtualization, bundle analysis
- **Weekends (4–5h):** Testing pyramid — Jest unit, React Testing Library, MSW for API mocking, Cypress E2E

### Topics
- React DevTools Profiler — reading flame graphs
- When NOT to use `memo`/`useCallback`/`useMemo` (most important lesson)
- `React.lazy` + `Suspense` for code splitting
- Route-based vs component-level code splitting
- Virtual lists: TanStack Virtual or react-window
- Image optimization: lazy load, WebP, blur-up pattern
- Web Vitals: LCP, INP, CLS — measuring and fixing each
- Bundle analysis: webpack-bundle-analyzer / Vite visualizer
- Jest: unit tests, mocks, spies, fake timers
- React Testing Library: queries, user-event, async utils, accessibility queries
- MSW (Mock Service Worker): API mocking — the modern approach
- Cypress: E2E flows, intercept network, custom commands
- LeetCode Medium: trees BFS/DFS (20 problems)

### Resources
- [web.dev/performance](https://web.dev/performance) — Google's guide, free & comprehensive
- Kent C. Dodds blog — testing-library.com + his testing philosophy posts
- [MSW docs](https://mswjs.io) — best modern mocking approach
- Chrome DevTools Performance tab — learn to use it deeply

### 🚀 Month Project: Streaming Platform UI (Engineering-focused)
> NOT a Netflix clone. Focus on engineering challenges: virtualized carousels handling 1000+ rows without jank, skeleton screens with shimmer, lazy-loaded images with blur-up reveal, route-based code splitting with Suspense, infinite scroll, full test coverage with MSW mocking all API calls, Lighthouse performance score of **90+**. Measure and document before/after optimizations in the README.
>
> **Stack:** React + TypeScript + TanStack Query + Vitest/Jest + MSW + Cypress  
> **Why:** The Lighthouse 90+ constraint means you can't cut corners. Employers see the score in your README and know you take quality seriously.

### 🎯 Milestone
Can profile any React app, identify bottlenecks, fix them, and prove it with metrics. 80%+ test coverage on all projects going forward.

---

## 📅 Month 5 — Next.js + Frontend System Design
**Jul 8 – Aug 8 | ~90h | Theme: The two rounds most people fail because they never prepared**

- **Weekdays (2–3h):** Next.js — App Router, SSR/SSG/ISR/RSC, routing, API routes, middleware, edge functions
- **Weekends (4–5h):** Frontend system design — architecture, design systems, real-time, auth, micro-frontends, scalability

### Topics
- Next.js App Router — layouts, `loading.tsx`, `error.tsx`, parallel & intercepting routes
- SSR vs SSG vs ISR vs CSR — tradeoffs and when to choose each
- React Server Components — mental model and when to use
- Next.js API routes + middleware + edge runtime
- Image/Font/Script optimization with `next/image`, `next/font`
- FE System Design: component architecture at scale
- Design system: tokens, theming, component API design
- Micro-frontends: module federation — concept + tradeoffs
- Real-time: WebSockets vs SSE vs long polling vs WebRTC
- Auth flows: JWT, OAuth 2.0, refresh tokens, session cookies, PKCE
- Caching strategy: browser, CDN, stale-while-revalidate, cache busting
- Accessibility: WCAG 2.2, ARIA roles, focus management, keyboard navigation
- LeetCode Medium: graphs, intro DP (20 problems)

### Resources
- [nextjs.org/docs](https://nextjs.org/docs) — App Router section in full
- [greatfrontend.com](https://greatfrontend.com) — FE system design questions (paid, worth every rupee this month)
- [frontendinterviewhandbook.com](https://frontendinterviewhandbook.com) — system design section (free)
- Leerob.io blog — Next.js real-world patterns by a Vercel engineer

### 🚀 Month Project: GitHub-like Developer Dashboard
> A Next.js app showcasing every rendering strategy: SSR for public user profiles, ISR for trending repos (revalidate hourly), CSR for the authenticated activity dashboard. Add: real-time notifications via SSE (Server-Sent Events), CI status badge system with color states, full dark/light theme via CSS variables, WCAG-compliant keyboard navigation throughout. Uses GitHub public API (free, no backend needed).
>
> **Stack:** Next.js 14+ App Router + TypeScript + TanStack Query + Tailwind  
> **Why:** Forces conscious decisions about SSR vs ISR vs CSR per feature. Real-time, auth patterns, and accessibility — all in one app.

### 🎯 Milestone
Can structure a complete 45-minute frontend system design interview. Can defend SSR vs RSC vs ISR choices with confidence.

---

## 📅 Month 6 — DSA Crunch + Machine Coding
**Aug 8 – Sep 8 | ~90h | Theme: Interview battle mode**

- **Weekdays (2–3h):** 2 LeetCode problems daily — pattern-focused via Neetcode 150, never random grinding
- **Weekends (4–5h):** Machine coding rounds — build full features in timed 90-min sessions with no googling

### Topics
**DSA Patterns**
- Two pointers & sliding window (all variants)
- Binary search on answer
- BFS / DFS on trees + graphs
- Heap / Priority Queue problems
- DP 1D: climbing stairs, house robber, coin change
- DP 2D: grid problems, longest common subsequence

**Machine Coding Practice (timed, 90 min each)**
- Infinite scroll news feed
- Autocomplete with debounce + LRU cache
- Drag & drop file uploader with progress
- Multi-step onboarding wizard with validation
- Real-time chat UI with typing indicators
- Spreadsheet grid (Google Sheets mini)
- Rich text editor toolbar

### Resources
- [neetcode.io](https://neetcode.io) — patterns + free YouTube walkthroughs (best DSA resource, period)
- [namastedev.com](https://namastedev.com) — machine coding rounds, Indian product company focused
- [bigfrontend.dev](https://bigfrontend.dev) — FE-specific coding challenges + JS output questions
- LeetCode Top 150 Interview Questions

### 🚀 Month Project: Component Library (your own mini shadcn/ui)
> Build 15 production-quality headless components from scratch with zero UI libraries: Button, Input (floating label + validation), Modal (portal + focus trap + a11y), Tooltip (smart positioning), Select (keyboard nav), Toast system, DatePicker, Data Table (sort + filter + pagination), Tabs, Accordion, Combobox, Slider, Progress, Badge, Skeleton. Every component has Storybook stories and unit tests.
>
> **Stack:** React + TypeScript, zero UI libraries, Storybook, Vitest  
> **Why:** Machine coding rounds test this exact skill. Building from scratch proves you understand what's inside the libraries. Storybook deploy = live interactive portfolio.

### 🎯 Milestone
Solve any Medium LeetCode in under 25 min. Complete any machine coding round in 90 min with clean, tested, accessible code.

---

## 📅 Month 7 — Mock Interviews + Offers
**Sep 8 – Oct 8 | ~90h | Theme: You're ready. Pull the trigger.**

- **Weekdays (2–3h):** 2 mock interview sessions/week + fix weak spots + 10 applications/week minimum
- **Weekends (4–5h):** System design mocks + behavioral prep + portfolio polish + salary research

### Topics
**Mock Interview Practice**
- JS internals rounds ×4 (Pramp / peers)
- React/TypeScript coding rounds ×4
- Machine coding rounds ×6 (timed, strict)
- System design rounds ×4

**Applications**
- 10 STAR behavioral stories prepared (leadership, conflict, failure, impact)
- Resume: one-page, ATS-optimized, tailored per company tier
- GitHub: all 6 projects live with READMEs, demo GIFs, Vercel deploys
- LinkedIn: DM engineers + EMs at target companies directly
- Salary negotiation: research levels.fyi + Blind before accepting any offer

### Resources
- [Pramp.com](https://pramp.com) — free peer mock interviews (use aggressively)
- [interviewing.io](https://interviewing.io) — paid, real interviewers from FAANG (if budget allows)
- [levels.fyi](https://levels.fyi) — salary benchmarking before any negotiation
- Glassdoor + Blind — company-specific interview question banks

### 🚀 Month Project: Portfolio Site
> Not a template. A custom-designed Next.js site: page transitions with Framer Motion, interactive project showcases with live demos embedded, a technical blog with MDX where you document your 7-month journey (this alone gets you referrals), dark/light theme, Lighthouse 95+ score.
>
> **Stack:** Next.js + MDX + Framer Motion + Tailwind  
> **Why:** You now have 6 strong projects. Engineers who apply with a compelling portfolio get callbacks 3× faster. Blog posts about what you built signal senior thinking to hiring managers.

### 🎯 Milestone
2+ offers in hand by Oct 8. HCLTech → Product Company in 7 months through deliberate practice.

---

## 🚀 All 7 Projects at a Glance

| # | Project | Stack | Why it's impressive |
|---|---------|-------|---------------------|
| M1 | JS Runtime Visualizer | Vanilla JS | Proves deep JS internals knowledge — it's a teaching tool |
| M2 | Notion Block Editor | React + TS | Every React pattern in one build |
| M3 | Realtime Collab Task Board | + Zustand + Supabase | Server state, optimistic updates, real-time |
| M4 | Streaming Platform UI | + Tests + Lighthouse 90+ | Performance with proof — no cutting corners |
| M5 | GitHub Developer Dashboard | Next.js App Router | Conscious SSR/ISR/CSR decisions per feature |
| M6 | Component Library (mini shadcn) | Storybook, zero UI libs | Machine coding skill made tangible |
| M7 | Portfolio + MDX Blog | Next.js + Framer Motion | The last thing a recruiter sees before calling you |

---

## 🎯 Target Companies (Apply in Month 7)

**Start here (reps + high quality):** Razorpay, Groww, BrowserStack, Postman, Juspay, Zepto, Meesho, Swiggy, Cred

**Then target:** Atlassian, Flipkart, Phonepe, Gojek, Freshworks

**Stretch (apply anyway):** Google, Microsoft, Uber, LinkedIn

---

## ⚡ Hard Truths

- **React ≠ hooks only.** Fiber, reconciliation, concurrent features, patterns — that's what "Senior" actually means in interviews.
- **Projects > tutorials.** Don't watch 5 more hours. Build the projects. Struggling through real problems is the actual learning.
- **Machine coding > DSA for Senior FE.** At Razorpay, Groww, BrowserStack — machine coding is weighted heavier than LeetCode for Senior roles.
- **Neetcode 150, not 500 random.** Pattern recognition beats random grinding every time.
- **Deploy everything. No exceptions.** "I built it locally" does not exist. Vercel is free.
- **Your HCLTech Senior title is leverage.** DM engineers directly on LinkedIn. Skip job portals when possible.
- **Document your Lighthouse scores.** Put before/after numbers in your READMEs. Numbers make hiring managers stop scrolling.

---

*Built for: Mar 8 – Oct 8, 2025 | ~630 hours total | Current role: Senior FE @ HCLTech*
