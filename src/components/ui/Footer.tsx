export function Footer() {
  return (
    <footer className="gallery-footer">
      <span className="gallery-footer__hint">
        Hover para pausar · Clique para visitar
      </span>

      <div className="flex items-center gap-3">
        <span className="gallery-footer__count">4 sistemas</span>
        <div className="gallery-footer__line" />
      </div>
    </footer>
  );
}
