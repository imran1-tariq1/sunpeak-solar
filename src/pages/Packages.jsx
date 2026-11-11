import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Minus } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import { formatMoney, packageIncludes, packages } from '../data/site';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { CtaBanner, PageHeader, SectionHeading } from '../components/Common';

export default function Packages() {
  usePageTitle('Solar Packages & Prices', 'Complete on-grid and hybrid solar packages from 3 kW to 15 kW with transparent pricing.');
  const [hybrid, setHybrid] = useState(false);

  return (
    <>
      <PageHeader title="Packages & Pricing" text="Complete, ready-to-install systems with transparent pricing. Every package is customised after a free site survey." crumb="Packages" />

      <section className="section">
        <div className="container">
          <div className="toggle-wrap">
            <div className="toggle" role="radiogroup" aria-label="System type">
              <button type="button" role="radio" aria-checked={!hybrid} className={!hybrid ? 'is-active' : ''} onClick={() => setHybrid(false)}>On-Grid</button>
              <button type="button" role="radio" aria-checked={hybrid} className={hybrid ? 'is-active' : ''} onClick={() => setHybrid(true)}>Hybrid + Battery</button>
            </div>
            <p className="muted small">
              {hybrid ? 'Includes lithium battery backup that keeps you powered during outages.' : 'Lowest cost and fastest payback, ideal with net metering.'}
            </p>
          </div>

          <div className="grid grid--4 pricing-grid">
            {packages.map((p, i) => (
              <Reveal key={p.id} delay={i * 70} className={`price-card price-card--light ${p.popular ? 'is-popular' : ''}`}>
                {p.popular && <span className="price-card__ribbon">Most popular</span>}
                <span className="price-card__name">{p.name}</span>
                <h3>{p.size} kW {hybrid ? 'Hybrid' : 'On-Grid'}</h3>
                <p className="price-card__price">{formatMoney(p.price + (hybrid ? p.batteryPrice : 0))}</p>
                <p className="price-card__note">Indicative price, installed</p>
                <ul>
                  <li><Check size={16} aria-hidden="true" /> {p.panels}</li>
                  <li><Check size={16} aria-hidden="true" /> {p.inverter}</li>
                  {hybrid && <li><Check size={16} aria-hidden="true" /> {p.battery}</li>}
                  <li><Check size={16} aria-hidden="true" /> {p.monthly}</li>
                  <li><Check size={16} aria-hidden="true" /> {p.idealFor}</li>
                </ul>
                <Link to={`/contact?package=${p.id}${hybrid ? '-hybrid' : ''}`} className={`btn ${p.popular ? 'btn--primary' : 'btn--outline'} btn--block`}>Choose {p.name}</Link>
              </Reveal>
            ))}
          </div>
          <p className="center muted small mt">
            Need more than 15 kW? <Link to="/contact?service=commercial">Request a custom commercial quote</Link>.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container container--narrow">
          <SectionHeading eyebrow="Compare" title="Package comparison" />
          <div className="table-wrap">
            <table className="compare">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  {packages.map((p) => <th key={p.id} scope="col">{p.size} kW</th>)}
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row">Panels</th>{packages.map((p) => <td key={p.id}>{p.panels.split(' ×')[0]}</td>)}</tr>
                <tr><th scope="row">Monthly units</th>{packages.map((p) => <td key={p.id}>{p.monthly.replace(' units/month', '')}</td>)}</tr>
                <tr><th scope="row">Roof area (sq ft)</th>{packages.map((p) => <td key={p.id}>~{p.size * 65}</td>)}</tr>
                <tr><th scope="row">Three-phase</th>{packages.map((p) => <td key={p.id}>{p.size >= 15 ? <Check size={18} aria-label="Yes" /> : <Minus size={18} aria-label="No" />}</td>)}</tr>
                <tr><th scope="row">App monitoring</th>{packages.map((p) => <td key={p.id}><Check size={18} aria-label="Yes" /></td>)}</tr>
                <tr><th scope="row">On-grid price</th>{packages.map((p) => <td key={p.id}>{formatMoney(p.price)}</td>)}</tr>
                <tr><th scope="row">Hybrid price</th>{packages.map((p) => <td key={p.id}>{formatMoney(p.price + p.batteryPrice)}</td>)}</tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading center={false} eyebrow="All-inclusive" title="Everything in every package" />
            <ul className="check-list check-list--2col">
              {packageIncludes.map((x) => <li key={x}><Check size={18} aria-hidden="true" /> {x}</li>)}
            </ul>
          </div>
          <Reveal className="card finance-card">
            <span className="icon-box"><Icon name="HandCoins" size={26} /></span>
            <h2>Easy installment plans</h2>
            <p>Spread the cost with bank financing options of up to 5 years, including 0% markup plans for 12 months. Your monthly savings often cover the installment.</p>
            <Link to="/contact?service=finance" className="btn btn--dark">Ask about financing</Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
