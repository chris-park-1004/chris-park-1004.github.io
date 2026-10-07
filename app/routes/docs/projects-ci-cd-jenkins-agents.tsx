import DocCardIcon from "../../documents/components/DocCardIcon";
import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'projects/ci-cd', href: '/projects/ci-cd/' },
    { label: 'jenkins', href: '/projects/ci-cd/jenkins/' },
    { label: 'agents' },
];
export function meta() { return [{ title: "Jenkins / Agents — CI/CD Pipeline" }, { name: 'description', content: "Multi-agent architecture: orchestration controller + dedicated build executor." }, { property: 'og:title', content: "Jenkins / Agents — CI/CD Pipeline" }, { property: 'og:description', content: "Multi-agent architecture: orchestration controller + dedicated build executor." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-projects-ci-cd-jenkins-agents" title="Jenkins / Agents — CI/CD Pipeline" description="Multi-agent architecture: orchestration controller + dedicated build executor." breadcrumbs={breadcrumbs}>
  <div className="header">
    <div>
      <div className="prompt">$ cat agents.md</div>
      <h1>Agents</h1>
      <div className="subtitle">Controller-only orchestration · `windows-agent` for builds · mirrors enterprise pattern</div>
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
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Why separate controller from build executors (security + isolation)</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Restricting the controller node ("Only build jobs with matching label")</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Setting up a Windows sub-agent (<code>windows-agent</code>)</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Label-restricted execution: <code>agent &#123; label 'windows-agent' &#125;</code></span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>The "<code>agent any</code> waits forever" gotcha when labels mismatch</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Future: containerized Linux agent for parallel builds</span></li>
      </ul>
    </div>
  </div>

  <div style={cssStyle("margin-top: 24px; font-family: var(--font-mono); font-size: 12px;")}>
    <a href="/projects/ci-cd/jenkins/" style={cssStyle("color: var(--text-dim);")}>← back to Jenkins</a>
  </div>
    </DocumentLayout>
    </>);
}
