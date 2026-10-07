interface Props {
    /** optional element id (the dashboard height-sync script targets it) */
    id?: string;
}
export default function ContactCard({ id }: Props) {
    return (<>
    <div className="card endpoints-card" id={id}>
  <div className="card-label">endpoints</div>
  <a href="mailto:honggyupark1004@gmail.com">
    <div className="contact-row">
      <span className="verb">GET </span><span className="path">/email</span>
      <span className="val">honggyupark1004@gmail.com</span>
    </div>
  </a>
  <a href="https://linkedin.com/in/honggyu-park-b68627249" target="_blank" rel="noopener">
    <div className="contact-row">
      <span className="verb">GET </span><span className="path">/linkedin</span>
      <span className="val">/in/honggyu-park-b68627249</span>
    </div>
  </a>
  <a href="https://github.com/chris-park-1004" target="_blank" rel="noopener">
    <div className="contact-row">
      <span className="verb">GET </span><span className="path">/github</span>
      <span className="val">github.com/chris-park-1004</span>
    </div>
  </a>
    </div>
    </>);
}
