import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle2, Phone, ShieldCheck, Star, Clock, Lock } from 'lucide-react';
import { SEO } from '@/components/brand/SEO';
import { PageHero } from '@/components/brand/PageHero';
import { FadeUp } from '@/components/brand/FadeUp';
import { SectionRule } from '@/components/brand/SectionRule';
import { BRAND, SERVICES, IMAGES } from '@/constants/brand';
import { createBooking } from '@/lib/api';
import { toast } from 'sonner';

const SERVICE_OPTIONS = SERVICES.map(s => s.name);
const SOURCE_OPTIONS = ['Google', 'Instagram', 'TikTok', 'Referral', 'Returning Client', 'Other'];

export default function BookPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const preselected = params.get('service');

  const [form, setForm] = useState({
    service_type: preselected && SERVICE_OPTIONS.includes(preselected) ? preselected : 'Airport Transfer',
    pickup_datetime: '',
    pickup_location: '',
    dropoff_location: '',
    passengers: 1,
    flight_number: '',
    notes: '',
    name: '',
    email: '',
    phone: '',
    source: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.service_type) e.service_type = 'Required';
    if (!form.pickup_datetime) e.pickup_datetime = 'Required';
    if (!form.pickup_location) e.pickup_location = 'Required';
    if (!form.dropoff_location) e.dropoff_location = 'Required';
    if (!form.passengers || Number(form.passengers) < 1) e.passengers = 'At least 1';
    if (!form.name) e.name = 'Required';
    if (!form.email) e.email = 'Required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone) e.phone = 'Required';
    return e;
  };

  const submit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    try {
      setSubmitting(true);
      const payload = { ...form, passengers: Number(form.passengers) };
      if (form.service_type !== 'Airport Transfer') payload.flight_number = null;
      await createBooking(payload);
      // Direct-email fallback until SendGrid is configured: opens the user's mail
      // client with all booking details prefilled to Dontay's business inbox.
      try {
        const subject = encodeURIComponent(`Booking Inquiry — ${payload.service_type} — ${payload.name}`);
        const lines = [
          `Service: ${payload.service_type}`,
          `Pickup: ${payload.pickup_datetime}`,
          `From: ${payload.pickup_location}`,
          `To: ${payload.dropoff_location}`,
          `Passengers: ${payload.passengers}`,
          payload.flight_number ? `Flight: ${payload.flight_number}` : null,
          payload.notes ? `Notes: ${payload.notes}` : null,
          '',
          `Name: ${payload.name}`,
          `Phone: ${payload.phone}`,
          `Email: ${payload.email}`,
          payload.source ? `Heard via: ${payload.source}` : null,
        ].filter(Boolean).join('\n');
        const body = encodeURIComponent(lines + '\n\nLove & Legacy Executive Transportation');
        window.open(`mailto:${BRAND.email}?subject=${subject}&body=${body}`, '_blank');
      } catch (_) { /* no-op */ }
      toast.success('Reservation request received — we\u2019ll confirm within two hours.');
      navigate('/thank-you?type=booking');
    } catch (err) {
      toast.error('Could not submit — please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const isAirport = form.service_type === 'Airport Transfer';

  return (
    <div data-testid="page-book">
      <SEO title="Book Executive Transportation | Love & Legacy Atlanta" description="Reserve your Love & Legacy experience. Airport transfers, executive rides, VIP events. Confirmed within 2 hours." />
      <PageHero overline="— Reserve" title="Reserve Your" accent="Experience." subhead="Every booking is confirmed within two hours." image={IMAGES.blackCarNight} />
      <SectionRule />

      <section className="ll-section bg-[var(--ll-ink)]" data-testid="book-page">
        <div className="ll-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <form data-testid="booking-form" onSubmit={submit} className="lg:col-span-8 rounded-lg bg-[var(--ll-ink-2)] border border-[rgba(246,241,230,0.08)] p-7 md:p-10" noValidate>
            <div className="overline">— Booking Details —</div>
            <h2 className="font-serif text-2xl sm:text-3xl mt-3 leading-tight">Tell us about your journey.</h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="ll-label" htmlFor="service_type">Service Type</label>
                <select id="service_type" data-testid="booking-form-service-type" className="ll-select" value={form.service_type} onChange={update('service_type')}>
                  {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="ll-label" htmlFor="pickup_datetime">Pickup Date &amp; Time</label>
                <input id="pickup_datetime" data-testid="booking-form-pickup-datetime" type="datetime-local" className="ll-input" value={form.pickup_datetime} onChange={update('pickup_datetime')} />
                {errors.pickup_datetime && <p className="text-[var(--ll-gold)] text-xs mt-2">{errors.pickup_datetime}</p>}
              </div>
              <div>
                <label className="ll-label" htmlFor="passengers">Passengers</label>
                <input id="passengers" data-testid="booking-form-passengers" type="number" min={1} max={20} className="ll-input" value={form.passengers} onChange={update('passengers')} />
                {errors.passengers && <p className="text-[var(--ll-gold)] text-xs mt-2">{errors.passengers}</p>}
              </div>
              <div>
                <label className="ll-label" htmlFor="pickup_location">Pickup Location</label>
                <input id="pickup_location" data-testid="booking-form-pickup-location" type="text" placeholder="Address or airport code" className="ll-input" value={form.pickup_location} onChange={update('pickup_location')} />
                {errors.pickup_location && <p className="text-[var(--ll-gold)] text-xs mt-2">{errors.pickup_location}</p>}
              </div>
              <div>
                <label className="ll-label" htmlFor="dropoff_location">Drop-Off Location</label>
                <input id="dropoff_location" data-testid="booking-form-dropoff-location" type="text" placeholder="Address or destination" className="ll-input" value={form.dropoff_location} onChange={update('dropoff_location')} />
                {errors.dropoff_location && <p className="text-[var(--ll-gold)] text-xs mt-2">{errors.dropoff_location}</p>}
              </div>

              {isAirport && (
                <div className="md:col-span-2">
                  <label className="ll-label" htmlFor="flight_number">Flight Number</label>
                  <input id="flight_number" data-testid="booking-form-flight-number-input" type="text" placeholder="e.g. DL1234" className="ll-input" value={form.flight_number} onChange={update('flight_number')} />
                </div>
              )}

              <div className="md:col-span-2">
                <label className="ll-label" htmlFor="notes">Special Requests or Notes</label>
                <textarea id="notes" data-testid="booking-form-notes" rows={4} className="ll-textarea" placeholder="Multiple stops, child seats, preferred temperature, discretion notes…" value={form.notes} onChange={update('notes')} />
              </div>

              <div>
                <label className="ll-label" htmlFor="name">Your Name</label>
                <input id="name" data-testid="booking-form-name" type="text" className="ll-input" value={form.name} onChange={update('name')} />
                {errors.name && <p className="text-[var(--ll-gold)] text-xs mt-2">{errors.name}</p>}
              </div>
              <div>
                <label className="ll-label" htmlFor="phone">Phone Number</label>
                <input id="phone" data-testid="booking-form-phone" type="tel" placeholder="(404) 555-0182" className="ll-input" value={form.phone} onChange={update('phone')} />
                {errors.phone && <p className="text-[var(--ll-gold)] text-xs mt-2">{errors.phone}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="ll-label" htmlFor="email">Email Address</label>
                <input id="email" data-testid="booking-form-email" type="email" className="ll-input" value={form.email} onChange={update('email')} />
                {errors.email && <p className="text-[var(--ll-gold)] text-xs mt-2">{errors.email}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="ll-label" htmlFor="source">How did you hear about us?</label>
                <select id="source" data-testid="booking-form-source" className="ll-select" value={form.source} onChange={update('source')}>
                  <option value="">Select an option</option>
                  {SOURCE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <button type="submit" disabled={submitting} data-testid="booking-form-submit-button" className="ll-cta-primary w-full sm:w-auto disabled:opacity-60">{submitting ? 'Submitting…' : 'Submit Request'}</button>
              <a href={`tel:${BRAND.phoneTel}`} className="ll-cta-ghost w-full sm:w-auto inline-flex items-center gap-2"><Phone size={14} /> Call Now</a>
            </div>
            <p className="mt-6 text-xs text-white/55">Prefer to speak with us directly? Call {BRAND.phone} or <a href={`mailto:${BRAND.email}?subject=Booking%20Inquiry%20%E2%80%94%20Love%20%26%20Legacy`} className="text-[var(--ll-gold)] hover:underline">email Dontay directly</a>.</p>
          </form>

          <aside className="lg:col-span-4 rounded-lg bg-[var(--ll-ink-2)] border border-[rgba(212,175,55,0.20)] p-7 md:p-8">
            <div className="overline">— Trust Signals —</div>
            <h3 className="font-serif text-xl mt-3">Reserved for those who require more.</h3>
            <ul className="mt-7 space-y-5 text-sm">
              <li className="flex items-start gap-3"><Clock size={18} className="text-[var(--ll-gold)] mt-0.5 shrink-0" /> <span className="text-white/85 leading-6">Responses within 2 hours guaranteed</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-[var(--ll-gold)] mt-0.5 shrink-0" /> <span className="text-white/85 leading-6">Fixed pricing — no surge fees</span></li>
              <li className="flex items-start gap-3"><Lock size={18} className="text-[var(--ll-gold)] mt-0.5 shrink-0" /> <span className="text-white/85 leading-6">100% confidential</span></li>
              <li className="flex items-start gap-3"><Star size={18} className="text-[var(--ll-gold)] mt-0.5 shrink-0" /> <span className="text-white/85 leading-6">5-star rated on Google</span></li>
              <li className="flex items-start gap-3"><ShieldCheck size={18} className="text-[var(--ll-gold)] mt-0.5 shrink-0" /> <span className="text-white/85 leading-6">Licensed, insured, and certified</span></li>
            </ul>
            <div className="ll-rule my-7" />
            <p className="text-xs text-[var(--ll-champagne)] tracking-[0.18em] uppercase">Available 24/7</p>
            <a href={`tel:${BRAND.phoneTel}`} className="mt-2 inline-block font-serif text-2xl text-[var(--ll-gold)]">{BRAND.phone}</a>
          </aside>
        </div>
      </section>
    </div>
  );
}
