import React from 'react';
import { SEO } from '@/components/brand/SEO';
import { PageHero } from '@/components/brand/PageHero';
import { SectionRule } from '@/components/brand/SectionRule';
import { FadeUp } from '@/components/brand/FadeUp';
import { IMAGES } from '@/constants/brand';

const SECTIONS = [
  { title: 'Introduction', body: 'Love & Legacy Executive Transportation LLC (\u201cLove & Legacy\u201d, \u201cwe\u201d, \u201cus\u201d) respects your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you book or inquire about our services.' },
  { title: 'Information We Collect', body: 'We collect information you submit through our booking, contact, and corporate inquiry forms (name, email, phone, trip details). We also collect anonymous analytics to improve the site experience.' },
  { title: 'How We Use Information', body: 'We use information solely to coordinate your transportation request, respond to your inquiry, and improve our services. We never sell client data.' },
  { title: 'Discretion', body: 'Client identities, destinations, and schedules are confidential. Internal access is restricted to team members responsible for executing your booking.' },
  { title: 'Cookies', body: 'We use minimal cookies for essential site functionality and anonymous analytics. You may disable cookies via your browser settings.' },
  { title: 'Contact', body: 'Privacy questions: hello@loveandlegacy.transport.' },
];

export default function PrivacyPage() {
  return (
    <div data-testid="page-privacy">
      <SEO title="Privacy Policy | Love & Legacy" description="How we collect, use, and safeguard your information." />
      <PageHero overline="— Legal" title="Privacy" accent="Policy." image={IMAGES.heroAlt} height="min-h-[55svh]" />
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
