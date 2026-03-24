import React from "react";

import { cn } from "@/lib/utils";

type TrustMatrixItemProps = {
  step: string;
  title: string;
  description: string;
  borderClassName?: string;
  badgeClassName?: string;
};

export function TrustMatrixItem({ step, title, description, borderClassName, badgeClassName }: TrustMatrixItemProps) {
  return (
    <li className={cn("rounded-2xl border bg-primary-foreground/4 p-4", borderClassName)}>
      <div className="flex items-start gap-3">
        <span className={cn("inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-xs font-bold", badgeClassName)}>
          {step}
        </span>
        <div>
          <h3 className="text-base font-semibold text-primary-foreground">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">{description}</p>
        </div>
      </div>
    </li>
  );
}
