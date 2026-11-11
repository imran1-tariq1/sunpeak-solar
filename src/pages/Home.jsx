import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, Check, ChevronRight, Quote, Sun, TrendingDown, Zap } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import { faqs, formatMoney, packages, process, projects, services, stats, testimonials, whyUs } from '../data/site';
import Photo from '../components/Photo';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';
import { Avatar, CtaBanner, SectionHeading, Stars } from '../components/Common';
import FaqList from '../components/FaqList';

export default function Home() {
  usePageTitle(null);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="pill"><Sun size={16} aria-hidden="true" /> Trusted by 2,500+ homes & businesses</span>
            <h1>
              Power your life with the sun. <span className="text-gradient">Cut your bill by up to 90%.</span>
            </h1>
            <p className="lead">
              Premium solar systems for homes, businesses and farms. Designed by certified engineers, installed in days, and backed by warranties of up to 25 years.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary btn--lg">Get Free Quote <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link to="/calculator" className="btn btn--outline btn--lg"><Calculator size={18} aria-hidden="true" /> Calculate Savings</Link>
            </div>
            <ul className="hero__trust">
              <li><Check size={16} aria-hidden="true" /> Free site survey</li>
              <li><Check size={16} aria-hidden="true" /> Installment plans</li>
              <li><Check size={16} aria-hidden="true" /> Net metering handled</li>
            </ul>
          </div>
          <div className="hero__visual">
            <div className="hero__art">
              <Photo name="hero-home" alt="Modern family home with rooftop solar panels" eager />
            </div>
            <div className="float-card float-card--a">
              <span className="float-card__icon is-amber"><Zap size={18} aria-hidden="true" /></span>
              <div>
                <small>Generated today</small>
                <strong>42.6 kWh</strong>
              </div>
            </div>
            <div className="float-card float-card--b">
              <span className="float-card__icon is-green"><TrendingDown size={18} aria-hidden="true" /></span>
              <div>
                <small>Saved this month</small>
                <strong>{formatMoney(36850)}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-band" aria-label="Company statistics">
        <div className="container stats-band__grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong><Counter value={s.value} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="What we do" title="Solar solutions for every need" text="From a small home rooftop to a multi-megawatt factory, we design, install and maintain systems that deliver for decades." />
          <div className="grid grid--3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 60}>
                <Link to={`/services#${s.id}`} className="card service-card">
                  <span className="icon-box"><Icon name={s.icon} size={26} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <span className="link-arrow">Learn more <ChevronRight size={16} aria-hidden="true" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section section--alt">
        <div className="container split">
          <Reveal className="split__media">
            <div className="art-frame">
              <Photo name="installers" alt="Solar technicians installing panels on a rooftop" />
            </div>
            <div className="badge-card">
              <strong>10+</strong>
              <span>years of<br />experience</span>
            </div>
          </Reveal>
          <div>
            <SectionHeading center={false} eyebrow="Why SunPeak" title="Engineered right. Installed right. Supported for life." text="We are not just installers. We are your long-term energy partner, with a local team that stands behind every system." />
            <div className="feature-list">
              {whyUs.map((w, i) => (
                <Reveal key={w.title} delay={i * 80} className="feature">
                  <span className="icon-box icon-box--sm"><Icon name={w.icon} size={20} /></span>
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Link to="/about" className="btn btn--dark">More about us <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="How it works" title="Go solar in 4 simple steps" text="We handle everything, from paperwork to power-on, so switching to solar is effortless." />
          <ol className="steps">
            {process.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90} className="step">
                <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="icon-box"><Icon name={p.icon} size={24} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading light eyebrow="Popular packages" title="Complete systems, transparent prices" text="Every package includes equipment, installation, protection and monitoring. Indicative on-grid prices." />
          <div className="grid grid--3">
            {packages.slice(0, 3).map((p, i) => (
              <Reveal key={p.id} delay={i * 80} className={`price-card ${p.popular ? 'is-popular' : ''}`}>
                {p.popular && <span className="price-card__ribbon">Most popular</span>}
                <span className="price-card__name">{p.name}</span>
                <h3>{p.size} kW System</h3>
                <p className="price-card__price">{formatMoney(p.price)}</p>
                <ul>
                  <li><Check size={16} aria-hidden="true" /> {p.panels}</li>
                  <li><Check size={16} aria-hidden="true" /> {p.inverter}</li>
                  <li><Check size={16} aria-hidden="true" /> {p.monthly}</li>
                </ul>
                <Link to={`/contact?package=${p.id}`} className={`btn ${p.popular ? 'btn--primary' : 'btn--ghost-light'} btn--block`}>Get this package</Link>
              </Reveal>
            ))}
          </div>
          <div className="center mt-lg">
            <Link to="/packages" className="link-arrow is-light">Compare all packages <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* CALCULATOR TEASER */}
      <section className="section section--tight">
        <div className="container">
          <Reveal className="calc-teaser">
            <div className="calc-teaser__icon"><Calculator size={36} aria-hidden="true" /></div>
            <div>
              <h2>How much could you save?</h2>
              <p>Enter your monthly bill and get an instant estimate of system size, cost, savings and payback period.</p>
            </div>
            <Link to="/calculator" className="btn btn--primary btn--lg">Try the Calculator <ArrowRight size={18} aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <div className="container">
          <div className="section-top">
            <SectionHeading center={false} eyebrow="Our work" title="Recent projects" />
            <Link to="/projects" className="btn btn--outline">View all projects</Link>
          </div>
          <div className="grid grid--3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.id} delay={i * 80} className="card project-card">
                <div className="project-card__art"><Photo name={p.image} alt={`${p.title} solar installation`} /></div>
                <div className="project-card__body">
                  <span className="tag">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p className="muted">{p.location} · {p.size}</p>
                  <p className="project-card__save"><TrendingDown size={16} aria-hidden="true" /> Saves {p.savings}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeading eyebrow="Testimonials" title="Loved by our customers" text="Thousands of families and businesses already enjoy cleaner, cheaper power." />
          <div className="grid grid--3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 80} className="card testimonial">
                <Quote className="testimonial__quote" size={32} aria-hidden="true" />
                <Stars count={t.rating} />
                <p>“{t.text}”</p>
                <div className="testimonial__author">
                  <Avatar name={t.name} size={48} />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="FAQ" title="Questions? We have answers." />
          <FaqList items={faqs.slice(0, 5)} />
          <div className="center mt-lg">
            <Link to="/faq" className="btn btn--outline">See all FAQs</Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
