import { motion, AnimatePresence } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";
import { useState } from "react";
import { Heart } from "lucide-react";

function FeatureCard({ f, i }: any) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[420px] w-full [perspective:1000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        initial={{ opacity: 0, rotateY: 90, x: -50 }}
        whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          delay: i * 0.1, 
          type: "spring", 
          stiffness: 100, 
          damping: 20 
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full transition-all duration-500"
      >
        {/* Front Side */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <article className="h-full overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-soft">
            <div className="relative aspect-[5/4] overflow-hidden">
              <img
                src={f.image}
                alt={f.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-gold shadow-soft"
              >
                <Heart className="h-5 w-5 fill-current" />
              </motion.div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold">
                <span className="font-display text-lg">0{i + 1}</span>
                <span className="h-px flex-1 bg-gold/30" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                {f.desc}
              </p>
            </div>
          </article>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 h-full w-full rounded-[2.5rem] bg-ink p-10 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-2xl">
          <div className="flex h-full flex-col justify-between">
            <div>
              <div className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Deep Dive</div>
              <h3 className="font-display text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-white/80 text-base leading-relaxed">
                At Wisdom Academy, we believe that {f.title.toLowerCase()} is more than just a feature — it's part of our DNA. We ensure that every student benefits from this through curated experiences and dedicated faculty support.
              </p>
            </div>
            <button className="rounded-full border border-gold/40 px-6 py-2.5 text-xs font-bold text-gold uppercase tracking-widest hover:bg-gold hover:text-ink transition-colors">
              Learn More
            </button>
          </div>
          
          {/* Decorative Gloss */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-secondary/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Why Wisdom Academy"
          title="Nurturing Brilliance & Character"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
