import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const dragX = useMotionValue(0);
  const DRAG_THRESHOLD = 50;

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_THRESHOLD) {
      setIndex((v) => (v + 1) % TESTIMONIALS.length);
    } else if (x >= DRAG_THRESHOLD) {
      setIndex((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }
  };

  const cur = TESTIMONIALS[index];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-white">
      {/* Decorative Background Bubbles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -z-10 h-12 w-12 rounded-full bg-gold/5 blur-sm"
          style={{
            top: `${10 + i * 15}%`,
            left: `${i % 2 === 0 ? 5 : 90}%`,
          }}
        />
      ))}

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="Community Trust" title="Voices of Our Wisdom Family" />

        <div className="relative mt-16 flex items-center justify-center">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x: dragX }}
            onDragEnd={onDragEnd}
            className="relative z-10 w-full max-w-3xl cursor-grab active:cursor-grabbing"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative rounded-[3rem] border border-border bg-white p-10 sm:p-16 shadow-elegant"
              >
                <div className="absolute -left-4 -top-4 rounded-3xl bg-gold p-4 text-white shadow-soft">
                  <Quote className="h-8 w-8" />
                </div>
                
                <blockquote className="font-display text-2xl leading-relaxed text-ink sm:text-3xl italic">
                  "{cur.quote}"
                </blockquote>
                
                <div className="mt-12 flex items-center gap-6">
                  <motion.div 
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 0 }}
                    className="relative"
                  >
                    <img
                      src={cur.avatar}
                      alt={cur.name}
                      className="h-20 w-20 rounded-[1.5rem] object-cover ring-4 ring-gold/20"
                    />
                    <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold">
                      WA
                    </div>
                  </motion.div>
                  <div>
                    <div className="font-display text-xl font-bold text-primary">{cur.name}</div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">{cur.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation Controls */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-4 lg:-px-12">
            <button
              onClick={() => setIndex((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="pointer-events-auto h-12 w-12 rounded-full bg-white/80 border border-border flex items-center justify-center text-primary shadow-soft backdrop-blur-sm transition hover:bg-white hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setIndex((v) => (v + 1) % TESTIMONIALS.length)}
              className="pointer-events-auto h-12 w-12 rounded-full bg-white/80 border border-border flex items-center justify-center text-primary shadow-soft backdrop-blur-sm transition hover:bg-white hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="mt-12 flex justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-gold" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
