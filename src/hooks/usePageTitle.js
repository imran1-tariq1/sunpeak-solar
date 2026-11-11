import { useEffect } from 'react';
import { company } from '../data/site';

export default function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${company.name}` : `${company.name} | Clean Energy for Homes & Businesses`;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }, [title, description]);
}
