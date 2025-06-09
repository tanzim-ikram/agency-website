import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const gradientTextStyle = {
  background:
    "linear-gradient(130deg, #A299FA 10%, #3A93F8 29%, #7DB4F3 51%, #0B3EAA 69%)",
  border: "1px solid #fefefe",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const Industries = () => {
  return (
    <div>
      <section className="relative flex flex-col items-center py-8 sm:py-12 bg-white">
        {/* Heading */}
        <h1 className="flex flex-col sm:flex-row items-center justify-center gap-4 font-sen text-[28px] sm:text-[40px] md:text-[60px] text-zinc-900 mb-0 sm:mb-8 text-center w-full">
          <div className="flex items-center justify-center gap-4">
            <span>Turn Ideas</span>
            <span className="flex items-center justify-center gap-4">
              <Image
                src="/home/text-img3.png"
                alt="Text Img 3"
                width={120}
                height={70}
                className="inline object-cover rounded-full w-[90] h-[40] sm:w-[120] sm:h-[70]"
                priority
              />
            </span>
            <span>Into </span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <span>Impact</span>
            <span className="flex items-center justify-center gap-4">
              <Image
                src="/home/text-img4.png"
                alt="Text Img 4"
                width={120}
                height={70}
                className="inline object-cover rounded-full w-[90] h-[40] sm:w-[120] sm:h-[70]"
                priority
              />
            </span>
            <span>With Us</span>
          </div>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xs sm:max-w-sm md:max-w-2xl text-center font-normal font-figtree text-zinc-500 text-lg leading-[160%] py-8 sm:py-0 mb-0 sm:mb-10">
          We provide tailored solutions across industries, using innovative
          technology to drive growth and efficiency
        </p>

        {/* Button */}
        <button className="mb-4 px-7.5 py-2.5 flex items-center gap-2.5 rounded-full bg-zinc-900 font-semibold text-white font-figtree hover:bg-blue-600 transition z-30 leading-[175%] text-sm xs:text-base sm:text-lg">
          About Farasha Digital
          <Icon icon="lineicons:arrow-right" width="25" height="25" />
        </button>

        {/* Globe Container */}
        <div className="relative w-full max-w-sm sm:max-w-lg md:max-w-2xl h-[180px] xs:h-[220px] sm:h-[320px] md:h-[400px] mx-auto mt-6 sm:mt-10">
          {/* Ellipse background behind the globe */}
          <div className="absolute sm:-top-10 sm:-left-5 -top-22 -left-14 sm:w-180 sm:h-120 w-120 h-80 z-10">
            <Image  
              src="/home/ellipse3.png"
              alt="Ellipse Background"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

          {/* Globe Image */}
          <div className="relative w-full h-full z-20">
            <Image
              src="/home/globe.png"
              alt="Globe"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

          {/* Text bubbles */}
          {/* Creativity */}
          <div
            className="absolute z-30 top-8 left-0 sm:top-16 sm:-left-28 bg-white/40 backdrop-blur-xs rounded-full sm:px-11 sm:py-5 px-4 py-2 font-sen text-[28px] sm:text-[60px] leading-[120%]"
            style={gradientTextStyle}
          >
            Creativity
          </div>

          {/* Curiosity */}
          <div
            className="absolute z-30 bottom-6 left-8 sm:bottom-15 sm:-left-4 bg-white/40 backdrop-blur-xs rounded-full sm:px-11 sm:py-5 px-4 py-2 font-sen text-[28px] sm:text-[60px] leading-[120%]"
            style={gradientTextStyle}
          >
            Curiosity
          </div>

          {/* Code */}
          <div
            className="absolute z-30 top-18 right-10 sm:top-40 sm:right-0 bg-white/40 backdrop-blur-xs rounded-full sm:px-11 sm:py-5 px-4 py-2 font-sen text-[28px] sm:text-[60px] leading-[120%]"
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
