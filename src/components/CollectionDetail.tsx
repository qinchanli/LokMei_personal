import { useEffect, useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import type { Collection } from '@/data/portfolio';

type CollectionDetailProps = {
  collection: Collection;
  onBack: () => void;
};

export default function CollectionDetail({
  collection,
  onBack,
}: CollectionDetailProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [collection.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightbox !== null) setLightbox(null);
        else onBack();
      }
      if (e.key === 'ArrowRight' && lightbox !== null) {
        setLightbox((p) => (p === null ? null : (p + 1) % collection.works.length));
      }
      if (e.key === 'ArrowLeft' && lightbox !== null) {
        setLightbox((p) =>
          p === null ? null : (p - 1 + collection.works.length) % collection.works.length
        );
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, onBack, collection.works.length]);

  const active = lightbox !== null ? collection.works[lightbox] : null;

  return (
    <section className="bg-stone-50 min-h-screen pt-28 pb-24 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-stone-500 hover:text-sky-700 transition-colors mb-12 text-sm font-medium"
        >
          <ArrowLeft size={16} />
          All Work
        </button>

        <header className="mb-16 max-w-3xl">
          <p className="text-sky-700 text-xs font-medium uppercase tracking-[0.4em] mb-4">
            {collection.works.length} Projects
          </p>
          <h2 className="font-serif text-4xl lg:text-6xl text-stone-900 mb-4">
            {collection.title}
          </h2>
          <p className="text-sky-700 text-lg font-medium mb-6">
            {collection.tagline}
          </p>
          <p className="text-stone-600 leading-relaxed text-base lg:text-lg whitespace-pre-line">
            {collection.description}
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collection.works.map((work, i) => (
            <button
              key={work.id}
              onClick={() => setLightbox(i)}
              className="group text-left animate-fade-in-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl bg-stone-200 aspect-[4/5] mb-4">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-lg text-stone-900 group-hover:text-sky-700 transition-colors">
                {work.title}
              </h3>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-stone-900/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          {collection.works.length > 1 && (
            <>
              <button
                className="absolute left-6 text-white/70 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((p) =>
                    p === null ? null : (p - 1 + collection.works.length) % collection.works.length
                  );
                }}
                aria-label="Previous"
              >
                <ArrowLeft size={28} />
              </button>
              <button
                className="absolute right-6 text-white/70 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((p) =>
                    p === null ? null : (p + 1) % collection.works.length
                  );
                }}
                aria-label="Next"
              >
                <ArrowLeft size={28} className="rotate-180" />
              </button>
            </>
          )}
          <div
            className="max-w-5xl w-full grid md:grid-cols-[1fr_280px] gap-8 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.image}
              alt={active.title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-left">
              <h3 className="font-serif text-2xl text-white mb-3">
                {active.title}
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed whitespace-pre-line">
                {active.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
