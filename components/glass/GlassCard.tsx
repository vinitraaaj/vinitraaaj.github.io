import type { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
  as: Element = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "article" | "div" | "aside";
}) {
  return <Element className={"glass-card " + className}>{children}</Element>;
}
