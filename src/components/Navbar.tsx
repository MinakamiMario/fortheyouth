'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/80 backdrop-blur-xl shadow-lg border-b border-grey-100'
          : 'bg-transparent'
      }`}
    >
      <div
        className="mx-auto grid items-center gap-4 px-[var(--container-padding)]"
        style={{
          maxWidth: 'var(--container-max)',
          gridTemplateColumns: 'auto 1fr auto',
          height: scrolled ? '72px' : '88px',
          transition: 'height var(--transition-base) var(--ease-smooth)',
        }}
      >
        {/* Logo */}
        <Link href="/" aria-label="For The Youth - Home" className="shrink-0">
          <Image
            src="/images/logo-fty.jpeg"
            alt="For The Youth logo"
            width={48}
            height={48}
            className="rounded-lg"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-8" aria-label="Hoofdnavigatie">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-display text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                  isActive
                    ? 'text-brand-green'
                    : 'text-[var(--color-text-secondary)] hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-green rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="cta__button !py-2.5 !px-5 !text-xs !hidden lg:!inline-flex"
          >
            Neem Contact Op
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col justify-center items-center gap-1.5 w-6">
              <span
                className={`block h-0.5 w-full bg-white rounded transition-all duration-300 origin-center ${
                  mobileOpen ? 'rotate-45 translate-y-[4px]' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white rounded transition-all duration-300 origin-center ${
                  mobileOpen ? '-rotate-45 -translate-y-[4px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 z-40 bg-brand-dark/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-6" aria-label="Mobiele navigatie">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-display text-2xl font-bold tracking-wide uppercase transition-colors duration-200 ${
                  isActive ? 'text-brand-green' : 'text-white hover:text-brand-green-light'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className="cta__button mt-4"
        >
          Neem Contact Op
        </Link>
      </div>
    </header>
  );
}
