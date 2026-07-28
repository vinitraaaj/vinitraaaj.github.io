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
    [0, reducedMotion ? 0 : 46],
  );
  const mediaY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reducedMotion ? 0 : 74],
  );

  return (
    <section
      id="overview"
      ref={sectionRef}
      className="hero"
      aria-labelledby="hero-title"
    >
      <motion.div
        className="hero-media"
        style={{ y: mediaY }}
        aria-hidden="true"
      >
        <Image
          src={portfolio.profile.portraitLightImage}
          alt=""
          fill
          priority
          quality={92}
          sizes="(max-width: 768px) 148vw, 100vw"
          className="hero-scene hero-scene-light"
        />
        <Image
          src={portfolio.profile.portraitDarkImage}
          alt=""
          fill
          priority
          quality={92}
          sizes="(max-width: 768px) 148vw, 100vw"
          className="hero-scene hero-scene-dark"
        />
      </motion.div>
      <div className="hero-tone" aria-hidden="true" />

      <motion.div className="hero-copy" style={{ y: copyY }}>
        <motion.p
          className="hero-eyebrow"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.04 }}
        >
          {portfolio.profile.eyebrow}
        </motion.p>
        <div className="hero-title-mask">
          <motion.h1
            id="hero-title"
            initial={reducedMotion ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          >
            {portfolio.profile.name}
          </motion.h1>
        </div>
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.16 }}
        >
          {portfolio.profile.headline}
        </motion.h2>
        <motion.p
          className="hero-description"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.24 }}
        >
          {portfolio.profile.description}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, delay: 0.32 }}
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
          transition={{ duration: 0.55, delay: 0.42 }}
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

      <a className="scroll-cue" href="#glance">
        <span aria-hidden="true" />
        Scroll to explore
      </a>
    </section>
  );
}
