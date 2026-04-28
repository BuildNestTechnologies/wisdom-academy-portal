import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";
import { GALLERY } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";

const Lightbox = lazy(() => import("./Lightbox"));

const spanClasses: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  normal: "",
};

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="Life at school" title={<>Moments that make us, us.</>} />

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {GALLERY.map((g, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:shadow-elegant ${spanClasses[g.span] ?? ""}`}
              aria-label={`Open image: ${g.alt}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink/80 via-ink/30 to-transparent p-3 text-left text-xs font-medium text-primary-foreground transition group-hover:translate-y-0">
                {g.alt}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {open !== null && (
        <Suspense fallback={null}>
          <Lightbox items={GALLERY} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
        </Suspense>
      )}
    </section>
  );
}
