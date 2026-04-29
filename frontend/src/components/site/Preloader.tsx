import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/wisdom-logo.png";

export function Preloader() {
  const [show, setShow] = useState(true);
  const [stage, setStage] = useState(0); // 0: Dot, 1: Logo, 2: Text

  useEffect(() => {
    const stage1 = setTimeout(() => setStage(1), 800);
    const stage2 = setTimeout(() => setStage(2), 1600);
    const stage3 = setTimeout(() => setShow(false), 3000);

    return () => {
      clearTimeout(stage1);
      clearTimeout(stage2);
      clearTimeout(stage3);
    };
  }, []);

  const name = "Wisdom Academy".split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            clipPath: "circle(0% at 50% 50%)",
            opacity: 0,
            transition: { duration: 1, ease: [0.77, 0, 0.175, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        >
          <div className="relative flex flex-col items-center">
            {/* Central Expanding Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-32 w-32 rounded-full bg-gold/10 p-1 backdrop-blur-md sm:h-40 sm:w-40"
            >
              <AnimatePresence mode="wait">
                {stage >= 1 ? (
                  <motion.div
                    key="logo"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="h-full w-full overflow-hidden rounded-full border-2 border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                  >
                    <img 
                      src={logoImg} 
                      alt="Wisdom Academy Logo" 
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="dot"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="h-full w-full rounded-full bg-gold"
                  />
                )}
              </AnimatePresence>
            </motion.div>

            {/* Typography Reveal */}
            <div className="mt-12 overflow-hidden px-4">
              <div className="flex">
                {name.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "100%" }}
                    animate={stage >= 2 ? { y: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: i * 0.04,
                      ease: [0.33, 1, 0.68, 1]
                    }}
                    className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={stage >= 2 ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </div>

            {/* Subtle Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={stage >= 2 ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="mt-4 font-display text-sm tracking-[0.3em] text-gold/60 uppercase"
            >
              ज्ञानं परमं बलम्
            </motion.p>
          </div>

          {/* Liquid Mask Effect */}
          <motion.div
            initial={{ y: "100%" }}
            animate={!show ? { y: "-100%" } : {}}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            className="pointer-events-none absolute inset-0 z-10 bg-gold/5"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
