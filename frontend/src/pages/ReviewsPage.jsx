import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';
import { SEO } from '@/components/brand/SEO';
import { PageHero } from '@/components/brand/PageHero';
import { FadeUp, StaggerGroup } from '@/components/brand/FadeUp';
import { SectionRule } from '@/components/brand/SectionRule';
import { REVIEWS, IMAGES } from '@/constants/brand';

export default function ReviewsPage() {
  return (
    <div data-testid="page-reviews">
      <SEO title="Client Reviews | Love & Legacy Executive Transportation" description="Read what Atlanta's executives, artists, and professionals say about Love & Legacy. 5-star rated executive transportation." />
      <PageHero overline="— Client Reviews" title="Five Stars." accent="Every Time." subhead="The words of our clients speak louder than any advertisement." image={IMAGES.hotelValet} />
      <SectionRule />

      <section className="ll-section bg-gradient-to-b from-[#3A1660] via-[var(--ll-purple)] to-[#3A1660]" data-testid="reviews-page">
        <div className="ll-container">
          <FadeUp className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={22} fill="#D4AF37" stroke="#D4AF37" />)}
            </div>
            <span className="text-[var(--ll-champagne)] tracking-[0.18em] text-xs uppercase">5.0 • Google Rated</span>
          </FadeUp>
          <StaggerGroup className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {REVIEWS.map((r) => (
              <FadeUp key={r.name}>
                <article className="rounded-lg bg-[rgba(11,11,11,0.55)] border border-[rgba(212,175,55,0.30)] p-7 backdrop-blur-sm h-full">
                  <div className="flex items-center gap-1 text-[var(--ll-gold)]">{Array.from({ length: r.stars }).map((_, i) => <Star key={i} size={16} fill="#D4AF37" stroke="#D4AF37" />)}</div>
                  <Quote size={22} className="text-[var(--ll-gold)] opacity-50 mt-5" />
                  <p className="mt-3 text-sm text-white/90 leading-7">“{r.quote}”</p>
                  <div className="mt-6 ll-rule" />
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-serif text-lg">{r.name}</span>
                    <span className="text-[10px] tracking-[0.22em] uppercase text-[var(--ll-champagne)]">{r.role}</span>
                  </div>
                </article>
              </FadeUp>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <SectionRule />

      <section className="ll-section bg-[var(--ll-ink)]">
        <div className="ll-container text-center max-w-2xl mx-auto">
          <FadeUp>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">Ready to <span className="text-[var(--ll-gold)]">Experience It?</span></h2>
            <p className="mt-5 text-white/80">Reserve your ride or share your own.</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book" className="ll-cta-primary">Book Your Ride</Link>
              <a href="https://g.page/r/love-legacy/review" target="_blank" rel="noreferrer" className="ll-cta-ghost">Leave a Review</a>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
