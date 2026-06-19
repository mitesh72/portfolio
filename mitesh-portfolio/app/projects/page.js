import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects — Mitesh Uniyal",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow mono">WORK</span>
          <h1>Projects</h1>
          <p>
            Two projects, built solo from design to deploy. Each one links to a short case study
            covering the problem, the approach, and what I&apos;d do differently next time.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <div className="project-list">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
