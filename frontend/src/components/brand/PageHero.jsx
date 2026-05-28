import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/constants/brand';

const headlineVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 * i },
  }),
};

export const PageHero = ({ overline, title, accent, subhead, image = IMAGES.heroAlt, breadcrumbs, height = 'min-h-[78svh]' }) => (
  <section className={`relative ${height} flex items-end overflow-hidden bg-[var(--ll-ink)]`} data-testid="page-hero">
    <div className="absolute inset-0">
      <div className="absolute inset-0 ll-kenburns">
        <img src={image} alt="" className="w-full h-full object-cover" style={{ filter: 'saturate(0.78) contrast(1.10) brightness(0.92)' }} />
      </div>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(7,7,10,0.48) 0%, rgba(7,7,10,0.68) 55%, rgba(7,7,10,0.96) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 60%, rgba(63,25,104,0.18) 0%, transparent 60%)' }} />
    </div>
    <div className="relative ll-container pb-20 md:pb-28 pt-40 md:pt-44 w-full">
      {breadcrumbs && (
        <motion.nav initial="hidden" animate="show" custom={0} variants={headlineVariants} aria-label="Breadcrumb" className="flex items-center gap-2 mb-8 text-[10px] tracking-[0.30em] uppercase text-[var(--ll-champagne)]">
          {breadcrumbs.map((b, i) => (
            <React.Fragment key={b.label}>
              {b.to ? <Link to={b.to} className="hover:text-[var(--ll-gold)] transition-colors">{b.label}</Link> : <span className="text-[var(--ll-gold)]">{b.label}</span>}
              {i < breadcrumbs.length - 1 && <ChevronRight size={11} />}
            </React.Fragment>
          ))}
        </motion.nav>
      )}
      <motion.div initial="hidden" animate="show" custom={0.5} variants={headlineVariants} className="flex items-center gap-4 mb-7">
        <span className="h-px w-12 bg-[var(--ll-gold)]" />
        <span className="overline">{overline}</span>
      </motion.div>
      <motion.h1 initial="hidden" animate="show" custom={1} variants={headlineVariants} className="text-display text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.96] tracking-[-0.01em] max-w-5xl text-balance">
        {title}{accent && <> <span className="text-[var(--ll-gold)] italic font-light">{accent}</span></>}
      </motion.h1>
      {subhead && (
        <motion.p initial="hidden" animate="show" custom={2} variants={headlineVariants} className="mt-10 max-w-2xl text-[10px] sm:text-[11px] tracking-[0.30em] uppercase text-[var(--ll-champagne)]">
          {subhead}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
