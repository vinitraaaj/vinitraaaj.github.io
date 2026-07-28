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
        eyebrow="SELECTED WORK · CONFIGURABLE CASE STUDIES"
        title="Built like products, not thumbnails."
        description="A launch-style project system ready for verified work. Current entries are clearly labelled concepts or work in development."
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
