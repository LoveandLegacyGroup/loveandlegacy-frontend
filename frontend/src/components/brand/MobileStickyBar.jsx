import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { BRAND } from '@/constants/brand';

export const MobileStickyBar = () => (
  <div
    data-testid="mobile-sticky-cta-bar"
    className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[rgba(11,11,11,0.95)] backdrop-blur-md border-t border-[rgba(212,175,55,0.30)] pb-[env(safe-area-inset-bottom)]"
  >
    <div className="flex h-16">
      <a
        href={`tel:${BRAND.phoneTel}`}
        data-testid="mobile-sticky-call-button"
        className="flex-1 inline-flex items-center justify-center gap-2 text-[var(--ll-gold)] text-[11px] tracking-[0.24em] uppercase font-semibold border-r border-[rgba(212,175,55,0.20)]"
      >
        <Phone size={14} /> Call Now
      </a>
      <Link
        to="/book"
        data-testid="mobile-sticky-reserve-button"
        className="flex-1 inline-flex items-center justify-center bg-[var(--ll-gold)] text-[var(--ll-ink)] text-[11px] tracking-[0.24em] uppercase font-semibold"
      >
        Reserve
      </Link>
    </div>
  </div>
);

export default MobileStickyBar;
