import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface RevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  /** delay in seconds */
  delay?: number;
  /** translate distance in px */
  y?: number;
}

/**
 * Reveal — a tiny wrapper that fades + lifts content into view on scroll.
 * Centralises the motion config so every section animates consistently.
 */
const Reveal = ({ children, delay = 0, y = 24, ...rest }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.5, 0.3, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default Reveal;
