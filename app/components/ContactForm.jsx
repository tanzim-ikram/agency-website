import React from "react";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div>
      <section className="relative min-h-screen bg-white flex flex-col items-center justify-center px-6 pt-40 pb-24">
        {/* Background Images */}
        <div className="absolute left-0 top-30 lg:top-0 z-0">
          <Image
            src="/contact/BG3.svg"
            alt="Background Left"
            width={1000}
            height={1000}
            className="pointer-events-none lg:w-full lg:h-full w-100 h-100"
          />
        </div>

        {/* Heading */}
        <div className="relative z-10 text-center mb-17.5">
          <h1 className="text-zinc-900 font-sen text-[28px] sm:text-4xl md:text-6xl font-normal leading-[110%] gap-4 flex items-center">
            Get in
            <Image
              src="/contact/text-img2.png"
              alt="Handshake"
              width={120}
              height={70}
              className="inline-block rounded-full sm:w-30 sm:h-17.5 w-21 h-12.5"
            />
            touch
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative z-10 flex flex-col min-w-xs sm:w-[605px] items-start gap-6"
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="flex h-[50px] px-[20px] py-[12px] items-center gap-[10px] self-stretch rounded-[8px] border border-black/10 bg-white/50 backdrop-blur-md text-sm font-figtree text-[rgba(0,0,0,0.70)] font-normal leading-[160%] w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="flex h-[50px] px-[20px] py-[12px] items-center gap-[10px] self-stretch rounded-[8px] border border-black/10 bg-white/50 backdrop-blur-md text-sm font-figtree text-[rgba(0,0,0,0.70)] font-normal leading-[160%] w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="tel"
            placeholder="Phone number (Optional)"
            className="flex h-[50px] px-[20px] py-[12px] items-center gap-[10px] self-stretch rounded-[8px] border border-black/10 bg-white/50 backdrop-blur-md text-sm font-figtree text-[rgba(0,0,0,0.70)] font-normal leading-[160%] w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Your message"
            required
            className="flex h-[120px] px-[20px] py-[12px] items-start gap-[10px] self-stretch rounded-[8px] border border-black/10 bg-white/50 backdrop-blur-md text-sm font-figtree text-[rgba(0,0,0,0.70)] font-normal leading-[160%] w-full resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <button
            type="submit"
            className="flex px-[30px] py-[14px] justify-center items-center gap-[10px] self-stretch rounded-[40px] bg-[#18191C] text-white text-lg font-figtree font-normal leading-[175%] hover:bg-blue-600 transition"
          >
            Leave us a Message
            <Image
              src="/icons/message.svg"
              alt="Message"
              width={24}
              height={24}
            />
          </button>
        </form>
        <div className="absolute bottom-0 right-0 z-0">
          <Image
            src="/services/Ellipse.svg"
            alt="Background"
            height={1440}
            width={1440}
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
