import React from "react";

type HerocardType = {
  heading: string;
  description: string;
  images?: string;
  blob?: string;
  customClasses?: string;
};

const Herocard = ({
  heading,
  description,
  images,
  customClasses,
  blob,
}: HerocardType) => {
  return (
    <div>
      <div className=" relative flex justify-end  gap-6 text-start">
        <img
          src={images}
          className={`${customClasses}`}
          alt="wellness"
          width={120}
          height={120}
        />{" "}
        <img
          src={blob}
          className={`w-[200px] absolute -top-5 left-10  -z-10`}
        />{" "}
        <div className="w-1/2">
          <h1 className="text-lg font-semibold uppercase">{heading}</h1>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Herocard;
