import type { Metadata } from 'next';
import RevealOnScroll from '@/components/RevealOnScroll';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden',
  description:
    'Algemene voorwaarden van For The Youth, milieuadviesbureau gevestigd in Rotterdam.',
};

export default function VoorwaardenPage() {
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
              Algemene Voorwaarden
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
                Deze algemene voorwaarden zijn van toepassing op alle
                aanbiedingen, offertes en overeenkomsten van For The Youth,
                gevestigd in Rotterdam.
              </p>

              {/* Artikel 1 */}
              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  Artikel 1 - Definities
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    <strong className="text-white">Opdrachtnemer:</strong> For
                    The Youth, gevestigd te Rotterdam, ingeschreven bij de Kamer
                    van Koophandel onder nummer {SITE.kvk}.
                  </li>
                  <li>
                    <strong className="text-white">Opdrachtgever:</strong> de
                    natuurlijke of rechtspersoon die met opdrachtnemer een
                    overeenkomst aangaat of wenst aan te gaan.
                  </li>
                  <li>
                    <strong className="text-white">Overeenkomst:</strong> elke
                    afspraak of overeenkomst tussen opdrachtnemer en
                    opdrachtgever, waarvan de algemene voorwaarden integraal
                    onderdeel uitmaken.
                  </li>
                  <li>
                    <strong className="text-white">Diensten:</strong> alle
                    werkzaamheden waartoe opdracht is gegeven, of die door
                    opdrachtnemer uit andere hoofde worden verricht, waaronder
                    milieuadvies, workshops, trainingen, rapportages en
                    beleidsondersteuning.
                  </li>
                </ol>
              </div>

              {/* Artikel 2 */}
              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  Artikel 2 - Toepasselijkheid
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    Deze voorwaarden zijn van toepassing op alle aanbiedingen,
                    offertes, werkzaamheden, overeenkomsten en leveringen van
                    diensten door of namens opdrachtnemer.
                  </li>
                  <li>
                    Afwijking van deze voorwaarden is alleen geldig indien dit
                    uitdrukkelijk schriftelijk is overeengekomen.
                  </li>
                  <li>
                    Eventuele inkoop- of andere voorwaarden van opdrachtgever
                    zijn niet van toepassing, tenzij uitdrukkelijk schriftelijk
                    aanvaard door opdrachtnemer.
                  </li>
                </ol>
              </div>

              {/* Artikel 3 */}
              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  Artikel 3 - Aanbiedingen en offertes
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    Alle aanbiedingen en offertes van opdrachtnemer zijn
                    vrijblijvend, tenzij uitdrukkelijk anders vermeld.
                  </li>
                  <li>
                    Een offerte is geldig gedurende 30 dagen na dagtekening,
                    tenzij anders aangegeven.
                  </li>
                  <li>
                    Opdrachtnemer kan niet aan een aanbod worden gehouden indien
                    de opdrachtgever redelijkerwijs had moeten begrijpen dat het
                    aanbod een kennelijke vergissing of verschrijving bevat.
                  </li>
                </ol>
              </div>

              {/* Artikel 4 */}
              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  Artikel 4 - Uitvoering van de overeenkomst
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    Opdrachtnemer voert de overeenkomst naar beste inzicht en
                    vermogen uit, overeenkomstig de eisen van goed vakmanschap.
                  </li>
                  <li>
                    Opdrachtnemer heeft het recht bepaalde werkzaamheden te
                    laten verrichten door derden, indien dit naar het oordeel
                    van opdrachtnemer wenselijk is voor een goede uitvoering.
                  </li>
                  <li>
                    De opgegeven termijnen voor uitvoering zijn indicatief en
                    gelden niet als fatale termijnen, tenzij uitdrukkelijk
                    anders is overeengekomen.
                  </li>
                  <li>
                    Indien en voor zover een goede uitvoering van de
                    overeenkomst dit vereist, heeft opdrachtnemer het recht
                    bepaalde werkzaamheden te wijzigen of aan te vullen.
                  </li>
                </ol>
              </div>

              {/* Artikel 5 */}
              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  Artikel 5 - Verplichtingen van de opdrachtgever
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    Opdrachtgever draagt er zorg voor dat alle gegevens en
                    informatie die noodzakelijk zijn voor de uitvoering van de
                    opdracht tijdig en volledig aan opdrachtnemer worden
                    verstrekt.
                  </li>
                  <li>
                    Opdrachtgever staat in voor de juistheid, volledigheid en
                    betrouwbaarheid van de verstrekte gegevens.
                  </li>
                  <li>
                    Indien opdrachtgever niet tijdig aan zijn verplichtingen
                    voldoet, is opdrachtnemer gerechtigd de uitvoering van de
                    overeenkomst op te schorten en de hierdoor ontstane kosten
                    aan opdrachtgever in rekening te brengen.
                  </li>
                </ol>
              </div>

              {/* Artikel 6 */}
              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  Artikel 6 - Tarieven en betaling
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    Alle genoemde tarieven zijn exclusief BTW en andere
                    heffingen van overheidswege, tenzij uitdrukkelijk anders
                    vermeld.
                  </li>
                  <li>
                    Betaling dient te geschieden binnen 14 dagen na
                    factuurdatum, tenzij schriftelijk anders overeengekomen.
                  </li>
                  <li>
                    Bij niet-tijdige betaling is opdrachtgever van rechtswege
                    in verzuim en is hij de wettelijke handelsrente
                    verschuldigd over het openstaande bedrag.
                  </li>
                  <li>
                    Opdrachtnemer is gerechtigd de tarieven jaarlijks aan te
                    passen. Wijzigingen worden minimaal 30 dagen van tevoren
                    schriftelijk medegedeeld.
                  </li>
                </ol>
              </div>

              {/* Artikel 7 */}
              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  Artikel 7 - Intellectueel eigendom
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    Alle intellectuele eigendomsrechten op de door
                    opdrachtnemer geproduceerde documenten, rapporten,
                    adviezen, presentaties en overige materialen berusten bij
                    opdrachtnemer, tenzij schriftelijk anders overeengekomen.
                  </li>
                  <li>
                    Opdrachtgever verkrijgt na volledige betaling een
                    niet-exclusief gebruiksrecht op de geleverde materialen
                    voor het doel waarvoor deze zijn verstrekt.
                  </li>
                  <li>
                    Het is opdrachtgever niet toegestaan om zonder
                    voorafgaande schriftelijke toestemming van opdrachtnemer de
                    materialen te verveelvoudigen, openbaar te maken of aan
                    derden ter beschikking te stellen.
                  </li>
                </ol>
              </div>

              {/* Artikel 8 */}
              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  Artikel 8 - Vertrouwelijkheid
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    Beide partijen zijn verplicht tot geheimhouding van alle
                    vertrouwelijke informatie die zij in het kader van de
                    overeenkomst van elkaar of uit andere bron hebben verkregen.
                  </li>
                  <li>
                    Informatie geldt als vertrouwelijk indien dit door de andere
                    partij is medegedeeld of indien dit voortvloeit uit de aard
                    van de informatie.
                  </li>
                  <li>
                    De geheimhoudingsplicht geldt niet voor informatie die
                    reeds openbaar was, onafhankelijk is ontwikkeld, of
                    waarvan openbaarmaking wettelijk verplicht is.
                  </li>
                </ol>
              </div>

              {/* Artikel 9 */}
              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  Artikel 9 - Aansprakelijkheid
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    De aansprakelijkheid van opdrachtnemer is beperkt tot het
                    bedrag dat in het desbetreffende geval onder de
                    beroepsaansprakelijkheidsverzekering wordt uitbetaald,
                    vermeerderd met het eigen risico.
                  </li>
                  <li>
                    Indien de verzekering geen dekking biedt, is de
                    aansprakelijkheid beperkt tot het factuurbedrag van de
                    betreffende opdracht, met een maximum van het over de
                    laatste drie maanden gefactureerde bedrag.
                  </li>
                  <li>
                    Opdrachtnemer is niet aansprakelijk voor indirecte schade,
                    waaronder gevolgschade, gederfde winst, gemiste besparingen
                    of schade door bedrijfsstagnatie.
                  </li>
                  <li>
                    De opdrachtgever vrijwaart opdrachtnemer voor eventuele
                    aanspraken van derden die in verband met de uitvoering van
                    de overeenkomst schade lijden.
                  </li>
                </ol>
              </div>

              {/* Artikel 10 */}
              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  Artikel 10 - Overmacht
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    In geval van overmacht is opdrachtnemer niet gehouden tot
                    het nakomen van enige verplichting jegens opdrachtgever.
                  </li>
                  <li>
                    Onder overmacht wordt verstaan: elke van de wil van
                    opdrachtnemer onafhankelijke omstandigheid die de nakoming
                    van de overeenkomst tijdelijk of blijvend verhindert,
                    waaronder ziekte, overheidsmaatregelen, natuurrampen,
                    pandemie en storingen in de infrastructuur.
                  </li>
                  <li>
                    Indien de overmacht langer dan 60 dagen duurt, zijn beide
                    partijen gerechtigd de overeenkomst te ontbinden, zonder
                    verplichting tot schadevergoeding.
                  </li>
                </ol>
              </div>

              {/* Artikel 11 */}
              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  Artikel 11 - Opzegging en annulering
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    Beide partijen kunnen de overeenkomst schriftelijk opzeggen
                    met inachtneming van een opzegtermijn van 30 dagen.
                  </li>
                  <li>
                    Bij annulering door opdrachtgever is deze gehouden de reeds
                    verrichte werkzaamheden te vergoeden, alsmede eventuele
                    annuleringskosten.
                  </li>
                  <li>
                    Bij annulering van een workshop of training binnen 14 dagen
                    voor de geplande datum is opdrachtgever 50% van het
                    overeengekomen tarief verschuldigd. Bij annulering binnen 7
                    dagen is het volledige tarief verschuldigd.
                  </li>
                </ol>
              </div>

              {/* Artikel 12 */}
              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  Artikel 12 - Klachten
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    Klachten over de verrichte werkzaamheden dienen binnen 14
                    dagen na ontdekking, doch uiterlijk binnen 30 dagen na
                    voltooiing van de betreffende werkzaamheden, schriftelijk
                    te worden gemeld aan opdrachtnemer.
                  </li>
                  <li>
                    Opdrachtnemer zal de klacht zo spoedig mogelijk, doch
                    uiterlijk binnen 30 dagen, inhoudelijk behandelen en de
                    opdrachtgever informeren over de afhandeling.
                  </li>
                  <li>
                    Het indienen van een klacht schort de betalingsverplichting
                    niet op.
                  </li>
                </ol>
              </div>

              {/* Artikel 13 */}
              <div>
                <h2 className="font-display text-[var(--text-xl)] font-bold text-white mb-4">
                  Artikel 13 - Toepasselijk recht en geschillen
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    Op alle overeenkomsten tussen opdrachtnemer en
                    opdrachtgever is Nederlands recht van toepassing.
                  </li>
                  <li>
                    Geschillen zullen in eerste instantie worden voorgelegd aan
                    de bevoegde rechter in het arrondissement Rotterdam.
                  </li>
                  <li>
                    Partijen zullen pas een beroep op de rechter doen nadat zij
                    zich tot het uiterste hebben ingespannen om een geschil in
                    onderling overleg te beslechten.
                  </li>
                </ol>
              </div>

              {/* Contact */}
              <div className="border-t border-grey-100 pt-8 mt-12">
                <p className="text-sm">
                  Heeft u vragen over deze algemene voorwaarden? Neem dan
                  contact met ons op via{' '}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-brand-green hover:text-brand-green-light transition-colors duration-200"
                  >
                    {SITE.email}
                  </a>{' '}
                  of bel{' '}
                  <a
                    href={`tel:${SITE.phone}`}
                    className="text-brand-green hover:text-brand-green-light transition-colors duration-200"
                  >
                    {SITE.phoneDisplay}
                  </a>
                  .
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
