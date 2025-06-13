import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const expertiseCards = [
  {
    id: 1,
    title: "Frontend Development",
    desc: "We use React.js for dynamic UIs, Next.js for server-side rendering, and Vue.js for lightweight, reactive interfaces.",
    img: "/home/expertise 1.png",
    link: "/services/frontend",
  },
  {
    id: 2,
    title: "Backend Development",
    desc: "Our Backend is powered by Node.js for scalability, Django for secure solutions, and Express.js for fast RESTful APIs.",
    img: "/home/expertise 2.png",
    link: "/services/backend",
  },
  {
    id: 3,
    title: "Mobile Development",
    desc: "We create cross-platform apps with React Native and Flutter for native-like performance on iOS and Android.",
    img: "/home/expertise 3.png",
    link: "/services/mobile",
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    desc: "We leverage TensorFlow for model training, OpenAI for LLM integration, and PyTorch for deep learning.",
    img: "/home/expertise 4.png",
    link: "/services/ai-ml",
  },
  {
    id: 5,
    title: "DevOps & Infrastructure",
    desc: "Our infrastructure is built on Docker for containerization, Kubernetes for orchestration, and AWS for scalability.",
    img: "/home/expertise 5.png",
    link: "/services/devops",
  },
  {
    id: 6,
    title: "Databases",
    desc: "We use PostgreSQL for complex queries, MongoDB for scalable document storage, and Redis for fast in-memory caching.",
    img: "/home/expertise 6.png",
    link: "/services/databases",
  },
];

const Expertise = () => {
  return (
    <div>
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background image */}
        <div className="absolute top-0 right-0 z-0 h-full w-[300px] sm:w-[674px]">
          <Image
            src="/home/BG.png"
            alt="Background"
            height={1054}
            width={674}
            priority
          />
        </div>

        {/* Title */}
        <h2 className="text-center font-sen text-zinc-900 text-[28px] sm:text-6xl mb-0 sm:mb-8 flex justify-center items-center gap-4 relative z-10">
          Our{" "}
          <Image
            src="/home/text-img5.png"
            alt="Lightbulb"
            width={120}
            height={70}
            className="inline object-cover rounded-full z-10 w-[90] h-[40] sm:w-[120] sm:h-[70]"
            priority
          />{" "}
          Expertise
        </h2>

        {/* Subtitle */}
        <p className="max-w-xs sm:max-w-3xl mx-auto text-center font-figtree text-lg font-normal text-zinc-500 sm:mb-16 mb-0 relative z-10 py-10 sm:py-0">
          At Farasha Digital, we use a modern technology stack to build
          scalable, high-performance solutions, ensuring our products meet the
          highest industry standards.
        </p>

        {/* Cards */}
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 sm:gap-7.5 px-4 relative z-10">
          {expertiseCards.map(({ id, title, desc, img, link }) => (
            <a
              href={link}
              key={id}
              className="no-underline"
              style={{ textDecoration: "none" }}
            >
              <div
                className="relative cursor-pointer rounded-lg p-8 sm:p-10 border border-zinc-200 shadow-sm transition-all duration-300 bg-white group md:w-95 md:h-120 w-80 h-auto"
                
              >
                <div className="relative md:w-50 md:h-50 w-25 h-25 mb-10 pointer-events-none">
                  <Image
                    src={img}
                    alt={title}
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>

                <div className="absolute top-4 right-4 text-zinc-900 transition pointer-events-none">
                  <Icon icon="mage:arrow-up-right" width="24" height="24" />
                </div>

                <h3 className="text-zinc-900 font-medium font-sen text-2xl mb-2.5 leading-[135%]">
                  {title}
                </h3>
                <p className="text-zinc-500 font-normal font-figtree text-lg leading-[160%]">
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
            </a>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-16">
          <button className="rounded-full bg-zinc-900 text-white font-figtree font-semibold px-10 py-2.5 flex items-center gap-2 hover:bg-blue-600 transition leading-[175%] z-10">
            See All Services
            <Icon icon="lineicons:arrow-right" width="25" height="25" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
