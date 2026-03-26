'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import Particles from '@/components/Particles';

const TITLE = 'Duurzaamheid. Compliance. Bewustwording.';
const SUBTITLE =
  'Wij helpen organisaties bij het ontwikkelen en uitvoeren van effectief milieubeleid — van strategisch advies tot inspirerende workshops.';

export default function Hero() {
  const [titleWords, setTitleWords] = useState<string[]>([]);
  const [subtitleWords, setSubtitleWords] = useState<string[]>([]);
  const [visibleTitle, setVisibleTitle] = useState<number>(0);
  const [visibleSubtitle, setVisibleSubtitle] = useState<number>(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const titleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const subtitleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Split text into words on mount */
  useEffect(() => {
    setTitleWords(TITLE.split(' '));
    setSubtitleWords(SUBTITLE.split(' '));
  }, []);

  /* Cascading title reveal */
  useEffect(() => {
    if (titleWords.length === 0) return;

    let i = 0;
    const reveal = () => {
      i++;
      setVisibleTitle(i);
      if (i < titleWords.length) {
        titleTimerRef.current = setTimeout(reveal, 200);
      }
    };

    /* Start after a brief mount delay */
    titleTimerRef.current = setTimeout(reveal, 400);

    return () => {
      if (titleTimerRef.current) clearTimeout(titleTimerRef.current);
    };
  }, [titleWords]);

  /* Cascading subtitle reveal (starts after title finishes) */
  useEffect(() => {
    if (titleWords.length === 0 || subtitleWords.length === 0) return;

    /* Wait for all title words + buffer */
    const titleDuration = 400 + titleWords.length * 200 + 300;

    let i = 0;
    const reveal = () => {
      i++;
      setVisibleSubtitle(i);
      if (i < subtitleWords.length) {
        subtitleTimerRef.current = setTimeout(reveal, 150);
      } else {
        /* Show scroll indicator after subtitle finishes */
        setTimeout(() => setShowScrollIndicator(true), 400);
      }
    };

    subtitleTimerRef.current = setTimeout(reveal, titleDuration);

    return () => {
      if (subtitleTimerRef.current) clearTimeout(subtitleTimerRef.current);
    };
  }, [titleWords, subtitleWords]);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: '100dvh' }}
    >
      {/* Background image */}
      <Image
        src="/images/hero/hero-bg.jpg"
        alt=""
        fill
        priority
        quality={75}
        className="object-cover"
        style={{ opacity: 0.45 }}
        sizes="100vw"
      />

      {/* Dark overlay with branded gradients */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 80%, rgba(45, 106, 79, 0.3) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(82, 183, 136, 0.1) 0%, transparent 50%),
            linear-gradient(180deg, rgba(27, 42, 31, 0.5) 0%, rgba(27, 42, 31, 0.7) 100%)
          `,
        }}
      />

      {/* Particles overlay */}
      <Particles />

      {/* FTY Watermark */}
      <span
        className="absolute inset-0 flex items-center justify-center font-display font-black select-none pointer-events-none"
        aria-hidden="true"
        style={{
          fontSize: 'clamp(12rem, 30vw, 28rem)',
          opacity: 0.06,
          mixBlendMode: 'overlay',
          letterSpacing: '0.05em',
          color: 'white',
        }}
      >
        FTY
      </span>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center w-full"
        style={{
          maxWidth: '900px',
          paddingLeft: 'var(--container-padding)',
          paddingRight: 'var(--container-padding)',
        }}
      >
        {/* Eyebrow */}
        <span
          className="eyebrow mb-6"
          style={{
            opacity: 0,
            animation: 'fadeInUp 0.6s var(--ease-smooth) 0.2s forwards',
          }}
        >
          Strategisch Milieuadvies
        </span>

        {/* Title with cascading word reveal */}
        <h1
          className="font-display font-bold leading-tight"
          style={{ fontSize: 'clamp(1.5rem, 5.5vw, 4.25rem)' }}
        >
          {titleWords.map((word, i) => (
            <span
              key={i}
              className="inline-block mr-[0.3em] transition-all duration-500"
              style={{
                opacity: i < visibleTitle ? 1 : 0,
                transform:
                  i < visibleTitle ? 'translateY(0)' : 'translateY(20px)',
                transitionTimingFunction: 'var(--ease-smooth)',
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Subtitle with cascading word reveal */}
        <p
          className="mt-6 leading-relaxed"
          style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--color-text-secondary)',
            maxWidth: '680px',
          }}
        >
          {subtitleWords.map((word, i) => (
            <span
              key={i}
              className="inline-block mr-[0.25em] transition-all duration-400"
              style={{
                opacity: i < visibleSubtitle ? 1 : 0,
                transform:
                  i < visibleSubtitle ? 'translateY(0)' : 'translateY(12px)',
                transitionTimingFunction: 'var(--ease-smooth)',
              }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-700"
        style={{ opacity: showScrollIndicator ? 1 : 0 }}
      >
        <span
          className="text-[var(--text-xs)] uppercase tracking-widest font-display font-medium"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Scroll
        </span>
        <ChevronDown
          className="w-5 h-5 animate-bounce"
          style={{ color: 'var(--color-brand-green)' }}
        />
      </div>

      {/* Keyframe for initial eyebrow fade */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
