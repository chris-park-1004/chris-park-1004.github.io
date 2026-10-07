import { cssStyle } from '../helpers';
export interface RelatedLink {
    href: string;
    label: string;
    /** CSS colour variable name without the `--` prefix; defaults to `text-dim` */
    color?: string;
}
interface Props {
    links: RelatedLink[];
}
export default function RelatedCard({ links }: Props) {
    return (<>
    <div className="card">
  <div className="card-label">related</div>
  <div className="related-links">
    {links.map((l, itemIndex) => (<a href={l.href} style={cssStyle(`color: var(--${l.color ?? 'text-dim'});`)} key={itemIndex}>{l.label}</a>))}
  </div>
    </div>
    </>);
}
