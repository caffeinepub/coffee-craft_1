export default function Hero() {
  const handleScrollDown = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-coffee.dim_1920x1080.jpg"
          alt="Gourmet coffee artistry"
          className="w-full h-full object-cover object-center"
        />
        {/* Warm dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        {/* Warm brown vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 35%, rgba(30,15,5,0.45) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative top line */}
        <div
          className="flex items-center justify-center gap-4 mb-8 animate-fade-in"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          <div
            className="h-px w-12"
            style={{
              background: 'linear-gradient(90deg, transparent, #C8A882)',
              boxShadow: '0 0 8px rgba(200,168,130,0.6)',
            }}
          />
          <span className="font-sans text-xs tracking-[0.35em] uppercase text-white/70 font-light">
            Est. 2024
          </span>
          <div
            className="h-px w-12"
            style={{
              background: 'linear-gradient(90deg, #C8A882, transparent)',
              boxShadow: '0 0 8px rgba(200,168,130,0.6)',
            }}
          />
        </div>

        {/* Main Headline — 3D Luxury Text */}
        <h1
          className="font-serif text-white mb-6 animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          <span
            className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-3"
            style={{
              textShadow:
                '1px 1px 0px rgba(255,220,170,0.95), 2px 2px 0px rgba(210,160,90,0.8), 3px 3px 0px rgba(160,110,50,0.65), 4px 4px 0px rgba(110,70,25,0.5), 5px 5px 0px rgba(70,40,10,0.35), 6px 6px 14px rgba(30,15,5,0.4), 0 0 30px rgba(255,200,120,0.15)',
            }}
          >
            COFFEE
          </span>
          <span
            className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
            style={{
              color: '#E8C98A',
              textShadow:
                '1px 1px 0px rgba(255,230,180,0.9), 2px 2px 0px rgba(220,170,90,0.75), 3px 3px 0px rgba(170,110,40,0.6), 4px 4px 0px rgba(120,70,20,0.45), 5px 5px 0px rgba(80,45,10,0.3), 6px 6px 16px rgba(40,20,5,0.45), 0 0 35px rgba(200,140,60,0.35)',
            }}
          >
            CRAFT
          </span>
        </h1>

        {/* Divider */}
        <div
          className="flex items-center justify-center gap-3 my-8 animate-fade-in"
          style={{ animationDelay: '0.7s', opacity: 0 }}
        >
          <div className="h-px w-8 bg-white/30" />
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: '#C8A882',
              boxShadow:
                '0 0 6px rgba(200,168,130,0.7), 0 0 14px rgba(160,120,60,0.4)',
            }}
          />
          <div className="h-px w-8 bg-white/30" />
        </div>

        {/* Tagline */}
        <p
          className="font-serif text-white/90 text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.9s', opacity: 0 }}
        >
          Where Artistry Meets the Bean.
        </p>

        {/* Scroll indicator */}
        <button
          onClick={handleScrollDown}
          className="mt-16 flex flex-col items-center gap-2 mx-auto text-white/50 hover:text-craft-gold transition-colors duration-300 animate-fade-in group"
          style={{ animationDelay: '1.4s', opacity: 0 }}
          aria-label="Scroll down"
        >
          <span className="font-sans text-xs tracking-[0.25em] uppercase">Discover</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="animate-bounce"
            aria-hidden="true"
          >
            <path
              d="M10 4v12M4 10l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
