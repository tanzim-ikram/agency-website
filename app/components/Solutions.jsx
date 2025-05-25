import React from "react";
import Image from "next/image";

const industries = [
  {
    id: 1,
    icon: "fintech.svg",
    title: "Fintech",
    description:
      "We develop secure payment gateways, banking apps, and financial analytics platforms to enhance digital services.",
  },
  {
    id: 2,
    icon: "retail.svg",
    title: "E-commerce & Retail",
    description:
      "We create high-performance online stores, POS systems, and personalized shopping experiences.",
  },
  {
    id: 3,
    icon: "health.svg",
    title: "Healthcare",
    description:
      "We design HIPAA-compliant platforms, telemedicine apps, and patient management systems for secure healthcare solutions.",
  },
  {
    id: 4,
    icon: "education.svg",
    title: "Education",
    description:
      "We build e-learning platforms, virtual classrooms, and learning management systems to enhance educational access.",
  },
  {
    id: 5,
    icon: "media.svg",
    title: "Media & Entertainment",
    description:
      "We create streaming platforms, social media apps, and interactive content solutions for engaging user experiences.",
  },
  {
    id: 6,
    icon: "logistic.svg",
    title: "Logistics & Supply Chain",
    description:
      "We develop real-time tracking systems, warehouse management platforms, and delivery solutions to streamline operations.",
  },
];

const Solutions = () => {
  return (
    <div>
      {/* Main content */}
      <section className="relative max-w-7xl mx-auto px-6 py-16 bg-white overflow-hidden">
        {/* Background images */}
        <div className="absolute top-0 right-0 z-0">
          <Image
            src="/home/BG_Ellipse1.svg"
            alt="Background"
            height={1210}
            width={2878}
            className=""
            priority
          />
        </div>
        {/* Heading */}
        <h2 className="flex justify-center items-center gap-2 font-sen text-5xl text-zinc-900 mb-4 z-10 relative">
          Industries We{" "}
          <Image
            src="/home/text-img4.png"
            alt="Impact icon 3"
            width={80}
            height={40}
            className="inline rounded-full"
            priority
          />{" "}
          Empower
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-center font-figtree text-zinc-500 text-lg mb-14 font-normal z-10 relative">
          We provide tailored solutions across industries, using innovative
          technology to drive growth and efficiency.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10 relative">
          {industries.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="rounded-xl p-6 bg-white shadow-xs border border-violet-50"
            >
              <Image
                src={`/home/${icon}`}
                alt={`${title} icon`}
                width={40}
                height={40}
                className="mb-4"
                priority
              />
              <h3 className="font-medium text-zinc-900 text-lg mb-2">
                {title}
              </h3>
              <p className="text-sm text-zinc-500 font-normal leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Solutions;
