import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const Project = () => {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-screen-xl w-full bg-white">
        {/* First section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 mb-24">
          <div className="flex-1 max-w-lg">
            <h1 className="text-4xl lg:text-7xl font-bold leading-tight mb-4">
              Project Management
            </h1>
            <p className="text-base lg:text-lg leading-relaxed mb-6">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with the
              mobile app and save them to a note.
            </p>
            <button className="w-full sm:w-[219px] h-[63px] bg-[#4F9CF9] text-white font-[inter] font-semibold text-lg rounded-lg transition duration-300 ease-in-out hover:bg-[#043873] flex items-center justify-center mt-6">
              Get Started
              <IoIosArrowRoundForward className="ml-2" />
            </button>
          </div>
          <div className="flex-1 bg-[#C4DEFD] mt-10 h-[300px] lg:h-[547px]"></div>
        </div>

        {/* Second section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 mb-6">
          <div className="flex-1">
            <Image src="/Work_Together.png" alt="Workplace" width={710} height={661} />
          </div>
          <div className="flex-1 max-w-lg">
            <h1 className="text-4xl lg:text-7xl font-bold leading-tight mb-4">
              Work together
            </h1>
            <p className="text-base lg:text-lg leading-relaxed mb-6">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet and
              share the URL with others.
            </p>
            <button className="w-full sm:w-[219px] h-[63px] bg-[#4F9CF9] text-white font-[inter] font-semibold text-lg rounded-lg transition duration-300 ease-in-out hover:bg-[#043873] flex items-center justify-center mt-6">
              Try it Now
              <IoIosArrowRoundForward className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
