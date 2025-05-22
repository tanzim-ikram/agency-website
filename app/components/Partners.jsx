import React from "react";
import Image from "next/image";

const partners = () => {
  return (
    <div>
      <section className="w-full py-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-zinc-500 font-figtree font-medium text-md mb-6">
            Trusted by leading brands and startups
          </p>

          <div className="flex justify-center items-center">
            <Image
              src="/home/Partner-Logos.png"
              alt="Galileo"
              width={675}
              height={30}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default partners;
