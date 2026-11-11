import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import { productCategories, products } from '../data/site';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import { CtaBanner, PageHeader, SectionHeading } from '../components/Common';

export default function Products() {
  usePageTitle('Products', 'Tier-1 solar panels, hybrid and on-grid inverters, lithium batteries and accessories.');
  const [cat, setCat] = useState('All');
  const list = cat === 'All' ? products : products.filter((p) => p.category === cat);

  return (
    <>
      <PageHeader title="Products" text="Only genuine, warranty-backed equipment from Tier-1 manufacturers, tested by our engineers before it reaches your roof." />

      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Filter products by category">
            {productCategories.map((c) => (
              <button key={c} type="button" className={`filter-btn ${cat === c ? 'is-active' : ''}`} aria-pressed={cat === c} onClick={() => setCat(c)}>
                {c}
                <span className="filter-btn__count">{c === 'All' ? products.length : products.filter((p) => p.category === c).length}</span>
              </button>
            ))}
          </div>

          <div className="grid grid--3 mt">
            {list.map((p) => (
              <article key={p.id} className="card product-card fade-in">
                <div className={`product-card__head is-${p.category.toLowerCase()}`}>
                  <Icon name={p.icon} size={56} strokeWidth={1.4} />
                  {p.badge && <span className="product-card__badge">{p.badge}</span>}
                </div>
                <div className="product-card__body">
                  <span className="tag">{p.category}</span>
                  <h3>{p.name}</h3>
                  <dl className="specs">
                    {Object.entries(p.specs).map(([k, v]) => (
                      <div key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link to={`/contact?product=${p.id}`} className="btn btn--outline btn--block">Request price <ArrowRight size={16} aria-hidden="true" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading eyebrow="Quality promise" title="Why our equipment lasts" />
          <div className="grid grid--3">
            {[
              { icon: 'ShieldCheck', t: '100% genuine', d: 'Imported through authorised distributors with verifiable serial numbers and official warranty cards.' },
              { icon: 'Gauge', t: 'Tested before install', d: 'Every panel is checked for output and micro-cracks, and every inverter is bench-tested before dispatch.' },
              { icon: 'BadgeCheck', t: 'Warranty handled by us', d: 'If anything fails, you call us, not a foreign manufacturer. We manage claims end to end.' },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 80} className="card value-card">
                <span className="icon-box"><Icon name={x.icon} size={24} /></span>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Not sure which products you need?" text="Our engineers will recommend the perfect combination for your roof, budget and usage." />
    </>
  );
}
