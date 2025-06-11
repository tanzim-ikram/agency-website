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

const ServiceExpertise = () => {
  return (
    <div>
      <section className="relative block py-20 bg-white overflow-hidden">
        {/* Background image with opacity 10% and rotated 75deg */}
        <div className="hidden sm:absolute -top-10 left-0 z-0">
          <Image
            src="/services/BG.svg"
            alt="Background"
            height={1054}
            width={674}
            priority
          />
        </div>

        {/* Cards grid */}
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 sm:gap-7.5 px-4 relative z-20">
          {expertiseCards.map(({ id, title, desc, img, link }) => (
            <a
              href={link}
              key={id}
              className="no-underline"
              style={{ textDecoration: "none" }}
            >
              <div
                className="relative cursor-pointer rounded-lg p-8 sm:p-10 border border-zinc-200 shadow-sm transition-all duration-300 bg-white group"
                style={{ width: "380px", height: "480px" }}
              >
                <div className="relative w-50 h-50 mb-10 pointer-events-none">
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
      </section>
    </div>
  );
};

export default ServiceExpertise;
