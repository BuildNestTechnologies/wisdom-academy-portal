import { motion } from "framer-motion";

export function SectionHeader({
  kicker,
  title,
  align = "center",
}: {
  kicker: string;
  title: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold`}
      >
        <span className="h-px w-8 bg-gold/60" />
        {kicker}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}
