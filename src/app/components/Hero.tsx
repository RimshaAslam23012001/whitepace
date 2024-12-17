import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="w-full h-auto py-[90px] px-6 md:px-[220px] bg-[#043873] gap-10 flex justify-center">
      <div className="w-full md:w-[656px] h-auto gap-[60px] flex flex-col justify-start items-left">
        <h2 className="text-white font-[inter] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight  items-left">
          Get More Done with Whitepace
        </h2>

        <p className="text-white font-[inter] font-normal text-base sm:text-lg md:text-xl  items-left">
          Project management software that enables your teams to collaborate,
          plan, analyze, and manage everyday tasks.
        </p>

        <button className="w-full sm:w-[219px] h-[63px] bg-[#4F9CF9] text-white font-[inter] font-semibold text-lg rounded-lg transition duration-300 ease-in-out hover:bg-[#043873] mt-6 flex items-center justify-center">
          Try Whitepace Free
          <IoIosArrowRoundForward className="ml-2" />
        </button>
      </div>

      <div className="w-full sm:w-[824px] h-auto bg-[#C4DEFD] mt-6 md:mt-0">
        {/* Add any content here */}
      </div>
    </div>
  );
};

export default Hero;
