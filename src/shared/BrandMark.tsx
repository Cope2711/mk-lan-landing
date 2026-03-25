import React from "react";

import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  iconWrapClassName?: string;
  iconClassName?: string;
  textClassName?: string;
};

export function BrandMark({
  className,
  iconWrapClassName,
  iconClassName,
  textClassName,
}: BrandMarkProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-primary-foreground/20 bg-primary-foreground/5",
          iconWrapClassName
        )}
      >
        <img src="/logo.webp" alt="Advance Digital logo" className={cn("h-full w-full object-cover", iconClassName)} loading="lazy" />
      </span>
      <span className={cn("font-bold tracking-tight", textClassName)}>
        A<span className="text-accent">D</span>
      </span>
    </div>
  );
}
