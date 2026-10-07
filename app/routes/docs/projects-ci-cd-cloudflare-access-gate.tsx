import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'projects/ci-cd', href: '/projects/ci-cd/' },
    { label: 'cloudflare', href: '/projects/ci-cd/cloudflare/' },
    { label: 'access-gate' },
];
export function meta() { return [{ title: "Cloudflare / Access Gate — CI/CD Pipeline" }, { name: 'description', content: "OAuth-based authentication gate in front of the Jenkins UI; keeps Jenkins private while the metrics dashboard stays public." }, { property: 'og:title', content: "Cloudflare / Access Gate — CI/CD Pipeline" }, { property: 'og:description', content: "OAuth-based authentication gate in front of the Jenkins UI; keeps Jenkins private while the metrics dashboard stays public." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-projects-ci-cd-cloudflare-access-gate" title="Cloudflare / Access Gate — CI/CD Pipeline" description="OAuth-based authentication gate in front of the Jenkins UI; keeps Jenkins private while the metrics dashboard stays public." breadcrumbs={breadcrumbs}>
  <div className="header">
    <div>
      <div className="prompt">$ cat access-gate.md</div>
      <h1>Access Gate</h1>
      <div className="subtitle">OAuth login required to reach Jenkins UI · public dashboard stays open</div>
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
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Why gate the Jenkins UI but not the dashboard (recruiters can't / won't log in)</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Setting up a Cloudflare Access application for the Jenkins hostname</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Identity provider config (email-OTP or Google / GitHub OAuth)</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Allowing only the owner's email</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Bypassing Access for the webhook path so GitHub can POST events</span></li>
      </ul>
    </div>
  </div>

  <div style={cssStyle("margin-top: 24px; font-family: var(--font-mono); font-size: 12px;")}>
    <a href="/projects/ci-cd/cloudflare/" style={cssStyle("color: var(--text-dim);")}>← back to Cloudflare</a>
  </div>
    </DocumentLayout>
    </>);
}
