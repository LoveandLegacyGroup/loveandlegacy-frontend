import React from 'react';
import { ServicePageTemplate } from '@/components/brand/ServicePageTemplate';
import { IMAGES } from '@/constants/brand';

export default function ProductionTransportationPage() {
  return (
    <ServicePageTemplate
      meta={{
        title: 'Production Transportation Atlanta | Film & Music | Love & Legacy',
        description: "Atlanta film and music production transportation. Crew, artist, and talent logistics. Trusted by Atlanta’s production community.",
      }}
      hero={{
        crumb: 'Production Transportation',
        overline: 'FILM • TV • MUSIC',
        title: 'Atlanta Productions Move on',
        accent: 'Love & Legacy Time.',
        subhead: 'Film Sets • Music Productions • Artist Logistics • Studio Transportation',
        image: IMAGES.production,
      }}
      image={IMAGES.production}
      intro={{
        overline: 'Production Transportation',
        heading: 'Hit the Call Sheet. Every Time.',
        body: "Atlanta is one of the world’s premier production markets. The talent, crew, and artists that power it trust Love & Legacy to keep the schedule and protect the standard.",
      }}
      signals={{
        heading: 'Production Standards',
        items: [
          'On-time, every-time call-sheet discipline',
          'Confidential talent logistics',
          'Studio, hotel, and on-location runs',
          'Available for short stints or multi-week productions',
          'Coordinator-friendly point of contact',
          'Discreet, low-profile presentation',
        ],
      }}
      ideal={{
        heading: 'For productions that protect their time as fiercely as their talent.',
        items: ['Film & TV', 'Music tours & sessions', 'Talent logistics', 'Studio runs', 'Casting & press', 'Award-season runs'],
      }}
      cta={{ heading: 'Book Production Transportation', primaryLabel: 'Book Production Transport' }}
    />
  );
}
