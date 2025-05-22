'use client'
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Industries />
    </>
  );
}