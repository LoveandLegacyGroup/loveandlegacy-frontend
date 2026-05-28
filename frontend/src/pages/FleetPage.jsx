import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { SEO } from '@/components/brand/SEO';
import { PageHero } from '@/components/brand/PageHero';
import { FadeUp, StaggerGroup } from '@/components/brand/FadeUp';
import { SectionRule } from '@/components/brand/SectionRule';
import { IMAGES } from '@/constants/brand';

const INTERIOR = ['Premium leather seating', 'Ambient interior lighting', 'Rear climate control', 'Tinted privacy glass', 'USB-C and wireless charging', 'Premium audio'];
const AMENITIES = ['Chilled still water', 'Premium tissues', 'Phone charger', 'Clean, scented interior always', 'Curated playlist on request', 'Refreshments stocked nightly'];
const EXTERIOR = ['Black on black presentation', 'Immaculate condition', 'Professional low-profile appearance', 'Detailed before every run', 'Routine mechanical inspections', 'Showroom standard always'];

export default function FleetPage() {
  return (
    <div data-testid="page-fleet">
      <SEO title="Our Fleet | 2021 Tahoe High Country | Love & Legacy" description="Explore the Love & Legacy fleet. Our immaculate 2021 Chevrolet Tahoe High Country — maintained to the highest executive standard." />
      <PageHero overline="— The Fleet" title="One Vehicle." accent="Uncompromising Standard." subhead="2021 Chevrolet Tahoe High Country — Atlanta's Premier Executive SUV" image={IMAGES.fleetMain} />
      <SectionRule />

      {/* Main vehicle showcase */}
      <section className="ll-section bg-[var(--ll-ink)]" data-testid="fleet-page">
        <div className="ll-container">
          <FadeUp className="max-w-3xl">
            <div className="overline">— Our Vehicle —</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4 leading-[1.15] text-balance">The 2021 Chevrolet <span className="text-[var(--ll-gold)]">Tahoe High Country.</span></h2>
            <p className="mt-6 text-white/85 leading-8">The Love &amp; Legacy fleet is not defined by quantity. It is defined by condition, preparation, and consistency. Our 2021 Chevrolet Tahoe High Country is detailed before every run, maintained to the highest mechanical standard, and stocked with the premium amenities our clients expect — without ever having to ask.</p>
          </FadeUp>

          <FadeUp className="mt-12">
            <div className="relative overflow-hidden rounded-lg ll-img-overlay aspect-[16/9]">
              <img src={IMAGES.fleetMain} alt="2021 Chevrolet Tahoe High Country, black exterior" className="w-full h-full object-cover" style={{ filter: 'saturate(0.85) contrast(1.05)' }} />
            </div>
          </FadeUp>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{ title: 'Interior', items: INTERIOR }, { title: 'Amenities', items: AMENITIES }, { title: 'Exterior', items: EXTERIOR }].map((block) => (
              <FadeUp key={block.title}>
                <div className="rounded-lg bg-[var(--ll-ink-2)] border border-[rgba(246,241,230,0.08)] p-7 hover:border-[rgba(212,175,55,0.30)] transition-colors">
                  <div className="overline">{block.title}</div>
                  <ul className="mt-5 space-y-3">
                    {block.items.map(i => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/80 leading-6"><CheckCircle2 size={14} className="text-[var(--ll-gold)] mt-1 shrink-0" /> {i}</li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="mt-16 text-center">
            <Link to="/book" className="ll-cta-primary">Reserve The Tahoe <ChevronRight size={14} className="ml-2" /></Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
