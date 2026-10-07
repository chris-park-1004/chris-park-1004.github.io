import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
import DocList from "../../documents/components/DocList";
import RelatedCard from "../../documents/components/RelatedCard";
import ContactCard from "../../documents/components/ContactCard";
import type { Doc } from "../../documents/components/DocList";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'projects/ci-cd', href: '/projects/ci-cd/' },
    { label: 'cloudflare' },
];
const subPages: Doc[] = [
    {
        id: 'doc_01',
        name: 'Tunnel Setup',
        href: '/projects/ci-cd/cloudflare/tunnel-setup',
        accent: 'yellow',
        summary: 'cloudflared installation + outbound-only secure tunnel to a home PC.',
    },
    {
        id: 'doc_02',
        name: 'Access Gate',
        href: '/projects/ci-cd/cloudflare/access-gate',
        accent: 'purple',
        summary: 'OAuth-based authentication gate in front of the Jenkins UI for admin access.',
    },
];
export function meta() { return [{ title: "Cloudflare — CI/CD Pipeline" }, { name: 'description', content: "Cloudflare integration notes: Tunnel for outbound-only connectivity, Access gate for admin authentication." }, { property: 'og:title', content: "Cloudflare — CI/CD Pipeline" }, { property: 'og:description', content: "Cloudflare integration notes: Tunnel for outbound-only connectivity, Access gate for admin authentication." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-projects-ci-cd-cloudflare" title="Cloudflare — CI/CD Pipeline" description="Cloudflare integration notes: Tunnel for outbound-only connectivity, Access gate for admin authentication." breadcrumbs={breadcrumbs}>
  <div className="header">
    <div>
      <div className="prompt">$ cloudflared --version</div>
      <h1>Cloudflare</h1>
      <div className="subtitle">Outbound-only tunnel · Zero inbound ports · OAuth-based admin gate</div>
    </div>
    <div className="header-meta">
      <div className="row">inbound ports: <b>0</b></div>
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
        <div className="card-label">why tunnel</div>
        <p>
          A home PC behind NAT can't accept inbound connections without port forwarding and DDNS, both of which expose attack surface. Cloudflare Tunnel reverses the direction: the home PC opens an outbound socket to Cloudflare and keeps it alive.
        </p>
        <p>
          Result: zero inbound ports on the home PC, home IP never exposed, HTTPS terminated at Cloudflare.
        </p>
      </div>

      <div className="section-label">── ./stack</div>
      <div className="card stack-card">
        <div className="stack-tags">
          <span className="stack-tag">cloudflared</span>
          <span className="stack-tag">QUIC / HTTP/3</span>
          <span className="stack-tag">TLS edge termination</span>
          <span className="stack-tag">Cloudflare Access</span>
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
