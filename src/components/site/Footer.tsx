import { Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/icons/Logo";
import { NAV_LINKS, SCHOOL, whatsappLink } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Logo className="h-12 w-12" />
              <div>
                <div className="font-display text-xl font-semibold">{SCHOOL.shortName}</div>
                <div className="font-deva text-xs text-primary-foreground/60">
                  {SCHOOL.deva} · English School
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              Bilingual English-medium school in Bhiwandi. Quality academics, smart classrooms, and
              Islamic moral values — since 2011.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(
                  whatsappLink("Hi, please add me to your school updates list."),
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="mt-6 flex max-w-sm overflow-hidden rounded-full border border-primary-foreground/15 bg-primary-foreground/5"
            >
              <input
                type="email"
                aria-label="Your email"
                placeholder="Get school updates"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gold px-5 text-sm font-semibold text-ink hover:brightness-105"
              >
                Notify me
              </button>
            </form>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-gold">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-primary-foreground/80 hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-gold">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-gold" />
                <span>{SCHOOL.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-none text-gold" />
                <a href={`tel:${SCHOOL.phoneDigits}`}>{SCHOOL.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-none text-gold" />
                <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a href={SCHOOL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-primary-foreground/15 p-2.5 hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={SCHOOL.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="rounded-full border border-primary-foreground/15 p-2.5 hover:bg-primary-foreground/10">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.</div>
          <div>Ansari Muhammad Tahir Sardar Education & Welfare Society</div>
        </div>
      </div>
    </footer>
  );
}
