import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", url: "https://twitter.com", icon: Twitter },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-neon-magenta/5 via-neon-cyan/5 to-transparent rounded-full blur-[100px]" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider">
            // GET IN TOUCH
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat? Feel free to reach out.
            I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          {/* Email link */}
          <motion.a
            href="mailto:alexanderfedchin@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 p-5 rounded-xl glass transition-all group hover:glow-magenta"
          >
            {/* Gradient glow background */}
            <div className="absolute inset-0 rounded-lg bg-neon-magenta opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-300 -z-10" />

            <div className="w-14 h-14 rounded-lg bg-neon-magenta/10 flex items-center justify-center group-hover:bg-neon-magenta/20 transition-colors">
              <Mail className="w-6 h-6 text-neon-magenta" />
            </div>
            <div className="flex-1">
              <span className="text-sm text-muted-foreground">Email</span>
              <p className="font-medium text-foreground text-lg">
                alexanderfedchin@gmail.com
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.a>

          {/* Location */}
          <motion.a
            href="https://www.google.com/maps/place/Helsinki,+Finland"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 p-5 rounded-xl glass hover:glow-cyan transition-all group"
          >
            {/* Gradient glow background */}
            <div className="absolute inset-0 rounded-lg bg-neon-cyan opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-300 -z-10" />

            <div className="w-14 h-14 rounded-lg bg-neon-cyan/10 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
              <MapPin className="w-6 h-6 text-neon-cyan" />
            </div>
            <div className="flex-1">
              <span className="text-sm text-muted-foreground">Location</span>
              <p className="font-medium text-foreground text-lg">
                Helsinki, Finland
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
          </motion.a>

          {/* Social links */}
          <div className="pt-8">
            <p className="text-center text-muted-foreground mb-6">
              Or find me on
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-14 h-14 rounded-xl glass flex items-center justify-center hover:glow-magenta transition-all group"
                >
                  <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
