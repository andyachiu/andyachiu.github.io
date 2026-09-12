# Portfolio

Personal Astro portfolio hosted on GitHub Pages. Work from the repository root. See [README](README.md) for project structure and deployment behavior.

## Content and architecture

- `src/data/projects.ts`: cards, links, access labels, workflow text.
- `src/data/experience.ts`: career timeline.
- `src/data/site.ts`: identity, biography, social links, metadata.
- `src/pages/index.astro`: page layout. Some hero text is here, not in site data.
- `src/components/ProjectCard.astro`: shared project rendering and agent explainer.
- `src/styles/global.css`: theme, layout, responsive styles, reduced motion.
- `src/layouts/Layout.astro`: document metadata and initial theme preference.

Keep private/proprietary project descriptions general. A repository's visibility does not authorize publishing its content. Preserve existing access labels; verify supplied project URLs instead of guessing repositories from project names.

## Commands

Use pnpm and preserve `pnpm-lock.yaml`; package requirements are declared in `package.json`.

```sh
pnpm install --frozen-lockfile
ASTRO_TELEMETRY_DISABLED=1 pnpm build
```

The environment variable avoids writing Astro telemetry preferences during checks. Build output is `dist/`; do not edit generated files. No test or lint script is currently declared; do not invent one.

For a requested local preview, use background mode:

```sh
ASTRO_TELEMETRY_DISABLED=1 pnpm exec astro dev --background
```

Manage it with `astro dev status`, `astro dev logs`, and `astro dev stop` through `pnpm exec`. Preview requires permission to bind a local port. Starting a server is not necessary for every copy edit.

## Validation and publishing

Run the build for application/content changes; check affected layout or interactions in a browser when relevant. Preserve keyboard access, mobile reflow, light/dark themes, and reduced-motion support.

A push to `main` triggers `.github/workflows/deploy.yml` and publishes publicly. Publish only when authorized in the task. Documentation-only workspace work does not require publishing the website. Do not stage unrelated changes.

## Framework references

Consult the relevant official guide for the work, rather than importing all documentation into context:

- [Components](https://docs.astro.build/en/basics/astro-components/)
- [Styles](https://docs.astro.build/en/guides/styling/)
- [Routing](https://docs.astro.build/en/guides/routing/)
- [Framework integrations](https://docs.astro.build/en/guides/framework-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)
