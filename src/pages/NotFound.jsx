import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import Photo from '../components/Photo';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <section className="section not-found">
      <div className="container container--narrow center">
        <div className="art-frame not-found__art"><Photo name="solar-farm-sunset" alt="Solar panels at sunset" eager /></div>
        <span className="eyebrow">Error 404</span>
        <h1>This page has gone off-grid</h1>
        <p className="lead">The page you are looking for does not exist or has been moved.</p>
        <div className="hero__actions is-center">
          <Link to="/" className="btn btn--primary"><ArrowLeft size={18} aria-hidden="true" /> Back to home</Link>
          <Link to="/contact" className="btn btn--outline">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
