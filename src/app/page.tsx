import Hero from '@/components/Hero';
import StatsCounter from '@/components/StatsCounter';
import DienstenGrid from '@/components/DienstenGrid';
import WorkshopsSection from '@/components/WorkshopsSection';
import CTASection from '@/components/CTASection';
import RevealOnScroll from '@/components/RevealOnScroll';
import { STATS } from '@/lib/constants';

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <Hero />

      {/* ── Stats ── */}
      <section
        style={{
          paddingTop: 'var(--space-3xl)',
          paddingBottom: 'var(--space-3xl)',
        }}
      >
        <div
          className="mx-auto px-[var(--container-padding)]"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          <RevealOnScroll>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {STATS.map((stat) => (
                <StatsCounter
                  key={stat.label}
                  target={stat.target}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Diensten ── */}
      <section
        style={{
          paddingTop: 'var(--space-2xl)',
          paddingBottom: 'var(--space-3xl)',
        }}
      >
        <div
          className="mx-auto px-[var(--container-padding)]"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          <RevealOnScroll>
            <div
              className="text-center"
              style={{ marginBottom: 'var(--space-2xl)' }}
            >
              <span className="eyebrow">Onze Diensten</span>
              <h2
                className="font-display font-bold text-white"
                style={{ fontSize: 'var(--text-4xl)' }}
              >
                Wat Wij Doen
              </h2>
            </div>
          </RevealOnScroll>
          <DienstenGrid />
        </div>
      </section>

      {/* ── Beschikbaarheid ── */}
      <section
        className="border-t border-b border-grey-100"
        style={{
          paddingTop: 'var(--space-2xl)',
          paddingBottom: 'var(--space-2xl)',
          background: 'var(--color-brand-panel)',
        }}
      >
        <div
          className="mx-auto px-[var(--container-padding)]"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          <RevealOnScroll>
            <div className="flex flex-col items-center text-center gap-4">
              <span className="eyebrow">Beschikbaarheid</span>
              <h2
                className="font-display font-bold text-white"
                style={{ fontSize: 'var(--text-3xl)' }}
              >
                Landelijk Inzetbaar
              </h2>
              <p
                className="leading-relaxed"
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-text-secondary)',
                  maxWidth: '600px',
                }}
              >
                Vanuit Rotterdam bedienen wij organisaties door heel Nederland.
                Of het nu gaat om een workshop op locatie of strategisch advies
                op afstand — wij zijn flexibel en landelijk beschikbaar.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Workshops ── */}
      <section
        style={{
          paddingTop: 'var(--space-3xl)',
          paddingBottom: 'var(--space-3xl)',
        }}
      >
        <div
          className="mx-auto px-[var(--container-padding)]"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          <WorkshopsSection />
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          paddingTop: 'var(--space-2xl)',
          paddingBottom: 'var(--space-3xl)',
        }}
      >
        <div
          className="mx-auto px-[var(--container-padding)]"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          <CTASection />
        </div>
      </section>
    </>
  );
}
