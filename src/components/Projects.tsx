import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Smart To-Do App',
    description: 'A modern task management application with AI-powered priority suggestions, real-time sync, and a clean dashboard interface.',
    image: null,
    tech: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
    github: '#',
    demo: '#',
    color: 'from-primary/20 to-accent/20',
  },
  {
    title: 'Portfolio Website',
    description: 'An automotive-inspired personal portfolio showcasing projects and skills with smooth animations and modern design.',
    image: null,
    tech: ['React', 'Framer Motion', 'TypeScript', 'Tailwind'],
    github: '#',
    demo: '#',
    color: 'from-accent/20 to-neon-purple/20',
  },
  {
    title: 'EV Dashboard UI',
    description: 'A concept electric vehicle dashboard interface with real-time data visualization, navigation, and climate controls.',
    image: null,
    tech: ['React', 'Three.js', 'D3.js', 'WebGL'],
    github: '#',
    demo: '#',
    color: 'from-neon-purple/20 to-primary/20',
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
            <Folder className="w-16 h-16 text-primary/50 group-hover:text-primary transition-colors" />
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <motion.a
              href={project.github}
              className="p-3 bg-card border border-border rounded-lg text-foreground hover:text-primary hover:border-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.demo}
              className="p-3 bg-primary text-primary-foreground rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full border border-border"
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
    <section id="projects" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute right-0 top-1/3 w-1/3 h-96 bg-accent/5 rounded-l-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">//</span> Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development and automotive tech
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View more link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-display"
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
