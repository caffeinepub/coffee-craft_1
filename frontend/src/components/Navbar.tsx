import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'navbar-scrolled'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Brand with Logo */}
        <button
          onClick={() => handleNavClick('#hero')}
          className="flex items-center gap-3 group"
          aria-label="COFFEE CRAFT - Go to top"
        >
          {/* Logo */}
          <img
            src="/assets/generated/coffee-craft-logo.dim_200x200.png"
            alt="Coffee Craft Logo"
            className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full"
            style={{
              filter: 'drop-shadow(0 2px 6px rgba(107,63,31,0.35))',
            }}
          />
          {/* Brand Name with 3D effect */}
          <span
            className={`font-serif text-lg md:text-xl font-bold tracking-[0.18em] uppercase transition-all duration-300 text-3d-navbar ${
              scrolled
                ? 'text-craft-ink group-hover:text-craft-brown'
                : 'text-white group-hover:text-craft-gold-light'
            }`}
            style={
              scrolled
                ? {
                    textShadow:
                      '0.5px 0.5px 0px rgba(200,168,130,0.8), 1px 1px 0px rgba(160,110,60,0.55), 2px 2px 0px rgba(110,70,30,0.35), 3px 3px 6px rgba(60,35,10,0.2)',
                  }
                : {
                    textShadow:
                      '0.5px 0.5px 0px rgba(255,220,170,0.7), 1px 1px 0px rgba(200,150,80,0.5), 2px 2px 0px rgba(140,90,30,0.35), 3px 3px 8px rgba(30,15,5,0.4)',
                  }
            }
          >
            COFFEE CRAFT
          </span>
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`font-sans text-sm font-medium tracking-[0.12em] uppercase transition-colors duration-300 relative group ${
                  scrolled
                    ? 'text-craft-muted hover:text-craft-brown'
                    : 'text-white/80 hover:text-craft-gold'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300 ${
                    scrolled ? 'bg-craft-brown' : 'bg-craft-gold'
                  }`}
                  style={{
                    boxShadow: scrolled
                      ? '0 0 6px rgba(107,63,31,0.5)'
                      : '0 0 6px rgba(200,168,130,0.6)',
                  }}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              scrolled ? 'bg-craft-ink' : 'bg-white'
            } ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              scrolled ? 'bg-craft-ink' : 'bg-white'
            } ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              scrolled ? 'bg-craft-ink' : 'bg-white'
            } ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-craft-cream border-t border-craft-border transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-8 py-3 font-sans text-sm font-medium tracking-[0.12em] uppercase text-craft-muted hover:text-craft-brown hover:bg-craft-cream-dark transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
