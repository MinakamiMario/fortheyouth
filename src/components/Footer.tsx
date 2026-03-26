'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { SITE, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();
  const contactRef = useRef<HTMLDivElement>(null);
  const contactInView = useInView(contactRef, { once: true, margin: '-40px' });
  const infoRef = useRef<HTMLDivElement>(null);
  const infoInView = useInView(infoRef, { once: true, margin: '-40px' });

  return (
    <footer className="relative bg-brand-panel border-t border-grey-100">
      {/* Animated shimmer line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px overflow-hidden"
        aria-hidden="true"
      >
        <div className="footer-shimmer-line h-full" />
      </div>

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
                  className="text-[var(--color-text-muted)] text-sm hover:text-brand-green transition-colors duration-200 hover:[text-shadow:0_0_8px_rgba(82,183,136,0.4)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-[var(--color-text-muted)] text-sm hover:text-brand-green transition-colors duration-200 hover:[text-shadow:0_0_8px_rgba(82,183,136,0.4)]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Info */}
        <div ref={infoRef}>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
            Informatie
          </h3>
          <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
            <li>
              <Link
                href="/privacy"
                className="hover:text-brand-green transition-colors duration-200 hover:[text-shadow:0_0_8px_rgba(82,183,136,0.4)]"
              >
                Privacybeleid
              </Link>
            </li>
            <li>
              <Link
                href="/voorwaarden"
                className="hover:text-brand-green transition-colors duration-200 hover:[text-shadow:0_0_8px_rgba(82,183,136,0.4)]"
              >
                Voorwaarden
              </Link>
            </li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={infoInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              KvK: {SITE.kvk}
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={infoInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              BTW: {SITE.btw}
            </motion.li>
          </ul>
        </div>

        {/* Column 4: Contact with staggered bounce-in */}
        <div ref={contactRef}>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
            Contact
          </h3>
          <ul className="space-y-3">
            {[
              {
                href: SITE.whatsapp,
                external: true,
                icon: <WhatsAppIcon className="w-4 h-4" />,
                label: 'WhatsApp',
                ariaLabel: 'WhatsApp',
              },
              {
                href: `tel:${SITE.phone}`,
                external: false,
                icon: <Phone className="w-4 h-4" />,
                label: SITE.phoneDisplay,
                ariaLabel: 'Bel ons',
              },
              {
                href: `mailto:${SITE.email}`,
                external: false,
                icon: <Mail className="w-4 h-4" />,
                label: SITE.email,
                ariaLabel: 'E-mail',
              },
            ].map((item, i) => (
              <motion.li
                key={item.ariaLabel}
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={
                  contactInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : {}
                }
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-brand-green transition-colors duration-200 hover:[text-shadow:0_0_8px_rgba(82,183,136,0.4)]"
                  aria-label={item.ariaLabel}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </motion.li>
            ))}
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

      <style jsx>{`
        @keyframes shimmerLine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .footer-shimmer-line {
          background: linear-gradient(
            90deg,
            transparent 0%,
            transparent 30%,
            rgba(82, 183, 136, 0.5) 50%,
            transparent 70%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmerLine 4s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-shimmer-line {
            animation: none;
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(82, 183, 136, 0.3) 50%,
              transparent 100%
            );
            background-size: 100% 100%;
          }
        }
      `}</style>
    </footer>
  );
}
