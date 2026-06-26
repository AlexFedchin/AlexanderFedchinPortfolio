import LiquidGlass from "liquid-glass-react";
import { type ReactNode, type RefObject } from "react";

interface LiquidGlassCardProps {
  children: ReactNode;
  className?: string;
  padding?: string;
  cornerRadius?: number;
  displacementScale?: number;
  blurAmount?: number;
  elasticity?: number;
  /** scope mouse tracking to a container (perf + correctness) */
  mouseContainer?: RefObject<HTMLElement | null> | null;
}

/**
 * LiquidGlassCard — wraps rdev/liquid-glass-react with tuned defaults for the
 * monochrome theme. Used sparingly over the animated Grainient where the real
 * backdrop-displacement refraction actually has colour to bend. Everywhere
 * else we use the lighter CSS <GlassPanel/> for performance and cross-browser
 * consistency.
 */
const LiquidGlassCard = ({
  children,
  className,
  padding = "1.25rem 1.5rem",
  cornerRadius = 24,
  displacementScale = 64,
  blurAmount = 0.05,
  elasticity = 0.25,
  mouseContainer,
}: LiquidGlassCardProps) => (
  <LiquidGlass
    className={className}
    padding={padding}
    cornerRadius={cornerRadius}
    displacementScale={displacementScale}
    blurAmount={blurAmount}
    saturation={130}
    aberrationIntensity={2}
    elasticity={elasticity}
    mouseContainer={mouseContainer}
    mode="standard"
  >
    {children}
  </LiquidGlass>
);

export default LiquidGlassCard;
