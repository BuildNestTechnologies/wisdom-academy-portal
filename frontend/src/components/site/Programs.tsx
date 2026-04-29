import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { PROGRAMS } from "@/lib/constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Programs() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const totalWidth = container.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(container, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="programs" 
      className="relative h-screen overflow-hidden bg-ink text-white"
    >
      <div className="absolute top-12 left-0 right-0 z-10 px-4 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-8 bg-gold/60" />
            Educational Journey
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            From little learners to <span className="text-gold">SSC scholars</span>.
          </h2>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="flex h-full items-center gap-12 px-[10vw] pt-24"
        style={{ width: "fit-content" }}
      >
        {PROGRAMS.map((p, idx) => (
          <motion.div
            key={p.id}
            className="group relative h-[60vh] w-[80vw] flex-none overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-12 backdrop-blur-md sm:w-[60vw] lg:w-[45vw]"
          >
            {/* Background Parallax Element */}
            <div className="absolute -right-20 -top-20 -z-10 font-display text-[20rem] font-bold text-white/5 transition-transform duration-700 group-hover:-translate-x-10">
              {idx + 1}
            </div>

            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gold">{p.age}</div>
                <h3 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
                  {p.label}
                </h3>
                <ul className="mt-8 space-y-4">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-4 text-base sm:text-lg">
                      <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gold text-ink">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-white/80">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="mt-8 inline-flex items-center gap-3 self-start rounded-full bg-white px-8 py-4 text-sm font-bold text-ink transition-transform hover:scale-105 active:scale-95">
                View Details
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Indicator Bar */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-4">
        {PROGRAMS.map((p) => (
          <div 
            key={p.id}
            className="h-1.5 w-12 rounded-full bg-white/10 overflow-hidden"
          >
            <motion.div 
              className="h-full bg-gold"
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              viewport={{ margin: "0px -50% 0px -50%" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
