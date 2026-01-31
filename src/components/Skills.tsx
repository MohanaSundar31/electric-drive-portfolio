import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gauge, Zap, Activity } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'C', level: 75 },
      { name: 'Java', level: 70 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 92 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Three.js', level: 65 },
    ],
  },
  {
    title: 'Backend & AI',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'AI/ML', level: 78 },
      { name: 'IoT Systems', level: 70 },
      { name: 'Databases', level: 75 },
    ],
  },
];

const GaugeIndicator = ({ value, label }: { value: number; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (value / 100) * circumference * 0.75;

  return (
    <div ref={ref} className="relative w-28 h-28 md:w-32 md:h-32">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {/* Background track */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="hsl(220 10% 12%)"
          strokeWidth="8"
          strokeDasharray={circumference * 0.75}
          strokeDashoffset={0}
          strokeLinecap="round"
          transform="rotate(135 50 50)"
        />
        {/* Filled portion */}
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="8"
          strokeDasharray={circumference * 0.75}
          initial={{ strokeDashoffset: circumference * 0.75 }}
          animate={isInView ? { strokeDashoffset } : {}}
          transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
          strokeLinecap="round"
          transform="rotate(135 50 50)"
        />
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(155 80% 45%)" />
            <stop offset="100%" stopColor="hsl(160 70% 50%)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span 
          className="font-display text-xl md:text-2xl font-bold text-primary"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          {value}%
        </motion.span>
        <span className="text-xs text-muted-foreground text-center px-2">{label}</span>
      </div>
    </div>
  );
};

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden gauge-track">
        <motion.div
          className="h-full rounded-full gauge-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 bg-card relative" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">//</span> Skills Dashboard
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Performance metrics and technical proficiency levels
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Dashboard header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-background border border-border rounded-2xl p-4 md:p-6 mb-8 scanlines"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Gauge className="w-6 h-6 text-primary" />
              <span className="font-display text-lg text-foreground">System Status</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm">Online</span>
            </div>
          </div>

          {/* Gauge indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <GaugeIndicator value={92} label="Frontend" />
            <GaugeIndicator value={78} label="Backend" />
            <GaugeIndicator value={85} label="AI/ML" />
            <GaugeIndicator value={88} label="Design" />
          </div>
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + catIndex * 0.1 }}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.5 + catIndex * 0.1 + index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
