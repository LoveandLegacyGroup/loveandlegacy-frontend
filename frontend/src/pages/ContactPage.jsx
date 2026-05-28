import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SEO } from '@/components/brand/SEO';
import { PageHero } from '@/components/brand/PageHero';
import { FadeUp } from '@/components/brand/FadeUp';
import { SectionRule } from '@/components/brand/SectionRule';
import { BRAND, IMAGES } from '@/constants/brand';
import { createContact } from '@/lib/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function ContactPage() {
  const nav = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    const v = {};
    if (!form.name) v.name = 'Required';
    if (!form.email) v.email = 'Required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) v.email = 'Invalid email';
    if (!form.message) v.message = 'Required';
    setErrors(v);
    if (Object.keys(v).length) return;
    try {
      setSubmitting(true);
      await createContact(form);
      toast.success('Message received — we\u2019ll respond shortly.');
      nav('/thank-you?type=contact');
    } catch {
      toast.error('Could not submit — please try again or call us.');
    } finally { setSubmitting(false); }
  };

  return (
    <div data-testid="page-contact">
      <SEO title="Contact | Love & Legacy Executive Transportation" description="Reach Atlanta's premier executive transportation. Phone, email, and direct inquiry." />
      <PageHero overline="— Contact" title="Speak with" accent="Love & Legacy." subhead="Direct lines for direct service." image={IMAGES.hotelValet} />
      <SectionRule />
      <section className="ll-section bg-[var(--ll-ink)]" data-testid="contact-page">
        <div className="ll-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <form onSubmit={submit} className="lg:col-span-7 rounded-lg bg-[var(--ll-ink-2)] border border-[rgba(246,241,230,0.08)] p-7 md:p-10" data-testid="contact-form" noValidate>
            <div className="overline">— Send a Message —</div>
            <h2 className="font-serif text-2xl sm:text-3xl mt-3 leading-tight">How can we serve you?</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="ll-label">Name</label>
                <input className="ll-input" data-testid="contact-name" value={form.name} onChange={update('name')} />
                {errors.name && <p className="text-[var(--ll-gold)] text-xs mt-2">{errors.name}</p>}
              </div>
              <div>
                <label className="ll-label">Phone</label>
                <input className="ll-input" type="tel" data-testid="contact-phone" value={form.phone} onChange={update('phone')} />
              </div>
              <div className="md:col-span-2">
                <label className="ll-label">Email</label>
                <input className="ll-input" type="email" data-testid="contact-email" value={form.email} onChange={update('email')} />
                {errors.email && <p className="text-[var(--ll-gold)] text-xs mt-2">{errors.email}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="ll-label">Subject</label>
                <input className="ll-input" data-testid="contact-subject" value={form.subject} onChange={update('subject')} />
              </div>
              <div className="md:col-span-2">
                <label className="ll-label">Message</label>
                <textarea rows={5} className="ll-textarea" data-testid="contact-message" value={form.message} onChange={update('message')} />
                {errors.message && <p className="text-[var(--ll-gold)] text-xs mt-2">{errors.message}</p>}
              </div>
            </div>
            <div className="mt-8">
              <button type="submit" disabled={submitting} data-testid="contact-submit-button" className="ll-cta-primary disabled:opacity-60">{submitting ? 'Sending…' : 'Send Message'}</button>
            </div>
          </form>
          <aside className="lg:col-span-5 rounded-lg bg-[var(--ll-ink-2)] border border-[rgba(212,175,55,0.20)] p-7 md:p-8">
            <div className="overline">— Direct Lines —</div>
            <h3 className="font-serif text-2xl mt-3">Available 24 / 7.</h3>
            <ul className="mt-7 space-y-6 text-sm">
              <li className="flex items-start gap-3"><Phone size={18} className="text-[var(--ll-gold)] mt-0.5" /> <div><div className="text-[10px] tracking-[0.22em] uppercase text-[var(--ll-champagne)]">Phone</div><a href={`tel:${BRAND.phoneTel}`} className="text-white/90">{BRAND.phone}</a></div></li>
              <li className="flex items-start gap-3"><Mail size={18} className="text-[var(--ll-gold)] mt-0.5" /> <div><div className="text-[10px] tracking-[0.22em] uppercase text-[var(--ll-champagne)]">Email</div><a href={`mailto:${BRAND.email}`} className="text-white/90 break-all">{BRAND.email}</a></div></li>
              <li className="flex items-start gap-3"><MapPin size={18} className="text-[var(--ll-gold)] mt-0.5" /> <div><div className="text-[10px] tracking-[0.22em] uppercase text-[var(--ll-champagne)]">Location</div><span className="text-white/90">{BRAND.location}</span></div></li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}
