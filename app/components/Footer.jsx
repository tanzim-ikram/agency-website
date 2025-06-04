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
          className="absolute top-0 right-0 z-0"
          priority
        />
        <Image
          src="/home/circle_footer.svg"
          alt="Circle Footer"
          width={50}
          height={50}
          className="absolute top-15 left-80 z-10"
          priority
        />

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-40 mt-10">
          <h1 className="font-sen text-6xl text-zinc-900 font-normal mb-4 gap-2">
            Let's Shape{" "}
            <Image
              src="/home/text-img6.png"
              alt="Handshake"
              width={120}
              height={80}
              className="inline  rounded-full"
            />{" "}
            Digital Future
          </h1>

          <h1 className="font-sen text-6xl text-zinc-900 font-normal mb-4">
            Today With Us.
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-center font-figtree text-zinc-500 text-lg mb-8 font-normal relative z-10">
            The purpose of a FAQ is generally to provide information on frequent
            questions or concerns.
          </p>

          <button className="gap-2 bg-zinc-900 hover:bg-blue-600 transition text-white px-6 py-3 rounded-full text-base inline-flex items-center mb-15">
            Get In Touch
            <Icon icon="iconoir:mail" width="22" height="22" />
          </button>
        </div>

        <div>
          {/* Footer Bottom Right Image */}
          <Image
            src="/home/Footer_img.svg"
            alt="Footer Bottom Right"
            width={580}
            height={690}
            className="absolute bottom-35 right-0 z-10"
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
        <div className="absolute bottom-45 left-0 w-full z-30">
          <Image
            src="/home/overlay2.png"
            alt="Overlay"
            layout="responsive"
            width={1440}
            height={220}
            priority
          />
        </div>
        <hr
          className="relative h-0.5 border-0 z-40"
          style={{
            background:
              "linear-gradient(90deg, #A299FA 0%, #3A93F8 29%, #7DB4F3 51%, #0B3EAA 79%)",
          }}
        />

        {/* Footer */}
        <footer className="relative z-40 bg-white py-10 px-5 lg:px-8 xl:px-[8%] mx-auto flex flex-col items-center">
          {/* Main Footer Content */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Logo Text Img 3"
                width={80}
                height={40}
              />
            </div>

            {/* Wrap nav in a flex container centered */}
            <div className="flex justify-center w-full md:w-auto">
              <nav className="flex gap-6 mt-6 md:mt-0 font-figtree font-normal text-lg text-zinc-900">
                <a href="#" className="hover:underline">
                  Home
                </a>
                <a href="#" className="hover:underline">
                  Services
                </a>
                <a href="#" className="hover:underline">
                  About Us
                </a>
                <a href="#" className="hover:underline">
                  Career
                </a>
              </nav>
            </div>

            <div className="inline-flex items-center gap-2 mt-6 md:mt-0 text-zinc-500">
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

          {/* Wrap copyright links in a flex container centered */}
          <div className="flex justify-center w-full">
            <div className="mt-8 pt-4 flex flex-col items-center text-zinc-500 text-sm font-figtree gap-2 lg:gap-6 md:flex-row md:justify-center md:gap-6">
              <p>© 2024 Farasha.Digital</p>
              <a href="./policy" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
