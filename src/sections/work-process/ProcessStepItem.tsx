import React from "react";

import { cn } from "@/lib/utils";

type ProcessStepItemProps = {
  step: string;
  title: string;
  description: string;
  accentClassName?: string;
};

export function ProcessStepItem({ step, title, description, accentClassName }: ProcessStepItemProps) {
  return (
    <li className="relative pl-14 md:pl-0 md:pt-12">
      <span
        className={cn(
          "absolute left-0 top-0 inline-flex h-12 w-12 items-center justify-center rounded-xl border text-sm font-bold md:left-1/2 md:-translate-x-1/2",
          accentClassName
        )}
      >
        {step}
      </span>

      <div className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/6 p-5 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-primary-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{description}</p>
      </div>
    </li>
  );
}
