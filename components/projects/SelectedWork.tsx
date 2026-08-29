import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/src/data/portfolio";

export function SelectedWork() {
  return (
    <section
      id="work"
      className="section work-section"
      aria-labelledby="work-title"
    >
      <SectionHeading
        eyebrow="SELECTED WORK"
        title="Products with purpose."
        description="Four systems shaped around real users, real operations, and the details that make software dependable."
      />
      <h2 id="work-title" className="sr-only">
        Selected work
      </h2>
      <div className="projects-grid">
        {portfolio.projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.slug} />
        ))}
      </div>
    </section>
  );
}
