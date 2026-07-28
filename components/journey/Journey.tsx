"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { portfolio } from "@/src/data/portfolio";
import { GlassCard } from "@/components/glass/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Journey() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 35%"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const moveTrack = (direction: -1 | 1) => {
    trackRef.current?.scrollBy({
      left: direction * Math.min(window.innerWidth * 0.72, 720),
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="section journey-section"
      aria-labelledby="journey-title"
    >
      <SectionHeading
        eyebrow="JOURNEY"
        title="A timeline designed for the truth."
        description="No invented employers, dates, or awards. The first entries are intentionally marked for replacement in the central content file."
      />
      <h2 id="journey-title" className="sr-only">
        Journey timeline
      </h2>
      <div className="timeline-toolbar">
        <p>Milestones move from foundation to current focus.</p>
        <div>
          <button
            type="button"
            onClick={() => moveTrack(-1)}
            aria-label="Scroll timeline backward"
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => moveTrack(1)}
            aria-label="Scroll timeline forward"
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="timeline-shell">
        <div className="timeline-line" aria-hidden="true">
          <motion.span style={{ scaleX }} />
        </div>
        <div className="timeline-track" ref={trackRef}>
          {portfolio.journey.map((item, index) => (
            <GlassCard as="article" className="timeline-card" key={item.title}>
              <div className="timeline-index">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="timeline-dot" aria-hidden="true" />
              <p className="timeline-year">{item.year}</p>
              <span className="status-chip">{item.category}</span>
              <h3>{item.title}</h3>
              <strong>{item.context}</strong>
              <p>{item.description}</p>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer">
                  View milestone <ExternalLink size={15} aria-hidden="true" />
                </a>
              ) : null}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
