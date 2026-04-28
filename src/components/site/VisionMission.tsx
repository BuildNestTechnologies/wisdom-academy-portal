import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { VISION_MISSION } from "@/lib/constants";

export function VisionMission() {
  const cards = [
    { icon: Eye, ...VISION_MISSION.vision },
    { icon: Target, ...VISION_MISSION.mission },
  ];
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:gap-10 lg:px-8">
        {cards.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-shadow hover:shadow-elegant sm:p-10"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 transition group-hover:scale-125" />
            <div className="absolute right-4 top-4 h-10 w-10 rounded-full border border-gold/40" />
            <c.icon className="relative h-10 w-10 text-gold" />
            <h3 className="relative mt-5 font-display text-2xl font-semibold text-primary sm:text-3xl">
              {c.title}
            </h3>
            <p className="relative mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {c.body}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
