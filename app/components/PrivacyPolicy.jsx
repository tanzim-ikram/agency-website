import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import ShortFooter from "./ShortFooter";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-center">
      {/* Title Section */}
      <header className="bg-gradient-to-br from-fuchsia-50 via-indigo-100 to-indigo-200 py-15 sm:py-18 px-5 lg:px-8 xl:px-[8%]">
        <h1
          className="font-sen font-normal text-[28px] sm:text-4xl md:text-5xl text-zinc-900 mb-5 sm:mb-3 mt-16"
          style={{ lineHeight: "1.1" }}
        >
          Privacy Policy
        </h1>
        <p
          className="font-figtree font-normal text-lg text-zinc-500 sm:max-w-4xl mx-auto max-w-sm"
          style={{ lineHeight: "1.6" }}
        >
          At Farasha Digital, we are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, and safeguard your
          personal information when you visit our website or use our services.
        </p>

        <button
          type="button"
          className="mt-8 px-5 py-3.5 rounded-full font-figtree font-semibold text-lg bg-gradient-to-br from-fuchsia-50/10 via-indigo-100/80 to-indigo-200/80"
          style={{
            color: "rgba(0, 0, 0, 0.7)",
          }}
        >
          Last updated: November 2025
        </button>
      </header>

      {/* Content Section */}
      <main className="pt-15 sm:pt-20 max-w-xs sm:max-w-3xl mx-auto text-left space-y-14 text-zinc-700 font-figtree font-normal text-[16px] mb-16">
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
          className="hidden sm:block relative h-0.5 border-0 z-40 mb-40"
          style={{
            background: "#E5E5E5",
          }}
        />
      </main>
      <ShortFooter />
    </div>
  );
};

export default PrivacyPolicy;
