import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'projects/ci-cd', href: '/projects/ci-cd/' },
    { label: 'jenkins', href: '/projects/ci-cd/jenkins/' },
    { label: 'checks-api' },
];
export function meta() { return [{ title: "Jenkins / Checks API — CI/CD Pipeline" }, { name: 'description', content: "Per-stage check results pushed to GitHub PR via the Checks API: rich UI, beyond simple commit statuses." }, { property: 'og:title', content: "Jenkins / Checks API — CI/CD Pipeline" }, { property: 'og:description', content: "Per-stage check results pushed to GitHub PR via the Checks API: rich UI, beyond simple commit statuses." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-projects-ci-cd-jenkins-checks-api" title="Jenkins / Checks API — CI/CD Pipeline" description="Per-stage check results pushed to GitHub PR via the Checks API: rich UI, beyond simple commit statuses." breadcrumbs={breadcrumbs}>
  <div className="header">
    <div>
      <div className="prompt">$ cat checks-api.md</div>
      <h1>Checks API</h1>
      <div className="subtitle">Rich PR status display · per-stage results · branch protection-ready</div>
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
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Commit Statuses vs. Checks API: why the latter for rich feedback</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Required plugins: Checks API plugin (interface) + GitHub Checks plugin (concrete publisher)</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>The "No suitable checks publisher found" gotcha</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span><code>publishChecks</code> step usage in a stage</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Markdown summary + text body in check details</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Branch protection that requires checks to pass before merge</span></li>
      </ul>
    </div>
  </div>

  <div style={cssStyle("margin-top: 24px; font-family: var(--font-mono); font-size: 12px;")}>
    <a href="/projects/ci-cd/jenkins/" style={cssStyle("color: var(--text-dim);")}>← back to Jenkins</a>
  </div>
    </DocumentLayout>
    </>);
}
