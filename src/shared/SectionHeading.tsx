import React from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  children?: React.ReactNode;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
  subtitleClassName,
  children,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={cn("mb-14", isCenter ? "text-center" : "text-left", className)}>
      {children}
      <h2 className={cn("mb-4 text-3xl font-bold text-primary-foreground md:text-5xl", titleClassName)}>
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "text-lg text-primary-foreground/75",
            isCenter ? "mx-auto max-w-2xl" : "max-w-3xl",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}