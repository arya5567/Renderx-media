import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import CTA from "../components/CTA";
import TrustedBy from "../components/TrustedBy";  // 👈 new import
import Contact from "../components/Contact";      
import Footer from "../components/Footer";
import VideoMarquee from "@/components/VideoMarquee.js";
import ProcessSection from "../components/process.js";
import WhyChooseUs from "../components/whychooseus";
import VisionSection from "../components/vision.js";
import LogoMarquee from "@/components/LogoMarquee";
import HeroSection from "@/components/herion";
export default function Home() {
  return (
    <main>
     
      <Hero />
      <LogoMarquee/>
       <VideoMarquee/>
      <About />
      <Services />
      <ProcessSection/>
      <VisionSection/> {/* 👈 new section */}
      <Contact />    
      <CTA /> 
      <Footer />
     
    </main>
  );
}