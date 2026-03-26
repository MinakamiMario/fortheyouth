interface AnimatedGradientProps {
  className?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
}

const opacityMap = {
  subtle: 0.12,
  medium: 0.22,
  strong: 0.35,
};

export default function AnimatedGradient({
  className = '',
  intensity = 'subtle',
}: AnimatedGradientProps) {
  const opacity = opacityMap[intensity];

  return (
    <>
      <div
        className={`animated-gradient pointer-events-none absolute inset-0 overflow-hidden ${className}`}
        style={{ opacity }}
        aria-hidden="true"
      >
        {/* Primary orb */}
        <div className="aurora-orb aurora-orb--1" />
        {/* Secondary orb */}
        <div className="aurora-orb aurora-orb--2" />
        {/* Tertiary orb */}
        <div className="aurora-orb aurora-orb--3" />
      </div>

      <style jsx>{`
        .aurora-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          will-change: transform;
        }

        .aurora-orb--1 {
          width: 60%;
          height: 60%;
          top: -15%;
          left: -10%;
          background: radial-gradient(
            circle,
            rgba(82, 183, 136, 0.5) 0%,
            transparent 70%
          );
          animation: aurora-drift-1 12s ease-in-out infinite alternate;
        }

        .aurora-orb--2 {
          width: 50%;
          height: 50%;
          bottom: -10%;
          right: -10%;
          background: radial-gradient(
            circle,
            rgba(45, 106, 79, 0.4) 0%,
            transparent 70%
          );
          animation: aurora-drift-2 15s ease-in-out infinite alternate;
        }

        .aurora-orb--3 {
          width: 40%;
          height: 40%;
          top: 30%;
          left: 40%;
          background: radial-gradient(
            circle,
            rgba(149, 213, 178, 0.3) 0%,
            transparent 70%
          );
          animation: aurora-drift-3 18s ease-in-out infinite alternate;
        }

        @keyframes aurora-drift-1 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          100% {
            transform: translate3d(8%, 12%, 0) scale(1.1);
          }
        }

        @keyframes aurora-drift-2 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          100% {
            transform: translate3d(-10%, -8%, 0) scale(1.15);
          }
        }

        @keyframes aurora-drift-3 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          100% {
            transform: translate3d(6%, -10%, 0) scale(0.9);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .aurora-orb {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}
