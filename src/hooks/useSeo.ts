import { useEffect } from 'react';
import { siteConfig } from '../data';

interface SeoOptions {
  title?: string;
  description?: string;
  path?: string;
}

export function useSeo({ title, description, path }: SeoOptions) {
  useEffect(() => {
    // Update title
    const fullTitle = title ? `${title} | ${siteConfig.brandName}` : siteConfig.defaultSeo.title;
    document.title = fullTitle;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || siteConfig.defaultSeo.description);
    }

    // Update canonical URL
    if (path) {
      let canonical = document.querySelector('link[rel="canonical"]');
      const url = `${siteConfig.websiteUrl}${path}`;
      if (canonical) {
        canonical.setAttribute('href', url);
      } else {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        canonical.setAttribute('href', url);
        document.head.appendChild(canonical);
      }
    }
  }, [title, description, path]);
}
