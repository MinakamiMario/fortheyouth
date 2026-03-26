'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import GlowParticles from '@/components/GlowParticles';
import MouseParallax from '@/components/MouseParallax';
import TextReveal from '@/components/TextReveal';
import AnimatedGradient from '@/components/AnimatedGradient';

const TITLE = 'Duurzaamheid. Compliance. Bewustwording.';
const SUBTITLE =
  'Wij helpen organisaties bij het ontwikkelen en uitvoeren van effectief milieubeleid — van strategisch advies tot inspirerende workshops.';

export default function Hero() {
  const [showScroll, setShowScroll] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => setShowScroll(true), 3200);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: '100dvh' }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt=""
          fill
          priority
          quality={75}
          className="object-cover"
          style={{ opacity: 0.85 }}
          sizes="100vw"
        />
      </div>

      {/* Dark overlay for text readability - image stays clearly visible */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(27, 42, 31, 0.4) 0%, rgba(27, 42, 31, 0.55) 100%)`,
        }}
      />

      {/* Subtle aurora effect on top */}
      <AnimatedGradient intensity="subtle" />

      {/* Glow particles overlay */}
      <GlowParticles />

      {/* FTY Watermark with subtle floating animation */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center font-display font-black select-none pointer-events-none"
        aria-hidden="true"
        style={{
          fontSize: 'clamp(12rem, 30vw, 28rem)',
          opacity: 0.06,
          mixBlendMode: 'overlay',
          letterSpacing: '0.05em',
          color: 'white',
        }}
        animate={{
          y: [0, -12, 0],
          scale: [1, 1.01, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        FTY
      </motion.span>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center w-full"
        style={{
          maxWidth: '900px',
          paddingLeft: 'var(--container-padding)',
          paddingRight: 'var(--container-padding)',
        }}
      >
        {/* Eyebrow */}
        <motion.span
          className="eyebrow mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          Strategisch Milieuadvies
        </motion.span>

        {/* Title with blur-to-sharp TextReveal */}
        <div style={{ fontSize: 'clamp(2rem, 6vw, 4.25rem)' }}>
          <TextReveal
            text={TITLE}
            as="h1"
            className="font-display font-bold leading-tight justify-center"
            stagger={0.12}
            delay={0.5}
          />
        </div>

        {/* Subtitle with TextReveal - smaller stagger and delay */}
        <div
          className="mt-6"
          style={{
            maxWidth: '680px',
          }}
        >
          <TextReveal
            text={SUBTITLE}
            as="p"
            className="leading-relaxed justify-center text-[var(--color-text-secondary)]"
            stagger={0.04}
            delay={1.8}
          />
        </div>

        {/* Dual CTA buttons inspired by Stitch design */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4, ease: [0.23, 1, 0.32, 1] }}
        >
          <a
            href="/contact"
            className="cta__button !text-xs"
          >
            Neem Contact Op
          </a>
          <a
            href="/diensten"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider font-display border border-[rgba(82,183,136,0.3)] text-[var(--color-brand-green)] rounded-sm transition-all duration-300 hover:bg-[rgba(82,183,136,0.1)] hover:border-[var(--color-brand-green)] hover:text-white"
          >
            Ontdek Onze Diensten
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator with pulsing green glow ring */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: showScroll ? 1 : 0 }}
        transition={{ duration: 0.7 }}
      >
        <span
          className="text-[var(--text-xs)] uppercase tracking-widest font-display font-medium"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Scroll
        </span>
        <div className="relative flex items-center justify-center">
          {/* Pulsing glow ring */}
          <span className="scroll-glow-ring absolute w-10 h-10 rounded-full" />
          <ChevronDown
            className="w-5 h-5 animate-bounce"
            style={{ color: 'var(--color-brand-green)' }}
          />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 0 8px 2px rgba(82, 183, 136, 0.3);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 20px 6px rgba(82, 183, 136, 0.5);
            transform: scale(1.1);
          }
        }

        .scroll-glow-ring {
          border: 1.5px solid rgba(82, 183, 136, 0.4);
          animation: pulseGlow 2.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .scroll-glow-ring {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
