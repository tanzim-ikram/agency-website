import React from "react";
import Image from "next/image";

const industries = [
  {
    id: 1,
    icon: "target.svg",
    title: "Outcome-focused development",
    description:
      "Outcome is important. Rather than just closing tickets in Jira, we try to optimize business processes, reduce expenses with just choosing right tech stack &amp; logic.",
  },
  {
    id: 2,
    icon: "strong.svg",
    title: "Strong codebase for development",
    description:
      "On most projects we try to talk to users, understand their pains and wants. This helps us create the best design and solution.",
  },
  {
    id: 3,
    icon: "bar.svg",
    title: "Regular reports and demos",
    description:
      "You will always know the status of the project (plan vs fact), you will have access to all documentation &amp; can reach a team member in Slack directly.",
  },
  {
    id: 4,
    icon: "fire.svg",
    title: "Hiring top 1% developers",
    description:
      "We screen 100s of candidates before selecting the best talent there is.",
  },
];

const Pros = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background images confined to the Solutions section */}
      <div className="hidden sm:absolute top-0 -right-5 -z-10">
        <Image
          src="/services/BG1.svg"
          alt="Background"
          height={850}
          width={565}
          priority
        />
      </div>
      <div className="absolute sm:hidden -top-80 right-0 -z-10">
        <Image
          src="/services/BG2.svg"
          alt="Background"
          height={300}
          width={400}
          priority
        />
      </div>

      {/* Main content */}
      <section className="relative max-w-7xl mx-auto px-6 py-10 md:py-16 bg-transparent mb-20 mt-10">
        {/* Heading */}
        <h2 className="flex justify-center items-center gap-4 font-sen font-normal text-[28px] sm:text-5xl md:text-6xl text-zinc-900 mb-16 relative z-10">
          All pros{" "}
          <Image
            src="/services/text-img2.png"
            alt="Impact icon"
            width={180}
            height={70}
            priority
            className="object-none object-left rounded-full  w-[90] h-[50] sm:w-[180] sm:h-[70]"
          />{" "}
          No cons
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 justify-items-center relative z-10 max-w-5xl mx-auto px-4">
          {industries.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="rounded-xl p-6 bg-white/50 backdrop-blur-sm shadow-xs border border-violet-50 w-full min-w-[350px] hover:bg-violet-50 transition-colors duration-300"
            >
              <Image
                src={`/services/${icon}`}
                alt={`${title} icon`}
                width={48}
                height={48}
                className="mb-3"
                priority
              />
              <h3
                className="font-medium font-figtree text-zinc-900 text-2xl mb-3"
                style={{ lineHeight: "135%" }}
              >
                {title}
              </h3>
              <p
                className="text-lg text-zinc-500 font-normal font-figtree"
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

export default Pros;
