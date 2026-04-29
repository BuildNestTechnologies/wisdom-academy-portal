type Props = { className?: string; animated?: boolean };

// Hand-drawn SVG logo: open book + diya lamp + petals.
export function Logo({ className, animated }: Props) {
  return (
    <svg viewBox="0 0 96 96" className={className} role="img" aria-label="Wisdom Academy logo">
      <defs>
        <linearGradient id="wa-gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="oklch(0.86 0.14 90)" />
          <stop offset="1" stopColor="oklch(0.62 0.16 60)" />
        </linearGradient>
        <radialGradient id="wa-flame" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0" stopColor="#FFE9A8" />
          <stop offset="1" stopColor="#D97706" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* glow */}
      <circle cx="48" cy="22" r="16" fill="url(#wa-flame)" />
      {/* flame */}
      <path d="M48 8c3 4 5 7 5 11a5 5 0 1 1-10 0c0-4 2-7 5-11z" fill="url(#wa-gold)" />
      {/* lamp body */}
      <path d="M34 30 L62 30 Q66 36 56 38 L40 38 Q30 36 34 30 Z" fill="oklch(0.34 0.13 265)" />
      {/* petals from logo */}
      <path d="M48 50 q-14 -6 -18 8 q14 6 18 -8 z" fill="oklch(0.55 0.20 25)" opacity="0.9" />
      <path d="M48 50 q14 -6 18 8 q-14 6 -18 -8 z" fill="oklch(0.78 0.14 80)" opacity="0.9" />
      <path d="M48 50 q-2 14 12 18 q2 -14 -12 -18 z" fill="oklch(0.55 0.16 145)" opacity="0.9" />
      {/* open book */}
      <path
        d="M14 64 Q30 58 48 64 Q66 58 82 64 L82 80 Q66 74 48 80 Q30 74 14 80 Z"
        fill="oklch(0.34 0.13 265)"
        stroke="url(#wa-gold)"
        strokeWidth={animated ? 1.5 : 1}
        className={animated ? "animate-draw" : undefined}
      />
      <path d="M48 64 L48 80" stroke="url(#wa-gold)" strokeWidth="1.2" />
    </svg>
  );
}
