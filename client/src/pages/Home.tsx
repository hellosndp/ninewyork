import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Trust />
      <Services />
      <Gallery />
      <Footer />
    </main>
  );
}
