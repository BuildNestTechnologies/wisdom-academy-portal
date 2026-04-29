import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin, Sparkles, ChevronDown } from "lucide-react";
import { SiInstagram, SiYoutube, SiFacebook } from "react-icons/si";
import heroImg from "@/assets/hero-school.png";
import { HERO, SCHOOL, whatsappLink } from "@/lib/constants";
import { useMouseParallax } from "@/lib/motion";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const { rotateX, rotateY } = useMouseParallax(15);

  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % HERO.cycling.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative isolate overflow-hidden pt-8 sm:pt-12 lg:pt-16">
      {/* 3D Floating Geometry */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {[...Array(6)].map((_, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [0, -100, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 10 + idx * 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: idx * 1.5
            }}
            className="absolute text-gold/20"
            style={{
              left: `${10 + idx * 15}%`,
              top: `${20 + (idx % 3) * 20}%`,
              fontSize: `${20 + idx * 10}px`
            }}
          >
            {idx % 2 === 0 ? "★" : "◆"}
          </motion.div>
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pb-24">
        <motion.div style={{ y, opacity }} className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
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

          <div className="mt-5 h-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0, filter: "blur(8px)", scale: 0.9 }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ y: -20, opacity: 0, filter: "blur(8px)", scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="text-lg font-medium text-primary sm:text-xl"
              >
                {HERO.cycling[i]}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {HERO.body}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                {HERO.primaryCta}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
            </a>
            <a
              href={whatsappLink("Hello, I'd like to know more about Wisdom Academy.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-8 py-3.5 text-sm font-semibold text-primary shadow-soft transition hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4" /> {HERO.secondaryCta}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-gold" /> {SCHOOL.city}
            </span>
            <a href={SCHOOL.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition hover:text-primary">
              <SiInstagram className="h-4 w-4 text-gold" /> {SCHOOL.followers} followers
            </a>
            <a href={SCHOOL.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition hover:text-primary">
              <SiFacebook className="h-4 w-4 text-gold" /> Facebook
            </a>
            <a href={SCHOOL.youtube} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition hover:text-primary">
              <SiYoutube className="h-4 w-4 text-gold" /> YouTube
            </a>
          </div>
        </motion.div>

        <motion.div 
          style={{ scale, rotateX, rotateY, perspective: 1000 }}
          className="relative lg:col-span-6"
        >
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
            <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold/40 via-primary/10 to-transparent blur-3xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-2xl"
            >
              <img
                src={heroImg}
                alt="Wisdom Academy Campus"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-6 right-6 rounded-2xl border border-gold/40 bg-card/80 backdrop-blur-md px-4 py-3 shadow-elegant"
              >
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">SSC pass rate</div>
                <div className="font-display text-2xl font-bold text-gold">100%</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-6 rounded-2xl border border-border bg-card/80 backdrop-blur-md px-4 py-3 shadow-elegant"
              >
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Established</div>
                <div className="font-display text-2xl font-bold text-primary">{SCHOOL.established}</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] uppercase tracking-widest text-gold/60 font-semibold">Scroll</span>
        <div className="relative h-10 w-6 flex justify-center">
          {[0, 1, 2].map((idx) => (
            <motion.div
              key={idx}
              animate={{ 
                y: [0, 15, 20],
                opacity: [0, 1, 0],
                scale: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: idx * 0.4,
                ease: "easeInOut"
              }}
              className="absolute top-0 text-gold"
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
