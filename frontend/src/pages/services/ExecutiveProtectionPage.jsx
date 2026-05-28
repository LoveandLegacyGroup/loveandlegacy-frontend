import React from 'react';
import { ServicePageTemplate } from '@/components/brand/ServicePageTemplate';
import { IMAGES } from '@/constants/brand';

export default function ExecutiveProtectionPage() {
  return (
    <ServicePageTemplate
      meta={{
        title: 'Executive Protection Transportation | Love & Legacy ATL',
        description: 'Discreet executive protection transportation in Atlanta. Certified, confidential, professional. For those who require more.',
      }}
      hero={{
        crumb: 'Executive Protection',
        overline: 'CERTIFIED • CONFIDENTIAL • DISCREET',
        title: 'The Highest Standard',
        accent: 'Of Protection in Motion.',
        subhead: 'Executive Protection • Secure Transportation • Confidential Logistics',
        image: IMAGES.protection,
      }}
      image={IMAGES.protection}
      intro={{
        overline: 'Executive Protection',
        heading: 'More Than Transportation.',
        body: 'For clients who require more than transportation — who require a trained, discreet professional capable of ensuring their safety and privacy at every moment.',
      }}
      signals={{
        heading: 'Protection Standards',
        items: [
          'Executive protection certified and trained',
          'Advance route planning and security assessment',
          'Strict non-disclosure — client identity and movement never disclosed',
          'Available for individual details, team principals, and high-profile events',
          'Trained in low-profile professional presentation',
          'Inquiries handled with the utmost confidentiality',
        ],
      }}
      ideal={{
        heading: 'For principals who require quiet, professional protection.',
        items: ['Public figures', 'Executive principals', 'Visiting dignitaries', 'High-profile entertainment', 'Family principals', 'Crisis-response support'],
      }}
      cta={{ heading: 'Request Protection Detail — Confidential Inquiry', primaryLabel: 'Confidential Inquiry' }}
      reverseImage
    />
  );
}
