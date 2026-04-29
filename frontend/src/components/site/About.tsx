import { motion, useScroll, useTransform, useInView, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import aboutImg from "@/assets/about-building.png";
import { ABOUT, STATS } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const springValue = useSpring(0, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isInView) springValue.set(value);
  }, [isInView, value, springValue]);

  return (
    <div ref={ref} className="flex overflow-hidden">
      <motion.span className="tabular-nums">
        {useTransform(springValue, (latest) => Math.floor(latest))}
      </motion.span>
      <span>{suffix}</span>
    </div>
  );
}

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    ["circle(0% at 50% 50%)", "circle(100% at 50% 50%)"]
  );

  const [flashing, setFlashing] = useState(false);
  const handleStoryClick = () => {
    setFlashing(true);
    setTimeout(() => setFlashing(false), 300);
  };

  return (
    <section id="about" ref={containerRef} className="relative py-20 sm:py-32 overflow-hidden">
      <AnimatePresence>
        {flashing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <SectionHeader kicker={ABOUT.kicker} title={ABOUT.title} align="left" />
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {ABOUT.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * i, duration: 0.8 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s, idx) => (
                <motion.div 
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-elegant transition-shadow"
                >
                  <dt className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60">
                    {s.label}
                  </dt>
                  <dd className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </dd>
                </motion.div>
              ))}
            </dl>

            <motion.button
              onClick={handleStoryClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 inline-flex items-center gap-2 text-sm font-bold text-gold uppercase tracking-widest border-b-2 border-gold pb-1"
            >
              Read Our Full Story
            </motion.button>
          </div>

          <motion.div style={{ clipPath }} className="relative lg:col-span-5">
            <div className="absolute -inset-10 -z-10 rounded-full bg-primary/5 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-elegant">
              <img
                src={aboutImg}
                alt="Wisdom Academy school building"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              className="absolute -bottom-6 -right-6 rounded-3xl border border-gold/40 bg-card p-6 shadow-elegant"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Since</div>
              <div className="font-display text-3xl font-bold text-primary">2011</div>
              <div className="text-[10px] text-muted-foreground">Bhiwandi, MS</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
