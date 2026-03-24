import React from "react";

import { cn } from "@/lib/utils";

type PricingTierCardProps = {
  label: string;
  price: string;
  description: string;
  className?: string;
  labelClassName?: string;
};

export function PricingTierCard({ label, price, description, className, labelClassName }: PricingTierCardProps) {
  return (
    <article className={cn("rounded-2xl p-5", className)}>
      <p className={cn("text-xs font-semibold uppercase tracking-[0.2em]", labelClassName)}>{label}</p>
      <p className="mt-3 text-3xl font-bold text-primary-foreground">{price}</p>
      <p className="mt-2 text-sm text-primary-foreground/70">{description}</p>
    </article>
  );
}
