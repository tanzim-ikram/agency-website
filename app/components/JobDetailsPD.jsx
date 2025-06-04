import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";

const JobDetailsPD = () => {
  return (
    <div className="min-h-screen bg-white">
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
              className="pointer-events-none"
            />
          </div>
          <div className="fixed -top-20 left-0 z-10">
            <Image
              src="/navbar/nav-bottom.png"
              alt="Decorative bottom navigation background"
              height={186}
              width={1600}
              priority
              className="pointer-events-none"
            />
          </div>
        </div>

        {/* Minimal Navbar Content */}
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

          {/* View All Openings CTA */}
          <a
            href="/career"
            className="flex items-center gap-2.5 bg-zinc-900 leading-[230%] hover:bg-blue-500 transition text-white px-5 py-2 rounded-full text-sm"
          >
            <Icon icon="lucide:briefcase" width="16" height="16" />
            <span>View all openings</span>
          </a>
        </nav>
      </div>
      {/* Header Section */}
      <section
        className="text-center py-20 px-6 flex flex-col items-center"
        style={{
          background:
            "linear-gradient(151deg, rgba(254, 248, 255, 0.50) 8.45%, rgba(227, 236, 255, 0.50) 45.2%, rgba(205, 202, 255, 0.50) 101.49%)",
        }}
      >
        <h1 className="text-zinc-900 font-sen text-5xl mt-12 font-normal leading-[140%] tracking-[-1.44px]">
          Product Designer
        </h1>
        <p className="text-zinc-500 font-figtree text-lg font-normal leading-[160%] mt-2">
          We are looking for a mid-level product designer to join our team
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {[
            { title: "Location", info: "Dhaka, Bangladesh" },
            { title: "Due date", info: "21 Mar 2025" },
            { title: "Job type", info: "Full-time" },
            { title: "Salary range", info: "50-60K/Month" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start gap-4 w-[240px] p-4 rounded-[7.328px] bg-white/50 backdrop-blur-[1.53px]"
            >
              <p className="text-zinc-500 font-figtree text-[18px] font-normal leading-[160%]">
                {item.title}
              </p>
              <p className="text-zinc-900 font-figtree text-[18px] font-medium leading-[160%]">
                {item.info}
              </p>
            </div>
          ))}
        </div>

        <button className="text-lg font-figtree font-semibold mt-16 px-7.5 py-3.5 leading-[175%] rounded-full bg-zinc-900 text-white flex items-center gap-2 hover:bg-blue-600">
          Apply Now <Icon icon="mage:arrow-up-right" width="20" height="20" />
        </button>
      </section>

      {/* Description Section */}
      <main className="max-w-3xl mx-auto text-left py-20 text-zinc-700 font-figtree">
        <section className="mb-12">
          <h2 className="text-2xl font-figtree text-zinc-900 text-center font-medium leading-[135%] tracking-[-0.96px] mb-4">
            Job description
          </h2>
          <p className="text-zinc-500 text-[18px] font-normal leading-[160%]">
            We're seeking a talented Mid-Level Product Designer to join our
            growing team! In this role, you'll have the opportunity to shape the
            user experience of our products by collaborating with
            cross-functional teams. You'll play a key role in transforming
            business goals into intuitive and engaging user interfaces.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-zinc-900 font-medium text-center mb-4">
            Key Responsibilities
          </h2>
          <ul className="list-disc list-inside text-lg space-y-2 text-zinc-500">
            <li>
              Design intuitive and user-friendly interfaces for our digital
              products.
            </li>
            <li>
              Collaborate with product managers and engineers on product visuals
              and concepts.
            </li>
            <li>
              Develop wireframes, prototypes, and user flows to communicate
              design ideas.
            </li>
            <li>Apply and maintain design systems and standard practices.</li>
            <li>Stay updated on the latest UI/UX trends and techniques.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-zinc-900 font-medium text-center mb-4">
            Qualifications
          </h2>
          <ul className="list-disc list-inside text-lg space-y-2 text-zinc-500">
            <li>3+ years of experience in product design or UI/UX design.</li>
            <li>
              Proficient in design tools such as Figma, Sketch, Adobe XD, or
              similar.
            </li>
            <li>Solid understanding of user-centered design principles.</li>
            <li>
              Strong portfolio showcasing responsive web and mobile design.
            </li>
          </ul>
        </section>

        <section className="">
          <h2 className="text-2xl text-zinc-900 font-medium text-center mb-4">
            Why Join Us?
          </h2>
          <ul className="text-lg space-y-2 text-zinc-500">
            <li className="flex items-center gap-2">
              <Icon
                icon="mingcute:checkbox-fill"
                width="24"
                height="24"
                className="text-green-500"
              />
              Competitive salary and benefits
            </li>
            <li className="flex items-center gap-2">
              <Icon
                icon="mingcute:checkbox-fill"
                width="24"
                height="24"
                className="text-green-500"
              />
              Remote work and flexible schedule
            </li>
            <li className="flex items-center gap-2">
              <Icon
                icon="mingcute:checkbox-fill"
                width="24"
                height="24"
                className="text-green-500"
              />
              Great team and work environment
            </li>
          </ul>
        </section>
      </main>
      <div className="flex justify-between items-center max-w-3xl mx-auto py-4 mb-2 border-t border-zinc-200 pt-12">
        <a
          className="font-figtree text-lg text-zinc-900 font-semibold leading-[160%] hover:underline"
          href="#"
        >
          Share
        </a>
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

export default JobDetailsPD;
