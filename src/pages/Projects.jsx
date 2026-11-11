import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, TrendingDown, X, Zap } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import { projects } from '../data/site';
import Photo from '../components/Photo';
import { CtaBanner, PageHeader } from '../components/Common';

const cats = ['All', 'Residential', 'Commercial', 'Agricultural'];

function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    const prev = document.activeElement;
    closeRef.current?.focus();
    document.body.classList.add('no-scroll');
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', onKey);
      prev?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={onClose}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" className="modal__close" onClick={onClose} aria-label="Close">
          <X size={22} />
        </button>
        <div className="modal__art"><Photo name={project.image} alt={`${project.title} solar installation`} eager /></div>
        <div className="modal__body">
          <span className="tag">{project.category}</span>
          <h2 id="project-modal-title">{project.title}</h2>
          <p>{project.description}</p>
          <ul className="meta-list">
            <li><MapPin size={16} aria-hidden="true" /> {project.location}</li>
            <li><Zap size={16} aria-hidden="true" /> {project.size} system</li>
            <li><CalendarDays size={16} aria-hidden="true" /> Completed {project.year}</li>
            <li><TrendingDown size={16} aria-hidden="true" /> Saves {project.savings}</li>
          </ul>
          <Link to={`/contact?service=${project.category === 'Residential' ? 'residential' : project.category === 'Commercial' ? 'commercial' : 'agricultural'}`} className="btn btn--primary">
            Get a similar system
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  usePageTitle('Projects', 'Explore residential, commercial and agricultural solar projects completed by SunPeak Solar.');
  const [cat, setCat] = useState('All');
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);
  const list = cat === 'All' ? projects : projects.filter((p) => p.category === cat);

  return (
    <>
      <PageHeader title="Our Projects" text="A selection of systems we have designed and installed for homes, businesses and farms." crumb="Projects" />

      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Filter projects">
            {cats.map((c) => (
              <button key={c} type="button" className={`filter-btn ${cat === c ? 'is-active' : ''}`} aria-pressed={cat === c} onClick={() => setCat(c)}>
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid--3 mt">
            {list.map((p) => (
              <button key={p.id} type="button" className="card project-card project-card--btn fade-in" onClick={() => setActive(p)}>
                <div className="project-card__art">
                  <Photo name={p.image} alt={`${p.title} solar installation`} />
                  <span className="project-card__size">{p.size}</span>
                </div>
                <div className="project-card__body">
                  <span className="tag">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p className="muted"><MapPin size={14} aria-hidden="true" /> {p.location} · {p.year}</p>
                  <p className="project-card__save"><TrendingDown size={16} aria-hidden="true" /> Saves {p.savings}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active && <ProjectModal project={active} onClose={close} />}

      <CtaBanner title="Your project could be next" />
    </>
  );
}
