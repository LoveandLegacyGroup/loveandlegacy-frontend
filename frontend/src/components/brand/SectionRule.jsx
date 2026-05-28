import React from 'react';

export const SectionRule = ({ ornamental = false, className = '' }) => {
  if (ornamental) {
    return (
      <div className={`flex items-center justify-center gap-4 ${className}`}>
        <span className="h-px w-16 bg-[rgba(212,175,55,0.45)]" />
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M7 1 L13 7 L7 13 L1 7 Z" stroke="#D4AF37" strokeWidth="1.1" fill="none"/>
          <circle cx="7" cy="7" r="1.3" fill="#D4AF37"/>
        </svg>
        <span className="h-px w-16 bg-[rgba(212,175,55,0.45)]" />
      </div>
    );
  }
  return <div className={`ll-rule ${className}`} />;
};

export default SectionRule;
