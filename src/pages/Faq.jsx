import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import { company, faqs } from '../data/site';
import FaqList from '../components/FaqList';
import { PageHeader } from '../components/Common';

export default function Faq() {
  usePageTitle('FAQ', 'Answers to common questions about solar savings, installation, pricing, net metering and warranties.');
  const categories = ['All', ...new Set(faqs.map((f) => f.category))];
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return faqs.filter((f) => (cat === 'All' || f.category === cat) && (!term || f.q.toLowerCase().includes(term) || f.a.toLowerCase().includes(term)));
  }, [cat, q]);

  return (
    <>
      <PageHeader title="Frequently Asked Questions" text="Everything you need to know about going solar. Can't find your answer? Just ask us." crumb="FAQ" />

      <section className="section">
        <div className="container container--narrow">
          <div className="search">
            <Search size={20} aria-hidden="true" />
            <input type="search" placeholder="Search questions…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search FAQs" />
          </div>
          <div className="filters mt" role="group" aria-label="Filter FAQs by topic">
            {categories.map((c) => (
              <button key={c} type="button" className={`filter-btn ${cat === c ? 'is-active' : ''}`} aria-pressed={cat === c} onClick={() => setCat(c)}>
                {c}
              </button>
            ))}
          </div>

          <div className="mt">
            {list.length ? (
              <FaqList key={`${cat}-${q}`} items={list} />
            ) : (
              <div className="empty">
                <p>No questions match “{q}”.</p>
                <button type="button" className="btn btn--outline" onClick={() => { setQ(''); setCat('All'); }}>Clear search</button>
              </div>
            )}
          </div>

          <div className="card help-card mt-lg">
            <div>
              <h2 className="h3">Still have questions?</h2>
              <p className="muted">Our solar advisors are happy to help. {company.hours}.</p>
            </div>
            <div className="help-card__actions">
              <a href={company.phoneHref} className="btn btn--outline">Call {company.phone}</a>
              <Link to="/contact" className="btn btn--primary">Send a message</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
