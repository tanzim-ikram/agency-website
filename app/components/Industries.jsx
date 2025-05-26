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
      <section className="relative flex flex-col items-center py-10 mt-20 bg-white">
        {/* Heading */}
        <h1 className="flex items-center gap-2 font-sen text-5xl text-zinc-900 mb-8">
          Turn Ideas{" "}
          <Image
            src="/home/text-img3.png"
            alt="Text Img 3"
            width={80}
            height={40}
            className="inline rounded-full"
            priority
          />{" "}
          Into Impact{" "}
          <Image
            src="/home/text-img4.png"
            alt="Text Img 4"
            width={80}
            height={40}
            className="inline rounded-full"
            priority
          />{" "}
          With Us
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-center font-normal font-figtree text-zinc-500 text-lg mb-10">
          We provide tailored solutions across industries, using innovative
          technology to drive growth and efficiency
        </p>

        {/* Button */}
        <button className="mb-4 px-6 py-2 flex items-center gap-2 rounded-full bg-zinc-900 font-semibold text-white font-figtree hover:bg-blue-600 transition z-30">
          About Farasha Digital
          <Icon icon="lineicons:arrow-right" width="25" height="25" />
        </button>

        {/* Globe Container */}
        <div className="relative w-120 h-100">
          {/* Ellipse background behind the globe */}
          <div className="absolute -top-10 -left-30 w-180 h-120 z-10">
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
            className="absolute z-30 top-25 -left-30 bg-white/40 backdrop-blur-xs rounded-full px-6 py-4 font-sen text-5xl"
            style={gradientTextStyle}
          >
            Creativity
          </div>

          {/* Curiosity */}
          <div
            className="absolute z-30 bottom-20 -left-9 bg-white/40 backdrop-blur-xs rounded-full px-6 py-4 font-sen text-5xl"
            style={gradientTextStyle}
          >
            Curiosity
          </div>

          {/* Code */}
          <div
            className="absolute z-30 top-39 -right-10 bg-white/40 backdrop-blur-xs rounded-full px-6 py-4 font-sen text-5xl"
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
