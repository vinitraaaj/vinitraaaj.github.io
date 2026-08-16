"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, FileText } from "lucide-react";
import type { Project } from "@/src/data/portfolio";
import { GlassCard } from "@/components/glass/GlassCard";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={
        "project-card-wrap" + (project.caseStudyUrl ? " has-document" : "")
      }
      initial={reducedMotion ? false : { opacity: 0, y: 34 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.06, 0.22),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <GlassCard as="article" className="project-card">
        <div
          className={"project-visual accent-" + project.accent}
          aria-hidden="true"
        >
          <div className="project-visual-grid" />
          <div className="project-surface">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{project.category}</strong>
          </div>
          <div className="project-orb" />
          <div className="project-path" />
        </div>

        <div className="project-content">
          <div className="project-topline">
            <span>{project.year}</span>
            <span className="status-chip">{project.status}</span>
          </div>
          <h3>{project.title}</h3>
          <p className="project-purpose">{project.purpose}</p>
          <dl className="project-details">
            <div>
              <dt>Challenge</dt>
              <dd>{project.challenge}</dd>
            </div>
            <div>
              <dt>Direction</dt>
              <dd>{project.outcome}</dd>
            </div>
          </dl>
          <div className="project-footer">
            <div className="tag-list" aria-label="Technology stack">
              {project.stack.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            <div className="project-links">
              {project.caseStudyUrl ? (
                <a href={project.caseStudyUrl} target="_blank" rel="noreferrer">
                  <FileText size={16} aria-hidden="true" />
                  View case study
                </a>
              ) : null}
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Code2 size={16} aria-hidden="true" />
                  Source
                </a>
              ) : null}
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  View project
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : !project.caseStudyUrl ? (
                <span className="case-study-placeholder">
                  Case study coming later
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
