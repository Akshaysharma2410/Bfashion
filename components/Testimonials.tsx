import React, { useRef, useState } from "react";

// Instagram Reel URLs
const testimonials = [
  { video: "https://www.instagram.com/reel/C8WH22NvJlD/?igsh=MWxxOHY3YmY3a3AxMA==" },
  { video: "https://www.instagram.com/reel/DAQNDQkMJms/?igsh=MXJnc3pnZXRpbXFhcg==" },
  { video: "https://www.instagram.com/reel/DAiEmOGP9dB/?igsh=MXNkOGY5MnZqMTl5ZQ==" },
  { video: "https://www.instagram.com/reel/DGzwcE0zQJc/?igsh=MTJxMmtoOHN4YXZoZg==" },
];

// Convert Instagram URL → Embed URL
const toEmbed = (url: string) => {
  try {
    const u = new URL(url);
    const [type, code] = u.pathname.split("/").filter(Boolean);
    return `https://www.instagram.com/${type}/${code}/embed`;
  } catch {
    return url;
  }
};

const TestimonialCard: React.FC<{ url: string }> = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex-shrink-0 w-[75%] sm:w-[40%] md:w-[28%] lg:w-[22%] cursor-pointer group">
      <div
        className="
          relative rounded-3xl overflow-hidden
          bg-gradient-to-br from-[#ffafbd] to-[#ffc3a0]
          p-[2px]
          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
          hover:shadow-[0_15px_45px_rgba(0,0,0,0.35)]
          transition-all duration-500
          hover:scale-[1.03]
        "
        onClick={() => setIsPlaying(true)}
      >
        {/* Card Inner Container */}
        <div className="rounded-3xl bg-black overflow-hidden relative h-[30rem]">

          {/* Video iframe (cropped + zoomed to hide UI) */}
          <iframe
            src={toEmbed(url)}
            className={`
              absolute w-full h-[40rem]
              left-0 top-[-55px]
              scale-[1.22] origin-top
              transition-all duration-700
              ${isPlaying ? "pointer-events-auto" : "pointer-events-none"}
            `}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />

          {/* Modern Play Button Overlay */}
          {!isPlaying && (
            <div className="
              absolute inset-0 bg-black/50 
              backdrop-blur-sm flex items-center justify-center
              transition-all duration-500 group-hover:bg-black/40
            ">
              <div className="
                bg-white/20 backdrop-blur-md 
                rounded-full p-7 shadow-lg
                group-hover:scale-110 transition
              ">
                <svg
                  className="w-14 h-14 text-white drop-shadow-xl"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.5 5.5l9 4.5-9 4.5v-9z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Caption (Modern Look) */}
      <p className="mt-3 text-center text-lg font-semibold text-gray-900">
        Student Testimonial
      </p>
      <p className="text-center text-sm text-gray-600 tracking-wide">
        Real Experience • Real Results
      </p>
    </div>
  );
};

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-rose-50">
      {/* Background Glow Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-rose-200/50 blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-200/50 blur-[150px] -z-10" />

      <div className="container mx-auto px-6 lg:px-10">
        
        {/* Heading */}
        <div className="mb-14 text-center w-full">
          <div>
            <p className="text-rose-600 w-full font-semibold items-center tracking-widest uppercase text-m">
              Student Success Stories
            </p>
            <h2 className="text-4xl lg:text-6xl font-extrabold">
              Video Testimonials
            </h2>
            <p className="mt-2 text-gray-600">
              See what our students say about their journey with us.
            </p>
          </div>

          {/* Scroll Arrows */}
          {/* <div className="flex items-center space-x-4">
            <button
              onClick={() => handleScroll("left")}
              className="
                p-3 rounded-full bg-rose-500 text-white
                shadow-[0_8px_20px_rgba(244,63,94,0.4)]
                hover:scale-110 transition
              "
            >
              <svg className="h- w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => handleScroll("right")}
              className="
                p-3 rounded-full bg-red-500 text-white
                shadow-[0_8px_20px_rgba(239,68,68,0.4)]
                hover:scale-110 transition
              "
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div> */}
        </div>

        {/* Horizontal Card Row */}
        <div
          ref={scrollRef}
          className="flex space-x-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} url={t.video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
