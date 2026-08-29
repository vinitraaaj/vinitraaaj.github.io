import {
  Braces,
  Cpu,
  Layers3,
  Server,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { GlassCard } from "@/components/glass/GlassCard";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio, type PortfolioIcon } from "@/src/data/portfolio";

const iconMap: Record<PortfolioIcon, LucideIcon> = {
  code: Braces,
  layers: Layers3,
  server: Server,
  workflow: Workflow,
  sparkles: Sparkles,
  cpu: Cpu,
};

export function EngineeringFocus() {
  return (
    <section
      id="engineering"
      className="section engineering-section"
      aria-labelledby="engineering-title"
    >
      <SectionHeading
        eyebrow="ENGINEERING FOCUS"
        title="Craft across the stack."
        description="How I connect product thinking, interfaces, services, automation, and infrastructure into coherent systems."
      />
      <h2 id="engineering-title" className="sr-only">
        Engineering focus
      </h2>
      <div className="focus-grid">
        {portfolio.focusAreas.map((area, index) => {
          const Icon = iconMap[area.icon];
          return (
            <Reveal key={area.title} delay={index * 0.045}>
              <GlassCard as="article" className="focus-card">
                <div className="focus-icon">
                  <Icon size={22} strokeWidth={1.45} aria-hidden="true" />
                  <span aria-hidden="true" />
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="tag-list">
                  {area.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
