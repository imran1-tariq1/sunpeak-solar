import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ArrowUp, MessageCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { company } from '../data/site';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    return undefined;
  }, [pathname, hash]);
  return null;
}

function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="floating">
      <button
        type="button"
        className={`floating__top ${show ? 'is-shown' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        tabIndex={show ? 0 : -1}
      >
        <ArrowUp size={20} />
      </button>
      <a
        className="floating__wa"
        href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi, I would like a solar quote.')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}

export default function Layout() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollManager />
      <Navbar />
      <main id="main">
        <Suspense fallback={<div className="page-loader" role="status" aria-label="Loading"><span /></div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
