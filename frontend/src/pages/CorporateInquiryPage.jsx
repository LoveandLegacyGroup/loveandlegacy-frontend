import React from 'react';
import { SEO } from '@/components/brand/SEO';
import { PageHero } from '@/components/brand/PageHero';
import { SectionRule } from '@/components/brand/SectionRule';
import { CheckCircle2, Phone } from 'lucide-react';
import { BRAND, IMAGES } from '@/constants/brand';

export default function CorporateInquiryPage() {
  return (
    <div data-testid="page-corporate-inquiry">
      <SEO title="Corporate Inquiry | Love & Legacy Executive Transportation" description="Establish a corporate transportation account in Atlanta. Priority booking, streamlined invoicing, executive standard." />
      <PageHero overline="— Corporate Inquiry" title="Elevate How" accent="Your Company Moves." subhead="Monthly Accounts · Priority Scheduling · Streamlined Invoicing" image={IMAGES.corporate} />
      <SectionRule />
      <section className="ll-section bg-[var(--ll-ink)]" data-testid="corporate-inquiry-page">
        <div className="ll-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-8 rounded-lg bg-[var(--ll-ink-2)] border border-[rgba(246,241,230,0.08)] overflow-hidden">
            <div className="px-7 md:px-10 pt-8 md:pt-10">
              <div className="overline">— Tell Us About Your Company</div>
              <h2 className="font-serif text-2xl sm:text-3xl mt-3 leading-tight">A dedicated transportation partner for your team.</h2>
            </div>
            <iframe
              src={BRAND.hubspotForm}
              title="Love & Legacy Corporate Inquiry Form"
              data-testid="corporate-hubspot-iframe"
              className="w-full mt-6"
              style={{ height: 1200, border: 0, background: 'transparent' }}
              loading="lazy"
            />
            <div className="px-7 md:px-10 pb-8 md:pb-10">
              <p className="text-xs text-white/55">Trouble viewing the form? <a href={BRAND.hubspotForm} target="_blank" rel="noopener noreferrer" className="text-[var(--ll-gold)] hover:underline">Open in a new tab</a> or call {BRAND.phone}.</p>
            </div>
          </div>
          <aside className="lg:col-span-4 rounded-lg bg-[var(--ll-ink-2)] border border-[rgba(212,175,55,0.20)] p-7 md:p-8">
            <div className="overline">— SLA</div>
            <h3 className="font-serif text-xl mt-3">What you can expect.</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[var(--ll-gold)] mt-0.5" /><span className="text-white/85 leading-6">Priority booking — your dates held first</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[var(--ll-gold)] mt-0.5" /><span className="text-white/85 leading-6">Dedicated account manager</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[var(--ll-gold)] mt-0.5" /><span className="text-white/85 leading-6">Monthly invoicing — streamlined</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[var(--ll-gold)] mt-0.5" /><span className="text-white/85 leading-6">Discretion across executive team</span></li>
            </ul>
            <div className="ll-rule my-6" />
            <p className="text-xs text-[var(--ll-champagne)] tracking-[0.18em] uppercase">Priority response</p>
            <a href={`tel:${BRAND.phoneTel}`} className="mt-2 inline-flex items-center gap-2 font-serif text-2xl text-[var(--ll-gold)]"><Phone size={18}/> {BRAND.phone}</a>
          </aside>
        </div>
      </section>
    </div>
  );
}
