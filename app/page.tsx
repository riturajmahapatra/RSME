import BannerCarousel from "@/components/ui/carousel";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Hero from "@/app/components/Hero";
import Footer from "./components/Footer";
export default function Home() {
  const images: string[] = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/bacche.jpg",
  ];

  return (
    <>
      <div className="relative">
        <Header images={images} />
        <Hero />
      </div>
    </>
  );
}
