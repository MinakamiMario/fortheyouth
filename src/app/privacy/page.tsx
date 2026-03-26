import type { Metadata } from 'next';
import RevealOnScroll from '@/components/RevealOnScroll';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacybeleid',
  description:
    'Privacybeleid van For The Youth. Lees hoe wij omgaan met uw persoonsgegevens en uw privacy waarborgen.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-12">
        <div
          className="mx-auto px-[var(--container-padding)]"
          style={{ maxWidth: '800px' }}
        >
          <RevealOnScroll>
            <span className="eyebrow">Juridisch</span>
            <h1 className="font-display text-[var(--text-4xl)] font-bold mb-4">
              Privacybeleid
            </h1>
            <p className="text-[var(--color-text-muted)] text-sm">
              Laatst bijgewerkt: maart 2026
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Content */}
      <section className="pb-[var(--space-3xl)]">
        <div
          className="mx-auto px-[var(--container-padding)]"
          style={{ maxWidth: '800px' }}
        >
          <RevealOnScroll>
            <div className="prose-legal space-y-10 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                For The Youth, gevestigd in Rotterdam, hecht veel waarde aan de
                bescherming van uw persoonsgegevens. In dit privacybeleid leggen
                wij uit welke gegevens wij verzamelen, waarom wij dit doen en hoe
                wij uw privacy waarborgen.
              </p>

              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  1. Verantwoordelijke
                </h2>
                <p>
                  For The Youth is verantwoordelijk voor de verwerking van
                  persoonsgegevens zoals beschreven in dit privacybeleid.
                </p>
                <ul className="list-disc list-inside space-y-1 mt-3 text-sm">
                  <li>Bedrijfsnaam: For The Youth</li>
                  <li>Vestigingsplaats: Rotterdam</li>
                  <li>KvK-nummer: {SITE.kvk}</li>
                  <li>E-mail: {SITE.email}</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  2. Persoonsgegevens die wij verwerken
                </h2>
                <p>
                  Wij verwerken persoonsgegevens die u zelf aan ons verstrekt,
                  bijvoorbeeld via het contactformulier, e-mail of telefonisch
                  contact. Dit betreft onder meer:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-3 text-sm">
                  <li>Naam</li>
                  <li>E-mailadres</li>
                  <li>Telefoonnummer (indien verstrekt)</li>
                  <li>Bedrijfsnaam (indien van toepassing)</li>
                  <li>Inhoud van uw bericht of vraag</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  3. Doeleinden van verwerking
                </h2>
                <p>Wij verwerken uw gegevens voor de volgende doeleinden:</p>
                <ul className="list-disc list-inside space-y-1 mt-3 text-sm">
                  <li>Het beantwoorden van uw vragen en verzoeken</li>
                  <li>Het uitvoeren van onze dienstverlening</li>
                  <li>Het verzenden van offertes en facturen</li>
                  <li>Het nakomen van wettelijke verplichtingen</li>
                  <li>
                    Het verbeteren van onze dienstverlening en website
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  4. Bewaartermijn
                </h2>
                <p>
                  Wij bewaren uw persoonsgegevens niet langer dan strikt
                  noodzakelijk is voor de doeleinden waarvoor zij worden
                  verzameld. Voor zakelijke correspondentie en administratie
                  hanteren wij de wettelijke bewaartermijn van 7 jaar. Overige
                  gegevens worden verwijderd zodra deze niet meer noodzakelijk
                  zijn.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  5. Uw rechten
                </h2>
                <p>
                  Op grond van de Algemene Verordening Gegevensbescherming (AVG)
                  heeft u het recht om:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-3 text-sm">
                  <li>Uw persoonsgegevens in te zien</li>
                  <li>Uw persoonsgegevens te laten corrigeren</li>
                  <li>Uw persoonsgegevens te laten verwijderen</li>
                  <li>Bezwaar te maken tegen de verwerking</li>
                  <li>Uw gegevens over te laten dragen (dataportabiliteit)</li>
                  <li>
                    Een klacht in te dienen bij de Autoriteit Persoonsgegevens
                  </li>
                </ul>
                <p className="mt-3">
                  U kunt een verzoek indienen via{' '}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-brand-green hover:text-brand-green-light transition-colors duration-200"
                  >
                    {SITE.email}
                  </a>
                  . Wij reageren binnen 30 dagen op uw verzoek.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  6. Cookies
                </h2>
                <p>
                  Onze website maakt gebruik van functionele cookies die
                  noodzakelijk zijn voor het goed functioneren van de website.
                  Wij plaatsen geen tracking cookies en delen geen gegevens met
                  derden voor marketingdoeleinden.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  7. Wijzigingen
                </h2>
                <p>
                  Wij behouden ons het recht voor om dit privacybeleid aan te
                  passen. Wijzigingen worden op deze pagina gepubliceerd. Wij
                  raden u aan om dit beleid regelmatig te raadplegen.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  8. Contact
                </h2>
                <p>
                  Heeft u vragen over dit privacybeleid of de verwerking van uw
                  persoonsgegevens? Neem dan contact met ons op:
                </p>
                <ul className="list-none space-y-1 mt-3 text-sm">
                  <li>
                    E-mail:{' '}
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-brand-green hover:text-brand-green-light transition-colors duration-200"
                    >
                      {SITE.email}
                    </a>
                  </li>
                  <li>Telefoon: {SITE.phoneDisplay}</li>
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
