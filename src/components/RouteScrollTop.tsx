// src/components/RouteScrollTop.tsx
import { useLayoutEffect, useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Forces every route to start at the top.
 * - Disables native scroll restoration so Back/Forward don't restore old positions.
 * - Resets the document and any custom scroll containers on every navigation.
 * Mark any scrollable wrapper with `data-scroll-reset` to include it.
 */
const EXTRA_SELECTORS = [
  "[data-scroll-reset]",
  "main[role='main']",
  "#root",
] as const;

export default function RouteScrollTop() {
  const location = useLocation();

  // Take control of history-based scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => { window.history.scrollRestoration = prev; };
    }
  }, []);

  useLayoutEffect(() => {
    const doc = (document.scrollingElement || document.documentElement) as HTMLElement;
    const targets = new Set<HTMLElement>([doc, document.body]);

    // Also reset any custom scroll containers
    EXTRA_SELECTORS.forEach((sel) => {
      document.querySelectorAll(sel).forEach((node) => {
        const el = node as HTMLElement;
        const style = getComputedStyle(el);
        if (/(auto|scroll)/.test(style.overflowY)) targets.add(el);
      });
    });

    // Run after paint (and again next tick) to avoid layout-shift pulling us back down
    requestAnimationFrame(() => {
      targets.forEach((el) => (el.scrollTop = 0));
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      setTimeout(() => targets.forEach((el) => (el.scrollTop = 0)), 0);
    });
  }, [location.key]); // fires on navigation, including back/forward

  return null;
}
