import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { FAQ } from "@/components/sections/FAQ";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <FAQ />
      <Process />
      <CaseStudies />
      <CTA />
      <Footer />
    </main>
  );
}
