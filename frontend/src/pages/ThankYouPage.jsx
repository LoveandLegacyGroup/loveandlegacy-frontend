import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, Phone } from 'lucide-react';
import { SEO } from '@/components/brand/SEO';
import { FadeUp } from '@/components/brand/FadeUp';
import { SectionRule } from '@/components/brand/SectionRule';
import { Crest } from '@/components/brand/Crest';
import { BRAND, IMAGES } from '@/constants/brand';

const MESSAGES = {
  booking: { title: 'Reservation Received.', body: 'Your booking request has been received. Expect confirmation within two hours — often much sooner.' },
  contact: { title: 'Message Received.', body: 'Your message has been received. We will respond promptly.' },
  corporate: { title: 'Corporate Inquiry Received.', body: 'Priority follow-up within one business day from a dedicated account contact.' },
};

export default function ThankYouPage() {
  const [params] = useSearchParams();
  const type = params.get('type') || 'booking';
  const m = MESSAGES[type] || MESSAGES.booking;
  return (
    <div data-testid="page-thank-you" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[var(--ll-ink)]">
      <SEO title="Thank You | Love & Legacy" description="Your request has been received." />
      <div className="absolute inset-0 opacity-30">
        <img src={IMAGES.heroPrimary} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,11,11,0.78) 0%, rgba(11,11,11,0.95) 100%)' }} />
      </div>
      <div className="relative ll-container text-center max-w-2xl pt-32 pb-24" data-testid="thank-you-page">
        <FadeUp>
          <div className="flex justify-center mb-8"><Crest size={64} /></div>
          <div className="flex justify-center"><CheckCircle2 size={32} className="text-[var(--ll-gold)]" /></div>
          <SectionRule ornamental className="my-8" />
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">{m.title}</h1>
          <p className="mt-6 text-white/85 leading-8 text-lg">{m.body}</p>
          <p className="mt-8 font-serif italic text-[var(--ll-gold)] text-xl">Discretion. Reliability. Presence.</p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="ll-cta-primary">Return Home</Link>
            <a href={`tel:${BRAND.phoneTel}`} className="ll-cta-ghost inline-flex items-center gap-2"><Phone size={14} /> {BRAND.phone}</a>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
