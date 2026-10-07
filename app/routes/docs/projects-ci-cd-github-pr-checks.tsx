import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'projects/ci-cd', href: '/projects/ci-cd/' },
    { label: 'github', href: '/projects/ci-cd/github/' },
    { label: 'pr-checks' },
];
export function meta() { return [{ title: "GitHub / PR Checks — CI/CD Pipeline" }, { name: 'description', content: "What the PR page actually shows when Jenkins publishes per-stage checks via the GitHub Checks API." }, { property: 'og:title', content: "GitHub / PR Checks — CI/CD Pipeline" }, { property: 'og:description', content: "What the PR page actually shows when Jenkins publishes per-stage checks via the GitHub Checks API." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-projects-ci-cd-github-pr-checks" title="GitHub / PR Checks — CI/CD Pipeline" description="What the PR page actually shows when Jenkins publishes per-stage checks via the GitHub Checks API." breadcrumbs={breadcrumbs}>
  <div className="header">
    <div>
      <div className="prompt">$ cat pr-checks.md</div>
      <h1>PR Checks</h1>
      <div className="subtitle">Per-stage check rows · Markdown summaries · branch protection gating</div>
    </div>
    <div className="header-meta">
      <div className="row">status: <b style={cssStyle("color:var(--yellow)")}>● writing</b></div>
    </div>
  </div>

  <div className="stage" style={cssStyle("--accent: var(--yellow)")}>
    <div className="stage-head">
      <div>
        <div className="stage-meta">
          <span className="id">draft</span>
          <span className="badge b-yellow"><span className="badge-dot"></span>writing</span>
        </div>
        <div className="stage-name">Documentation in progress</div>
      </div>
    </div>
    <div className="stage-body">
      <p>Planned content:</p>
      <ul style={cssStyle("margin-top: 12px;")}>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>What the PR Checks tab looks like with multiple per-stage checks</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Mapping from Jenkins stages to GitHub check rows</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Re-run all checks button vs. per-check re-run</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Branch protection: requiring checks to pass before merge</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Where check Details links point (publicly-accessible Jenkins URL behind Access)</span></li>
      </ul>
    </div>
  </div>

  <div style={cssStyle("margin-top: 24px; font-family: var(--font-mono); font-size: 12px;")}>
    <a href="/projects/ci-cd/github/" style={cssStyle("color: var(--text-dim);")}>← back to GitHub</a>
  </div>
    </DocumentLayout>
    </>);
}
