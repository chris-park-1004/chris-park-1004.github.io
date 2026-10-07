import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
import DocList from "../../documents/components/DocList";
import RelatedCard from "../../documents/components/RelatedCard";
import ContactCard from "../../documents/components/ContactCard";
import type { Doc } from "../../documents/components/DocList";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'projects/ci-cd', href: '/projects/ci-cd/' },
    { label: 'jenkins' },
];
const subPages: Doc[] = [
    {
        id: 'doc_01',
        name: 'Installation',
        href: '/projects/ci-cd/jenkins/installation',
        accent: 'green',
        summary: 'Jenkins LTS on Windows 11 Home with Java 25 LTS.',
        bullets: [
            'Java 25 LTS (Eclipse Temurin)',
            'Jenkins LTS via Windows MSI installer',
            'Suggested plugins set',
            'Initial admin user + password setup',
        ],
    },
    {
        id: 'doc_02',
        name: 'Service Account',
        href: '/projects/ci-cd/jenkins/service-account',
        accent: 'yellow',
        summary: 'Dedicated `jenkins` local user with minimal privileges.',
        bullets: [
            'Why a dedicated service account (privilege isolation)',
            'Creating local user without admin rights',
            'Granting `SeServiceLogonRight` via `secedit` (Windows 11 Home has no `secpol.msc`)',
            'Configuring Jenkins service to run as that user',
        ],
    },
    {
        id: 'doc_03',
        name: 'Multibranch Pipeline',
        href: '/projects/ci-cd/jenkins/multibranch-pipeline',
        accent: 'blue',
        summary: 'Auto-discover branches and PRs; build with target-branch merge strategy.',
        bullets: [
            'Why Multibranch Pipeline over single Pipeline',
            'Branch Sources with GitHub App credential',
            '"Merging with target branch" strategy (catches integration issues)',
            'Excluding fork PRs (security trade-off)',
            'Orphaned-item retention policy',
        ],
    },
    {
        id: 'doc_04',
        name: 'Checks API',
        href: '/projects/ci-cd/jenkins/checks-api',
        accent: 'purple',
        summary: 'Per-stage check results pushed to GitHub PR (rich UI, beyond simple ✓/✗).',
        bullets: [
            'Checks API plugin + GitHub Checks plugin',
            'Why basic commit-statuses are insufficient',
            '`publishChecks` per stage with summary + Markdown body',
            'Branch protection for required checks (planned)',
        ],
    },
    {
        id: 'doc_05',
        name: 'Agents',
        href: '/projects/ci-cd/jenkins/agents',
        accent: 'red',
        summary: 'Controller / executor separation. Builds run on labeled sub-agent.',
        bullets: [
            'Why separate controller from build executors',
            'Setting up a Windows sub-agent (windows-agent)',
            'Label-restricted execution (`agent { label \'windows-agent\' }`)',
            'Future: containerized Linux agent for parallel builds',
        ],
    },
];
export function meta() { return [{ title: "Jenkins — CI/CD Pipeline" }, { name: 'description', content: "Jenkins setup notes: installation, dedicated service account, Multibranch Pipeline, GitHub Checks API integration, and multi-agent architecture." }, { property: 'og:title', content: "Jenkins — CI/CD Pipeline" }, { property: 'og:description', content: "Jenkins setup notes: installation, dedicated service account, Multibranch Pipeline, GitHub Checks API integration, and multi-agent architecture." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-projects-ci-cd-jenkins" title="Jenkins — CI/CD Pipeline" description="Jenkins setup notes: installation, dedicated service account, Multibranch Pipeline, GitHub Checks API integration, and multi-agent architecture." breadcrumbs={breadcrumbs}>

  {/* header */}
  <div className="header">
    <div>
      <div className="prompt">$ systemctl status jenkins</div>
      <h1>Jenkins</h1>
      <div className="subtitle">CI/CD orchestrator · Multibranch Pipeline · GitHub App auth · multi-agent</div>
    </div>
    <div className="header-meta">
      <div className="row">version: <b>LTS 2.555.1+</b></div>
      <div className="row">runtime: <b>Java 25 LTS</b></div>
      <div className="row">status: <b style={cssStyle("color:var(--green)")}>● deployed</b></div>
    </div>
  </div>

  {/* summary */}
  <div className="summary">
    <div><div className="k">Sub-pages</div><div className="v blue">{subPages.length}</div></div>
    <div><div className="k">Agents</div><div className="v green">2</div></div>
    <div><div className="k">Service user</div><div className="v purple">jenkins</div></div>
    <div><div className="k">Inbound ports</div><div className="v yellow">0</div></div>
  </div>

  {/* main grid */}
  <div className="grid">
    <div>

      <div className="section-label">── ./docs</div>

      <DocList docs={subPages}/>

    </div>

    {/* right rail */}
    <div className="rail">

      <div className="section-label">── ./contact</div>
      <ContactCard />

      <div className="section-label">── ./context</div>

      <div className="card">
        <div className="card-label">why jenkins</div>
        <p>
          Jenkins is the industry standard for self-hosted CI/CD. Full control, rich plugin ecosystem, and the same tool used at most enterprises with on-prem pipelines.
        </p>
        <p>
          This setup is portfolio-grade: deliberately self-hosted on a home PC, secured by Cloudflare, and documented to mirror an enterprise architecture.
        </p>
      </div>

      <div className="section-label">── ./stack</div>
      <div className="card stack-card">
        <div className="stack-group">
          <div className="cat">Core</div>
          <div className="stack-tags">
            <span className="stack-tag">Jenkins LTS</span>
            <span className="stack-tag">Java 25 LTS</span>
            <span className="stack-tag">Groovy DSL</span>
          </div>
        </div>
        <div className="stack-group">
          <div className="cat">Key plugins</div>
          <div className="stack-tags">
            <span className="stack-tag">GitHub Branch Source</span>
            <span className="stack-tag">Checks API</span>
            <span className="stack-tag">GitHub Checks</span>
            <span className="stack-tag">Pipeline</span>
          </div>
        </div>
        <div className="stack-group">
          <div className="cat">OS</div>
          <div className="stack-tags">
            <span className="stack-tag">Windows 11 Home</span>
            <span className="stack-tag">WinSW service</span>
          </div>
        </div>
      </div>

      <RelatedCard links={[
            { href: '/projects/ci-cd/github/', label: '→ GitHub component', color: 'blue' },
            { href: '/projects/ci-cd/cloudflare/', label: '→ Cloudflare component', color: 'blue' },
            { href: '/projects/ci-cd/', label: '← back to project' },
        ]}/>
    </div>
  </div>

    </DocumentLayout>
    </>);
}
