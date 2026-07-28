import { ArrowUpRight, Quote } from "lucide-react";
import { GlassCard } from "@/components/glass/GlassCard";
import { Reveal } from "@/components/motion/Reveal";
import { portfolio } from "@/src/data/portfolio";

export function AtGlance() {
  return (
    <section id="glance" className="glance-wrap" aria-labelledby="glance-title">
      <Reveal>
        <GlassCard className="glance-panel">
          <div className="glance-metrics">
            <div className="panel-kicker">
              <span id="glance-title">At a glance</span>
              <span className="panel-chip">Always evolving</span>
            </div>
            <div className="metric-grid">
              {portfolio.metrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                  <small>{metric.detail}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="glance-journey">
            <div className="panel-kicker">
              <span>Journey preview</span>
              <a href="#journey" aria-label="Explore the journey">
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="journey-signal" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="journey-preview-labels">
              <span>Curiosity</span>
              <span>Practice</span>
              <span>Building</span>
              <span>Impact</span>
            </div>
            <p className="current-focus">
              <span>{portfolio.profile.currentRole}</span>
              <strong>{portfolio.profile.currentLearningFocus}</strong>
            </p>
          </div>

          <blockquote className="glance-quote">
            <Quote size={27} strokeWidth={1.4} aria-hidden="true" />
            <p>“{portfolio.profile.principle}”</p>
            <footer>— {portfolio.profile.name}</footer>
          </blockquote>
        </GlassCard>
      </Reveal>
    </section>
  );
}
