import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ChevronRight, Phone, Quote, Star } from 'lucide-react';
import { SEO } from '@/components/brand/SEO';
import { FadeUp, StaggerGroup } from '@/components/brand/FadeUp';
import { SectionRule } from '@/components/brand/SectionRule';
import { Crest } from '@/components/brand/Crest';
import { BRAND, SERVICES, REVIEWS, IMAGES, ATLANTA_AREAS } from '@/constants/brand';

const PILLARS = [
  {
    headline: 'Privacy, by default.',
    body: 'Names, schedules, destinations. Held in confidence. Always. The most luxurious thing we offer is the silence around your day.',
  },
  {
    headline: 'Early. Without fail.',
    body: 'Ten minutes before pickup. Every run. Every condition. Punctuality is not a goal here — it is the floor on which everything else stands.',
  },
  {
    headline: 'Prepared. Before the door opens.',
    body: 'Vehicle detailed. Cabin cooled. Refreshments stocked. By the time you arrive, the experience has already begun.',
  },
];

const FLEET_SPECS = [
  ['Executive SUV', '2021 Chevrolet Tahoe High Country · up to 6 guests'],
  ['Group / VIP', 'Black Mercedes-Benz Sprinter · up to 14 guests'],
  ['Interior', 'Premium leather · Ambient lighting · Privacy tint'],
  ['Comfort', 'Climate-controlled · Premium audio · Wireless charge'],
  ['Hospitality', 'Chilled water · Phone chargers · Discreet service'],
  ['Standard', 'Detailed before every run'],
];

const ATLANTA_TILES = [
  { src: IMAGES.tahoeExteriorWide, label: 'Executive SUV' },
  { src: IMAGES.tahoeInterior,     label: 'Executive Cabin' },
  { src: IMAGES.sprinterExterior,  label: 'Group Movement' },
  { src: IMAGES.sprinterInterior,  label: 'VIP Lounge' },
];

const INSTAGRAM_TILES = [
  IMAGES.tahoeExteriorWide,  // Black Tahoe wide
  IMAGES.tahoeInterior,      // Executive cabin
  IMAGES.tahoeExterior,      // Tahoe portrait
  IMAGES.sprinterExterior,   // Sprinter exterior
  IMAGES.sprinterInterior,   // Sprinter lounge
  IMAGES.tahoeExteriorWide,  // Tahoe wide encore
];

const heroWordVariants = {
  hidden: { y: 60, opacity: 0 },
  show: (i = 0) => ({
    y: 0, opacity: 1,
    transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.14 * i },
  }),
};

