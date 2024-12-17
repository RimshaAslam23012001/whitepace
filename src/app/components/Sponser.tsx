import React from "react";
import Image from "next/image";

const Sponser = () => {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-screen-xl w-full text-center">
        {/* Title */}
        <div className="mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            Our Sponsors
          </h1>
        </div>

        {/* Image of Sponsors */}
        <div className="w-full flex justify-center">
          <Image
            src="/sponsors.png"
            alt="Sponsors"
            width={1482}
            height={71}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponser;
