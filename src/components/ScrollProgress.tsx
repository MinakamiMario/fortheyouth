'use client';

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-49 h-[2px] origin-left hover:h-[3px]"
      style={{
        scaleX,
        background:
          'linear-gradient(90deg, var(--color-brand-green-dark), var(--color-brand-green), var(--color-brand-green-light))',
        willChange: 'transform',
        transition: 'height 0.2s ease',
      }}
      aria-hidden="true"
    />
  );
}
