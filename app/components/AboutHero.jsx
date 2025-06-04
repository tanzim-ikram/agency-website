import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const AboutHero = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-white w-full">
        {/* Background lines */}
        <Image
          src="/home/BG lines.png"
          alt="BG Lines"
          width={1586}
          height={1000}
          className="absolute inset-0 object-cover z-0 pointer-events-none opacity-80"
        />
        <Image
          src="/about/BG gr top.svg"
          alt="BG Top"
          width={1440}
          height={186}
          className="absolute inset-0 object-cover top-0 left-0 z-10 pointer-events-none"
        />

        {/* Main content container */}
        <div className="relative z-20">
          {/* Text Section wrapper with padding */}
          <div className="px-5 md:px-10 xl:px-[16%] pt-24 max-w-7xl mt-10">
            <h1
              className="font-sen text-zinc-900 text-6xl font-normal leading-tight"
              style={{ lineHeight: "110%" }}
            >
              Let's Get <br />
              <span className="text-zinc-500">To</span> Know
              <Image
                src="/about/Text-Img1.png"
                alt="Handshake"
                width={150}
                height={80}
                className="inline-block mx-2 rounded-full"
              />
              Each Other
            </h1>
            <p
              className="font-figtree text-zinc-500 font-normal text-lg leading-relaxed mt-6 max-w-lg"
              style={{ lineHeight: "160%" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We
              are a passionate team of developers, designers, and strategists
              committed to transforming businesses with cutting-edge technology.
              Our mission is to deliver scalable, secure, and data-driven
              solutions that empower businesses to thrive in a fast-changing
              digital world.
            </p>

            {/* Recognized by */}
            <div className="pt-60 relative">
              <p className="text-lg text-black/60 font-figtree font-semibold mb-2">
                RECOGNIZED BY:
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/about/clutch.png"
                  alt="Clutch Logo"
                  width={60}
                  height={60}
                />
                <div>
                  <div className="text-yellow-400 text-xl flex justify-center gap-1 items-center">
                    <p className="text-gray-900 font-bold text-lg mr-2">5.0</p>
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
                  </div>
                  <p className="text-zinc-600 font-figtree font-normal text-lg">
                    Our rating on Clutch
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay Image */}
          <div className="absolute -z-10 -bottom-2 right-0">
            <Image
              src="/about/BG Gr Bottom.svg"
              alt="BG Bottom"
              width={1440}
              height={388}
            />
          </div>

          {/* Hero Image */}
          <div className="absolute -z-10 -top-10 right-0">
            <Image src="/about/BG.svg" alt="Hero" width={705} height={631} />
          </div>
        </div>

        <div className="relative z-20 overflow-hidden bg-white">
          <Image
            src="/about/HeroImage.png"
            alt="Hero"
            width={1440}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
