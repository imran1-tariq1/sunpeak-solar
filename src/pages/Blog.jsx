import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import { posts } from '../data/site';
import Photo from '../components/Photo';
import Reveal from '../components/Reveal';
import { CtaBanner, PageHeader } from '../components/Common';

export const formatDate = (d) => new Date(`${d}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default function Blog() {
  usePageTitle('Blog', 'Solar guides, net metering explained, maintenance tips and clean energy news.');
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader title="Solar Knowledge Hub" text="Practical guides and expert advice to help you make smarter energy decisions." crumb="Blog" />

      <section className="section">
        <div className="container">
          <Reveal>
            <Link to={`/blog/${featured.slug}`} className="card post-featured">
              <div className="post-featured__art"><Photo name={featured.image} alt={featured.title} /></div>
              <div className="post-featured__body">
                <span className="tag">Featured · {featured.category}</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <p className="post-meta">
                  <span><CalendarDays size={14} aria-hidden="true" /> {formatDate(featured.date)}</span>
                  <span><Clock size={14} aria-hidden="true" /> {featured.readTime}</span>
                </p>
                <span className="link-arrow">Read article <ArrowRight size={16} aria-hidden="true" /></span>
              </div>
            </Link>
          </Reveal>

          <div className="grid grid--3 mt-lg">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link to={`/blog/${p.slug}`} className="card post-card">
                  <div className="post-card__art"><Photo name={p.image} alt={p.title} /></div>
                  <div className="post-card__body">
                    <span className="tag">{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <p className="post-meta">
                      <span><CalendarDays size={14} aria-hidden="true" /> {formatDate(p.date)}</span>
                      <span><Clock size={14} aria-hidden="true" /> {p.readTime}</span>
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
