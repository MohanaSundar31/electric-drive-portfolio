import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Code, Brain, Palette } from 'lucide-react';

const highlights = [
  { icon: Code, label: 'Frontend Dev', value: 'React & TS' },
  { icon: Brain, label: 'AI Agents', value: 'Smart Systems' },
  { icon: Palette, label: 'Web Design', value: 'UI/UX' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-72 bg-primary/5 rounded-r-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">//</span> About Me
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Photo frame */}
              <div className="aspect-[3/4] bg-card border border-border rounded-2xl overflow-hidden gradient-border">
                <div className="w-full h-full bg-gradient-to-br from-steel to-carbon flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <span className="font-display text-2xl sm:text-3xl font-bold text-primary">MS</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Mohana Sundar A</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-card border border-primary rounded-xl p-3 sm:p-4 shadow-lg"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.8, type: 'spring' }}
                style={{ boxShadow: '0 0 25px hsl(155 80% 45% / 0.25)' }}
              >
                <p className="font-display text-xl sm:text-2xl font-bold text-primary">CS</p>
                <p className="text-muted-foreground text-xs">Student</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-foreground">
              Hi, I'm <span className="text-primary">Mohana Sundar A</span>
            </h3>
            
            <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              I'm a passionate Computer Science student with a keen interest in building 
              modern web applications and exploring the world of AI agents. My journey 
              combines frontend development expertise with creative design thinking.
            </p>
            
            <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              I specialize in crafting responsive, user-friendly interfaces using React 
              and TypeScript. I'm always eager to learn new technologies and take on 
              challenging projects that push the boundaries of what's possible on the web.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-3 sm:p-4 text-center hover:border-primary transition-colors"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.button
              className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover-lift text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ boxShadow: '0 0 25px hsl(155 80% 45% / 0.25)' }}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
