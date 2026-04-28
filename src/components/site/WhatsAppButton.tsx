import { whatsappLink } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hello Wisdom Academy, I'd like to enquire.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant animate-breathe sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.36c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.41.12-.55.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.54-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.74.34s-.97.95-.97 2.31c0 1.36.99 2.68 1.13 2.86.14.18 1.96 2.99 4.74 4.19.66.29 1.18.46 1.58.59.66.21 1.27.18 1.75.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32zM16.02 5.33C10.13 5.33 5.33 10.13 5.33 16c0 2.07.6 3.99 1.63 5.62l-1.07 3.91 4.02-1.05c1.57.86 3.37 1.36 5.29 1.36h.01c5.89 0 10.69-4.79 10.69-10.67 0-2.85-1.11-5.53-3.13-7.55a10.6 10.6 0 0 0-7.55-3.13z"/>
      </svg>
    </a>
  );
}
