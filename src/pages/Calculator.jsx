import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BatteryCharging, Calendar, Leaf, PanelsTopLeft, TrendingDown, Wallet, Zap } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import { formatMoney } from '../data/site';
import { PageHeader } from '../components/Common';

const COST_PER_KW = { ongrid: 165000, hybrid: 225000 };
const PANEL_W = 585;
const PERFORMANCE = 0.78; // real-world losses (heat, dust, wiring, inverter)
const CO2_PER_KWH = 0.45; // kg CO2 avoided per unit
const TREE_KG_PER_YEAR = 21;

function Field({ id, label, hint, min, max, step, value, onChange, prefix, suffix }) {
  return (
    <div className="calc-field">
      <div className="calc-field__top">
        <label htmlFor={id}>{label}</label>
        <div className="calc-field__input">
          {prefix && <span>{prefix}</span>}
          <input
            id={id}
            type="number"
            inputMode="decimal"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={() => {
              const n = Number(value);
              if (Number.isNaN(n) || value === '') onChange(String(min));
              else onChange(String(Math.min(max, Math.max(min, n))));
            }}
          />
          {suffix && <span>{suffix}</span>}
        </div>
      </div>
      <input
        type="range"
        aria-label={label}
        min={min}
        max={max}
        step={step}
        value={Math.min(max, Math.max(min, Number(value) || min))}
        onChange={(e) => onChange(e.target.value)}
      />
      {hint && <small>{hint}</small>}
    </div>
  );
}

export default function Calculator() {
  usePageTitle('Solar Savings Calculator', 'Estimate your solar system size, cost, monthly savings and payback period instantly.');
  const [bill, setBill] = useState('30000');
  const [rate, setRate] = useState('60');
  const [sun, setSun] = useState('5.5');
  const [type, setType] = useState('ongrid');
  const [offset, setOffset] = useState('90');

  const r = useMemo(() => {
    const b = Math.max(0, Number(bill) || 0);
    const u = Math.max(1, Number(rate) || 1);
    const s = Math.max(1, Number(sun) || 1);
    const o = Math.min(100, Math.max(10, Number(offset) || 10)) / 100;
    const monthlyUnits = b / u;
    const targetUnits = monthlyUnits * o;
    const rawKw = targetUnits / (s * 30 * PERFORMANCE);
    const kw = Math.max(1, Math.ceil(rawKw * 2) / 2);
    const panels = Math.ceil((kw * 1000) / PANEL_W);
    const production = kw * s * 30 * PERFORMANCE;
    const monthlySaving = Math.min(production, monthlyUnits) * u;
    const cost = kw * COST_PER_KW[type];
    const payback = monthlySaving > 0 ? cost / (monthlySaving * 12) : 0;
    const lifetime = monthlySaving * 12 * 25 * 1.35 - cost; // 25 yrs, assumes tariff growth
    const co2 = (production * 12 * CO2_PER_KWH) / 1000;
    return {
      monthlyUnits, kw, panels, production, monthlySaving, cost, payback, lifetime,
      co2, trees: Math.round((co2 * 1000) / TREE_KG_PER_YEAR), area: Math.round(kw * 65), newBill: Math.max(0, b - monthlySaving),
    };
  }, [bill, rate, sun, type, offset]);

  const pct = Number(bill) > 0 ? Math.round((r.monthlySaving / Number(bill)) * 100) : 0;

  return (
    <>
      <PageHeader title="Solar Savings Calculator" text="Get an instant estimate of the system you need and how much you could save. It takes 30 seconds." crumb="Calculator" />

      <section className="section">
        <div className="container calc">
          <form className="card calc__form" onSubmit={(e) => e.preventDefault()} aria-label="Calculator inputs">
            <h2>Your details</h2>
            <Field id="bill" label="Average monthly bill" min={2000} max={1000000} step={500} value={bill} onChange={setBill} prefix="Rs" hint="Use an average of summer and winter bills for accuracy." />
            <Field id="rate" label="Electricity rate per unit" min={10} max={120} step={1} value={rate} onChange={setRate} prefix="Rs" suffix="/kWh" hint="Check the per-unit rate on your bill, including taxes." />
            <Field id="sun" label="Peak sun hours per day" min={3} max={7} step={0.1} value={sun} onChange={setSun} suffix="hrs" hint="Most of Pakistan receives 5–6 hours on average." />
            <Field id="offset" label="Bill offset target" min={10} max={100} step={5} value={offset} onChange={setOffset} suffix="%" hint="How much of your usage you want solar to cover." />

            <fieldset className="calc-type">
              <legend>System type</legend>
              <label className={type === 'ongrid' ? 'is-active' : ''}>
                <input type="radio" name="type" value="ongrid" checked={type === 'ongrid'} onChange={() => setType('ongrid')} />
                <Zap size={18} aria-hidden="true" /> On-Grid
              </label>
              <label className={type === 'hybrid' ? 'is-active' : ''}>
                <input type="radio" name="type" value="hybrid" checked={type === 'hybrid'} onChange={() => setType('hybrid')} />
                <BatteryCharging size={18} aria-hidden="true" /> Hybrid
              </label>
            </fieldset>
          </form>

          <div className="calc__results" aria-live="polite">
            <div className="result-hero">
              <span>Estimated monthly savings</span>
              <strong>{formatMoney(r.monthlySaving)}</strong>
              <p>That is about <b>{pct}%</b> off your bill. Your new bill could be around <b>{formatMoney(r.newBill)}</b>.</p>
              <div className="bar" role="img" aria-label={`${pct}% bill reduction`}>
                <span style={{ width: `${Math.min(100, pct)}%` }} />
              </div>
            </div>

            <div className="result-grid">
              <div className="result"><Zap size={20} aria-hidden="true" /><span>Recommended size</span><strong>{r.kw} kW</strong></div>
              <div className="result"><PanelsTopLeft size={20} aria-hidden="true" /><span>Panels ({PANEL_W}W)</span><strong>{r.panels}</strong></div>
              <div className="result"><Wallet size={20} aria-hidden="true" /><span>Estimated cost</span><strong>{formatMoney(r.cost)}</strong></div>
              <div className="result"><Calendar size={20} aria-hidden="true" /><span>Payback period</span><strong>{r.payback.toFixed(1)} years</strong></div>
              <div className="result"><TrendingDown size={20} aria-hidden="true" /><span>25-year net savings</span><strong>{formatMoney(Math.max(0, r.lifetime))}</strong></div>
              <div className="result"><Leaf size={20} aria-hidden="true" /><span>CO₂ avoided / year</span><strong>{r.co2.toFixed(1)} t</strong></div>
            </div>

            <ul className="result-notes">
              <li>Monthly usage: <b>{Math.round(r.monthlyUnits).toLocaleString('en-US')} units</b></li>
              <li>Monthly solar production: <b>{Math.round(r.production).toLocaleString('en-US')} units</b></li>
              <li>Roof space needed: <b>~{r.area.toLocaleString('en-US')} sq ft</b></li>
              <li>Equivalent to planting <b>{r.trees.toLocaleString('en-US')} trees</b> every year</li>
            </ul>

            <Link to={`/contact?size=${r.kw}&type=${type}`} className="btn btn--primary btn--lg btn--block">
              Get an exact quote for {r.kw} kW <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <p className="muted small">Estimates are for guidance only. Final sizing and pricing are confirmed after a free site survey.</p>
          </div>
        </div>
      </section>
    </>
  );
}
