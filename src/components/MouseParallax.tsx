'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

interface MouseParallaxProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export default function MouseParallax({
  children,
  strength = 20,
  className = '',
}: MouseParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (isTouch || reducedMotion) {
      setEnabled(false);
    }
  }, []);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    currentRef.current.x = lerp(
      currentRef.current.x,
      targetRef.current.x,
      0.08,
    );
    currentRef.current.y = lerp(
      currentRef.current.y,
      targetRef.current.y,
      0.08,
    );

    setOffset({ x: currentRef.current.x, y: currentRef.current.y });
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const ratioX = (e.clientX - centerX) / (rect.width / 2);
      const ratioY = (e.clientY - centerY) / (rect.height / 2);

      targetRef.current.x = ratioX * strength;
      targetRef.current.y = ratioY * strength;
    };

    const handleMouseLeave = () => {
      targetRef.current = { x: 0, y: 0 };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    const el = containerRef.current;
    el?.addEventListener('mouseleave', handleMouseLeave);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el?.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [enabled, strength, animate]);

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
