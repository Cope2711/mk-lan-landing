import React from "react";
import { Navbar } from "../layout/Navbar";
import { FooterSection } from "../layout/FooterSection";
import { Hero } from "../sections/hero/Hero";
import { ServicesSection } from "../sections/services/ServicesSection";
import { WhyChooseUsSection } from "../sections/why-choose-us/WhyChooseUsSection";
import { WorkProcessSection } from "../sections/work-process/WorkProcessSection";
import { TestimonialsSection } from "../sections/testimonials/TestimonialsSection";
import { PricingSection } from "../sections/pricing/PricingSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-primary-dark text-text-inverse selection:bg-accent/30 font-sans">
      <Navbar />

      <Hero />
      <ServicesSection />
      <WhyChooseUsSection />
      <WorkProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <FooterSection />
    </div>
  );
}