import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <AnimatedBackground />
        <div className="wrap hero-inner">
          <span className="eyebrow mono">FRONTEND DEVELOPER — DELHI, INDIA</span>
          <h1>Mitesh Uniyal</h1>
          <p className="hero-sub">
            I build fast, responsive interfaces that feel as good as they look — with React,
            clean component design, and an eye for detail.
          </p>
          <div className="cta-row">
            <Link href="/projects" className="btn btn-primary">
              See my work →
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Get in touch
            </Link>
          </div>
          <div className="availability">
            <span className="dot" />
            Open to frontend roles &amp; freelance projects
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="section-label mono">01 — Profile</span>
              <h2>About</h2>
            </div>
            <p className="section-note">A short version of how I got here.</p>
          </div>
          <Reveal className="about-grid" delay={0}>
            <div style={{ maxWidth: 540 }}>
              <p style={{ color: "var(--ink-soft)", fontSize: "1.05rem" }}>
                I&apos;m an aspiring frontend developer finishing my BCA at Guru Gobind Singh
                Indraprastha University in Delhi. I like turning rough ideas into interfaces
                that are quick to use and easy on the eyes.
              </p>
              <p style={{ color: "var(--ink-soft)", fontSize: "1.05rem", marginTop: 16 }}>
                Most recently that meant building a movie discovery app and a sneaker storefront
                from scratch — design, components, state, and deploy — both live and click-through
                today.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="section-label mono">02 — Toolkit</span>
              <h2>Skills</h2>
            </div>
            <p className="section-note">What I reach for when I&apos;m building something.</p>
          </div>
          <Reveal>
            <div className="skill-group">
              <span className="skill-group-label">Frontend</span>
              <div className="pill-row">
                <span className="pill pill-indigo">React.js</span>
                <span className="pill pill-indigo">HTML5</span>
                <span className="pill pill-indigo">CSS3</span>
                <span className="pill pill-indigo">JavaScript (ES6+)</span>
              </div>
            </div>
            <div className="skill-group">
              <span className="skill-group-label">Tools</span>
              <div className="pill-row">
                <span className="pill pill-coral">Git</span>
                <span className="pill pill-coral">Netlify</span>
                <span className="pill pill-coral">VS Code</span>
              </div>
            </div>
            <div className="skill-group">
              <span className="skill-group-label">Languages</span>
              <div className="pill-row">
                <span className="pill pill-teal">English</span>
                <span className="pill pill-teal">Hindi</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="section-label mono">03 — Work</span>
              <h2>Selected work</h2>
            </div>
            <p className="section-note">Two projects, built solo and shipped to production.</p>
          </div>
          <div className="project-list">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div style={{ marginTop: 28 }}>
              <Link href="/projects" className="btn btn-ghost">
                View all projects →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="section-label mono">04 — Education</span>
              <h2>Education</h2>
            </div>
          </div>
          <Reveal>
            <div className="edu-card">
              <div>
                <div className="edu-degree">Bachelor of Computer Applications (BCA)</div>
                <div className="edu-school">
                  Guru Gobind Singh Indraprastha University — Delhi, India
                </div>
              </div>
              <span className="edu-status">Currently pursuing</span>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
