"use client";

import * as React from "react";
import {
  ResponsiveContainer,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
} from "recharts";
import { cn } from "./utils";

// light/dark CSS selector map
const THEMES = { light: "", dark: ".dark" } as const;

// your chart-config shape
export type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

const ChartContext = React.createContext<{ config: ChartConfig } | null>(null);
export function useChart() {
  const ctx = React.useContext(ChartContext);
  if (!ctx) throw new Error("useChart must be used within <ChartContainer>");
  return ctx;
}

/** Wraps a Recharts ResponsiveContainer and injects your CSS-vars */
export function ChartContainer({
  id,
  config,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ReactElement<any, any>; // single chart element
}) {
  const chartId = `chart-${(id ?? React.useId()).replace(/:/g, "")}`;

  // build CSS vars for themes
  const cssVars = Object.entries(THEMES)
    .map(([theme, sel]) => {
      const lines = Object.entries(config)
        .map(([key, conf]) => {
          const color = conf.theme?.[theme as keyof typeof conf.theme] ?? conf.color;
          return color ? `  --color-${key}: ${color};` : "";
        })
        .filter(Boolean)
        .join("\n");
      return lines ? `${sel}[data-chart=${chartId}] {\n${lines}\n}` : "";
    })
    .filter(Boolean)
    .join("\n");

  // ensure exactly one child element
  const child = React.Children.only(children);

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn("flex aspect-video justify-center text-xs", className)}
        {...props}
      >
        {cssVars && <style dangerouslySetInnerHTML={{ __html: cssVars }} />}
        <ResponsiveContainer>{child}</ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

/** Loose typing for each tooltip entry */
type TooltipItem = {
  dataKey?: string;
  name?: string;
  value?: any;
  color?: string;
};

/** Custom Tooltip Content */
export function ChartTooltipContent({
  active,
  payload,
  label,
  className,
}: {
  active?: boolean;
  payload?: TooltipItem[];
  label?: React.ReactNode;
  className?: string;
}) {
  const { config } = useChart();
  if (!active || !payload) return null;

  return (
    <div className={cn("bg-background p-2 rounded shadow text-sm", className)}>
      {label != null && <div className="font-semibold mb-1">{label}</div>}
      {payload.map((item, i) => {
        const key = item.dataKey ?? item.name ?? `item-${i}`;
        const conf = config[key.toString()] ?? {};
        return (
          <div key={i} className="flex justify-between items-center gap-4">
            <span>{conf.label ?? item.name}</span>
            <span className="font-mono">
              {item.value != null ? item.value.toLocaleString() : ""}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/** Loose typing for each legend entry */
type LegendItem = {
  dataKey?: string | number;
  value?: string | number;
  color?: string;
};

/** Custom Legend Content */
export function ChartLegendContent({
  payload,
  className,
}: {
  payload?: LegendItem[];
  className?: string;
}) {
  const { config } = useChart();
  if (!payload) return null;

  return (
    <div className={cn("flex flex-wrap gap-4 py-2", className)}>
      {payload.map((item, i) => {
        const key = item.dataKey?.toString() ?? item.value?.toString() ?? `leg-${i}`;
        const conf = config[key] ?? {};
        return (
          <div key={i} className="flex items-center gap-2 text-xs">
            <span
              className="h-2 w-2 rounded-sm"
              style={{ backgroundColor: item.color }}
            />
            <span>{conf.label ?? item.value}</span>
          </div>
        );
      })}
    </div>
  );
}

// Re-export Recharts’ base Tooltip & Legend if you need them elsewhere
export { ChartTooltip, ChartLegend };
