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
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background images confined to the Solutions section */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/home/BG shapes.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
        />
      </div>

      {/* Other background images (optional, if you want them visible on top of shapes) */}
      <div className="absolute top-0 right-0 -z-10">
        <Image
          src="/home/BG_Ellipse1.svg"
          alt="Background Ellipse 1"
          height={1210}
          width={2878}
          priority
        />
      </div>
      <div className="absolute bottom-0 right-0 -z-10">
        <Image
          src="/home/BG_Ellipse2.svg"
          alt="Background Ellipse 2"
          height={482}
          width={1572}
          priority
        />
      </div>

      {/* Main content */}
      <section className="relative max-w-7xl mx-auto px-6 py-16 bg-transparent mb-10 mt-10">
        {/* Heading */}
        <h2 className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 font-sen text-[28px] sm:text-6xl text-zinc-900 relative z-10 leading-[110%]">
          <div className="flex flex-row items-center gap-4">
            Industries We{" "}
            <Image
              src="/home/text-img4.png"
              alt="Impact icon 3"
              width={120}
              height={70}
              className="inline object-cover rounded-full z-10 w-[90] h-[50] sm:w-[120] sm:h-[70]"
              priority
            />{" "}
          </div>
          <div>Empower</div>
        </h2>

        {/* Subtitle */}
        <p className="hidden sm:block max-w-2xl mx-auto text-center font-figtree text-zinc-500 text-lg mt-8 mb-20 font-normal relative z-10">
          We provide tailored solutions across industries, using innovative
          technology to drive growth and efficiency.
        </p>
        <p className="sm:hidden max-w-sm mx-auto text-center font-figtree text-zinc-500 text-lg mt-6 mb-8 font-normal relative z-10">
          At <span className="font-semibold">Farasha Digital</span>, we use a
          modern technology stack to build scalable, high-performance solutions,
          ensuring our products meet the highest industry standards.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5 relative z-10">
          {industries.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="rounded-xl p-6 bg-white/50 shadow-xs border border-violet-50 hover:bg-violet-50"
            >
              <Image
                src={`/home/${icon}`}
                alt={`${title} icon`}
                width={50}
                height={50}
                className="mb-3"
                priority
              />
              <h3 className="font-medium text-zinc-900 text-2xl mb-3 leading-[135%]">
                {title}
              </h3>
              <p className="text-lg text-zinc-500 font-normal leading-[160%]">
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
