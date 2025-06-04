import React from "react";
import Image from "next/image";

const industries = [
  {
    id: 1,
    icon: "time.svg",
    title: "Flexible working hours",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    icon: "remote.svg",
    title: "100% Remote office",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    icon: "compensation.svg",
    title: "Compensation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    icon: "health.svg",
    title: "Premium healthcare",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const Benefits = () => {
  return (
    <div>
      {/* Main content */}
      <section className="relative px-6 py-30 bg-transparent mt-10">
        <div className="absolute top-0 left-0 -z-10">
          <Image
            src="/career/BG1.svg"
            alt="Background Ellipse 1"
            height={514}
            width={628}
            priority
            className="pointer-events-none"
          />
        </div>
        <div className="absolute bottom-0 right-0 -z-10">
          <Image
            src="/career/BG2.svg"
            alt="Background Ellipse 1"
            height={471}
            width={433}
            priority
            className="pointer-events-none"
          />
        </div>
        {/* Heading */}
        <h2
          className="flex justify-center items-center gap-4 font-sen font-normal text-6xl text-zinc-900 mb-16 relative z-10"
          style={{ lineHeight: "110%" }}
        >
          Our perks and{" "}
          <Image
            src="/career/text-img1.png"
            alt="Impact icon 3"
            width={120}
            height={80}
            className="inline rounded-full"
            priority
          />{" "}
          Benefits
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center relative z-10 max-w-5xl mx-auto">
          {industries.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="rounded-xl p-6 bg-white/50 shadow-xs border border-violet-50 max-w-xl hover:bg-violet-50"
            >
              <Image
                src={`/career/${icon}`}
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
      </section>
    </div>
  );
};

export default Benefits;
