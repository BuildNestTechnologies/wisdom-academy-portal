## Wisdom Academy English School — Premium Site

A single-page, fully animated, responsive website that feels like a hand-crafted custom WordPress build, not a generic AI template. Royal Blue + Gold on a cream background, with custom clipart-style SVG illustrations throughout.

### Design Foundation

- **Palette**: Royal Blue (`#1E3A8A`), Gold (`#D4A437`), Cream (`#FBF7EE`), Deep Ink (`#0F1F3D`), soft shadows.
- **Type**: Playfair Display (headings), Inter (body), Noto Sans Devanagari (Hindi/Urdu accents). `font-display: swap`.
- **Motion**: Framer Motion for entrances/spring/stagger; subtle GSAP-style parallax via Framer's `useScroll`. `whileInView` with `once: true`. Each section uses a distinct entrance signature (slide, scale, blur-rise, draw-on, etc.) to avoid sameness.
- **No flat AI look**: layered cream surfaces, soft gold rules, varying left/right/centered compositions, decorative SVG flourishes (lamp glow, book pages, geometric Islamic-pattern dividers).

### Imagery — Custom Clipart

All images are illustrated SVG/PNG clipart in a warm, friendly, Indian-context style (children in uniforms, teachers, classrooms, books, diya lamp, school building). Generated via the AI image gateway (Nano Banana) at build time and committed to `src/assets/`. Consistent palette and line-weight across the set so they read as one collection. Decorative SVG motifs (book + lamp, petals from logo) handcoded for crispness.

### Sections (in order)

1. **Preloader** — Logo draws on (SVG stroke animation), then fades.
2. **Top announcement bar** — "Admissions open for 2026–27" with subtle marquee.
3. **Sticky glassmorphism header** — Logo, nav (About, Programs, Gallery, Achievements, Contact), gold "Enquire" CTA. Solid-bg fallback for older browsers.
4. **Hero** — Cycling tagline ("Guidance for the world & hereafter" / "Bilingual English-medium since 2011" / "Where knowledge meets character"), parallax clipart of children + school building, glowing diya, dual CTAs (Enquire / WhatsApp). `fetchpriority="high"` on hero art.
5. **About** — School story, animated counter stats (16+ years, 142+ posts of activity, 236+ followers, hundreds of students). Left-heavy layout.
6. **Vision & Mission** — Two floating cards with hover lift, gold corner ornaments.
7. **Six feature cards** — Experienced teachers, smart classrooms, activity-based learning, safe campus + CCTV, computer & sports, Islamic + moral values. Spring entrance, staggered.
8. **Programs tabs** — Pre-Primary / Primary / Secondary / SSC Prep, smooth tab transitions.
9. **Gallery** — Masonry grid of clipart scenes (sports, cultural, classroom, library, art, prize day) with lazy-loaded lightbox (dynamic import).
10. **Achievement timeline** — 2011 founding → milestones → 2026 SSC batch. Scroll-driven line draw.
11. **Social proof** — Instagram (@wisdomacademy2011, 236 followers, 142 posts) and YouTube cards with live-style framing. Centered layout.
12. **Testimonials** — Auto-playing carousel with illustrated avatars (no real photos).
13. **Contact** — Address (632, Tahir Sardar Compound, Gulzar Nagar, Naigaon, Bhiwandi-421 302), embedded Google Map, phone (+91 87933 77326), email. Validated form (name/phone/class/message) that opens WhatsApp with a prefilled message to +91 87933 77326 — no backend.
14. **Footer** — Quick links, contact, socials, newsletter input (visual only, hand-off to WhatsApp), credits.
15. **Floating WhatsApp button** — Breathing pulse animation, bottom-right.
16. **WISDOM Chatbot** — Bottom-right bubble; opens a scripted FAQ chat with quick-reply chips (Admissions, Fees, Timings, Location, Facilities, Contact). Matches keywords against `lib/knowledgeBase.ts` and falls back to "Chat with us on WhatsApp". Lazy-loaded.

### The 5-Second Test

Above the fold communicates: 14+ year history badge, "Bilingual English-medium School", "Bhiwandi, Maharashtra" location chip, Instagram/YouTube icons with follower counts, and a prominent "Enquire Now" CTA.

### Content & Assets Architecture

- `src/lib/constants.ts` — every text string (hero, about, features, programs, testimonials, footer, contact details). Each export commented with its purpose for easy replacement.
- `src/lib/knowledgeBase.ts` — chatbot Q&A pairs with keyword tags.
- `src/assets/` — generated clipart (hero, feature icons, gallery scenes, avatars, decorative motifs). Logo as inline SVG component.
- `ASSETS.md` at project root — instructions for swapping clipart with real school photos and replacing placeholder content.

### Routes

Single landing page at `/` (`src/routes/index.tsx`). Header links use hash anchors for in-page scroll only (this is the allowed exception per the route guidance, since it's truly one page). Root route gets proper `<title>`, description, `og:title`, `og:description`, `og:image` (hero clipart). Existing `__root.tsx` 404 stays.

### Performance & Accessibility

- All images `loading="lazy"` except hero (`fetchpriority="high"`).
- Lightbox, chatbot, testimonial carousel: `React.lazy` + `Suspense`.
- Semantic landmarks: `<header> <nav> <main> <section> <footer>`. Skip-to-main link visible on focus. All icon buttons have `aria-label`. Form inputs have associated labels and inline error messages. WCAG AA contrast verified for blue-on-cream and gold-on-blue.
- Responsive at 320 / 768 / 1024 / 1440+ with max-width container.
- `backdrop-blur` fallback: solid cream/95 when unsupported.

### Technical Notes

- Tailwind v4 theme tokens in `src/styles.css`: add `--primary` (royal blue), `--accent` (gold), `--background` (cream), Playfair/Inter/Noto font families, custom shadows, and keyframes for breathing pulse, marquee, and stroke-draw.
- `framer-motion` added via `bun add`.
- Clipart generation: a one-off script under `scripts/generate-art.ts` calls the AI image gateway with consistent style prompts ("warm Indian school clipart, royal blue and gold palette, soft shapes, child-friendly, transparent background") and writes PNGs to `src/assets/`. Script is run once during build of this plan; outputs committed.
- Logo SVG handcoded (open book + diya + petals) so it animates crisply.
- WhatsApp link: `https://wa.me/918793377326?text=<encoded form fields>`.
- No database, no auth, no server functions required.

### Out of Scope

Real photo library, email/SMS notifications, AI chatbot, admin dashboard, multilingual full translation (only decorative Devanagari accents). All can be added later.
