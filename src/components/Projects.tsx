import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import GlassPanel from "./primitives/GlassPanel";
import SectionHeading from "./primitives/SectionHeading";
import Reveal from "./primitives/Reveal";
import Tag from "./primitives/Tag";

const projects = [
  {
    id: 0,
    title: "Lavly Booking System",
    description:
      "A full-stack online classes booking system for a puppy yoga company. It provides clients with a convenient booking system with an integrated payment system by Visma Pay. The system also includes additional features like accounts, discount codes, gift cards purchasing, and etc.",
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image: "/projects/lavly.webp",
    liveUrl: "https://lavly-test.onrender.com",
    githubUrl: "https://github.com/AlexFedchin/Lavly",
    featured: true,
  },
  {
    id: 1,
    title: "Kalendarik Web Application",
    description:
      "A full-stack web application built with React, JavaScript, Node.js, Express, and MongoDB. It is built for a TuulilasiPojat auto service, which specializes in repairing and replacing windshields. Application allows managers to conveninetly create and manage customer bookings and simplifies administration work like keeping track of the invoices sent to the insurance companies.",
    tags: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Material UI"],
    image: "/projects/kalendarik.webp",
    liveUrl: "https://tuulilasikalenteri.fi",
    githubUrl: "https://github.com/AlexFedchin/kalendarik",
    featured: true,
  },
  {
    id: 2,
    title: "Fineartsbeing Portfolio Website",
    description:
      "A portoflio website that I have built for a photographer. It features a clean and modern design, showcasing the photographer's work in a visually appealing way. The website is built with React and Vite, and is fully responsive. It also features a contact form that allows potential clients to get in touch with the photographer directly from the website.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Resend"],
    image: "/projects/fineartsbeing.webp",
    liveUrl: "https://fineartsbeing.com",
    githubUrl: "https://github.com/AlexFedchin/FineartsbeingPortfolio",
    featured: true,
  },
  {
    id: 3,
    title: "Opotin Chatbot",
    description:
      "A chatbot built with React, Node.js, Microsoft Copilot Studio and Directline, designed to provide automated customer support for Tampere University of Applied Sciences students based on the Student's Guide website content. This project was a university group project, I was a frontend developer in the team and I was responsible for building the user interface and integrating the chatbot with the backend.",
    tags: [
      "React",
      "TypeScript",
      "Microsoft Copilot Studio",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image: "/projects/opotin.webp",
    liveUrl: "https://opotin.ddnsking.com",
    githubUrl: "https://github.com/0cd/OPOTIN",
    featured: true,
  },
  {
    id: 4,
    title: "Somesankarit Landing Page",
    description:
      "A landing page I built for social media agency Somesankarit. It was built with React, Vite and Material UI. The design is clean and modern, with a focus on showcasing the agency's services and portfolio. The landing page is fully responsive and features smooth animations and transitions to enhance the user experience. It was my first commercial project and I am proud of how it turned out.",
    tags: ["React", "Vite", "JavaScript", "Material UI"],
    image: "/projects/somesankarit.webp",
    liveUrl: "https://somesankarit.fi",
    githubUrl: "https://github.com/AlexFedchin/SomesankaritLanding",
    featured: true,
  },
];

const Projects = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="container px-6">
        <SectionHeading
          label="02 / Selected Work"
          title={
            <>
              Things I've <span className="text-gradient-cyan">built</span>
            </>
          }
          subtitle="A collection of projects that showcase my passion for building beautiful and functional web applications."
        />

        <div className="mt-16 flex flex-col gap-20 md:gap-28">
          {featured.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <Reveal key={project.id}>
                <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* Image */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`lg:col-span-7 ${
                      reversed ? "lg:order-2" : ""
                    }`}
                  >
                    <GlassPanel className="overflow-hidden p-2">
                      <div className="relative overflow-hidden rounded-2xl">
                        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
                        {/* cyan wash on hover */}
                        <div className="pointer-events-none absolute inset-0 z-10 bg-accent/10 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100" />
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          loading="lazy"
                          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      </div>
                    </GlassPanel>
                  </a>

                  {/* Content */}
                  <div
                    className={`lg:col-span-5 ${
                      reversed ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="mb-5 flex items-center gap-4">
                      <span className="font-display text-sm font-semibold text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-white/10" />
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(featured.length).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-accent md:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-200 hover:shadow-[0_0_26px_-6px_hsl(var(--accent)/0.6)]"
                      >
                        Live demo
                        <ArrowUpRight className="h-4 w-4" />
                      </motion.a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-accent/40"
                      >
                        <Github className="h-4 w-4" />
                        Source
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
