import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Check, Clock } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import { company, posts } from '../data/site';
import Photo from '../components/Photo';
import { Avatar, CtaBanner } from '../components/Common';
import { formatDate } from './Blog';
import NotFound from './NotFound';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  usePageTitle(post ? post.title : 'Article not found', post?.excerpt);

  if (!post) return <NotFound />;
  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="article">
        <header className="article__header">
          <div className="container container--narrow">
            <Link to="/blog" className="back-link"><ArrowLeft size={16} aria-hidden="true" /> Back to blog</Link>
            <span className="tag">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="article__meta">
              <Avatar name={`${company.name} Team`} size={40} />
              <span>{company.name} Team</span>
              <span><CalendarDays size={14} aria-hidden="true" /> {formatDate(post.date)}</span>
              <span><Clock size={14} aria-hidden="true" /> {post.readTime}</span>
            </div>
          </div>
        </header>
        <div className="container container--narrow">
          <div className="art-frame article__art"><Photo name={post.image} alt={post.title} eager /></div>
          <div className="prose">
            <p className="lead">{post.excerpt}</p>
            {post.content.map((block, i) => {
              if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
              if (block.type === 'list')
                return (
                  <ul key={i} className="check-list">
                    {block.items.map((it) => <li key={it}><Check size={18} aria-hidden="true" /> {it}</li>)}
                  </ul>
                );
              return <p key={i}>{block.text}</p>;
            })}
          </div>
        </div>
      </article>

      <section className="section section--alt">
        <div className="container">
          <h2 className="h3 mb">Keep reading</h2>
          <div className="grid grid--3">
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="card post-card">
                <div className="post-card__art"><Photo name={p.image} alt={p.title} /></div>
                <div className="post-card__body">
                  <span className="tag">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p className="post-meta"><span><Clock size={14} aria-hidden="true" /> {p.readTime}</span></p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
