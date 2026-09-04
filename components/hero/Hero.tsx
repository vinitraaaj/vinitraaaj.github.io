"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { portfolio } from "@/src/data/portfolio";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="overview" className="hero" aria-labelledby="hero-title">
      <div className="hero-media">
        <Image
          src={portfolio.profile.portraitImage}
          alt={portfolio.profile.portraitAlt}
          fill
          priority
          sizes="100vw"
          className="hero-scene"
          unoptimized
        />
      </div>
      <div className="hero-tone" aria-hidden="true" />
      <motion.div className="hero-copy">
        <motion.p
          className="hero-eyebrow"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.12 }}
        >
          {portfolio.profile.name} · {portfolio.profile.role}
        </motion.p>
        <div className="hero-title-mask">
          <motion.h1
            id="hero-title"
            initial={reducedMotion ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.74,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {portfolio.profile.headline}
          </motion.h1>
        </div>
        <motion.p
          className="hero-description"
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.56, delay: 0.3 }}
        >
          {portfolio.profile.description}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.52, delay: 0.38 }}
        >
          <a className="button button-primary" href="#work">
            View selected work <ArrowDown size={17} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#contact">
            Contact me <ArrowRight size={17} aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          className="hero-meta"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.46 }}
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
    </section>
  );
}
