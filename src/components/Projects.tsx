import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project Name One",
    description: "A brief description of your amazing project. Explain what it does and the technologies used.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Project Name Two",
    description: "Another impressive project that showcases your skills and creativity.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Project Name Three",
    description: "Description of this project and the problem it solves.",
    tags: ["Vue.js", "Firebase", "SCSS"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Project Name Four",
    description: "A creative project demonstrating animation and interaction skills.",
    tags: ["React", "Framer Motion", "Three.js"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-magenta/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[150px]" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider">// SELECTED WORK</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of projects that showcase my passion for building 
            beautiful and functional web applications.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="grid gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`group grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative overflow-hidden rounded-2xl ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium hover:glow-magenta transition-all"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium hover:glow-cyan transition-all"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </motion.div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                <span className="text-xs font-mono text-neon-cyan tracking-wider">
                  FEATURED PROJECT
                </span>
                <h4 className="text-2xl md:text-3xl font-bold mt-2 mb-4 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground mb-6 p-4 rounded-xl glass">
                  {project.description}
                </p>
                <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-neon-magenta/10 text-neon-magenta border border-neon-magenta/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h4 className="text-2xl font-bold mb-8 text-center">
            Other <span className="text-primary">Projects</span>
          </h4>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl glass gradient-border hover:glow-cyan transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                  <Github className="w-5 h-5 text-neon-cyan" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h5 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h5>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;