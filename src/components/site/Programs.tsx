import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { PROGRAMS } from "@/lib/constants";

export function Programs() {
  const [active, setActive] = useState(PROGRAMS[0].id);
  const current = PROGRAMS.find((p) => p.id === active)!;
  return (
    <section id="programs" className="bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <span className="h-px w-8 bg-gold/60" />
            Programs
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            From little learners to <span className="text-gradient-gold">SSC scholars</span>.
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {PROGRAMS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition ${
                active === p.id
                  ? "bg-gold text-ink"
                  : "bg-primary-foreground/5 text-primary-foreground/70 hover:bg-primary-foreground/10"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="mt-10 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
              transition={{ duration: 0.45 }}
              className="mx-auto max-w-4xl rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm sm:p-10"
            >
              <div className="text-xs uppercase tracking-wider text-gold">{current.age}</div>
              <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                {current.label}
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {current.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm sm:text-base">
                    <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gold text-ink">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-primary-foreground/85">{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
