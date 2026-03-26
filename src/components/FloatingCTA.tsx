'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail } from 'lucide-react';

export default function FloatingCTA() {
  const pathname = usePathname();

  /* Hide on contact page */
  if (pathname === '/contact') return null;

  return (
    <Link
      href="/contact"
      className="fixed bottom-6 left-6 z-40 inline-flex items-center gap-2 px-5 py-3 bg-brand-dark/90 backdrop-blur-md border border-brand-green/30 rounded-full font-display text-xs font-bold uppercase tracking-wider text-brand-green hover:bg-brand-green hover:text-brand-dark hover:border-brand-green transition-all duration-300 shadow-lg hover:shadow-glow-green"
      style={{ boxShadow: 'var(--shadow-lg)' }}
      aria-label="Neem contact op"
    >
      <Mail className="w-4 h-4" />
      <span className="hidden sm:inline">Contact</span>
    </Link>
  );
}
