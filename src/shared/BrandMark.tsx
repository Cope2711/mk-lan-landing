import React from "react";
import { Sparkles } from "lucide-react";

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
          "flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground",
          iconWrapClassName
        )}
      >
        <Sparkles className={cn("h-5 w-5", iconClassName)} />
      </span>
      <span className={cn("font-bold tracking-tight", textClassName)}>
        MK<span className="text-accent">LAN</span>
      </span>
    </div>
  );
}
