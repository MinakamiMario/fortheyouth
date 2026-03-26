'use client';

interface GlowingBorderProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

export default function GlowingBorder({
  children,
  className = '',
  active = false,
}: GlowingBorderProps) {
  return (
    <>
      <div
        className={`glowing-border-wrapper group relative rounded-xl ${active ? 'is-active' : ''} ${className}`}
      >
        {/* Rotating conic gradient border */}
        <div
          className="glowing-border pointer-events-none absolute -inset-[1px] rounded-[inherit] opacity-60 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
        {/* Mask inner area to create border-only effect */}
        <div className="relative z-10 rounded-[inherit]">{children}</div>
      </div>

      <style jsx>{`
        .glowing-border {
          background: conic-gradient(
            from var(--border-angle, 0deg),
            transparent 0%,
            #52b788 20%,
            transparent 40%,
            transparent 60%,
            #52b788 80%,
            transparent 100%
          );
          animation: rotate-border 8s linear infinite;
          mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          padding: 1.5px;
        }

        .glowing-border-wrapper:not(.is-active) .glowing-border {
          opacity: 0;
        }

        .glowing-border-wrapper:not(.is-active):hover .glowing-border {
          opacity: 0.8;
        }

        .glowing-border-wrapper.is-active .glowing-border {
          opacity: 0.7;
        }

        .glowing-border-wrapper.is-active:hover .glowing-border {
          opacity: 1;
          padding: 2px;
        }

        @keyframes rotate-border {
          0% {
            --border-angle: 0deg;
          }
          100% {
            --border-angle: 360deg;
          }
        }

        @property --border-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        @media (prefers-reduced-motion: reduce) {
          .glowing-border {
            animation: none;
            background: conic-gradient(
              from 0deg,
              transparent 0%,
              #52b788 20%,
              transparent 40%,
              transparent 60%,
              #52b788 80%,
              transparent 100%
            );
            opacity: 0.4 !important;
          }
        }
      `}</style>
    </>
  );
}
