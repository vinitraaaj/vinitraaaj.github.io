import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Compass,
  Cpu,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/glass/GlassCard";
import { portfolio } from "@/src/data/portfolio";

const icons: Record<string, LucideIcon> = {
  overview: Compass,
  work: BriefcaseBusiness,
  engineering: Code2,
  journey: Cpu,
  about: UserRound,
};

export function OverviewRail() {
  return (
    <section className="overview-rail" aria-label="Portfolio highlights">
      {portfolio.overviewCards.map((item) => {
        const Icon = icons[item.icon] ?? Compass;
        return (
          <GlassCard className="overview-card" key={item.title}>
            <Icon size={25} strokeWidth={1.35} aria-hidden="true" />
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <a href={item.href} aria-label={"Explore " + item.title}>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </GlassCard>
        );
      })}
    </section>
  );
}
