import DocCardIcon from "../../documents/components/DocCardIcon";
import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'projects/ci-cd', href: '/projects/ci-cd/' },
    { label: 'jenkins', href: '/projects/ci-cd/jenkins/' },
    { label: 'service-account' },
];
export function meta() { return [{ title: "Jenkins / Service Account — CI/CD Pipeline" }, { name: 'description', content: "Running Jenkins as a dedicated `jenkins` local user with the minimum required privileges on Windows 11 Home." }, { property: 'og:title', content: "Jenkins / Service Account — CI/CD Pipeline" }, { property: 'og:description', content: "Running Jenkins as a dedicated `jenkins` local user with the minimum required privileges on Windows 11 Home." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-projects-ci-cd-jenkins-service-account" title="Jenkins / Service Account — CI/CD Pipeline" description="Running Jenkins as a dedicated `jenkins` local user with the minimum required privileges on Windows 11 Home." breadcrumbs={breadcrumbs}>
  <div className="header">
    <div>
      <div className="prompt">$ cat service-account.md</div>
      <h1>Service Account</h1>
      <div className="subtitle">Dedicated `jenkins` local user · privilege isolation · `SeServiceLogonRight` via `secedit`</div>
    </div>
    <div className="header-meta">
      <div className="row">status: <b style={cssStyle("color:var(--yellow)")}>● writing</b></div>
    </div>
  </div>

  <div className="stage" style={cssStyle("--accent: var(--yellow)")}>
    <div className="stage-head">
      <div>
        <div className="stage-meta">
                  <DocCardIcon kind="document" />
          <span className="id">draft</span>
          <span className="badge b-yellow"><span className="badge-dot"></span>writing</span>
        </div>
        <div className="stage-name">Documentation in progress</div>
      </div>
    </div>
    <div className="stage-body">
      <p>Planned content:</p>
      <ul style={cssStyle("margin-top: 12px;")}>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Why a dedicated service account (blast-radius reduction if Jenkins is compromised)</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Creating a non-admin local user on Windows 11 Home</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Granting <code>SeServiceLogonRight</code> via <code>secedit</code> (Home edition lacks <code>secpol.msc</code>)</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Switching Jenkins service to run as the new user</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Verifying with <code>Get-CimInstance Win32_Service</code></span></li>
      </ul>
    </div>
  </div>

  <div style={cssStyle("margin-top: 24px; font-family: var(--font-mono); font-size: 12px;")}>
    <a href="/projects/ci-cd/jenkins/" style={cssStyle("color: var(--text-dim);")}>← back to Jenkins</a>
  </div>
    </DocumentLayout>
    </>);
}
