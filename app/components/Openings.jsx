import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const jobs = [
  {
    title: "Product Designer",
    description:
      "We are looking for a mid-level product designer to join our team",
    tags: ["100% Remote", "Full-time"],
  },
  {
    title: "Front End Developer",
    description:
      "We are looking for a mid-level product designer to join our team",
    tags: ["100% Remote", "Full-time"],
  },
  {
    title: "Executive Assistant",
    description:
      "We are looking for a mid-level product designer to join our team",
    tags: ["100% Remote", "Full-time"],
  },
  {
    title: "UI/UX Designer",
    description:
      "We are looking for a mid-level product designer to join our team",
    tags: ["100% Remote", "Part-time"],
  },
];

const Openings = () => {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* BG Ellipse */}
        <div className="absolute top-0 right-0 -z-10">
          <Image
            src="/home/BG_Ellipse1.svg"
            alt="Background Ellipse 1"
            height={1210}
            width={2878}
            priority
            className="pointer-events-none"
          />
        </div>

        {/* Title */}
        <h2 className="text-[28px] sm:text-6xl font-sen font-normal text-zinc-900 text-center mb-10 sm:mb-20">
          All Openings
        </h2>

        {/* Job List */}
        <div className="space-y-10">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between border-b border-neutral-200 pb-6 gap-4"
            >
              {/* Left Section */}
              <div className="flex flex-col gap-2 w-full sm:w-[80%]">
                {/* Title and Apply CTA (mobile stacked) */}
                <div className="flex justify-between items-start">
                  <h3 className="text-lg sm:text-[28px] font-sen text-zinc-900 font-normal leading-[110%]">
                    {job.title}
                  </h3>

                  {/* Apply CTA for mobile */}
                  <a
                    href={`/career/${job.title
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    className="block sm:hidden"
                  >
                    <span className="text-zinc-900 text-lg font-sen font-normal leading-[110%] tracking-[-0.5px] flex items-center gap-1 hover:underline">
                      Apply
                      <Icon icon="mage:arrow-up-right" width={20} height={20} />
                    </span>
                  </a>
                </div>

                <p className="text-zinc-500 text-lg font-figtree font-normal leading-[160%]">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-2">
                  {job.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="inline-flex items-center gap-2 px-4 py-2 text-zinc-500 text-lg font-figtree font-semibold leading-[175%] border border-neutral-200 rounded-full"
                    >
                      <Icon
                        icon={
                          tagIdx === 0
                            ? "tdesign:location"
                            : "mdi:clock-time-four-outline"
                        }
                        width={18}
                        height={18}
                        className="text-zinc-500"
                      />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Apply CTA Desktop */}
              <div className="hidden sm:flex items-center">
                <a
                  href={`/career/${job.title.toLowerCase().replace(/ /g, "-")}`}
                  className="flex items-center"
                >
                  <span className="text-zinc-900 text-[28px] font-sen font-normal leading-[110%] tracking-[-0.84px] flex items-center gap-2 hover:underline">
                    Apply
                    <Icon icon="mage:arrow-up-right" width={32} height={32} />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Openings;
