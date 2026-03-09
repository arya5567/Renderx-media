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
export default function Home() {
  return (
    <main>
      <Hero />
       <VideoMarquee/>
      <About />
      <Services />
      <ProcessSection/>
      
      <TrustedBy />
      <WhyChooseUs/> 
      <VisionSection/> {/* 👈 new section */}
      <Contact />    
      <CTA /> 
      <Footer />
     
    </main>
  );
}