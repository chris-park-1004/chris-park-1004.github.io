import { Mark, NavIcon, SocialIcon } from "./Icons";
import { links } from "../data/content";

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
          <a className="nav-orb" href={home ? '#work' : '/#work'} aria-label="Work">
            <NavIcon kind="work" /><span className="nav-text">Work</span>
          </a>
          <a className="nav-orb" href={home ? '#about' : '/#about'} aria-label="About">
            <NavIcon kind="about" /><span className="nav-text">About</span>
          </a>
          <a className="nav-orb" href="#contact" aria-label="Contact">
            <NavIcon kind="contact" /><span className="nav-text">Contact</span>
          </a>
          <a className="nav-orb" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
            <SocialIcon kind="github" /><span className="nav-text">GitHub</span>
          </a>
          <a className="nav-orb" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
            <SocialIcon kind="linkedin" /><span className="nav-text">LinkedIn</span>
          </a>
        </nav>
      </header>
    </>
  );
}
