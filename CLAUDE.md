# chris-park-1004.github.io — Portfolio Site

## Purpose

Personal portfolio + technical documentation site for Chris (Honggyu) Park.
Currently hosting career timeline; being expanded into a multi-page documentation
hub for the user's hands-on DevOps projects.

## Current State

- Live URL: `https://chris-park-1004.github.io`
- Hosted on GitHub Pages (`main` branch, root) — vanilla HTML at the moment.
- A migration to **Astro** is planned (see "Migration Plan" below) — has not started yet.
- Files present:
  - `index.html` — current landing (career timeline; will be replaced by Overview after migration)
  - `career.html` — copy of current landing, uses extracted CSS/JS
  - `assets/css/styles.css` — extracted shared stylesheet
  - `assets/js/theme.js` — extracted dark/light theme toggle
- A user-account-level dotfile dir `.claude/` may exist but is irrelevant here.

## Design Identity (must preserve through migration)

Everything must keep the existing aesthetic. Theme is intentional and central to the brand.

- **Visual metaphor**: terminal + CI/CD pipeline (window chrome with red/yellow/green dots, `stage_01...stage_05` cards, "build #247 · passing" badge, console widget showing fake log lines).
- **Typography**:
  - UI text: `Inter` (400/500/600/700)
  - Code / mono / chrome path / badges: `JetBrains Mono` (400/500/600)
- **Theme**: dark default, light toggle. CSS variables in `:root` and `[data-theme="light"]`.
- **Palette (dark)**: bg `#0d1117`, panel `#161b22`, text `#e6edf3`, accent colors green `#3fb950` / blue `#58a6ff` / yellow `#d29922` / purple `#a371f7` / red `#f85149`.
- **Reused component patterns**:
  - `stage` card with left accent border (`--accent` CSS var)
  - `badge` with colored dot (`b-green`, `b-blue`, `b-yellow`, `b-purple`, `b-dim`)
  - `chrome` top bar with macOS-style dots and breadcrumb path
  - `console` widget with timestamps and `[INFO]` / `[OK]` / `[WARN]` levels
  - `summary` 4-column stat grid
  - `chip` and `stack-tag` for tech labels
  - `endpoints-card` with `GET /path` style contact rows

Any new page must compose from these primitives, not reinvent them.

## Information Architecture

The Overview landing is split into two clean sections — **About Me** and **About My Projects** — rather than dumping every component on the front page. Components live inside their parent project, so URLs express that hierarchy.

```
/                                       → Overview (About Me + About Projects)
/career                                 → Career timeline (full detail)
/projects/ci-cd/                        → CI/CD Pipeline project hub
                                          (project description + component cards)
/projects/ci-cd/jenkins/                → Jenkins component overview + sub-page index
/projects/ci-cd/jenkins/installation
/projects/ci-cd/jenkins/service-account
/projects/ci-cd/jenkins/multibranch-pipeline
/projects/ci-cd/jenkins/checks-api
/projects/ci-cd/jenkins/agents
/projects/ci-cd/github/                 → GitHub component overview
/projects/ci-cd/github/app-setup
/projects/ci-cd/github/webhook
/projects/ci-cd/github/pr-checks
/projects/ci-cd/cloudflare/             → Cloudflare component overview
/projects/ci-cd/cloudflare/tunnel-setup
/projects/ci-cd/cloudflare/access-gate
/projects/ci-cd/prometheus/             → TODO (plan only, not implemented yet)
/projects/ci-cd/grafana/                → TODO (plan only, not implemented yet)
```

After Astro migration, each path above corresponds to an `.astro` or `.md` file under `src/pages/...` (e.g. `src/pages/projects/ci-cd/jenkins/installation.astro`).

Future projects (e.g. a deployable web app, a learning project) get their own folder under `/projects/`.

## What Visitors See

- Land on `/` → two clear sections: a brief **About Me** card (with link to full career) and an **About My Projects** section with one big project card (CI/CD Pipeline) plus a dashed-border placeholder for future projects.
- Clicking the CI/CD project card → `/projects/ci-cd/` shows the project's components (Jenkins, GitHub, Cloudflare, Prometheus, Grafana) as cards.
- Clicking a component card → component overview with sub-page index.
- Clicking a sub-page → deep-dive doc.
- Cross-cutting topics handled with "Related pages" links at the bottom of each page (e.g. "GitHub App auth" lives under `github/app-setup` but is cross-linked from `jenkins/multibranch-pipeline`).
- Career timeline reachable from the About Me card on `/` or via the chrome breadcrumb.

## Migration Plan: vanilla HTML → Astro

Decided: migrate to Astro + GitHub Actions + GitHub Pages (Artifact deployment, not the `gh-pages` branch model).

Reason for Astro over Jekyll or staying vanilla:
- Component reuse — there will be ~17 pages with very similar structure
- Modern tooling (Markdown + components + zero-JS-by-default)
- Resume value (modern SSG, official Astro action exists for Pages)
- The existing CSS can be reused as-is

### Phase roadmap

