import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight cursor-pointer select-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // White pill, inverts to dark — the high-contrast primary CTA
  primary:
    "bg-foreground text-background hover:bg-white hover:shadow-[0_0_30px_-6px_hsl(var(--accent)/0.6)]",
  // Cyan-tinted glass
  outline:
    "glass text-foreground border border-white/10 hover:border-accent/40 hover:text-white hover:shadow-[0_0_28px_-8px_hsl(var(--accent)/0.45)]",
  ghost:
    "text-muted-foreground hover:text-foreground hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type AnchorProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

/**
 * Button — single styled control replacing shadcn's Button.
 * Renders as <button> or <a> (`as="a"`).
 */
const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps | AnchorProps
>(({ children, className, variant = "primary", size = "md", ...rest }, ref) => {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (rest.as === "a") {
    const { as: _as, ...anchorRest } = rest as AnchorProps;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...anchorRest}
      >
        {children}
      </a>
    );
  }

  const { as: _as, ...btnRest } = rest as ButtonProps;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...btnRest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
