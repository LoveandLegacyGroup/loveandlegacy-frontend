import React from 'react';
import { ServicePageTemplate } from '@/components/brand/ServicePageTemplate';
import { IMAGES } from '@/constants/brand';

export default function AirportTransfersPage() {
  return (
    <ServicePageTemplate
      meta={{
        title: 'Atlanta Airport Transfers | Love & Legacy Transportation',
        description: 'Never miss a flight. Professional airport transfers from Hartsfield-Jackson and all Atlanta area airports. Fixed rates. 24/7 availability.',
      }}
      hero={{
        crumb: 'Airport Transfers',
        overline: 'ATL • PDK • ALL ATLANTA AIRPORTS',
        title: 'Never Miss a Flight.',
        accent: 'Never Hunt for Your Car.',
        subhead: 'Hartsfield-Jackson • Dekalb Peachtree • All Atlanta Area Airports',
        image: IMAGES.privateJet,
      }}
      image={IMAGES.privateJet}
      intro={{
        overline: 'Airport Transfers',
        heading: 'Curbside Presence. Zero Friction.',
        body: "Professional airport transfers that track your flight, wait for your landing, and ensure you move through one of the world's busiest airports with zero friction — every single time.",
      }}
      signals={{
        heading: 'Why Love & Legacy for Airports',
        items: [
          'Real-time flight tracking — we know before you land',
          'Curbside presence at arrivals — no hunting, no waiting',
          'Guaranteed meet-and-greet on request',
          'Fixed rates — no surge pricing, ever',
          '24/7 availability — 3 AM or 3 PM, we are there',
          'Premium luggage handling included',
        ],
      }}
      ideal={{
        heading: 'For travelers who refuse to scramble for ground transportation.',
        items: ['C-suite executives', 'VIP entertainment', 'Family travel', 'Private aviation clients', 'International arrivals', 'High-frequency business travelers'],
      }}
      cta={{
        heading: 'Reserve Your Airport Transfer',
        body: 'Confirmed within two hours. Flight tracked. Driver curbside.',
        primaryLabel: 'Book Airport Transfer',
      }}
    />
  );
}
