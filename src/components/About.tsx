import { motion } from "framer-motion";
import { Code2, Palette, Zap, Sparkles } from "lucide-react";

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
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-neon-magenta/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-neon-cyan/10 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider">
            // ABOUT ME
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Passionate about <span className="gradient-text">crafting</span>{" "}
            digital experiences
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            With years of experience in full stack development, I specialize in
            building modern web applications that combine beautiful design with
            exceptional performance and functionality for the users.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative will-change-transform"
            >
              {/* Gradient glow background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-magenta to-neon-cyan opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10" />

              <div className="relative p-6 rounded-2xl glass will-change-transform gradient-border transition-all ease-in-out">
                <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center mb-4 group-hover:bg-neon-cyan/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-neon-cyan" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h4 className="text-2xl font-bold mb-8 text-center">
            My <span className="text-primary">Tech Stack</span>
          </h4>
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-sm font-mono text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-neon-magenta to-neon-cyan"
                    style={{
                      boxShadow: "0 0 20px hsl(320 100% 60% / 0.5)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
