import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'projects/ci-cd', href: '/projects/ci-cd/' },
    { label: 'github', href: '/projects/ci-cd/github/' },
    { label: 'webhook' },
];
export function meta() { return [{ title: "GitHub / Webhook — CI/CD Pipeline" }, { name: 'description', content: "GitHub App webhook (vs. repo-level), HMAC-SHA256 signature verification, and how Jenkins consumes the events." }, { property: 'og:title', content: "GitHub / Webhook — CI/CD Pipeline" }, { property: 'og:description', content: "GitHub App webhook (vs. repo-level), HMAC-SHA256 signature verification, and how Jenkins consumes the events." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-projects-ci-cd-github-webhook" title="GitHub / Webhook — CI/CD Pipeline" description="GitHub App webhook (vs. repo-level), HMAC-SHA256 signature verification, and how Jenkins consumes the events." breadcrumbs={breadcrumbs}>
  <div className="header">
    <div>
      <div className="prompt">$ cat webhook.md</div>
      <h1>Webhook</h1>
      <div className="subtitle">App-level webhook · HMAC secret · trailing slash on `/github-webhook/`</div>
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
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>GitHub App webhook vs. repo-level webhook</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>HMAC-SHA256 signature verification (X-Hub-Signature-256)</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Why the webhook secret must NOT be a public key</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Jenkins endpoint <code>/github-webhook/</code> (trailing slash required)</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Cloudflare route matching the path</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Debugging from "Recent Deliveries" tab on the GitHub side</span></li>
      </ul>
    </div>
  </div>

  <div style={cssStyle("margin-top: 24px; font-family: var(--font-mono); font-size: 12px;")}>
    <a href="/projects/ci-cd/github/" style={cssStyle("color: var(--text-dim);")}>← back to GitHub</a>
  </div>
    </DocumentLayout>
    </>);
}
