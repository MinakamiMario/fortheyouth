import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, Eye, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import RevealOnScroll from '@/components/RevealOnScroll';
import { KERNWAARDEN } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Over Ons',
  description:
    'Leer meer over de missie en visie van For The Youth. Wij zetten ons in voor een duurzamere toekomst met strategisch milieuadvies en educatieve workshops.',
};

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Over Ons"
        title="Voor een Duurzamere Toekomst"
        backgroundImage="/images/hero/over-ons-bg.png"
      />

      {/* Mission & Vision */}
      <section className="py-[var(--space-3xl)]">
        <div
          className="mx-auto px-[var(--container-padding)]"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <RevealOnScroll>
              <div className="glass-green p-8 md:p-10 h-full">
                <div className="w-14 h-14 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-brand-green" />
                </div>
                <h2 className="font-display text-[var(--text-2xl)] font-bold mb-4">
                  Onze Missie
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Wij bieden strategisch milieuadvies aan organisaties die het
                  verschil willen maken. Door deskundig advies, heldere rapportages
                  en praktijkgerichte oplossingen helpen wij bedrijven, overheden en
                  onderwijsinstellingen om hun milieu-impact te verminderen en te
                  voldoen aan wet- en regelgeving. Samen werken we aan een gezondere
                  leefomgeving voor de huidige en toekomstige generaties.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <div className="glass-green p-8 md:p-10 h-full">
                <div className="w-14 h-14 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-brand-green" />
                </div>
                <h2 className="font-display text-[var(--text-2xl)] font-bold mb-4">
                  Onze Visie
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Wij geloven in een wereld waarin duurzaamheid vanzelfsprekend is.
                  Een toekomst waarin organisaties niet alleen voldoen aan milieunormen,
                  maar actief bijdragen aan het herstel en behoud van onze natuurlijke
                  omgeving. Door kennis te delen, bewustzijn te vergroten en innovatieve
                  oplossingen te bieden, streven wij naar een samenleving die in harmonie
                  leeft met de natuur.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-[var(--space-3xl)] bg-brand-panel/50">
        <div
          className="mx-auto px-[var(--container-padding)]"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto">
              <span className="eyebrow">Ons Verhaal</span>
              <h2 className="font-display text-[var(--text-3xl)] font-bold mb-8">
                Van Passie naar{' '}
                <span className="text-brand-green">Impact</span>
              </h2>
              <div className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed text-[var(--text-lg)]">
                <p>
                  For The Youth is ontstaan vanuit een sterke overtuiging: de
                  jongere generatie verdient een schone, gezonde en leefbare wereld.
                  Wat begon als een persoonlijke missie, is uitgegroeid tot een
                  professioneel adviesbureau dat organisaties begeleidt in hun
                  verduurzamingsproces.
                </p>
                <p>
                  Met{' '}
                  <span className="text-brand-green font-semibold">
                    meer dan 6 jaar ervaring
                  </span>{' '}
                  in milieu- en duurzaamheidsadvies hebben we{' '}
                  <span className="text-brand-green font-semibold">
                    meer dan 30 projecten
                  </span>{' '}
                  succesvol afgerond en{' '}
                  <span className="text-brand-green font-semibold">
                    meer dan 61 workshops
                  </span>{' '}
                  gegeven aan uiteenlopende doelgroepen. Van kleine MKB-bedrijven
                  tot grote overheidsinstellingen - wij maken duurzaamheid
                  toegankelijk en concreet.
                </p>
                <p>
                  Vanuit Rotterdam adviseren wij organisaties in heel Nederland.
                  Onze aanpak is altijd persoonlijk, resultaatgericht en afgestemd
                  op de specifieke behoeften van elke opdrachtgever. Want wij
                  geloven dat echte verandering begint bij maatwerk.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-[var(--space-3xl)]">
        <div
          className="mx-auto px-[var(--container-padding)]"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="eyebrow">Waar wij voor staan</span>
              <h2 className="font-display text-[var(--text-3xl)] font-bold">
                Onze Kernwaarden
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {KERNWAARDEN.map((waarde, i) => {
              const Icon = waarde.icon;
              return (
                <RevealOnScroll key={waarde.title} delay={i * 0.1}>
                  <div className="glass-green card-lift accent-line p-8 text-center h-full">
                    <div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-7 h-7 text-brand-green" />
                    </div>
                    <h3 className="font-display text-[var(--text-lg)] font-bold mb-3">
                      {waarde.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                      {waarde.description}
                    </p>
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
            <h2 className="font-display text-[var(--text-3xl)] font-bold mb-4">
              Samen aan de slag?
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-8 text-[var(--text-lg)]">
              Wij helpen u graag met strategisch milieuadvies op maat. Neem
              vrijblijvend contact op voor een kennismaking.
            </p>
            <Link href="/contact" className="cta__button">
              Neem Contact Op
              <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
