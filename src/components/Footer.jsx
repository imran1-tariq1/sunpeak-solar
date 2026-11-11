import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Youtube } from 'lucide-react';
import { company, services } from '../data/site';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const subscribe = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('error');
      return;
    }
    setStatus('ok');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>
            {company.name} designs and installs premium solar energy systems for homes, businesses and farms. Since {company.founded}, we have helped thousands of
            families take control of their electricity bills.
          </p>
          <div className="socials">
            <a href={company.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
            <a href={company.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            <a href={company.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={company.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={18} /></a>
          </div>
        </div>

        <div>
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Our Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3>Services</h3>
          <ul>
            {services.map((s) => (
              <li key={s.id}><Link to={`/services#${s.id}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Get in touch</h3>
          <ul className="footer__contact">
            <li><MapPin size={16} aria-hidden="true" /> {company.address}</li>
            <li><Phone size={16} aria-hidden="true" /> <a href={company.phoneHref}>{company.phone}</a></li>
            <li><Mail size={16} aria-hidden="true" /> <a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><Clock size={16} aria-hidden="true" /> {company.hours}</li>
          </ul>
          <form className="newsletter" onSubmit={subscribe} noValidate>
            <label htmlFor="newsletter-email">Solar tips & offers, once a month</label>
            <div className="newsletter__row">
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus(null);
                }}
                aria-invalid={status === 'error'}
              />
              <button type="submit" aria-label="Subscribe"><Send size={18} /></button>
            </div>
            {status === 'ok' && <p className="newsletter__msg is-ok" role="status">Thanks! You are subscribed.</p>}
            {status === 'error' && <p className="newsletter__msg is-error" role="alert">Please enter a valid email address.</p>}
          </form>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>
            <Link to="/privacy">Privacy Policy</Link> · <Link to="/terms">Terms of Service</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
