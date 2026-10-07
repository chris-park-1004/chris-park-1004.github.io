import DocCardIcon from "../../documents/components/DocCardIcon";
import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'projects/ci-cd', href: '/projects/ci-cd/' },
    { label: 'jenkins', href: '/projects/ci-cd/jenkins/' },
    { label: 'installation' },
];
export function meta() { return [{ title: "Jenkins / Installation — CI/CD Pipeline" }, { name: 'description', content: "Installing Jenkins LTS on Windows 11 Home with Java 25 LTS." }, { property: 'og:title', content: "Jenkins / Installation — CI/CD Pipeline" }, { property: 'og:description', content: "Installing Jenkins LTS on Windows 11 Home with Java 25 LTS." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-projects-ci-cd-jenkins-installation" title="Jenkins / Installation — CI/CD Pipeline" description="Installing Jenkins LTS on Windows 11 Home with Java 25 LTS." breadcrumbs={breadcrumbs}>
  <div className="header">
    <div>
      <div className="prompt">$ cat installation.md</div>
      <h1>Installation</h1>
      <div className="subtitle">Jenkins LTS on Windows 11 Home · Java 25 LTS · MSI installer</div>
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
        <div className="stage-sub">This page will be expanded with screenshots and commands.</div>
      </div>
    </div>
    <div className="stage-body">
      <p>Planned content:</p>
      <ul style={cssStyle("margin-top: 12px;")}>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Java 25 LTS (Eclipse Temurin) install via MSI</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span><code>JAVA_HOME</code> setup and verification</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Jenkins LTS via Windows MSI installer</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Suggested plugins set vs. minimal plugins</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Initial admin user + password (the unlock step)</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Common pitfalls: WinSW double-restart race, port 8080 occupied, etc.</span></li>
      </ul>
    </div>
  </div>

  <div style={cssStyle("margin-top: 24px; font-family: var(--font-mono); font-size: 12px;")}>
    <a href="/projects/ci-cd/jenkins/" style={cssStyle("color: var(--text-dim);")}>← back to Jenkins</a>
  </div>
    </DocumentLayout>
    </>);
}
