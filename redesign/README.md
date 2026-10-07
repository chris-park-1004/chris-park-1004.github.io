# Chris Park — React homepage

A homepage using React, TypeScript, Vite, and React Router Framework Mode. The root build combines this prerendered homepage with the 19 existing Astro detail pages. GitHub Actions deploys the combined `dist/` output; Jenkins verifies the same build.

## Local development

Use Node.js 24 and npm. Run from this directory:

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:5173. To check the static production output:

```sh
npm run typecheck
npm run build
npm run verify
npm run preview
```

Open http://127.0.0.1:4173. Static output is in `build/client/`; no runtime server is needed for production. This standalone preview contains only the homepage. For working career/project links, run `npm run build` and `npm run preview` from the repository root to serve the combined site.

## Structure

- `app/data/content.ts`: project descriptions and external destinations.
- `app/components/`: shared navigation, footer, project cards, and illustrative visuals.
- `app/styles/`: design tokens and responsive styles, including reduced-motion support.
- `app/routes/home.tsx`: homepage sections and metadata.
- `scripts/verify-build.mjs`: checks the generated static HTML and referenced assets.

Self-hosted Jenkins, Handoff, and Loc8U are presented as equal project cards. Their graphics are conceptual diagrams, not product screenshots or live telemetry. The homepage links to the existing published career and CI/CD pages until their individual redesigns are reviewed. No external fonts or JavaScript CDNs are required.

Further page migrations must preserve existing URLs and metric anchors. The root build verifies all 19 detail pages remain unchanged, and keeps the old homepage's about/contact anchors available.

## Brand artwork

Typography is self-hosted in `public/fonts/`: Space Grotesk for headings and visual identities, Manrope for body and interface text, and IBM Plex Mono for technical labels. Latin WOFF2 files are sourced from Google Fonts, with each family's SIL Open Font License included alongside the assets. Font faces use `font-display: swap`; the two primary families are preloaded.

The Jenkins card uses locally served, unmodified SVG artwork in `public/brands/`:

- GitHub: [Primer Octicons mark-github](https://github.com/primer/octicons/blob/main/icons/mark-github-16.svg), under the [MIT license](https://github.com/primer/octicons/blob/main/LICENSE).
- Jenkins: [official Jenkins artwork](https://www.jenkins.io/artwork/), by the Jenkins project / Frontside, under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Visible attribution is in the footer.
- Grafana: [official Grafana icon](https://github.com/grafana/grafana/blob/main/public/img/grafana_icon.svg). Grafana branding belongs to Grafana Labs.

Logos identify the tools used in this personal project; they do not indicate endorsement.
