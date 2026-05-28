import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { Crest } from './Crest';
import { BRAND } from '@/constants/brand';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Fleet', to: '/fleet' },
  { label: 'Experience', to: '/experience' },
  { label: 'Reviews', to: '/reviews' },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? 'bg-[rgba(11,11,11,0.94)] backdrop-blur-md border-b border-[rgba(212,175,55,0.22)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="ll-container flex items-center justify-between h-[72px] md:h-[88px]">
        <Link to="/" aria-label="Love & Legacy home" className="flex items-center gap-3" data-testid="nav-logo">
          <Crest size={36} withText />
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className={({ isActive }) =>
                `text-[12px] tracking-[0.22em] uppercase font-medium transition-colors duration-200 ${
                  isActive ? 'text-[var(--ll-gold)]' : 'text-[var(--ll-ivory)] hover:text-[var(--ll-gold)]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${BRAND.phoneTel}`}
            className="hidden md:inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-[var(--ll-champagne)] hover:text-[var(--ll-gold)] transition-colors"
            data-testid="nav-call-button"
          >
            <Phone size={14} /> {BRAND.phone}
          </a>
          <Link to="/book" className="hidden md:inline-flex ll-cta-primary !h-11 !px-6" data-testid="nav-reserve-button">
            Reserve
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-[rgba(212,175,55,0.35)] text-[var(--ll-gold)]"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            data-testid="nav-mobile-menu-button"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden" data-testid="nav-mobile-drawer">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-[#0B0B0B] border-l border-[rgba(212,175,55,0.22)] flex flex-col">
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-[rgba(212,175,55,0.18)]">
              <Crest size={30} />
              <button onClick={() => setOpen(false)} className="w-10 h-10 inline-flex items-center justify-center text-[var(--ll-gold)]" aria-label="Close menu" data-testid="nav-mobile-close-button">
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-3 py-4" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `block px-4 py-4 text-[14px] tracking-[0.18em] uppercase font-medium rounded-md transition-colors ${
                      isActive ? 'text-[var(--ll-gold)] bg-[rgba(212,175,55,0.06)]' : 'text-[var(--ll-ivory)]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="ll-rule my-3" />
              <a href={`tel:${BRAND.phoneTel}`} className="px-4 py-3 text-[13px] tracking-[0.2em] uppercase text-[var(--ll-champagne)]">{BRAND.phone}</a>
              <Link to="/book" className="ll-cta-primary mx-3 mt-2">Reserve Your Experience</Link>
              <Link to="/corporate-inquiry" className="ll-cta-ghost mx-3 mt-3">Corporate Inquiry</Link>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Header;
