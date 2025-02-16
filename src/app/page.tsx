import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import FairTrade from "../components/FairTrade";
import VideoSection from "../components/VideoSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FairTrade />
      <VideoSection />
      <Footer />
    </main>
  );
}
