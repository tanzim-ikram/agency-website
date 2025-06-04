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
    <section className="bg-white py-20 px-4 z-0 relative">
      <div className="max-w-5xl mx-auto">
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
        <h2 className="text-6xl font-sen font-normal text-zinc-900 text-center mb-18.5 mt-10">
          All Openings
        </h2>

        <div>
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between border-b border-neutral-200 pb-6"
            >
              <div className="flex flex-col gap-2 py-10">
                <h3 className="text-3xl font-sen text-zinc-900 font-normal leading-[110%] mb-4">
                  {job.title}
                </h3>
                <p className="text-zinc-500 text-lg font-figtree font-normal leading-[160%] mb-6">
                  {job.description}
                </p>

                <div className="flex gap-5 flex-wrap">
                  {job.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-zinc-500 text-lg font-figtree font-semibold leading-[175%] border border-neutral-200 rounded-full"
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

              <div className="mt-4 md:mt-0 flex items-start md:items-center">
                <button className="text-zinc-900 text-[28px] font-sen font-normal leading-[110%] tracking-[-0.84px] flex items-center gap-2 hover:underline">
                  Apply
                  <Icon icon="mage:arrow-up-right" width="32" height="40" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Openings;
