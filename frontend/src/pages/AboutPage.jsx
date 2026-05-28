import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/brand/SEO';
import { PageHero } from '@/components/brand/PageHero';
import { FadeUp, StaggerGroup } from '@/components/brand/FadeUp';
import { SectionRule } from '@/components/brand/SectionRule';
import { BRAND, IMAGES } from '@/constants/brand';
import { ShieldCheck, Crown, Sparkles, Briefcase } from 'lucide-react';

const PILLARS = [
  { Icon: Briefcase, title: 'Executive Transportation', body: 'Premium chauffeured movement for executives, C-suite, and visiting principals.' },
  { Icon: ShieldCheck, title: 'Executive Protection', body: 'Discreet, certified protection presence for principals who require quiet excellence.' },
  { Icon: Crown, title: 'Concierge Logistics', body: 'Coordinated multi-stop logistics for events, travel, and family movement.' },
  { Icon: Sparkles, title: 'VIP Travel', body: 'Airport, hotel, and venue arrival experiences engineered for the standard you hold.' },
];

export default function AboutPage() {
  return (
    <div data-testid="page-about">
      <SEO title="About — Love & Legacy Executive Transportation" description="Founded by Dontay Bates. 20+ years of executive protection and luxury client services. Built in Atlanta." />
      <PageHero overline="— About" title="Driven by" accent="purpose." subhead={BRAND.positioning} image={IMAGES.tahoeExteriorWide} />
      <SectionRule />

      <section className="ll-section bg-[var(--ll-ink)]">
        <div className="ll-container max-w-3xl mx-auto">
          <FadeUp>
            <p className="text-white/85 leading-8 text-lg">Love &amp; Legacy Executive Transportation was founded by <strong className="text-[var(--ll-ivory)]">Dontay Bates</strong>, a veteran of executive protection and luxury client services with over 20 years of experience protecting high-profile individuals and coordinating elite-level movement.</p>
            <p className="mt-6 text-white/85 leading-8 text-lg">Built in Atlanta, the company was created to bring together luxury transportation, executive protection, and VIP logistics under one elevated experience.</p>
            <p className="mt-6 text-white/85 leading-8 text-lg">More than transportation, Love &amp; Legacy represents discretion, professionalism, reliability, and presence.</p>
            <p className="mt-8 font-serif italic text-[var(--ll-gold)] text-2xl">“Because true luxury is not loud. It’s how you move.”</p>
          </FadeUp>
        </div>
      </section>

      <SectionRule />

      <section className="ll-section bg-[var(--ll-ink-2)]">
        <div className="ll-container">
          <FadeUp className="text-center max-w-2xl mx-auto">
            <div className="overline">— What We Do</div>
            <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl mt-5 leading-[1.05] text-balance">Four disciplines. <span className="italic font-light text-[var(--ll-gold)]">One standard.</span></h2>
          </FadeUp>
          <StaggerGroup className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map(p => (
              <FadeUp key={p.title}>
                <div className="rounded-lg bg-[var(--ll-ink)] border border-[rgba(246,241,230,0.08)] p-7 h-full hover:border-[rgba(212,175,55,0.30)] transition-colors duration-500">
                  <div className="h-12 w-12 rounded-full bg-[var(--ll-purple)] border border-[rgba(212,175,55,0.40)] flex items-center justify-center">
                    <p.Icon size={20} className="text-[var(--ll-gold)]" />
                  </div>
                  <h3 className="font-serif text-xl mt-5 leading-tight">{p.title}</h3>
                  <p className="mt-3 text-[13.5px] text-white/72 leading-7">{p.body}</p>
                </div>
              </FadeUp>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <SectionRule />

      {/* Brand Plates — uploaded standalone art shown at native ratio with object-contain (no cropping) */}
      <section className="bg-[var(--ll-ink)] py-12">
        <div className="ll-container">
          <FadeUp className="text-center max-w-2xl mx-auto mb-10">
            <div className="overline">— The Mark</div>
            <h2 className="font-serif text-2xl sm:text-3xl mt-4 leading-[1.15]">Discretion is the design.</h2>
          </FadeUp>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FadeUp>
              <div className="relative overflow-hidden aspect-[4/5] bg-[#0A0A0C] border border-[rgba(212,175,55,0.10)]">
                <img src={IMAGES.artHeroTahoe} alt="Love & Legacy — Tahoe brand plate" className="w-full h-full object-contain" />
              </div>
            </FadeUp>
            <FadeUp>
              <div className="relative overflow-hidden aspect-[4/5] bg-[#0A0A0C] border border-[rgba(212,175,55,0.10)]">
                <img src={IMAGES.artLogoHoriz} alt="Love & Legacy — horizontal mark" className="w-full h-full object-contain" />
              </div>
            </FadeUp>
          </StaggerGroup>
        </div>
      </section>

      <section className="ll-section bg-[var(--ll-ink)] text-center">
        <div className="ll-container">
          <FadeUp>
            <a href={BRAND.hubspotForm} target="_blank" rel="noopener noreferrer" className="ll-cta-primary">Begin Your Experience</a>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
