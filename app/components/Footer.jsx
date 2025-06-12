import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
        {/* Background Images */}
        <Image
          src="/home/BG_Ellipse_Footer.svg"
          alt="BG Ellipse Footer"
          width={1440}
          height={1440}
          className="absolute -top-100 right-0 sm:-top-50 sm:right-0 z-0 w-[1000] h-[1000] sm:w-[1440] sm:h-[1440]"
          priority
        />
        <Image
          src="/home/circle_footer.svg"
          alt="Circle Footer"
          width={50}
          height={50}
          className="absolute top-20 left-20 sm:top-15 sm:left-30 md:top-15 md:left-50 z-40 w-[32] h-[32] sm:w-[60] sm:h-[60]"
          priority
        />

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-6 pt-15 pb-35 sm:pt-20 sm:pb-0 text-center relative z-40 mt-10">
          <h1 className="font-sen text-[28px] sm:text-4xl md:text-6xl text-zinc-900 font-normal mb-6 sm:mb-8 gap-2 flex flex-col md:flex-row md:items-center md:justify-center text-center">
            {/* Mobile: First line */}
            <span className="flex flex-row items-center justify-center md:hidden leading-[110%]">
              Let's Shape{" "}
              <Image
                src="/home/text-img6.png"
                alt="Handshake"
                width={90}
                height={50}
                className="inline rounded-full mx-2"
              />
            </span>
            {/* Mobile: Second line */}
            <span className="md:hidden">Digital Future Today</span>
            {/* Mobile: Third line */}
            <span className="md:hidden">With Us.</span>

            {/* Desktop: All in one line */}
            <span className="hidden md:inline leading-[160%]">
              Let's Shape
              <Image
                src="/home/text-img6.png"
                alt="Handshake"
                width={120}
                height={80}
                className="inline rounded-full mx-2"
              />
              Digital Future Today With Us.
            </span>
          </h1>

          <p className="max-w-lg sm:max-w-2xl mx-auto text-center font-figtree text-zinc-500 text-lg mb-6 sm:mb-8 font-normal relative z-10">
            The purpose of a FAQ is generally to provide information on frequent
            questions or concerns.
          </p>

          <button className="gap-2 bg-zinc-900 hover:bg-blue-600 transition text-white px-7.5 py-2.5 rounded-full text-lg font-semibold inline-flex items-center ">
            Get In Touch
            <Icon icon="iconoir:mail" width="22" height="22" />
          </button>
        </div>

        <div className="absolute inset-0 flex justify-end items-center z-30">
          {/* Footer Bottom Right Image */}
          <Image
            src="/home/Footer_img.svg"
            alt="Footer Bottom Right"
            width={580}
            height={690}
            className="relative sm:absolute -bottom-15 right-0 sm:bottom-15 sm:right-0 z-30 w-[375] h-[230] sm:w-[580] sm:h-[520]"
            priority
          />
        </div>

        {/* Overlay Image before Footer */}
        <div className="absolute -bottom-50 left-0 w-full z-20">
          <Image
            src="/home/FooterBottomOverlay.png"
            alt="Overlay"
            layout="responsive"
            width={524}
            height={260}
            priority
          />
        </div>
        <div className="relative bottom-0 left-0 w-full z-30">
          <Image
            src="/home/overlay2.png"
            alt="Overlay"
            layout="responsive"
            width={1440}
            height={220}
            priority
          />
        </div>

        {/* Gradient Line */}
        <hr
          className="relative h-0.5 border-0 z-40"
          style={{
            background:
              "linear-gradient(90deg, #A299FA 0%, #3A93F8 29%, #7DB4F3 51%, #0B3EAA 79%)",
          }}
        />

        {/* Footer */}
        <footer className="relative z-40 bg-white px-4 py-15 sm:py-12 sm:px-6 lg:px-8 xl:px-[8%] mx-auto flex flex-col items-center w-full">
          {/* Main Footer Content */}
          <div className="w-full flex flex-col items-start gap-y-6 md:flex-row md:items-center md:justify-between md:gap-y-0">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Logo Text Img 3"
                width={80}
                height={40}
              />
            </div>

            {/* Wrap nav in a flex container centered */}
            <div className="flex w-full md:w-auto">
              <nav className="flex w-full md:w-auto justify-start md:justify-center gap-6 sm:gap-6 font-figtree font-normal leading-[160%] text-base sm:text-lg text-zinc-900 items-center text-center">
                <a href="/" className="hover:underline">
                  Home
                </a>
                <a href="/services" className="hover:underline">
                  Services
                </a>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
                <a href="/career" className="hover:underline">
                  Career
                </a>
              </nav>
            </div>

            <div className="inline-flex items-center gap-3 text-zinc-500">
              {/* Social Icons */}
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-zinc-900 transition"
              >
                <Icon icon="pajamas:twitter" width="20" height="20" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-zinc-900 transition"
              >
                <Icon icon="ic:outline-facebook" width="26" height="26" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-zinc-900 transition"
              >
                <Icon icon="mdi:linkedin" width="26" height="26" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-zinc-900 transition"
              >
                <Icon icon="mdi:youtube" width="28" height="28" />
              </a>
            </div>
          </div>
        </footer>
        {/* Wrap copyright links in a flex container centered */}
        <div className="relative z-40 flex justify-center w-full bg-white px-4 sm:px-6 lg:px-8 xl:px-[8%] py-4">
          <div className="flex flex-row items-center text-zinc-500 leading-[160%] text-xs sm:text-sm font-figtree gap-2 sm:gap-6 md:flex-row md:justify-center md:gap-6">
            <p>© 2024 Farasha.Digital</p>
            <a href="/policy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
