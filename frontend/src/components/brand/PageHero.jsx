import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { FadeUp } from '@/components/brand/FadeUp';
import { Crest } from '@/components/brand/Crest';
import { IMAGES } from '@/constants/brand';

export const PageHero = ({ overline, title, accent, subhead, image = IMAGES.heroAlt, breadcrumbs, height = 'min-h-[70svh]' }) => (
  <section className={`relative ${height} flex items-end overflow-hidden bg-[var(--ll-ink)]`} data-testid="page-hero">
    <div className="absolute inset-0">
      <img src={image} alt="" className="w-full h-full object-cover" style={{ filter: 'saturate(0.85) contrast(1.05)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,11,11,0.55) 0%, rgba(11,11,11,0.75) 60%, rgba(11,11,11,0.95) 100%)' }} />
    </div>
    <div className="relative ll-container pb-16 md:pb-20 pt-36 md:pt-40 w-full">
      {breadcrumbs && (
        <FadeUp>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-6 text-[11px] tracking-[0.18em] uppercase text-[var(--ll-champagne)]">
            {breadcrumbs.map((b, i) => (
              <React.Fragment key={b.label}>
                {b.to ? <Link to={b.to} className="hover:text-[var(--ll-gold)]">{b.label}</Link> : <span className="text-[var(--ll-gold)]">{b.label}</span>}
                {i < breadcrumbs.length - 1 && <ChevronRight size={12} />}
              </React.Fragment>
            ))}
          </nav>
        </FadeUp>
      )}
      <FadeUp>
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-10 bg-[var(--ll-gold)]" />
          <span className="overline">{overline}</span>
        </div>
      </FadeUp>
      <FadeUp delay={0.05}>
        <h1 className="font-serif text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.05] text-balance max-w-5xl">
          {title}{accent && <> <span className="text-[var(--ll-gold)]">{accent}</span></>}
        </h1>
      </FadeUp>
      {subhead && (
        <FadeUp delay={0.12}>
          <p className="mt-6 max-w-2xl text-[var(--ll-champagne)] text-sm tracking-[0.18em] uppercase">{subhead}</p>
        </FadeUp>
      )}
    </div>
  </section>
);

export default PageHero;
