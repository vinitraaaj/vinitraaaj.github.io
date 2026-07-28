import {
  ArrowUpRight,
  CircuitBoard,
  DraftingCompass,
  Radio,
} from "lucide-react";
import { GlassCard } from "@/components/glass/GlassCard";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/src/data/portfolio";

const experimentIcons = {
  plotter: DraftingCompass,
  keyboard: CircuitBoard,
  dial: Radio,
};

export function Experiments() {
  return (
    <section
      className="section experiments-section"
      aria-labelledby="experiments-title"
    >
      <SectionHeading
        eyebrow="EXPERIMENTS · SOFTWARE MEETS OBJECTS"
        title="Curiosity, made tangible."
        description="A slightly more cinematic lab for prototypes, notes, and real progress as the hardware explorations develop."
      />
      <h2 id="experiments-title" className="sr-only">
        Technical experiments
      </h2>
      <div className="experiments-grid">
        {portfolio.experiments.map((experiment, index) => {
          const Icon = experimentIcons[experiment.accent];
          return (
            <Reveal key={experiment.title} delay={index * 0.06}>
              <GlassCard
                as="article"
                className={"experiment-card experiment-" + experiment.accent}
              >
                <div className="experiment-visual" aria-hidden="true">
                  <Icon size={40} strokeWidth={1.05} />
                  <div className="experiment-scan" />
                  <div className="experiment-coordinates">
                    <span>X 07.2</span>
                    <span>Y 19.8</span>
                  </div>
                </div>
                <div className="experiment-content">
                  <div className="project-topline">
                    <span>Lab {String(index + 1).padStart(2, "0")}</span>
                    <span className="status-chip">{experiment.status}</span>
                  </div>
                  <h3>{experiment.title}</h3>
                  <p>{experiment.description}</p>
                  <div className="experiment-progress">
                    <span>Current focus</span>
                    <strong>{experiment.progress}</strong>
                  </div>
                  <div className="tag-list">
                    {experiment.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  <small>{experiment.notes}</small>
                  {experiment.githubUrl ? (
                    <a
                      href={experiment.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View source <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
