"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const sideMenuRef = useRef();

  // Handle scroll to apply blur background when navbar is scrolled
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Close menu if clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isMenuOpen &&
        sideMenuRef.current &&
        !sideMenuRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsMobileServicesOpen(false);
  };

  return (
    <div className="relative">
      {/* Decorative Backgrounds */}
      <div className="fixed bottom-140 left-1/2 -translate-x-1/2 z-20">
        <Image
          src="/navbar/nav-top.png"
          alt="Decorative top navigation background"
          height={285}
          width={260}
          priority
          className="pointer-events-none w-auto max-w-[400px]"
        />
      </div>
      <div className="absolute top-0 left-0 z-10">
        <Image
          src="/navbar/nav-bottom.png"
          alt="Decorative bottom navigation background"
          height={100}
          width={1600}
          priority
          className="pointer-events-none h-30 opacity-50 sm:opacity-100"
        />
      </div>

      {/* Overlay Background when menu is open */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/30" onClick={toggleMenu} />
      )}

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full px-5 lg:px-8 xl:px-[8%] py-6 flex justify-between items-center font-figtree z-[60] transition-all duration-300 ${
          isScrolled
            ? "bg-white/50 backdrop-blur-lg shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 z-50">
          <Image
            src="/logo.svg"
            alt="Farasha Digital Logo"
            width={83}
            height={40}
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-lg font-normal leading-[160%] text-zinc-900">
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
                  href="/services/backend"
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

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4 relative z-[100]">
          <a
            href="/contact"
            className="hidden md:flex items-center gap-2.5 bg-zinc-900 hover:bg-blue-600 transition text-white px-5 py-2 rounded-full text-base"
          >
            <Icon icon="iconoir:mail" className="z-70" width={22} height={22} />
            <span className="font-figtree font-medium leading-[230%]">
              Get In Touch
            </span>
          </a>

          {/* Hamburger / Close Button */}
          <button onClick={toggleMenu} className="block md:hidden p-2 z-[100]">
            <Icon
              icon={isMenuOpen ? "carbon:close" : "tabler:menu"}
              width={24}
              height={24}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Side Menu - Now outside the nav element */}
      <div
        ref={sideMenuRef}
        className={`md:hidden fixed top-0 right-0 w-64 h-full bg-white z-[70] shadow-lg px-8 py-6 flex flex-col gap-6 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={toggleMenu}
            className="p-1 text-gray-500 hover:text-gray-700"
          >
            <Icon icon="carbon:close" width={24} height={24} />
          </button>
        </div>

        <a href="/" onClick={toggleMenu}>
          Home
        </a>
        <div className="flex flex-col">
          <button
            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            className="flex items-center justify-between w-full"
          >
            <span><a href="/services">Services</a></span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isMobileServicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isMobileServicesOpen && (
            <div className="pl-4 mt-2 flex flex-col gap-2">
              <a href="/services/frontend" onClick={toggleMenu}>
                Frontend Development
              </a>
              <a href="/services/backend" onClick={toggleMenu}>
                Backend Development
              </a>
              <a href="/services/mobiledev" onClick={toggleMenu}>
                Mobile Development
              </a>
              <a href="/services/ai-ml" onClick={toggleMenu}>
                AI & Machine Learning
              </a>
              <a href="/services/devops" onClick={toggleMenu}>
                DevOps & Infrastructure
              </a>
              <a href="/services/databases" onClick={toggleMenu}>
                Databases
              </a>
            </div>
          )}
        </div>
        <a href="/about" onClick={toggleMenu}>
          About Us
        </a>
        <a href="/career" onClick={toggleMenu}>
          Career
        </a>
        <a href="/contact" onClick={toggleMenu}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
