import { cssStyle } from '../helpers';
import DocCardIcon from './DocCardIcon';
export interface Doc {
    id: string;
    name: string;
    href: string;
    accent: string;
    summary: string;
    /** optional preview bullets rendered as the card body; may contain inline HTML */
    bullets?: string[];
}
interface Props {
    docs: Doc[];
}
export default function DocList({ docs }: Props) {
    return (<>
        {docs.map((doc, itemIndex) => (<a href={doc.href} className="stage-link" style={cssStyle("display: block; margin-bottom: 14px;")} key={itemIndex}>
    <div className="stage" style={cssStyle(`--accent: var(--${doc.accent})`)}>
      <div className="stage-head">
        <div>
          <div className="stage-meta">
            <DocCardIcon kind={doc.href.split('/').filter(Boolean).at(-1)} />
            <span className="id">{doc.id}</span>
            <span className="badge b-dim"><span className="badge-dot"></span>draft</span>
          </div>
          <div className="stage-name">{doc.name}</div>
          <div className="stage-sub">{doc.summary}</div>
        </div>
        <div className="stage-dur">read →</div>
      </div>
      {doc.bullets && (<div className="stage-body">
          <ul>
            {doc.bullets.map((b, itemIndex) => (<li key={itemIndex}><span className="check" style={cssStyle("color:var(--text-faint)")}>•</span><span dangerouslySetInnerHTML={{ __html: b }}></span></li>))}
          </ul>
        </div>)}
    </div>
  </a>))}
    </>);
}
