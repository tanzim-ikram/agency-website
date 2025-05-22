import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const expertiseCards = [
  {
    id: 1,
    title: "Frontend Development",
    desc: "We use React.js for dynamic UIs, Next.js for server-side rendering, and Vue.js for lightweight, reactive interfaces.",
    img: "/home/expertise 1.png",
  },
  {
    id: 2,
    title: "Backend Development",
    desc: "Our Backend is powered by Node.js for scalability, Django for secure solutions, and Express.js for fast RESTful APIs.",
    img: "/home/expertise 2.png",
  },
  {
    id: 3,
    title: "Mobile Development",
    desc: "We create cross-platform apps with React Native and Flutter for native-like performance on iOS and Android.",
    img: "/home/expertise 3.png",
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    desc: "We leverage TensorFlow for model training, OpenAI for LLM integration, and PyTorch for deep learning.",
    img: "/home/expertise 4.png",
  },
  {
    id: 5,
    title: "DevOps & Infrastructure",
    desc: "Our infrastructure is built on Docker for containerization, Kubernetes for orchestration, and AWS for scalability.",
    img: "/home/expertise 5.png",
  },
  {
    id: 6,
    title: "Databases",
    desc: "We use PostgreSQL for complex queries, MongoDB for scalable document storage, and Redis for fast in-memory caching.",
    img: "/home/expertise 6.png",
  },
];

const Expertise = () => {
  return (
    <div>
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background image with opacity 10% and rotated 75deg */}
        <div className="absolute top-0 right-0 -z-0">
        <Image
          src="/home/BG.png"
          alt="Background"
          height={1054}
          width={674}
          className=""
          priority
        />
      </div>

        {/* Title */}
        <h2 className="text-center font-sen text-zinc-900 text-5xl mb-4 flex justify-center items-center gap-2">
          Our{" "}
          <Image
            src="/home/text-img5.png"
            alt="Lightbulb"
            width={80}
            height={40}
            className="inline rounded-full"
            priority
          />{" "}
          Expertise
        </h2>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-center font-figtree font-normal text-zinc-500 mb-14">
          At Farasha Digital, we use a modern technology stack to build
          scalable, high-performance solutions, ensuring our products meet the
          highest industry standards.
        </p>

        {/* Cards grid */}
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 px-4 z-10">
          {expertiseCards.map(({ id, title, desc, img }) => (
            <div
              key={id}
              className="relative cursor-pointer rounded-lg p-6 border border-zinc-200 shadow-sm transition-all duration-300 bg-white group"
              style={{
                width: "300px",
                height: "400px",
              }}
            >
              <div className="relative w-40 h-40 mb-6 pointer-events-none">
                <Image
                  src={img}
                  alt={title}
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>

              {/* Arrow icon positioned at top right */}
              <div className="absolute top-4 right-4 text-zinc-900 transition pointer-events-none">
                <Icon
                  icon="eva:diagonal-arrow-right-up-fill"
                  width="24"
                  height="24"
                />
              </div>

              <h3 className="text-zinc-900 font-medium font-sen text-lg mb-2">
                {title}
              </h3>
              <p className="text-zinc-500 font-normal font-figtree text-sm">
                {desc}
              </p>

              <style jsx>{`
                div.group:hover {
                  background: linear-gradient(
                    151.36deg,
                    #fef8ff80 8.45%,
                    #e3ecff80 45.2%,
                    #cdcaff80 101.49%
                  );
                }
              `}</style>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-16">
          <button className="rounded-full bg-zinc-900 text-white font-figtree px-8 py-3 flex items-center gap-2 hover:bg-blue-600 transition">
            See All Services
            <Icon icon="lineicons:arrow-right" width="25" height="25" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
