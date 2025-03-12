import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import TeamSection from "@/components/team-section";
import ContactForm from "@/components/contact-form";
import WaitlistForm from "@/components/waitlist-form";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <TeamSection />
        <ContactForm />
        <WaitlistForm />
      </motion.main>
    </div>
  );
}