import React from 'react';
import { ServicePageTemplate } from '@/components/brand/ServicePageTemplate';
import { IMAGES } from '@/constants/brand';

export default function ExecutiveProtectionPage() {
  return (
    <ServicePageTemplate
      meta={{
        title: 'Executive Protection Transportation | Love & Legacy ATL',
        description: 'Discreet executive protection transportation in Atlanta. Certified, confidential, professional. Quietly excellent.',
      }}
      hero={{
        crumb: 'Executive Protection',
        overline: 'CERTIFIED · CONFIDENTIAL · DISCREET',
        title: 'The highest standard',
        accent: 'of protection in motion.',
        subhead: 'Executive Protection · Secure Transportation · Confidential Logistics',
        image: IMAGES.ecoChauffeurEx,
      }}
      image={IMAGES.ecoSecurityHotel}
      intro={{
        overline: 'Executive Protection',
        heading: 'More than transportation.',
        body: 'For clients who require more than transportation — who require a trained, discreet professional capable of ensuring their safety and privacy at every moment. Our protection presence is low-profile, professional, and quietly excellent.',
      }}
      signals={{
        heading: 'Protection Standards',
        items: [
          'Executive protection certified and trained',
          'Advance route planning and risk assessment',
          'Strict non-disclosure — client identity and movement never disclosed',
          'Available for principals, family details, and high-profile engagements',
          'Low-profile professional presentation — never tactical, never visible',
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
