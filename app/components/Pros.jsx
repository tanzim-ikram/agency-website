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
      <div className="absolute top-0 -right-5 -z-10">
        <Image
          src="/services/BG1.svg"
          alt="Background"
          height={850}
          width={565}
          priority
        />
      </div>

      {/* Main content */}
      <section className="relative max-w-7xl mx-auto px-6 py-16 bg-transparent mb-20 mt-10">
        {/* Heading */}
        <h2 className="flex justify-center items-center gap-4 font-sen font-normal text-6xl text-zinc-900 mb-16 relative z-10">
          All pros{" "}
          <Image
            src="/services/text-img2.png"
            alt="Impact icon 3"
            width={160}
            height={80}
            className="inline rounded-full"
            priority
          />{" "}
          Empower
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 relative z-10 max-w-4xl mx-auto">
          {industries.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="rounded-xl p-6 bg-white shadow-xs border border-violet-50 max-w-md"
            >
              <Image
                src={`/services/${icon}`}
                alt={`${title} icon`}
                width={48}
                height={48}
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

export default Pros;
