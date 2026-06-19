import Link from "next/link";

export default function ProjectCard({ project, showDetailLink = true }) {
  return (
    <div className={`project-card color-${project.color}`}>
      <div className="browser-bar">
        <div className="browser-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-url">{project.urlLabel}</div>
      </div>
      <div className="project-body">
        <div className="project-top">
          <span className="project-title">{project.title}</span>
          <a
            className="project-link mono"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit site →
          </a>
        </div>
        <p className="project-desc">{project.summary}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {showDetailLink && (
          <Link href={`/projects/${project.slug}`} className="project-detail-link mono">
            Read the case study →
          </Link>
        )}
      </div>
    </div>
  );
}
