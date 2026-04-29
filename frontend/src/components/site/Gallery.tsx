import { lazy, Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";

const Lightbox = lazy(() => import("./Lightbox"));

const spanClasses: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  normal: "",
};

export function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="School Life" title="Capturing the Joy of Learning" />

        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[250px] sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY.map((g, i) => (
            <motion.div
              key={i}
              layoutId={`gallery-item-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedId(i)}
              className={`group relative cursor-pointer overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft hover:shadow-elegant ${spanClasses[g.span] ?? ""}`}
            >
              <motion.img
                layoutId={`gallery-img-${i}`}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-6 left-6 text-white opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-xs font-bold uppercase tracking-widest">{g.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId !== null && (
          <Suspense fallback={null}>
            <Lightbox 
              items={GALLERY} 
              index={selectedId} 
              onClose={() => setSelectedId(null)} 
              onIndex={setSelectedId} 
            />
          </Suspense>
        )}
      </AnimatePresence>
    </section>
  );
}
