import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Preloader } from "@/components/site/Preloader";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { VisionMission } from "@/components/site/VisionMission";
import { Features } from "@/components/site/Features";
import { Programs } from "@/components/site/Programs";
import { Gallery } from "@/components/site/Gallery";
import { Timeline } from "@/components/site/Timeline";
import { SocialProof } from "@/components/site/SocialProof";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

const Chatbot = lazy(() => import("@/components/site/Chatbot"));

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <Preloader />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <VisionMission />
        <Features />
        <Programs />
        <Gallery />
        <Timeline />
        <SocialProof />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </>
  );
}
