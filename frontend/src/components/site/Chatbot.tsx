import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { QUICK_REPLIES, findAnswer, FALLBACK_ANSWER, GREETING } from "@/lib/knowledgeBase";
import { whatsappLink } from "@/lib/constants";

type Msg = { role: "bot" | "user"; content: string };

function ChatTrigger({ onClick }: { onClick: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.4);
    y.set((clientY - centerY) * 0.4);
  };

  return (
    <motion.button
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: springX, y: springY }}
      className="fixed bottom-6 right-28 z-50 flex h-14 items-center gap-3 rounded-full bg-ink px-6 font-display text-sm font-bold text-white shadow-2xl transition-transform active:scale-95"
    >
      <MessageSquare className="h-5 w-5 text-gold" />
      <span>Ask Wisdom</span>
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-gold ring-4 ring-white"
      />
    </motion.button>
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "bot", content: GREETING }]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [msgs, open]);

  function reply(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const next: Msg[] = [...msgs, { role: "user", content: trimmed }];
    setMsgs(next);
    setInput("");

    // Bot response delay
    setTimeout(() => {
      const found = findAnswer(trimmed);
      setMsgs(prev => [...prev, { role: "bot", content: found ? found.answer : FALLBACK_ANSWER }]);
    }, 600);
  }

  function quick(id: string) {
    const qa = QUICK_REPLIES.find((q) => q.id === id);
    if (!qa) return;
    setMsgs((m) => [...m, { role: "user", content: qa.label }]);
    setTimeout(() => {
      setMsgs((m) => [...m, { role: "bot", content: qa.answer }]);
    }, 600);
  }

  return (
    <>
      <ChatTrigger onClick={() => setOpen(true)} />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100, rotate: 5 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="fixed bottom-24 right-4 z-[100] flex h-[600px] w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/80 shadow-2xl backdrop-blur-2xl sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-ink p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-2xl bg-gold flex items-center justify-center">
                  <Bot className="h-7 w-7 text-ink" />
                  <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-ink" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">Wisdom AI</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Online Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setOpen(false)}
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-6 scrollbar-hide">
              {msgs.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-[1.5rem] p-4 text-sm leading-relaxed shadow-soft ${
                      m.role === "user"
                        ? "bg-primary text-white rounded-tr-sm"
                        : "bg-white text-ink rounded-tl-sm border border-border"
                    }`}
                  >
                    <div className="prose prose-sm max-w-none prose-p:my-0 prose-a:text-gold">
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-2 mb-4">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => quick(q.id)}
                    className="rounded-full border border-gold/40 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-ink hover:bg-gold hover:text-white transition-all"
                  >
                    {q.label}
                  </button>
                ))}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  reply(input);
                }}
                className="relative"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about admissions..."
                  className="w-full rounded-2xl border-2 border-border bg-white px-5 py-4 text-sm outline-none transition-all focus:border-gold"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 h-10 w-10 rounded-xl bg-ink text-gold flex items-center justify-center transition-transform active:scale-90"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
