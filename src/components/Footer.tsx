import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/AlexFedchin", icon: Github },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/alexander-fedchin",
    icon: Linkedin,
  },
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-white/5 py-14">
    <div className="container px-6">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <a
            href="#"
            className="flex items-center gap-2.5"
            aria-label="Back to top"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] font-display text-sm font-bold text-foreground">
              A
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Alex<span className="text-muted-foreground">Studio</span>
            </span>
          </a>
          <p className="text-sm text-muted-foreground">
            Designed &amp; built by Alexander Fedchin.
          </p>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="group grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
          <a
            href="#contact"
            className="group ml-1 inline-flex h-11 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-5 text-sm text-foreground transition-colors hover:border-accent/40"
          >
            Top
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      <div className="hairline my-8" />

      <p className="text-center font-mono text-xs tracking-wider text-muted-foreground/70">
        © {new Date().getFullYear()} ALEXANDER FEDCHIN — HELSINKI, FINLAND
      </p>
    </div>
  </footer>
);

export default Footer;
