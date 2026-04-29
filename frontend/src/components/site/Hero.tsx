import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin, Sparkles } from "lucide-react";
import { SiInstagram, SiYoutube, SiFacebook } from "react-icons/si";
import heroImg from "@/assets/hero-school.png";
import { HERO, SCHOOL, whatsappLink } from "@/lib/constants";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);
  const yArt = useTransform(scrollY, [0, 600], [0, -40]);

  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % HERO.cycling.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-8 sm:pt-12 lg:pt-16"
    >
      {/* decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 80% 0%, oklch(0.78 0.14 80 / 0.18), transparent), radial-gradient(50% 40% at 0% 30%, oklch(0.34 0.13 265 / 0.10), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pb-24">
        <motion.div style={{ y }} className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/60 px-3 py-1.5 text-xs font-medium text-primary shadow-soft"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            {HERO.eyebrow}
          </motion.div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            <span className="block">A school where</span>
            <span className="block text-gradient-gold">wisdom is rooted</span>
            <span className="block">in <span className="font-deva">अदब</span> & care.</span>
          </h1>

          <div className="mt-5 h-7 overflow-hidden">
            <motion.div
              key={i}
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -28, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-base font-medium text-primary sm:text-lg"
            >
              {HERO.cycling[i]}
            </motion.div>
          </div>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {HERO.body}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:-translate-y-0.5"
            >
              {HERO.primaryCta}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappLink("Hello, I'd like to know more about Wisdom Academy.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-6 py-3 text-sm font-semibold text-primary shadow-soft transition hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4" /> {HERO.secondaryCta}
            </a>
          </div>

          {/* social proof chips */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-gold" /> {SCHOOL.city}
            </span>
            <a
              href={SCHOOL.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-primary"
              aria-label="Instagram"
            >
              <SiInstagram className="h-4 w-4 text-gold" /> {SCHOOL.followers} followers · {SCHOOL.posts} posts
            </a>
            <a
              href={SCHOOL.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-primary"
              aria-label="Facebook"
            >
              <SiFacebook className="h-4 w-4 text-gold" /> Connect on Facebook
            </a>
            <a
              href={SCHOOL.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-primary"
              aria-label="YouTube"
            >
              <SiYoutube className="h-4 w-4 text-gold" /> Watch on YouTube
            </a>
          </div>
        </motion.div>

        <motion.div style={{ y: yArt }} className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/30 via-primary/10 to-transparent blur-2xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-full w-full overflow-hidden rounded-[2rem] border border-border bg-card shadow-elegant"
            >
              <img
                src={heroImg}
                alt="Wisdom Academy students at the school entrance"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute -bottom-5 -left-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-elegant"
            >
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Since</div>
              <div className="font-display text-2xl font-bold text-primary">{SCHOOL.established}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -right-3 top-6 rounded-2xl border border-gold/40 bg-card px-4 py-3 shadow-elegant"
            >
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">SSC pass rate</div>
              <div className="font-display text-2xl font-bold text-gold">100%</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
