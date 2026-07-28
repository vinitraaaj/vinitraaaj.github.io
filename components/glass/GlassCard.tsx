"use client";

import {
  useCallback,
  useRef,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";

type GlassStyle = CSSProperties & {
  "--pointer-x"?: string;
  "--pointer-y"?: string;
};

export function GlassCard({
  children,
  className = "",
  as: Element = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "article" | "div" | "aside";
}) {
  const frame = useRef<number | null>(null);
  const elementRef = useRef<HTMLElement | null>(null);
  const boundsRef = useRef<DOMRect | null>(null);
  const setRef = useCallback((node: HTMLElement | null) => {
    elementRef.current = node;
  }, []);
  const handlePointerEnter = useCallback(() => {
    boundsRef.current = elementRef.current?.getBoundingClientRect() ?? null;
  }, []);
  const handlePointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    const clientX = event.clientX,
      clientY = event.clientY;
    frame.current = requestAnimationFrame(() => {
      const element = elementRef.current;
      if (!element) return;
      const bounds = boundsRef.current ?? element.getBoundingClientRect();
      element.style.setProperty("--pointer-x", clientX - bounds.left + "px");
      element.style.setProperty("--pointer-y", clientY - bounds.top + "px");
    });
  }, []);
  const handlePointerLeave = useCallback(() => {
    boundsRef.current = null;
    const element = elementRef.current;
    if (!element) return;
    element.style.setProperty("--pointer-x", "50%");
    element.style.setProperty("--pointer-y", "50%");
  }, []);

  return (
    <Element
      ref={setRef}
      className={"glass-card " + className}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ "--pointer-x": "50%", "--pointer-y": "50%" } as GlassStyle}
    >
      {children}
    </Element>
  );
}
