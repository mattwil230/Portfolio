"use client";

import { useEffect, useRef } from "react";

export default function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;

    const updateParallax = () => {
      const offset = Math.min(window.scrollY * 0.08, 48);
      node.style.setProperty("--hero-parallax-offset", `${offset}px`);
      frame = 0;
    };

    const handleScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden [--hero-parallax-offset:0px]"
    >
      <div className="portfolio-grid absolute inset-0" />
      <div className="portfolio-grid-frame absolute left-1/2 top-28 h-[24rem] w-[min(82vw,52rem)] rounded-[32px]" />
      <div className="portfolio-grid-line absolute left-1/2 top-0 h-full w-px" />
    </div>
  );
}
