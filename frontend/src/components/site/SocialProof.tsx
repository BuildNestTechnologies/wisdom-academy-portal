import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiInstagram, SiYoutube, SiFacebook } from "react-icons/si";
import { SCHOOL } from "@/lib/constants";

export function SocialProof() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <motion.a
            href={SCHOOL.instagram}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#F58529]/10 via-[#DD2A7B]/10 to-[#8134AF]/10 p-8 shadow-soft hover:shadow-elegant"
          >
            <SiInstagram className="h-8 w-8 text-[#DD2A7B]" />
            <div className="mt-5 font-display text-2xl font-semibold text-ink">
              {SCHOOL.instagramHandle}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">on Instagram</div>
            <div className="mt-6 flex items-center gap-6">
              <div>
                <div className="font-display text-2xl font-bold text-primary">{SCHOOL.followers}</div>
                <div className="text-xs text-muted-foreground">followers</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-primary">{SCHOOL.posts}</div>
                <div className="text-xs text-muted-foreground">posts</div>
              </div>
            </div>
            <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
          </motion.a>

          <motion.a
            href={SCHOOL.youtube}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#FF0000]/10 to-primary/10 p-8 shadow-soft hover:shadow-elegant"
          >
            <SiYoutube className="h-8 w-8 text-[#FF0000]" />
            <div className="mt-5 font-display text-2xl font-semibold text-ink">Watch on YouTube</div>
            <div className="mt-1 text-sm text-muted-foreground">School events, prize days & more</div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-primary shadow-soft">
              Subscribe to our channel
            </div>
            <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
          </motion.a>

          <motion.a
            href={SCHOOL.facebook}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#1877F2]/10 to-[#1877F2]/5 p-8 shadow-soft hover:shadow-elegant"
          >
            <SiFacebook className="h-8 w-8 text-[#1877F2]" />
            <div className="mt-5 font-display text-2xl font-semibold text-ink">Facebook Page</div>
            <div className="mt-1 text-sm text-muted-foreground">Stay updated with school news</div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-primary shadow-soft">
              Follow our community
            </div>
            <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
