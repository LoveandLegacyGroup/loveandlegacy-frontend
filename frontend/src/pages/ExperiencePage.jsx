import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Clock, Lock, ShieldCheck, Sparkles } from 'lucide-react';
import { SEO } from '@/components/brand/SEO';
import { PageHero } from '@/components/brand/PageHero';
import { FadeUp, StaggerGroup } from '@/components/brand/FadeUp';
import { SectionRule } from '@/components/brand/SectionRule';
import { IMAGES } from '@/constants/brand';

const PILLARS = [
  { icon: Clock, title: '10 Minutes Early. Always.', body: 'Our drivers arrive ten minutes before scheduled pickup. Every run. Without exception.' },
  { icon: Lock, title: 'Discretion as Default.', body: 'Names, schedules, and destinations stay between us. Our team is trained to operate quietly.' },
  { icon: Sparkles, title: 'Hospitality-Grade Presentation.', body: 'Suit. Posture. Door. The small details that signal a different category of service.' },
  { icon: ShieldCheck, title: 'Trained. Certified. Insured.', body: 'Executive protection certified team. Comprehensive insurance. Full licensing in Georgia.' },
  { icon: Award, title: 'Five Stars Is a Floor.', body: 'Reviews are the public proof. Standard is the private practice. Both run on consistency.' },
];

export default function ExperiencePage() {
  return (
    <div data-testid="page-experience">
      <SEO title="The Love & Legacy Experience" description="This is what we mean by excellence. The Love & Legacy standard — operational, not aspirational." />
      <PageHero overline="— The Experience" title="This Is What We Mean by" accent="Excellence." subhead="Our Standard • Our Promise • Our Founder" image={IMAGES.chauffeurDoor} />

      <SectionRule />

      {/* Standard */}
      <section className="ll-section bg-[var(--ll-ink)]">
        <div className="ll-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <FadeUp className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-lg ll-img-overlay aspect-[16/10]">
              <img src={IMAGES.interior} alt="Inside the Love & Legacy vehicle" className="w-full h-full object-cover" />
            </div>
          </FadeUp>
          <FadeUp className="lg:col-span-5">
            <div className="overline">— Our Standard —</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] mt-4 leading-[1.15] text-balance">Excellence Is Operational, Not Aspirational.</h2>
            <p className="mt-6 text-white/85 leading-8">At Love &amp; Legacy, excellence is not aspirational. It is operational. It is in the way our driver arrives 10 minutes before your scheduled pickup. It is in the way the cabin is prepared before you open the door. It is in the silence that greets you when you sit down — because your driver understands that sometimes, the most professional thing you can offer someone is quiet.</p>
          </FadeUp>
        </div>
      </section>

      <SectionRule />

      {/* Why */}
      <section className="ll-section bg-gradient-to-b from-[var(--ll-ink)] via-[#160C28] to-[var(--ll-ink)]">
        <div className="ll-container">
          <FadeUp className="text-center max-w-2xl mx-auto">
            <div className="overline">— Why Love & Legacy —</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-4 leading-[1.1]">Not a Rideshare. <span className="text-[var(--ll-gold)]">Not a Compromise.</span></h2>
          </FadeUp>
          <StaggerGroup className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <FadeUp key={p.title}>
                  <div className="h-full rounded-lg bg-[var(--ll-ink-2)] border border-[rgba(246,241,230,0.08)] p-7 hover:border-[rgba(212,175,55,0.30)] transition-colors">
                    <div className="h-12 w-12 rounded-full bg-[var(--ll-purple)] border border-[rgba(212,175,55,0.4)] flex items-center justify-center">
                      <Icon size={20} className="text-[var(--ll-gold)]" />
                    </div>
                    <h3 className="font-serif text-xl mt-5 leading-tight">{p.title}</h3>
                    <p className="mt-3 text-sm text-white/75 leading-6">{p.body}</p>
                  </div>
                </FadeUp>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <SectionRule />

      {/* Founder */}
      <section className="ll-section bg-[var(--ll-ink)]">
        <div className="ll-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <FadeUp className="lg:col-span-5 order-2 lg:order-1">
            <div className="overline">— The Founder —</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] mt-4 leading-[1.15] text-balance">Driven by <span className="text-[var(--ll-gold)]">Purpose.</span></h2>
            <p className="mt-6 text-white/85 leading-8">Love &amp; Legacy Executive Transportation was founded by <strong className="text-[var(--ll-ivory)]">Dontay Bates</strong>, a veteran of executive protection and luxury client services with over 20 years of experience protecting high-profile individuals and coordinating elite-level movement.</p>
            <p className="mt-5 text-white/85 leading-8">Built in Atlanta, the company was created to bring together luxury transportation, executive protection, and VIP logistics under one elevated experience.</p>
            <p className="mt-5 text-white/85 leading-8">More than transportation, Love &amp; Legacy represents discretion, professionalism, reliability, and presence.</p>
            <p className="mt-6 font-serif italic text-[var(--ll-gold)] text-xl">“Because true luxury is not loud. It’s how you move.”</p>
          </FadeUp>
          <FadeUp className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-lg ll-img-overlay aspect-[4/5] lg:aspect-[4/5]">
              <img src={IMAGES.chauffeur} alt="The Love & Legacy chauffeur in a suit" className="w-full h-full object-cover" style={{ filter: 'saturate(0.85) contrast(1.1)' }} />
            </div>
          </FadeUp>
        </div>
      </section>

      <SectionRule />

      {/* Promise CTA */}
      <section className="ll-section bg-[var(--ll-ink)] text-center">
        <div className="ll-container max-w-3xl mx-auto">
          <FadeUp>
            <SectionRule ornamental className="mb-8" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance">Your Journey. <span className="text-[var(--ll-gold)]">Our Priority.</span></h2>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book" className="ll-cta-primary">Experience It Yourself</Link>
              <Link to="/reviews" className="ll-cta-ghost">Read Our Reviews</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
