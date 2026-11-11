import { Eye, Target } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import { company, milestones, stats, team, testimonials, values } from '../data/site';
import Photo from '../components/Photo';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';
import { Avatar, CtaBanner, PageHeader, SectionHeading, Stars } from '../components/Common';

export default function About() {
  usePageTitle('About Us', `Learn about ${company.name}, our story, mission, values and the team behind 2,500+ solar installations.`);

  return (
    <>
      <PageHeader title="About SunPeak Solar" text="A team of engineers and energy experts on a mission to make clean, affordable power available to every home and business." crumb="About" />

      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading center={false} eyebrow="Our story" title={`Powering communities since ${company.founded}`} />
            <Reveal>
              <p>
                {company.name} began with three engineers, one small office in Lahore and a simple belief: electricity should not be a monthly burden. Rising tariffs and constant
                load-shedding were hurting families and businesses, while the sun was shining over 300 days a year.
              </p>
              <p>
                Over a decade later, we have installed more than 2,500 systems across 12 cities, from single-family rooftops to 500 kW industrial plants and solar tube wells that
                irrigate thousands of acres. Our approach has never changed: honest advice, genuine equipment and workmanship we are proud to put our name on.
              </p>
            </Reveal>
            <div className="mini-stats">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <strong><Counter value={s.value} suffix={s.suffix} /></strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <Reveal className="split__media">
            <div className="art-frame"><Photo name="solar-farm-sunrise" alt="Large solar power plant at sunrise" /></div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container grid grid--2">
          <Reveal className="card mv-card">
            <span className="icon-box"><Target size={26} aria-hidden="true" /></span>
            <h2>Our mission</h2>
            <p>To help every customer cut their energy costs and carbon footprint with reliable, well-engineered solar systems, delivered with complete transparency.</p>
          </Reveal>
          <Reveal className="card mv-card" delay={100}>
            <span className="icon-box"><Eye size={26} aria-hidden="true" /></span>
            <h2>Our vision</h2>
            <p>A country where clean, affordable energy powers every home, school, hospital, farm and factory, with no more bill shock and no more darkness.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our values" title="What we stand for" />
          <div className="grid grid--4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70} className="card value-card">
                <span className="icon-box"><Icon name={v.icon} size={24} /></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container container--narrow">
          <SectionHeading eyebrow="Our journey" title="Milestones along the way" />
          <ol className="timeline">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 70}>
                <span className="timeline__year">{m.year}</span>
                <p>{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Leadership" title="Meet the team" text="Experienced professionals who care about getting every detail right." />
          <div className="grid grid--4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 70} className="card team-card">
                <Avatar name={m.name} size={88} />
                <h3>{m.name}</h3>
                <span className="team-card__role">{m.role}</span>
                <p>{m.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading eyebrow="Certified & trusted" title="Standards we follow" />
          <div className="cert-row">
            {['Licensed Electrical Contractor', 'IEC-Compliant Equipment', 'Authorised Net Metering Vendor', 'ISO 9001 Quality Processes', 'Tier-1 Panel Partner'].map((c) => (
              <span key={c} className="cert"><Icon name="BadgeCheck" size={18} /> {c}</span>
            ))}
          </div>
          <div className="grid grid--3 mt-lg">
            {testimonials.slice(3, 6).map((t) => (
              <Reveal key={t.name} className="card testimonial">
                <Stars count={t.rating} />
                <p>“{t.text}”</p>
                <div className="testimonial__author">
                  <Avatar name={t.name} size={44} />
                  <div><strong>{t.name}</strong><span>{t.role}</span></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Join 2,500+ happy solar owners" />
    </>
  );
}
