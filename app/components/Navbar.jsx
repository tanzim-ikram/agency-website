import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  return (
    <div className="relative">
      {/* Navbar Decorative Backgrounds */}
      <div>
        <div className="fixed bottom-140 left-110 z-20">
          <Image
            src="/navbar/nav-top.png"
            alt="Decorative top navigation background"
            height={50}
            width={400}
            priority
          />
        </div>
        <div className="fixed top-0 z-10">
          <Image
            src="/navbar/nav-bottom.png"
            alt="Decorative bottom navigation background"
            height={186}
            width={1440}
            priority
          />
        </div>
      </div>

      {/* Navbar Content */}
      <nav className="fixed top-0 left-0 w-full px-5 lg:px-8 xl:px-[8%] py-8 flex justify-between items-center font-figtree z-50 bg-transparent">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Farasha Digital Logo"
            width={110}
            height={40}
            priority
          />
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-8 text-lg font-medium text-zinc-900">
          <a href="/">Home</a>
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1">
              <span>Services</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isServicesOpen && (
              <div className="absolute mt-2 w-40 bg-white shadow-md rounded-md p-2 z-30">
                <a
                  href="/services/design"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  Design
                </a>
                <a
                  href="/services/development"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  Development
                </a>
                <a
                  href="/services/marketing"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  Marketing
                </a>
              </div>
            )}
          </div>
          <a href="/about">About Us</a>
          <a href="/career">Career</a>
        </div>

        {/* Get in Touch Button */}
        <a
          href="/contact"
          className="flex items-center gap-2 bg-zinc-900 hover:bg-blue-600 transition text-white px-6 py-3 rounded-full text-base"
        >
          <Icon icon="iconoir:mail" width="22" height="22" />
          <span>Get In Touch</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
