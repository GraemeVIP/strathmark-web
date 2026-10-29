import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/sections/Hero";
import { RevenueFocus } from "@/app/components/sections/RevenueFocus";
import { Services } from "@/app/components/sections/Services";
import { FeaturedResult } from "@/app/components/sections/FeaturedResult";
import { HowItWorks } from "@/app/components/sections/HowItWorks";
import { Sectors } from "@/app/components/sections/Sectors";
import { Pricing } from "@/app/components/sections/Pricing";
import { About } from "@/app/components/sections/About";
import { Insights } from "@/app/components/sections/Insights";
import { FAQ } from "@/app/components/sections/FAQ";
import { Contact } from "@/app/components/sections/Contact";
import { Footer } from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />
      <Hero />
      <RevenueFocus />
      <Services />
      <FeaturedResult />
      <HowItWorks />
      <Sectors />
      <Pricing />
      <About />
      <Insights />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
