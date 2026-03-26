const particles = [
  { size: 4, top: '8%', left: '6%', duration: '7s', delay: '0s', glow: true },
  { size: 6, top: '15%', left: '82%', duration: '9s', delay: '1s', glow: false },
  { size: 3, top: '25%', left: '22%', duration: '8s', delay: '2s', glow: true },
  { size: 7, top: '35%', left: '68%', duration: '11s', delay: '0.5s', glow: false },
  { size: 5, top: '45%', left: '45%', duration: '6s', delay: '3s', glow: true },
  { size: 8, top: '55%', left: '12%', duration: '10s', delay: '1.5s', glow: false },
  { size: 3, top: '62%', left: '75%', duration: '8.5s', delay: '2.5s', glow: true },
  { size: 5, top: '72%', left: '38%', duration: '9.5s', delay: '0.8s', glow: false },
  { size: 4, top: '80%', left: '88%', duration: '7.5s', delay: '1.8s', glow: true },
  { size: 6, top: '18%', left: '52%', duration: '10.5s', delay: '2.2s', glow: false },
  { size: 3, top: '48%', left: '92%', duration: '8s', delay: '3.5s', glow: true },
  { size: 5, top: '88%', left: '58%', duration: '9s', delay: '0.3s', glow: false },
];

export default function GlowParticles() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className={`absolute rounded-full glow-particle ${p.glow ? 'glow-particle--pulse' : ''}`}
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      <style jsx>{`
        .glow-particle {
          background: rgba(82, 183, 136, 0.5);
          box-shadow: 0 0 8px 2px rgba(82, 183, 136, 0.3);
          animation-name: glow-float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }

        .glow-particle--pulse {
          animation-name: glow-float, glow-pulse;
        }

        @keyframes glow-float {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.35;
          }
          20% {
            transform: translate3d(12px, -18px, 0) scale(1.15);
            opacity: 0.6;
          }
          40% {
            transform: translate3d(-8px, -28px, 0) scale(0.9);
            opacity: 0.45;
          }
          60% {
            transform: translate3d(6px, -15px, 0) scale(1.1);
            opacity: 0.55;
          }
          80% {
            transform: translate3d(-10px, -22px, 0) scale(0.95);
            opacity: 0.4;
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            box-shadow: 0 0 8px 2px rgba(82, 183, 136, 0.3);
          }
          50% {
            box-shadow: 0 0 16px 6px rgba(82, 183, 136, 0.5);
          }
        }

        .glow-particle--pulse {
          animation-duration: inherit, 3s;
          animation-delay: inherit, 0s;
          animation-timing-function: ease-in-out, ease-in-out;
          animation-iteration-count: infinite, infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .glow-particle {
            animation: none !important;
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
