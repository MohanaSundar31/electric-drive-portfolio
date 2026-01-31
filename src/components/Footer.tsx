import { motion } from 'framer-motion';
import { Zap, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 font-display text-lg font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-foreground">
              MOTOR<span className="text-primary">DEV</span>
            </span>
          </motion.a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive" /> © {currentYear} All rights reserved.
          </p>

          {/* Back to top */}
          <motion.a
            href="#home"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
            whileHover={{ y: -2 }}
          >
            Back to top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
