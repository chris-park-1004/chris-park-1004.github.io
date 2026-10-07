# chrisp.github.io
# Honggyu (Chris) Park

**DevOps / Software Engineer** based in Waterloo, ON — mechanical engineer turned software engineer, which means I think in systems from hardware to cloud.

- Designed **VARLab's first fully automated CI/CD pipelines** for Unity and web projects during a 16-month co-op
- I **self-host a live, public Jenkins + Grafana CI/CD pipeline** on my own machine — exposed with **zero inbound ports** via Cloudflare Tunnel → [see it running](https://chris-park-1004.github.io/projects/ci-cd/)
- Software Engineering Technology @ Conestoga College (2023–2026) · B.Eng Mechanical Engineering @ Jeonju University
- **Open to full-time DevOps / SRE / Software Engineer roles** in Canada

## Featured work

| Project | What it is | Stack |
|---|---|---|
| [Self-Hosted CI/CD Infrastructure](https://chris-park-1004.github.io/projects/ci-cd/) | End-to-end pipeline on a home PC: multibranch Jenkins (controller + Windows agent), GitHub App auth, webhook-driven builds with PR checks, Prometheus → Grafana Cloud observability, secured by an outbound-only Cloudflare Tunnel | Jenkins · Docker · Prometheus · Grafana · Cloudflare |
| [Handoff](https://github.com/chris-park-1004/Handoff) | ConHacks 2026 hackathon project — carries context across AI coding CLI sessions and agents (Claude Code ⇄ Codex) via a Supabase shared store, Node.js hook scripts, and git-diff-based summaries | Node.js · Supabase (Postgres/REST) · CLI hooks |
| [Loc8U](https://chris-park-1004.github.io/) | Capstone (team of 5) — LoRa-based visitor safety system for areas without cellular coverage; I built the Python Meshtastic ↔ Apache Kafka bridge and owned the Azure DevOps CI pipeline with SonarCloud | Python · Kafka · LoRa/Meshtastic · Azure DevOps |
| [Portfolio site](https://github.com/chris-park-1004/chris-park-1004.github.io) | React website with prerendered career and project documentation | React · TypeScript · React Router · Vite |

## Website development and deployment

Use Node.js 24 and install dependencies with `npm ci`.

- `npm run dev`: develop all pages at http://127.0.0.1:5173.
- `npm run typecheck`: generate route types and check TypeScript.
- `npm run build`: typecheck, prerender all 20 React pages, and verify the output in `build/client/`.
- `npm run verify`: check the built HTML against the preserved document content, metadata, links, images, and anchor contract.
- `npm run preview`: preview the complete production site at http://127.0.0.1:4173 after building.

All routes are native React TSX in `app/routes/`. Shared document components are in `app/documents/`, with a common header, footer, and document layout in `app/components/`. The application uses one dependency tree and one React Router build; no Astro build or runtime remains. Each URL is prerendered to its own HTML file, so direct links and document anchors work on static hosting. A generated `404.html` handles unknown paths.

`scripts/page-contracts.json` records the pre-migration document text hashes, metadata, anchors, links, and images. Verification ignores whitespace differences but detects missing or changed authored content across all 19 detail pages. Draft documents remain explicitly marked as drafts.

GitHub Actions publishes the complete React site from `build/client/` on pushes to `main`. Jenkins runs the same build and verification but does not deploy.

## Design assets

Space Grotesk, Manrope, and IBM Plex Mono are self-hosted in `public/fonts/`, with their SIL Open Font Licenses. The homepage's GitHub, Jenkins, and Grafana logos are in `public/brands/`. GitHub's mark uses the included MIT license; Jenkins artwork is credited in the footer under CC BY-SA 3.0. Tool logos identify the technologies used and do not imply endorsement.

## Tech I work with

**CI/CD & DevOps**
Jenkins · GitHub Actions · Azure DevOps · Bitbucket · SonarQube · Docker · Prometheus · Grafana

**Cloud & Infra**
Azure (Container Registry, Container Apps) · Nginx · Apache · Cloudflare Tunnel/Access

**Languages**
Python · TypeScript/JavaScript · C# · C/C++ · Groovy · Bash

**Web**
React · Express.js · Next.js · NestJS · Prisma

**Data**
PostgreSQL · MySQL · SQL Server · MongoDB · Supabase

## Contact

[Portfolio](https://chris-park-1004.github.io/) · [LinkedIn](https://linkedin.com/in/honggyu-park-b68627249) · honggyupark1004@gmail.com
