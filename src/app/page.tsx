// import Layout from "../app/layout";
import FeaturedSection from "@/components/FeaturedSection";
import  HeroSection from "../components/HeroSection"; 
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function HomePage() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      

      
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <TestimonialCard />
      <UpcomingWebinars />
      <Instructors/>
      <Footer />
   </main>
  
);
}