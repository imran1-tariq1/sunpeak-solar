import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CircleAlert, Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import { company, packages, products, services } from '../data/site';
import { PageHeader } from '../components/Common';

const empty = { name: '', phone: '', email: '', city: '', property: '', interest: '', bill: '', message: '', consent: false };

function buildInterest(params) {
  const pkg = params.get('package');
  const svc = params.get('service');
  const prod = params.get('product');
  const size = params.get('size');
  if (pkg) {
    const hybrid = pkg.endsWith('-hybrid');
    const p = packages.find((x) => x.id === pkg.replace('-hybrid', ''));
    if (p) return `${p.size} kW ${hybrid ? 'Hybrid' : 'On-Grid'} package`;
  }
  if (prod) {
    const p = products.find((x) => x.id === prod);
    if (p) return `Product: ${p.name}`;
  }
  if (svc) {
    const s = services.find((x) => x.id === svc);
    if (s) return s.title;
    if (svc === 'finance') return 'Installment / financing';
  }
  if (size) return `${size} kW ${params.get('type') === 'hybrid' ? 'Hybrid' : 'On-Grid'} system (from calculator)`;
  return '';
}

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.';
  if (!/^[+]?[\d\s-]{10,15}$/.test(v.phone.trim())) e.phone = 'Please enter a valid phone number.';
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (!v.city.trim()) e.city = 'Please enter your city.';
  if (!v.property) e.property = 'Please select a property type.';
  if (!v.consent) e.consent = 'Please agree so we can contact you.';
  return e;
}

export default function Contact() {
  usePageTitle('Contact & Free Quote', 'Request a free solar consultation and custom quote. Call, WhatsApp or send us a message.');
  const [params] = useSearchParams();
  const prefill = useMemo(() => buildInterest(params), [params]);
  const [values, setValues] = useState({ ...empty, interest: prefill });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const next = { ...values, [k]: val };
    setValues(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(values));
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched(Object.keys(empty).reduce((a, k) => ({ ...a, [k]: true }), {}));
    if (Object.keys(errs).length) {
      const first = document.getElementById(`f-${Object.keys(errs)[0]}`);
      first?.focus();
      return;
    }
    setSending(true);
    // Static site: no backend. Connect a form service (e.g. Formspree, EmailJS) here when ready.
    setTimeout(() => {
      setSending(false);
      setSent(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 900);
  };

  const err = (k) => touched[k] && errors[k];
  const fieldProps = (k) => ({
    id: `f-${k}`,
    name: k,
    value: values[k],
    onChange: set(k),
    onBlur: blur(k),
    'aria-invalid': err(k) ? true : undefined,
    'aria-describedby': err(k) ? `e-${k}` : undefined,
  });
  const ErrorMsg = ({ k }) => (err(k) ? <span className="field__error" id={`e-${k}`}><CircleAlert size={14} aria-hidden="true" /> {errors[k]}</span> : null);

  return (
    <>
      <PageHeader title="Get Your Free Quote" text="Tell us a little about your needs. A solar advisor will call you within 24 hours with a free, no-obligation recommendation." crumb="Contact" />

      <section className="section">
        <div className="container contact">
          <aside className="contact__info">
            <div className="card info-card">
              <h2 className="h3">Talk to us directly</h2>
              <ul>
                <li>
                  <span className="icon-box icon-box--sm"><Phone size={18} aria-hidden="true" /></span>
                  <div><small>Call us</small><a href={company.phoneHref}>{company.phone}</a></div>
                </li>
                <li>
                  <span className="icon-box icon-box--sm"><MessageCircle size={18} aria-hidden="true" /></span>
                  <div><small>WhatsApp</small><a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">Chat with an advisor</a></div>
                </li>
                <li>
                  <span className="icon-box icon-box--sm"><Mail size={18} aria-hidden="true" /></span>
                  <div><small>Email</small><a href={`mailto:${company.email}`}>{company.email}</a></div>
                </li>
                <li>
                  <span className="icon-box icon-box--sm"><MapPin size={18} aria-hidden="true" /></span>
                  <div><small>Head office</small><span>{company.address}</span></div>
                </li>
                <li>
                  <span className="icon-box icon-box--sm"><Clock size={18} aria-hidden="true" /></span>
                  <div><small>Working hours</small><span>{company.hours}</span></div>
                </li>
              </ul>
            </div>
            <div className="card tip-card">
              <h3>Tip for a faster quote</h3>
              <p>Keep a recent electricity bill handy. It helps us size your system accurately on the first call.</p>
            </div>
          </aside>

          <div className="card contact__form">
            {sent ? (
              <div className="success" role="status">
                <div className="success__icon"><Send size={32} aria-hidden="true" /></div>
                <h2>Thank you, {values.name.split(' ')[0]}!</h2>
                <p>Your request has been received. One of our solar advisors will call you at <b>{values.phone}</b> within 24 hours.</p>
                <button type="button" className="btn btn--outline" onClick={() => { setValues({ ...empty }); setTouched({}); setErrors({}); setSent(false); }}>
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <h2 className="h3">Request a free consultation</h2>
                <p className="muted small">Fields marked * are required.</p>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="f-name">Full name *</label>
                    <input type="text" autoComplete="name" placeholder="e.g. Ali Hassan" {...fieldProps('name')} />
                    <ErrorMsg k="name" />
                  </div>
                  <div className="field">
                    <label htmlFor="f-phone">Phone number *</label>
                    <input type="tel" autoComplete="tel" placeholder="03XX XXXXXXX" {...fieldProps('phone')} />
                    <ErrorMsg k="phone" />
                  </div>
                  <div className="field">
                    <label htmlFor="f-email">Email</label>
                    <input type="email" autoComplete="email" placeholder="you@example.com" {...fieldProps('email')} />
                    <ErrorMsg k="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="f-city">City *</label>
                    <input type="text" autoComplete="address-level2" placeholder="e.g. Lahore" {...fieldProps('city')} />
                    <ErrorMsg k="city" />
                  </div>
                  <div className="field">
                    <label htmlFor="f-property">Property type *</label>
                    <select {...fieldProps('property')}>
                      <option value="">Select…</option>
                      <option>Home</option>
                      <option>Office / Shop</option>
                      <option>Factory / Industrial</option>
                      <option>Farm / Tube well</option>
                      <option>School / Hospital</option>
                      <option>Other</option>
                    </select>
                    <ErrorMsg k="property" />
                  </div>
                  <div className="field">
                    <label htmlFor="f-bill">Average monthly bill (Rs)</label>
                    <input type="number" inputMode="numeric" min="0" placeholder="e.g. 25000" {...fieldProps('bill')} />
                  </div>
                  <div className="field field--full">
                    <label htmlFor="f-interest">Interested in</label>
                    <input type="text" placeholder="e.g. 10 kW hybrid system" {...fieldProps('interest')} />
                  </div>
                  <div className="field field--full">
                    <label htmlFor="f-message">Message</label>
                    <textarea rows="4" placeholder="Anything else we should know? Roof type, outages, timeline…" {...fieldProps('message')} />
                  </div>
                  <div className="field field--full">
                    <label className="checkbox">
                      <input type="checkbox" id="f-consent" checked={values.consent} onChange={set('consent')} onBlur={blur('consent')} aria-invalid={err('consent') ? true : undefined} />
                      <span>I agree to be contacted by {company.name} about my enquiry. *</span>
                    </label>
                    <ErrorMsg k="consent" />
                  </div>
                </div>
                <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={sending}>
                  {sending ? <><span className="spinner" aria-hidden="true" /> Sending…</> : <>Get My Free Quote <Send size={18} aria-hidden="true" /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
