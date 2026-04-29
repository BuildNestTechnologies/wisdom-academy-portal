import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { TIMELINE } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";

function TimelineItem({ t, i, left }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, x: left ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: i * 0.1 }}
      className={`relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-16 ${
        left ? "" : "sm:[&>*:first-child]:order-2"
      }`}
    >
      {/* Pulse Point */}
      <motion.span 
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute left-2.5 top-3 h-4 w-4 rounded-full bg-gold ring-8 ring-gold/10 sm:left-1/2 sm:-translate-x-1/2" 
      />
      
      <div 
        className={`cursor-pointer group ${left ? "sm:text-right" : ""}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <motion.div 
          layout
          className="font-display text-4xl font-bold text-primary sm:text-5xl group-hover:text-gold transition-colors"
        >
          {t.year}
        </motion.div>
        <motion.h3 layout className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">
          {t.title}
        </motion.h3>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base border-t border-gold/20 pt-4">
                This milestone represents a pivotal moment in Wisdom Academy's history, reflecting our commitment to academic excellence and community growth.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="hidden sm:block">
        <div className="rounded-3xl border border-border bg-white p-6 shadow-soft transition-all hover:shadow-elegant">
          <p className="text-base leading-relaxed text-muted-foreground italic">
            "{t.desc}"
          </p>
        </div>
      </div>
    </motion.li>
  );
}

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="timeline" className="relative py-24 sm:py-32 overflow-hidden bg-secondary/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="The Legacy" title="Sixteen Years of Igniting Minds" />

        <div ref={ref} className="relative mt-20">
          {/* SVG Progress Line */}
          <div className="absolute left-[17.5px] top-0 h-full w-1 sm:left-1/2 sm:-translate-x-1/2">
            <svg width="4" height="100%" className="h-full w-full">
              <line 
                x1="2" y1="0" x2="2" y2="100%" 
                stroke="#E2E8F0" strokeWidth="2" strokeDasharray="10 10" 
              />
              <motion.line 
                x1="2" y1="0" x2="2" y2="100%" 
                stroke="#D4AF37" strokeWidth="4"
                style={{ pathLength }}
              />
            </svg>
          </div>

          <ul className="space-y-24">
            {TIMELINE.map((t, i) => (
              <TimelineItem key={t.year} t={t} i={i} left={i % 2 === 0} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
