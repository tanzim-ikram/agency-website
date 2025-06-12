import React from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    text: "We begin with a deep understanding of your business goals and challenges. Our team conducts thorough research and analysis to create a strategic roadmap.",
  },
  {
    id: 2,
    text: "We begin with a deep understanding of your business goals and challenges. Our team conducts thorough research and analysis to create a strategic roadmap.",
  },
  {
    id: 3,
    text: "We begin with a deep understanding of your business goals and challenges. Our team conducts thorough research and analysis to create a strategic roadmap.",
  },
  {
    id: 4,
    text: "We begin with a deep understanding of your business goals and challenges. Our team conducts thorough research and analysis to create a strategic roadmap.",
  },
];

const demotext = "At abc Technology, our front-end developers are not just coding; they're crafting state-of-the-art digital experiences in front-end development. Our strength is in crafting stunning websites and responsive applications with an impressive user interface (UI). Our dedicated team guarantees an app that excels across multiple platforms, delivering quality, speed, stability, and a seamless user experience."

const Process = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-15 sm:py-16 text-center overflow-hidden">
      {/* Background Ellipse */}
      <div className="absolute top-0 right-0 z-0">
        <Image
          src="/home/BG_Ellipse1.svg"
          alt="Background Ellipse"
          width={1440}
          height={1440}
          className=""
          priority
        />
      </div>

      {/* Title & Subtitle */}
      <div className="relative flex flex-col max-w-4xl mx-auto text-center mb-4 sm:mb-16 z-10 gap-6 sm:gap-10">
        <h1
          className="font-sen text-[28px] sm:text-4xl md:text-5xl font-normal text-zinc-900"
          style={{ lineHeight: "140%" }}
        >
          Our process
        </h1>
        <p
          className="hidden sm:block font-figtree text-zinc-900 text-lg md:text-2xl font-medium"
          style={{ lineHeight: "135%" }}
        >
          Journey Through Our Development Process
        </p>
        <p
          className="font-figtree text-lg text-left text-zinc-500 font-normal"
          style={{ lineHeight: "160%" }}
        >
          At abc Technology, our front-end developers are not just coding;
          they're crafting state-of-the-art digital experiences in front- and
          development. Our strength is in crafting stunning websites and
          responsive applications with an impressive user interface (UI). Our
          dedication to guarantees an app that excels across multiple platforms,
          delivering quality, speed, stability, and a seamless user experience.
        </p>
        <p
          className="sm:hidden font-figtree text-zinc-900 text-lg md:text-2xl px-30 sm:px-0 font-medium"
          style={{ lineHeight: "135%" }}
        >
          Journey Through Our Development Process
        </p>
      </div>

      {/* Mobile layout: Vertical Timeline */}
      <div className="block md:hidden relative w-full max-w-xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {steps.map(({ id, text }) => (
            <div
              key={id}
              className="relative w-full flex flex-col items-center text-center"
            >
              {/* Number circle */}
              <div
                className="flex w-15 h-15 rounded-full backdrop-blur-xs items-center justify-center text-zinc-900 font-semibold text-xl font-figtree mb-3 z-10"
                style={{
                  background:
                    "linear-gradient(to bottom right, #FEF8FF 0%, #E3ECFF 40%, #CDCAFF 100%)",
                }}
              >
                {id}
              </div>
              {/* Text */}
              <p
                className="font-figtree text-zinc-500 text-lg max-w-md leading-[160%] mb-8"
              >
                {demotext}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout: vertical timeline with centered merged cards */}
      <div className="hidden md:block relative w-full max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div
          className="absolute left-1/2 top-0 w-2 h-268 -translate-x-1/2 opacity-50 z-0"
          style={{
            background:
              "linear-gradient(to bottom right, #FEF8FF 0%, #E3ECFF 40%, #CDCAFF 100%)",
          }}
        />
        <div className="space-y-16">
          {steps.map(({ id, text }, i) => {
            const isLeft = i % 2 !== 0;
            return (
              <div
                key={id}
                className="relative flex justify-center items-center min-h-[100px]"
                style={{ minHeight: 88 }}
              >
                <div
                  className={`bg-white/20 border border-zinc-200 rounded-full shadow-sm flex items-center justify-between px-6 py-6 w-[480px] overflow-hidden ${
                    isLeft
                      ? "-ml-85 pr-10 mt-16 justify-end" // aligns card right side so that circle is on vertical line
                      : "-mr-85 pl-10 mt-16 justify-start" // aligns card left side so that circle is on vertical line
                  }`}
                >
                  {isLeft ? (
                    <>
                      {/* Text left side */}
                      <div className="flex-1 text-left pr-6 pl-10">
                        <p className="font-figtree text-zinc-500 text-sm leading-relaxed">
                          {text}
                        </p>
                      </div>
                      {/* Number circle on right edge */}
                      <div
                        className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-zinc-900 font-semibold text-2xl font-figtree"
                        style={{
                          background:
                            "linear-gradient(to bottom right, #FEF8FF 0%, #E3ECFF 40%, #CDCAFF 100%)",
                        }}
                      >
                        {id}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Number circle on left edge */}
                      <div
                        className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-zinc-900 font-semibold text-2xl font-figtree"
                        style={{
                          background:
                            "linear-gradient(to bottom right, #FEF8FF 0%, #E3ECFF 40%, #CDCAFF 100%)",
                        }}
                      >
                        {id}
                      </div>
                      {/* Text right side */}
                      <div className="flex-1 text-left pl-6 pr-10">
                        <p className="font-figtree text-zinc-500 text-sm font-normal leading-relaxed">
                          {text}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom paragraph */}
      <p
        className="font-figtree text-lg text-zinc-500 max-w-4xl mx-auto mt-10 md:mt-30 leading-relaxed text-left mb-6"
        style={{ lineHeight: "160%" }}
      >
        At abc Technology, our front-end developers are not just coding; they're
        crafting state-of-the-art digital experiences in front- and development.
        Our strength is in crafting stunning websites and responsive
        applications with an impressive user interface (UI). Our dedicated team
        guarantees an app
      </p>
    </div>
  );
};

export default Process;
