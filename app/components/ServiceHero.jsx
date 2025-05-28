import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const ServiceHero = () => {
  return (
    <div>
      <section className="relative bg-white min-h-[420px] top-10 flex items-center font-sen mb-50">
        <div className="absolute top-0 right-0 z-0">
          <Image
            src="/home/BG lines.png"
            alt="Background Line"
            height={2880}
            width={2400}
            priority
            className="pointer-events-none"
          />
        </div>

        {/* Overlay Images */}
        <Image
          src="/home/overlay3.png"
          alt="left overlay"
          width={250}
          height={950}
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 z-0 hidden md:block"
        />
        <Image
          src="/home/overlay4.png"
          alt="right overlay"
          width={250}
          height={950}
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-0 hidden md:block"
        />

        {/* Overlay BG Gr Bottom.svg at bottom right */}
        <div className="absolute -bottom-50 right-0 z-10">
          <Image
            src="/services/BG Gr Bottom.svg"
            alt="Background Gradient Bottom"
            height={2880}
            width={2050}
            priority
            className=""
          />
        </div>

        {/* Hero image on right middle */}
        <div className="absolute right-16 -bottom-50 -translate-y-1/2 z-10">
          <Image
            src="/services/hero-img.svg"
            alt="Hero Illustration"
            height={305}
            width={605}
            priority
            className=""
          />
        </div>

        {/* Left content */}
        <div className="max-w-3xl relative z-10 px-5 lg:px-8 xl:px-[8%]">
          <h1 className="mt-30 text-5xl md:text-6xl font-normal flex flex-wrap items-center gap-6 text-zinc-900">
            <span className="text-neutral-400 font-normal whitespace-nowrap">
              Engineering Objectives for
            </span>

            <span className="flex items-center gap-4 whitespace-nowrap">
              <Image
                src="/services/text-img1.png"
                alt="Text image"
                width={120}
                height={40}
                className="inline rounded-full"
              />
              Ambitious Product Teams
            </span>
          </h1>

          <p className="mt-8 text-zinc-500 font-figtree font-normal max-w-2xl mx-auto font-figtree text-lg mb-14">
            We're a full service web, mobile and software application
            development agency that creates solutions tailored to the demands of
            your business.
          </p>

          <button className="bg-zinc-900 text-white rounded-full px-12 py-4 text-lg font-semibold flex items-center gap-2 hover:bg-blue-600 transition">
            Get a qoute
            <Icon
              icon="eva:diagonal-arrow-right-up-fill"
              width="24"
              height="24"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceHero;
