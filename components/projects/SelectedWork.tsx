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
        eyebrow="SELECTED WORK · PRODUCTS & SYSTEMS"
        title="Built for real operations."
        description="Full-stack products, internal platforms, marketplace automation, and infrastructure work shaped around real users and dependable delivery."
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
