import React from "react";
import { motion } from "framer-motion";

// --- Icon Components ---
const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
);

const EarningPotential: React.FC = () => {
  const backgroundImageUrl = "/images/fashion3.jpg";

  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* --- White Overlay with Fade Effect --- */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/80  to-white/10  w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      ></motion.div>

      {/* --- Content Section --- */}
      <div className="relative container mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* --- LEFT SIDE: Text Box --- */}
        <motion.div
          className="z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="p-8 sm:p-12 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg">
            <p className="flex items-center text-sm sm:text-lg font-medium tracking-wide mb-3 text-red-600 uppercase">
              <span className="w-3 h-3 rounded-full mr-2 bg-red-600 animate-pulse"></span>
              Create • Earn • Succeed
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              <span className="text-red-700">Design Your Future,</span>
              <br />
              Define Your Worth
            </h2>

            <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">
              Unlock Limitless Career & Earning Opportunities
            </h4>

            <p className="text-gray-700 mb-3 text-lg leading-relaxed">
              Fashion designing is not just about fabrics and sketches — it’s a{" "}
              <span className="text-red-700 font-semibold">
                high-value profession
              </span>{" "}
              that transforms creativity into success and financial freedom.
            </p>

            <p className="text-gray-600 mb-3 text-lg leading-relaxed">
              The global fashion industry is booming, and skilled designers are
              earning recognition, fame, and impressive paychecks worldwide.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="text-red-700 font-semibold">
                At BFashion Academy,
              </span>{" "}
              we don’t just teach fashion — we mentor you to turn your designs
              into a{" "}
              <span className="text-red-700 font-semibold">
                profitable, sustainable career
              </span>
              .
            </p>

            <p className="text-gray-500 italic mt-8 text-lg border-l-4 border-red-500 pl-4">
              “Your creativity deserves more than applause — it deserves
              income.”
            </p>

            <a
              href="tel:+91 842712332"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transition-all duration-300 group"
            >
              Contact US!
              <span className="bg-white/10 rounded-full p-1 ml-3 group-hover:translate-x-2 transition-transform duration-300">
                <ArrowRightIcon className="w-6 h-6 text-white" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EarningPotential;
