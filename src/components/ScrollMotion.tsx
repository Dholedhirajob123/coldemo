import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

const REVEAL_SELECTOR = [
  "main > div > section:not(:first-child)",
  "main section article",
  "main section [class*='rounded-lg']",
  "main section [class*='rounded-xl']",
].join(",");

export function ScrollMotion() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    let disposed = false;

    const setup = () => {
      if (disposed) return;
      const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion || !("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("motion-visible"));
        return;
      }

      elements.forEach((element, index) => {
        element.classList.add("motion-reveal");
        element.style.setProperty("--motion-delay", `${Math.min(index % 4, 3) * 70}ms`);
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("motion-visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
      );

      elements.forEach((element) => observer.observe(element));
    };

    // Defer past hydration so class changes never race React's own hydration diff.
    const frame = requestAnimationFrame(() => requestAnimationFrame(setup));

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}