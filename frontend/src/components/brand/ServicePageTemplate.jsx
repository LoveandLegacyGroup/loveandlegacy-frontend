import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { SEO } from '@/components/brand/SEO';
import { PageHero } from '@/components/brand/PageHero';
import { FadeUp, StaggerGroup } from '@/components/brand/FadeUp';
import { SectionRule } from '@/components/brand/SectionRule';
import { BRAND, IMAGES } from '@/constants/brand';

export const ServicePageTemplate = ({
  meta,
  hero,
  intro,
  signals,
  ideal,
  cta,
  reverseImage,
  image,
}) => (
  <div data-testid="service-subpage">
    <SEO title={meta.title} description={meta.description} />
    <PageHero {...hero} breadcrumbs={[{ label: 'Services', to: '/services' }, { label: hero.crumb || hero.title }]} />

    <SectionRule />

    {/* Intro */}
    <section className="ll-section bg-[var(--ll-ink)]">
      <div className="ll-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <FadeUp className={`lg:col-span-7 ${reverseImage ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
          <div className="relative overflow-hidden rounded-lg ll-img-overlay aspect-[16/10] bg-[#0A0A0C]">
            <img src={image || IMAGES.fleetMain} alt="" className="w-full h-full object-contain" style={{ filter: 'saturate(0.85) contrast(1.05)' }} />
          </div>
        </FadeUp>
        <FadeUp className={`lg:col-span-5 ${reverseImage ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
          <div className="overline">— {intro.overline} —</div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] mt-4 leading-[1.15] text-balance">{intro.heading}</h2>
          <p className="mt-6 text-white/80 leading-8">{intro.body}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={BRAND.hubspotForm} target="_blank" rel="noopener noreferrer" className="ll-cta-primary">{cta.primaryLabel || 'Reserve Now'}</a>
            <a href={`tel:${BRAND.phoneTel}`} className="ll-cta-ghost inline-flex items-center gap-2"><Phone size={14} /> {BRAND.phone}</a>
          </div>
        </FadeUp>
      </div>
    </section>

    <SectionRule />

    {/* Trust signals */}
    <section className="ll-section bg-gradient-to-b from-[var(--ll-ink)] via-[#160C28] to-[var(--ll-ink)]">
      <div className="ll-container">
        <FadeUp className="text-center max-w-2xl mx-auto">
          <div className="overline">— What's Included —</div>
          <h2 className="font-serif text-3xl sm:text-4xl mt-4 leading-[1.15]">{signals.heading}</h2>
        </FadeUp>
        <StaggerGroup className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {signals.items.map((s) => (
            <FadeUp key={s}>
              <div className="flex items-start gap-4 rounded-lg bg-[var(--ll-ink-2)] border border-[rgba(246,241,230,0.08)] p-6 hover:border-[rgba(212,175,55,0.30)] transition-colors">
                <CheckCircle2 size={20} className="text-[var(--ll-gold)] shrink-0 mt-0.5" />
                <p className="text-white/85 leading-7">{s}</p>
              </div>
            </FadeUp>
          ))}
        </StaggerGroup>
      </div>
    </section>

    {ideal && (
      <>
        <SectionRule />
        <section className="ll-section bg-[var(--ll-ink)]">
          <div className="ll-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeUp className="lg:col-span-5">
              <div className="overline">— Ideal For —</div>
              <h2 className="font-serif text-3xl sm:text-4xl mt-4 leading-[1.15] text-balance">{ideal.heading}</h2>
            </FadeUp>
            <StaggerGroup className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ideal.items.map((it) => (
                <FadeUp key={it} className="flex items-center gap-3 text-white/85 text-sm">
                  <span className="h-px w-4 bg-[var(--ll-gold)]" /> {it}
                </FadeUp>
              ))}
            </StaggerGroup>
          </div>
        </section>
      </>
    )}

    <SectionRule />

    {/* CTA band */}
    <section className="relative ll-section bg-[var(--ll-ink)] overflow-hidden">
      <div className="ll-container text-center max-w-3xl mx-auto">
        <FadeUp>
          <SectionRule ornamental className="mb-8" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance">{cta.heading || 'Ready to Reserve?'}</h2>
          <p className="mt-5 text-white/80">{cta.body || 'Confirmed within two hours. Available 24/7.'}</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BRAND.hubspotForm} target="_blank" rel="noopener noreferrer" className="ll-cta-primary">{cta.primaryLabel || 'Reserve Your Experience'}</a>
            <Link to="/services" className="ll-cta-ghost">View All Services <ChevronRight size={14} className="ml-2" /></Link>
          </div>
        </FadeUp>
      </div>
    </section>
  </div>
);

export default ServicePageTemplate;
