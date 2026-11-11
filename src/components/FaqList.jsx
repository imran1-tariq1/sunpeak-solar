import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqList({ items }) {
  const [open, setOpen] = useState(0);
  const base = useId().replace(/:/g, '');

  return (
    <div className="faq-list">
      {items.map((f, i) => {
        const isOpen = open === i;
        const id = `${base}-${i}`;
        return (
          <div key={f.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            <h3>
              <button type="button" aria-expanded={isOpen} aria-controls={`panel-${id}`} id={`btn-${id}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                <span>{f.q}</span>
                <ChevronDown size={20} aria-hidden="true" />
              </button>
            </h3>
            <div id={`panel-${id}`} role="region" aria-labelledby={`btn-${id}`} className="faq-item__panel">
              <div>
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
