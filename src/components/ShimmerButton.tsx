import Link from 'next/link';

interface ShimmerButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function ShimmerButton({
  children,
  href,
  className = '',
}: ShimmerButtonProps) {
  return (
    <>
      <Link
        href={href}
        className={`shimmer-btn group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md border-2 border-brand-green bg-brand-green px-8 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-brand-dark transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(82,183,136,0.4)] active:scale-[0.97] ${className}`}
      >
        <span className="relative z-10">{children}</span>
        <span
          className="shimmer-sweep pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
        />
      </Link>

      <style jsx>{`
        .shimmer-sweep {
          background: linear-gradient(
            120deg,
            transparent 0%,
            transparent 30%,
            rgba(255, 255, 255, 0.35) 50%,
            transparent 70%,
            transparent 100%
          );
          background-size: 250% 100%;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .shimmer-sweep {
            animation: none;
            background: transparent;
          }
        }
      `}</style>
    </>
  );
}
