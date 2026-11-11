import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { company, navLinks } from '../data/site';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar__inner">
          <span>☀ Free site survey across 12 cities. Installment plans available.</span>
          <a href={company.phoneHref}>
            <Phone size={14} aria-hidden="true" /> {company.phone}
          </a>
        </div>
      </div>
      <div className="container navbar__inner">
        <Link to="/" aria-label={`${company.name} home`}>
          <Logo />
        </Link>

        <nav id="main-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="nav__mobile-only">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <Link to="/contact" className="btn btn--primary nav__mobile-cta">
            Get Free Quote
          </Link>
        </nav>

        <div className="navbar__actions">
          <Link to="/contact" className="btn btn--primary navbar__cta">
            Get Free Quote
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}
    </header>
  );
}
