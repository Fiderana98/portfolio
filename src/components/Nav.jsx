import { useEffect, useState } from "react";

export default function Nav({ theme, setTheme }) {
  const isDark = theme === "dark";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm"
      style={{ background: "color-mix(in srgb, var(--paper) 82%, transparent)" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-3 md:py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className={`nav-avatar ${scrolled ? "nav-avatar-in" : ""}`}>
            <img src="/portrait.jpg" alt="" aria-hidden="true" />
          </span>
          <span className="lnk font-serif text-base md:text-lg tracking-tight">
            Rasolonjatovo Tolotsoa Fiderana
          </span>
        </a>

        <div className="flex items-center gap-5">
          <span className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
            Fianarantsoa · MG
          </span>

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            role="switch"
            aria-checked={!isDark}
            aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
            className="theme-switch"
          >
            <span className="theme-switch-track">
              <span className="theme-switch-icons" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="11"
                  height="11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  width="11"
                  height="11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </span>
              <span className="theme-switch-thumb" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}