import { Fragment } from 'react';
import { cssStyle } from '../helpers';
export interface Node {
    name: string;
    sub: string;
    /** simple-icons slug + brand hex, e.g. 'jenkins/D24939'. Omitted for the inline GitHub mark. */
    icon?: string;
    size?: number;
    /** highlight the tile border — the stage this pipeline is built around */
    active?: boolean;
}
const nodes: Node[] = [
    { name: 'GitHub', sub: 'push · PR' },
    { name: 'Cloudflare', sub: 'tunnel · access', icon: 'cloudflare/F38020', size: 24 },
    { name: 'Jenkins', sub: 'build · checks', icon: 'jenkins/D24939', size: 22, active: true },
    { name: 'Prometheus', sub: 'scrape 120s', icon: 'prometheus/E6522C', size: 22 },
    { name: 'Grafana', sub: 'public dashboard', icon: 'grafana/F46800', size: 22 },
];
export default function LivePipeline() {
    return (<>
    <div className="stage pipeline-card" style={cssStyle("--accent: var(--green);")}>
  <div className="pipeline-head">
    <span className="live-dot pulse"></span>
    <div className="card-label" style={cssStyle("margin:0;")}>live pipeline · self-hosted</div>
  </div>

  <div className="pipeline">
    {nodes.map((n, i) => (<Fragment key={i}>
        {i > 0 && (<div className="pipe-edge">
            <div className="pipe-dash"></div>
            <svg aria-hidden="true" width="9" height="12" viewBox="0 0 9 12">
              <path d="M1 1 L8 6 L1 11" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </div>)}
        <div className="pipe-node" style={cssStyle(`animation-delay:${0.05 + i * 0.1}s`)}>
          <div className="pipe-icon" style={cssStyle(n.active ? 'border-color: var(--green);' : undefined)}>
            {n.icon ? (<img src={`https://cdn.simpleicons.org/${n.icon}`} alt={n.name} width={n.size} height={n.size} loading="lazy"/>) : (<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={cssStyle("color: var(--blue);")}><path d="M12 1C5.9 1 1 5.9 1 12c0 4.9 3.2 9 7.5 10.5.6.1.8-.2.8-.5v-1.9c-3.1.7-3.7-1.5-3.7-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.4-.3-5-1.2-5-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5 5.5.4.3.8 1 .8 2v3c0 .3.2.6.8.5C19.8 21 23 16.9 23 12c0-6.1-4.9-11-11-11z"/></svg>)}
          </div>
          <div className="pipe-name">{n.name}</div>
          <div className="pipe-sub">{n.sub}</div>
        </div>
      </Fragment>))}
  </div>
    </div>


    </>);
}
