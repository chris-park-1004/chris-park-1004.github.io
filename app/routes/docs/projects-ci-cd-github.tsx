import DocCardIcon from "../../documents/components/DocCardIcon";
import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
import DocList from "../../documents/components/DocList";
import RelatedCard from "../../documents/components/RelatedCard";
import ContactCard from "../../documents/components/ContactCard";
import type { Doc } from "../../documents/components/DocList";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'projects/ci-cd', href: '/projects/ci-cd/' },
    { label: 'github' },
];
const subPages: Doc[] = [
    {
        id: 'doc_01',
        name: 'App Setup',
        href: '/projects/ci-cd/github/app-setup',
        accent: 'green',
        summary: 'Create a GitHub App, set permissions, install on the repo, convert key from PKCS#1 to PKCS#8.',
    },
    {
        id: 'doc_02',
        name: 'Webhook',
        href: '/projects/ci-cd/github/webhook',
        accent: 'blue',
        summary: 'GitHub App webhook (vs repo-level) with HMAC secret verification.',
    },
    {
        id: 'doc_03',
        name: 'PR Checks',
        href: '/projects/ci-cd/github/pr-checks',
        accent: 'purple',
        summary: 'Rich per-stage check results on the PR page via the Checks API.',
    },
];
export function meta() { return [{ title: "GitHub — CI/CD Pipeline" }, { name: 'description', content: "GitHub integration notes: App-based auth, webhook, and PR Checks API." }, { property: 'og:title', content: "GitHub — CI/CD Pipeline" }, { property: 'og:description', content: "GitHub integration notes: App-based auth, webhook, and PR Checks API." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-projects-ci-cd-github" title="GitHub — CI/CD Pipeline" description="GitHub integration notes: App-based auth, webhook, and PR Checks API." breadcrumbs={breadcrumbs}>
  <div className="header">
    <div>
      <div className="prompt">$ cat README.md</div>
      <h1>GitHub</h1>
      <div className="subtitle">Source control · GitHub App auth · Checks API for rich PR feedback</div>
    </div>
    <div className="header-meta">
      <div className="row">auth: <b>GitHub App (JWT)</b></div>
      <div className="row">status: <b style={cssStyle("color:var(--green)")}>● deployed</b></div>
    </div>
  </div>

  <div className="grid">
    <div>
      <div className="section-label">── ./docs</div>

      <DocList docs={subPages}/>
    </div>

    <div className="rail">
      <div className="section-label">── ./contact</div>
      <ContactCard />

      <div className="section-label">── ./context</div>

      <div className="card">
        <div className="card-label"><DocCardIcon kind="info" />why github app</div>
        <p>
          Personal Access Tokens (PATs) are user-bound and have a fixed 5,000 req/hr rate limit. GitHub Apps scale with installation, are account-independent, and issue short-lived 1-hour tokens auto-refreshed by Jenkins.
        </p>
      </div>

      <div className="section-label">── ./stack</div>
      <div className="card stack-card">
        <div className="stack-tags">
          <span className="stack-tag">GitHub App</span>
          <span className="stack-tag">RSA / JWT (RS256)</span>
          <span className="stack-tag">Webhook (HMAC-SHA256)</span>
          <span className="stack-tag">Checks API</span>
        </div>
      </div>

      <RelatedCard links={[
            { href: '/projects/ci-cd/jenkins/', label: '→ Jenkins component', color: 'blue' },
            { href: '/projects/ci-cd/', label: '← back to project' },
        ]}/>
    </div>
  </div>
    </DocumentLayout>
    </>);
}
