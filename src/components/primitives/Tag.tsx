import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  children: ReactNode;
  className?: string;
}

/** Tag — monospace tech-stack chip. */
const Tag = ({ children, className }: TagProps) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted-foreground transition-colors duration-200 hover:border-accent/40 hover:text-foreground",
      className
    )}
  >
    {children}
  </span>
);

export default Tag;
