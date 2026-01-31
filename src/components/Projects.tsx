import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Smart To-Do App',
    description: 'A modern task management app with priority sorting, real-time updates, and a clean dashboard interface.',
    image: null,
    tech: ['React', 'TypeScript', 'Tailwind', 'LocalStorage'],
    github: '#',
    demo: '#',
    color: 'from-primary/20 to-accent/20',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing projects and skills with smooth animations and responsive design.',
    image: null,
    tech: ['React', 'Framer Motion', 'TypeScript', 'Tailwind'],
    github: '#',
    demo: '#',
    color: 'from-accent/20 to-primary/30',
  },
  {
    title: 'AI Chat Interface',
    description: 'An AI-powered chatbot interface with natural language processing and conversation history.',
    image: null,
    tech: ['React', 'AI API', 'TypeScript', 'CSS'],
    github: '#',
    demo: '#',
    color: 'from-primary/30 to-accent/20',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 hover-lift">
        {/* Project image placeholder */}
        <div className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Folder className="w-12 h-12 sm:w-16 sm:h-16 text-primary/50 group-hover:text-primary transition-colors" />
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <motion.a
              href={project.github}
              className="p-2.5 sm:p-3 bg-card border border-border rounded-lg text-foreground hover:text-primary hover:border-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
            <motion.a
              href={project.demo}
              className="p-2.5 sm:p-3 bg-primary text-primary-foreground rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs bg-muted text-muted-foreground rounded-full border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute right-0 top-1/3 w-1/4 h-72 bg-accent/5 rounded-l-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">//</span> Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            A showcase of my recent work in web development
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View more link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10 sm:mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium text-sm sm:text-base"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
