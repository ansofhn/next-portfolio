import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BAProjects from "@/components/BAProjects";
import Deliverables from "@/components/Deliverables";
import CaseStudy from "@/components/CaseStudy";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Callback from "@/components/Callback";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BAProjects />
        <Deliverables />
        <CaseStudy />
        <Projects />
        <Skills />
        <Callback />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}