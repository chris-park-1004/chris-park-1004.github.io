import { links } from "../data/content";
import { Arrow, Mark } from "./Icons";

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="wrap">
        <div className="contact-intro" id="contact-card">
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
          <a className="contact-heading" href={links.email}>
            Let’s connect.
            <Arrow />
          </a>
          <p>A project, an opportunity, or just a good conversation.</p>
          <a className="email-link" href={links.email}>
            honggyupark1004@gmail.com <Arrow />
          </a>
        </div>
        <div className="footer-bottom">
          <a className="footer-brand" href="/" aria-label="Chris Park home">
            <Mark />
            <span>© 2026 Chris Park</span>
          </a>
          <span className="footer-location">
            Made with intention. Based in Waterloo, ON.
          </span>
          <div className="social-links">
            <a href={links.github}>
              GitHub <Arrow />
            </a>
            <a href={links.linkedin}>
              LinkedIn <Arrow />
            </a>
          </div>
        </div>
        <p className="artwork-credit">
          Jenkins artwork by the <a href="https://www.jenkins.io/">Jenkins project</a>
          {" · "}<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>
        </p>
      </div>
    </footer>
  );
}
