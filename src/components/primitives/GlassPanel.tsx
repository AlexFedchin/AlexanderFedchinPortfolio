import { forwardRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children?: ReactNode;
  className?: string;
  /** render as a different element, e.g. "a" or "article" */
  as?: ElementType;
  /** stronger blur + opacity for foreground surfaces */
  strong?: boolean;
  /** add the hairline gradient ring */
  ring?: boolean;
  /** subtle cyan glow on hover */
  interactive?: boolean;
  [key: string]: unknown;
}

/**
 * GlassPanel — the project's core frosted-glass surface.
 * Cross-browser, GPU-cheap alternative to the heavy WebGL liquid glass,
 * used for the vast majority of cards and panels.
 */
const GlassPanel = forwardRef<HTMLElement, GlassPanelProps>(
  (
    {
      children,
      className,
      as,
      strong = false,
      ring = true,
      interactive = false,
      ...rest
    },
    ref
  ) => {
    const Comp = (as ?? "div") as ElementType;
    return (
      <Comp
        ref={ref}
        className={cn(
          "relative rounded-3xl",
          strong ? "glass-strong" : "glass",
          ring && "ring-glass",
          interactive &&
            "transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_40px_-8px_hsl(var(--accent)/0.25)]",
          className
        )}
        {...rest}
      >
        {children}
      </Comp>
    );
  }
);

GlassPanel.displayName = "GlassPanel";

export default GlassPanel;
