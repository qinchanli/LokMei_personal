import { ArrowRight } from 'lucide-react';

type HeroProps = {
  onExplore: () => void;
};

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-900">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-8 animate-fade-in-up animation-delay-100">
          Self-gallery
        </h1>
        <p className="text-stone-300 text-lg max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in-up animation-delay-200">
           — the anchor of my soul and feelings.
        </p>
        <button
          onClick={onExplore}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-stone-900 text-sm font-medium rounded-full hover:bg-sky-700 hover:text-white transition-all duration-300 animate-fade-in-up animation-delay-300"
        >
          View Selected Work
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-scroll-hint" />
      </div>
    </section>
  );
}
