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
      <section className="relative max-w-7xl mx-auto px-6 py-20 bg-transparent mt-10">
        {/* Heading */}
        <h2
          className="flex justify-center items-center gap-4 font-sen font-normal text-6xl text-zinc-900 mb-16 relative z-10"
          style={{ lineHeight: "110%" }}
        >
          Why We Do{" "}
          <Image
            src="/about/text-img2.png"
            alt="Impact icon 3"
            width={120}
            height={80}
            className="inline rounded-full"
            priority
          />{" "}
          What We Do
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center relative z-10 max-w-5xl mx-auto">
          {industries.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="rounded-xl p-6 bg-white shadow-xs border border-violet-50 max-w-xl"
            >
              <Image
                src={`/about/${icon}`}
                alt={`${title} icon`}
                width={48}
                height={48}
                className="mb-4"
                priority
              />
              <h3
                className="font-medium text-zinc-900 text-2xl mb-2"
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
