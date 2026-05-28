import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Plane, ShieldCheck, Crown, Briefcase, Star, ChevronRight,
  CheckCircle2, Sparkles, Quote, Instagram, Phone,
} from 'lucide-react';
import { SEO } from '@/components/brand/SEO';
import { FadeUp, StaggerGroup } from '@/components/brand/FadeUp';
import { SectionRule } from '@/components/brand/SectionRule';
import { ServiceTile } from '@/components/brand/ServiceTile';
import { Crest } from '@/components/brand/Crest';
import { BRAND, SERVICES, REVIEWS, IMAGES, ATLANTA_AREAS } from '@/constants/brand';

const SERVICE_ICONS = [Plane, Briefcase, Crown, ShieldCheck, Sparkles, Star];

const PILLARS = [
  {
    icon: ShieldCheck,
    headline: 'Your Privacy Is Sacred',
    body: 'We never disclose client identities, destinations, or schedules. What happens in a Love & Legacy vehicle stays in a Love & Legacy vehicle.',
  },
  {
    icon: Crown,
    headline: 'On Time. Every Time.',
    body: 'We track your flight. We account for traffic. We arrive before you need us. Our punctuality record is not a goal — it is our standard.',
  },
  {
    icon: Sparkles,
    headline: 'The Experience Begins Before You Board',
    body: 'From the moment your driver is assigned, the Love & Legacy standard is in motion. Preparation, professionalism, and presence — before the door opens.',
  },
];

const FLEET_FEATURES = [
  'Premium leather interior',
  'USB charging ports',
  'Privacy-forward tint',
  'Complimentary refreshments',
  'Climate-controlled cabin',
  'Immaculate presentation always',
];

const ATLANTA_GRID = [
  { src: IMAGES.atlantaSkyline, label: 'Downtown' },
  { src: IMAGES.atlantaBuckhead, label: 'Buckhead' },
  { src: IMAGES.atlantaMidtown, label: 'Midtown' },
  { src: IMAGES.atlantaNight, label: 'Skyline at Night' },
];

const INSTAGRAM_TILES = [
  IMAGES.fleetMain, IMAGES.chauffeur, IMAGES.privateJet,
  IMAGES.hotelValet, IMAGES.interior, IMAGES.atlantaSkyline,
];

