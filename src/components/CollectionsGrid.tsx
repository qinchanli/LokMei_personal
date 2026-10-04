import { ArrowUpRight } from 'lucide-react';
import type { Collection } from '@/data/portfolio';

type CollectionsGridProps = {
  collections: Collection[];
  onSelect: (collection: Collection) => void;
};

export default function CollectionsGrid({
  collections,
  onSelect,
}: CollectionsGridProps) {
  return (
    <section
      id="collections"
      className="bg-stone-50 py-24 lg:py-32 px-6 lg:px-10 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="text-sky-700 text-xs font-medium uppercase tracking-[0.4em] mb-4">
              Selected Work
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-stone-900">
              Six areas of practice
            </h2>
          </div>
          <p className="text-stone-500 max-w-md text-sm leading-relaxed">
            A cross-section of recent collaborations. Each area represents a
            distinct capability — tap any to see the projects within.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection, i) => (
            <button
              key={collection.id}
              onClick={() => onSelect(collection)}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200 text-left animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={collection.cover}
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent" />

              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                <ArrowUpRight size={18} className="text-white" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                <p className="text-sky-300 text-xs font-medium uppercase tracking-[0.3em] mb-2">
                  {String(i + 1).padStart(2, '0')} — {collection.works.length} projects
                </p>
                <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2">
                  {collection.title}
                </h3>
                <p className="text-stone-300 text-sm">
                  {collection.tagline}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
