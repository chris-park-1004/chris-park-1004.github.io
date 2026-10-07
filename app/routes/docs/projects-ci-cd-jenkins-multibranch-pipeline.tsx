import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'projects/ci-cd', href: '/projects/ci-cd/' },
    { label: 'jenkins', href: '/projects/ci-cd/jenkins/' },
    { label: 'multibranch-pipeline' },
];
export function meta() { return [{ title: "Jenkins / Multibranch Pipeline — CI/CD Pipeline" }, { name: 'description', content: "Auto-discover branches and PRs; build against the target-branch merge." }, { property: 'og:title', content: "Jenkins / Multibranch Pipeline — CI/CD Pipeline" }, { property: 'og:description', content: "Auto-discover branches and PRs; build against the target-branch merge." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-projects-ci-cd-jenkins-multibranch-pipeline" title="Jenkins / Multibranch Pipeline — CI/CD Pipeline" description="Auto-discover branches and PRs; build against the target-branch merge." breadcrumbs={breadcrumbs}>
  <div className="header">
    <div>
      <div className="prompt">$ cat multibranch-pipeline.md</div>
      <h1>Multibranch Pipeline</h1>
      <div className="subtitle">Auto-discovers branches + PRs · uses "Merging with target branch" strategy · driven by Jenkinsfile in each branch</div>
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
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Multibranch Pipeline vs. single Pipeline vs. Freestyle</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Branch Sources configuration with GitHub App credential</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>"Merging with target branch" vs. "current PR revision" trade-offs</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Excluding fork PRs (security trade-off)</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Orphaned-item retention strategy</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Sample Jenkinsfile with stage breakdown</span></li>
      </ul>
    </div>
  </div>

  <div style={cssStyle("margin-top: 24px; font-family: var(--font-mono); font-size: 12px;")}>
    <a href="/projects/ci-cd/jenkins/" style={cssStyle("color: var(--text-dim);")}>← back to Jenkins</a>
  </div>
    </DocumentLayout>
    </>);
}
