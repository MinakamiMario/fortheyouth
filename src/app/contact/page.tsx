import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import RevealOnScroll from '@/components/RevealOnScroll';
import ContactForm from '@/components/ContactForm';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Neem contact op met For The Youth voor milieuadvies, workshops of een vrijblijvend gesprek. Wij staan klaar om u te helpen.',
};

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'E-mail',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Phone,
    label: 'Telefoon',
    value: SITE.phoneDisplay,
    href: `tel:${SITE.phone}`,
  },
  {
    icon: MapPin,
    label: 'Locatie',
    value: SITE.location,
    href: undefined,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Neem Contact Op"
        backgroundImage="/images/hero/contact-bg.jpg"
      />

      <section className="py-[var(--space-3xl)]">
        <div
          className="mx-auto px-[var(--container-padding)]"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - Left */}
            <div className="lg:col-span-3">
              <RevealOnScroll>
                <ContactForm />
              </RevealOnScroll>
            </div>

            {/* Contact Info Sidebar - Right */}
            <div className="lg:col-span-2">
              <RevealOnScroll delay={0.15}>
                <div className="lg:sticky lg:top-28 space-y-8">
                  {/* Contact Details */}
                  <div className="glass-green p-8">
                    <h3 className="font-display text-[var(--text-xl)] font-bold mb-6">
                      Contactgegevens
                    </h3>
                    <ul className="space-y-5">
                      {CONTACT_ITEMS.map((item) => {
                        const Icon = item.icon;
                        const content = (
                          <span className="flex items-start gap-4">
                            <span className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                              <Icon className="w-5 h-5 text-brand-green" />
                            </span>
                            <span>
                              <span className="block text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-display font-medium mb-0.5">
                                {item.label}
                              </span>
                              <span className="text-white text-sm">
                                {item.value}
                              </span>
                            </span>
                          </span>
                        );

                        return (
                          <li key={item.label}>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="block hover:opacity-80 transition-opacity duration-200"
                              >
                                {content}
                              </a>
                            ) : (
                              content
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* WhatsApp */}
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-green p-6 flex items-center gap-4 hover:border-[#25D366]/40 transition-colors duration-200 group block"
                  >
                    <span className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/25 transition-colors duration-200">
                      <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                    </span>
                    <span>
                      <span className="block font-display font-bold text-white mb-0.5">
                        WhatsApp
                      </span>
                      <span className="text-sm text-[var(--color-text-muted)]">
                        Stuur ons direct een bericht
                      </span>
                    </span>
                  </a>

                  {/* Availability */}
                  <div className="glass-green p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-5 h-5 text-brand-green" />
                      <h4 className="font-display font-bold text-sm">
                        Bereikbaarheid
                      </h4>
                    </div>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                      Maandag t/m vrijdag van 09:00 tot 17:00. Wij streven
                      ernaar om binnen 24 uur te reageren op uw bericht.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
