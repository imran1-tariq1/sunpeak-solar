/**
 * Real photo from /public/images (WebP, public-domain / CC0 sources, see CREDITS.md).
 * Lazy-loads by default; pass eager for above-the-fold images.
 */
export default function Photo({ name, alt, eager = false, className = '' }) {
  return (
    <img
      className={`photo ${className}`}
      src={`/images/${name}.webp`}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchpriority={eager ? 'high' : undefined}
      decoding="async"
      width="1400"
      height="933"
    />
  );
}
