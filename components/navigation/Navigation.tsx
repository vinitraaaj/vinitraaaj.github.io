"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolio } from "@/src/data/portfolio";
import { useTheme } from "@/components/theme/ThemeProvider";

export function Navigation() {
  const { toggleTheme } = useTheme();
  const reducedMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 72;
      setScrolled((current) => (current === next ? current : next));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = portfolio.navigation
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -50%", threshold: [0.08, 0.25, 0.55] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <nav className="navigation" aria-label="Primary navigation">
        <a
          className="wordmark"
          href="#overview"
          aria-label={portfolio.profile.name + ", home"}
        >
          <span className="wordmark-mark">{portfolio.profile.monogram}</span>
          <span>{portfolio.profile.name}</span>
        </a>

        <div className="desktop-nav">
          {portfolio.navigation.map((item) => (
            <a
              key={item.sectionId}
              href={item.href}
              className={activeSection === item.sectionId ? "is-active" : ""}
              aria-current={
                activeSection === item.sectionId ? "location" : undefined
              }
            >
              {item.label}
              <span aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            <Sun
              className="theme-icon light-icon"
              size={17}
              aria-hidden="true"
            />
            <Moon
              className="theme-icon dark-icon"
              size={17}
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            className="icon-button menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-navigation"
            className="mobile-nav"
            initial={reducedMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.24 }}
          >
            {portfolio.navigation.map((item, index) => (
              <a
                key={item.sectionId}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={activeSection === item.sectionId ? "is-active" : ""}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
