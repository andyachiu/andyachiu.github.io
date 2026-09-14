# Andy Chiu — Portfolio & Interactive Lab

Personal portfolio and interactive engineering lab hosted at [andyachiu.github.io](https://andyachiu.github.io/).

---

## Context & Purpose

This site serves as the portfolio and experimental showcase for **Andy Chiu** (Applied AI Global Product Lead at Google, UC Berkeley MIDS candidate). It blends a commercial seller’s perspective with a technical builder’s mindset.

### Core Goals
- **Editorial Depth Over Resume Bullets:** Rather than listing high-level achievements, project cards explain the concrete problem space, technical trade-offs, architecture decisions, and operational realities.
- **Interactive Demonstrations:** Interactive conceptual walkthroughs (e.g. Customer Intelligence, Briefing Memory, Smart Streets) illustrate *how* systems make decisions, distinguishing where AI adds value versus where deterministic rules are mandatory.
- **Strict Boundaries & Integrity:** Clearly label private, restricted, or internal projects. Fictionalized inputs, research proposals, and conceptual walkthroughs are explicitly distinguished from executed customer data or claimed production metrics.
- **Fast, Lightweight, and Accessible:** Zero heavy client framework overhead. The site prioritizes semantic HTML, keyboard operability, responsive reflow, light/dark themes, and `prefers-reduced-motion` compliance.

---

## Tech Stack & Visual Libraries

### Current Stack
- **Framework:** [Astro](https://astro.build/) (v7) static site generator. Pages render to static HTML/CSS in `dist/`.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` integrated with CSS custom properties (`@theme`, `:root.dark`).
- **Typography:**
  - **Geist Variable** (`@fontsource-variable/geist`): Primary sans-serif interface typeface.
  - **Geist Mono Variable** (`@fontsource-variable/geist-mono`): Monospaced typeface for eyebrows, section counters, dates, tags, and technical metadata.
- **Icons:** [Lucide Astro](https://lucide.dev/) (`lucide-astro`) for crisp, accessible SVG icons.
- **Interactions & Media:** Native browser APIs and vanilla JavaScript for step-by-step exploration controls (`aria-pressed`, `aria-controls`), native `<details>/<summary>` disclosures, and HTML5 video with reduced-motion still image fallbacks.

### Visual Libraries & Explorations for the Future
When considering new interactive or visual capabilities, maintain low runtime bloat and adhere to accessibility guardrails:
- **Accessible UI Primitives:** [shadcn/ui](https://ui.shadcn.com/) / [Radix UI](https://www.radix-ui.com/) patterns (e.g. accordion, drawer, or dialog primitives) when complex disclosures or filter controls are needed.
- **Editorial & Exhibition References:** Design patterns inspired by [n3wth library](https://n3wth.com/library) and [Brittany Chiang](https://brittanychiang.com/) for refined typographic rhythms and compact technical catalogues.
- **Motion & Transitions:** Progressive enhancement with native Astro View Transitions (`astro:transitions`) or lightweight animation utilities ([Motion One](https://motion.dev/)) with strict `prefers-reduced-motion` overrides.
- **Data Visualizations:** Lightweight SVG or [Observable Plot](https://observablehq.com/plot) if interactive charts or data-pipeline visuals are introduced to HealthCharts or bioinformatics cards.

---

## Repository Structure & Content Maintenance

| Location | Purpose |
|---|---|
| `src/data/site.ts` | Identity, bio paragraphs, social profiles, and résumé URL |
| `src/data/projects.ts` | Project metadata, tags, access labels, external links, media posters/videos |
| `src/data/explorations.ts` | Step-by-step conceptual walkthroughs, questions, premises, and takeaways |
| `src/data/experience.ts` | Career timeline (roles, organizations, dates, descriptions) |
| `src/pages/index.astro` | Main page layout, hero statement, focus panel, and section order |
| `src/components/` | Reusable Astro components (`ProjectCard`, `ProjectExploration`, `ThemeToggle`, `Footer`) |
| `src/styles/global.css` | Theme palettes, responsive breakpoints, typography, and motion rules |
| `public/` | Public static assets (favicon, résumé PDF, video demos, image posters) |
| `TODO.md` | Backlog of planned editorial refinements, audit tasks, and future ideas |

### Content Guidelines
- **Adding Projects:** Add entries to `src/data/projects.ts`. If private or proprietary, include `access: 'Restricted access'` or `'Private repository'` and an optional `accessNote`.
- **Adding Explorations:** To pair a project with an interactive walkthrough, add a matching key in `src/data/explorations.ts`.
- **Media Assets:** Place optimized `.mp4` and poster `.png`/`.webp` files under `public/projects/`. Ensure autoplay videos are muted, looped, and paired with still image fallbacks for reduced-motion users.
- **Do Not Guess Repositories:** Verify supplied repository URLs before linking. Do not imply public source code exists for proprietary internal projects.

---

## Development & Local Commands

Requires Node (>=22.12.0) and pnpm (>=10).

```sh
# Install dependencies
pnpm install --frozen-lockfile

# Production build
ASTRO_TELEMETRY_DISABLED=1 pnpm build

# Run local preview server in background
ASTRO_TELEMETRY_DISABLED=1 pnpm exec astro dev --background
pnpm exec astro dev status
pnpm exec astro dev logs
pnpm exec astro dev stop
```

> **Note:** `ASTRO_TELEMETRY_DISABLED=1` prevents Astro telemetry from attempting to write local configuration files during automated checks.

---

## Validation & Quality Checklist

Before committing changes:
1. **Build Verification:** Run `ASTRO_TELEMETRY_DISABLED=1 pnpm build` to ensure static generation completes without error.
2. **Accessibility:**
   - Interactive elements must have clear focus rings (`:focus-visible`).
   - Controls must maintain appropriate ARIA attributes (`aria-pressed`, `aria-controls`, `aria-label`).
   - Color contrast must meet WCAG AA in both light and dark themes.
3. **Responsive Testing:** Verify reflow on desktop (>950px), tablet (720px–950px), and mobile (down to 380px).
4. **Reduced Motion:** Ensure animations and autoplay videos respect `@media (prefers-reduced-motion: reduce)`.

---

## Publishing & Deployment

Deployments to GitHub Pages are automated via GitHub Actions in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

- Pushing or merging to `main` triggers an automatic deployment.
- Documentation-only or local changes should be committed to feature branches and validated locally before merging to `main`.
- Never publish unapproved project disclosures or unverified changes.

---

## Agent Guidance

- [`AGENTS.md`](AGENTS.md) defines workspace conventions, coding rules, and framework references.
- Both `CLAUDE.md` and `GEMINI.md` are symlinks to `AGENTS.md`.
- Sensitive credentials and personal notes belong outside this public repository (e.g. macOS Keychain).
