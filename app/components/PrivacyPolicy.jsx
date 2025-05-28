import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-center">
      {/* Title Section */}
      <header className="bg-gradient-to-br from-fuchsia-50 via-indigo-100 to-indigo-200 py-16">
        <h1
          className="font-sen font-normal text-5xl text-zinc-900 mb-3 mt-16"
          style={{ lineHeight: "1.1" }}
        >
          Privacy Policy
        </h1>
        <p
          className="font-figtree font-normal text-lg text-zinc-500 max-w-4xl mx-auto"
          style={{ lineHeight: "1.6" }}
        >
          At Farasha Digital, we are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, and safeguard your
          personal information when you visit our website or use our services.
        </p>

        <button
          type="button"
          className="mt-8 px-6 py-3 rounded-full font-figtree font-semibold text-lg bg-gradient-to-br from-fuchsia-50/10 via-indigo-100/80 to-indigo-200/80"
          style={{
            color: "rgba(0, 0, 0, 0.7)",
          }}
        >
          Last updated: November 2025
        </button>
      </header>

      {/* Content Section */}
      <main className="mt-16 max-w-3xl mx-auto text-left space-y-14 text-zinc-700 font-figtree font-normal text-[16px] mb-16">
        {/* Section */}
        <section>
          <h2 className="font-figtree font-medium text-2xl text-zinc-900 text-center mb-4">
            Information We Collect
          </h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-zinc-500 text-lg">
            <p>We may collect the following types of information:</p>
            <li>
              Personal Information: Such as your name, email address, phone
              number, or company name when you fill out a contact form or
              subscribe to our newsletter.
            </li>
            <li>
              Usage Data: Information on how you interact with our website,
              including IP address, browser type, pages visited, and time spent.
            </li>
            <li>
              Cookies and Tracking Technologies: We use cookies to enhance your
              browsing experience and analyze website traffic.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-figtree font-medium text-2xl text-zinc-900 text-center mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-zinc-500 text-lg">
            <p>We use the collected information for purposes such as:</p>
            <li>Responding to your inquiries or requests</li>
            <li>Providing and maintaining our services</li>
            <li>Improving our website and user experience</li>
            <li>
              Sending occasional marketing communications (you can opt-out at
              any time)
            </li>
            <li>Ensuring security and preventing fraudulent activity</li>
          </ul>
        </section>

        <section>
          <h2 className="font-figtree font-medium text-2xl text-zinc-900 text-center mb-4">
            Sharing Your Information
          </h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-zinc-500 text-lg">
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with:
            </p>
            <li>
              Trusted service providers who assist in operating our website or
              providing services, under strict confidentiality agreements
            </li>
            <li>
              Legal authorities if required by law or to protect our rights
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-figtree font-medium text-2xl text-zinc-900 text-center mb-4">
            Data Security
          </h2>
          <p className="max-w-3xl mx-auto text-zinc-500 text-lg">
            We take appropriate technical and organizational measures to protect
            your personal data against unauthorized access, loss, or misuse.
          </p>
        </section>

        <section>
          <h2 className="font-figtree font-medium text-2xl text-zinc-900 text-center mb-4">
            Your Rights
          </h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-zinc-500 text-lg">
            <p>You have the right to:</p>
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your information</li>
            <li>Withdraw your consent at any time</li>
          </ul>
          <p className="max-w-3xl mx-auto text-zinc-500 text-lg mt-4">
            To exercise any of these rights, please contact us at [your email
            address].
          </p>
        </section>

        <section>
          <h2 className="font-figtree font-medium text-2xl text-zinc-900 text-center mb-4">
            Third-Party Links
          </h2>
          <p className="max-w-3xl mx-auto text-zinc-500 text-lg">
            Our website may contain links to other websites. We are not
            responsible for the privacy practices or content of those external
            sites.
          </p>
        </section>

        <section>
          <h2 className="font-figtree font-medium text-2xl text-zinc-900 text-center mb-4">
            Changes to This Policy
          </h2>
          <p className="max-w-3xl mx-auto text-zinc-500 text-lg">
            We may update this Privacy Policy occasionally to reflect changes in
            our practices or applicable laws. We encourage you to review it
            periodically.
          </p>
        </section>
        <hr
          className="relative h-0.5 border-0 z-40 mb-40"
          style={{
            background: "#E5E5E5",
          }}
        />
      </main>

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
            <a href="#" className="hover:underline">
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

export default PrivacyPolicy;
