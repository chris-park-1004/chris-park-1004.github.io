import { Arrow, Mark, NavIcon } from "./Icons";

export function Header({ home = true }: { home?: boolean }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a className="wordmark" href="/" aria-label="Chris Park home">
          <Mark />
          <span>
            Chris Park<span className="logo-dot">.</span>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a className="nav-link" href={home ? '#work' : '/#work'}><span className="nav-label"><NavIcon kind="work" />Work</span></a>
          <a className="nav-link" href={home ? '#about' : '/#about'}><span className="nav-label"><NavIcon kind="about" />About</span></a>
          <a className="nav-contact" href="#contact">
            <span className="nav-label"><NavIcon kind="contact" />Contact</span>
            <span className="nav-arrow"><Arrow /></span>
          </a>
        </nav>
      </header>
    </>
  );
}
