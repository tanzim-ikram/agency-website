import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const ContactHero = () => {
  return (
    <div>
      <section className="relative bg-white flex flex-col items-center font-sen mb-10">
        <div className="absolute top-0 right-0 z-0">
          <Image
            src="/home/BG lines.png"
            alt="Background Line"
            height={1000}
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
        <div className="absolute -bottom-10 right-0 z-10">
          <Image
            src="/services/BG Gr Bottom.svg"
            alt="Background Gradient Bottom"
            height={2880}
            width={2050}
            priority
            className="pointer-events-none"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 text-center">
          <h1 className="flex justify-center items-center gap-4 font-sen font-normal text-6xl text-zinc-900 mb-11 relative z-10">
            <span>Contact our</span>
            <Image
              src="/contact/text-img1.png"
              alt="Friendly Icon"
              width={140}
              height={64}
              className="inline rounded-full"
              priority
            />
            <span className="text-zinc-500">Friendly team</span>
          </h1>

          <p className="text-black/60 font-figtree font-normal max-w-xl mx-auto text-center text-lg mb-20">
            Let us know how can we help you
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mb-10 z-10">
          {/* Card 1 */}
          <div className="flex flex-col items-start gap-10 w-[400px] h-[260px] p-10 flex-1 rounded-[24px] border border-[#E5E5E5] bg-white/30 backdrop-blur-[5px]">
            <Image
              src="/contact/chat.svg"
              alt="Chat"
              width={40}
              height={40}
            />
            <div>
              <h3 className="text-zinc-900 font-sen text-[24px] font-medium leading-[30px] mb-1">
                Chat to sales
              </h3>
              <p className="text-zinc-500 font-figtree text-[14px] font-normal leading-[24px] mb-2">
                Speak to our support team
              </p>
              <a
                href="mailto:support@email.com"
                className="text-lg font-figtree font-semibold leading-[24px] text-black/70 underline"
              >
                support@email.com
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start gap-10 w-[400px] h-[260px] p-10 flex-1 rounded-[24px] border border-[#E5E5E5] bg-white/30 backdrop-blur-[5px]">
            <Image
              src="/contact/location.svg"
              alt="Location"
              width={40}
              height={40}
            />
            <div>
              <h3 className="text-zinc-900 font-sen text-2xl font-medium leading-[30px] mb-1">
                Visit us
              </h3>
              <p className="text-zinc-500 font-figtree text-sm font-normal leading-[24px] mb-2">
                Visit our office
              </p>
              <a
                href="#"
                className="text-lg font-figtree font-semibold leading-[24px] text-black/70 underline"
              >
                View on Google map
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start gap-10 w-[400px] h-[260px] p-10 flex-1 rounded-[24px] border border-[#E5E5E5] bg-white/30 backdrop-blur-[5px]">
            <Image
              src="/contact/call.svg"
              alt="Call"
              width={40}
              height={40}
            />
            <div>
              <h3 className="text-zinc-900 font-sen text-2xl font-medium leading-[30px] mb-1">
                Call us
              </h3>
              <p className="text-zinc-500 font-figtree text-sm font-normal leading-[24px] mb-2">
                Mon-Fri 8am-5pm
              </p>
              <a
                href="tel:+880123456789"
                className="text-[18px] font-figtree font-semibold leading-[24px] text-black/70 underline"
              >
                +880 1234 56789
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactHero;