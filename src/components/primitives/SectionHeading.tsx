import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  /** monospace eyebrow label, e.g. "01 / About" */
  label: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * SectionHeading — consistent eyebrow + headline + lead used by every section.
 */
const SectionHeading = ({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) => (
  <Reveal
    className={cn(
      "flex flex-col gap-5",
      align === "center" && "items-center text-center",
      className
    )}
  >
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-accent/60" />
      <span className="eyebrow">{label}</span>
    </div>
    <h2 className="max-w-3xl font-display text-3xl font-semibold leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
      {title}
    </h2>
    {subtitle && (
      <p
        className={cn(
          "max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
          align === "center" && "mx-auto"
        )}
      >
        {subtitle}
      </p>
    )}
  </Reveal>
);

export default SectionHeading;
