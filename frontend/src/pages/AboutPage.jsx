import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/brand/SEO';
import { PageHero } from '@/components/brand/PageHero';
import { FadeUp } from '@/components/brand/FadeUp';
import { SectionRule } from '@/components/brand/SectionRule';
import { IMAGES } from '@/constants/brand';

export default function AboutPage() {
  return (
    <div data-testid="page-about">
      <SEO title="About — Love & Legacy Executive Transportation" description="Founded by Dontay Bates. 20+ years of executive protection and luxury client services. Built in Atlanta." />
      <PageHero overline="— About" title="Driven by" accent="Purpose." subhead="Founded by Dontay Bates • Built in Atlanta" image={IMAGES.chauffeur} />
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

      <section className="ll-section bg-[var(--ll-ink)] text-center">
        <div className="ll-container">
          <FadeUp>
            <Link to="/book" className="ll-cta-primary">Begin Your Experience</Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
