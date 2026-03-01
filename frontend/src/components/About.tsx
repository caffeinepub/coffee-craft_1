export default function About() {
  return (
    <section id="about" className="bg-craft-cream py-28 md:py-36 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <div className="brown-divider" />
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-craft-muted font-medium">
            Our Story
          </span>
        </div>

        {/* Luxury "Our Story" heading */}
        <div className="mb-12 text-center sm:text-left">
          <h2 className="font-serif text-craft-brown text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-luxury-3d">
            Our Story
          </h2>
          {/* Decorative gold rule */}
          <div className="flex items-center gap-3 mt-5 justify-center sm:justify-start">
            <div
              className="h-0.5 w-16 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #6B3F1F, #C8A882, #E8D5B0)',
                boxShadow: '0 0 8px rgba(200,168,130,0.55), 0 0 20px rgba(107,63,31,0.22)',
              }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: '#C8A882',
                boxShadow: '0 0 6px rgba(200,168,130,0.7)',
              }}
            />
            <div
              className="h-0.5 w-8 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #C8A882, transparent)',
                boxShadow: '0 0 6px rgba(200,168,130,0.3)',
              }}
            />
          </div>
        </div>

        {/* Heading */}
        <h3 className="font-serif text-craft-ink text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
          Affordable Luxury,{' '}
          <span className="italic font-normal text-craft-brown glow-brown-text">
            Artisanal Soul.
          </span>
        </h3>

        {/* Body copy */}
        <p className="font-sans text-craft-muted text-lg md:text-xl leading-relaxed font-light max-w-2xl">
          Founded by Ayush, COFFEE CRAFT redefines affordable luxury. We combine 5-star hygiene
          standards with artisanal flavors to bring you the perfect cup and gourmet snacks at an
          accessible price.
        </p>

        {/* Stall & Owner Photo */}
        <div className="my-14 md:my-16">
          <figure className="relative">
            {/* Decorative outer frame */}
            <div
              className="absolute -inset-1 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #C8A882 0%, #6B3F1F 50%, #C8A882 100%)',
                opacity: 0.45,
                filter: 'blur(2px)',
              }}
            />
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/assets/generated/coffee-craft-stall-owner.dim_1200x800.png"
                alt="Coffee Craft stall with owner Ayush"
                className="w-full object-cover"
                style={{
                  maxHeight: '520px',
                  boxShadow:
                    '0 8px 32px rgba(107,63,31,0.28), 0 2px 8px rgba(200,168,130,0.18), inset 0 0 0 1px rgba(200,168,130,0.15)',
                }}
              />
              {/* Subtle warm overlay for luxury feel */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 55%, rgba(44,26,14,0.35) 100%)',
                }}
              />
            </div>
            <figcaption className="mt-4 text-center font-sans text-sm tracking-[0.15em] uppercase text-craft-muted font-medium">
              Ayush &amp; the Coffee Craft Stall
            </figcaption>
          </figure>
        </div>

        {/* Decorative bottom accent */}
        <div className="mt-10 flex items-center gap-6">
          <div className="brown-divider" />
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-craft-brown"
                style={{
                  boxShadow:
                    '0 0 6px rgba(107,63,31,0.45), 0 0 14px rgba(160,82,45,0.22)',
                  opacity: 1 - i * 0.25,
                }}
              />
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-craft-border pt-14">
          {[
            { number: '5★', label: 'Hygiene Standards' },
            { number: '100%', label: 'Artisanal Flavors' },
            { number: '∞', label: 'Accessible Luxury' },
          ].map((item) => (
            <div key={item.label} className="text-center sm:text-left">
              <div className="font-serif text-3xl font-bold text-craft-brown mb-2 glow-brown-text">
                {item.number}
              </div>
              <div className="font-sans text-sm tracking-[0.1em] uppercase text-craft-muted font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
