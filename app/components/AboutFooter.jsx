import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import ShortFooter from "./ShortFooter";

const AboutFooter = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-white">
        {/* Background images */}
        <Image
          src="/home/BG lines.png"
          alt="Background lines"
          width={1586}
          height={1000}
          className="absolute inset-0 object-cover pointer-events-none z-0"
          priority
        />
        <Image
          src="/about/BG gr top.svg"
          alt="Top gradient"
          width={1440}
          height={122}
          className="absolute top-0 left-0 object-cover pointer-events-none z-10"
          priority
        />
        <Image
          src="/about/Ellipse2.svg"
          alt="Ellipse background"
          width={1440}
          height={1440}
          className="absolute inset-0 object-contain pointer-events-none z-20"
          priority
        />

        {/* Main container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg-8 xl:px-0 py-15 sm:py-16 md:py-20 lg:py-30 flex md:flex-row flex-col items-center gap-8 sm:gap-16 lg:items-start">
          {/* Left Side */}
          <div className="flex flex-col gap-10">
            <h2 className="font-sen text-zinc-900 text-lg sm:text-4xl lg:text-6xl leading-tight font-normal">
              Get in touch{" "}
              <Image
                src="/about/about-text-img1.png"
                alt="Text Icon"
                width={140}
                height={64}
                className="inline-block align-middle rounded-full mx-2 sm:mx-4 w-17.5 h-12.5 sm:w-35 sm:h-16"
              />{" "}
              with us.
              <br />
              We're here to assist you
            </h2>

            <div className="mt-8 md:mt-25">
              <Image
                src="/about/AboutFooterImg.svg"
                alt="Footer Image"
                width={330}
                height={175}
                className=""
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-[420px] max-w-full flex flex-col gap-5"
          >
            <input
              type="text"
              placeholder="Name"
              required
              className="bg-white border border-black/10 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-figtree text-[rgba(0, 0, 0, 0.70)] font-normal leading-[160%]"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-white border border-black/10 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-figtree text-[rgba(0, 0, 0, 0.70)] font-normal leading-[160%]"
            />
            <input
              type="tel"
              placeholder="Phone number (Optional)"
              className="bg-white border border-black/10 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-figtree text-[rgba(0, 0, 0, 0.70)] font-normal leading-[160%]"
            />
            <textarea
              rows={4}
              placeholder="Your message"
              required
              className="bg-white border border-black/10 rounded-lg px-5 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-figtree text-[rgba(0, 0, 0, 0.70)] font-normal leading-[160%]"
            ></textarea>

            {/* Center-aligned button */}
            <div className="flex justify-center mt-8 md:mt-12">
              <button
                type="submit"
                className="w-[260px] sm:w-full bg-zinc-900 text-white text-lg font-figtree font-normal leading-[175%] px-7.5 py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-blue-600 transition"
              >
                Leave us a Message
                <Image
                  src="/icons/message.svg"
                  alt="Message"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </form>
        </div>

        <Image
          src="/about/BG Gr Bottom.svg"
          alt="Top gradient"
          width={1440}
          height={308}
          className="absolute bottom-50 left-0 object-cover pointer-events-none z-10"
          priority
        />
        <ShortFooter />
      </section>
    </div>
  );
};

export default AboutFooter;
