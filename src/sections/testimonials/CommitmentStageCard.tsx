import React from "react";

import { cn } from "@/lib/utils";

type CommitmentStageCardProps = {
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
};

export function CommitmentStageCard({ title, description, className, titleClassName }: CommitmentStageCardProps) {
  return (
    <article className={cn("rounded-2xl p-4", className)}>
      <p className={cn("text-sm font-semibold", titleClassName)}>{title}</p>
      <p className="mt-1 text-sm text-primary-foreground/75">{description}</p>
    </article>
  );
}
