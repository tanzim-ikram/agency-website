import Image from "next/image";

const testimonials = [
  {
    id: 1,
    avatar: "/home/Memojis1.png",
    quote: "Best time manager app",
    text: "This app has been a lifesaver! I used to forget tasks, but now I'm always on top of my day.",
    name: "Sophie More",
    company: "CTO of Lambda",
  },
  {
    id: 2,
    avatar: "/home/Memojis1.png",
    quote: "Just love it",
    text: "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
    name: "Sophie More",
    company: "CTO of Lambda",
  },
  {
    id: 3,
    avatar: "/home/Memojis2.png",
    quote: "Highly recommend",
    text: "This app has saved me so much time and I don't constantly forget important dates. You should test it!",
    name: "Sophie More",
    company: "CTO of Lambda",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-15 sm:py-0 sm:pt-25 overflow-hidden bg-white">
      <div className="absolute top-5 right-0 z-10">
        <Image
          src="/home/BG lines.png"
          alt="Background Ellipse 1"
          height={2880}
          width={2400}
          priority
          className="opacity-100 sm:opacity-40"
        />
      </div>
      {/* Heading */}
      <div className="text-center relative z-30">
        <h2 className="font-sen text-[28px] sm:text-6xl text-zinc-900 font-normal mb-4">
          Testimonials
        </h2>
        <p className="max-w-xs sm:max-w-2xl mx-auto text-center font-figtree text-zinc-500 text-lg mb-8 sm:mb-20 font-normal">
          At Farasha Digital, client feedback drives our growth and inspires us
          to deliver innovative solutions and build lasting partnerships.
        </p>
      </div>

      {/* Overlay Images */}
      <Image
        src="/home/overlay3.png"
        alt="left overlay"
        width={200}
        height={200}
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 z-40 hidden md:block"
      />
      <Image
        src="/home/overlay4.png"
        alt="right overlay"
        width={200}
        height={200}
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block"
      />
      {/* Cards */}
      <div className="overflow-x-auto px-4 relative z-20 scrollbar-hide">
        <div className="flex gap-6 md:gap-7.5 w-max px-2 md:px-20">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-[380px] md:min-w-[450px] max-w-[450px] md:max-w-[470px] bg-white border border-neutral-200 rounded-xl shadow-sm p-10 shrink-0 flex flex-col hover:bg-violet-50"
            >
              {/* Avatar & Quote */}
              <div className="flex items-center gap-2 mb-4 sm:mb-2">
                <Image
                  src={testimonial.avatar}
                  alt="avatar"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <h3 className="font-sen text-zinc-900 font-bold text-2xl leading-[100%]">
                  “{testimonial.quote}”
                </h3>
              </div>

              {/* Text */}
              <p className="font-figtree text-zinc-700 flex-grow text-lg leading-[160%] mb-4 sm:mb-2">
                {testimonial.text}
              </p>

              {/* Name & Company & Logo fixed at bottom */}
              <div className="flex items-center justify-between text-sm text-zinc-900 mt-auto">
                <div>
                  <p className="font-bold leading-[142%]">{testimonial.name}</p>
                  <p className="font-figtree text-zinc-500 text-sm font-normal leading-[160%]">
                    {testimonial.company}
                  </p>
                </div>
                <Image
                  src="/home/sisyphus.png"
                  alt="Sisyphus logo"
                  width={100}
                  height={40}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/home/overlay5.png"
        alt="bottom overlay"
        width={1440}
        height={185}
        className="hidden md:block relative z-40"
      />
    </section>
  );
}
