import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/icons/Logo";
import { NAV_LINKS, SCHOOL, ANNOUNCEMENT, whatsappLink } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top announcement marquee */}
      <div className="relative z-40 overflow-hidden bg-primary text-primary-foreground">
        <div className="flex whitespace-nowrap py-1.5 text-xs sm:text-sm animate-marquee">
          <span className="px-8">✦ {ANNOUNCEMENT}</span>
          <span className="px-8">✦ {ANNOUNCEMENT}</span>
          <span className="px-8">✦ {ANNOUNCEMENT}</span>
          <span className="px-8">✦ {ANNOUNCEMENT}</span>
        </div>
      </div>

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`sticky top-0 z-40 w-full transition-all ${
          scrolled ? "glass shadow-soft" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Wisdom Academy home">
            <Logo className="h-10 w-10" />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold text-primary sm:text-xl">
                {SCHOOL.shortName}
              </span>
              <span className="font-deva text-[10px] text-muted-foreground sm:text-xs">
                {SCHOOL.deva} · English School
              </span>
            </div>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href={whatsappLink("Hello, I'd like to enquire about admissions for 2026-27.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold to-[oklch(0.65_0.16_60)] px-5 py-2.5 text-sm font-semibold text-ink shadow-soft transition hover:-translate-y-0.5"
            >
              Enquire Now
            </a>
          </div>

          <button
            className="rounded-md p-2 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass border-t border-border lg:hidden"
          >
            <ul className="space-y-1 px-4 py-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={whatsappLink("Hello, I'd like to enquire about admissions for 2026-27.")}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block rounded-full bg-gradient-to-br from-gold to-[oklch(0.65_0.16_60)] px-4 py-2 text-center text-sm font-semibold text-ink"
                >
                  Enquire Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
