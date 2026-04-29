import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/icons/Logo";
import { NAV_LINKS, SCHOOL, ANNOUNCEMENT, whatsappLink } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="relative z-50 overflow-hidden bg-primary text-primary-foreground">
        <div className="flex whitespace-nowrap py-1.5 text-xs sm:text-sm animate-marquee">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="px-8">✦ {ANNOUNCEMENT}</span>
          ))}
        </div>
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "bg-white/80 backdrop-blur-xl shadow-elegant" : "bg-transparent"
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-gold via-primary to-gold"
          style={{ scaleX }}
        />

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="group flex items-center gap-3" aria-label="Wisdom Academy home">
            <div className="relative">
              <Logo className={`h-10 w-10 transition-all duration-500 ${scrolled ? "drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" : ""}`} />
              <motion.div 
                animate={scrolled ? { opacity: [0.2, 0.5, 0.2] } : { opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 -z-10 rounded-full bg-gold blur-md"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg font-bold text-primary sm:text-xl">
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
                  className="group relative text-sm font-semibold text-ink/80 transition-colors hover:text-primary"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition hover:-translate-y-0.5"
            >
              <span className="relative z-10">Enquire Now</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-gold to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          </div>

          <button
            className="relative z-50 rounded-full p-2 hover:bg-secondary lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="h-6 w-6 text-primary" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu className="h-6 w-6 text-primary" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-40 flex flex-col bg-white/95 backdrop-blur-2xl lg:hidden"
            >
              <div className="flex flex-1 flex-col items-center justify-center gap-8 p-8">
                {NAV_LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    initial={{ opacity: 0, y: 20, rotate: -2 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 150, damping: 12 }}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl font-bold text-ink hover:text-primary"
                  >
                    {l.label}
                  </motion.a>
                ))}
                <motion.a
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  href={whatsappLink()}
                  className="mt-4 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-elegant"
                >
                  Start Admission
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
