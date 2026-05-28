import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { SEO } from '@/components/brand/SEO';
import { PageHero } from '@/components/brand/PageHero';
import { FadeUp, StaggerGroup } from '@/components/brand/FadeUp';
import { SectionRule } from '@/components/brand/SectionRule';
import { IMAGES } from '@/constants/brand';

const VEHICLES = [
  {
    eyebrow: 'Executive SUV',
    name: '2021 Chevrolet Tahoe High Country',
    role: 'Solo executives · Airport runs · VIP transport · Executive protection',
    image: IMAGES.tahoeExteriorWide,
    interiorImage: IMAGES.tahoeInterior,
    specs: [
      ['Capacity', 'Up to 6 guests'],
      ['Cabin', 'Premium leather · Captain’s chairs'],
      ['Lighting', 'Ambient interior lighting'],
      ['Privacy', 'Tinted privacy glass'],
      ['Connectivity', 'USB-C · Wireless charging'],
      ['Hospitality', 'Chilled water · Premium audio'],
    ],
    cta: 'Reserve the Tahoe',
  },
  {
    eyebrow: 'Group / VIP',
    name: 'Black Mercedes-Benz Sprinter',
    role: 'Group travel · VIP tours · Production logistics · Corporate teams',
    image: IMAGES.sprinterExterior,
    interiorImage: IMAGES.sprinterInterior,
    specs: [
      ['Capacity', 'Up to 14 guests'],
      ['Cabin', 'Quilted leather lounge seating'],
      ['Lighting', 'LED ambient mood lighting'],
      ['Entertainment', 'In-cabin TV · Premium audio'],
      ['Privacy', 'Pleated privacy blinds · Tinted glass'],
      ['Hospitality', 'Refreshment console · USB chargers'],
    ],
    cta: 'Reserve the Sprinter',
  },
];

export default function FleetPage() {
  return (
    <div data-testid="page-fleet">
      <SEO title="Our Fleet | Tahoe & Sprinter | Love & Legacy" description="Tour the Love & Legacy fleet. Our 2021 Chevrolet Tahoe High Country and black executive Mercedes-Benz Sprinter — maintained to the highest standard." />
      <PageHero overline="— The Fleet" title="Two vehicles." accent="Uncompromising standard." subhead="Executive SUV · Black Sprinter · Atlanta’s Premier Fleet" image={IMAGES.tahoeExteriorWide} />
      <SectionRule />

      {VEHICLES.map((v, idx) => (
        <React.Fragment key={v.name}>
          <section className={`ll-section ${idx % 2 === 0 ? 'bg-[var(--ll-ink)]' : 'bg-[var(--ll-ink-2)]'}`} data-testid={`fleet-vehicle-${idx}`}>
            <div className="ll-container">
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <FadeUp className="lg:col-span-7">
                  <div className="relative overflow-hidden aspect-[16/11] bg-[var(--ll-ink-2)]">
                    <div className="absolute inset-0 ll-kenburns">
                      <img src={v.image} alt={`${v.name} — exterior`} className="w-full h-full object-cover" style={{ filter: 'saturate(0.92) contrast(1.04) brightness(0.96)' }} />
                    </div>
                    <div className="absolute inset-0 ll-img-overlay" />
                    <div className="absolute left-6 top-6 right-6 flex items-center justify-between text-[10px] tracking-[0.30em] uppercase text-[var(--ll-champagne)]">
                      <span>{v.eyebrow}</span>
                      <span className="editorial-num">0{idx + 1}</span>
                    </div>
                  </div>
                </FadeUp>

                <FadeUp className="lg:col-span-5">
                  <div className="overline">— {v.eyebrow}</div>
                  <h2 className="text-display text-3xl sm:text-4xl lg:text-[44px] mt-5 leading-[1.05] text-balance">
                    {v.name}
                  </h2>
                  <p className="mt-6 text-[var(--ll-champagne)] text-[12px] tracking-[0.18em] uppercase">{v.role}</p>

                  <dl className="mt-10 divide-y divide-[rgba(212,175,55,0.14)] border-t border-b border-[rgba(212,175,55,0.14)]">
                    {v.specs.map(([k, val]) => (
                      <div key={k} className="flex items-baseline justify-between gap-6 py-4">
                        <dt className="text-[10px] tracking-[0.30em] uppercase text-[var(--ll-champagne)] shrink-0">{k}</dt>
                        <dd className="text-[14px] text-[var(--ll-ivory)]/90 text-right font-light">{val}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link to="/book" className="ll-cta-primary">{v.cta}</Link>
                  </div>
                </FadeUp>
              </div>

              {/* Interior shot */}
              <FadeUp className="mt-14">
                <div className="relative overflow-hidden aspect-[21/9] bg-[var(--ll-ink-2)]">
                  <img src={v.interiorImage} alt={`${v.name} — interior`} className="w-full h-full object-cover" style={{ filter: 'saturate(0.95) contrast(1.04) brightness(0.96)' }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(7,7,10,0.10) 0%, rgba(7,7,10,0.50) 100%)' }} />
                  <div className="absolute left-6 bottom-6 right-6 flex items-end justify-between">
                    <div className="text-[10px] tracking-[0.30em] uppercase text-[var(--ll-champagne)]">Inside the {v.name.split(' ').slice(-2).join(' ')}</div>
                    <div className="font-serif italic text-[var(--ll-gold)] text-lg">Detailed before every run</div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </section>
          <SectionRule />
        </React.Fragment>
      ))}

      <section className="ll-section bg-[var(--ll-ink)] text-center">
        <div className="ll-container">
          <FadeUp className="max-w-3xl mx-auto">
            <h2 className="text-display text-4xl sm:text-5xl lg:text-[64px] leading-[0.98] text-balance">
              One fleet. <span className="italic font-light text-[var(--ll-gold)]">Every occasion.</span>
            </h2>
            <p className="mt-8 text-white/75 leading-[1.85] font-light max-w-xl mx-auto">
              From a private airport pickup to a multi-vehicle gala arrival, our fleet is positioned for the journey — not the spreadsheet.
            </p>
            <div className="mt-10">
              <Link to="/book" className="ll-cta-primary">Reserve Your Experience <ChevronRight size={14} className="ml-2" /></Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
