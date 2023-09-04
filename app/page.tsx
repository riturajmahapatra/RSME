import BannerCarousel from "@/components/ui/carousel";
import Nav from "./(layout)/Nav";
import Header from "./components/Header";
import Hero from "@/app/components/Hero";
import Footer from "./(layout)/Footer";
export default function Home() {
  const images: string[] = [
    "/rsme/child-school1.jpg",
    "/rsme/child-school2.jpg",
    "/rsme/child-school3.jpg",
    "/rsme/child-school4.jpg",
    "/rsme/child-school5.jpg",
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
