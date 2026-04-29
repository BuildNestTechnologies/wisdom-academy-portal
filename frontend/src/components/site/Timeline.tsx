import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TIMELINE } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 40%"],
  });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section id="timeline" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="Our journey" title={<>Sixteen years, one mission.</>} />

        <div ref={ref} className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            style={{ height: lineH }}
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-gold via-primary to-gold sm:left-1/2 sm:-translate-x-1/2"
          />

          <ul className="space-y-10">
            {TIMELINE.map((t, i) => {
              const left = i % 2 === 0;
              return (
                <motion.li
                  key={t.year}
                  initial={{ opacity: 0, x: left ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55 }}
                  className={`relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 ${
                    left ? "" : "sm:[&>*:first-child]:order-2"
                  }`}
                >
                  <span className="absolute left-2.5 top-2 h-3 w-3 rounded-full bg-gold ring-4 ring-background sm:left-1/2 sm:-translate-x-1/2" />
                  <div className={left ? "sm:text-right" : ""}>
                    <div className="font-display text-3xl font-bold text-primary">{t.year}</div>
                    <h3 className="mt-1 font-display text-lg font-semibold text-ink">{t.title}</h3>
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {t.desc}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
