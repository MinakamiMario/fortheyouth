'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      setScrolled(y > 50);
      setScrollY(y);
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

  /* Dynamic glassmorphism intensity */
  const blurAmount = Math.min(scrollY / 5, 20);
  const bgOpacity = Math.min(0.3 + scrollY / 300, 0.85);

  /* Logo scale based on scroll */
  const logoScale = scrolled ? 0.9 : 1.0;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: `rgba(27, 42, 31, ${bgOpacity})`,
        backdropFilter: `blur(${blurAmount}px)`,
        WebkitBackdropFilter: `blur(${blurAmount}px)`,
        boxShadow: scrolled
          ? '0 4px 30px rgba(0, 0, 0, 0.15)'
          : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(82, 183, 136, 0.08)'
          : '1px solid transparent',
      }}
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
        {/* Logo with scale on scroll */}
        <Link href="/" aria-label="For The Youth - Home" className="shrink-0">
          <Image
            src="/images/logo-fty.jpeg"
            alt="For The Youth logo"
            width={48}
            height={48}
            className="rounded-lg transition-transform duration-300"
            style={{ transform: `scale(${logoScale})` }}
            priority
          />
        </Link>

        {/* Desktop Navigation with animated underline */}
        <nav
          className="hidden lg:flex items-center justify-center gap-8"
          aria-label="Hoofdnavigatie"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-display text-sm font-medium tracking-wide uppercase transition-colors duration-200 group ${
                  isActive
                    ? 'text-brand-green'
                    : 'text-[var(--color-text-secondary)] hover:text-white'
                }`}
              >
                {link.label}

                {/* Animated underline for active link */}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-green rounded-full"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                {/* Hover underline that slides in from left */}
                {!isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-green rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
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

      {/* Mobile Overlay with staggered menu items */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-0 z-40 bg-brand-dark/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav
              className="flex flex-col items-center gap-6"
              aria-label="Mobiele navigatie"
            >
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.05,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`font-display text-2xl font-bold tracking-wide uppercase transition-colors duration-200 ${
                        isActive
                          ? 'text-brand-green'
                          : 'text-white hover:text-brand-green-light'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.4,
                delay: NAV_LINKS.length * 0.05 + 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="cta__button mt-4"
              >
                Neem Contact Op
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
