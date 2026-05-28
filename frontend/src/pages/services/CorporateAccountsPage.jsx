import React from 'react';
import { Link } from 'react-router-dom';
import { ServicePageTemplate } from '@/components/brand/ServicePageTemplate';
import { IMAGES } from '@/constants/brand';

export default function CorporateAccountsPage() {
  return (
    <ServicePageTemplate
      meta={{
        title: 'Corporate Transportation Accounts | Love & Legacy',
        description: 'Monthly corporate transportation accounts in Atlanta. Priority booking, streamlined invoicing, executive standard.',
      }}
      hero={{
        crumb: 'Corporate Accounts',
        overline: 'MONTHLY ACCOUNTS • PRIORITY',
        title: 'Elevate How',
        accent: 'Your Company Moves.',
        subhead: 'Monthly Accounts • Priority Scheduling • Streamlined Invoicing',
        image: IMAGES.corporate,
      }}
      image={IMAGES.corporate}
      intro={{
        overline: 'Corporate Accounts',
        heading: 'Stop Expensing Rideshares.',
        body: 'Stop the inconsistency. Love & Legacy corporate accounts deliver a dedicated transportation partner for every business trip, client meeting, and executive movement — billed cleanly, executed flawlessly.',
      }}
      signals={{
        heading: 'Corporate Account Benefits',
        items: [
          'Priority booking — your dates held first',
          'Dedicated account manager',
          'Monthly invoicing — no individual transaction fees',
          'Consistent vehicle and presentation standard',
          'Discretion guaranteed for all company executives',
          'Volume pricing for retainer commitments',
        ],
      }}
      ideal={{
        heading: 'For companies that refuse to compromise on how their team travels.',
        items: ['Family offices', 'Law firms', 'Healthcare', 'Private equity', 'Sports & entertainment orgs', 'Executive teams'],
      }}
      cta={{ heading: 'Inquire About a Corporate Account', primaryLabel: 'Corporate Inquiry' }}
      reverseImage
    />
  );
}
