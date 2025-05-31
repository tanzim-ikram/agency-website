import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const FrontendHero = () => {
  return (
    <div>
      <section className="relative bg-white overflow-hidden">
        {/* Background lines */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home/BG lines.png"
            alt="Background lines"
            layout="fill"
            objectFit="cover"
            priority
            className="opacity-50"
          />
        </div>

        {/* Ellipse.svg on top */}
        <div className="absolute inset-0 z-10">
          <Image
            src="/services/Ellipse.svg"
            alt="Ellipse background"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {/* Left overlay */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20">
          <Image
            src="/services/overlay1.png"
            alt="Left overlay"
            width={200} // Adjust size as needed
            height={400}
            priority
          />
        </div>

        {/* Right overlay */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
          <Image
            src="/services/overlay2.svg"
            alt="Right overlay"
            width={200} // Adjust size as needed
            height={400}
            priority
          />
        </div>

        {/* Content container */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 py-28 text-center">
          <div className="mt-10 text-zinc-900 flex justify-center items-center gap-2">
            <span>
              <Image
                src="/services/Icons.svg"
                alt="Star icon"
                width={20}
                height={20}
                priority
              />
            </span>
            <span className="text-zinc-700 font-medium text-lg">Services</span>
          </div>

          <h2 className="font-sen max-w-4xl text-zinc-900 font-normal text-5xl leading-tight mb-8 mt-8 tracking-[-3]"
          style={{ lineHeight: "160%"}}
          >
            Frontend That Speaks to Your <br /> Users – Fast, Fluid, and
            Functional
          </h2>

          <p className="font-figtree text-zinc-500 text-lg max-w-2xl mx-auto mb-16"
          style={{ lineHeight: "160%"}}
          >
            We craft responsive, high-performance frontends using modern
            frameworks like React.js, Next.js, and Vue.js. Our solutions are
            optimized for speed, scalability, and user engagement, ensuring a
            seamless experience across all devices.
          </p>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-white text-lg font-semibold font-figtree gap-2 hover:bg-blue-600 transition"
          >
            Talk to an expert
            <Icon
              icon="eva:diagonal-arrow-right-up-fill"
              width="24"
              height="24"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default FrontendHero;