export default function HomePage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -90]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.55]);

  return (
    <div data-testid="page-home">
      <SEO
        title="Love & Legacy — Atlanta Executive Transportation"
        description="Atlanta's premium executive transportation. Airport transfers, VIP logistics & chauffeur service. Discretion. Reliability. Presence."
      />

      {/* ----------------- 1. HERO ----------------- */}
      <section data-testid="home-hero-section" className="relative min-h-[100svh] w-full overflow-hidden bg-[var(--ll-ink)] flex items-end">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <img src={IMAGES.heroPrimary} alt="Black luxury SUV at night in Atlanta" className="w-full h-full object-cover" style={{ filter: 'saturate(0.85) contrast(1.05)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,11,11,0.55) 0%, rgba(11,11,11,0.65) 50%, rgba(11,11,11,0.92) 100%)' }} />
        </motion.div>

        <div className="relative z-10 ll-container pb-24 md:pb-32 pt-40 w-full">
          <FadeUp>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[var(--ll-gold)]" />
              <span className="overline">ATLANTA • EXECUTIVE TRANSPORTATION</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="font-serif text-[44px] sm:text-[60px] lg:text-[84px] leading-[1.02] tracking-[0.005em] max-w-5xl text-balance">
              Where Every Journey<br />
              <span className="text-[var(--ll-gold)]">Reflects Your Standard.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mt-8 max-w-xl text-base sm:text-lg text-white/85 leading-8">
              Luxury transportation • Executive protection • VIP logistics.<br />
              <span className="text-[var(--ll-champagne)] italic">Discretion. Reliability. Presence.</span>
            </p>
          </FadeUp>
          <FadeUp delay={0.18}>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link to="/book" className="ll-cta-primary" data-testid="home-hero-reserve-button">Reserve Your Experience</Link>
              <Link to="/fleet" className="ll-cta-ghost" data-testid="home-hero-view-fleet-button">View the Fleet</Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.26}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[11px] tracking-[0.22em] uppercase text-[var(--ll-champagne)]">
              <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-[var(--ll-gold)]" /> Licensed</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-[var(--ll-gold)]" /> Insured</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-[var(--ll-gold)]" /> 24 / 7 Concierge</span>
            </div>
          </FadeUp>
        </div>
      </section>

      <SectionRule />

      {/* ----------------- 2. PILLARS ----------------- */}
      <section data-testid="home-pillars-section" className="ll-section bg-[var(--ll-ink)] ll-noise relative">
        <div className="ll-container">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto">
              <div className="overline">— Our Standard —</div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4 leading-[1.15]">The Three Pillars of <span className="text-[var(--ll-gold)]">Love &amp; Legacy</span></h2>
            </div>
          </FadeUp>

          <StaggerGroup className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <FadeUp key={p.headline}>
                  <div className="h-full rounded-lg bg-[var(--ll-ink-2)] border border-[rgba(246,241,230,0.08)] p-8 md:p-10 hover:border-[rgba(212,175,55,0.30)] transition-colors duration-300">
                    <div data-testid="pillar-icon" className="h-16 w-16 rounded-full bg-[var(--ll-purple)] border border-[rgba(212,175,55,0.4)] flex items-center justify-center">
                      <Icon size={26} className="text-[var(--ll-gold)]" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-[28px] mt-7 leading-[1.2]">{p.headline}</h3>
                    <p className="mt-4 text-sm text-white/75 leading-7">{p.body}</p>
                  </div>
                </FadeUp>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <SectionRule />

      {/* ----------------- 3. SERVICES ----------------- */}
      <section data-testid="home-services-section" className="ll-section bg-gradient-to-b from-[var(--ll-ink)] via-[#160C28] to-[var(--ll-ink)] relative">
        <div className="ll-container">
          <FadeUp>
            <SectionRule ornamental className="mb-10" />
            <div className="text-center max-w-2xl mx-auto">
              <div className="overline">— Services —</div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4 leading-[1.15]">Every Journey. <span className="text-[var(--ll-gold)]">Every Standard.</span></h2>
              <p className="mt-5 text-white/75 max-w-xl mx-auto">The full spectrum of executive transportation — curated for the clients who demand more.</p>
            </div>
          </FadeUp>

          <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {SERVICES.map((s, i) => (
              <FadeUp key={s.slug}>
                <ServiceTile
                  icon={SERVICE_ICONS[i]}
                  index={i}
                  title={s.name}
                  blurb={`${s.short} ${s.blurb}`}
                  to={`/services/${s.slug}`}
                  cta="Explore Service"
                />
              </FadeUp>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <SectionRule />

      {/* ----------------- 4. FLEET FEATURE ----------------- */}
      <section data-testid="home-fleet-feature-section" className="ll-section bg-[var(--ll-ink)]">
        <div className="ll-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <FadeUp className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg ll-img-overlay aspect-[16/10]">
              <img src={IMAGES.fleetMain} alt="2021 Chevrolet Tahoe High Country, black on black" className="w-full h-full object-cover" style={{ filter: 'saturate(0.9) contrast(1.05)' }} />
            </div>
          </FadeUp>
          <FadeUp className="lg:col-span-5 order-1 lg:order-2">
            <div className="overline">— The Vehicle —</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] mt-4 leading-[1.15] text-balance">The 2021 Chevrolet Tahoe High Country.</h2>
            <p className="mt-3 text-[var(--ll-gold)] font-serif italic text-lg">Premium. Prepared. Immaculate.</p>
            <p className="mt-6 text-white/80 leading-7">
              Every Love &amp; Legacy journey is made in our meticulously maintained 2021 Chevrolet Tahoe High Country — detailed before every run, stocked with premium amenities, and maintained to a standard that mirrors the level of service our clients receive.
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {FLEET_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/85">
                  <CheckCircle2 size={14} className="text-[var(--ll-gold)] shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/fleet" className="ll-cta-primary">View the Full Fleet</Link>
              <Link to="/book" className="ll-cta-ghost">Reserve</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <SectionRule />

      {/* ----------------- 5. REVIEWS ----------------- */}
      <section data-testid="home-reviews-section" className="ll-section bg-gradient-to-b from-[#3A1660] via-[var(--ll-purple)] to-[#3A1660] relative overflow-hidden">
        <div className="ll-container">
          <FadeUp className="text-center max-w-2xl mx-auto">
            <div className="overline" style={{ color: 'var(--ll-gold)' }}>— Reviews —</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4 leading-[1.15]">Five Stars Is <span className="text-[var(--ll-gold)]">Our Floor.</span></h2>
            <p className="mt-5 text-white/85">What Atlanta’s executives, artists, and professionals say about Love &amp; Legacy.</p>
          </FadeUp>

          <div data-testid="reviews-carousel" className="mt-14 -mx-4 sm:mx-0 overflow-x-auto ll-no-scrollbar">
            <div className="flex gap-5 px-4 sm:px-0 snap-x snap-mandatory">
              {REVIEWS.map((r) => (
                <article key={r.name} data-testid="review-card" className="snap-start shrink-0 w-[88%] sm:w-[420px] rounded-lg bg-[rgba(11,11,11,0.55)] border border-[rgba(212,175,55,0.30)] p-7 backdrop-blur-sm">
                  <div className="flex items-center gap-1 text-[var(--ll-gold)]">
                    {Array.from({ length: r.stars }).map((_, i) => <Star key={i} size={16} fill="#D4AF37" stroke="#D4AF37" />)}
                  </div>
                  <Quote size={22} className="text-[var(--ll-gold)] opacity-50 mt-5" />
                  <p className="mt-3 text-sm text-white/90 leading-7">“{r.quote}”</p>
                  <div className="mt-6 ll-rule" />
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-serif text-lg">{r.name}</span>
                    <span className="text-[10px] tracking-[0.22em] uppercase text-[var(--ll-champagne)]">{r.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <FadeUp className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <Link to="/reviews" className="ll-cta-ghost">Read All Reviews</Link>
            <a href="https://g.page/r/love-legacy/review" target="_blank" rel="noreferrer" className="ll-link-gold">Leave a Review <ChevronRight size={14} /></a>
          </FadeUp>
        </div>
      </section>

      <SectionRule />

      {/* ----------------- 6. BRAND PROMISE ----------------- */}
      <section data-testid="home-brand-promise-section" className="ll-section bg-[var(--ll-ink)] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <div className="opacity-[0.06]">
            <Crest size={520} />
          </div>
        </div>
        <div className="ll-container relative">
          <FadeUp className="text-center max-w-3xl mx-auto">
            <SectionRule ornamental className="mb-8" />
            <div className="overline">— Our Promise —</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[56px] mt-4 leading-[1.1] text-balance">Your Journey. <span className="text-[var(--ll-gold)]">Our Priority.</span></h2>
            <p className="mt-8 text-white/85 leading-8 text-lg">
              Love &amp; Legacy Executive Transportation was built on a simple belief: every client deserves to be transported with the same care, precision, and excellence that defines every other aspect of their life. We are not a rideshare. We are not a commodity. We are a commitment. A commitment to punctuality, discretion, and an experience so refined that our clients never consider another option.
            </p>
            <p className="mt-8 font-serif italic text-[var(--ll-gold)] text-xl">“From the first booking to the final mile — this is Love &amp; Legacy.”</p>
            <div className="mt-10">
              <Link to="/experience" className="ll-cta-primary">Begin Your Experience</Link>
            </div>
            <SectionRule ornamental className="mt-12" />
          </FadeUp>
        </div>
      </section>

      <SectionRule />

      {/* ----------------- 7. ATLANTA IDENTITY ----------------- */}
      <section data-testid="home-atlanta-identity-section" className="ll-section bg-[var(--ll-ink)]">
        <div className="ll-container">
          <FadeUp className="text-center max-w-3xl mx-auto">
            <div className="overline">— Atlanta —</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4 leading-[1.1] text-balance">Built in Atlanta. <span className="text-[var(--ll-gold)]">Built for Atlanta.</span></h2>
            <p className="mt-5 text-[var(--ll-champagne)] text-sm tracking-[0.18em]">{ATLANTA_AREAS.join(' • ')}</p>
            <p className="mt-6 text-white/80 leading-8 max-w-2xl mx-auto">We know every terminal. Every business district. Every hotel entrance. Every event venue. Atlanta is not just our market — it is our home. And we represent it with the standard it deserves.</p>
          </FadeUp>
          <StaggerGroup className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {ATLANTA_GRID.map((tile) => (
              <FadeUp key={tile.label}>
                <div className="relative aspect-square overflow-hidden rounded-md ll-img-overlay group">
                  <img src={tile.src} alt={`Atlanta — ${tile.label}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: 'saturate(0.85) contrast(1.05)' }} />
                  <div className="absolute bottom-3 left-4 z-10 text-[10px] tracking-[0.24em] uppercase text-[var(--ll-champagne)]">{tile.label}</div>
                </div>
              </FadeUp>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <SectionRule />

      {/* ----------------- 8. INSTAGRAM STRIP ----------------- */}
      <section data-testid="home-instagram-section" className="ll-section bg-[var(--ll-ivory)] text-[var(--ll-ink)]">
        <div className="ll-container">
          <FadeUp className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="text-[11px] tracking-[0.28em] uppercase text-[var(--ll-purple)] font-semibold">— Follow the Standard</div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-3 leading-[1.1]">@loveandlegacy.transport</h2>
            </div>
            <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 self-start sm:self-end h-12 px-6 bg-[var(--ll-ink)] text-[var(--ll-gold)] text-[11px] tracking-[0.22em] uppercase font-semibold rounded">
              <Instagram size={14} /> Follow on Instagram
            </a>
          </FadeUp>
          <StaggerGroup className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {INSTAGRAM_TILES.map((src, i) => (
              <FadeUp key={i}>
                <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="relative block aspect-square overflow-hidden rounded-sm group">
                  <img src={src} alt="Love & Legacy moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: 'saturate(0.85) contrast(1.05)' }} />
                  <span className="absolute inset-0 bg-[var(--ll-ink)] opacity-0 group-hover:opacity-30 transition-opacity" />
                </a>
              </FadeUp>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <SectionRule />

      {/* ----------------- 9. FINAL CTA ----------------- */}
      <section data-testid="home-final-cta-section" className="relative ll-section bg-[var(--ll-ink)] overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.heroAlt} alt="" className="w-full h-full object-cover opacity-30" style={{ filter: 'saturate(0.75) contrast(1.1)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,11,11,0.85) 0%, rgba(11,11,11,0.92) 100%)' }} />
        </div>
        <div className="relative ll-container text-center max-w-3xl mx-auto">
          <FadeUp>
            <SectionRule ornamental className="mb-8" />
            <div className="overline">— Reserve —</div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[64px] mt-4 leading-[1.05] text-balance">Your Next Journey<br /><span className="text-[var(--ll-gold)]">Starts Here.</span></h2>
            <p className="mt-6 text-white/85">Available 24 hours. 7 days. Every occasion.</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book" className="ll-cta-primary">Reserve Your Experience</Link>
              <a href={`tel:${BRAND.phoneTel}`} className="ll-cta-ghost inline-flex items-center gap-2"><Phone size={14} /> {BRAND.phone}</a>
            </div>
            <Link to="/corporate-inquiry" className="mt-6 inline-flex ll-link-gold">Corporate Inquiry <ChevronRight size={14} /></Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
