import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Backgrounds */}
      <div className="absolute inset-0 w-full h-270 z-0">
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
        <div className="max-w-7xl mx-auto px-0 py-6">
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
          <div className="mt-20 flex justify-center gap-6">
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

          <section className="relative py-16 overflow-hidden w-full mb-0">
            {/* Overlay Top */}
            <Image
              src="/home/overlay1.png"
              alt="overlay top"
              width={1200}
              height={100}
              className="absolute top-40 left-0 w-full h-24 z-40 pointer-events-none"
            />

            {/* Rating */}
            <div className="relative z-50 top-30 text-center mb-12">
              <div className="text-yellow-400 text-xl flex justify-center gap-1 items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Icon
                      icon="tabler:star-filled"
                      width="20"
                      height="20"
                      key={i}
                    />
                  ))}
                <p className="text-gray-900 font-semibold text-lg ml-2">5.0</p>
              </div>
              <p className="mt-1 text-sm text-zinc-500 flex justify-center items-center">
                From 80+ review from
                <Image
                  src="/home/clutch.png"
                  alt="Clutch"
                  width={18}
                  height={18}
                  className="mx-1 inline-block"
                />
                <span className="font-semibold text-zinc-500">Clutch</span>
              </p>
            </div>

            {/* Image Grid in V shape */}
            <div className="relative z-20 w-full flex justify-items-stretch items-center">
              <div className="grid grid-cols-5 gap-4 items-end">
                {/* Leftmost Large */}
                <Image
                  src="/home/image1.png"
                  alt="image1"
                  width={300}
                  height={350}
                  className="w-full h-[400px] object-cover rounded-xl shadow-md"
                />

                {/* Medium Left */}
                <Image
                  src="/home/image2.svg"
                  alt="image2"
                  width={250}
                  height={300}
                  className="w-full h-[300px] object-cover rounded-xl shadow-md"
                />

                {/* Smallest Middle */}
                <Image
                  src="/home/image3.png"
                  alt="image3"
                  width={220}
                  height={250}
                  className="w-full h-[250px] object-cover rounded-xl shadow-md"
                />

                {/* Medium Right */}
                <Image
                  src="/home/image4.svg"
                  alt="image4"
                  width={250}
                  height={300}
                  className="w-full h-[300px] object-cover rounded-xl shadow-md"
                />

                {/* Collaged Image 5 & 6 */}
                <div className="flex flex-col gap-4 w-full">
                  <Image
                    src="/home/image5.png"
                    alt="image5"
                    width={300}
                    height={200}
                    className="w-full h-[195px] object-cover rounded-xl shadow-md"
                  />
                  <Image
                    src="/home/image6.png"
                    alt="image6"
                    width={300}
                    height={150}
                    className="w-full h-[195px] object-cover rounded-xl shadow-md"
                  />
                  {/* Overlay Bottom */}
                  <Image
                    src="/home/overlay2.png"
                    alt="overlay bottom"
                    width={1200}
                    height={100}
                    className="absolute bottom-[-10] left-0 w-full h-24 z-10 pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Hero;
