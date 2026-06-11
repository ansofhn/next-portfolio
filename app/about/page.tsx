import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Callback from "@/components/Callback";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Ansof Habibunnadjar — a Front End Developer from Indonesia.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
        <Callback />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
