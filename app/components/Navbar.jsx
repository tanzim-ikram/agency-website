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
        <div className="fixed -top-20 left-0 z-10">
          <Image
            src="/navbar/nav-bottom.png"
            alt="Decorative bottom navigation background"
            height={186}
            width={1600}
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
              <a href="/services">Services</a>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isServicesOpen && (
              <div className="absolute w-60 bg-white shadow-md rounded-md p-2 z-30">
                <a
                  href="/services/frontend"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  Frontend Development
                </a>
                <a
                  href="/services/bsckend"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  Backend Development
                </a>
                <a
                  href="/services/mobiledev"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  Mobile Development
                </a>
                <a
                  href="/services/ai-ml"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  AI & Machine Learning
                </a>
                <a
                  href="/services/devops"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  DevOps & Infrastructure
                </a>
                <a
                  href="/services/databases"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  Databases
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
