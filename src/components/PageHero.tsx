import Image from 'next/image';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '60vh' }}
    >
      {/* Background image (optional) */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          quality={75}
          className="object-cover"
          style={{ opacity: 0.4 }}
          sizes="100vw"
        />
      )}

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 80%, rgba(45, 106, 79, 0.25) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(82, 183, 136, 0.08) 0%, transparent 50%),
            linear-gradient(180deg, rgba(27, 42, 31, 0.45) 0%, rgba(27, 42, 31, 0.65) 100%)
          `,
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center w-full"
        style={{
          maxWidth: '800px',
          paddingLeft: 'var(--container-padding)',
          paddingRight: 'var(--container-padding)',
          paddingTop: 'var(--space-3xl)',
          paddingBottom: 'var(--space-2xl)',
        }}
      >
        <span className="eyebrow">{eyebrow}</span>
        <h1
          className="font-display font-bold text-white"
          style={{ fontSize: 'var(--text-5xl)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-4 leading-relaxed"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
