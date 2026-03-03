import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../constants';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className, light }) => {
  return (
    <div className={cn("text-center mb-12", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className={cn("h-[1px] w-12", light ? "bg-white/30" : "bg-gold/30")} />
          <span className={cn("text-sm uppercase tracking-[0.2em] font-medium", light ? "text-white/70" : "text-gold")}>
            भक्ति • प्रसाद • शुद्ध
          </span>
          <div className={cn("h-[1px] w-12", light ? "bg-white/30" : "bg-gold/30")} />
        </div>
        <h2 className={cn("text-4xl md:text-5xl font-serif mb-4", light ? "text-white" : "text-warm-brown")}>
          {title}
        </h2>
        {subtitle && (
          <p className={cn("max-w-2xl mx-auto text-lg italic", light ? "text-white/80" : "text-warm-brown/70")}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export const Diya: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("relative w-8 h-8", className)}>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-3 bg-warm-brown rounded-b-full border-t border-gold/30" />
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-5 bg-saffron rounded-full diya-flame shadow-[0_0_10px_rgba(255,140,0,0.6)]" />
  </div>
);
