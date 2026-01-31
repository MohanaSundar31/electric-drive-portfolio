import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, MessageCircle } from 'lucide-react';

const skills = ['Python', 'TypeScript', 'React', 'C', 'Java', 'AI Agents'];

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const skill = skills[currentSkill];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < skill.length) {
          setDisplayText(skill.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentSkill((prev) => (prev + 1) % skills.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentSkill]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(185 100% 50% / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(185 100% 50% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-primary font-display text-sm md:text-base tracking-widest mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              FULL STACK DEVELOPER • AI ENGINEER
            </motion.p>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Engineering the</span>
              <br />
              <span className="text-glow text-primary">Future of Mobility</span>
            </h1>

            {/* Terminal-style typing */}
            <div className="bg-card border border-border rounded-lg p-4 md:p-6 mb-8 font-mono text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-destructive" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-accent" />
              </div>
              <p className="text-muted-foreground text-sm">
                <span className="text-accent">const</span>{' '}
                <span className="text-foreground">developer</span> ={' '}
                <span className="text-primary">{'{'}</span>
              </p>
              <p className="text-muted-foreground text-sm pl-4">
                skill:{' '}
                <span className="text-neon-green">"{displayText}</span>
                <span className="cursor-blink text-primary">|</span>
                <span className="text-neon-green">"</span>
              </p>
              <p className="text-primary text-sm">{'}'}</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover-lift pulse-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 border border-primary text-primary font-display font-semibold rounded-lg hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: MessageCircle, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  whileHover={{ y: -3 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Photo with animated circles */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer orbit */}
              <div className="absolute inset-0 rounded-full border border-primary/30 orbit">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg" style={{ boxShadow: '0 0 20px hsl(185 100% 50%)' }} />
              </div>
              
              {/* Middle orbit */}
              <div className="absolute inset-8 rounded-full border border-accent/30 orbit-reverse">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-accent rounded-full shadow-lg" style={{ boxShadow: '0 0 15px hsl(155 100% 50%)' }} />
              </div>
              
              {/* Inner orbit */}
              <div className="absolute inset-16 rounded-full border border-neon-purple/30 orbit">
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-neon-purple rounded-full shadow-lg" style={{ boxShadow: '0 0 10px hsl(270 100% 60%)' }} />
              </div>

              {/* Photo placeholder */}
              <div className="absolute inset-20 md:inset-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/50 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-card flex items-center justify-center">
                  <span className="font-display text-4xl md:text-5xl font-bold text-primary">CS</span>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-20 md:inset-24 rounded-full bg-primary/20 blur-xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
