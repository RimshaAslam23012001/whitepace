import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const YourWork = () => {
  return (
    <div className="w-full min-h-screen bg-[#043873] flex items-center justify-center px-4 py-10">
      <div className="max-w-screen-xl w-full text-center text-white px-4">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-bold mb-6">
          Your work, everywhere you are
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitepace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android, and iOS. A terminal
          app is also available!
        </p>

        {/* Button */}
        <button className="w-full sm:w-[219px] h-[63px] bg-[#4F9CF9] text-white font-inter font-semibold text-lg rounded-lg transition duration-300 ease-in-out hover:bg-[#043873] flex items-center justify-center mx-auto">
          Try Taskey
          <IoIosArrowRoundForward className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default YourWork;
