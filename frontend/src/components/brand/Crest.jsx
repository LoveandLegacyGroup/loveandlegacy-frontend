import React from 'react';

// Inline luxury crest SVG — gold L on shield with crown, no external images required.
export const Crest = ({ size = 36, withText = false, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E9CF6E" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#A1812C" />
          </linearGradient>
        </defs>
        {/* Crown */}
        <path d="M16 16 L22 10 L26 14 L32 8 L38 14 L42 10 L48 16 L46 22 L18 22 Z" fill="url(#goldGrad)" stroke="#D4AF37" strokeWidth="0.6"/>
        <circle cx="32" cy="6" r="1.6" fill="#D4AF37" />
        {/* Shield */}
        <path d="M16 24 L48 24 L48 38 C48 48 40 54 32 58 C24 54 16 48 16 38 Z" fill="#4B1E78" stroke="url(#goldGrad)" strokeWidth="1.4"/>
        {/* L monogram */}
        <path d="M25 32 L25 46 L40 46" stroke="url(#goldGrad)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* small decorative dot */}
        <circle cx="32" cy="40" r="1.2" fill="#D4AF37" />
      </svg>
      {withText && (
        <div className="flex flex-col leading-none">
          <span className="font-serif text-[18px] tracking-[0.04em] text-[var(--ll-ivory)]">Love &amp; Legacy</span>
          <span className="text-[9px] tracking-[0.32em] text-[var(--ll-gold)] uppercase mt-1">Executive Transportation</span>
        </div>
      )}
    </div>
  );
};

export default Crest;
