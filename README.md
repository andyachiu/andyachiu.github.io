# Andy Chiu — Portfolio

Astro portfolio at [andyachiu.github.io](https://andyachiu.github.io/). The Interactive Lab design presents selected projects, an illustrative agent workflow, and career experience.

## Develop

Requires Node and pnpm compatible with `package.json`. Install with `pnpm install --frozen-lockfile`. Build with `ASTRO_TELEMETRY_DISABLED=1 pnpm build`.

For local development:

```sh
ASTRO_TELEMETRY_DISABLED=1 pnpm exec astro dev --background
pnpm exec astro dev status
pnpm exec astro dev logs
pnpm exec astro dev stop
```

Astro prints the preview address; do not assume a second server is needed if one is already running.

## Edit content

| Location | Content |
|---|---|
| `src/data/projects.ts` | Project descriptions, links, visibility labels, workflows |
| `src/data/experience.ts` | Roles, organizations, dates |
| `src/data/site.ts` | Biography, identity, social links, metadata |
| `src/pages/index.astro` | Page sections and hero copy |
| `src/styles/global.css` | Visual design and responsive behavior |
| `public/` | Static public assets, including résumé and favicon |

The agent explainer is illustrative; it does not execute tools or call a model. Private/proprietary cards must not imply source access. Explicit access-required links can be supplied for private repositories.

## Validate

The build renders a static page to `dist/`. For interface changes, inspect desktop/mobile layout, keyboard controls, and themes. There is no separate automated UI test suite or lint script declared at present. Documentation-only changes require link/command review rather than an application build.

## Publish

Pushing `main` triggers the GitHub Pages build and deployment in `.github/workflows/deploy.yml`. Confirm task authorization before pushing. Verify the resulting deployment and affected live content. Builds and local previews alone do not publish.

## Agent instructions

[AGENTS.md](AGENTS.md) contains the shared working instructions. `CLAUDE.md` is a symlink to that file. Sensitive supporting material belongs outside this public repository.
