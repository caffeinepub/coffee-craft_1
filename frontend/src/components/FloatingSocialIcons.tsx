import { SiWhatsapp, SiInstagram } from 'react-icons/si';

export default function FloatingSocialIcons() {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      aria-label="Social media quick links"
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/919330602579"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="group flex items-center justify-center w-12 h-12 rounded-full bg-craft-cream border border-craft-brown transition-all duration-300"
        style={{
          boxShadow:
            '0 2px 12px rgba(107,63,31,0.25), 0 0 0 0 rgba(107,63,31,0)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            '0 4px 20px rgba(107,63,31,0.45), 0 0 18px rgba(160,82,45,0.3)';
          (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            '0 2px 12px rgba(107,63,31,0.25), 0 0 0 0 rgba(107,63,31,0)';
          (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
        }}
      >
        <SiWhatsapp
          size={22}
          className="text-craft-brown transition-all duration-300 group-hover:text-craft-brown-light"
          aria-hidden="true"
        />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/strikingwayush?igsh=eDl3aDk3MnByY3U2"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
        className="group flex items-center justify-center w-12 h-12 rounded-full bg-craft-cream border border-craft-brown transition-all duration-300"
        style={{
          boxShadow:
            '0 2px 12px rgba(107,63,31,0.25), 0 0 0 0 rgba(107,63,31,0)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            '0 4px 20px rgba(107,63,31,0.45), 0 0 18px rgba(160,82,45,0.3)';
          (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            '0 2px 12px rgba(107,63,31,0.25), 0 0 0 0 rgba(107,63,31,0)';
          (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
        }}
      >
        <SiInstagram
          size={22}
          className="text-craft-brown transition-all duration-300 group-hover:text-craft-brown-light"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
