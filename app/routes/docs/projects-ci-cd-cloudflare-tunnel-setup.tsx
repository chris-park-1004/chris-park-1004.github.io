import DocCardIcon from "../../documents/components/DocCardIcon";
import { cssStyle } from '../../documents/helpers';
import DocumentLayout from "../../components/DocumentLayout";
const breadcrumbs = [
    { label: 'chris-park-1004', href: '/' },
    { label: 'projects/ci-cd', href: '/projects/ci-cd/' },
    { label: 'cloudflare', href: '/projects/ci-cd/cloudflare/' },
    { label: 'tunnel-setup' },
];
export function meta() { return [{ title: "Cloudflare / Tunnel Setup — CI/CD Pipeline" }, { name: 'description', content: "Setting up `cloudflared` on a Windows home PC to create an outbound-only tunnel to Cloudflare, with zero inbound ports." }, { property: 'og:title', content: "Cloudflare / Tunnel Setup — CI/CD Pipeline" }, { property: 'og:description', content: "Setting up `cloudflared` on a Windows home PC to create an outbound-only tunnel to Cloudflare, with zero inbound ports." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }]; }
export default function DocumentPage() {
    return (<>
    <DocumentLayout pageClass="document-projects-ci-cd-cloudflare-tunnel-setup" title="Cloudflare / Tunnel Setup — CI/CD Pipeline" description="Setting up `cloudflared` on a Windows home PC to create an outbound-only tunnel to Cloudflare, with zero inbound ports." breadcrumbs={breadcrumbs}>
  <div className="header">
    <div>
      <div className="prompt">$ cat tunnel-setup.md</div>
      <h1>Tunnel Setup</h1>
      <div className="subtitle">`cloudflared` as a Windows service · outbound-only QUIC connection · DNS routing</div>
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
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Reverse-proxy concept: how Tunnel inverts the connection direction</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Installing <code>cloudflared</code> on Windows</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Authenticating + creating a named tunnel</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>DNS routing: pointing a hostname at the tunnel</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Running <code>cloudflared</code> as a Windows service</span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Verifying zero inbound ports with <code>netstat -an</code></span></li>
        <li><span className="check" style={cssStyle("color:var(--yellow)")}>○</span><span>Routing the webhook path correctly (<code>/github-webhook/*</code>)</span></li>
      </ul>
    </div>
  </div>

  <div style={cssStyle("margin-top: 24px; font-family: var(--font-mono); font-size: 12px;")}>
    <a href="/projects/ci-cd/cloudflare/" style={cssStyle("color: var(--text-dim);")}>← back to Cloudflare</a>
  </div>
    </DocumentLayout>
    </>);
}
