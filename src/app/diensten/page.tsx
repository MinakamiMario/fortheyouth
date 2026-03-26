import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import RevealOnScroll from '@/components/RevealOnScroll';
import { DIENSTEN } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Diensten',
  description:
    'Ontdek onze milieuadvies diensten: van strategisch advies en duurzaamheidsrapportage tot workshops, beleidsondersteuning en bedrijfsverduurzaming.',
};

export default function DienstenPage() {
  return (
    <>
      <PageHero
        eyebrow="Onze Diensten"
        title="Milieuadvies op Maat"
        backgroundImage="/images/hero/diensten-bg.jpg"
      />

      {/* Services Grid */}
      <section className="py-[var(--space-3xl)]">
        <div
          className="mx-auto px-[var(--container-padding)]"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIENSTEN.map((dienst, i) => {
              const Icon = dienst.icon;
              return (
                <RevealOnScroll key={dienst.title} delay={i * 0.08}>
                  <div className="glass-green card-lift accent-line p-8 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-full bg-brand-green/15 flex items-center justify-center mb-6 shrink-0">
                      <Icon className="w-7 h-7 text-brand-green" />
                    </div>
                    <h3 className="font-display text-[var(--text-xl)] font-bold mb-3">
                      {dienst.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 flex-1">
                      {dienst.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {dienst.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-3 py-1 text-xs font-medium text-brand-green border border-brand-green/30 rounded-full bg-brand-green/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[var(--space-3xl)] bg-brand-panel/50">
        <div
          className="mx-auto px-[var(--container-padding)] text-center"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          <RevealOnScroll>
            <span className="eyebrow">Beschikbaar als Milieuadviseur</span>
            <h2 className="font-display text-[var(--text-3xl)] font-bold mb-4">
              Op zoek naar deskundig milieuadvies?
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-8 text-[var(--text-lg)]">
              Of u nu hulp nodig heeft bij compliance, rapportage of
              verduurzaming - wij staan klaar om u te ondersteunen met
              persoonlijk en praktijkgericht advies.
            </p>
            <Link href="/contact" className="cta__button">
              Vraag een Offerte Aan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
