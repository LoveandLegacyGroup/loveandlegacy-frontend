import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SEO } from '@/components/brand/SEO';
import { PageHero } from '@/components/brand/PageHero';
import { SectionRule } from '@/components/brand/SectionRule';
import { BRAND, IMAGES } from '@/constants/brand';

export default function ContactPage() {
  return (
    <div data-testid="page-contact">
      <SEO title="Contact | Love & Legacy Executive Transportation" description="Reach Atlanta's premier executive transportation. Phone, email, and direct inquiry." />
      <PageHero overline="— Contact" title="Speak with" accent="Love & Legacy." subhead="Direct lines for direct service." image={IMAGES.hotelValet} />
      <SectionRule />
      <section className="ll-section bg-[var(--ll-ink)]" data-testid="contact-page">
        <div className="ll-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 rounded-lg bg-[var(--ll-ink-2)] border border-[rgba(246,241,230,0.08)] overflow-hidden">
            <div className="px-7 md:px-10 pt-8 md:pt-10">
              <div className="overline">— Send a Message</div>
              <h2 className="font-serif text-2xl sm:text-3xl mt-3 leading-tight">How can we serve you?</h2>
            </div>
            <iframe
              src={BRAND.hubspotForm}
              title="Love & Legacy Contact Form"
              data-testid="contact-hubspot-iframe"
              className="w-full mt-6"
              style={{ height: 1100, border: 0, background: 'transparent' }}
              loading="lazy"
            />
            <div className="px-7 md:px-10 pb-8 md:pb-10">
              <p className="text-xs text-white/55">Trouble viewing the form? <a href={BRAND.hubspotForm} target="_blank" rel="noopener noreferrer" className="text-[var(--ll-gold)] hover:underline">Open in a new tab</a>.</p>
            </div>
          </div>
          <aside className="lg:col-span-5 rounded-lg bg-[var(--ll-ink-2)] border border-[rgba(212,175,55,0.20)] p-7 md:p-8">
            <div className="overline">— Direct Lines</div>
            <h3 className="font-serif text-2xl mt-3">Available 24 / 7.</h3>
            <ul className="mt-7 space-y-6 text-sm">
              <li className="flex items-start gap-3"><Phone size={18} className="text-[var(--ll-gold)] mt-0.5" /> <div><div className="text-[10px] tracking-[0.22em] uppercase text-[var(--ll-champagne)]">Phone</div><a href={`tel:${BRAND.phoneTel}`} className="text-white/90">{BRAND.phone}</a></div></li>
              <li className="flex items-start gap-3"><Mail size={18} className="text-[var(--ll-gold)] mt-0.5" /> <div><div className="text-[10px] tracking-[0.22em] uppercase text-[var(--ll-champagne)]">Email</div><a href={`mailto:${BRAND.email}`} className="text-white/90 break-all">{BRAND.email}</a></div></li>
              <li className="flex items-start gap-3"><MapPin size={18} className="text-[var(--ll-gold)] mt-0.5" /> <div><div className="text-[10px] tracking-[0.22em] uppercase text-[var(--ll-champagne)]">Location</div><span className="text-white/90">{BRAND.location}</span></div></li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}
