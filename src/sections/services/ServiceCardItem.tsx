import React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ServiceCardItemProps = {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
  iconColorClassName?: string;
  glowColorClassName?: string;
  glowPosition?: "top-right" | "bottom-left";
};

export function ServiceCardItem({
  icon: Icon,
  step,
  title,
  description,
  iconColorClassName,
  glowColorClassName,
  glowPosition = "top-right",
}: ServiceCardItemProps) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-primary-foreground/20 bg-primary-foreground/7 p-6 backdrop-blur-sm">
      <div
        className={cn(
          "absolute h-40 w-40 rounded-full blur-3xl",
          glowColorClassName,
          glowPosition === "top-right" ? "-right-16 -top-16" : "-bottom-16 -left-16"
        )}
      />

      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary-foreground/20 bg-primary-foreground/10">
            <Icon className={cn("h-5 w-5", iconColorClassName)} />
          </span>
          <span className="text-xs font-semibold tracking-[0.2em] text-primary-foreground/60">{step}</span>
        </div>

        <h3 className="text-xl font-semibold text-primary-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{description}</p>
      </div>
    </article>
  );
}
