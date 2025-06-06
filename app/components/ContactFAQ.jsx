import React from "react";
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

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div>
      <section className="relative w-full min-h-screen px-4 sm:px-8 py-16 text-center overflow-hidden">
        <Image
          src="/contact/BG4.svg"
          alt="BG-2"
          width={1000}
          height={500}
          className="absolute -bottom-20 -right-140 -z-0 pointer-events-none"
        />
        <Image
          src="/home/BG_Ellipse2.svg"
          alt="Background Ellipse 2"
          height={786}
          width={786}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 pointer-events-none"
        />

        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10 gap-10">
          <h2
            className="text-5xl md:text-4xl font-normal text-zinc-900 font-sen"
            style={{ lineHeight: "160%" }}
          >
            FAQ
          </h2>
          <p
            className="font-figtree text-zinc-900 text-2xl font-medium"
            style={{ lineHeight: "135%" }}
          >
            All Your Questions, Answered
          </p>

          <div className="w-full text-left divide-y divide-zinc-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6 max-w-4xl mx-auto">
                <button
                  onClick={() => toggle(index)}
                  className="font-figtree w-full flex justify-between items-center text-left text-zinc-900 font-medium text-xl"
                >
                  {faq.question}
                  <Icon
                    icon={openIndex === index ? "mdi:minus" : "mdi:plus"}
                    className={`text-xl ${
                      openIndex === index ? "text-[#4A3AFF]" : "text-zinc-500"
                    }`}
                  />
                </button>
                {openIndex === index && faq.answer && (
                  <p className="font-figtree mt-3 mb-16 text-zinc-500 text-lg leading-relaxed">
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

export default ContactFAQ;
