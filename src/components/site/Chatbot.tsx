import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { MessageSquare, X, Send } from "lucide-react";
import { QUICK_REPLIES, findAnswer, FALLBACK_ANSWER, GREETING } from "@/lib/knowledgeBase";
import { whatsappLink } from "@/lib/constants";

type Msg = { role: "bot" | "user"; content: string };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "bot", content: GREETING }]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, open]);

  function reply(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const next: Msg[] = [...msgs, { role: "user", content: trimmed }];
    const found = findAnswer(trimmed);
    next.push({ role: "bot", content: found ? found.answer : FALLBACK_ANSWER });
    setMsgs(next);
    setInput("");
  }

  function quick(id: string) {
    const qa = QUICK_REPLIES.find((q) => q.id === id);
    if (!qa) return;
    setMsgs((m) => [...m, { role: "user", content: qa.label }, { role: "bot", content: qa.answer }]);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open chat"
        className="fixed bottom-5 right-24 z-50 flex h-14 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:-translate-y-0.5 sm:bottom-6 sm:right-28"
      >
        <MessageSquare className="h-5 w-5" /> Ask Wisdom
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="fixed bottom-24 right-4 z-50 flex h-[70vh] max-h-[560px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-elegant sm:right-6"
            role="dialog"
            aria-label="Wisdom chatbot"
          >
            <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gold text-ink font-display text-lg">
                  W
                </div>
                <div>
                  <div className="text-sm font-semibold">Wisdom · School helper</div>
                  <div className="text-[10px] text-primary-foreground/70">Usually replies instantly</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-full p-1 hover:bg-primary-foreground/10">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-secondary/40 p-4">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-soft ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-card text-foreground rounded-bl-sm"
                    }`}
                  >
                    <div className="prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0.5 prose-a:text-gold">
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex flex-wrap gap-2 pt-2">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => quick(q.id)}
                    className="rounded-full border border-gold/40 bg-card px-3 py-1.5 text-xs font-medium text-primary hover:bg-gold/10"
                  >
                    {q.label}
                  </button>
                ))}
                <a
                  href={whatsappLink("Hello, I'd like to chat with the school office.")}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white"
                >
                  WhatsApp office
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                reply(input);
              }}
              className="flex items-center gap-2 border-t border-border bg-card p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question…"
                aria-label="Message"
                className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
              <button
                type="submit"
                aria-label="Send"
                className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
