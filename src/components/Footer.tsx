import { motion } from 'framer-motion';
import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 font-display text-base sm:text-lg font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-1 bg-primary/20 rounded-md border border-primary/30">
              <Code2 className="w-4 h-4 text-primary" />
            </div>
            <span className="text-foreground">
              Port<span className="text-primary">folio</span>
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
