const particles = [
  { size: 4, top: '12%', left: '8%', duration: '7s', delay: '0s' },
  { size: 6, top: '28%', left: '85%', duration: '9s', delay: '1s' },
  { size: 3, top: '55%', left: '15%', duration: '8s', delay: '2s' },
  { size: 5, top: '72%', left: '78%', duration: '10s', delay: '0.5s' },
  { size: 4, top: '40%', left: '50%', duration: '6s', delay: '3s' },
  { size: 7, top: '85%', left: '25%', duration: '11s', delay: '1.5s' },
  { size: 3, top: '18%', left: '65%', duration: '8s', delay: '2.5s' },
  { size: 5, top: '60%', left: '40%', duration: '9s', delay: '0.8s' },
];

export default function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-brand-green/20 animate-particle"
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
        @keyframes particle {
          0%,
          100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) translateX(-8px) scale(0.9);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-25px) translateX(5px) scale(1.1);
            opacity: 0.5;
          }
        }

        .animate-particle {
          animation-name: particle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
