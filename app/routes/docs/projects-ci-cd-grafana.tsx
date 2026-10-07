import { cssStyle, imageFallback } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
import RelatedCard from "../../documents/components/RelatedCard";
import ContactCard from "../../documents/components/ContactCard";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'projects/ci-cd', href: '/projects/ci-cd/' },
    { label: 'grafana' },
];
// Public dashboard — no login required, live data
const dashboardUrl = 'https://chrispark1004.grafana.net/public-dashboards/2d066cd8728b4f5cb5b01ce7be2a505f';
// One Grafana dashboard ("jenkins-dashboard"), split into two row groups.
const groups = [
    {
        href: '/projects/ci-cd/grafana/jenkins-overview',
        img: 'jenkins-overview.png',
        name: 'Jenkins Overview',
        badge: 'b-green',
        accent: 'green',
        panels: 6,
        description: 'CI / build health at a glance — controller status, build result tallies, registered pipelines, weekly build activity, and average stage durations.',
    },
    {
        href: '/projects/ci-cd/grafana/server-resources',
        img: 'server-resources.png',
        name: 'Server Resources',
        badge: 'b-purple',
        accent: 'purple',
        panels: 9,
        description: 'JVM and host health of the Jenkins process — CPU, heap, threads, garbage collection, file descriptors, and deadlock detection.',
    },
];
const totalPanels = groups.reduce((sum, g) => sum + g.panels, 0);
export function meta() { return [{ title: "Grafana — CI/CD Pipeline" }, { name: 'description', content: "One Grafana Cloud dashboard over the Jenkins pipeline, split into two row groups (Jenkins Overview and Server Resources). Open a group to see every panel explained and linked to its Prometheus metric." }, { property: 'og:title', content: "Grafana — CI/CD Pipeline" }, { property: 'og:description', content: "One Grafana Cloud dashboard over the Jenkins pipeline, split into two row groups (Jenkins Overview and Server Resources). Open a group to see every panel explained and linked to its Prometheus metric." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-projects-ci-cd-grafana" title="Grafana — CI/CD Pipeline" description="One Grafana Cloud dashboard over the Jenkins pipeline, split into two row groups (Jenkins Overview and Server Resources). Open a group to see every panel explained and linked to its Prometheus metric." breadcrumbs={breadcrumbs}>

  {/* header */}
  <div className="header">
    <div>
      <div className="prompt">$ open grafana-cloud://jenkins-dashboard</div>
      <h1>Grafana</h1>
      <div className="subtitle">Grafana Cloud free tier · 1 dashboard · 2 row groups · {totalPanels} panels over the Jenkins pipeline</div>
    </div>
    <div className="header-meta">
      <div className="row">datasource: <b>grafanacloud-prom</b></div>
      <div className="row">groups: <b>{groups.length}</b></div>
      <div className="row">status: <b style={cssStyle("color:var(--green)")}>● deployed</b></div>
    </div>
  </div>

  {/* summary */}
  <div className="summary">
    <div><div className="k">Dashboard</div><div className="v green">1</div></div>
    <div><div className="k">Row groups</div><div className="v blue">{groups.length}</div></div>
    <div><div className="k">Panels</div><div className="v purple">{totalPanels}</div></div>
    <div><div className="k">Public access</div><div className="v green">live</div></div>
  </div>

  {/* main grid */}
  <div className="grid">
    <div>

  {/* live dashboard link */}
  <div className="section-label">── ./live</div>
  <div className="live-link">
    <div className="card-label" style={cssStyle("margin-bottom: 8px;")}>grafana cloud · public dashboard</div>
    <div style={cssStyle("font-size: 12px; color: var(--text-dim); margin-bottom: 14px; line-height: 1.55;")}>
      <span className="badge b-green" style={cssStyle("margin-right: 8px;")}><span className="badge-dot"></span>public · no login</span>
      Live, view-only access — anyone with the link sees real-time CI/CD metrics without signing in.
    </div>
    <a className="ll-cta" href={dashboardUrl} target="_blank" rel="noopener noreferrer">↗ Open Dashboard</a>
  </div>

  {/* row groups (full captures → sub-pages) */}
  <div className="section-label" style={cssStyle("margin-top: 28px;")}>── ./groups</div>
  <div className="dash-list">
    {groups.map((g, itemIndex) => (<a className="dash-card" href={g.href} style={cssStyle(`--accent: var(--${g.accent})`)} key={itemIndex}>
        <div className="dash-body">
          <div className="panel-top">
            <div className="panel-name">{g.name}</div>
            <span className={`badge ${g.badge}`}><span className="badge-dot"></span>{g.panels} panels</span>
          </div>
          <p className="panel-meaning">{g.description}</p>
          <span style={cssStyle(`font-family: var(--font-mono); font-size: 12px; font-weight: 600; color: var(--${g.accent});`)}>
            view panel breakdown →
          </span>
        </div>
        <div className="dash-shot">
          <img src={`/img/grafana/${g.img}`} alt={`${g.name} row group`} loading="lazy" onError={imageFallback}/>
        </div>
      </a>))}
  </div>

    </div>

    {/* right rail */}
    <div className="rail">
      <div className="section-label">── ./contact</div>
      <ContactCard />

      <div className="section-label">── ./context</div>
      <div className="card">
        <div className="card-label">why grafana cloud</div>
        <p>
          Self-hosting Grafana would mean exposing yet another service through the Cloudflare Tunnel. Grafana Cloud hosts the dashboards externally instead — the home PC only pushes metrics out via Prometheus <code>remote_write</code>, never accepting inbound connections.
        </p>
        <p>
          It’s a single dashboard split into two row groups, all on one datasource — <code>grafanacloud-prom</code> (Mimir). Open a group to see each panel explained, with a click-through to the backing metric in the Prometheus catalog.
        </p>
      </div>

      <RelatedCard links={[
            { href: '/projects/ci-cd/prometheus/', label: '→ Prometheus metric catalog', color: 'blue' },
            { href: '/projects/ci-cd/jenkins/', label: '→ Jenkins component', color: 'green' },
            { href: '/projects/ci-cd/', label: '← back to project' },
        ]}/>
    </div>
  </div>

    </DocumentLayout>
    </>);
}
