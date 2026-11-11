import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import { process, services } from '../data/site';
import Photo from '../components/Photo';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import { CtaBanner, PageHeader, SectionHeading } from '../components/Common';


export default function Services() {
  usePageTitle('Services', 'Residential, commercial and agricultural solar, battery backup, net metering and maintenance services.');

  return (
    <>
      <PageHeader title="Our Services" text="End-to-end solar solutions: consultation, design, installation, approvals and lifetime maintenance." crumb="Services" />

      <section className="section section--tight">
        <div className="container">
          <nav className="chip-nav" aria-label="Jump to service">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="chip"><Icon name={s.icon} size={16} /> {s.title}</a>
            ))}
          </nav>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={`section service-detail ${i % 2 ? 'section--alt' : ''}`}>
          <div className={`container split ${i % 2 ? 'split--reverse' : ''}`}>
            <Reveal className="split__media">
              <div className="art-frame"><Photo name={s.image} alt={`${s.title} by SunPeak Solar`} /></div>
            </Reveal>
            <Reveal>
              <span className="icon-box"><Icon name={s.icon} size={26} /></span>
              <h2>{s.title}</h2>
              <p className="lead">{s.description}</p>
              <ul className="check-list">
                {s.features.map((f) => (
                  <li key={f}><Check size={18} aria-hidden="true" /> {f}</li>
                ))}
              </ul>
              <p className="ideal"><strong>Ideal for:</strong> {s.idealFor}</p>
              <Link to={`/contact?service=${s.id}`} className="btn btn--primary">Request a quote <ArrowRight size={18} aria-hidden="true" /></Link>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our process" title="From first call to free electricity" />
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

      <CtaBanner />
    </>
  );
}
