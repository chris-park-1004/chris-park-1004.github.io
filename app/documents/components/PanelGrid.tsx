import { cssStyle, imageFallback } from '../helpers';
import DocCardIcon from './DocCardIcon';
const PROM = '/projects/ci-cd/prometheus/';
export interface Src {
    label: string;
    anchor: string;
}
export interface Panel {
    name: string;
    viz: 'stat' | 'gauge' | 'table' | 'timeseries' | 'barchart';
    meaning: string;
    img: string;
    srcs: Src[];
}
interface Props {
    panels: Panel[];
    accent: string;
    dir: string;
}
export default function PanelGrid({ panels, accent, dir }: Props) {
    return (<>
    <div className="panel-grid">
  {panels.map((p, itemIndex) => (<div className="panel-card" style={cssStyle(`--accent: var(--${accent})`)} key={itemIndex}>
      <div className="panel-head">
        <div className="panel-name"><DocCardIcon kind="chart" />{p.name}</div>
        <span className="chip">{p.viz}</span>
      </div>
      <div className="panel-shot">
        <img src={`/img/grafana/${dir}/${p.img}`} alt={`${p.name} panel`} loading="lazy" onError={imageFallback}/>
      </div>
      <div className="panel-body">
        <p className="panel-meaning">{p.meaning}</p>
        <div className="panel-srcs">
          <span className="srcs-label"><span className="srcs-dot"></span>data source</span>
          {p.srcs.map((s, itemIndex) => (<a className="chip" href={`${PROM}#${s.anchor}`} title="View this metric in the Prometheus catalog" key={itemIndex}>
              <code>{s.label}</code>
            </a>))}
        </div>
      </div>
    </div>))}
    </div>
    </>);
}
