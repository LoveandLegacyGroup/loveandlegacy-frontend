import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileStickyBar } from './MobileStickyBar';

export const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return (
    <div className="min-h-screen bg-[var(--ll-ink)] text-[var(--ll-ivory)]">
      <Header />
      <main className="pb-24 md:pb-0" id="main">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default Layout;
