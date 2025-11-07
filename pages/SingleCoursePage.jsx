import React from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Fashion Illustration & Styling",
    mentor: "Elena Vogue",
    level: "BEGINNER",
    duration: "6 Months",
    placement: "100% Placement Assistance",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop",
    description:
      "Step into the vibrant world of fashion illustration and styling! This course will teach you how to visualize ideas, draw creative outfits, and style garments like a pro. Learn from expert mentors and explore both digital and hand-drawn techniques to create designs that captivate fashion brands and clients alike.",
    modules: [
      "Introduction to Fashion Illustration",
      "Color Theory & Rendering Techniques",
      "Styling for Different Body Types",
      "Digital Fashion Sketching Tools",
      "Portfolio Development",
    ],
  },
  {
    id: 2,
    title: "Fashion CAD & Draping",
    mentor: "Ava Couture",
    level: "INTERMEDIATE",
    duration: "8 Months",
    placement: "100% Placement Assistance",
    image:
      "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?q=80&w=1200&auto=format&fit=crop",
    description:
      "Fashion CAD & Draping bridges creativity with technology. You’ll master software like Illustrator and CLO3D to design realistic outfits and patterns while learning professional draping methods used in high-end fashion houses. Perfect for students aiming for digital design roles.",
    modules: [
      "Introduction to CAD Tools",
      "Pattern Drafting & Draping Basics",
      "3D Garment Simulation",
      "Fabric Rendering & Texturing",
      "Final Collection Presentation",
    ],
  },
  {
    id: 3,
    title: "Garment Construction Mastery",
    mentor: "Sophia Tailor",
    level: "ADVANCED",
    duration: "12 Months",
    placement: "100% Placement Assistance",
    image:
      "https://images.unsplash.com/photo-1521165947033-58cd5f3b8a68?q=80&w=1200&auto=format&fit=crop",
    description:
      "Turn fabrics into masterpieces with professional garment construction techniques. Learn advanced stitching, finishing, and pattern alignment to create premium, runway-ready designs.",
    modules: [
      "Fabric Selection & Stitch Types",
      "Cutting and Tailoring",
      "Fitting Adjustments",
      "Finishing & Detailing",
      "Collection Showcase",
    ],
  },
  {
    id: 4,
    title: "Fashion Embroidery Artistry",
    mentor: "Lana Threads",
    level: "BEGINNER",
    duration: "4 Months",
    placement: "100% Placement Assistance",
    image:
      "https://images.unsplash.com/photo-1621605815977-c83cfc0aa73c?q=80&w=1200&auto=format&fit=crop",
    description:
      "Add life to fabrics with creative embroidery techniques. This course teaches you both hand and machine embroidery, blending traditional and modern aesthetics.",
    modules: [
      "Hand Embroidery Basics",
      "Machine Embroidery Setup",
      "Creative Patterns & Motifs",
      "Surface Ornamentation",
      "Final Project",
    ],
  },
];

export default function SingleCoursePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="text-center py-40 text-gray-300 text-xl">
        Course not found 😢
      </div>
    );
  }

  // Filter related courses
  const related = courses.filter((c) => c.id !== course.id).slice(0, 3);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[60vh] object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black"></div>

        <div className="absolute bottom-10 left-10 max-w-3xl">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-red-600"
          >
            {course.title}
          </motion.h1>

          <p className="mt-3 text-gray-300 text-lg">
            Guided by{" "}
            <span className="text-rose-400 font-semibold">{course.mentor}</span>
          </p>

          <div className="mt-4 flex items-center gap-3">
            <span className="px-4 py-1 rounded-full text-xs font-semibold bg-rose-600/20 text-rose-400">
              {course.level}
            </span>
            <span className="px-4 py-1 rounded-full text-xs font-semibold bg-pink-500/20 text-pink-300">
              {course.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Course Details */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-3 gap-12"
        >
          {/* Left Section */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold mb-4 text-rose-400">
              About the Course
            </h2>
            <p className="text-gray-300 leading-relaxed mb-10">
              {course.description}
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-rose-400">
              Modules Covered
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {course.modules.map((mod, i) => (
                <li key={i}>{mod}</li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="bg-gradient-to-b from-rose-900/20 to-black border border-rose-600/20 rounded-3xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-rose-400">
              Quick Info
            </h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                <span className="font-semibold text-rose-400">Mentor:</span>{" "}
                {course.mentor}
              </p>
              <p>
                <span className="font-semibold text-rose-400">Duration:</span>{" "}
                {course.duration}
              </p>
              <p>
                <span className="font-semibold text-rose-400">Placement:</span>{" "}
                {course.placement}
              </p>
              <p>
                <span className="font-semibold text-rose-400">Level:</span>{" "}
                {course.level}
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <button className="w-full bg-gradient-to-r from-rose-500 to-red-600 text-white font-semibold py-3 rounded-full hover:from-rose-600 hover:to-red-700 transition-all duration-300">
                Enroll Now
              </button>
              <button className="w-full border border-rose-500 text-rose-400 font-semibold py-3 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Courses Section */}
      <div className="bg-gradient-to-b from-black via-neutral-900 to-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-red-600">
            Related Fashion Courses
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {related.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-900 to-black border border-rose-500/20 shadow-lg hover:shadow-rose-600/20 hover:scale-[1.03] transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/course/${item.id}`)}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 text-xs bg-rose-600/20 text-rose-400 font-semibold rounded-full">
                      {item.level}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Guided by <span className="text-rose-400">{item.mentor}</span>
                  </p>
                  <button className="text-rose-400 font-semibold text-sm hover:text-rose-300 transition">
                    View Details →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
