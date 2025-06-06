"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import ShortFooter from "./components/ShortFooter";

// app/not-found.jsx
export default function NotFound() {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative bg-white">
        <Image
          src="/contact/error.svg"
          alt="Lost Icon"
          width={350}
          height={170}
          className="mb-6"
        />
        <p className="bg-[#F4F4FF] text-zinc-900 text-sm font-medium rounded-full px-4 py-1 mb-4">
          404 Error
        </p>
        <h1 className="text-4xl md:text-5xl font-sen text-zinc-900 mb-2">
          We’ve lost this page
        </h1>
        <p className="text-zinc-500 text-base mb-12 max-w-xl">
          Sorry, this page you are looking for doesn’t exist or has been removed
        </p>
      </section>
      <ShortFooter />
    </div>
  );
}
