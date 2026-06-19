import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { projects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return { title: `${project.title} — Mitesh Uniyal` };
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  return (
    <main>
      <section className={`project-detail-header color-${project.color}`}>
        <div className="wrap">
          <Link href="/projects" className="back-link mono">
            ← All projects
          </Link>
          <h1>{project.title}</h1>
          <p>{project.tagline}</p>
          <div className="cta-row">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit live site →
            </a>
            <div className="tag-row" style={{ marginBottom: 0, alignItems: "center" }}>
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <Reveal className="detail-block">
            <h3>The challenge</h3>
            <p>{project.challenge}</p>
          </Reveal>

          <Reveal className="detail-block" delay={0.05}>
            <h3>The approach</h3>
            <ul>
              {project.approach.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="detail-block" delay={0.1}>
            <h3>What I learned</h3>
            <p>{project.learning}</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
