import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const AboutHero = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-white w-full h-[1250px] sm:h-auto">
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
          className="absolute inset-0 object-cover top-0 left-0 z-20 pointer-events-none"
        />

        {/* Main content container */}
        <div className="relative z-20">
          {/* Text Section wrapper with padding */}
          <div className="px-5 md:px-10 xl:px-[16%] pt-24 max-w-7xl mt-10">
            <h1
              className="font-sen text-zinc-900 text-[36px] sm:text-6xl font-normal leading-[110%] text-left px-4 sm:px-6 md:px-8"
              style={{ lineHeight: "110%" }}
            >
              Let's Get
              <br className="hidden sm:block" />
              <span className="text-zinc-500">To</span> Know
              <div className="inline-block mt-2 sm:mt-0">
                <Image
                  src="/about/Text-Img1.png"
                  alt="Handshake"
                  width={140}
                  height={80}
                  className="inline-block sm:mr-4 sm:ml-4 mr-3 ml-0 object-cover rounded-full sm:w-35 w-37.5 sm:h-16  h-12.5"
                />
                Each Other
              </div>
            </h1>
            <p
              className="font-figtree text-zinc-500 font-normal text-lg leading-relaxed mt-6 max-w-lg px-4 sm:px-6 md:px-8"
              style={{ lineHeight: "160%" }}
            >
              <span className="hidden md:inline">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              We are a passionate team of developers, designers, and strategists
              committed to transforming businesses with cutting-edge technology.
              Our mission is to deliver scalable, secure, and data-driven
              solutions that empower businesses to thrive in a fast-changing
              digital world.
            </p>

            {/* Clutch Rating Mobile*/}
            <div className="relative md:hidden sm:absolute flex flex-col items-center justify-center w-full text-center z-30 gap-2 p-6">
              <p className="text-lg text-black/60 font-figtree font-semibold">
                RECOGNIZED BY:
              </p>
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

            {/* Recognized by Desktop*/}
            <div className="pt-60 relative hidden md:block">
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
          <div className="hidden sm:block absolute -z-10 -bottom-2 right-0">
            <Image
              src="/about/BG Gr Bottom.svg"
              alt="BG Bottom"
              width={1440}
              height={388}
            />
          </div>

          {/* Hero Image Desktop*/}
          <div className="hidden md:block absolute -z-10 top-0 right-0">
            <Image src="/about/BG.svg" alt="Hero" width={705} height={631} />
          </div>
          {/* Hero Image Mobile*/}
          <div className="md:hidden absolute -z-10 -bottom-105 right-12">
            <Image 
            src="/about/BG2.svg" 
            alt="Hero" 
            width={700} 
            height={500}
            className="h-100 w-120 object-cover"
            />
          </div> 
        </div>

        <div className="absolute md:relative z-20 bottom-10 overflow-hidden">
          <Image
            src="/about/HeroImage3.png"
            alt="Hero"
            width={1440}
            height={600}
            className="sm:w-full sm:h-auto h-70"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
