// Wisdom Academy English School — content constants.
// Replace any string here with real content when available.

export const SCHOOL = {
  name: "Wisdom Academy English School",
  shortName: "Wisdom Academy",
  deva: "विज़डम अकैडमी",
  tagline: "Guidance for the world & hereafter",
  established: 2011,
  yearsOfExcellence: 16,
  city: "Bhiwandi, Maharashtra",
  fullAddress:
    "632, Tahir Sardar Compound, Gulzar Nagar, Naigaon, Bhiwandi-421 302, Dist. Thane",
  phone: "+91 87933 77326",
  phoneDigits: "918793377326", // for wa.me link
  email: "wisdomacademy2011@gmail.com",
  instagram: "https://instagram.com/wisdomacademy2011",
  instagramHandle: "@wisdomacademy2011",
  followers: 236,
  posts: 142,
  youtube: "https://www.youtube.com/channel/UCwh_p-KNRU_s8gMwlMX9isQ",
  facebook: "https://www.facebook.com/people/WA-ES/pfbid0B7tXpWsYrHAvb5Pey44fhoT5Bko8BWwTbNeXHyWwyD7CdwWKxQy5s7FWVno72ofMl/",
  whatsapp: "https://wa.me/qr/NEA35CA7DSC5G1",
  mapsUrl: "https://maps.app.goo.gl/swK56bS5prbxPZUa8",
  mapsEmbed:
    "https://www.google.com/maps?q=Wisdom+Academy+English+School+Bhiwandi&output=embed",
};

// Top announcement bar
export const ANNOUNCEMENT =
  "Admissions open for 2026–27 · Limited seats · Call +91 87933 77326";

// Hero — cycling tagline lines
export const HERO = {
  eyebrow: "Since 2011 · Bilingual English-Medium · Bhiwandi",
  cycling: [
    "Where knowledge meets character.",
    "A bilingual English-medium school.",
    "Guidance for the world & hereafter.",
  ],
  body:
    "16+ years of nurturing confident, kind, curious learners through quality academics and Islamic moral values — right in the heart of Bhiwandi.",
  primaryCta: "Enquire for 2026–27",
  secondaryCta: "Chat on WhatsApp",
};

// Stats shown in About section
export const STATS = [
  { value: 16, suffix: "+", label: "Years of Excellence" },
  { value: 1200, suffix: "+", label: "Happy Learners" },
  { value: 60, suffix: "+", label: "Dedicated Teachers" },
  { value: 100, suffix: "%", label: "SSC Pass Rate" },
];

export const ABOUT = {
  kicker: "Our Story",
  title: "A school built on care, character & curiosity.",
  paragraphs: [
    "Founded in 2011 by the Ansari Muhammad Tahir Sardar Education & Welfare Society, Wisdom Academy English School was born from a simple belief — that every child in Bhiwandi deserves a world-class English-medium education rooted in moral values.",
    "Sixteen years on, our classrooms hum with the same conviction. Smart teaching meets traditional adab. English fluency walks hand-in-hand with Quranic understanding. Children leave us not only ready for the SSC board, but ready for life.",
  ],
};

export const VISION_MISSION = {
  vision: {
    title: "Our Vision",
    body:
      "To raise a generation of learners who are academically excellent, morally grounded, and confident enough to lead — in this world and the hereafter.",
  },
  mission: {
    title: "Our Mission",
    body:
      "Deliver quality bilingual education through experienced teachers, smart classrooms and activity-based learning, in a safe, value-driven environment that every parent can trust.",
  },
};

// Six interactive feature cards
import teacherImg from "@/assets/feature-teacher.png";
import classroomImg from "@/assets/feature-classroom.png";
import activityImg from "@/assets/feature-activity.png";
import safetyImg from "@/assets/feature-safety.png";
import sportsImg from "@/assets/feature-sports.png";
import valuesImg from "@/assets/feature-values.png";

export const FEATURES = [
  {
    title: "Experienced & caring teachers",
    desc: "Educators who know every child by name — and exactly how each one learns best.",
    image: teacherImg,
  },
  {
    title: "Smart classroom teaching",
    desc: "Digital boards, audio-visual lessons and modern pedagogy in every room.",
    image: classroomImg,
  },
  {
    title: "Activity-based learning",
    desc: "Hands-on science, storytelling, role play — concepts learners can feel.",
    image: activityImg,
  },
  {
    title: "Safe, clean campus & CCTV",
    desc: "24×7 surveillance, trained support staff and a calm, secure environment.",
    image: safetyImg,
  },
  {
    title: "Computer & sports education",
    desc: "Computer lab, indoor & outdoor sports — body and mind grow together.",
    image: sportsImg,
  },
  {
    title: "Islamic & moral values",
    desc: "Quran, akhlaq and adab woven gently into the daily school rhythm.",
    image: valuesImg,
  },
];

