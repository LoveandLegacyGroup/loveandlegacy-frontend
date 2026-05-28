import React from 'react';
import { SEO } from '@/components/brand/SEO';
import { PageHero } from '@/components/brand/PageHero';
import { SectionRule } from '@/components/brand/SectionRule';
import { FadeUp } from '@/components/brand/FadeUp';
import { IMAGES } from '@/constants/brand';

const SECTIONS = [
  { title: 'Acceptance of Terms', body: 'By booking or using services provided by Love & Legacy Executive Transportation LLC, you agree to these Terms of Service.' },
  { title: 'Reservations & Confirmation', body: 'Bookings are confirmed by Love & Legacy within two hours of receipt. Reservations are considered scheduled only after written confirmation from our team.' },
  { title: 'Pricing', body: 'Standard rates are fixed and disclosed in writing. No surge pricing. Additional charges may apply for wait time, multiple stops, or extended hours.' },
  { title: 'Cancellations', body: 'Standard cancellations are accepted up to 4 hours prior to scheduled pickup. Late cancellations may be subject to a service fee.' },
  { title: 'Discretion', body: 'Discretion is core to our service. Both parties agree to respect confidentiality of all engagement details.' },
  { title: 'Limitation of Liability', body: 'Love & Legacy maintains comprehensive insurance and licensing required to operate in Georgia. Service is subject to applicable laws.' },
  { title: 'Contact', body: 'Questions regarding these terms: hello@loveandlegacy.transport.' },
];

export default function TermsPage() {
  return (
    <div data-testid="page-terms">
      <SEO title="Terms of Service | Love & Legacy" description="Service terms and reservation policies." />
      <PageHero overline="— Legal" title="Terms of" accent="Service." image={IMAGES.heroAlt} height="min-h-[55svh]" />
      <SectionRule />
      <section className="ll-section bg-[var(--ll-ink)]">
        <div className="ll-container max-w-3xl">
          {SECTIONS.map(s => (
            <FadeUp key={s.title} className="mb-10">
              <h2 className="font-serif text-2xl text-[var(--ll-gold)]">{s.title}</h2>
              <p className="mt-3 text-white/80 leading-7">{s.body}</p>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
