import React from 'react';
import { motion } from 'motion/react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading, Eyebrow } from '../ui/Typography';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 400, damping: 40 },
  },
};

export const IntroSection: React.FC = () => {
  return (
    <Section  className="pt-24 pb-32 border-t border-[var(--border)]">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Typography */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <Eyebrow>A DIGITAL GROWTH PARTNER</Eyebrow>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Heading level="h2" className="!leading-tight !tracking-tight max-w-2xl">
                Oveqira brings strategy, creativity, technology, and execution together to help businesses build stronger brands, better digital experiences, and sustainable growth.
              </Heading>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="pt-4 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--border-strong)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] font-semibold">
                One team. One digital direction.
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Abstract Interconnected Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square sm:aspect-[4/3] lg:aspect-square bg-[var(--surface)] border border-[var(--border)] rounded-[8px] overflow-hidden flex items-center justify-center p-8 sm:p-16 shadow-sm"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-tech-grid-light opacity-30" />
            
            {/* Visual Nodes */}
            <div className="relative w-full h-full flex flex-col justify-between max-w-[280px] mx-auto z-10 py-4">
              {['Strategy', 'Design', 'Technology', 'Growth'].map((label, index, arr) => (
                <div key={label} className="relative flex flex-col items-center flex-1 w-full justify-start">
                  <div className="bg-[var(--background)] border border-[var(--border-strong)] px-6 py-4 rounded-[4px] w-full text-center shadow-lg relative z-10 group hover:border-[var(--accent)] transition-colors duration-500 cursor-default">
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors font-semibold">
                      {label}
                    </span>
                  </div>
                  
                  {index < arr.length - 1 && (
                    <div className="w-[1px] flex-1 bg-[var(--border-strong)] relative z-0 my-1 min-h-[24px]">
                      <motion.div
                        animate={{ top: ['0%', '100%', '0%'], opacity: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5, ease: "linear" }}
                        className="absolute left-[-1px] w-[3px] h-[3px] rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Technical Corner Accents */}
            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-[var(--border-strong)]" />
            <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-[var(--border-strong)]" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
