import { useState } from "react";
import { motion } from "framer-motion";
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
    <section id="contact" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="Get in touch" title={<>Visit, call, or message us.</>} />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-5"
          >
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <iframe
                title="Wisdom Academy on Google Maps"
                src={SCHOOL.mapsEmbed}
                loading="lazy"
                className="h-64 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-none text-gold" />
                <span className="text-foreground/90">{SCHOOL.fullAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-none text-gold" />
                <a href={`tel:${SCHOOL.phoneDigits}`} className="font-medium text-primary hover:underline">
                  {SCHOOL.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-none text-gold" />
                <a href={`mailto:${SCHOOL.email}`} className="font-medium text-primary hover:underline">
                  {SCHOOL.email}
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-8 lg:col-span-7"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink">Parent's name</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                  placeholder="Your full name"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-ink">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                  placeholder="+91 …"
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="forClass" className="text-sm font-medium text-ink">Enquiring for</label>
              <select
                id="forClass"
                value={form.forClass}
                onChange={(e) => setForm({ ...form, forClass: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                aria-invalid={!!errors.forClass}
              >
                <option value="">Select a class…</option>
                {CLASSES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.forClass && <p className="mt-1 text-xs text-destructive">{errors.forClass}</p>}
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium text-ink">Message (optional)</label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                placeholder="Anything we should know?"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:-translate-y-0.5 sm:w-auto"
            >
              <Send className="h-4 w-4" /> Send via WhatsApp
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Submitting opens WhatsApp with your enquiry pre-filled. We typically reply within an hour.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
