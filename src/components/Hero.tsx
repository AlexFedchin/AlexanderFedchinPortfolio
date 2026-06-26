import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Github, Linkedin, ArrowDown } from "lucide-react";
import Grainient from "./Grainient";
import LiquidGlassCard from "./primitives/LiquidGlassCard";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/AlexFedchin", icon: Github },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/alexander-fedchin",
    icon: Linkedin,
  },
];

const ease = [0.21, 0.5, 0.3, 1] as const;

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* ── Grainient WebGL background ── */}
      <div className="absolute inset-0 -z-10">
        <Grainient
          color1="#7FE9F2"
          color2="#0C1418"
          color3="#050507"
          timeSpeed={0.18}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={20}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.12}
          grainScale={1.8}
          grainAnimated={false}
          contrast={1.4}
          gamma={1}
          saturation={0.9}
          centerX={0}
          centerY={0}
          zoom={0.85}
        />
        {/* readability + blend overlays */}
        <div className="absolute inset-0 bg-background/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="noise absolute inset-0 opacity-[0.15] mix-blend-soft-light" />
      </div>

      <div className="container px-6 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-display text-[clamp(2.75rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight"
          >
            <span className="block text-gradient">
              Creative
              <br /> Full-Stack Developer.
            </span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            I build functional and visually beautiful websites and applications
            to help your business grow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#projects"
              className="group inline-flex h-[52px] items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all duration-200 hover:shadow-[0_0_34px_-6px_hsl(var(--accent)/0.7)]"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-[52px] items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-200 hover:border-accent/40 hover:bg-white/[0.06]"
            >
              Get in touch
            </a>
          </motion.div>

          {/* liquid-glass status console (refracts the Grainient) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease }}
            className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mt-14 w-fit"
          >
            <LiquidGlassCard
              mouseContainer={heroRef}
              cornerRadius={22}
              padding="1rem 1.25rem"
              displacementScale={70}
              elasticity={0.1}
            >
              <div className="flex items-center gap-5">
                <div className="flex flex-col">
                  <span className="flex items-center gap-2 text-sm font-medium text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
                    Open to opportunities
                  </span>
                  <span className="mt-0.5 font-mono text-xs text-white/60">
                    Helsinki, Finland
                  </span>
                </div>
                <span className="h-9 w-px bg-white/15" />
                <div className="flex items-center gap-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-accent/60 hover:text-white"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </LiquidGlassCard>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground md:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Hero;
