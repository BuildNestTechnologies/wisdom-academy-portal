import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Item = { src: string; alt: string };

export default function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: Item[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onIndex]);

  const cur = items[index];
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/85 p-4 backdrop-blur"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={cur.alt}
      >
        <button aria-label="Close" className="absolute right-4 top-4 rounded-full bg-card/10 p-2 text-primary-foreground hover:bg-card/20" onClick={onClose}>
          <X className="h-5 w-5" />
        </button>
        <button aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-card/10 p-2 text-primary-foreground hover:bg-card/20" onClick={(e) => { e.stopPropagation(); onIndex((index - 1 + items.length) % items.length); }}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-card/10 p-2 text-primary-foreground hover:bg-card/20" onClick={(e) => { e.stopPropagation(); onIndex((index + 1) % items.length); }}>
          <ChevronRight className="h-6 w-6" />
        </button>
        <motion.img
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          src={cur.src}
          alt={cur.alt}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-elegant"
        />
      </motion.div>
    </AnimatePresence>
  );
}
