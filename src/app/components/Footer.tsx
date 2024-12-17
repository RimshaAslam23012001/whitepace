import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-[#043873] py-10 px-10">
      <div className="max-w-screen-xl mx-auto text-white">
        {/* Top Section with 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-white">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <div className="w-[194px] h-[34px] mb-4">
              <Image
                alt="Whitespace logo"
                className="mr-2"
                height={34}
                src="/Logo.png"
                width={194}
              />
            </div>
            <div className="w-[240px]">
              <p className="font-normal text-sm sm:text-base leading-[30px]">
                Whitepace was created for the new ways we live and work. We make
                a better workspace around the world.
              </p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-lg leading-9 mb-2">Product</h3>
            <ul>
              <li>
                <Link className="font-normal text-base leading-8 hover:underline" href="#">
                  Overview
                </Link>
              </li>
              <li>
                <Link className="font-normal text-base leading-8 hover:underline" href="#">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="font-normal text-base leading-8 hover:underline" href="#">
                  Customer stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-lg leading-9 mb-2">Resources</h3>
            <ul>
              <li>
                <Link className="font-normal text-base leading-8 hover:underline" href="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="font-normal text-base leading-8 hover:underline" href="#">
                  Guides &amp; tutorials
                </Link>
              </li>
              <li>
                <Link className="font-normal text-base leading-8 hover:underline" href="#">
                  Help center
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg leading-9 mb-2">Company</h3>
            <ul>
              <li>
                <Link className="font-normal text-base leading-8 hover:underline" href="#">
                  About us
                </Link>
              </li>
              <li>
                <Link className="font-normal text-base leading-8 hover:underline" href="#">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="font-normal text-base leading-8 hover:underline" href="#">
                  Media kit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-base font-normal leading-5 mt-10">
          <p>©2021 Whitespace LLC.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
