import Link from 'next/link';
import { DIENSTEN } from '@/lib/constants';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function DienstenGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {DIENSTEN.map((dienst, i) => {
        const Icon = dienst.icon;
        return (
          <RevealOnScroll key={dienst.title} delay={i * 0.1}>
            <Link
              href="/diensten"
              className="group block glass-green card-lift accent-line h-full"
              style={{ padding: 'var(--space-lg)' }}
            >
              <article className="flex flex-col h-full">
                {/* Icon */}
                <div
                  className="flex items-center justify-center shrink-0 rounded-lg"
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
                  style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-xs)' }}
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

                {/* Tags */}
                <div
                  className="flex flex-wrap gap-2"
                  style={{ marginTop: 'var(--space-md)' }}
                >
                  {dienst.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full font-display font-medium"
                      style={{
                        fontSize: 'var(--text-xs)',
                        padding: '0.25rem 0.75rem',
                        background: 'rgba(82, 183, 136, 0.08)',
                        color: 'var(--color-brand-green-light)',
                        border: '1px solid rgba(82, 183, 136, 0.15)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          </RevealOnScroll>
        );
      })}
    </div>
  );
}
