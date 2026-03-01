import { SiInstagram, SiWhatsapp } from 'react-icons/si';

export default function Contact() {
  return (
    <section id="contact" className="bg-craft-cream py-28 md:py-36 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <div className="brown-divider" />
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-craft-muted font-medium">
            Connect With Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-craft-ink text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Let's Start a{' '}
          <span className="italic font-normal text-craft-brown glow-brown-text">
            Conversation.
          </span>
        </h2>

        <p className="font-sans text-craft-muted text-lg font-light mb-16 max-w-xl">
          Reach out to us on Instagram or WhatsApp — we'd love to hear from you.
        </p>

        {/* Contact links */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/strikingwayush?igsh=eDl3aDk3MnByY3U2"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 no-underline"
            aria-label="Follow us on Instagram"
          >
            <div className="w-14 h-14 rounded-full border border-craft-brown flex items-center justify-center glow-brown transition-all duration-300 group-hover:bg-craft-brown/5">
              <SiInstagram
                size={24}
                className="text-craft-brown glow-brown-icon"
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-craft-muted mb-0.5 font-medium">
                Instagram
              </p>
              <p className="font-serif text-craft-ink text-lg font-medium group-hover:text-craft-brown transition-colors duration-300">
                @strikingwayush
              </p>
            </div>
          </a>

          {/* Vertical divider on desktop */}
          <div className="hidden sm:block w-px bg-craft-border self-stretch" />

          {/* WhatsApp */}
          <a
            href="https://wa.me/919330602579"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 no-underline"
            aria-label="Contact us on WhatsApp"
          >
            <div className="w-14 h-14 rounded-full border border-craft-brown flex items-center justify-center glow-brown transition-all duration-300 group-hover:bg-craft-brown/5">
              <SiWhatsapp
                size={24}
                className="text-craft-brown glow-brown-icon"
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-craft-muted mb-0.5 font-medium">
                WhatsApp
              </p>
              <p className="font-serif text-craft-ink text-lg font-medium group-hover:text-craft-brown transition-colors duration-300">
                +91 93306 02579
              </p>
            </div>
          </a>
        </div>

        {/* Decorative bottom */}
        <div className="mt-20 flex items-center gap-4">
          <div className="brown-divider" />
          <div className="h-px flex-1 bg-craft-border" />
        </div>
      </div>
    </section>
  );
}
