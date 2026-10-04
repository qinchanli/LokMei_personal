import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CollectionsGrid from '@/components/CollectionsGrid';
import CollectionDetail from '@/components/CollectionDetail';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { collections as allCollections, type Collection } from '@/data/portfolio';

export default function App() {
  const [active, setActive] = useState<Collection | null>(null);

  const scrollTo = (id: 'home' | 'collections' | 'about') => {
    if (active) setActive(null);
    requestAnimationFrame(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans antialiased text-stone-800">
      <Navbar onNavigate={scrollTo} />

      {active ? (
        <CollectionDetail
          collection={active}
          onBack={() => {
            setActive(null);
            requestAnimationFrame(() =>
              document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })
            );
          }}
        />
      ) : (
        <>
          <Hero onExplore={() => scrollTo('collections')} />

          <section className="bg-white py-24 lg:py-32 px-6 lg:px-10 border-b border-stone-200">
            <div className="mx-auto max-w-4xl">
              <p className="text-sky-700 text-xs uppercase tracking-[0.4em] mb-6 font-medium">
                Approach
              </p>
              <p className="font-serif text-2xl lg:text-3xl text-stone-800 leading-relaxed">
                Bridging personal expression and collaborative innovation: 
                I create independently to push creative boundaries, and partner with studios to bring impactful products to life.
              </p>
            </div>
          </section>

          <CollectionsGrid
            collections={allCollections}
            onSelect={(c) => setActive(c)}
          />

          <About />
        </>
      )}

      <Footer />
    </div>
  );
}
