import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about", id: "about" },
  { name: "Work", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrollspy — highlight the link for the section in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.21, 0.5, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* scroll progress hairline */}
      <motion.div
        className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-accent to-transparent"
        style={{ scaleX: progress }}
      />

      <nav className="container px-4 pt-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-3 py-2.5 transition-all duration-500",
            isScrolled
              ? "glass ring-glass pl-5"
              : "border border-transparent bg-transparent",
          )}
        >
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5"
            aria-label="Home"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] font-display text-sm font-bold text-foreground transition-colors group-hover:border-accent/50 group-hover:text-accent">
              A
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight text-foreground">
              Alex<span className="text-muted-foreground">Studio</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors duration-200",
                  active === link.id
                    ? "text-foreground"
                    : "text-foreground/80 hover:text-foreground",
                )}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.06] ring-1 ring-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden h-10 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-all duration-200 hover:shadow-[0_0_26px_-6px_hsl(var(--accent)/0.6)] sm:inline-flex"
            >
              Let's talk
            </a>
            <button
              onClick={() => setIsMobileMenuOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-foreground transition-colors hover:border-accent/40 md:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden md:hidden"
        >
          <div className="glass ring-glass mt-3 space-y-1 rounded-3xl p-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-1 block rounded-2xl bg-foreground px-4 py-3 text-center text-base font-medium text-background"
            >
              Let's talk
            </a>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
