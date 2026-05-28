import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Plane, Briefcase, Crown, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { SEO } from '@/components/brand/SEO';
import { PageHero } from '@/components/brand/PageHero';
import { FadeUp, StaggerGroup } from '@/components/brand/FadeUp';
import { SectionRule } from '@/components/brand/SectionRule';
import { ServiceTile } from '@/components/brand/ServiceTile';
import { SERVICES, IMAGES } from '@/constants/brand';

const ICONS = [Plane, Briefcase, Crown, ShieldCheck, Sparkles, Star];

export default function ServicesPage() {
  return (
    <div data-testid="page-services">
      <SEO title="Services — Love & Legacy Executive Transportation" description="Atlanta's premium executive transportation services: airport transfers, executive rides, VIP events, executive protection, production, and corporate accounts." />
      <PageHero
        overline="— Services”"
        title="Every Journey."
        accent="Every Standard."
        subhead="Airport • Executive • VIP • Protection • Production • Corporate"
      />
      <SectionRule />
      <section className="ll-section bg-gradient-to-b from-[var(--ll-ink)] via-[#160C28] to-[var(--ll-ink)]">
        <div className="ll-container">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-white/80 leading-8">
                The full spectrum of executive transportation — curated for the clients who demand more. Select the experience that matches your standard.
              </p>
            </div>
          </FadeUp>
          <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {SERVICES.map((s, i) => (
              <FadeUp key={s.slug}>
                <ServiceTile
                  icon={ICONS[i]}
                  index={i}
                  title={s.name}
                  blurb={`${s.short} ${s.blurb}`}
                  to={`/services/${s.slug}`}
                  cta="Explore Service"
                />
              </FadeUp>
            ))}
          </StaggerGroup>
          <FadeUp className="mt-16 text-center">
            <Link to="/book" className="ll-cta-primary">Reserve Your Experience</Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
