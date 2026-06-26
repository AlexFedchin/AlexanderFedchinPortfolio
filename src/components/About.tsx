import { motion } from "framer-motion";
import { Code2, Palette, Zap, Sparkles } from "lucide-react";
import GlassPanel from "./primitives/GlassPanel";
import SectionHeading from "./primitives/SectionHeading";
import Reveal from "./primitives/Reveal";

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Framer Motion", level: 75 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 },
];

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive interfaces with pixel-perfect attention to detail.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast experiences.",
  },
  {
    icon: Sparkles,
    title: "Animations",
    description: "Bringing interfaces to life with smooth, delightful motion.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="container px-6">
        <SectionHeading
          label="01 / About"
          title={
            <>
              Passionate about{" "}
              <span className="text-gradient-cyan">crafting</span> digital
              experiences
            </>
          }
        />

        {/* ── Bento: intro + profile terminal ── */}
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <GlassPanel className="flex h-full flex-col justify-between gap-8 p-8 md:p-10">
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                With years of experience in full-stack development, I specialize
                in building modern web applications that combine{" "}
                <span className="text-foreground">beautiful design</span> with{" "}
                <span className="text-foreground">exceptional performance</span>{" "}
                and functionality for the users.
              </p>
              <dl className="grid grid-cols-3 gap-4 border-t border-white/5 pt-7">
                {[
                  { k: "Featured projects", v: "5+" },
                  { k: "Core stack", v: "React" },
                  { k: "Based in", v: "Helsinki" },
                ].map((s) => (
                  <div key={s.k}>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {s.k}
                    </dt>
                    <dd className="mt-1 font-display text-2xl font-semibold text-foreground md:text-3xl">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </GlassPanel>
          </Reveal>

          {/* profile "terminal" card */}
          <Reveal delay={0.1}>
            <GlassPanel strong className="h-full overflow-hidden p-0">
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-white/15" />
                <span className="h-3 w-3 rounded-full bg-white/15" />
                <span className="h-3 w-3 rounded-full bg-accent/70" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  ~/profile.json
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
                <code>
                  <span className="text-muted-foreground">{"{"}</span>
                  {"\n  "}
                  <span className="text-accent">"name"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground">"Alexander Fedchin"</span>,
                  {"\n  "}
                  <span className="text-accent">"role"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground">"Full-Stack Dev"</span>,
                  {"\n  "}
                  <span className="text-accent">"focus"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground">"web apps"</span>,{"\n  "}
                  <span className="text-accent">"status"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-foreground">"available"</span>
                  {"\n"}
                  <span className="text-muted-foreground">{"}"}</span>
                </code>
              </pre>
            </GlassPanel>
          </Reveal>
        </div>

        {/* ── Feature tiles ── */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <GlassPanel
                interactive
                className="group h-full p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent transition-colors duration-300 group-hover:bg-accent/10">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h4 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {feature.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>

        {/* ── Skills ── */}
        <Reveal className="mt-4">
          <GlassPanel className="p-8 md:p-10">
            <div className="mb-8 flex items-baseline justify-between">
              <h4 className="font-display text-xl font-semibold text-foreground">
                Tech Stack
              </h4>
              <span className="eyebrow">Proficiency</span>
            </div>
            <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: i * 0.08,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-white/70 to-accent"
                      style={{ boxShadow: "0 0 14px hsl(var(--accent) / 0.5)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
