"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./components/Navbar"), { ssr: false });
import ShortFooter from "./components/ShortFooter";

// app/not-found.jsx
export default function NotFound() {
  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 relative z-10">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home/BG lines.png"
            alt="Background Lines"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute bottom-0 right-0 z-10 w-full h-full">
          <Image
            src="/contact/BG Gr Bottom.svg"
            alt="Background Gradient"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Center Content */}
        <div className="relative z-20 flex flex-col items-center py-20">
          <Image
            src="/contact/error.svg"
            alt="Lost Icon"
            width={350}
            height={170}
            className="mb-6 sm:mb-10 w-100 h-30 sm:w-120 sm:h-50"
          />
          <p
            className="flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-[14px] text-[14px] sm:text-[18px] font-figtree font-semibold  leading-[120%] text-[rgba(0,0,0,0.70)] rounded-[24px] mb-6"
            style={{
              background:
                "linear-gradient(133deg, rgba(254, 248, 255, 0.50) -3.51%, rgba(227, 236, 255, 0.50) 43.03%, rgba(205, 202, 255, 0.50) 114.33%)",
            }}
          >
            404 Error
          </p>
          <h1 className="sm:text-6xl text-[28px] font-sen font-normal text-[#18191C] text-center leading-[110%] tracking-[-1.8px] mb-4">
            We've lost this page
          </h1>
          <p className="text-[#79747E] font-figtree text-lg font-normal leading-[160%] text-center sm:max-w-xl max-w-xs">
            Sorry, this page you are looking for doesn't exist or has been
            removed.
          </p>
        </div>
      </section>

      <ShortFooter />
    </div>
  );
}
