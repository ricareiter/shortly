import Cta from "@/components/Cta";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Shorten from "@/components/Shorten";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Shorten />
      <Feature />
      <Cta />
      <Footer />
    </div>
  );
}
