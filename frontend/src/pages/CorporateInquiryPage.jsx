import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '@/components/brand/SEO';
import { PageHero } from '@/components/brand/PageHero';
import { SectionRule } from '@/components/brand/SectionRule';
import { IMAGES, BRAND } from '@/constants/brand';
import { createCorporateInquiry } from '@/lib/api';
import { toast } from 'sonner';
import { CheckCircle2 } from 'lucide-react';

const VOLUMES = ['1–5 rides', '6–20 rides', '21–50 rides', '50+ rides'];
const USE_CASES = ['Executive Travel', 'Client Entertainment', 'Airport Runs', 'Mixed (Multiple Use Cases)'];

export default function CorporateInquiryPage() {
  const nav = useNavigate();
  const [form, setForm] = useState({ company: '', name: '', role: '', email: '', phone: '', monthly_volume: '', use_case: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    const v = {};
    if (!form.company) v.company = 'Required';
    if (!form.name) v.name = 'Required';
    if (!form.email) v.email = 'Required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) v.email = 'Invalid email';
    setErrors(v);
    if (Object.keys(v).length) return;
    try {
      setSubmitting(true);
      await createCorporateInquiry(form);
      toast.success('Corporate inquiry received — priority follow-up within 1 business day.');
      nav('/thank-you?type=corporate');
    } catch {
      toast.error('Could not submit — please try again or call us.');
    } finally { setSubmitting(false); }
  };

  return (
    <div data-testid="page-corporate-inquiry">
      <SEO title="Corporate Inquiry | Love & Legacy Executive Transportation" description="Establish a corporate transportation account in Atlanta. Priority booking, streamlined invoicing, executive standard." />
      <PageHero overline="— Corporate Inquiry" title="Elevate How" accent="Your Company Moves." subhead="Monthly Accounts • Priority Scheduling • Streamlined Invoicing" image={IMAGES.corporate} />
      <SectionRule />
      <section className="ll-section bg-[var(--ll-ink)]" data-testid="corporate-inquiry-page">
        <div className="ll-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <form onSubmit={submit} data-testid="corporate-inquiry-form" className="lg:col-span-8 rounded-lg bg-[var(--ll-ink-2)] border border-[rgba(246,241,230,0.08)] p-7 md:p-10" noValidate>
            <div className="overline">— Tell Us About Your Company —</div>
            <h2 className="font-serif text-2xl sm:text-3xl mt-3 leading-tight">A dedicated transportation partner for your team.</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="ll-label">Company</label>
                <input className="ll-input" data-testid="corp-company" value={form.company} onChange={update('company')} />
                {errors.company && <p className="text-[var(--ll-gold)] text-xs mt-2">{errors.company}</p>}
              </div>
              <div>
                <label className="ll-label">Your Name</label>
                <input className="ll-input" data-testid="corp-name" value={form.name} onChange={update('name')} />
                {errors.name && <p className="text-[var(--ll-gold)] text-xs mt-2">{errors.name}</p>}
              </div>
              <div>
                <label className="ll-label">Your Role</label>
                <input className="ll-input" data-testid="corp-role" value={form.role} onChange={update('role')} />
              </div>
              <div>
                <label className="ll-label">Phone</label>
                <input className="ll-input" type="tel" data-testid="corp-phone" value={form.phone} onChange={update('phone')} />
              </div>
              <div className="md:col-span-2">
                <label className="ll-label">Work Email</label>
                <input className="ll-input" type="email" data-testid="corp-email" value={form.email} onChange={update('email')} />
                {errors.email && <p className="text-[var(--ll-gold)] text-xs mt-2">{errors.email}</p>}
              </div>
              <div>
                <label className="ll-label">Expected Monthly Volume</label>
                <select className="ll-select" data-testid="corp-volume" value={form.monthly_volume} onChange={update('monthly_volume')}>
                  <option value="">Select volume</option>
                  {VOLUMES.map(v => <option key={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <label className="ll-label">Primary Use Case</label>
                <select className="ll-select" data-testid="corp-usecase" value={form.use_case} onChange={update('use_case')}>
                  <option value="">Select use case</option>
                  {USE_CASES.map(v => <option key={v}>{v}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="ll-label">Notes</label>
                <textarea rows={4} className="ll-textarea" data-testid="corp-notes" value={form.notes} onChange={update('notes')} />
              </div>
            </div>
            <div className="mt-10">
              <button type="submit" disabled={submitting} data-testid="corp-submit-button" className="ll-cta-primary disabled:opacity-60">{submitting ? 'Submitting…' : 'Submit Corporate Inquiry'}</button>
            </div>
          </form>
          <aside className="lg:col-span-4 rounded-lg bg-[var(--ll-ink-2)] border border-[rgba(212,175,55,0.20)] p-7 md:p-8">
            <div className="overline">— SLA —</div>
            <h3 className="font-serif text-xl mt-3">What you can expect.</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[var(--ll-gold)] mt-0.5" /><span className="text-white/85 leading-6">Priority booking — your dates held first</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[var(--ll-gold)] mt-0.5" /><span className="text-white/85 leading-6">Dedicated account manager</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[var(--ll-gold)] mt-0.5" /><span className="text-white/85 leading-6">Monthly invoicing — streamlined</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[var(--ll-gold)] mt-0.5" /><span className="text-white/85 leading-6">Discretion across executive team</span></li>
            </ul>
            <div className="ll-rule my-6" />
            <p className="text-xs text-[var(--ll-champagne)] tracking-[0.18em] uppercase">Priority response</p>
            <a href={`tel:${BRAND.phoneTel}`} className="mt-2 inline-block font-serif text-2xl text-[var(--ll-gold)]">{BRAND.phone}</a>
          </aside>
        </div>
      </section>
    </div>
  );
}
