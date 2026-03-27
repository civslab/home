import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6">
          <div className="glass-nav ghost-outline flex items-center justify-between rounded-md px-4 py-3">
            <a href="#main-content" className="block">
              <span className="font-heading text-xl font-extrabold tracking-[-0.03em] text-[var(--on-surface)]">
                CIVS Lab
              </span>
              <span className="mt-1 block font-label text-[0.68rem] uppercase tracking-[0.18em] text-[var(--on-surface-variant)]">
                Texas State University
              </span>
            </a>

            <div className="hidden items-center gap-6 lg:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--on-surface-variant)] transition-colors hover:text-[var(--primary)]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex">
              <a href="#contact" className="cta-secondary px-5 py-2.5 text-sm">
                Contact
              </a>
            </div>

            <button
              type="button"
              className="rounded-md bg-[var(--surface-high)] p-3 text-[var(--on-surface)] transition-colors hover:bg-[#d9e2ff] lg:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            key="mobile-navigation"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-6 top-20 z-50 rounded-md bg-[var(--surface-lowest)] p-6 shadow-[0_24px_60px_rgba(26,28,28,0.08)] outline outline-1 outline-[var(--outline-ghost)] lg:hidden"
          >
            <div className="absolute right-4 top-4">
              <button
                type="button"
                className="rounded-md bg-[var(--surface-high)] p-2.5 text-[var(--on-surface)] transition-colors hover:bg-[#d9e2ff]"
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>

            <div className="space-y-4 pt-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-heading text-2xl font-bold tracking-[-0.03em] text-[var(--on-surface)] transition-colors hover:text-[var(--primary)]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[var(--on-surface-variant)]">
              Construction informatics, visualization, and synthesis research at Texas State
              University.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
