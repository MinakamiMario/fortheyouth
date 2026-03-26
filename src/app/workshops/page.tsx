import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, GraduationCap, Landmark, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import RevealOnScroll from '@/components/RevealOnScroll';
import { WORKSHOP_THEMAS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Workshops',
  description:
    'Inspirerende workshops en educatieve programma\'s over duurzaamheid, klimaat, circulaire economie en meer. Voor bedrijven, scholen en overheden.',
};

const DOELGROEPEN = [
  {
    icon: Building2,
    title: 'Bedrijven',
    description:
      'Maatwerk workshops voor teams en leidinggevenden. Wij helpen bedrijven om duurzaamheid te integreren in hun dagelijkse bedrijfsvoering, van bewustwordingssessies tot concrete implementatieplannen.',
  },
  {
    icon: GraduationCap,
    title: 'Scholen',
    description:
      'Educatieve programma\'s voor leerlingen en studenten van alle niveaus. Met interactieve workshops maken wij milieuthema\'s tastbaar en inspireren we de volgende generatie om actie te ondernemen.',
  },
  {
    icon: Landmark,
    title: 'Overheden & Instellingen',
    description:
      'Kennissessies en strategische workshops voor beleidsmakers en ambtenaren. Wij ondersteunen overheidsorganisaties bij het ontwikkelen en uitvoeren van effectief milieubeleid.',
  },
] as const;

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        eyebrow="Educatie & Bewustwording"
        title="Workshops & Educatieve Programma's"
        backgroundImage="/images/hero/workshops-bg.jpg"
      />

      {/* Intro */}
      <section className="py-[var(--space-3xl)]">
        <div
          className="mx-auto px-[var(--container-padding)]"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          <RevealOnScroll>
            <div className="max-w-3xl">
              <h2 className="font-display text-[var(--text-3xl)] font-bold mb-6">
                Van Inzicht naar{' '}
                <span className="text-brand-green">Impact</span>
              </h2>
              <p className="text-[var(--color-text-secondary)] text-[var(--text-lg)] leading-relaxed">
                Onze workshops zijn ontworpen om deelnemers niet alleen kennis bij
                te brengen, maar ook te inspireren en activeren. Door interactieve
                sessies, praktijkvoorbeelden en concrete tools zorgen wij ervoor dat
                duurzaamheid van een abstract begrip een tastbare actie wordt. Elke
                workshop wordt op maat gemaakt voor uw doelgroep en organisatie.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Workshop Themes */}
      <section className="py-[var(--space-3xl)] bg-brand-panel/50">
        <div
          className="mx-auto px-[var(--container-padding)]"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="eyebrow">Thema&apos;s</span>
              <h2 className="font-display text-[var(--text-3xl)] font-bold">
                Workshop Thema&apos;s
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKSHOP_THEMAS.map((thema, i) => {
              const Icon = thema.icon;
              return (
                <RevealOnScroll key={thema.title} delay={i * 0.08}>
                  <div className="glass-green card-lift p-8 text-center h-full">
                    <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-8 h-8 text-brand-green" />
                    </div>
                    <h3 className="font-display text-[var(--text-lg)] font-bold">
                      {thema.title}
                    </h3>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doelgroepen */}
      <section className="py-[var(--space-3xl)]">
        <div
          className="mx-auto px-[var(--container-padding)]"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="eyebrow">Voor Wie</span>
              <h2 className="font-display text-[var(--text-3xl)] font-bold">
                Onze Doelgroepen
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {DOELGROEPEN.map((groep, i) => {
              const Icon = groep.icon;
              return (
                <RevealOnScroll key={groep.title} delay={i * 0.12}>
                  <div className="glass-green p-8 md:p-10 h-full">
                    <div className="w-14 h-14 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-brand-green" />
                    </div>
                    <h3 className="font-display text-[var(--text-xl)] font-bold mb-4">
                      {groep.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {groep.description}
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
              Workshop op maat?
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-8 text-[var(--text-lg)]">
              Elke workshop wordt afgestemd op uw organisatie en doelgroep.
              Neem contact op om de mogelijkheden te bespreken.
            </p>
            <Link href="/contact" className="cta__button">
              Plan een Workshop
              <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
