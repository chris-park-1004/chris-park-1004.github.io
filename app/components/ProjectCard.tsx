import type { Project } from "../data/content";
import { Arrow } from "./Icons";
import {
  HandoffVisual,
  InfrastructureVisual,
  Loc8uVisual,
} from "./ProjectVisuals";

function ProjectAction({ href, label, accessibleLabel }: { href: string; label: string; accessibleLabel?: string }) {
  return (
    <a className="project-action" href={href} aria-label={accessibleLabel}>
      <span className="project-action-label">{label}</span>
      <span className="project-action-arrow" aria-hidden="true"><Arrow /></span>
    </a>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`project project-${project.id}`}
      aria-labelledby={`${project.id}-title`}
    >
      <a
        className="project-image-link"
        href={project.href}
        aria-label={project.action}
      >
        {project.id === "cicd" ? (
          <InfrastructureVisual />
        ) : project.id === "handoff" ? (
          <HandoffVisual />
        ) : (
          <Loc8uVisual />
        )}
      </a>
      <div className="project-info">
        <div className="project-summary">
          <p className="eyebrow project-category">
            <span>{project.number}</span>
            {project.category}
          </p>
          <h3 id={`${project.id}-title`}>{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>
        <div className="project-actions">
          <ProjectAction href={project.href} label={project.action} />
          {project.resources?.map(resource => (
            <ProjectAction key={resource.href} href={resource.href} label={resource.label} accessibleLabel={`${project.title}: ${resource.label}`} />
          ))}
        </div>
      </div>
    </article>
  );
}
