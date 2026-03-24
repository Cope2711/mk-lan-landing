import React from "react";

import { cn } from "@/lib/utils";

type MetricStatCardProps = {
  label: string;
  valueWidthClassName?: string;
  valueColorClassName?: string;
  description: string;
};

export function MetricStatCard({ label, valueWidthClassName, valueColorClassName, description }: MetricStatCardProps) {
  return (
    <article className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/6 p-4">
      <p className="text-sm font-semibold text-primary-foreground">{label}</p>
      <div className="mt-3 h-2 w-full rounded-full bg-primary-foreground/15">
        <div className={cn("h-2 rounded-full", valueWidthClassName, valueColorClassName)} />
      </div>
      <p className="mt-3 text-sm text-primary-foreground/70">{description}</p>
    </article>
  );
}
