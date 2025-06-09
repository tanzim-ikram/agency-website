import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const gradientTextStyle = {
    background: "linear-gradient(130deg, #A299FA 10%, #3A93F8 29%, #7DB4F3 51%, #0B3EAA 69%)",
    border: "1px solid #fefefe",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

const Industries = () => {
  return (
    <div>
      <section className="relative flex flex-col items-center py-8 sm:py-12 bg-white">
        {/* Heading */}
        <h1 className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-sen text-[22px] xs:text-[26px] sm:text-[40px] md:text-[60px] text-zinc-900 mb-6 sm:mb-8 text-center w-full">
          <span>Turn Ideas</span>
          <span className="flex items-center justify-center gap-2">
            <Image
              src="/home/text-img3.png"
              alt="Text Img 3"
              width={60}
              height={35}
              className="inline rounded-full w-[50px] xs:w-[60px] sm:w-[120px] h-auto"
              priority
            />
          </span>
          <span>Into Impact</span>
          <span className="flex items-center justify-center gap-2">
            <Image
              src="/home/text-img4.png"
              alt="Text Img 4"
              width={60}
              height={35}
              className="inline rounded-full w-[50px] xs:w-[60px] sm:w-[120px] h-auto"
              priority
            />
          </span>
          <span>With Us</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xs xs:max-w-sm sm:max-w-2xl text-center font-normal font-figtree text-zinc-500 text-[14px] xs:text-base sm:text-lg mb-6 sm:mb-10">
          We provide tailored solutions across industries, using innovative
          technology to drive growth and efficiency
        </p>

        {/* Button */}
        <button className="mb-4 px-6 py-3 flex items-center gap-2.5 rounded-full bg-zinc-900 font-semibold text-white font-figtree hover:bg-blue-600 transition z-30 leading-[175%] text-sm xs:text-base sm:text-lg">
          About Farasha Digital
          <Icon icon="lineicons:arrow-right" width="25" height="25" />
        </button>

        {/* Globe Container */}
        <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl h-[180px] xs:h-[220px] sm:h-[320px] md:h-[400px] mx-auto mt-6 sm:mt-10">
          {/* Ellipse background behind the globe */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[180px] xs:w-[220px] sm:w-[320px] md:w-[400px] h-[120px] sm:h-[180px] z-10">
            <Image
              src="/home/ellipse3.png"
              alt="Ellipse Background"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Globe Image */}
          <div className="relative w-full h-full z-20">
            <Image
              src="/home/globe.png"
              alt="Globe"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Text bubbles */}
          {/* Creativity */}
          <div
            className="absolute z-30 top-4 left-0 xs:left-2 sm:left-6 bg-white/40 backdrop-blur-xs rounded-full px-3 py-1 xs:px-4 xs:py-2 sm:px-6 sm:py-4 font-sen text-[16px] xs:text-xl sm:text-3xl md:text-5xl"
            style={gradientTextStyle}
          >
            Creativity
          </div>

          {/* Curiosity */}
          <div
            className="absolute z-30 bottom-4 left-2 xs:left-6 sm:left-16 bg-white/40 backdrop-blur-xs rounded-full px-3 py-1 xs:px-4 xs:py-2 sm:px-6 sm:py-4 font-sen text-[16px] xs:text-xl sm:text-3xl md:text-5xl"
            style={gradientTextStyle}
          >
            Curiosity
          </div>

          {/* Code */}
          <div
            className="absolute z-30 top-8 right-0 xs:right-2 sm:right-6 bg-white/40 backdrop-blur-xs rounded-full px-3 py-1 xs:px-4 xs:py-2 sm:px-6 sm:py-4 font-sen text-[16px] xs:text-xl sm:text-3xl md:text-5xl"
            style={gradientTextStyle}
          >
            Code
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
