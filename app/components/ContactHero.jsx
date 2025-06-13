import React from "react";
import Image from "next/image";

const ContactHero = () => {
  return (
    <div>
      <section className="relative bg-white flex flex-col items-center font-sen mb-10">
        <div className="absolute top-0 right-0 z-0">
          <Image
            src="/home/BG lines.png"
            alt="Background Line"
            height={1000}
            width={2400}
            priority
            className="pointer-events-none sm:opacity-100 opacity-70"
          />
        </div>

        {/* Overlay Images */}
        <Image
          src="/home/overlay3.png"
          alt="left overlay"
          width={250}
          height={950}
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 z-0 hidden md:block"
        />
        <Image
          src="/home/overlay4.png"
          alt="right overlay"
          width={250}
          height={950}
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-0 hidden md:block"
        />

        {/* Overlay BG Gr Bottom.svg at bottom right */}
        <div className="absolute -bottom-10 right-0 z-10">
          <Image
            src="/services/BG Gr Bottom.svg"
            alt="Background Gradient Bottom"
            height={2880}
            width={2050}
            priority
            className="pointer-events-none"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 text-center">
          <h1 className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 font-sen font-normal text-[28px] sm:text-4xl lg:text-6xl text-zinc-900 mb-8 sm:mb-10.5 relative z-10">
            <span className="flex gap-1 sm:gap-4 items-center">
              Contact our
              <Image
                src="/contact/text-img1.png"
                alt="Friendly Icon"
                width={140}
                height={64}
                className="inline rounded-full w-26 h-12.5 sm:w-35 sm:h-17.5"
                priority
              />
            </span>
            <span className="text-zinc-500">Friendly team</span>
          </h1>

          <p className="text-black/60 font-figtree font-normal max-w-xl mx-auto text-center text-lg mb-20">
            Let us know how can we help you
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 mb-10 z-10">
          {[
            {
              icon: "/contact/chat.svg",
              alt: "Chat",
              title: "Chat to sales",
              subtitle: "Speak to our support team",
              link: "mailto:support@email.com",
              linkText: "support@email.com",
            },
            {
              icon: "/contact/location.svg",
              alt: "Location",
              title: "Visit us",
              subtitle: "Visit our office",
              link: "#",
              linkText: "View on Google map",
            },
            {
              icon: "/contact/call.svg",
              alt: "Call",
              title: "Call us",
              subtitle: "Mon-Fri 8am-5pm",
              link: "tel:+880123456789",
              linkText: "+880 1234 56789",
            },
          ].map(({ icon, alt, title, subtitle, link, linkText }, i) => (
            <div
              key={i}
              className="flex flex-col items-start gap-6 w-full min-w-[360px] h-auto p-6 sm:p-10 mx-auto rounded-[24px] border border-[#E5E5E5] bg-white/30 backdrop-blur-[5px]"
            >
              <Image src={icon} alt={alt} width={40} height={40} />
              <div>
                <h3 className="text-zinc-900 font-sen text-lg sm:text-[24px] font-medium leading-[30px] mb-1">
                  {title}
                </h3>
                <p className="text-zinc-500 font-figtree text-sm font-normal leading-[24px] mb-2">
                  {subtitle}
                </p>
                <a
                  href={link}
                  className="sm:text-lg text-[16px] font-figtree font-semibold leading-[24px] text-black/70 underline"
                >
                  {linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactHero;
