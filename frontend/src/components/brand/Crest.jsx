import React from 'react';

// Love & Legacy crest \u2014 uses the official brand PNG cropped from the ecosystem.
// Renders crisply across the site without an inline approximation.
export const Crest = ({ size = 40, withText = false, className = '', variant = 'shield' }) => {
  // variant:
  //   'shield'   \u2014 crest only (crown + ornamental + purple shield + LL)
  //   'full'     \u2014 crest + "LOVE & LEGACY EXECUTIVE TRANSPORTATION" text below

  const src = variant === 'full' ? '/brand/crest_logo.png' : '/brand/crest_logo_only.png';

  if (variant === 'full') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src={src}
          alt="Love & Legacy Executive Transportation"
          style={{ height: size * 1.6, width: 'auto', display: 'block' }}
          draggable={false}
        />
      </div>
    );
  }

  if (!withText) {
    return (
      <img
        src={src}
        alt="Love & Legacy"
        className={className}
        style={{ height: size * 1.4, width: 'auto', display: 'block' }}
        draggable={false}
      />
    );
  }

  // Shield + accompanying text (used in the header nav)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        style={{ height: size * 1.4, width: 'auto', display: 'block' }}
        draggable={false}
      />
      <div className="flex flex-col leading-none">
        <span className="font-serif text-[18px] tracking-[0.02em] text-[var(--ll-ivory)]">Love &amp; Legacy</span>
        <span className="text-[9px] tracking-[0.34em] text-[var(--ll-gold)] uppercase mt-1.5">Executive Transportation</span>
      </div>
    </div>
  );
};

export default Crest;
