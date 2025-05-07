import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Services } from "@/components/services";
import { Start } from "@/components/start";
import { Testimonials } from "@/components/testimonials";

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
