import React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type TrustChecklistItemProps = {
  icon: LucideIcon;
  iconClassName?: string;
  text: string;
};

export function TrustChecklistItem({ icon: Icon, iconClassName, text }: TrustChecklistItemProps) {
  return (
    <li className="flex items-center gap-2.5">
      <Icon className={cn("h-4 w-4", iconClassName)} />
      <span>{text}</span>
    </li>
  );
}