export default function HomePage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, -120]);
  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0.35]);
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.06]);

  return (
    <div data-testid="page-home" className="bg-[var(--ll-ink)]">
      <SEO
        title="Love & Legacy — Atlanta Executive Transportation"
        description="Atlanta’s premium executive transportation. Airport transfers, VIP logistics & chauffeur service. Discretion. Reliability. Presence."
      />

      {/* ============================================================
          1 · HERO  —  Cinematic full-bleed, editorial reveal
         ============================================================ */}
      <section data-testid="home-hero-section" className="relative min-h-[100svh] w-full overflow-hidden bg-[var(--ll-ink)] flex items-end">
        <motion.div style={{ y: heroY, opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
          <div className="absolute inset-0 ll-kenburns">
            <img src={IMAGES.heroPrimary} alt="" className="w-full h-full object-cover" style={{ filter: 'saturate(0.78) contrast(1.10) brightness(0.86)' }} />
          </div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(7,7,10,0.40) 0%, rgba(7,7,10,0.50) 45%, rgba(7,7,10,0.95) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 70%, rgba(63,25,104,0.22) 0%, transparent 55%)' }} />
        </motion.div>

        <div className="relative z-10 ll-container pb-28 md:pb-40 pt-44 w-full">
          <motion.div initial="hidden" animate="show" custom={0} variants={heroWordVariants} className="flex items-center gap-4 mb-9">
            <span className="h-px w-14 bg-[var(--ll-gold)]" />
            <span className="overline">Atlanta · Executive Transportation</span>
          </motion.div>

          <h1 className="text-display text-[44px] sm:text-[68px] lg:text-[104px] leading-[0.94] tracking-[-0.012em] max-w-6xl">
            <motion.span initial="hidden" animate="show" custom={1} variants={heroWordVariants} className="block">Where every journey</motion.span>
            <motion.span initial="hidden" animate="show" custom={2} variants={heroWordVariants} className="block italic font-light text-[var(--ll-gold)]">reflects your standard.</motion.span>
          </h1>

          <motion.p initial="hidden" animate="show" custom={3.4} variants={heroWordVariants} className="mt-12 max-w-xl text-[11px] tracking-[0.30em] uppercase text-[var(--ll-champagne)]">
            Luxury Transportation &nbsp;·&nbsp; Executive Protection &nbsp;·&nbsp; VIP Logistics
          </motion.p>

          <motion.p initial="hidden" animate="show" custom={4} variants={heroWordVariants} className="mt-5 font-serif italic text-[var(--ll-ivory)] text-xl sm:text-2xl">
            Discretion. Reliability. Presence.
          </motion.p>

          <motion.div initial="hidden" animate="show" custom={4.8} variants={heroWordVariants} className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a href={BRAND.hubspotForm} target="_blank" rel="noopener noreferrer" className="ll-cta-primary" data-testid="home-hero-reserve-button">Reserve Your Experience</a>
            <Link to="/fleet" className="ll-cta-ghost" data-testid="home-hero-view-fleet-button">View the Fleet</Link>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute z-10 left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] tracking-[0.40em] uppercase text-[var(--ll-champagne)]">Scroll</span>
          <motion.span
            animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="block w-px h-14 bg-[var(--ll-gold)] origin-top"
          />
        </motion.div>
      </section>

      {/* ============================================================
          2 · TRUST STRIP  —  Editorial markers row
         ============================================================ */}
      <section className="bg-[var(--ll-ink)] border-y border-[rgba(212,175,55,0.14)]">
        <div className="ll-container py-7 md:py-8 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8">
          {[
            ['Est.', '20+ Years of Service'],
            ['Coverage', 'Atlanta · 24 / 7'],
            ['Standard', 'Licensed · Insured · Certified'],
            ['Rating', '5.0 · Google Reviewed'],
          ].map(([label, value]) => (
            <div key={label} className="flex items-baseline gap-3">
              <span className="editorial-num text-[14px]">·</span>
              <div>
                <div className="text-[9px] tracking-[0.34em] uppercase text-[var(--ll-champagne)] opacity-70">{label}</div>
                <div className="text-[12px] tracking-[0.16em] uppercase text-[var(--ll-ivory)] mt-1.5">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          3 · THREE PILLARS  —  Editorial, no card chrome
         ============================================================ */}
      <section data-testid="home-pillars-section" className="ll-section bg-[var(--ll-ink)] ll-noise">
        <div className="ll-container">
          <FadeUp className="max-w-3xl">
            <div className="overline">— Our Standard</div>
            <h2 className="text-display text-4xl sm:text-5xl lg:text-[68px] mt-5 leading-[0.98] text-balance">
              Three commitments. <span className="italic font-light text-[var(--ll-gold)]">Held without exception.</span>
            </h2>
          </FadeUp>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {PILLARS.map((p, i) => (
              <FadeUp key={p.headline} delay={i * 0.08}>
                <div className="relative">
                  <div className="flex items-baseline gap-5 mb-7">
                    <span className="editorial-num text-3xl">{String(i + 1).padStart(2, '0')}</span>
                    <span className="h-px flex-1 bg-[rgba(212,175,55,0.30)]" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-[30px] leading-[1.10] text-[var(--ll-ivory)]">{p.headline}</h3>
                  <p className="mt-6 text-[15px] text-white/72 leading-[1.85] font-light">{p.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4 · SERVICES  —  Editorial 6-tile grid w/ big numerals
         ============================================================ */}
      <section data-testid="home-services-section" className="ll-section bg-[var(--ll-ink-2)] relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 80% 0%, rgba(63,25,104,0.22) 0%, transparent 50%)' }} />
        <div className="ll-container relative">
          <FadeUp>
            <div className="ll-divider-fancy mb-10">
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M6 1 L11 6 L6 11 L1 6 Z" stroke="#D4AF37" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <div className="overline">— Services</div>
              <h2 className="text-display text-4xl sm:text-5xl lg:text-[68px] mt-5 leading-[0.98] text-balance">
                Every journey. <span className="italic font-light text-[var(--ll-gold)]">Every standard.</span>
              </h2>
              <p className="mt-7 text-white/65 font-light max-w-xl mx-auto leading-[1.85]">
                The full spectrum of executive transportation — curated for the clients who refuse to compromise on how they arrive.
              </p>
            </div>
          </FadeUp>

          <StaggerGroup className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-0 border-t border-[rgba(212,175,55,0.12)] border-l border-l-[rgba(212,175,55,0.12)]">
            {SERVICES.map((s, i) => (
              <FadeUp key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  data-testid="service-tile"
                  className="group relative block border-r border-b border-[rgba(212,175,55,0.12)] px-8 py-12 md:px-10 md:py-14 transition-all duration-700 hover:bg-[rgba(63,25,104,0.20)] min-h-[280px]"
                >
                  <div className="flex items-baseline justify-between mb-10">
                    <span className="editorial-num text-[36px] leading-none transition-all duration-500 group-hover:text-[var(--ll-gold-bright)]">{String(i + 1).padStart(2, '0')}</span>
                    <ArrowUpRight size={16} className="text-[var(--ll-champagne)] opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:text-[var(--ll-gold)] group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <h3 className="font-serif text-[26px] sm:text-[30px] leading-[1.12] text-[var(--ll-ivory)] mb-4">{s.name}</h3>
                  <p className="text-[13.5px] text-white/65 leading-[1.85] font-light">{s.short}</p>
                  <span className="absolute bottom-0 left-0 h-px bg-[var(--ll-gold)] transition-all duration-700 ease-out w-0 group-hover:w-full" />
                </Link>
              </FadeUp>
            ))}
          </StaggerGroup>

          <FadeUp className="mt-20 text-center">
            <Link to="/services" className="ll-link-gold">Explore All Services <ChevronRight size={14} /></Link>
          </FadeUp>
        </div>
      </section>

      {/* ============================================================
          5 · FLEET FEATURE  —  Cinematic vehicle with spec table
         ============================================================ */}
      <section data-testid="home-fleet-feature-section" className="ll-section bg-[var(--ll-ink)] relative">
        <div className="ll-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <FadeUp className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative overflow-hidden aspect-[16/11] bg-[var(--ll-ink-2)]">
                <div className="absolute inset-0 ll-kenburns">
                  <img
                    src={IMAGES.tahoeExteriorWide}
                    alt="Black Chevrolet Tahoe High Country — Love & Legacy executive fleet"
                    className="w-full h-full object-cover"
                    style={{ filter: 'saturate(0.88) contrast(1.06) brightness(0.94)' }}
                  />
                </div>
                <div className="absolute inset-0 ll-img-overlay-strong" />
                <div className="absolute left-6 top-6 right-6 flex items-center justify-between text-[10px] tracking-[0.30em] uppercase text-[var(--ll-champagne)]">
                  <span>The Vehicle</span>
                  <span className="editorial-num">01</span>
                </div>
                <div className="absolute left-6 bottom-6 right-6 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] tracking-[0.30em] uppercase text-[var(--ll-champagne)] opacity-80">Atlanta · ATL</div>
                    <div className="font-serif italic text-[var(--ll-gold)] text-xl mt-2">Tahoe High Country</div>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp className="lg:col-span-5 order-1 lg:order-2">
              <div className="overline">— The Fleet</div>
              <h2 className="text-display text-4xl sm:text-5xl lg:text-[58px] mt-5 leading-[0.98] text-balance">
                Built for the<br/>
                <span className="italic font-light text-[var(--ll-gold)]">arrival.</span>
              </h2>
              <p className="mt-8 text-white/75 leading-[1.85] font-light">
                A meticulously maintained executive fleet — the 2021 Chevrolet Tahoe High Country for solo and small-party movement, and the black executive Mercedes-Benz Sprinter for group transport. Detailed before every run. Stocked without ever having to ask.
              </p>

              <dl className="mt-10 divide-y divide-[rgba(212,175,55,0.14)] border-t border-b border-[rgba(212,175,55,0.14)]">
                {FLEET_SPECS.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-6 py-4">
                    <dt className="text-[10px] tracking-[0.30em] uppercase text-[var(--ll-champagne)] shrink-0">{k}</dt>
                    <dd className="text-[14px] text-[var(--ll-ivory)]/90 text-right font-light">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-12 flex flex-wrap gap-5">
                <Link to="/fleet" className="ll-cta-primary">View the Fleet</Link>
                <a href={BRAND.hubspotForm} target="_blank" rel="noopener noreferrer" className="ll-cta-ghost">Reserve</a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ============================================================
          6 · REVIEWS  —  Featured quote + supporting cards
         ============================================================ */}
      <section data-testid="home-reviews-section" className="ll-section relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0E0E12 0%, #1B0E2F 50%, #0E0E12 100%)' }}>
        <div className="absolute inset-0 ll-vignette" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(63,25,104,0.35) 0%, transparent 60%)' }} />
        <div className="ll-container relative">
          <FadeUp className="text-center max-w-3xl mx-auto">
            <div className="overline">— Reviews</div>
            <h2 className="text-display text-4xl sm:text-5xl lg:text-[68px] mt-5 leading-[0.98] text-balance">
              Five stars is <span className="italic font-light text-[var(--ll-gold)]">our floor.</span>
            </h2>
          </FadeUp>

          {/* Featured quote */}
          <FadeUp delay={0.1} className="mt-20 max-w-4xl mx-auto text-center">
            <Quote size={36} className="text-[var(--ll-gold)] opacity-50 mx-auto" />
            <blockquote className="mt-8 font-serif text-[26px] sm:text-[34px] lg:text-[42px] leading-[1.25] text-[var(--ll-ivory)] italic font-light">
              “{REVIEWS[1].quote}”
            </blockquote>
            <div className="mt-10 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[var(--ll-gold)]" />
              <div className="text-center">
                <div className="font-serif text-lg text-[var(--ll-ivory)]">{REVIEWS[1].name}</div>
                <div className="text-[10px] tracking-[0.30em] uppercase text-[var(--ll-champagne)] mt-1">{REVIEWS[1].role}</div>
              </div>
              <span className="h-px w-10 bg-[var(--ll-gold)]" />
            </div>
          </FadeUp>

          {/* Supporting reviews carousel */}
          <div data-testid="reviews-carousel" className="mt-24 -mx-4 sm:mx-0 overflow-x-auto ll-no-scrollbar">
            <div className="flex gap-5 px-4 sm:px-0 snap-x snap-mandatory pb-2">
              {REVIEWS.filter((_, i) => i !== 1).map((r) => (
                <article key={r.name} data-testid="review-card" className="snap-start shrink-0 w-[84%] sm:w-[400px] border border-[rgba(212,175,55,0.18)] bg-[rgba(7,7,10,0.45)] backdrop-blur-sm p-8">
                  <div className="flex items-center gap-1 text-[var(--ll-gold)]">
                    {Array.from({ length: r.stars }).map((_, i) => <Star key={i} size={14} fill="#D4AF37" stroke="#D4AF37" />)}
                  </div>
                  <p className="mt-6 font-serif italic text-[18px] leading-[1.55] text-[var(--ll-ivory)] font-light">“{r.quote}”</p>
                  <div className="mt-8 ll-rule-thin" />
                  <div className="mt-5 flex items-baseline justify-between">
                    <span className="font-serif text-base text-[var(--ll-ivory)]">{r.name}</span>
                    <span className="text-[9px] tracking-[0.30em] uppercase text-[var(--ll-champagne)]">{r.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <FadeUp className="mt-16 flex flex-wrap items-center justify-center gap-6">
            <Link to="/reviews" className="ll-cta-ghost">Read All Reviews</Link>
            <a href="https://g.page/r/love-legacy/review" target="_blank" rel="noreferrer" className="ll-link-gold">Leave a Review <ChevronRight size={14} /></a>
          </FadeUp>
        </div>
      </section>

      {/* ============================================================
          7 · BRAND PROMISE  —  Massive editorial statement
         ============================================================ */}
      <section data-testid="home-brand-promise-section" className="ll-section bg-[var(--ll-ink)] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <img
            src={IMAGES.logoMaster}
            alt=""
            className="opacity-[0.06] max-w-[820px] w-[85vw] h-auto"
            style={{ filter: 'saturate(0.6) brightness(1.4)' }}
            draggable={false}
          />
        </div>
        <div className="ll-container relative">
          <FadeUp className="text-center max-w-4xl mx-auto">
            <div className="ll-divider-fancy mb-10">
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M6 1 L11 6 L6 11 L1 6 Z" stroke="#D4AF37" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <div className="overline">— Our Promise</div>
            <h2 className="text-display text-5xl sm:text-6xl lg:text-[88px] mt-7 leading-[0.94] text-balance">
              Your journey.<br/>
              <span className="italic font-light text-[var(--ll-gold)]">Our priority.</span>
            </h2>
            <p className="mt-12 text-[17px] sm:text-[19px] text-white/78 leading-[1.85] font-light max-w-2xl mx-auto">
              Love &amp; Legacy was built on a simple belief — that every client deserves to be transported with the same care, precision, and excellence that defines every other room they walk into. We are not a rideshare. We are not a commodity. We are a commitment.
            </p>
            <p className="mt-12 font-serif italic text-[var(--ll-gold)] text-2xl sm:text-3xl">
              From the first booking to the final mile.
            </p>
            <div className="mt-14">
              <Link to="/experience" className="ll-cta-primary">Begin Your Experience</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============================================================
          8 · ATLANTA IDENTITY  —  Editorial collage 1+3
         ============================================================ */}
      <section data-testid="home-atlanta-identity-section" className="ll-section bg-[var(--ll-ink-2)]">
        <div className="ll-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <FadeUp className="lg:col-span-5">
              <div className="overline">— Atlanta</div>
              <h2 className="text-display text-4xl sm:text-5xl lg:text-[60px] mt-5 leading-[0.98] text-balance">
                Built in Atlanta.<br/>
                <span className="italic font-light text-[var(--ll-gold)]">Built for Atlanta.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1} className="lg:col-span-7">
              <p className="text-white/72 leading-[1.85] font-light text-[15px] sm:text-base">
                We know every terminal. Every business district. Every hotel entrance. Every event venue. Atlanta is not just our market — it is our home. We represent it with the standard it deserves.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-[11px] tracking-[0.28em] uppercase text-[var(--ll-champagne)]">
                {ATLANTA_AREAS.map((a) => <span key={a}>{a}</span>)}
              </div>
            </FadeUp>
          </div>

          <StaggerGroup className="grid grid-cols-12 grid-rows-2 gap-3 md:gap-4 h-[520px] sm:h-[640px]">
            <FadeUp className="col-span-12 sm:col-span-7 row-span-2">
              <div className="relative w-full h-full overflow-hidden ll-img-overlay group">
                <div className="absolute inset-0 ll-kenburns">
                  <img src={ATLANTA_TILES[0].src} alt="Atlanta downtown" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" style={{ filter: 'saturate(0.82) contrast(1.08)' }} />
                </div>
                <div className="absolute left-5 bottom-5 z-10 text-[10px] tracking-[0.28em] uppercase text-[var(--ll-champagne)]">{ATLANTA_TILES[0].label}</div>
              </div>
            </FadeUp>
            {ATLANTA_TILES.slice(1).map((tile) => (
              <FadeUp key={tile.label} className="col-span-12 sm:col-span-5 row-span-1 sm:[&:nth-child(2)]:col-span-5 sm:[&:nth-child(2)]:row-span-1">
                <div className="relative w-full h-full overflow-hidden ll-img-overlay group min-h-[180px]">
                  <img src={tile.src} alt={`Atlanta — ${tile.label}`} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" style={{ filter: 'saturate(0.82) contrast(1.08)' }} />
                  <div className="absolute left-4 bottom-4 z-10 text-[10px] tracking-[0.28em] uppercase text-[var(--ll-champagne)]">{tile.label}</div>
                </div>
              </FadeUp>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============================================================
          9 · INSTAGRAM STRIP  —  Dark editorial, no ivory break
         ============================================================ */}
      <section data-testid="home-instagram-section" className="ll-section-tight bg-[var(--ll-ink)] border-t border-[rgba(212,175,55,0.12)]">
        <div className="ll-container">
          <FadeUp className="flex flex-col sm:flex-row sm:items-end justify-between gap-7 mb-10">
            <div>
              <div className="overline">— Follow the Standard</div>
              <h2 className="text-display text-3xl sm:text-4xl lg:text-[44px] mt-4 leading-[1.0]">@loveandlegacy<span className="text-[var(--ll-gold)]">.</span>transport</h2>
            </div>
            <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="ll-link-gold self-start sm:self-end">Follow on Instagram <ChevronRight size={14} /></a>
          </FadeUp>
          <StaggerGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
            {INSTAGRAM_TILES.map((src, i) => (
              <FadeUp key={i}>
                <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="relative block aspect-square overflow-hidden ll-img-overlay group border border-[rgba(212,175,55,0.08)]">
                  <img src={src} alt="Love & Legacy moment" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" style={{ filter: 'saturate(0.82) contrast(1.10)' }} />
                  <span className="absolute inset-0 bg-[var(--ll-purple)] opacity-0 group-hover:opacity-25 transition-opacity duration-700" />
                </a>
              </FadeUp>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============================================================
          10 · FINAL CTA  —  Cinematic close
         ============================================================ */}
      <section data-testid="home-final-cta-section" className="relative ll-section bg-[var(--ll-ink)] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ll-kenburns">
            <img src={IMAGES.heroAlt} alt="" className="w-full h-full object-cover opacity-40" style={{ filter: 'saturate(0.72) contrast(1.10)' }} />
          </div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(7,7,10,0.78) 0%, rgba(7,7,10,0.92) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(63,25,104,0.30) 0%, transparent 65%)' }} />
        </div>
        <div className="relative ll-container text-center max-w-4xl mx-auto">
          <FadeUp>
            <div className="ll-divider-fancy mb-10">
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M6 1 L11 6 L6 11 L1 6 Z" stroke="#D4AF37" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <div className="overline">— Reserve</div>
            <h2 className="text-display text-5xl sm:text-6xl lg:text-[96px] mt-7 leading-[0.92] text-balance">
              Your next journey<br/>
              <span className="italic font-light text-[var(--ll-gold)]">starts here.</span>
            </h2>
            <p className="mt-10 text-[11px] tracking-[0.30em] uppercase text-[var(--ll-champagne)]">Available 24 Hours · 7 Days · Every Occasion</p>
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
              <a href={BRAND.hubspotForm} target="_blank" rel="noopener noreferrer" className="ll-cta-primary">Reserve Your Experience</a>
              <a href={`tel:${BRAND.phoneTel}`} className="ll-cta-ghost inline-flex items-center gap-2"><Phone size={13} /> {BRAND.phone}</a>
            </div>
            <a href={BRAND.hubspotForm} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex ll-link-gold">Corporate Inquiry <ChevronRight size={14} /></a>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
