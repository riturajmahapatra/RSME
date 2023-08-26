import { type } from "os";
import React from "react";
import "./style.css";

type AlignmentCardsType = {
  heading: string;
  cardtext?: string;
  images: string;
  /*   blob?: string; */
  isImageLeft?: boolean;
};

const AlignmentCards = ({
  heading,
  cardtext,
  images,
  isImageLeft,
}: /*  blob,*/
AlignmentCardsType) => {
  // Conditionally apply classes based on customClasses prop

  return (
    <div
      className={`relative flex justify-between items-center m-[5vw] ${
        isImageLeft ? "flex-row-reverse" : ""
      }`}
    >
      {/* Display the image with conditional classes */}
      <div className="overflow-hidden relative w-fit h-fit rounded-md group">
        <img
          className="rounded-md hover:scale-110 transform transition-transform duration-700 "
          src={images}
          alt="wellness"
          width={400}
          height={440}
        />
        <span className="absolute hover-h1 left-0 transition-transform duration-700 group-hover:transform group-hover:bottom-10 text-white font-semibold  -bottom-20 ">
          {cardtext}
        </span>
      </div>

      {/* Text container */}
      <div className="w-2/3">
        <h1 className="text-xl text-start font-semibold ">{heading}</h1>
      </div>
    </div>
  );
};

export default AlignmentCards;
