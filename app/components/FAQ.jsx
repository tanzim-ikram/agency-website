import { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const faqs = [
  {
    question: "What is Webflow and why is it the best website builder?",
    answer:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    question: "What is your favorite template from BRIX Templates?",
    answer:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    question: "How do you clone a template from the Showcase?",
    answer:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    question: "Why is BRIX Templates the best Webflow agency?",
    answer:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    question: "When was Webflow officially launched?",
    answer:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    question: "How do you integrate Jetboost with Webflow?",
    answer:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <div>
      <section className="relative w-full min-h-screen px-4 sm:px-8 py-15 sm:py-16 text-center overflow-hidden">
        <Image
          src="/services/BG-Img1.svg"
          alt="BG-1"
          width={759}
          height={506}
          className="hidden sm:block absolute top-0 left-0 object-cover -z-0"
        />
        <Image
          src="/services/BG-Img2.svg"
          alt="BG-2"
          width={540}
          height={360}
          className="hidden sm:block absolute bottom-0 -right-10 -z-0"
        />
        <Image
            src="/home/BG_Ellipse2.svg"
            alt="Background Ellipse 2"
            height={482}
            width={1572}
            className="hidden sm:block absolute bottom-0 -right-10 -z-10"
        />

        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <h2
            className="text-[28px] sm:text-4xl md:text-5xl font-normal text-zinc-900 font-sen mb-6 sm:mb-10"
            style={{ lineHeight: "160%" }}
          >
            FAQ
          </h2>
          <p
            className="font-figtree text-zinc-900 text-lg sm:text-2xl font-medium mb-10"
            style={{ lineHeight: "135%" }}
          >
            All Your Questions, Answered
          </p>

          <div className="w-full text-left divide-y divide-zinc-200 gap-10">
            {faqs.map((faq, index) => (
              <div key={index} className="py-10 max-w-4xl mx-auto">
                <button
                  onClick={() => toggle(index)}
                  className="font-figtree w-full  flex flex-row justify-between items-center text-left text-zinc-900 font-normal sm:font-medium text-lg sm:text-xl"
                >
                  {faq.question}
                  <Icon
                    icon={openIndex === index ? "mdi:minus" : "mdi:plus"}
                    className={`text-2xl ${
                      openIndex === index ? "text-[#4A3AFF]" : "text-zinc-900"
                    }`}
                  />
                </button>
                {openIndex === index && faq.answer && (
                  <p className="font-figtree mt-3 mb-8 md:mb-16 text-zinc-500 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
