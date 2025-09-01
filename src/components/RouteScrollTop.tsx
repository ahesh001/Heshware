// src/components/RouteScrollTop.tsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteScrollTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    // If you use in-page anchors (/#section), let the browser handle those
    if (location.hash) return;

    // Make it instant (no smooth animation) to avoid “janky” feel
    const el = document.scrollingElement || document.documentElement;
    // Use rAF to ensure we scroll after the new route has rendered
    requestAnimationFrame(() => {
      el.scrollTo({ top: 0, left: 0, behavior: "auto" });
      // also reset body for Safari quirks
      document.body.scrollTop = 0;
    });
  }, [location.key, location.hash]);

  return null;
}
