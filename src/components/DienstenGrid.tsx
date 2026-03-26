'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { DIENSTEN } from '@/lib/constants';
import TiltCard from '@/components/TiltCard';
import GlowingBorder from '@/components/GlowingBorder';

export default function DienstenGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: '-60px' });

  return (
    <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {DIENSTEN.map((dienst, i) => {
        const Icon = dienst.icon;
        return (
          <motion.div
            key={dienst.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <TiltCard className="h-full">
              <GlowingBorder className="h-full">
                <Link
                  href="/diensten"
                  className="group block glass-green card-lift accent-line h-full rounded-xl"
                  style={{ padding: 'var(--space-lg)' }}
                >
                  <article className="flex flex-col h-full">
                    {/* Icon with pulse glow on hover */}
                    <div
                      className="flex items-center justify-center shrink-0 rounded-lg transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(82,183,136,0.4)]"
                      style={{
                        width: '60px',
                        height: '60px',
                        background: 'rgba(82, 183, 136, 0.12)',
                        marginBottom: 'var(--space-md)',
                      }}
                    >
                      <Icon
                        className="w-7 h-7"
                        style={{ color: 'var(--color-brand-green)' }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="font-display font-bold text-white group-hover:text-brand-green transition-colors duration-200"
                      style={{
                        fontSize: 'var(--text-lg)',
                        marginBottom: 'var(--space-xs)',
                      }}
                    >
                      {dienst.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="leading-relaxed flex-1"
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      {dienst.description}
                    </p>

                    {/* Tags with slide-in animation on hover */}
                    <div
                      className="flex flex-wrap gap-2"
                      style={{ marginTop: 'var(--space-md)' }}
                    >
                      {dienst.tags.map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className="rounded-full font-display font-medium transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                          style={{
                            fontSize: 'var(--text-xs)',
                            padding: '0.25rem 0.75rem',
                            background: 'rgba(82, 183, 136, 0.08)',
                            color: 'var(--color-brand-green-light)',
                            border: '1px solid rgba(82, 183, 136, 0.15)',
                            transitionDelay: `${tagIndex * 50}ms`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </Link>
              </GlowingBorder>
            </TiltCard>
          </motion.div>
        );
      })}
    </div>
  );
}
