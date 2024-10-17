import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function page() {
  return (
    <>
      <Header />
      <main className="lg:px-20 md:px-10 px-4">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
