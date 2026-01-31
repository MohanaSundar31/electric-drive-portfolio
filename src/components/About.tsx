import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Car, Cpu, Globe } from 'lucide-react';

const highlights = [
  { icon: Car, label: 'Automotive Tech', value: 'EV & Autonomous' },
  { icon: Cpu, label: 'AI & IoT', value: 'Smart Systems' },
  { icon: Globe, label: 'Web Development', value: 'Full Stack' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-96 bg-primary/5 rounded-r-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">//</span> About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Photo frame */}
              <div className="aspect-[3/4] bg-card border border-border rounded-2xl overflow-hidden gradient-border">
                <div className="w-full h-full bg-gradient-to-br from-steel to-carbon flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <span className="font-display text-3xl font-bold text-primary">DEV</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Profile Photo</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-card border border-primary rounded-xl p-4 shadow-lg"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.8, type: 'spring' }}
                style={{ boxShadow: '0 0 30px hsl(185 100% 50% / 0.3)' }}
              >
                <p className="font-display text-2xl font-bold text-primary">3+</p>
                <p className="text-muted-foreground text-xs">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
              Computer Science Student & <span className="text-primary">Automotive Enthusiast</span>
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Computer Science student with a deep fascination for the intersection of 
              technology and automotive innovation. My journey combines frontend development expertise 
              with a vision for the future of mobility—from electric vehicles to autonomous driving systems.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I specialize in building intelligent web applications and AI-powered solutions that push 
              the boundaries of what's possible. Whether it's crafting responsive UIs or developing 
              smart IoT integrations, I bring precision and creativity to every project.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary transition-colors"
                >
                  <item.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-semibold text-foreground">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.button
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-semibold rounded-lg hover-lift"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ boxShadow: '0 0 30px hsl(155 100% 50% / 0.3)' }}
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
