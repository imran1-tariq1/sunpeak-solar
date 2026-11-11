import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Phone } from 'lucide-react';
import { company } from '../data/site';
import Reveal from './Reveal';

export function SectionHeading({ eyebrow, title, text, center = true, light = false }) {
  return (
    <Reveal className={`section-heading ${center ? 'is-center' : ''} ${light ? 'is-light' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}

export function PageHeader({ title, text, crumb }) {
  return (
    <section className="page-header">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span aria-current="page">{crumb || title}</span>
        </nav>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
      <div className="page-header__sun" aria-hidden="true" />
    </section>
  );
}

export function CtaBanner({
  title = 'Ready to stop paying high electricity bills?',
  text = 'Get a free consultation and a custom quote within 24 hours. No obligation, no pressure.',
}) {
  return (
    <section className="section section--tight">
      <div className="container">
        <Reveal className="cta-banner">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Get Free Quote <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a href={company.phoneHref} className="btn btn--ghost-light btn--lg">
              <Phone size={18} aria-hidden="true" /> {company.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Stars({ count = 5 }) {
  return (
    <span className="stars" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}
      <span className="stars__empty">{'★'.repeat(5 - count)}</span>
    </span>
  );
}

export function Avatar({ name, size = 56 }) {
  const initials = name
    .replace(/^(Dr\.|Mr\.|Ms\.)\s*/i, '')
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');
  const hues = [32, 210, 150, 265, 0, 190];
  const hue = hues[name.length % hues.length];
  return (
    <span
      className="avatar"
      style={{ width: size, height: size, fontSize: size * 0.36, background: `linear-gradient(135deg, hsl(${hue} 85% 55%), hsl(${hue + 30} 75% 40%))` }}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}
