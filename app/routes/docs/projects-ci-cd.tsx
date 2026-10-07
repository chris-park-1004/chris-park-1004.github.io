import DocCardIcon from "../../documents/components/DocCardIcon";
import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
import LivePipeline from "../../documents/components/LivePipeline";
import ContactCard from "../../documents/components/ContactCard";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'projects/ci-cd' },
];
interface Component {
    id: string;
    name: string;
    href: string;
    status: 'deployed' | 'planning';
    accent: string;
    sub: string;
    subPages?: string[];
    shots?: {
        img: string;
        cap: string;
    }[];
    meta?: string;
}
const components: Component[] = [
    {
        id: 'component_01',
        name: 'Jenkins',
        href: '/projects/ci-cd/jenkins/',
        status: 'deployed',
        accent: 'green',
        sub: 'CI/CD orchestrator · Multibranch Pipeline · controller + windows-agent',
        subPages: ['installation', 'service-account', 'multibranch-pipeline', 'checks-api', 'agents'],
        meta: '5 docs',
    },
    {
        id: 'component_02',
        name: 'GitHub',
        href: '/projects/ci-cd/github/',
        status: 'deployed',
        accent: 'blue',
        sub: 'App-based auth · webhook builds · rich PR status via Checks API',
        subPages: ['app-setup', 'webhook', 'pr-checks'],
        meta: '3 docs',
    },
    {
        id: 'component_03',
        name: 'Cloudflare',
        href: '/projects/ci-cd/cloudflare/',
        status: 'deployed',
        accent: 'yellow',
        sub: 'Outbound-only tunnel · Access gate for admin · zero inbound ports',
        subPages: ['tunnel-setup', 'access-gate'],
        meta: '2 docs',
    },
    {
        id: 'component_04',
        name: 'Prometheus',
        href: '/projects/ci-cd/prometheus/',
        status: 'deployed',
        accent: 'red',
        sub: 'Docker on Jenkins host · 120s scrape · remote_write → Grafana Cloud Mimir',
        meta: 'metric catalog',
    },
    {
        id: 'component_05',
        name: 'Grafana',
        href: '/projects/ci-cd/grafana/',
        status: 'deployed',
        accent: 'purple',
        sub: 'Grafana Cloud free tier · public dashboard · 2 row groups',
        shots: [
            { img: '/img/grafana/jenkins-overview.png', cap: 'jenkins-overview' },
            { img: '/img/grafana/server-resources.png', cap: 'server-resources' },
        ],
        meta: '2 row groups',
    },
];
export function meta() { return [{ title: "CI/CD Pipeline — Chris (Honggyu) Park" }, { name: 'description', content: "Personal CI/CD pipeline project: Jenkins on home PC, Cloudflare Tunnel, GitHub App authentication, Prometheus metrics and a live public Grafana dashboard." }, { property: 'og:title', content: "CI/CD Pipeline — Chris (Honggyu) Park" }, { property: 'og:description', content: "Personal CI/CD pipeline project: Jenkins on home PC, Cloudflare Tunnel, GitHub App authentication, Prometheus metrics and a live public Grafana dashboard." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-projects-ci-cd" title="CI/CD Pipeline — Chris (Honggyu) Park" description="Personal CI/CD pipeline project: Jenkins on home PC, Cloudflare Tunnel, GitHub App authentication, Prometheus metrics and a live public Grafana dashboard." breadcrumbs={breadcrumbs}>

  {/* header */}
  <div className="header" style={cssStyle("margin-bottom: 20px;")}>
    <div>
      <div className="prompt">$ cat README.md</div>
      <h1>CI/CD Pipeline</h1>
      <div className="subtitle">Self-hosted Jenkins on home PC · GitHub App auth · Cloudflare Tunnel + Access</div>
    </div>
    <div className="header-meta">
      <div className="row">stack: <b>5 components</b></div>
      <div className="row">status: <b style={cssStyle("color:var(--green)")}>● deployed</b></div>
    </div>
  </div>

  {/* live pipeline */}
  <LivePipeline />

  {/* main grid */}
  <div className="grid">
    <div>

      <div className="section-label">── ./components</div>

      {components.map((comp, itemIndex) => (<a href={comp.href} className="stage-link" style={cssStyle("display: block; margin-bottom: 14px;")} key={itemIndex}>
          <div className="stage" style={cssStyle(`--accent: var(--${comp.accent})${comp.shots ? '; overflow: hidden' : ''}`)}>
            <div className="stage-head">
              <div>
                <div className="stage-meta">
                  <DocCardIcon kind={comp.name} />
                  <span className="id">{comp.id}</span>
                  {comp.status === 'deployed' ? (<span className="badge b-green"><span className="badge-dot"></span>deployed</span>) : (<span className="badge b-dim"><span className="badge-dot"></span>planning</span>)}
                </div>
                <div className="stage-name">{comp.name}</div>
                <div className="stage-sub">{comp.sub}</div>
              </div>
              <div className="stage-dur">{comp.meta}</div>
            </div>
            {(comp.subPages || comp.shots) && (<div className="stage-body">
                {comp.subPages && (<div className="stack-tags">
                    {comp.subPages.map((sub, itemIndex) => (<span className="chip" key={itemIndex}>{sub}</span>))}
                  </div>)}
                {comp.shots && (<div className="shot-grid">
                    {comp.shots.map((s, itemIndex) => (<div className="shot" key={itemIndex}>
                        <img src={s.img} alt={`Grafana — ${s.cap} row group`} loading="lazy"/>
                        <div className="shot-cap">{s.cap}</div>
                      </div>))}
                  </div>)}
              </div>)}
          </div>
        </a>))}

    </div>

    {/* right rail */}
    <div className="rail">

      <div className="section-label">── ./contact</div>
      <ContactCard />

      <div className="section-label">── ./architecture</div>

      <div className="card stack-card">
        <div className="stack-group">
          <div className="cat">CI</div>
          <div className="stack-tags">
            <span className="stack-tag">Jenkins LTS</span>
            <span className="stack-tag">Java 25</span>
            <span className="stack-tag">Groovy</span>
          </div>
        </div>
        <div className="stack-group">
          <div className="cat">Auth & Network</div>
          <div className="stack-tags">
            <span className="stack-tag">GitHub App</span>
            <span className="stack-tag">JWT (RS256)</span>
            <span className="stack-tag">Cloudflare Tunnel</span>
            <span className="stack-tag">Cloudflare Access</span>
          </div>
        </div>
        <div className="stack-group">
          <div className="cat">Observability</div>
          <div className="stack-tags">
            <span className="stack-tag">Prometheus</span>
            <span className="stack-tag">Grafana Cloud</span>
          </div>
        </div>
      </div>

    </div>
  </div>

    </DocumentLayout>


    </>);
}
