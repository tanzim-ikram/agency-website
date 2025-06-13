import React from "react";
import Image from "next/image";

const industries = [
  {
    id: 1,
    icon: "strategy.svg",
    title: "Strategy & Planning",
    description:
      "We begin with a deep understanding of your business goals and challenges. Our team conducts thorough research and analysis to create a strategic roadmap that aligns with your vision.",
  },
  {
    id: 2,
    icon: "agile.svg",
    title: "Agile Development",
    description:
      "Our development process is agile and adaptable, ensuring rapid iterations and continuous improvements. We work closely with clients to incorporate feedback and deliver high-quality, scalable solutions.",
  },
  {
    id: 3,
    icon: "integration.svg",
    title: "Seamless Integration",
    description:
      "We ensure smooth integration with your existing systems and infrastructure. Our goal is to make technology work for you without disruption, enhancing efficiency and performance.",
  },
  {
    id: 4,
    icon: "support.svg",
    title: "Ongoing Support & Growth",
    description:
      "Our partnership doesn't end at launch. We provide continuous monitoring, updates, and support to help your business grow and adapt to changing market demands.",
  },
];

const WhatWeDo = () => {
  return (
    <div>
      {/* Main content */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-15 sm:py-20 bg-transparent mt-10">
        {/* Heading */}
        <h2
          className="flex flex-col sm:flex-row justify-center items-center gap-3 font-sen font-normal text-[28px] sm:text-4xl lg:text-6xl text-zinc-900 mb-6 sm:mb-16 relative z-10"
          style={{ lineHeight: "110%" }}
        >
          <span className="relative flex items-center gap-4">
            Why We Do{" "}
            <div className="relative overflow-hidden w-32.5 h-12.5 sm:w-30 sm:h-17.5">
              <Image
                src="/about/Text-Img2.png"
                alt="Impact icon 3"
                fill
                className="inline rounded-full"
                priority
              />{" "}
            </div>
          </span>
          <span>What We Do</span>
        </h2>

        {/* Cards Grid */}
        <div className="min-w-[295px] min-h-[278px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 justify-center relative z-10 max-w-5xl mx-auto">
          {industries.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="rounded-xl p-6 bg-white/50 shadow-xs border border-violet-50 max-w-xl hover:bg-violet-50"
            >
              <Image
                src={`/about/${icon}`}
                alt={`${title} icon`}
                width={48}
                height={48}
                className="mb-3"
                priority
              />
              <h3
                className="font-medium text-zinc-900 text-2xl mb-3"
                style={{ lineHeight: "135%" }}
              >
                {title}
              </h3>
              <p
                className="text-lg text-zinc-500 font-normal leading-relaxed"
                style={{ lineHeight: "160%" }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 right-0 z-0">
          <Image
            src="/services/Ellipse.svg"
            alt="Background"
            height={1440}
            width={1440}
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
