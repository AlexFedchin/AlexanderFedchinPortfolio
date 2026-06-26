import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight, Github, Linkedin } from "lucide-react";
import GlassPanel from "./primitives/GlassPanel";
import SectionHeading from "./primitives/SectionHeading";
import Reveal from "./primitives/Reveal";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/AlexFedchin", icon: Github },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/alexander-fedchin",
    icon: Linkedin,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative scroll-mt-24 py-28 md:py-36">
      {/* soft cyan glow anchoring the closing section */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[150px]" />

      <div className="container px-6">
        <SectionHeading
          align="center"
          label="03 / Contact"
          title={
            <>
              Let's <span className="text-gradient-cyan">connect</span>
            </>
          }
          subtitle="Have a project in mind or just want to chat? Feel free to reach out. I'm always open to new opportunities and collaborations."
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {/* Email — primary */}
          <Reveal>
            <GlassPanel
              as="a"
              interactive
              strong
              href="mailto:alexanderfedchin@gmail.com"
              className="group flex items-center gap-5 p-6 sm:p-8"
            >
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-accent transition-colors duration-300 group-hover:bg-accent/10">
                <Mail className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </span>
                <p className="truncate font-display text-lg font-semibold text-foreground sm:text-2xl">
                  alexanderfedchin@gmail.com
                </p>
              </div>
              <ArrowUpRight className="h-6 w-6 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </GlassPanel>
          </Reveal>

          {/* Location */}
          <Reveal delay={0.08}>
            <GlassPanel
              as="a"
              interactive
              href="https://www.google.com/maps/place/Helsinki,+Finland"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 sm:p-8"
            >
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-accent transition-colors duration-300 group-hover:bg-accent/10">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Location
                </span>
                <p className="font-display text-lg font-semibold text-foreground sm:text-2xl">
                  Helsinki, Finland
                </p>
              </div>
              <ArrowUpRight className="h-6 w-6 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </GlassPanel>
          </Reveal>

          {/* Socials */}
          <Reveal delay={0.16} className="pt-6">
            <p className="mb-5 text-center text-sm text-muted-foreground">
              Or find me on
            </p>
            <div className="flex justify-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-muted-foreground transition-colors duration-200 hover:border-accent/40 hover:text-foreground"
                  aria-label={link.name}
                >
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
