import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

type NavbarProps = {
  onNavigate: (target: 'home' | 'collections' | 'about') => void;
};

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (target: 'home' | 'collections' | 'about') => {
    onNavigate(target);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <button
          onClick={() => handleNav('home')}
          className={`font-serif text-xl tracking-tight transition-colors ${
            scrolled ? 'text-stone-900' : 'text-white'
          } hover:text-sky-700`}
        >
          LokMei
        </button>

        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => handleNav('collections')}
            className={`text-sm font-medium transition-colors ${
              scrolled ? 'text-stone-600 hover:text-sky-700' : 'text-white/90 hover:text-white'
            }`}
          >
            Work
          </button>
          <button
            onClick={() => handleNav('about')}
            className={`text-sm font-medium transition-colors ${
              scrolled ? 'text-stone-600 hover:text-sky-700' : 'text-white/90 hover:text-white'
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleNav('about')}
            className={`text-sm font-medium px-5 py-2 rounded-full border transition-all ${
              scrolled
                ? 'border-stone-300 text-stone-800 hover:bg-stone-900 hover:text-white hover:border-stone-900'
                : 'border-white/40 text-white hover:bg-white hover:text-stone-900'
            }`}
          >
            Let's Talk
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={24} className={scrolled ? 'text-stone-900' : 'text-white'} />
          ) : (
            <Menu size={24} className={scrolled ? 'text-stone-900' : 'text-white'} />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <div className="flex flex-col px-6 py-6 gap-5">
            <button
              onClick={() => handleNav('collections')}
              className="text-left text-sm font-medium text-stone-600 hover:text-sky-700"
            >
              Work
            </button>
            <button
              onClick={() => handleNav('about')}
              className="text-left text-sm font-medium text-stone-600 hover:text-sky-700"
            >
              About
            </button>
            <button
              onClick={() => handleNav('about')}
              className="text-left text-sm font-medium text-sky-700"
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
