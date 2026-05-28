import React from 'react';
import { Link } from 'react-router-dom';
import { Crest } from './Crest';
import { BRAND, SERVICES } from '@/constants/brand';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer data-testid="site-footer" className="relative ll-noise bg-[var(--ll-ink)] border-t border-[rgba(212,175,55,0.22)] pt-20 pb-10">
      <div className="ll-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-5">
            <Crest size={42} withText />
            <p className="mt-6 max-w-sm text-[var(--ll-champagne)] text-sm leading-7">
              {BRAND.tagline}
            </p>
            <p className="mt-4 max-w-sm text-white/70 text-sm leading-7">
              Atlanta’s premier executive transportation, executive protection, and VIP logistics partner. Built in Atlanta. Built for those who require more.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="overline mb-5">Services</div>
            <ul className="space-y-3">
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <Link className="text-sm text-white/75 hover:text-[var(--ll-gold)] transition-colors" to={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="overline mb-5">Company</div>
            <ul className="space-y-3 text-sm">
              <li><Link className="text-white/75 hover:text-[var(--ll-gold)] transition-colors" to="/about">About</Link></li>
              <li><Link className="text-white/75 hover:text-[var(--ll-gold)] transition-colors" to="/experience">Experience</Link></li>
              <li><Link className="text-white/75 hover:text-[var(--ll-gold)] transition-colors" to="/fleet">Fleet</Link></li>
              <li><Link className="text-white/75 hover:text-[var(--ll-gold)] transition-colors" to="/reviews">Reviews</Link></li>
              <li><Link className="text-white/75 hover:text-[var(--ll-gold)] transition-colors" to="/book">Book Now</Link></li>
              <li><Link className="text-white/75 hover:text-[var(--ll-gold)] transition-colors" to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="overline mb-5">Connect</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/75"><Phone size={14} className="text-[var(--ll-gold)]" /> <a href={`tel:${BRAND.phoneTel}`} className="hover:text-[var(--ll-gold)]">{BRAND.phone}</a></li>
              <li className="flex items-center gap-2 text-white/75"><Mail size={14} className="text-[var(--ll-gold)]" /> <a href={`mailto:${BRAND.email}`} className="hover:text-[var(--ll-gold)] break-all">{BRAND.email}</a></li>
              <li className="flex items-center gap-2 text-white/75"><MapPin size={14} className="text-[var(--ll-gold)]" /> {BRAND.location}</li>
              <li className="flex items-center gap-2 text-white/75"><Instagram size={14} className="text-[var(--ll-gold)]" /> <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-[var(--ll-gold)]">{BRAND.instagram}</a></li>
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
