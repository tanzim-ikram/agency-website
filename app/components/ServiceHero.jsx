import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const ServiceHero = () => {
  return (
    <div className="relative py-10">
      <section className="relative bg-white py-8 sm:py-20 flex flex-col-reverse lg:flex-row items-center font-sen min-h-[420px]">
        {/* Background Lines */}
        <div className="absolute top-0 right-0 z-0">
          <Image
            src="/home/BG lines.png"
            alt="Background Line"
            height={2880}
            width={2400}
            priority
            className="pointer-events-none h-160 object-cover"
          />
        </div>

        {/* Desktop Overlays */}
        <Image
          src="/home/overlay3.png"
          alt="left overlay"
          width={150}
          height={950}
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 z-0 hidden md:block"
        />
        <Image
          src="/home/overlay4.png"
          alt="right overlay"
          width={150}
          height={950}
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-0 hidden md:block"
        />
        <div className="hidden sm:block absolute bottom-0 right-0 z-10 pointer-events-none">
          <Image
            src="/services/BG Gr Bottom.svg"
            alt="Background Gradient Bottom"
            height={388}
            width={1600}
            priority
          />
        </div>
        <div className="absolute sm:hidden bottom-45 right-0 z-10 pointer-events-none">
          <Image
            src="/home/BG Gr Bottom2.png"
            alt="Background Gradient Bottom"
            height={300}
            width={500}
            priority
            className="w-200 h-150"
          />
        </div>

        {/* Hero Image */}
        <div className="relative z-10 flex justify-center mt-10 lg:mt-0 sm:absolute sm:right-25 sm:-bottom-40 sm:translate-y-[-50%]">
          <Image
            src="/services/hero-img.svg"
            alt="Hero Illustration"
            height={305}
            width={605}
            priority
          />
        </div>

        {/* Left Content */}
        <div className="relative z-10 w-full max-w-3xl sm:max-w-6xl px-4 pt-12 sm:pt-20 lg:px-8 xl:px-[8%] text-center sm:text-left">
          {/* Mobile Heading */}
          <div className="block sm:hidden">
            <h1 className="font-sen text-[28px] font-normal text-neutral-400 leading-[110%] mb-3">
              Engineering Objectives for
            </h1>
            <div className="flex justify-center items-center gap-3 mb-3">
              <Image
                src="/services/text-img1.png"
                alt="Text image"
                width={180}
                height={40}
                className="object-cover rounded-full h-10 w-45"
              />
              <span className="text-[28px] font-normal text-zinc-900">
                Ambitious
              </span>
            </div>
            <h1 className="text-[28px] font-normal text-zinc-900">
              Product Teams
            </h1>
          </div>

          {/* Desktop Heading */}
          <h1 className="hidden sm:flex flex-wrap items-center gap-4 font-sen text-[28px] sm:text-6xl font-normal text-zinc-900 leading-[110%] max-w-5xl mx-auto sm:mx-0">
            <span className="text-neutral-400">Engineering Objectives for</span>
            <div className="flex flex-row items-center gap-3">
              <span className="flex items-center gap-4">
                <Image
                  src="/services/text-img1.png"
                  alt="Text image"
                  width={140}
                  height={60}
                  className="inline rounded-full w-[140px] h-[60px] object-cover"
                />
              </span>
              <span className="text-zinc-900">Ambitious Product Teams</span>
            </div>
          </h1>

          {/* Description */}
          <p className="mt-6 sm:mt-8 text-zinc-500 font-figtree text-lg font-normal leading-[160%] max-w-xs sm:max-w-lg mx-auto lg:mx-0">
            We're a full service web, mobile and software application
            development agency that creates solutions tailored to the demands of
            your business.
          </p>

          {/* CTA Button */}
          <div className="mt-6 sm:mt-8 mb-10">
            <button className="bg-zinc-900 text-white rounded-full px-7.5 py-3.5 text-lg font-semibold flex items-center justify-center gap-2.5 hover:bg-blue-600 transition leading-[175%] mx-auto lg:mx-0">
              Get a Quote
              <Icon icon="mage:arrow-up-right" width={24} height={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceHero;
