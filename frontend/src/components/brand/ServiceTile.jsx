import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const ServiceTile = ({ icon: Icon, eyebrow, title, blurb, to, cta = 'Explore', index = 0 }) => (
  <Link
    to={to}
    data-testid="service-tile"
    className="ll-service-tile group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ll-gold)]"
  >
    <div className="flex items-start justify-between">
      <div className="h-14 w-14 rounded-full bg-[#4B1E78] border border-[rgba(212,175,55,0.40)] flex items-center justify-center group-hover:bg-[#0B0B0B] transition-colors">
        {Icon && <Icon size={22} className="text-[var(--ll-gold)]" />}
      </div>
      <span className="text-[10px] tracking-[0.28em] text-[var(--ll-champagne)] uppercase">0{index + 1}</span>
    </div>
    <h3 className="font-serif text-2xl md:text-[28px] mt-7 text-[var(--ll-ivory)] leading-[1.15]">{title}</h3>
    <p className="mt-4 text-sm text-white/75 leading-7">{blurb}</p>
    <span className="mt-auto pt-8 ll-link-gold inline-flex items-center" data-testid="service-tile-cta">
      {cta} <ArrowUpRight size={14} />
    </span>
  </Link>
);

export default ServiceTile;
