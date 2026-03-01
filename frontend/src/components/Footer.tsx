export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'coffee-craft'
  );

  return (
    <footer className="bg-craft-ink py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <p
          className="font-serif text-craft-gold/70 text-sm tracking-[0.15em] uppercase"
          style={{
            textShadow:
              '0.5px 0.5px 0px rgba(200,168,130,0.4), 1px 1px 0px rgba(140,90,40,0.3), 2px 2px 4px rgba(30,15,5,0.3)',
          }}
        >
          © {year} COFFEE CRAFT
        </p>

        {/* Attribution */}
        <p className="font-sans text-white/40 text-xs tracking-wide flex items-center gap-1.5">
          Built with{' '}
          <span
            className="text-craft-gold/80 glow-brown-text"
            aria-label="love"
          >
            ♥
          </span>{' '}
          using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-craft-gold/80 transition-colors duration-300 underline underline-offset-2"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
