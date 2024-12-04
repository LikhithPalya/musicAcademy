// import Layout from "../app/layout";
import FeaturedSection from "@/components/FeaturedSection";
import  HeroSection from "../components/HeroSection"; 
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCard from "@/components/TestimonialCard";
export default function HomePage() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      

      
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <TestimonialCard />
   </main>
  
);
}