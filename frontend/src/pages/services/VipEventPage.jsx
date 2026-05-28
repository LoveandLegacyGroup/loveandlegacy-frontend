import React from 'react';
import { ServicePageTemplate } from '@/components/brand/ServicePageTemplate';
import { IMAGES } from '@/constants/brand';

export default function VipEventPage() {
  return (
    <ServicePageTemplate
      meta={{
        title: 'VIP Event Transportation Atlanta | Love & Legacy',
        description: "Arrive at galas, concerts, weddings and private events in Atlanta\u2019s premier VIP transportation. Your arrival is part of the event.",
      }}
      hero={{
        crumb: 'VIP & Event',
        overline: 'GALAS • CONCERTS • WEDDINGS',
        title: 'Your Arrival',
        accent: 'Is Part of the Event.',
        subhead: 'Galas • Concerts • Weddings • Private Events • Red Carpet',
        image: IMAGES.event,
      }}
      image={IMAGES.event}
      intro={{
        overline: 'VIP & Event Transportation',
        heading: 'The Door Opens. The Evening Begins.',
        body: 'The moment the door opens and you step out — that is the first statement of the evening. Make it in a Love & Legacy.',
      }}
      signals={{
        heading: 'Event Types We Serve',
        items: [
          'Wedding transportation — bridal party, couple, family logistics',
          'Gala and charity event arrivals',
          'Concert and private venue transportation',
          'Birthday and milestone celebrations',
          'Sports events — State Farm Arena, Truist Park',
          'Multi-vehicle group coordination',
        ],
      }}
      ideal={{
        heading: 'For arrivals that should be remembered.',
        items: ['Wedding parties', 'Gala attendees', 'Concert VIP', 'Birthday celebrations', 'Sports events', 'Red carpet'],
      }}
      cta={{ heading: 'Reserve Event Transportation', primaryLabel: 'Book VIP & Event' }}
    />
  );
}
