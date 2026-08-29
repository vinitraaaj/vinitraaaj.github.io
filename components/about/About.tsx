import {
  ArrowDownToLine,
  Compass,
  Gauge,
  Globe2,
  Landmark,
} from "lucide-react";
import { GlassCard } from "@/components/glass/GlassCard";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/src/data/portfolio";

const interestIcons = {
  travel: Globe2,
  mobility: Gauge,
  systems: Compass,
  impact: Landmark,
};

export function About() {
  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-title"
    >
      <SectionHeading
        eyebrow={"ABOUT " + portfolio.profile.name.toUpperCase()}
        title="Curiosity beyond the code."
        description="Engineering is the centre of the work. Travel, machines, ambitious systems, and public service give it a wider horizon."
      />
      <h2 id="about-title" className="sr-only">
        About {portfolio.profile.name}
      </h2>
      <div className="about-grid">
        <Reveal className="about-copy">
          {portfolio.profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {portfolio.contact.resumeUrl ? (
            <a
              className="button button-secondary"
              href={portfolio.contact.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              View resume <ArrowDownToLine size={17} aria-hidden="true" />
            </a>
          ) : null}
        </Reveal>
        <Reveal delay={0.08}>
          <GlassCard className="interest-panel">
            <div className="panel-kicker">
              <span>Beyond the terminal</span>
              <span className="panel-chip">The long view</span>
            </div>
            <div className="interest-grid">
              {portfolio.profile.interests.map((interest) => {
                const Icon =
                  interestIcons[interest.id as keyof typeof interestIcons];
                return (
                  <div key={interest.id}>
                    <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
                    <span>{interest.label}</span>
                  </div>
                );
              })}
            </div>
            <blockquote>“{portfolio.profile.longView}”</blockquote>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
