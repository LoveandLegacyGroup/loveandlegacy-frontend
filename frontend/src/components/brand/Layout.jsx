import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileStickyBar } from './MobileStickyBar';

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  enter:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -4, transition: { duration: 0.30, ease: [0.4, 0, 1, 1] } },
};

function ScrollResetOnRouteChange() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

export const Layout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-[var(--ll-ink)] text-[var(--ll-ivory)]">
      <ScrollResetOnRouteChange />
      <Header />
      <main className="pb-24 md:pb-0" id="main">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="enter" exit="exit">
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default Layout;
