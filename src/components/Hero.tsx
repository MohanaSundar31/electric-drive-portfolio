import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, MessageCircle } from 'lucide-react';

const roles = ['Frontend Developer', 'AI Agent Builder', 'Web Designer', 'CS Student'];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left content */}
          <motion.div 
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-primary font-medium text-sm md:text-base tracking-wide mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hello, I'm
            </motion.p>
            
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-glow text-primary">MOHANA SUNDAR A</span>
            </h1>

            {/* Typing animation for role */}
            <div className="h-10 md:h-12 mb-6 flex items-center justify-center lg:justify-start">
              <span className="font-display text-xl md:text-2xl text-muted-foreground">
                {displayText}
                <span className="cursor-blink text-primary ml-1">|</span>
              </span>
            </div>

            <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Passionate about building innovative web experiences and AI-powered solutions. 
              Specializing in modern frontend technologies and creative design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover-lift pulse-glow text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 sm:px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: MessageCircle, href: '#', label: 'WhatsApp' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
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
            className="flex-1 flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer orbit */}
              <div className="absolute inset-0 rounded-full border border-primary/20 orbit">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full" style={{ boxShadow: '0 0 15px hsl(155 80% 45%)' }} />
              </div>
              
              {/* Middle orbit */}
              <div className="absolute inset-6 sm:inset-8 rounded-full border border-accent/20 orbit-reverse">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 bg-accent rounded-full" style={{ boxShadow: '0 0 12px hsl(160 70% 50%)' }} />
              </div>
              
              {/* Inner orbit */}
              <div className="absolute inset-12 sm:inset-16 rounded-full border border-primary/15 orbit">
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary/80 rounded-full" style={{ boxShadow: '0 0 10px hsl(155 80% 45%)' }} />
              </div>

              {/* Photo container */}
              <div className="absolute inset-16 sm:inset-20 md:inset-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-primary/40 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-card flex items-center justify-center">
                  <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary">MS</span>
                </div>
              </div>

              {/* Glow effect behind photo */}
              <div className="absolute inset-16 sm:inset-20 md:inset-24 rounded-full bg-primary/20 blur-xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
