import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'projects/ci-cd', href: '/projects/ci-cd/' },
    { label: 'github', href: '/projects/ci-cd/github/' },
    { label: 'app-setup' },
];
export function meta() { return [{ title: "GitHub / App Setup — CI/CD Pipeline" }, { name: 'description', content: "Creating a GitHub App, setting permissions, installing on the repo, and converting the private key from PKCS#1 to PKCS#8 for Jenkins." }, { property: 'og:title', content: "GitHub / App Setup — CI/CD Pipeline" }, { property: 'og:description', content: "Creating a GitHub App, setting permissions, installing on the repo, and converting the private key from PKCS#1 to PKCS#8 for Jenkins." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-projects-ci-cd-github-app-setup" title="GitHub / App Setup — CI/CD Pipeline" description="Creating a GitHub App, setting permissions, installing on the repo, and converting the private key from PKCS#1 to PKCS#8 for Jenkins." breadcrumbs={breadcrumbs}>
  <div className="header">
    <div>
      <div className="prompt">$ cat app-setup.md</div>
      <h1>App Setup</h1>
      <div className="subtitle">Create the App · install on repo · convert private key PKCS#1 → PKCS#8</div>
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
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Creating a GitHub App from a personal account</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Setting minimum permissions (Contents: read, Pull requests: read, Checks: write, Commit statuses: write)</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Subscribing to events (push, pull_request, check_run)</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Installing the App on the target repository</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>The PKCS#1 vs. PKCS#8 conversion gotcha (Jenkins requires PKCS#8)</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span><code>openssl pkcs8 -topk8 -inform PEM -outform PEM -in in.pem -out out.pem -nocrypt</code></span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Registering the GitHub App credential in Jenkins</span></li>
      </ul>
    </div>
  </div>

  <div style={cssStyle("margin-top: 24px; font-family: var(--font-mono); font-size: 12px;")}>
    <a href="/projects/ci-cd/github/" style={cssStyle("color: var(--text-dim);")}>← back to GitHub</a>
  </div>
    </DocumentLayout>
    </>);
}
