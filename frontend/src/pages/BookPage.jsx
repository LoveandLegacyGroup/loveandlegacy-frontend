import React from 'react';
import { Phone, ShieldCheck, Star, Clock, Lock, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/brand/SEO';
import { PageHero } from '@/components/brand/PageHero';
import { SectionRule } from '@/components/brand/SectionRule';
import { BRAND, IMAGES } from '@/constants/brand';

export default function BookPage() {
  return (
    <div data-testid="page-book">
      <SEO title="Book Executive Transportation | Love & Legacy Atlanta" description="Reserve your Love & Legacy experience. Airport transfers, executive rides, VIP events. Confirmed within 2 hours." />
      <PageHero overline="— Reserve" title="Reserve Your" accent="Experience." subhead="Every booking is confirmed within two hours." image={IMAGES.blackCarNight} />
      <SectionRule />

      <section className="ll-section bg-[var(--ll-ink)]" data-testid="book-page">
        <div className="ll-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-8 rounded-lg bg-[var(--ll-ink-2)] border border-[rgba(246,241,230,0.08)] overflow-hidden">
            <div className="px-7 md:px-10 pt-8 md:pt-10">
              <div className="overline">— Booking Details</div>
              <h2 className="font-serif text-2xl sm:text-3xl mt-3 leading-tight">Tell us about your journey.</h2>
              <p className="mt-4 text-sm text-white/65 leading-7">Complete the form below — confirmed within two hours. Available 24 / 7.</p>
            </div>
            <iframe
              src={BRAND.hubspotForm}
              title="Love & Legacy Booking Form"
              data-testid="booking-hubspot-iframe"
              className="w-full mt-6"
              style={{ height: 1200, border: 0, background: 'transparent' }}
              loading="lazy"
            />
            <div className="px-7 md:px-10 pb-8 md:pb-10">
              <p className="text-xs text-white/55">
                Trouble viewing the form? <a href={BRAND.hubspotForm} target="_blank" rel="noopener noreferrer" className="text-[var(--ll-gold)] hover:underline">Open in a new tab</a> or call {BRAND.phone}.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-4 rounded-lg bg-[var(--ll-ink-2)] border border-[rgba(212,175,55,0.20)] p-7 md:p-8">
            <div className="overline">— Trust Signals</div>
            <h3 className="font-serif text-xl mt-3">Reserved for those who require more.</h3>
            <ul className="mt-7 space-y-5 text-sm">
              <li className="flex items-start gap-3"><Clock size={18} className="text-[var(--ll-gold)] mt-0.5 shrink-0" /> <span className="text-white/85 leading-6">Responses within 2 hours guaranteed</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[var(--ll-gold)] mt-0.5 shrink-0" /> <span className="text-white/85 leading-6">Fixed pricing — no surge fees</span></li>
              <li className="flex items-start gap-3"><Lock size={18} className="text-[var(--ll-gold)] mt-0.5 shrink-0" /> <span className="text-white/85 leading-6">100% confidential</span></li>
              <li className="flex items-start gap-3"><Star size={18} className="text-[var(--ll-gold)] mt-0.5 shrink-0" /> <span className="text-white/85 leading-6">5-star rated on Google</span></li>
              <li className="flex items-start gap-3"><ShieldCheck size={18} className="text-[var(--ll-gold)] mt-0.5 shrink-0" /> <span className="text-white/85 leading-6">Licensed, insured, and certified</span></li>
            </ul>
            <div className="ll-rule my-7" />
            <p className="text-xs text-[var(--ll-champagne)] tracking-[0.18em] uppercase">Available 24 / 7</p>
            <a href={`tel:${BRAND.phoneTel}`} className="mt-2 inline-flex items-center gap-2 font-serif text-2xl text-[var(--ll-gold)]"><Phone size={18}/> {BRAND.phone}</a>
            <a href={`mailto:${BRAND.email}?subject=Booking%20Inquiry`} className="mt-4 block text-xs text-white/65 hover:text-[var(--ll-gold)]">Or email Dontay directly</a>
          </aside>
        </div>
      </section>
    </div>
  );
}
