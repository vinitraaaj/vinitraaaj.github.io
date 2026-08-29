"use client";

import { useState } from "react";
import { Check, Copy, Mail, MoveUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { GlassCard } from "@/components/glass/GlassCard";
import { portfolio } from "@/src/data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const reducedMotion = useReducedMotion();
  const visibleSocials = portfolio.socials.filter((social) => social.href);

  const copyEmail = async () => {
    if (!portfolio.contact.email) return;
    await navigator.clipboard.writeText(portfolio.contact.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-title"
    >
      <GlassCard className="contact-panel">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-eyebrow">GET IN TOUCH</p>
          <h2 id="contact-title">{portfolio.contact.heading}</h2>
          <p>{portfolio.contact.description}</p>
        </motion.div>

        <div className="contact-actions">
          {portfolio.contact.email ? (
            <>
              <a
                className="button button-primary"
                href={"mailto:" + portfolio.contact.email}
              >
                <Mail size={17} aria-hidden="true" />
                Email {portfolio.profile.name}
              </a>
              <button
                type="button"
                className="button button-secondary"
                onClick={copyEmail}
                aria-live="polite"
              >
                {copied ? (
                  <Check size={17} aria-hidden="true" />
                ) : (
                  <Copy size={17} aria-hidden="true" />
                )}
                {copied ? "Email copied" : "Copy email"}
              </button>
            </>
          ) : (
            <span className="contact-placeholder">
              Add an email in the portfolio data file to enable direct contact.
            </span>
          )}
        </div>

        {visibleSocials.length ? (
          <div className="social-links">
            {visibleSocials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.label} <MoveUpRight size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        ) : null}
      </GlassCard>
    </section>
  );
}
