'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { useInView } from 'framer-motion';

interface StatsCounterProps {
  target: number;
  suffix?: string;
  label: string;
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function StatsCounter({
  target,
  suffix = '',
  label,
}: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      setCount(Math.round(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [target]);

  useEffect(() => {
    if (isInView) {
      animate();
    }
  }, [isInView, animate]);

  return (
    <div ref={ref} className="text-center">
      <span
        className="block font-display text-[var(--text-4xl)] font-bold text-brand-green"
        aria-live="polite"
      >
        {count}
        {suffix}
      </span>
      <span className="block mt-1 text-[var(--text-sm)] text-[var(--color-text-muted)] uppercase tracking-wider font-display font-medium">
        {label}
      </span>
    </div>
  );
}
