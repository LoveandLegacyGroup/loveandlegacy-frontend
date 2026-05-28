import React from 'react';
import { BRAND } from '@/constants/brand';

/**
 * ReserveLink \u2014 unified entry into the HubSpot booking & inquiry form.
 * Opens HubSpot in a new tab. All Reserve / Book Now / Inquiry CTAs use this.
 */
export const ReserveLink = ({ children = 'Reserve Your Experience', className = 'll-cta-primary', ...rest }) => (
  <a
    href={BRAND.hubspotForm}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    data-testid="reserve-link"
    {...rest}
  >
    {children}
  </a>
);

export default ReserveLink;
