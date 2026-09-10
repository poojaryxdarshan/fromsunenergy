import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { HowItWorks } from "@/components/how-it-works";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";
import { CtaBanner } from "@/components/cta-banner";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Projects />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
    </main>
  );
}