import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const ShortFooter = () => {
  return (
    <div>
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
              <a href="/home" className="hover:underline">
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
          <a href="./policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShortFooter;
