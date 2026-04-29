import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { VISION_MISSION } from "@/lib/constants";
import { useMouseParallax } from "@/lib/motion";
import { useRef } from "react";

function TiltCard({ icon: Icon, title, body, delay }: any) {
  const { rotateX, rotateY } = useMouseParallax(10);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-10 shadow-soft hover:shadow-2xl transition-all duration-500"
    >
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/5 transition-transform duration-700 group-hover:scale-150" />
      <div className="relative z-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mt-6 font-display text-3xl font-bold text-ink">
          {title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {body}
        </p>
      </div>
      
      {/* Dynamic Glow */}
      <motion.div 
        className="absolute inset-0 -z-10 bg-gradient-to-br from-gold/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
        style={{ scale: 1.2 }}
      />
    </motion.article>
  );
}

export function VisionMission() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-secondary/30 py-24 sm:py-32">
      {/* Parallax Pattern */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10 opacity-[0.03] grayscale pointer-events-none"
      >
        <div className="h-full w-full" style={{ backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </motion.div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:gap-12 lg:px-8">
        <TiltCard icon={Eye} {...VISION_MISSION.vision} delay={0.1} />
        <TiltCard icon={Target} {...VISION_MISSION.mission} delay={0.2} />
      </div>
    </section>
  );
}
