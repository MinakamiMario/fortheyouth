'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(82, 183, 136, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* 404 watermark */}
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black select-none pointer-events-none"
        style={{
          fontSize: 'clamp(10rem, 30vw, 24rem)',
          color: 'rgba(82, 183, 136, 0.05)',
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        404
      </span>

      {/* Content */}
      <div className="relative z-10 text-center px-[var(--container-padding)] max-w-lg mx-auto">
        <span className="eyebrow">Pagina Niet Gevonden</span>
        <h1 className="font-display text-[var(--text-4xl)] font-bold mb-4">
          Deze pagina bestaat niet
        </h1>
        <p className="text-[var(--color-text-secondary)] text-[var(--text-lg)] mb-10 leading-relaxed">
          De pagina die u zoekt is verplaatst, verwijderd of heeft nooit
          bestaan. Ga terug naar de homepage of probeer het opnieuw.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="cta__button">
            <Home className="w-4 h-4" />
            Naar Home
          </Link>

          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-brand-green border-2 border-brand-green/40 rounded-[var(--radius-md)] hover:border-brand-green hover:bg-brand-green/10 transition-all duration-250 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Vorige Pagina
          </button>
        </div>
      </div>
    </section>
  );
}
