import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="bg-craft-cream-dark py-28 md:py-36 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <div className="brown-divider" />
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-craft-muted font-medium">
            Find Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-craft-ink text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12">
          Come Visit{' '}
          <span className="italic font-normal text-craft-brown glow-brown-text">
            Our Craft.
          </span>
        </h2>

        {/* Address card */}
        <div className="flex items-start gap-6 group">
          {/* Glowing pin icon */}
          <div className="flex-shrink-0 mt-1">
            <div className="w-12 h-12 rounded-full border border-craft-brown flex items-center justify-center glow-brown transition-all duration-300">
              <MapPin
                size={22}
                className="text-craft-brown glow-brown-icon"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Address text */}
          <div>
            <p className="font-serif text-craft-ink text-2xl md:text-3xl font-medium leading-snug mb-2">
              14/7 Tiljala Thana,
            </p>
            <p className="font-serif text-craft-ink text-2xl md:text-3xl font-medium leading-snug">
              Newtown near Bhikanpura.
            </p>
            <p className="font-sans text-craft-muted text-sm mt-4 tracking-wide">
              West Bengal, India
            </p>
          </div>
        </div>

        {/* Decorative separator */}
        <div className="mt-16 flex items-center gap-4">
          <div className="brown-divider" />
          <div className="h-px flex-1 bg-craft-border" />
        </div>

        {/* Hours hint */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-craft-muted mb-2 font-medium">
              Open Daily
            </p>
            <p className="font-serif text-craft-ink text-xl font-medium">
              Morning to Evening
            </p>
          </div>
          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-craft-muted mb-2 font-medium">
              Experience
            </p>
            <p className="font-serif text-craft-ink text-xl font-medium">
              Dine-in & Takeaway
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
