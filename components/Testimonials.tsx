import React, { useRef, useState } from "react";

// Testimonial Data
const testimonials = [
  {
    name: "Haceisge",
    title: "Alumni, Class of 2023",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    videoThumbnail:
      "https://i.pinimg.com/originals/be/5a/33/be5a3317df6fde2dfca0800623805f13.png",
    video: "/videos/review1.mp4",
  },
  {
    name: "Priya Sharma",
    title: "Lead Designer, Vogue",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    videoThumbnail:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
    video: "/videos/review2.mp4",
  },
  {
    name: "Rahul Verma",
    title: "Founder, R.V. Couture",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    videoThumbnail:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop",
    video: "/videos/review3.mp4",
  },
  {
    name: "Jessica Chen",
    title: "Stylist, Elle Magazine",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    videoThumbnail:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    video: "/videos/review4.mp4",
  },
];

// Play Icon
const PlayIcon: React.FC = () => (
  <svg
    className="w-12 h-12 text-white"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
);

// Testimonial Card
const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({
  testimonial,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleToggleVideo = () => {
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      videoRef.current?.play();
    }
  };

  return (
    <div className="flex-shrink-0 w-[95%] sm:w-[50%] md:w-[35%] lg:w-[28%] snap-start">
      <div
        className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-black/30 shadow-md hover:shadow-xl transition-all duration-500"
        onClick={handleToggleVideo}
      >
        {!isPlaying ? (
          <>
            <img
              src={testimonial.videoThumbnail}
              alt={testimonial.name}
              className="w-full h-[28rem] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-gradient-to-br from-red-600 to-rose-500 rounded-full p-3 shadow-xl shadow-black/40 animate-pulse">
                <PlayIcon />
              </div>
            </div>
          </>
        ) : (
          <video
            ref={videoRef}
            src={testimonial.video}
            className="w-full h-[28rem] object-cover"
            controls
            autoPlay
            onEnded={() => setIsPlaying(false)}
          />
        )}
      </div>

      <div className="mt-5 flex items-center space-x-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-rose-500 ring-1 ring-white"
        />
        <div>
          <p className="font-semibold text-black text-lg">{testimonial.name}</p>
          <p className="text-sm text-gray-800">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-rose-50 to-red-100 overflow-hidden">
      <div className="absolute top-0 -left-10 w-96 h-96 bg-red-200/40 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 -right-10 w-96 h-96 bg-rose-200/40 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-12">
          <div className="mb-6 sm:mb-0">
            <p className="text-rose-600 font-semibold mb-2 tracking-widest uppercase">
              Curious what our students achieve?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black">
              Hear what our alumni are saying
            </h2>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleScroll("left")}
              className="p-3 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-300/50 hover:scale-105 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-3 rounded-full bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-lg shadow-rose-300/50 hover:scale-105 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
