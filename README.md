# Vinit Raj — Personal Portfolio

A production-ready, single-page portfolio for Vinit Raj. The visual system pairs a pearl-white default theme with a graphite cinematic theme, sharing one layout and one editable content source.

## Run locally

Requirements: Node.js 22.13 or newer.

Install and start the site:

    npm install
    npm run dev

The local address is printed after the development server starts.

Quality checks:

    npm run format
    npm run lint
    npm run typecheck
    npm run build

## Edit personal information

All personal content is stored in:

    src/data/portfolio.ts

This file contains the profile, navigation, metrics, projects, skills, engineering focus areas, journey, experiments, principles, contact details, and social links. Components should not be edited for routine content changes.

Empty optional links are hidden automatically.

## Add or replace projects

Edit the projects array in src/data/portfolio.ts.

Each project supports:

- Title, purpose, category, role, and year
- Concept, In development, or Completed status
- Technology stack
- Challenge and verified outcome
- Live and source links
- Case-study slug and visual accent

Do not mark a project Completed or describe production outcomes until those facts are verified.

## Replace the hero portrait

The hero uses one identity-preserving graphite editorial portrait across both themes: `public/images/vinit-hero-shared-v4.png`.

To replace it, add an optimised wide image to `public/images`, then update `portraitImage` in `src/data/portfolio.ts`. Keep the subject on the right and preserve roughly 44% negative space on the left so the headline remains readable.

## Add contact and social links

In src/data/portfolio.ts:

- Set contact.email to enable the email and copy-email controls.
- Set contact.resumeUrl to show the resume link.
- Add verified URLs in the socials array for GitHub, LinkedIn, LeetCode, or X.

Do not add placeholder URLs. Empty values remain hidden.

## Theme system

The default experience is pearl white. On first visit, the site respects the operating-system preference; if no preference is available, it stays light. A manual choice is stored locally.

Semantic design tokens live at the top of app/globals.css. The toggle runs a short viewport light sweep, glass refraction, shadow transition, and hero crossfade. Reduced-motion preferences disable the choreography.

## Metadata and social preview

The title, description, Open Graph data, X data, structured data, sitemap, and robots rules are configured from the portfolio content.

Set NEXT_PUBLIC_SITE_URL in the deployment environment to the final public origin. This enables absolute social-image URLs and production sitemap URLs. The current reference-aligned social card is `public/og-v2.png`.

## Deployment

Build first:

    npm run build

The project includes the Sites hosting configuration in .openai/hosting.json and can be deployed with the connected Sites workflow. For another platform, set NEXT_PUBLIC_SITE_URL to the final HTTPS origin and use the platform’s standard Next.js deployment process.

## Current placeholders

These values are intentionally non-fabricated and should be replaced only with verified information:

- Experience, project, technology, and problem-solving metrics
- The first two journey milestones, their years, and contexts
- All project live links, source links, and media
- Experiment source links, imagery, and detailed build notes
- Email, resume, GitHub, LinkedIn, LeetCode, and X links
- Hero portrait treatments, if a newer portrait is preferred
- Final public site URL
- Favicon artwork

The concept and in-development labels are intentional. They prevent unfinished ideas from appearing as completed production achievements.

## Architecture

- app — App Router page, metadata, sitemap, robots, and global design system
- components — reusable navigation, theme, motion, glass, hero, project, timeline, experiment, about, contact, and layout components
- src/data/portfolio.ts — the single personal content source
- public/og-v2.png — generated social preview artwork matching the redesigned portrait direction

The implementation uses strict TypeScript, Tailwind CSS, Framer Motion, Lucide icons, Next Image, Next Font, semantic HTML, keyboard focus states, reduced-motion support, and responsive layouts without duplicated theme markup.
