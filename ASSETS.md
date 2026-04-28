# Assets & Content Replacement Guide

## Replacing illustrations with real photos

All clipart in `src/assets/` was generated as a placeholder. To swap with real
school photos, replace the file at the same path keeping the same filename.

| File | Used in |
| --- | --- |
| `hero-school.png` | Hero section main image |
| `about-building.png` | About section |
| `feature-*.png` | Six feature cards |
| `gallery-*.png` | Gallery grid |
| `avatar-*.png` | Testimonial portraits |

Recommended size: at least 1200×900px, JPG or PNG. The site lazy-loads all
images except the hero (which uses `fetchpriority="high"`).

## Updating text content

Every text string lives in `src/lib/constants.ts`. Each export is commented
with its purpose. Edit there — never hard-code text in components.

## Updating chatbot answers

The scripted FAQ knowledge base lives in `src/lib/knowledgeBase.ts`. Edit
`QUICK_REPLIES` answers (markdown supported) and add/remove keywords to tune
matching. The fallback message and greeting are at the bottom of the file.

## Replacing the WhatsApp number / email

Edit `SCHOOL.phone`, `SCHOOL.phoneDigits` and `SCHOOL.email` in
`src/lib/constants.ts`. The contact form, floating WhatsApp button, header
CTA and footer all read from there.
