'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { WORKSHOP_THEMAS } from '@/lib/constants';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function WorkshopsSection() {
  const tagsRef = useRef<HTMLDivElement>(null);
  const tagsInView = useInView(tagsRef, { once: true, margin: '-40px' });

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
      {/* Left: Content */}
      <RevealOnScroll>
        <div>
          <span className="eyebrow">Workshops</span>
          <h2
            className="font-display font-bold text-white"
            style={{
              fontSize: 'var(--text-4xl)',
              marginBottom: 'var(--space-md)',
            }}
          >
            Inspirerende Workshops voor Elke Doelgroep
          </h2>
          <p
            className="leading-relaxed"
            style={{
              fontSize: 'var(--text-base)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-lg)',
              maxWidth: '520px',
            }}
          >
            Van basisscholen tot boardrooms — onze workshops maken duurzaamheid
            tastbaar, inspirerend en direct toepasbaar. Elk programma wordt
            afgestemd op uw doelgroep en doelstellingen.
          </p>
          <Link
            href="/workshops"
            className="group cta__button inline-flex items-center gap-2"
          >
            Plan een Workshop
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </RevealOnScroll>

      {/* Right: Theme tags grid with staggered entrance */}
      <div ref={tagsRef} className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {WORKSHOP_THEMAS.map((thema, i) => {
            const Icon = thema.icon;
            return (
              <motion.div
                key={thema.title}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  tagsInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="group glass-green flex items-center gap-3 transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_0_20px_rgba(82,183,136,0.15)]"
                style={{
                  padding: 'var(--space-sm) var(--space-md)',
                }}
                whileHover={{ scale: 1.04 }}
              >
                <Icon
                  className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:rotate-[15deg]"
                  style={{ color: 'var(--color-brand-green)' }}
                />
                <span
                  className="font-display font-medium text-white"
                  style={{ fontSize: 'var(--text-sm)' }}
                >
                  {thema.title}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Subtle connecting lines between tags */}
        <div
          className="absolute inset-0 pointer-events-none hidden lg:block"
          aria-hidden="true"
        >
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.08 }}
          >
            <line
              x1="50%"
              y1="25%"
              x2="50%"
              y2="75%"
              stroke="var(--color-brand-green)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="25%"
              y1="50%"
              x2="75%"
              y2="50%"
              stroke="var(--color-brand-green)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
