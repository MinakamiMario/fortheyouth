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
  const [complete, setComplete] = useState(false);
  const hasAnimated = useRef(false);

  /* SVG ring config */
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const maxValue = 100;
  const percentage = Math.min(target / maxValue, 1);
  const ringProgress = complete ? percentage : (count / target) * percentage;

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
      } else {
        setComplete(true);
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
    <div
      ref={ref}
      className="flex flex-col items-center text-center"
      style={{
        background: 'rgba(82, 183, 136, 0.04)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(82, 183, 136, 0.1)',
        borderRadius: '16px',
        padding: 'var(--space-lg) var(--space-md)',
      }}
    >
      {/* SVG progress ring */}
      <div className="relative inline-flex items-center justify-center">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="absolute"
          style={{ transform: 'rotate(-90deg)' }}
        >
          {/* Track */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="rgba(82, 183, 136, 0.1)"
            strokeWidth="3"
          />
          {/* Progress */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="var(--color-brand-green)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - ringProgress)}
            style={{
              transition: 'stroke-dashoffset 0.1s ease-out',
              filter: 'drop-shadow(0 0 6px rgba(82, 183, 136, 0.5))',
            }}
          />
        </svg>

        {/* Number */}
        <span
          className={`block font-display text-[var(--text-4xl)] font-bold text-brand-green relative z-10 transition-all duration-500 ${
            complete ? 'stats-glow-pulse' : ''
          }`}
          aria-live="polite"
          style={{ lineHeight: '100px' }}
        >
          {count}
          {suffix}
        </span>
      </div>

      <span className="block mt-2 text-[var(--text-sm)] text-[var(--color-text-muted)] uppercase tracking-wider font-display font-medium">
        {label}
      </span>

      <style jsx>{`
        @keyframes glowPulse {
          0% {
            text-shadow: 0 0 0 rgba(82, 183, 136, 0);
          }
          50% {
            text-shadow: 0 0 16px rgba(82, 183, 136, 0.6);
          }
          100% {
            text-shadow: 0 0 0 rgba(82, 183, 136, 0);
          }
        }

        .stats-glow-pulse {
          animation: glowPulse 0.8s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .stats-glow-pulse {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