1. **Phase 1 — Environment**
   - Install Node.js LTS (already present on the user's main dev PC; needs install on the other PC)
   - Verify `node --version`, `npm --version`

2. **Phase 2 — Astro project scaffold**
   - In the repo root: `npm create astro@latest` (choose minimal/empty template; TypeScript optional)
   - Verify `npm run dev` works on `http://localhost:4321`

3. **Phase 3 — Asset migration**
   - Move `assets/css/styles.css` → `src/styles/global.css`
   - Import it once in the root layout (so it applies to all pages)
   - Move `assets/js/theme.js` → either `public/theme.js` (raw) or inline in layout via `<script is:inline>` so it runs before paint (avoids theme flash)
   - Move logo SVGs (Jenkins, GitHub, Cloudflare, Prometheus, Grafana) under `src/assets/icons/` once the user downloads them
   - Keep favicon as-is

4. **Phase 4 — Layouts & components**
   - `src/layouts/Default.astro` — chrome bar + container + footer; takes `breadcrumb`, `buildBadge`, `title` props
   - `src/components/StageCard.astro` — id, status (success/running/planning), name, sub, duration, accent; takes a `<slot/>` for body
   - `src/components/ConsoleWidget.astro` — accepts an array of `{ts, level, message}` entries
   - `src/components/Badge.astro` — color + dot + label
   - `src/components/ComponentCard.astro` — used on the Overview index; icon + title + status + brief + sub-page links
   - `src/components/ContactRow.astro` — verb + path + value
   - `src/components/RelatedLinks.astro` — used at the bottom of every component sub-page

5. **Phase 5 — Pages**
   - Career first (content already exists; just port to `src/pages/career.astro` using the Default layout)
   - Overview second (`src/pages/index.astro` — replace current landing once Career is verified)
   - Then component hubs and sub-pages, one at a time

6. **Phase 6 — Deploy**
   - `astro.config.mjs`: set `site: 'https://chris-park-1004.github.io'`. Since this is a user site (`<user>.github.io`), `base` stays default `/`.
   - `.github/workflows/deploy.yml` — use `withastro/action@v3` + `actions/deploy-pages@v4`
   - GitHub repo settings → Pages → Source: **GitHub Actions** (was: branch)
   - `.gitignore`: `node_modules/`, `dist/`, `.astro/`
   - Push and verify the workflow run + live site

### Things explicitly rejected

- **Jekyll** — works but not chosen; less component reuse, Ruby-based, less modern signal.
- **gh-pages branch deployment** — using Actions Artifact model instead (no second branch to manage).
- **MkDocs Material** — would lose the custom CI/CD-themed design.
- **Next.js / Gatsby / Nuxt** — overkill for a static portfolio.

## Working Style Conventions

- **One page at a time.** The user prefers to design and review each page together rather than have a giant batch dump.
- **Show the diff first, edit second.** When changing existing files, explain the change before applying.
- **Match the existing aesthetic strictly.** New pages should look like they belong with the current landing — same paddings, type sizes, badge styles, chrome bar.
- **Icons**: use real downloaded SVGs of the tech logos (Devicon or each project's own brand SVG). The user will download them; do not invent placeholder emoji unless the user explicitly asks.
- **Korean is the primary chat language** with the user; documentation/UI copy on the site itself is English.

## What is Safe to Document Publicly Here

The portfolio site itself is `public` on GitHub. This `CLAUDE.md` is committed and visible.

**OK to write down:**
- Domain names that are already public (e.g. the public CI domain the user owns)
- Tool names and versions (Jenkins LTS, Java 25, Astro, Node version, etc.)
- Architecture diagrams (no IPs, no hostnames)
- Sample Jenkinsfile / config snippets with placeholders
- Trade-off and decision rationale
- General operational gotchas (PKCS#1 vs PKCS#8, WinSW restart races, agent label mismatch, etc.)

**Never write down here:**
- GitHub App ID / Installation ID (specific numeric values)
- Webhook secrets
- Private key contents
- Cloudflare Tunnel ID / token
- Local filesystem paths that include the username (`C:\Users\<username>\...`)
- Any internal IP addresses or hostnames

When a doc page on the site references a concrete value, replace it with a placeholder like `<APP_ID>`, `<your-domain.com>`, or `C:\Users\<username>\...`.

## Cross-Project Context

A related working directory exists with detailed notes on the Jenkins CI/CD project itself:
- It contains the Jenkins installation, GitHub App setup, Multibranch Pipeline, Checks API integration, multi-agent architecture, Cloudflare Tunnel + Access, etc.
- That project's `CLAUDE.md` (private) is the source of truth for implementation details; this site documents a sanitized, public-facing version.

When writing the `components/jenkins/`, `components/github/`, and `components/cloudflare/` pages, the implementation details from that other project can be referenced — but always sanitize before publishing (see "What is Safe to Document Publicly Here").

## Resume / Pick-Up Checklist for a Fresh Session

Read this first when starting a new Claude session on this repo.

1. Read `index.html` and `career.html` to absorb the existing visual language.
2. Read `assets/css/styles.css` to understand the design system (variables, components).
3. Check the migration status:
   - If `package.json` and `astro.config.mjs` exist → Astro scaffold already done; continue from where the last commit left off (`git log --oneline -20`).
   - If they don't exist → Phase 2 has not started yet; the next step is to run `npm create astro@latest` in this directory.
4. Verify Node is available: `node --version` (need 18+ for Astro).
5. Ask the user which page they want to work on next, or continue the Phase roadmap above.

## TODO / Next Action

**Immediate next step**: Phase 2 — scaffold the Astro project in this repo.

The user will run this on their main dev PC where Node is already installed. The next Claude session should:
1. Confirm Node version.
2. Walk the user through `npm create astro@latest .` (note the trailing dot — install into the current directory; some prompts will warn about non-empty directory, that is expected).
3. Pick the **Empty** template, JavaScript or TypeScript per user preference, install dependencies, do not initialize a new git repo (the repo already exists).
4. Verify `npm run dev` boots on `http://localhost:4321`.
5. Move on to Phase 3 (asset migration).
