import { Contact } from "@/components/components/contact";
import { Footer } from "@/components/components/footer";
import { Gallery } from "@/components/components/gallery";
import { Services } from "@/components/components/services";
import { Start } from "@/components/components/start";
import { Testimonials } from "@/components/components/testimonials";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Start />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

