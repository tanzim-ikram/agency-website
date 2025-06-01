import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const AboutFooter = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-white">
        {/* Background images */}
        <Image
          src="/home/BG lines.png"
          alt="Background lines"
          width={1586}
          height={1000}
          className="absolute inset-0 object-cover pointer-events-none z-0"
          priority
        />
        <Image
          src="/about/BG gr top.svg"
          alt="Top gradient"
          width={1440}
          height={122}
          className="absolute top-0 left-0 object-cover pointer-events-none z-10"
          priority
        />
        <Image
          src="/about/Ellipse2.svg"
          alt="Ellipse background"
          width={1440}
          height={1440}
          className="absolute inset-0 object-contain pointer-events-none z-20"
          priority
        />

        {/* Main container */}
        <div className="relative z-20 max-w-7xl mx-auto py-30 flex flex-row gap-16 items-start">
          {/* Left Side */}
          <div className="flex flex-col gap-10">
            <h2 className="font-sen text-zinc-900 text-6xl leading-tight font-normal">
              Get in touch{" "}
              <Image
                src="/about/text-img1.png"
                alt="Text Icon"
                width={160}
                height={80}
                className="inline-block align-middle rounded-full mx-1"
              />{" "}
              with us.
              <br />
              We're here to assist you
            </h2>

            <div className="mt-25">
              <Image
                src="/about/AboutFooterImg.svg"
                alt="Footer Image"
                width={330}
                height={175}
                className=""
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-[420px] h-[450px] flex flex-col gap-5"
          >
            <input
              type="text"
              placeholder="Name"
              required
              className="bg-white border border-black/10 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-figtree text-[rgba(0, 0, 0, 0.70)] font-normal leading-[160%]"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-white border border-black/10 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-figtree text-[rgba(0, 0, 0, 0.70)] font-normal leading-[160%]"
            />
            <input
              type="tel"
              placeholder="Phone number (Optional)"
              className="bg-white border border-black/10 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-figtree text-[rgba(0, 0, 0, 0.70)] font-normal leading-[160%]"
            />
            <textarea
              rows={4}
              placeholder="Your message"
              required
              className="bg-white border border-black/10 rounded-lg px-5 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-figtree text-[rgba(0, 0, 0, 0.70)] font-normal leading-[160%]"
            ></textarea>

            <button
              type="submit"
              className="bg-zinc-900 text-white text-lg font-figtree font-normal leading-[175%] px-7.5 py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-blue-600 transition mt-12"
            >
              Leave us a Message
              <Icon icon="mdi:message-text-outline" width={20} height={20} />
            </button>
          </form>
        </div>

        <Image
          src="/about/BG Gr Bottom.svg"
          alt="Top gradient"
          width={1440}
          height={308}
          className="absolute bottom-50 left-0 object-cover pointer-events-none z-10"
          priority
        />

        {/* Gradient Divider */}
        <hr
          className="relative h-0.5 border-0 z-30"
          style={{
            background:
              "linear-gradient(90deg, #A299FA 0%, #3A93F8 29%, #7DB4F3 51%, #0B3EAA 79%)",
          }}
        />

        {/* Footer */}
        <footer className="relative z-40 bg-white py-10 px-5 lg:px-8 xl:px-[8%] mx-auto flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            <Image src="/logo.svg" alt="Logo" width={80} height={40} />

            <nav className="flex gap-6 mt-6 md:mt-0 font-figtree font-normal text-lg text-zinc-900">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">Services</a>
              <a href="#" className="hover:underline">About Us</a>
              <a href="#" className="hover:underline">Career</a>
            </nav>

            <div className="inline-flex items-center gap-2 mt-6 md:mt-0 text-zinc-500">
              <a href="#" aria-label="Twitter" className="hover:text-zinc-900 transition">
                <Icon icon="pajamas:twitter" width="20" height="20" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-zinc-900 transition">
                <Icon icon="ic:outline-facebook" width="26" height="26" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-zinc-900 transition">
                <Icon icon="mdi:linkedin" width="26" height="26" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-zinc-900 transition">
                <Icon icon="mdi:youtube" width="28" height="28" />
              </a>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8 pt-4 flex flex-col items-center text-zinc-500 text-sm font-figtree gap-2 md:flex-row md:justify-center md:gap-6">
            <p>© 2024 Farasha.Digital</p>
            <a href="./policy" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default AboutFooter;
