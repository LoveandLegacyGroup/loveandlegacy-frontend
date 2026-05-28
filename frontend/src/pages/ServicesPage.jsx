import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Plane, Briefcase, Crown, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { SEO } from '@/components/brand/SEO';
import { PageHero } from '@/components/brand/PageHero';
import { FadeUp, StaggerGroup } from '@/components/brand/FadeUp';
import { SectionRule } from '@/components/brand/SectionRule';
import { ServiceTile } from '@/components/brand/ServiceTile';
import { SERVICES, IMAGES, BRAND } from '@/constants/brand';

const ICONS = [Plane, Briefcase, Crown, ShieldCheck, Sparkles, Star];

const SHOWCASE = [
  { src: IMAGES.artDiscreet,       label: 'Discreet Chauffeur Presence' },
  { src: IMAGES.tahoeExteriorWide, label: 'Executive Arrival' },
  { src: IMAGES.tahoeInterior,     label: 'Premium Cabin' },
  { src: IMAGES.artJetBrand,       label: 'Private Aviation' },
];

export default function ServicesPage() {
  return (
    <div data-testid="page-services">
      <SEO title="Services — Love & Legacy Executive Transportation" description="Atlanta's premium executive transportation services: airport transfers, executive rides, VIP events, executive protection, production, and corporate accounts." />
      <PageHero overline="— Services" title="Every journey." accent="Every standard." subhead="Airport · Executive · VIP · Protection · Production · Corporate" image={IMAGES.tahoeExteriorWide} />
      <SectionRule />

      {/* Editorial visual strip — uses object-contain on charcoal so no image is cropped */}
      <section className="bg-[var(--ll-ink)] py-10">
        <div className="ll-container">
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {SHOWCASE.map((s) => (
              <FadeUp key={s.label}>
                <div className="relative aspect-[16/10] overflow-hidden group border border-[rgba(212,175,55,0.10)] bg-[#0A0A0C]">
                  <img src={s.src} alt={s.label} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(7,7,10,0) 60%, rgba(7,7,10,0.85) 100%)' }} />
                  <div className="absolute left-4 bottom-4 z-10 text-[10px] tracking-[0.28em] uppercase text-[var(--ll-champagne)]">{s.label}</div>
                </div>
              </FadeUp>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="ll-section bg-gradient-to-b from-[var(--ll-ink)] via-[#160C28] to-[var(--ll-ink)]">
        <div className="ll-container">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-white/80 leading-8">The full spectrum of executive transportation — curated for the clients who demand more. Select the experience that matches your standard.</p>
            </div>
          </FadeUp>
          <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {SERVICES.map((s, i) => (
              <FadeUp key={s.slug}>
                <ServiceTile icon={ICONS[i]} index={i} title={s.name} blurb={`${s.short} ${s.blurb}`} to={`/services/${s.slug}`} cta="Explore Service" />
              </FadeUp>
            ))}
          </StaggerGroup>
          <FadeUp className="mt-16 text-center">
            <a href={BRAND.hubspotForm} target="_blank" rel="noopener noreferrer" className="ll-cta-primary">Reserve Your Experience</a>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
