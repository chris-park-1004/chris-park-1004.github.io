import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SystemGraphic } from "../components/SystemGraphic";
import { CareerGraphic } from "../components/CareerGraphic";
import { ProjectCard } from "../components/ProjectCard";
import { Arrow } from "../components/Icons";
import { links, projects } from "../data/content";

export function meta() {
  const title = "Chris Park — Systems, software & everything between";
  const description =
    "Chris Park is a DevOps and software engineer in Waterloo, Ontario. Explore self-hosted infrastructure, AI developer tools, and connected systems.";
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">
              <span className="availability-dot" /> DEVOPS & SOFTWARE ENGINEER
            </p>
            <h1 id="hero-title">
              I build systems
              <br />
              that <span>connect.</span>
            </h1>
            <p className="hero-description">
              I’m Chris. I bring code, infrastructure, and ideas together to
              make things work — and keep them working.
            </p>
            <a className="button button-dark button-explore" href="#work">
              <span className="explore-label">Explore my work</span>
              <span className="explore-arrow" aria-hidden="true">
                <Arrow diagonal={false} />
                <Arrow diagonal={false} />
              </span>
            </a>
          </div>
          <SystemGraphic />
        </section>
        <div className="discipline-strip wrap">
          <span className="strip-label">GOOD SYSTEMS CONNECT THE DOTS.</span>
          <div>
            <span>Infrastructure</span>
            <span className="strip-cross" aria-hidden="true">
              ✳
            </span>
            <span>Software</span>
            <span className="strip-cross" aria-hidden="true">
              ✳
            </span>
            <span>Real-world impact</span>
          </div>
        </div>
        <section
          id="work"
          className="work-section wrap"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">A FEW THINGS I’VE BUILT</p>
              <h2 id="work-title">
                Selected work<span className="section-count">(03)</span>
              </h2>
            </div>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        <section
          id="about"
          className="about-section wrap"
          aria-labelledby="about-title"
        >
          <div className="about-heading" id="about-card">
            <p className="eyebrow">THE PERSON BEHIND THE SYSTEMS</p>
            <h2 id="about-title">
              Engineering
              <br />
              <span>across disciplines.</span>
            </h2>
            <CareerGraphic />
            <a className="project-action career-action" href={links.career}>
              <span className="project-action-label">Explore my career</span>
              <span className="project-action-arrow" aria-hidden="true"><Arrow /></span>
            </a>
          </div>
          <div className="about-copy">
            <p className="about-summary">
              My background in mechanical engineering led me into software,
              where I’ve worked on <strong>CI/CD pipelines, infrastructure, and
              full-stack applications.</strong>
            </p>
            <p className="about-summary">
              Now I’m moving forward...{" "}
              <strong>AI orchestration, tool development, and workflow automation.</strong>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
