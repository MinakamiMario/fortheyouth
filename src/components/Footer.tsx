import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { SITE, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-panel border-t border-grey-100">
      {/* Main grid */}
      <div
        className="mx-auto px-[var(--container-padding)] py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4"
        style={{ maxWidth: 'var(--container-max)' }}
      >
        {/* Column 1: Logo + Tagline */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/images/logo-fty.jpeg"
              alt="For The Youth logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
          </Link>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-[260px]">
            Strategisch milieuadvies en inspirerende workshops voor een
            duurzamere toekomst.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
            Navigatie
          </h3>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[var(--color-text-muted)] text-sm hover:text-brand-green transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-[var(--color-text-muted)] text-sm hover:text-brand-green transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Info */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
            Informatie
          </h3>
          <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
            <li>
              <Link
                href="/privacy"
                className="hover:text-brand-green transition-colors duration-200"
              >
                Privacybeleid
              </Link>
            </li>
            <li>
              <Link
                href="/voorwaarden"
                className="hover:text-brand-green transition-colors duration-200"
              >
                Voorwaarden
              </Link>
            </li>
            <li>KvK: {SITE.kvk}</li>
            <li>BTW: {SITE.btw}</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
            Contact
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-brand-green transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-brand-green transition-colors duration-200"
                aria-label="Bel ons"
              >
                <Phone className="w-4 h-4" />
                <span>{SITE.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-brand-green transition-colors duration-200"
                aria-label="E-mail"
              >
                <Mail className="w-4 h-4" />
                <span>{SITE.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-grey-100">
        <div
          className="mx-auto px-[var(--container-padding)] py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          <p className="text-xs text-[var(--color-text-disabled)]">
            &copy; {year} {SITE.name}. Alle rechten voorbehouden.
          </p>

          <p className="text-xs text-[var(--color-text-disabled)]">
            Powered by{' '}
            <a
              href="https://websitemetresultaat.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-green transition-colors duration-200"
            >
              Website Met Resultaat
            </a>
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-brand-green">
        <Link
          href="/contact"
          className="mx-auto flex items-center justify-center gap-2 py-4 px-[var(--container-padding)] font-display font-bold text-sm uppercase tracking-wider text-brand-dark hover:gap-4 transition-all duration-300"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          Neem Contact Op
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </footer>
  );
}
