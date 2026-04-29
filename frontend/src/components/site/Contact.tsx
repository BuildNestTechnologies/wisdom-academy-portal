import { useState, useRef } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { z } from "zod";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { SCHOOL, whatsappLink } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";

const schema = z.object({
  name: z.string().trim().min(2, "Please tell us your name").max(80),
  phone: z.string().trim().regex(/^[+\d\s-]{7,16}$/, "Enter a valid phone number"),
  forClass: z.string().trim().min(1, "Choose a class").max(40),
  message: z.string().trim().max(600).optional().or(z.literal("")),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const CLASSES = [
  "Pre-Primary (Nursery–Sr.KG)",
  "Primary (I–V)",
  "Secondary (VI–IX)",
  "SSC (Std X)",
  "Just enquiring",
];

function MagneticButton({ children, className, ...props }: any) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.4);
    y.set((clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

function FloatingInput({ id, label, value, onChange, error, type = "text", ...props }: any) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative group">
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: (isFocused || hasValue) ? -24 : 0,
          scale: (isFocused || hasValue) ? 0.85 : 1,
          color: isFocused ? "#D4AF37" : "#64748b",
        }}
        className="absolute left-4 top-3 z-10 pointer-events-none font-medium transition-colors"
      >
        {label}
      </motion.label>
      <motion.input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        animate={error ? { x: [-2, 2, -2, 2, 0] } : {}}
        transition={{ duration: 0.4 }}
        className={`w-full rounded-2xl border-2 bg-white px-4 py-3 text-sm outline-none transition-all ${
          error ? "border-destructive/50" : "border-border focus:border-gold"
        }`}
        {...props}
      />
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 px-2 text-[10px] font-bold uppercase tracking-widest text-destructive"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", forClass: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      const errs: Errors = {};
      for (const i of res.error.issues) errs[i.path[0] as keyof Errors] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = `Hello Wisdom Academy,\n\nI'd like to enquire about admissions.\n\nName: ${form.name}\nPhone: ${form.phone}\nFor: ${form.forClass}${form.message ? `\nMessage: ${form.message}` : ""}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="Start the Conversation" title="We're Here to Guide You" />

        <div className="mt-20 grid gap-12 lg:grid-cols-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8 lg:col-span-5"
          >
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-white bg-white shadow-elegant transform -rotate-1">
              <iframe
                title="Wisdom Academy on Google Maps"
                src={SCHOOL.mapsEmbed}
                loading="lazy"
                className="h-[300px] w-full border-0 transition-all duration-700"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid gap-6">
              {[
                { icon: MapPin, label: "Visit Us", value: SCHOOL.fullAddress },
                { icon: Phone, label: "Call Us", value: SCHOOL.phone, href: `tel:${SCHOOL.phoneDigits}` },
                { icon: Mail, label: "Email Us", value: SCHOOL.email, href: `mailto:${SCHOOL.email}` },
              ].map((item, i) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-3xl bg-white/50 backdrop-blur-sm border border-white/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-base font-bold text-ink hover:text-gold transition-colors">{item.value}</a>
                    ) : (
                      <div className="text-base font-bold text-ink">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] border border-white bg-white/80 p-8 sm:p-12 shadow-2xl backdrop-blur-md lg:col-span-7"
            noValidate
          >
            <div className="grid gap-8 sm:grid-cols-2">
              <FloatingInput
                id="name"
                label="Parent Name"
                value={form.name}
                onChange={(e: any) => setForm({ ...form, name: e.target.value })}
                error={errors.name}
              />
              <FloatingInput
                id="phone"
                label="Phone Number"
                type="tel"
                value={form.phone}
                onChange={(e: any) => setForm({ ...form, phone: e.target.value })}
                error={errors.phone}
              />
            </div>
            
            <div className="mt-8">
              <label htmlFor="forClass" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-4 mb-2 block">Admission For</label>
              <select
                id="forClass"
                value={form.forClass}
                onChange={(e) => setForm({ ...form, forClass: e.target.value })}
                className={`w-full rounded-2xl border-2 bg-white px-4 py-3 text-sm outline-none transition-all ${
                  errors.forClass ? "border-destructive/50" : "border-border focus:border-gold"
                }`}
              >
                <option value="">Select a class…</option>
                {CLASSES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="mt-8">
              <FloatingInput
                id="message"
                label="Your Message (Optional)"
                value={form.message}
                onChange={(e: any) => setForm({ ...form, message: e.target.value })}
                error={errors.message}
                type="textarea"
              />
            </div>

            <MagneticButton
              type="submit"
              className="mt-10 group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-ink px-10 py-5 text-base font-bold text-white shadow-elegant transition-transform active:scale-95 sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-3">
                Send via WhatsApp <Send className="h-5 w-5" />
              </span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-gold to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
