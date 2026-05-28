import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/brand/SEO';
import { Crest } from '@/components/brand/Crest';

export default function NotFoundPage() {
  return (
    <div className="min-h-[100svh] bg-[var(--ll-ink)] flex items-center justify-center text-center px-6" data-testid="page-404">
      <SEO title="Not Found | Love & Legacy" description="The page you requested could not be found." />
      <div>
        <Crest size={64} />
        <h1 className="font-serif text-5xl sm:text-6xl mt-8">Page <span className="text-[var(--ll-gold)]">Not Found.</span></h1>
        <p className="mt-4 text-white/75">The page you requested could not be located.</p>
        <Link to="/" className="ll-cta-primary mt-10 inline-flex">Return Home</Link>
      </div>
    </div>
  );
}
