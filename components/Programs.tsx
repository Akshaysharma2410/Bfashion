import React, { useState } from "react";
import { motion } from "framer-motion";

const programs = [
  {
    id: 1,
    title: "Fashion CAD",
    image:
      "./images/img2.jpg",
    description:
      "Master digital fashion design tools to create precise, industry-ready garment concepts and technical flats.",
  },
  {
    id: 2,
    title: "Garment Construction",
    image:
      "./images/img7.webp",
    description:
      "Learn the complete process of transforming designs into perfectly stitched, production-ready garments.",
  },
  {
    id: 3,
    title: "Draping",
    image:
      "./images/img6.webp",
    description:
      "Explore creative fabric manipulation techniques to develop silhouettes directly on the dress form",
  },
  {
    id: 4,
    title: "Pattern Making",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200",
    description:
      "Build a strong foundation in drafting accurate patterns that ensure flawless garment fit and structure.",
  },
  {
    id: 5,
    title: "Fabric Painting",
    image:
      "./images/img1.jpg",
    description:
      "Discover artistic surface-design techniques to enhance fabrics with custom hand-painted motifs.",
  },
  {
    id: 6,
    title: "Fashion Illustration",
    image:
      "./images/img3.png",
    description:
      "Develop professional sketching skills to express garment ideas through dynamic fashion figures.",
  },
  {
    id: 7,
    title: "Fashion Embroidery",
    image:
      "./images/img4.jpg",
    description:
      "Learn intricate hand and machine embroidery techniques to create luxurious, detailed surface embellishments.",
  },
  
];

export default function ProgramsCarousel() {
  const [index, setIndex] = useState(0);

  const cardWidth = 360; // width of each card
  const gap = 24;        // spacing between cards
  const visibleCards = 3;

  const maxIndex = programs.length - visibleCards;

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="relative bg-black text-white py-20 px-6">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-600">
          Step Into the World of Fashion
        </h2>
        <p className="text-gray-400 mt-3 text-lg max-w-3xl mx-auto">
          Explore industry-ready fashion programs curated to unlock creativity and career opportunities.
        </p>
      </div>

      {/* Main Container Increased Size */}
      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: -(index * (cardWidth + gap)),
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            gap: `${gap}px`,
          }}
        >
          {programs.map((program) => (
            <div
              key={program.id}
              className="min-w-[360px] bg-gradient-to-b from-rose-700/40 to-black border border-rose-500/20 shadow-xl rounded-3xl overflow-hidden"
            >
              <div className="relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{program.description}</p>

              </div>
            </div>
          ))}
        </motion.div>

        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-3 rounded-full border border-rose-500/40"
        >
          <svg width="24" height="24" stroke="white" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" fill="none" />
          </svg>
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-3 rounded-full border border-rose-500/40"
        >
          <svg width="24" height="24" stroke="white" strokeWidth="2">
            <path d="M9 6l6 6-6 6" fill="none" />
          </svg>
        </button>
      </div>
    </section>
  );
}
