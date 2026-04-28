// WISDOM Chatbot — scripted FAQ knowledge base.
// Replace answers with verified school policy when available.

export type QA = {
  id: string;
  label: string; // shown as a quick-reply chip
  keywords: string[];
  answer: string; // markdown
};

export const QUICK_REPLIES: QA[] = [
  {
    id: "admissions",
    label: "Admissions",
    keywords: ["admission", "admit", "enroll", "enrol", "apply", "application", "join", "seat"],
    answer:
      "**Admissions for 2026–27 are open.** Limited seats across Pre-Primary to Std IX.\n\n- **Step 1:** Visit our campus or call **+91 87933 77326** to book a slot.\n- **Step 2:** Submit the form with previous mark-sheet, birth certificate and 2 photos.\n- **Step 3:** Brief interaction with the child (and parents).\n\nWant me to open WhatsApp so you can request the form?",
  },
  {
    id: "fees",
    label: "Fees",
    keywords: ["fee", "fees", "cost", "price", "charge", "tuition", "expensive", "afford"],
    answer:
      "Fee structure varies by class and is shared in person to keep things transparent and tailored. Please call **+91 87933 77326** or message us on WhatsApp and we’ll send the latest 2026–27 fee sheet on the same day.",
  },
  {
    id: "timings",
    label: "Timings",
    keywords: ["time", "timing", "hour", "schedule", "open", "close", "shift"],
    answer:
      "**School hours:** Monday to Saturday, **8:00 AM – 2:30 PM** for Primary & Secondary. Pre-Primary runs **8:30 AM – 12:30 PM**. Office is open until **4:00 PM**.",
  },
  {
    id: "location",
    label: "Location",
    keywords: ["where", "location", "address", "map", "directions", "reach", "naigaon", "bhiwandi"],
    answer:
      "We’re at **632, Tahir Sardar Compound, Gulzar Nagar, Naigaon, Bhiwandi-421 302** (Dist. Thane).\n\n[Open in Google Maps](https://maps.app.goo.gl/swK56bS5prbxPZUa8)",
  },
  {
    id: "facilities",
    label: "Facilities",
    keywords: ["facility", "facilities", "amenity", "amenities", "lab", "library", "sports", "computer", "cctv", "safety"],
    answer:
      "Our campus offers:\n\n- Smart classrooms with digital boards\n- Computer lab and well-stocked library\n- Indoor & outdoor sports\n- Safe, clean campus with **24×7 CCTV**\n- Trained, caring support staff",
  },
  {
    id: "programs",
    label: "Programs",
    keywords: ["program", "programme", "class", "grade", "standard", "ssc", "primary", "kg", "nursery"],
    answer:
      "We teach **Pre-Primary (Nursery–Sr.KG), Primary (I–V), Secondary (VI–IX) and SSC (Std X)** — all bilingual English-medium under the **Maharashtra State Board**, with Quran and moral education woven into the week.",
  },
  {
    id: "values",
    label: "Islamic Studies",
    keywords: ["islam", "islamic", "quran", "moral", "religion", "deen", "namaz"],
    answer:
      "Yes — Quran reading, basic Islamic studies and **akhlaq circles** are part of every week, taught with kindness and never as pressure. Children of all backgrounds are warmly welcomed.",
  },
  {
    id: "contact",
    label: "Contact",
    keywords: ["contact", "phone", "call", "email", "whatsapp", "speak"],
    answer:
      "📞 **+91 87933 77326**\n✉️ wisdomacademy2011@gmail.com\n📸 Instagram: **@wisdomacademy2011**\n\nTap the WhatsApp button (bottom-right) to chat with us instantly.",
  },
];

export function findAnswer(input: string): QA | null {
  const text = input.toLowerCase();
  // Score by keyword hits
  let best: { qa: QA; score: number } | null = null;
  for (const qa of QUICK_REPLIES) {
    const score = qa.keywords.reduce((s, k) => (text.includes(k) ? s + 1 : s), 0);
    if (score > 0 && (!best || score > best.score)) best = { qa, score };
  }
  return best?.qa ?? null;
}

export const FALLBACK_ANSWER =
  "I don’t have that exact answer, but the school office will. Tap the **WhatsApp** button below to chat with a real person — usually replies within minutes.";

export const GREETING =
  "**As-salamu alaykum!** I’m **Wisdom**, the school’s little helper 🌿\n\nAsk me about admissions, fees, timings, programs or facilities — or pick one below.";
