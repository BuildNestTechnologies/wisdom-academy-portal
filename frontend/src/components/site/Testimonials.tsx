import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(t);
  }, [paused]);

  const cur = TESTIMONIALS[i];
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="Parents speak" title={<>Words from our families.</>} />

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="mx-auto h-10 w-10 text-gold/60" />
          <div className="relative min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-6 text-center"
              >
                <blockquote className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
                  &ldquo;{cur.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex flex-col items-center gap-3">
                  <img
                    src={cur.avatar}
                    alt=""
                    loading="lazy"
                    className="h-16 w-16 rounded-full border-2 border-gold object-cover shadow-soft"
                  />
                  <div>
                    <div className="font-semibold text-primary">{cur.name}</div>
                    <div className="text-xs text-muted-foreground">{cur.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              aria-label="Previous testimonial"
              onClick={() => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="rounded-full border border-border bg-card p-2 text-primary hover:bg-secondary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-gold" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() => setI((v) => (v + 1) % TESTIMONIALS.length)}
              className="rounded-full border border-border bg-card p-2 text-primary hover:bg-secondary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
