import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WORKSHOP_THEMAS } from '@/lib/constants';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function WorkshopsSection() {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
      {/* Left: Content */}
      <RevealOnScroll>
        <div>
          <span className="eyebrow">Workshops</span>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-md)' }}
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
            className="cta__button inline-flex items-center gap-2"
          >
            Plan een Workshop
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </RevealOnScroll>

      {/* Right: Theme tags grid */}
      <RevealOnScroll delay={0.2}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {WORKSHOP_THEMAS.map((thema, i) => {
            const Icon = thema.icon;
            return (
              <div
                key={thema.title}
                className="glass-green flex items-center gap-3 transition-all duration-300 hover:border-brand-green/30"
                style={{
                  padding: 'var(--space-sm) var(--space-md)',
                  animationDelay: `${i * 100}ms`,
                }}
              >
                <Icon
                  className="w-5 h-5 shrink-0"
                  style={{ color: 'var(--color-brand-green)' }}
                />
                <span
                  className="font-display font-medium text-white"
                  style={{ fontSize: 'var(--text-sm)' }}
                >
                  {thema.title}
                </span>
              </div>
            );
          })}
        </div>
      </RevealOnScroll>
    </div>
  );
}
