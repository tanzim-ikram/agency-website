'use client'
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import Navbar from "./components/Navbar";
// import Partners from "./components/Partners";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Partners /> */}
      <Industries />
      <Expertise />
      <Solutions />
      <Testimonials />
      <Footer />
    </>
  );
}