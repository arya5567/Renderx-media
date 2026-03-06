import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import CTA from "../components/CTA";
import TrustedBy from "../components/TrustedBy";  // 👈 new import
import Contact from "../components/Contact";      
import Footer from "../components/Footer";
import VideoMarquee from "@/components/VideoMarquee.js";

export default function Home() {
  return (
    <main>
      <Hero />
       <VideoMarquee/>
      <About />
      <Services />
      <CTA />
      <TrustedBy />   {/* 👈 new section */}
      <Contact />     
      <Footer />
     
    </main>
  );
}