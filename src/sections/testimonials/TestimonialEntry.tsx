import React from "react";

import { cn } from "@/lib/utils";

type TestimonialEntryProps = {
  initials: string;
  accentClassName?: string;
  initialsClassName?: string;
  quote: string;
  author: string;
  withBottomBorder?: boolean;
};

export function TestimonialEntry({
  initials,
  accentClassName,
  initialsClassName,
  quote,
  author,
  withBottomBorder,
}: TestimonialEntryProps) {
  return (
    <article className={cn("relative p-6", withBottomBorder && "border-b border-primary-foreground/15")}>
      <div className={cn("absolute left-0 top-0 h-full w-1", accentClassName)} />
      <div className="flex items-start gap-4">
        <span className={cn("inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold", initialsClassName)}>
          {initials}
        </span>
        <div>
          <p className="text-base leading-relaxed text-primary-foreground/85">{quote}</p>
          <p className="mt-3 text-sm font-medium text-primary-foreground/70">{author}</p>
        </div>
      </div>
    </article>
  );
}
