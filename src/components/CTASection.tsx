'use client';

import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import RevealOnScroll from '@/components/RevealOnScroll';
import AnimatedGradient from '@/components/AnimatedGradient';
import ShimmerButton from '@/components/ShimmerButton';

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <RevealOnScroll>
      <div
        ref={sectionRef}
        className="relative overflow-hidden text-center rounded-2xl"
        style={{
          padding: 'var(--space-3xl) var(--space-xl)',
          maxWidth: '720px',
          margin: '0 auto',
          background: 'rgba(27, 42, 31, 0.6)',
          border: '1px solid rgba(82, 183, 136, 0.15)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* AnimatedGradient background */}
        <AnimatedGradient intensity="medium" className="rounded-2xl" />

        {/* Floating particles */}
        {[
          { top: '15%', left: '10%', size: 4, delay: '0s', duration: '6s' },
          { top: '70%', left: '85%', size: 5, delay: '1s', duration: '8s' },
          { top: '30%', left: '80%', size: 3, delay: '2s', duration: '7s' },
          { top: '80%', left: '20%', size: 4, delay: '0.5s', duration: '9s' },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full cta-float-particle pointer-events-none"
            aria-hidden="true"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
              background: 'rgba(82, 183, 136, 0.4)',
              boxShadow: '0 0 8px 2px rgba(82, 183, 136, 0.2)',
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10">
          {/* Eyebrow with letter-spacing animation on scroll */}
          <motion.span
            className="eyebrow"
            initial={{ letterSpacing: '0.15em' }}
            animate={isInView ? { letterSpacing: '0.25em' } : {}}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            Samenwerken
          </motion.span>

          {/* Title with gradient text effect */}
          <h2
            className="font-display font-bold"
            style={{
              fontSize: 'var(--text-3xl)',
              marginBottom: 'var(--space-md)',
              background:
                'linear-gradient(135deg, #ffffff 0%, #52b788 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Klaar voor Duurzame Verandering?
          </h2>

          <p
            className="leading-relaxed"
            style={{
              fontSize: 'var(--text-base)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-lg)',
              maxWidth: '480px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Neem vandaag nog contact op en ontdek hoe wij uw organisatie kunnen
            helpen met duurzaamheid, compliance en bewustwording.
          </p>

          <ShimmerButton href="/contact">
            Neem Contact Op
            <ArrowRight className="w-4 h-4 inline-block ml-2" />
          </ShimmerButton>
        </div>
      </div>

      <style jsx>{`
        @keyframes ctaFloat {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-15px) scale(1.2);
            opacity: 0.6;
          }
        }

        .cta-float-particle {
          animation-name: ctaFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-float-particle {
            animation: none;
          }
        }
      `}</style>
    </RevealOnScroll>
  );
}
