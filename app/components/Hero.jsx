import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Backgrounds */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/home/BG lines.png"
          alt="Background Lines"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 w-full h-full z-10">
        <Image
          src="/home/BG Gr Bottom.png"
          alt="Background Gradient Bottom"
          height={1025}
          width={1440}
          priority
        />
      </div>

      <main className="font-sen relative min-h-screen text-zinc-900 pt-32 z-10">
        <div className="max-w-7xl mx-auto px-6 pb-40">
          {/* Heading */}
          <div className="flex flex-col">
            {/* "We Fuel Brands" - Centered at top */}
            <h1 className="text-[56px] md:text-[64px] font-normal leading-tight text-zinc-900 text-center">
              We Fuel Brands
            </h1>

            {/* "with Creativity &" - Second line left-aligned */}
            <div className="flex items-center gap-3 mt-4 justify-start ml-55">
              <span className="text-neutral-400 text-[56px] md:text-[64px]">
                with
              </span>
              <div className="flex items-center gap-3">
                <Image
                  src="/home/text-img1.png"
                  alt="Creativity"
                  width={130}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-zinc-900 font-normal font-sen text-[56px] md:text-[64px]">
                  Creativity
                </span>
                <span className="text-neutral-400 text-[56px] md:text-[64px]">
                  &
                </span>
              </div>
            </div>

            {/* "Intelligence" - Third line right-aligned */}
            <div className="flex items-center gap-3 mt-7 justify-end mr-55">
              <Image
                src="/home/text-img2.png"
                alt="Intelligence"
                width={130}
                height={40}
                className="rounded-full"
              />
              <span className="text-zinc-900 font-normal font-sen text-[56px] md:text-[64px]">
                Intelligence
              </span>
            </div>
          </div>

          {/* Buttons - Centered below the text */}
          <div className="mt-10 flex justify-center gap-6">
            <button className="bg-zinc-900 text-white rounded-full px-12 py-4 text-base font-bold flex items-center gap-2 hover:bg-blue-600 transition">
              Get In Touch
              <Icon icon="iconoir:mail" width="22" height="22" />
            </button>

            <button className="bg-white border border-neutral-200 text-zinc-900 rounded-full px-12 py-4 text-base font-bold flex items-center gap-2 hover:bg-zinc-900 hover:text-white shadow-sm transition">
              Explore Our Services
              <Image
                src="/icons/3d-box.svg"
                alt="Intelligence"
                width={24}
                height={24}
                className="rounded-full"
              />
            </button>
          </div>

          {/* Rating */}
          <div className="mt-6 text-sm text-gray-600 flex justify-center items-center gap-2">
            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.464a1 1 0 00-.364 1.118l1.286 3.974c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.39 2.464c-.784.57-1.838-.196-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L3.603 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                </svg>
              ))}
            </div>
            <span className="font-semibold">5.0</span>
            <span className="text-gray-500">From 80+ review from </span>
            <Image src="/home/clutch.png" alt="Clutch" width={18} height={18} />
          </div>

          {/* Bottom Images */}
          <div className="mt-20 flex justify-center flex-wrap gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="bg-white rounded-lg shadow-lg overflow-hidden max-w-[150px] flex-shrink-0"
              >
                <Image
                  src={`/home/image${num}.png`}
                  alt={`Image ${num}`}
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
