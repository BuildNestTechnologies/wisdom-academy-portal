import { useEffect } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-2xl"
      onClick={onClose}
    >
      {/* Container with layoutId */}
      <motion.div
        layoutId={`gallery-item-${index}`}
        className="relative max-h-[90vh] max-w-[95vw] overflow-hidden rounded-[2.5rem] bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.img
          layoutId={`gallery-img-${index}`}
          src={cur.src}
          alt={cur.alt}
          className="h-auto max-h-[80vh] w-full object-contain"
        />
        
        <div className="p-6 bg-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold">Wisdom Gallery</p>
              <h3 className="mt-1 font-display text-xl font-bold text-ink">{cur.alt}</h3>
            </div>
            <div className="flex gap-2">
              <button 
                className="rounded-full bg-secondary p-3 text-ink transition-transform hover:scale-110 active:scale-95"
                onClick={() => onIndex((index - 1 + items.length) % items.length)}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                className="rounded-full bg-secondary p-3 text-ink transition-transform hover:scale-110 active:scale-95"
                onClick={() => onIndex((index + 1) % items.length)}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <button 
          className="absolute right-6 top-6 rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/40"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
      </motion.div>
    </motion.div>
  );
}
