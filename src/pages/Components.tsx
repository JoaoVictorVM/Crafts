import { Header } from "../components/ui/Header";
import { Footer } from "../components/ui/Footer";
import { ComponentCard } from "../components/components-gallery/ComponentCard";
import { componentItems } from "../data/components";

export default function Components() {
  return (
    <div className="page-shell">
      <div className="gallery-grain" aria-hidden="true" />
      <Header />
      <main className="components-content">
        <div className="components-grid">
          {componentItems.map((item) => (
            <ComponentCard key={item.id} item={item} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
