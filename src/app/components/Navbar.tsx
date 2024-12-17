import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-[92px] bg-[#043873] py-4 px-4 gap-20 md:px-[220px] flex justify-between items-center">
        <div className="justify-between">
          <Image src="/logo.png" alt="Logo" width={191} height={34} />
        </div>

        {/* Navbar items */}
        <div className="w-full md:w-[737.5px] h-[60px]  flex justify-between items-center">
          {/* Links */}
          <div className="hidden md:flex w-full gap-10 justify-between">
            <ul className="flex gap-10 text-white">
              <li>Products</li>
              <li>Solution</li>
              <li>Resources</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* Login Button */}
          <div>
            <button className="py-2 px-6 rounded-lg bg-[#FFE492] text-black">
              Login
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button className="text-white">☰</button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className="md:hidden w-full bg-[#043873] text-white py-4 px-6">
        <ul className="flex flex-col gap-4">
          <li>Products</li>
          <li>Solution</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
        <div className="mt-4">
          <button className="py-2 px-6 w-full rounded-lg bg-[#FFE492] text-black">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
