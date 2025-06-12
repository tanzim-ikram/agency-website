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
      <section className="relative px-6 py-15 md:py-29.5 bg-transparent ">
        <div className="absolute top-0 left-0 -z-10">
          <Image
            src="/career/BG1.svg"
            alt="Background Ellipse 1"
            height={514}
            width={628}
            priority
            className="pointer-events-none hidden lg:block"
          />
        </div>
        <div className="absolute bottom-0 right-0 -z-10">
          <Image
            src="/career/BG2.svg"
            alt="Background Ellipse 1"
            height={471}
            width={433}
            priority
            className="pointer-events-none hidden lg:block"
          />
        </div>
        {/* Heading Desktop*/}
        <h2
          className="hidden lg:flex justify-center items-center gap-4 font-sen font-normal text-6xl text-zinc-900 mb-16 relative z-10"
          style={{ lineHeight: "110%" }}
        >
          Our perks and{" "}
          <Image
            src="/career/text-img1.png"
            alt="Impact icon 3"
            width={140}
            height={70}
            className="inline rounded-full"
            priority
          />{" "}
          Benefits
        </h2>

        {/* Heading Mobile*/}
        <h2
          className="lg:hidden flex flex-col justify-center items-center gap-2 font-sen font-normal text-[28px] text-zinc-900 mb-16 relative z-10"
          style={{ lineHeight: "110%" }}
        >
          <span>
            Our perks{" "}
            <Image
              src="/career/text-img1.png"
              alt="Impact icon 3"
              width={168}
              height={50}
              className="inline rounded-full object-cover w-42 h-12.5"
              priority
            />
          </span>
          <span>and Benefits</span>
        </h2>

        <div className="absolute sm:hidden -top-65 right-0 -z-10">
          <Image
            src="/services/BG2.svg"
            alt="Background"
            height={200}
            width={300}
            priority
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center relative z-10 max-w-5xl mx-auto backdrop-blur-sm">
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
      </section>
    </div>
  );
};

export default Benefits;
