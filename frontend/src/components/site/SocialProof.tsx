import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiInstagram, SiYoutube, SiFacebook } from "react-icons/si";
import { SCHOOL } from "@/lib/constants";

export function SocialProof() {
  return (
    <section className="py-24 sm:py-32 bg-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Instagram */}
          <motion.a
            href={SCHOOL.instagram}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-[#f9ce34]/5 via-[#ee2a7b]/5 to-[#6228d7]/5 p-10 shadow-soft hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative z-10">
              <SiInstagram className="h-10 w-10 text-[#DD2A7B] transition-transform duration-500 group-hover:scale-125" />
              <div className="mt-6 font-display text-2xl font-bold text-ink">
                {SCHOOL.instagramHandle}
              </div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">on Instagram</div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="font-display text-3xl font-bold text-primary">{SCHOOL.followers}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Followers</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-primary">{SCHOOL.posts}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Posts</div>
                </div>
              </div>
            </div>
            <ArrowUpRight className="absolute right-8 top-8 h-6 w-6 text-muted-foreground transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:text-primary" />
            <div className="absolute inset-0 -z-0 bg-gradient-to-br from-[#f9ce34]/10 via-[#ee2a7b]/10 to-[#6228d7]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.a>

          {/* YouTube */}
          <motion.a
            href={SCHOOL.youtube}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-[#FF0000]/5 to-primary/5 p-10 shadow-soft hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative z-10">
              <SiYoutube className="h-10 w-10 text-[#FF0000] transition-transform duration-500 group-hover:scale-125" />
              <div className="mt-6 font-display text-2xl font-bold text-ink">Watch our Stories</div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">School events & highlights</div>
              <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-soft transition-transform group-hover:scale-105">
                Subscribe
              </div>
            </div>
            <ArrowUpRight className="absolute right-8 top-8 h-6 w-6 text-muted-foreground transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:text-primary" />
            <div className="absolute inset-0 -z-0 bg-gradient-to-br from-[#FF0000]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.a>

          {/* Facebook */}
          <motion.a
            href={SCHOOL.facebook}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-[#1877F2]/5 to-primary/5 p-10 shadow-soft hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative z-10">
              <SiFacebook className="h-10 w-10 text-[#1877F2] transition-transform duration-500 group-hover:scale-125" />
              <div className="mt-6 font-display text-2xl font-bold text-ink">Facebook Page</div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">Stay updated with news</div>
              <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-soft transition-transform group-hover:scale-105">
                Join Community
              </div>
            </div>
            <ArrowUpRight className="absolute right-8 top-8 h-6 w-6 text-muted-foreground transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:text-primary" />
            <div className="absolute inset-0 -z-0 bg-gradient-to-br from-[#1877F2]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
