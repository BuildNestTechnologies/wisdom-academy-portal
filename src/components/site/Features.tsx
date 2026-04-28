import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Why Wisdom Academy"
          title={<>Six things parents tell us they love.</>}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 110, damping: 16, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow hover:shadow-elegant"
            >
              <div className="aspect-[5/4] overflow-hidden bg-secondary">
                <img
                  src={f.image}
                  alt={f.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                  <span className="font-display text-base">0{i + 1}</span>
                  <span className="h-px flex-1 bg-gold/40" />
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-primary">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
