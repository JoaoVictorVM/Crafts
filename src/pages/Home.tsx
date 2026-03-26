import { Header } from "../components/ui/Header";
import { Footer } from "../components/ui/Footer";
import { GalleryGrid } from "../components/gallery/GalleryGrid";

export default function Home() {
  return (
    <div className="gallery-shell">
      {/* Grain overlay */}
      <div className="gallery-grain" aria-hidden="true" />

      <Header />

      <main className="gallery-content">
        <GalleryGrid />
      </main>

      <Footer />
    </div>
  );
}
