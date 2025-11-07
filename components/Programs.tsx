import React from "react";
import { motion } from "framer-motion";

const programs = [
  {
    id: 1,
    title: "Fashion Illustration & Styling",
    level: "BEGINNER",
    mentor: "Elena Vogue",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop",
    description:
      "Learn the art of illustrating your creative ideas into stunning fashion concepts with professional styling techniques.",
  },
  {
    id: 2,
    title: "Fashion CAD & Draping",
    level: "INTERMEDIATE",
    mentor: "Ava Couture",
    image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?q=80&w=1200&auto=format&fit=crop",
    description:
      "Master digital fashion tools and create realistic garment prototypes using modern design software and draping skills.",
  },
  {
    id: 3,
    title: "Luxury Fashion Design",
    level: "ADVANCED",
    mentor: "Sophia Milan",
    image: "https://images.unsplash.com/photo-1520975918311-3e8c6a8c71b5?q=80&w=1200&auto=format&fit=crop",
    description:
      "Design couture-level collections and develop your personal fashion identity with high-end detailing and creativity.",
  },
];

export default function ProgramsSection() {
  return (
    <section className="relative bg-black text-white py-20 px-6">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-600">
          Step Into the World of Fashion
        </h2>
        <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
          Master fashion design with our expertly curated programs — designed to unlock your creative potential and career.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {programs.map((program) => (
          <motion.div
            key={program.id}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl overflow-hidden bg-gradient-to-b from-rose-700/40 to-black border border-rose-500/20 shadow-lg hover:shadow-rose-700/40"
          >
            <div className="relative">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute bottom-3 left-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500 to-red-500 flex items-center justify-center text-sm font-semibold">
                  {program.mentor[0]}
                </div>
                <div>
                  <p className="text-xs text-gray-300 uppercase tracking-wide">Mentor</p>
                  <p className="font-semibold text-white text-sm">{program.mentor}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-400 text-sm mb-5">{program.description}</p>

              <div className="flex justify-between items-center">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    program.level === "BEGINNER"
                      ? "bg-rose-500/20 text-rose-400"
                      : program.level === "INTERMEDIATE"
                      ? "bg-pink-500/20 text-pink-400"
                      : "bg-red-600/20 text-red-400"
                  }`}
                >
                  {program.level}
                </span>
                <button className="bg-gradient-to-r from-rose-500 to-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:from-rose-600 hover:to-red-700 transition-all duration-300">
                  View Course
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-rose-500 to-red-600 text-white font-semibold px-8 py-3 rounded-full hover:from-rose-600 hover:to-red-700 transition-all">
          View All Programs
        </button>
      </div>
    </section>
  );
}
