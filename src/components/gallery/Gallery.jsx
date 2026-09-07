import { useEffect, useState } from "react";
import "./Gallery.css";

const images = [
  {
    id: 1,
    title: "Quiet Coast",
    category: "Travel",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
    alt: "A misty mountain landscape beside a calm lake",
  },
  {
    id: 2,
    title: "Soft Geometry",
    category: "Architecture",
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=85",
    alt: "Modern white house beneath a blue sky",
  },
  {
    id: 3,
    title: "Golden Hour",
    category: "Nature",
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85",
    alt: "Sunset over a green field",
  },
  {
    id: 4,
    title: "Still Life",
    category: "Studio",
    src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1000&q=85",
    alt: "A bright, carefully styled interior",
  },
  {
    id: 5,
    title: "Wild Air",
    category: "Escape",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=85",
    alt: "Sunlight passing through a dense green forest",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) return undefined;

    function closeOnEscape(event) {
      if (event.key === "Escape") setSelectedImage(null);
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selectedImage]);

  return (
    <main className="gallery-page">
      <header className="gallery-header">
        <div>
          <p className="gallery-kicker">CURATED MOMENTS · 2026</p>
          <h1>Visual journal</h1>
        </div>
        <p className="gallery-intro">
          Five quiet frames collected from places, spaces, and everything in between.
        </p>
      </header>

      <section className="gallery-grid" aria-label="Photo gallery">
        {images.map((image, index) => (
          <button
            className={`gallery-item gallery-item-${index + 1}`}
            key={image.id}
            type="button"
            onClick={() => setSelectedImage(image)}
            aria-label={`Open ${image.title}`}
          >
            <img src={image.src} alt={image.alt} loading={index > 1 ? "lazy" : "eager"} />
            <span className="gallery-overlay" />
            <span className="gallery-number">0{index + 1}</span>
            <span className="gallery-caption">
              <small>{image.category}</small>
              <strong>{image.title}</strong>
            </span>
            <span className="gallery-open" aria-hidden="true">↗</span>
          </button>
        ))}
      </section>

      {selectedImage && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview of ${selectedImage.title}`}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="gallery-close"
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close preview"
            autoFocus
          >×</button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <figcaption>
              <span>{selectedImage.category}</span>
              {selectedImage.title}
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}

export default Gallery;
