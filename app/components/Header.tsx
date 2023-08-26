import BannerCarousel from "@/components/ui/carousel";
import React from "react";

type HeaderType = {
  images: string[];
};
const Header = ({ images }: HeaderType) => {
  return (
    <>
      <div className="pt-20">
        <BannerCarousel images={images} />
      </div>
    </>
  );
};

export default Header;
