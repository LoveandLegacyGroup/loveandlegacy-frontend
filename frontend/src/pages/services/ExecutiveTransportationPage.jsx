import React from 'react';
import { ServicePageTemplate } from '@/components/brand/ServicePageTemplate';
import { IMAGES } from '@/constants/brand';

export default function ExecutiveTransportationPage() {
  return (
    <ServicePageTemplate
      meta={{
        title: 'Executive Transportation Atlanta | Love & Legacy',
        description: 'Premium executive chauffeur service in Atlanta. Corporate accounts, confidential rides, and the standard Atlanta executives demand.',
      }}
      hero={{
        crumb: 'Executive Transportation',
        overline: 'CORPORATE • ATLANTA',
        title: 'Transportation That Reflects the',
        accent: 'Standard You Hold Yourself To.',
        subhead: 'Corporate Runs • Executive Meetings • Client Entertainment • Business Travel',
        image: IMAGES.chauffeur,
      }}
      image={IMAGES.chauffeur}
      intro={{
        overline: 'Executive Transportation',
        heading: 'Arrive Before You Speak.',
        body: 'When the meeting matters — when the impression counts — Love & Legacy ensures your arrival commands the room before you say a word.',
      }}
      signals={{
        heading: 'The Executive Standard',
        items: [
          'Professional chauffeur — not a rideshare driver',
          'Immaculate vehicle for every engagement',
          'Confidential — we do not disclose client schedules or destinations',
          'Corporate accounts available — streamlined invoicing',
          'Available for multi-stop executive days, roadshows, and client entertainment',
          'Discreet, professional presentation at every doorway',
        ],
      }}
      ideal={{
        heading: 'For executives who treat transportation as a reflection of their standard.',
        items: ['C-suite executives', 'Investment banking', 'Law firms', 'Healthcare leadership', 'Family offices', 'Visiting board members'],
      }}
      cta={{ heading: 'Book Your Executive Ride', primaryLabel: 'Reserve Executive Transportation' }}
      reverseImage
    />
  );
}
