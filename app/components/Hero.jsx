import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Backgrounds */}
      <div className="absolute inset-0 w-full h-[270px] z-0 ">
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
          className="w-full h-full object-cover"
          priority
        />
      </div>

      <main className="font-sen relative min-h-screen text-zinc-900 pt-32 z-10 px-4 sm:px-6 md:px-10">
        <div className="mx-auto py-6 max-w-7xl">
          {/* Heading */}
          <div className="flex flex-col">
            <h1 className="text-[32px] sm:text-[60px] md:text-[80px] font-normal leading-[120%] text-zinc-900 text-center tracking-[-1.44px] w-full">
              We Fuel Brands
            </h1>

            <div className="flex flex-row items-center gap-3 sm:gap-7.5 mt-3 sm:mt-7 justify-center sm:justify-start md:ml-26">
              <span className="text-neutral-400 text-[32px] sm:text-[60px] md:text-[80px] font-normal leading-[120%]">
                with
              </span>
              <div className="flex items-center gap-3 sm:gap-7.5">
                <Image
                  src="/home/text-img1.png"
                  alt="Creativity"
                  width={200}
                  height={50}
                  className="rounded-full w-[100px] sm:w-[200px] h-auto"
                />
                <span className="text-zinc-900 font-normal text-[32px] sm:text-[60px] md:text-[80px] leading-[120%]">
                  Creativity
                </span>
                <span className="text-neutral-400 font-normal text-[32px] sm:text-[60px] md:text-[80px] leading-[120%] hidden sm:inline">
                  &
                </span>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3 sm:gap-7.5 mt-3 sm:mt-7 justify-center sm:justify-end mr-30 w-full">
              <span className="text-neutral-400 font-normal text-[32px] sm:text-[60px] md:text-[80px] leading-[120%] inline sm:hidden">
                &
              </span>
              <Image
                src="/home/text-img2.png"
                alt="Intelligence"
                width={200}
                height={50}
                className="rounded-full w-[100px] sm:w-[200px] h-auto"
              />
              <span className="text-zinc-900 font-normal text-[32px] sm:text-[60px] md:text-[80px] leading-[120%] mr-0 md:mr-30">
                Intelligence
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-18 flex flex-col sm:flex-col md:flex-row justify-center items-center gap-4">
            <button className="bg-zinc-900 text-white w-[260px] sm:w-[250px] md:w-[250px] rounded-full px-7.5 py-3.5 text-base font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition">
              Get In Touch
              <Icon icon="iconoir:mail" width="22" height="22" />
            </button>

            <button className="bg-white border border-neutral-200 w-[260px] sm:w-[265px] md:w-[265px] text-zinc-900 rounded-full px-7.5 py-3.5 text-base font-semibold flex items-center justify-center gap-2 hover:bg-zinc-900 hover:text-white shadow-sm transition">
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

          <section className="relative mt-16 overflow-hidden w-full">
            {/* Clutch Rating */}
            <div className="relative sm:absolute flex flex-col items-center justify-center w-full text-center z-30 mb-5 sm:mb-0 sm:mt-5">
              <div className="text-yellow-400 text-xl flex justify-center gap-1 items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Icon
                      icon="tabler:star-filled"
                      width={20}
                      height={20}
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

            {/* Hero Image and Overlay */}
            <div className="relative z-10 flex items-center justify-center">
              <Image
                src="/home/heroImg.png"
                alt="Hero Collage"
                width={1440}
                height={510}
                className="w-full h-auto object-cover z-10"
                priority
              />
              {/* Overlay Top */}
              <Image
                src="/home/overlay1.png"
                alt="overlay top"
                width={1200}
                height={100}
                className="absolute top-0 left-0 w-full z-20 pointer-events-none h-[50] sm:h-[150]"
              />
              {/* Overlay Bottom */}
              <Image
                src="/home/overlay2.png"
                alt="overlay bottom"
                width={1200}
                height={100}
                className="absolute bottom-0 left-0 w-full z-20 pointer-events-none h-[50] sm:h-[150]"
              />
            </div>

            {/* Trusted Brands Logos */}
            <div className="mt-12 px-4 z-30 relative">
              <p className="text-zinc-500 font-figtree font-medium text-lg mb-10 text-center leading-[160%]">
                Trusted by leading brands and startups
              </p>
              <div className="flex justify-center items-center gap-8 overflow-x-auto whitespace-nowrap pb-10 sm:pb-18 opacity-70 scrollbar-hide">
                <Image
                  src="/home/galileo.png"
                  alt="Galileo"
                  width={94}
                  height={30}
                />
                <Image
                  src="/home/sisyphus.png"
                  alt="Sisyphus"
                  width={105}
                  height={30}
                />
                <Image
                  src="/home/segment.png"
                  alt="Segment"
                  width={110}
                  height={30}
                />
                <Image
                  src="/home/layers.png"
                  alt="Layers"
                  width={91}
                  height={30}
                />
                <Image
                  src="/home/FeatherDev.png"
                  alt="FeatherDev"
                  width={124}
                  height={30}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Hero;
