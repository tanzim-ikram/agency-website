import React from "react";
import Image from "next/image";

const CareerHero = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="relative bg-white min-h-[420px] flex items-center font-sen pb-50 md:pb-50">
        <div className="absolute top-0 right-0 z-0">
          <Image
            src="/home/BG lines.png"
            alt="Background Line"
            height={1000}
            width={2400}
            priority
            className="pointer-events-none opacity-50"
          />
        </div>

        {/* Overlay Images */}
        <Image
          src="/home/overlay3.png"
          alt="left overlay"
          width={250}
          height={950}
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block"
        />
        <Image
          src="/home/overlay4.png"
          alt="right overlay"
          width={250}
          height={950}
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block"
        />

        {/* Overlay BG Gr Bottom.svg at bottom right */}
        <div className="absolute bottom-0 right-0 z-10">
          <Image
            src="/services/BG Gr Bottom.svg"
            alt="Background Gradient Bottom"
            height={2880}
            width={2050}
            priority
            className=""
          />
        </div>

        {/* Hero image on right middle - adjusted positioning */}
        <div className="flex absolute right-0 bottom-30 translate-y-[30%] z-10">
          {" "}
          {/* Reduced translate-y value */}
          <Image
            src="/career/HeroImg.svg"
            alt="Hero Illustration"
            height={305}
            width={605}
            priority
            className="block"
          />
        </div>

        {/* Left content */}
        <div className="mt-40 max-w-3xl relative z-10 px-4 sm:px-6 lg:px-8 xl:px-[8%]">
          <h1 className="text-[28px] md:text-5xl lg:text-6xl font-normal flex flex-col sm:items-start items-center gap-3 sm:gap-6 text-zinc-900">
            <span className="flex items-center gap-4 whitespace-nowrap">
              We are Hiring
              <Image
                src="/career/Career-Text-Img2.png"
                alt="Text image"
                width={140}
                height={64}
                className="inline rounded-full w-[150px] h-[50px] sm:w-[140px] sm:h-[64px] object-cover"
              />
            </span>
            <span className="text-neutral-400 font-normal whitespace-nowrap">
              Be Part of our Mission
            </span>
          </h1>

          <p className="mt-6 md:mt-16 text-zinc-500 font-figtree font-normal max-w-2xl mx-auto font-figtree text-lg mb-50 md:mb-0 ">
            We're looking for passionate people to join us on our mission, We
            value flat hierarchies, clear communication, and full ownership and
            responsibility
          </p>
        </div>
      </section>
    </div>
  );
};

export default CareerHero;
