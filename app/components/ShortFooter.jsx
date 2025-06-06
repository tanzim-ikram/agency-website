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
    </div>
  );
};

export default ShortFooter;
