// src/components/MarvenRouterAdapter.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import * as MarvenModule from "./MarvenPage";

type RouteKey =
  | "home" | "contact" | "learn-more" | "labor-tracker"
  | "smartbox" | "nexa" | "marven";

const routeMap: Record<RouteKey, string> = {
  home: "/",
  contact: "/contact",
  "learn-more": "/learn-more",
  "labor-tracker": "/labor-tracker",
  smartbox: "/smartbox",
  nexa: "/nexa",
  marven: "/marven",
};

// Accept either default export or named export { MarvenPage }
const MarvenLegacy: React.ComponentType<{ onNavigate: (k: RouteKey) => void }> =
  // @ts-ignore - allow either style
  (MarvenModule as any).default ?? (MarvenModule as any).MarvenPage;

export default function MarvenRouterAdapter() {
  const navigate = useNavigate();
  const onNavigate = (key: RouteKey) => {
    const path = routeMap[key] ?? "/";
    navigate(path);
  };
  return <MarvenLegacy onNavigate={onNavigate} />;
}
