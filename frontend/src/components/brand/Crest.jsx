import React from 'react';

// Love & Legacy crest — uses the official high-resolution master PNG.
// The logo image already contains crown + filigree + purple shield + LL + ribbon text + stars.
// We render it square with proper padding so it never crops.
export const Crest = ({ size = 56, variant = 'master', className = '' }) => {
  // variant 'master' = full HD logo with everything baked in (preferred)
  // variant 'small'  = lightweight 256px variant for nav
  // variant 'shield' = legacy fallback (kept for backward compat)
  const src =
    variant === 'small'  ? '/brand/logo_256.png' :
    variant === 'shield' ? '/brand/crest_logo_only.png' :
    '/brand/logo_512.png';
  return (
    <img
      src={src}
      alt="Love & Legacy Executive Transportation"
      width={size}
      height={size}
      draggable={false}
      className={`block object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default Crest;
