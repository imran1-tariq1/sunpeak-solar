import { company } from '../data/site';

export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`}>
      <svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="#0b2545" />
        <circle cx="20" cy="16" r="6.5" fill="#f59e0b" />
        <g stroke="#f59e0b" strokeWidth="2" strokeLinecap="round">
          <path d="M20 4.5v2.5M20 25v2.5M8.5 16H11M29 16h2.5M12 8l1.8 1.8M26.2 22.2L28 24M28 8l-1.8 1.8M13.8 22.2L12 24" />
        </g>
        <path d="M7 34l5-6h16l5 6z" fill="#3b82f6" />
      </svg>
      <span className="logo__text">
        {company.name.split(' ')[0]}
        <strong>{company.name.split(' ').slice(1).join(' ')}</strong>
      </span>
    </span>
  );
}
