import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  FileText,
} from "lucide-react";
import type { Project } from "@/src/data/portfolio";

export function ProjectCaseStudy({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project;
}) {
  return (
    <div className="case-study-page">
      <header className="case-study-header">
        <Link href="/#work" className="case-study-wordmark">
          Vinit Raj
        </Link>
        <Link href="/#work" className="case-study-back">
          <ArrowLeft size={15} aria-hidden="true" />
          All work
        </Link>
      </header>

      <main>
        <section className="case-study-hero">
          <div className="case-study-hero-copy">
            <p className="case-study-eyebrow">
              {project.category} · {project.year}
            </p>
            <h1>{project.title}</h1>
            <p className="case-study-purpose">{project.purpose}</p>
            <div className="case-study-actions">
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  View live project
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : null}
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  View source
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : null}
              {project.caseStudyUrl ? (
                <a href={project.caseStudyUrl} target="_blank" rel="noreferrer">
                  Original project report
                  <FileText size={16} aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>

          <dl className="case-study-facts">
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{project.stack.join(" · ")}</dd>
            </div>
          </dl>
        </section>

        <div className="case-study-cover">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="100vw"
            unoptimized
          />
        </div>

        <section className="case-study-section case-study-introduction">
          <p className="case-study-section-label">The brief</p>
          <div>
            <h2>{project.challenge}</h2>
            <p>{project.outcome}</p>
          </div>
        </section>

        <section className="case-study-section case-study-capabilities">
          <p className="case-study-section-label">What it delivers</p>
          <ul>
            {project.caseStudy.highlights.map((highlight) => (
              <li key={highlight}>
                <Check size={17} aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        <section className="case-study-section case-study-architecture">
          <div className="case-study-section-heading">
            <p className="case-study-section-label">System architecture</p>
            <h2>From interaction to dependable operation.</h2>
          </div>
          <ol>
            {project.caseStudy.architecture.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="case-study-section case-study-decisions">
          <div className="case-study-section-heading">
            <p className="case-study-section-label">Engineering decisions</p>
            <h2>Choices made for clarity, safety, and scale.</h2>
          </div>
          <div className="case-study-decision-grid">
            {project.caseStudy.decisions.map((decision, index) => (
              <article key={decision.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{decision.title}</h3>
                <p>{decision.description}</p>
              </article>
            ))}
          </div>
        </section>

        <nav className="case-study-next" aria-label="Next project">
          <p>Next case study</p>
          <Link href={`/work/${nextProject.slug}/`}>
            <span>{nextProject.title}</span>
            <ArrowRight size={32} aria-hidden="true" />
          </Link>
        </nav>
      </main>

      <footer className="case-study-footer">
        <span>Vinit Raj · Software Engineer</span>
        <Link href="/#contact">Start a conversation</Link>
      </footer>
    </div>
  );
}
