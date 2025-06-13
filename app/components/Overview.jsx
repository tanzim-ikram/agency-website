import React from "react";
import Image from "next/image";

const Overview = () => {
  return (
    <div className="w-full">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-52 py-15 bg-white relative">
        <div className="flex flex-col items-center">
          <h2
            className="font-sen text-zinc-900 text-[28px] sm:text-[48px] font-normal mb-8 sm:mb-10 text-center"
            style={{ lineHeight: "140%" }}
          > 
            Overview
          </h2>
          <p
            className="font-figtree text-zinc-900 text-lg sm:text-2xl font-medium max-w-2xs sm:max-w-2xl mx-auto mb-8 text-center"
            style={{ lineHeight: "135%" }}
          >
            An Innovative Front-End Development Company
          </p>

          <p
            className="text-zinc-500 max-w-xl sm:max-w-4xl md:max-w-5xl mx-auto px-4 sm:px-6 mb-6 font-normal text-lg text-left"
            style={{ lineHeight: "160%" }}
          >
            At abc Technology, our front-end developers are not just coding;
            they're crafting state-of-the-art digital experiences in front-end
            development. Our strength is in crafting stunning websites and
            responsive applications with an impressive user interface (UI). Our
            dedicated team guarantees an app that excels across multiple
            platforms, delivering quality, speed, stability, and a seamless user
            experience.
          </p>

          <p
            className="text-zinc-500 max-w-xl sm:max-w-4xl md:max-w-5xl mx-auto px-4 sm:px-6 font-normal text-lg text-left"
            style={{ lineHeight: "160%" }}
          >
            At abc Technology, our front-end developers are not just coding;
            they're crafting state-of-the-art digital experiences in front-end
            development.
          </p>

          <div className="flex justify-center flex-wrap gap-4 sm:gap-6 lg:gap-6 items-stretch mt-10 px-4 sm:px-6 w-full">
            {/* Left large image */}
            <div
              className="flex-1 min-w-[150px] sm:min-w-[250px] md:min-w-[280px] lg:min-w-[300px] xl:min-w-[320px] max-w-[600px] rounded-3xl overflow-hidden"
              style={{ height: "min(414px, 59vw)" }}
            >
              <Image
                src="/services/overview1.png"
                alt="Overview 1"
                width={600}
                height={414}
                className="object-cover rounded-lg w-full h-full"
                priority
              />
            </div>

            {/* Right two stacked images */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-6 flex-1 min-w-[150px] sm:min-w-[180px] max-w-[400px]">
              <div
                className="rounded-lg overflow-hidden"
                style={{ height: "min(195px, 28vw)" }}
              >
                <Image
                  src="/services/overview2.png"
                  alt="Overview 2"
                  width={400}
                  height={195}
                  className="object-right object-cover sm:object-cover rounded-3xl w-full h-full"
                  priority
                />
              </div>
              <div
                className="rounded-3xl overflow-hidden"
                style={{ height: "min(195px, 28vw)" }}
              >
                <Image
                  src="/services/overview3.png"
                  alt="Overview 3"
                  width={400}
                  height={195}
                  className="object-bottom-left object-cover sm:object-cover rounded-lg w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
