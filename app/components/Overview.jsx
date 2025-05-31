import React from "react";
import Image from "next/image";

const Overview = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-52 py-20 bg-white relative">
        <h2
          className="font-sen text-zinc-900 text-[48px] font-normal mb-10 text-center"
          style={{ lineHeight: "140%" }}
        >
          Overview
        </h2>
        <p
          className="font-figtree text-zinc-900 text-2xl font-medium max-w-3xl mx-auto mb-8 text-center"
          style={{ lineHeight: "135%" }}
        >
          An Innovative Front-End Development Company
        </p>

        <p
          className="text-zinc-500 max-w-4xl mx-auto mb-6 font-normal text-lg text-left"
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
          className="text-zinc-500 max-w-4xl mx-auto font-normal text-lg text-left"
          style={{ lineHeight: "160%" }}
        >
          At abc Technology, our front-end developers are not just coding;
          they're crafting state-of-the-art digital experiences in front-end
          development.
        </p>

        <div className="flex justify-center flex-wrap gap-6 items-stretch mt-10">
          {/* Left large image */}
          <div
            className="flex-1 min-w-[320px] max-w-[600px] rounded-3xl overflow-hidden"
            style={{ height: "414px" }}
          >
            <Image
              src="/services/overview1.png"
              alt="Overview 1"
              width={600}
              height={414} // change height to match container
              className="object-cover rounded-lg w-full h-full"
            />
          </div>

          {/* Right two stacked images */}
          <div className="flex flex-col gap-6 flex-1 min-w-[280px] max-w-[400px]">
            <div
              className="rounded-lg overflow-hidden"
              style={{ height: "195px" }}
            >
              <Image
                src="/services/overview2.png"
                alt="Overview 2"
                width={400}
                height={195}
                className="object-cover rounded-3xl w-full h-full"
              />
            </div>
            <div
              className="rounded-3xl overflow-hidden"
              style={{ height: "195px" }}
            >
              <Image
                src="/services/overview3.png"
                alt="Overview 3"
                width={400}
                height={195}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
