import React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/ui/input";

type QuickQuoteInputProps = {
  placeholder: string;
  className?: string;
};

export function QuickQuoteInput({ placeholder, className }: QuickQuoteInputProps) {
  return (
    <div className={className}>
      <Input
        placeholder={placeholder}
        className={cn("h-11 rounded-xl border-primary-foreground/20 bg-primary-foreground/10 px-4 text-primary-foreground placeholder:text-primary-foreground/45")}
      />
    </div>
  );
}
