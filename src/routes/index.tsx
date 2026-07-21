import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Process } from "@/components/site/Process";
import { Portfolio } from "@/components/site/Portfolio";
import { TechStack } from "@/components/site/TechStack";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Loader, ScrollProgress } from "@/components/site/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexora Technologies — Engineering Intelligent Digital Experiences" },
      { name: "description", content: "Nexora Technologies partners with enterprises to build AI, cloud, and automation platforms. Custom software, web, mobile, and digital transformation." },
      { property: "og:title", content: "Nexora Technologies — Engineering Intelligent Digital Experiences" },
      { property: "og:description", content: "AI, cloud, and enterprise software engineered with precision. Innovate • Integrate • Elevate." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Process />
        <Portfolio />
        <TechStack />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
