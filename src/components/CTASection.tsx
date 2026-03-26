import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function CTASection() {
  return (
    <RevealOnScroll>
      <div
        className="glass-green text-center"
        style={{
          padding: 'var(--space-3xl) var(--space-xl)',
          maxWidth: '720px',
          margin: '0 auto',
        }}
      >
        <span className="eyebrow">Samenwerken</span>
        <h2
          className="font-display font-bold text-white"
          style={{
            fontSize: 'var(--text-3xl)',
            marginBottom: 'var(--space-md)',
          }}
        >
          Klaar voor Duurzame Verandering?
        </h2>
        <p
          className="leading-relaxed"
          style={{
            fontSize: 'var(--text-base)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-lg)',
            maxWidth: '480px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Neem vandaag nog contact op en ontdek hoe wij uw organisatie kunnen
          helpen met duurzaamheid, compliance en bewustwording.
        </p>
        <Link
          href="/contact"
          className="cta__button inline-flex items-center gap-2"
        >
          Neem Contact Op
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </RevealOnScroll>
  );
}
