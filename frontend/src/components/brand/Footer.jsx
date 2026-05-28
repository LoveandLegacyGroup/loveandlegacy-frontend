import React from 'react';
import { Link } from 'react-router-dom';
import { Crest } from './Crest';
import { BRAND, SERVICES } from '@/constants/brand';
import { Instagram, Mail, MapPin, Phone, Facebook, Star } from 'lucide-react';

// Lightweight TikTok glyph (lucide doesn't include TikTok)
const TikTokIcon = ({ size = 14, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M16.5 5.5a4.5 4.5 0 0 0 3.5 4v3a7.5 7.5 0 0 1-4-1.2v6.7a5 5 0 1 1-5-5c.3 0 .7 0 1 .1v3.2a2 2 0 1 0 1.5 2V3h3a4.5 4.5 0 0 0 0 .5z"/>
  </svg>
);

export const Footer = () => {
  const social = [
    { label: 'Instagram', href: BRAND.instagramUrl, Icon: Instagram },
    { label: 'Facebook',  href: BRAND.facebookUrl,  Icon: Facebook },
    { label: 'TikTok',    href: BRAND.tiktokUrl,    Icon: TikTokIcon },
    { label: 'Google Reviews', href: BRAND.googleReviewsUrl, Icon: Star },
  ];
  return (
    <footer data-testid="site-footer" className="relative ll-noise bg-[var(--ll-ink)] border-t border-[rgba(212,175,55,0.22)] pt-20 pb-10">
      <div className="ll-container">
        {/* Top: Full crest + tagline centered */}
        <div className="flex flex-col items-center text-center mb-14">
          <Crest size={120} variant="master" className="!w-[120px] !h-[120px] md:!w-[140px] md:!h-[140px]" />
          <p className="mt-6 overline" style={{ letterSpacing: '0.34em', color: 'var(--ll-gold)' }}>{BRAND.tagline}</p>
          <p className="mt-3 text-[11px] tracking-[0.24em] uppercase text-[var(--ll-champagne)]">{BRAND.positioning}</p>
        </div>

        <div className="ll-rule mb-14" />

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-4">
            <div className="overline mb-5">Services</div>
            <ul className="space-y-3">
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <Link className="text-sm text-white/75 hover:text-[var(--ll-gold)] transition-colors" to={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="overline mb-5">Company</div>
            <ul className="space-y-3 text-sm">
              <li><Link className="text-white/75 hover:text-[var(--ll-gold)] transition-colors" to="/about">About</Link></li>
              <li><Link className="text-white/75 hover:text-[var(--ll-gold)] transition-colors" to="/experience">Experience</Link></li>
              <li><Link className="text-white/75 hover:text-[var(--ll-gold)] transition-colors" to="/fleet">Fleet</Link></li>
              <li><Link className="text-white/75 hover:text-[var(--ll-gold)] transition-colors" to="/reviews">Reviews</Link></li>
              <li><a className="text-white/75 hover:text-[var(--ll-gold)] transition-colors" href={BRAND.hubspotForm} target="_blank" rel="noopener noreferrer">Reserve / Inquiry</a></li>
              <li><Link className="text-white/75 hover:text-[var(--ll-gold)] transition-colors" to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="overline mb-5">Contact</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/75"><Phone size={13} className="text-[var(--ll-gold)] mt-1" /> <a href={`tel:${BRAND.phoneTel}`} className="hover:text-[var(--ll-gold)]">{BRAND.phone}</a></li>
              <li className="flex items-start gap-2 text-white/75"><Mail size={13} className="text-[var(--ll-gold)] mt-1" /> <a href={`mailto:${BRAND.email}`} className="hover:text-[var(--ll-gold)] break-all">{BRAND.email}</a></li>
              <li className="flex items-start gap-2 text-white/75"><MapPin size={13} className="text-[var(--ll-gold)] mt-1" /> {BRAND.location}</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="overline mb-5">Social</div>
            <ul className="space-y-3 text-sm">
              {social.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/75 hover:text-[var(--ll-gold)] transition-colors" data-testid={`footer-social-${label.toLowerCase().replace(/\s+/g,'-')}`}>
                    <Icon size={14} className="text-[var(--ll-gold)]" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ll-rule my-10" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/55 tracking-wider">
          <p>© 2026 Love &amp; Legacy Executive Transportation LLC — All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-[var(--ll-gold)]">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-[var(--ll-gold)]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
