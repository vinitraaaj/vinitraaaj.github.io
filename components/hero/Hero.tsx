"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDownRight, ArrowRight, MapPin } from "lucide-react";
import { useRef } from "react";
import { portfolio } from "@/src/data/portfolio";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const copyY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reducedMotion ? 0 : 70],
  );
  const visualY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reducedMotion ? 0 : 105],
  );

  return (
    <section
      id="overview"
      ref={sectionRef}
      className="hero"
      aria-labelledby="hero-title"
    >
      <div className="hero-orbit orbit-one" aria-hidden="true" />
      <div className="hero-orbit orbit-two" aria-hidden="true" />
      <motion.div className="hero-copy" style={{ y: copyY }}>
        <motion.p
          className="hero-eyebrow"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {portfolio.profile.eyebrow}
        </motion.p>
        <div className="hero-title-mask">
          <motion.h1
            id="hero-title"
            initial={reducedMotion ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
          >
            {portfolio.profile.name}
          </motion.h1>
        </div>
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, delay: 0.2 }}
        >
          {portfolio.profile.headline}
        </motion.h2>
        <motion.p
          className="hero-description"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, delay: 0.3 }}
        >
          {portfolio.profile.description}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.4 }}
        >
          <a className="button button-primary" href="#work">
            Explore my work <ArrowDownRight size={17} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#contact">
            Contact me <ArrowRight size={17} aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          className="hero-meta"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.52 }}
        >
          <span className="availability">
            <i aria-hidden="true" />
            {portfolio.profile.availability}
          </span>
          <span>
            <MapPin size={14} aria-hidden="true" />
            {portfolio.profile.location}
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        style={{ y: visualY }}
        aria-label={portfolio.profile.name + " identity visual"}
      >
        <div className="portrait-halo" aria-hidden="true" />
        <div className="portrait-frame">
          {portfolio.profile.portraitImage ? (
            <Image
              src={portfolio.profile.portraitImage}
              alt={portfolio.profile.portraitAlt}
              fill
              priority
              sizes="(max-width: 768px) 74vw, 42vw"
              className="portrait-image"
            />
          ) : (
            <div
              className="monogram-portrait"
              role="img"
              aria-label={
                "Abstract " +
                portfolio.profile.monogram +
                " monogram portrait placeholder"
              }
            >
              <span>{portfolio.profile.monogram}</span>
              <div className="monogram-line line-one" />
              <div className="monogram-line line-two" />
              <div className="monogram-line line-three" />
            </div>
          )}
        </div>
        <div className="hero-visual-label">
          <span>Profile visual</span>
          <strong>Portrait ready</strong>
        </div>
      </motion.div>

      <a className="scroll-cue" href="#glance">
        <span aria-hidden="true" />
        Scroll to explore
      </a>
    </section>
  );
}
