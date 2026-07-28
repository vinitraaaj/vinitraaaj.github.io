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
    <>
      <section
        id="about"
        className="section about-section"
        aria-labelledby="about-title"
      >
        <SectionHeading
          eyebrow={"ABOUT " + portfolio.profile.name.toUpperCase()}
          title="Technical range. Human ambition."
          description="Engineering is the centre of the work; curiosity, mobility, and public service give it a wider horizon."
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
                <span className="panel-chip">Personal dimensions</span>
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

      <section
        className="section principles-section"
        aria-labelledby="principles-title"
      >
        <Reveal>
          <p className="section-eyebrow">PERSONAL PRINCIPLES</p>
          <h2 id="principles-title">Standards for how the work should feel.</h2>
        </Reveal>
        <div className="principles-grid">
          {portfolio.principles.map((principle, index) => (
            <Reveal key={principle} delay={index * 0.04}>
              <GlassCard className="principle-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle}</h3>
                <i aria-hidden="true" />
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