// Programs (tabbed)
export const PROGRAMS = [
  {
    id: "pre",
    label: "Pre-Primary",
    age: "Ages 3–5 · Nursery to Sr. KG",
    points: [
      "Play-based foundation in English, Hindi & Urdu sounds",
      "Phonics, number sense and motor-skill activities",
      "Daily storytelling, art, music and free play",
      "Gentle introduction to Islamic etiquette and prayers",
    ],
  },
  {
    id: "primary",
    label: "Primary",
    age: "Ages 6–10 · Std I to Std V",
    points: [
      "Strong English communication and reading habit",
      "Activity-based Maths, EVS and Science",
      "Computer lab, library and weekly sports periods",
      "Quran reading and basic Islamic studies",
    ],
  },
  {
    id: "secondary",
    label: "Secondary",
    age: "Ages 11–14 · Std VI to Std IX",
    points: [
      "Concept-first Mathematics and Science",
      "Public speaking, debates and project work",
      "Career awareness and life-skill workshops",
      "Tahfeez and akhlaq circles every week",
    ],
  },
  {
    id: "ssc",
    label: "SSC Board",
    age: "Std X · Maharashtra State Board",
    points: [
      "Focused board prep with weekly mock tests",
      "Doubt-clearing and remedial sessions",
      "Counselling for stream choice and entrance exams",
      "Consistent strong board results year on year",
    ],
  },
];

// Achievements timeline
export const TIMELINE = [
  { year: "2011", title: "School founded", desc: "Doors open with Pre-Primary in a small rented building." },
  { year: "2014", title: "Primary section grows", desc: "First Std V batch graduates with distinction." },
  { year: "2017", title: "New campus", desc: "Move to current premises at Tahir Sardar Compound." },
  { year: "2019", title: "First SSC batch", desc: "Maiden SSC board results — 100% pass rate." },
  { year: "2022", title: "Smart classrooms", desc: "Digital boards installed across all sections." },
  { year: "2025", title: "Annual function & prize day", desc: "Largest community celebration in school history." },
  { year: "2026", title: "Best wishes, SSC 2026", desc: "Cheering on our brightest yet — ‘Rabbi Zidni Ilma’." },
];

// Gallery
import g1 from "@/assets/gallery-1.png";
import g2 from "@/assets/gallery-2.png";
import g3 from "@/assets/gallery-3.png";
import g4 from "@/assets/gallery-4.png";
import g5 from "@/assets/gallery-5.png";
import g6 from "@/assets/gallery-6.png";

export const GALLERY = [
  { src: g1, alt: "Annual prize distribution day", span: "tall" },
  { src: g2, alt: "Cultural performance on stage", span: "wide" },
  { src: g3, alt: "School library reading session", span: "normal" },
  { src: g4, alt: "Arts and crafts class", span: "normal" },
  { src: g5, alt: "Independence Day flag hoisting", span: "tall" },
  { src: g6, alt: "Computer lab learning", span: "wide" },
];

import a1 from "@/assets/avatar-1.png";
import a2 from "@/assets/avatar-2.png";
import a3 from "@/assets/avatar-3.png";

export const TESTIMONIALS = [
  {
    quote:
      "My daughter was shy when she joined. Today she stands on stage and recites Surahs with confidence. Wisdom Academy raised her, not just taught her.",
    name: "Imran Sheikh",
    role: "Parent of Std IV student",
    avatar: a1,
  },
  {
    quote:
      "We toured five schools in Bhiwandi. Only Wisdom Academy felt like family. Clean, safe, and the teachers actually listen.",
    name: "Ayesha Khan",
    role: "Parent of Pre-KG & Std II students",
    avatar: a2,
  },
  {
    quote:
      "Both my sons cleared SSC from here. The board prep is genuinely solid, and the values they pick up are priceless.",
    name: "Abdul Rahman Ansari",
    role: "Alumni parent",
    avatar: a3,
  },
];

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Why Us" },
  { href: "#programs", label: "Programs" },
  { href: "#gallery", label: "Gallery" },
  { href: "#timeline", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function whatsappLink(message?: string) {
  if (!message) return SCHOOL.whatsapp;
  return `https://wa.me/${SCHOOL.phoneDigits}?text=${encodeURIComponent(message)}`;
}
