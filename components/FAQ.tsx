import React, { useState } from "react";
import { motion } from "framer-motion";

// --- FAQ Data with unique IDs (Unchanged) ---
const faqData = [
  {
    id:1,
    question: "What is the duration of the fashion design courses?",
    answer:
      "Our fashion design courses range from a 6-month certificate program to a 3-year advanced diploma. We offer flexible options to suit different learning needs and career goals.",
  },
  {
    id: 2,
    question: "Are there any prerequisites for enrolling?",
    answer:
      "For our diploma and degree courses, a high school diploma (10+2) or equivalent is required. For certificate courses, there are no specific academic prerequisites — just a passion for fashion!",
  },
  {
    id: 3,
    question: "Do you provide placement assistance?",
    answer:
      "Yes, we have a dedicated placement cell that works with top fashion houses and brands. We provide complete placement support, including portfolio building and interview preparation.",
  },
  {
    id: 4,
    question: "What is the fee structure?",
    answer:
      'The fee structure varies depending on the course duration. Please click the "Apply Now" button, and our counselor will share detailed information about fees and available scholarships.',
  },
  {
    id: 5,
    question: "Can I specialize in a specific area of fashion?",
    answer:
      "Absolutely! You can specialize in apparel design, textile design, fashion illustration, or garment construction — whichever fits your dream career path!",
  },
];

// --- Icons (Updated to use Red accent color) ---
const PlusIcon = ({ colorClass = 'text-red-600' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-7 w-7 transition-transform duration-300 ${colorClass}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const MinusIcon = ({ colorClass = 'text-red-600' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-7 w-7 transition-transform duration-300 ${colorClass}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
  </svg>
);

// --- Redesigned FAQ Item Component ---
const FAQItem = ({ item, isOpen, onClick }) => (
  // Using a deep gray background for the item to create contrast against the FAQ section's background
  <div className="border-b border-gray-700 last:border-b-0 py-5 group bg-gray-900 px-4 rounded-lg mb-2 transition-all duration-300 hover:bg-gray-800">
    <button
      className="w-full flex justify-between items-start text-left"
      onClick={onClick}
    >
      {/* Question: Stark White text */}
      <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300 pr-4">
        {item.question}
      </h3>
      {/* Icon: Uses Red accent color and smooth rotation */}
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0"
      >
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </motion.span>
    </button>
    <div
      className={`grid transition-all duration-700 ease-in-out ${
        isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
      }`}
    >
      <div className="overflow-hidden">
        {/* Answer: Subtle Gray text with a Red marker line */}
        <p className="pb-1 text-gray-400 text-base border-l-4 border-red-600 pl-4 ml-2">
          {item.answer}
        </p>
      </div>
    </div>
  </div>
);

// --- Main FAQ Section (Fashion Noir) ---
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    // Deep Black background for maximum drama and contrast
    <section className="relative bg-neutral-800 py-28 px-6 overflow-hidden">
      {/* Decorative Geometric Elements: Red glow for drama */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 transform -rotate-12 blur-[150px] rounded-full -z-10 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-800/10 transform rotate-45 blur-[150px] rounded-3xl -z-10 opacity-50"></div>

      {/* Grid container: Swap is done here */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* --- LEFT SIDE (Image + Text Overlay Billboard) --- */}
        <motion.div
          className="pt-10 min-h-[500px] lg:h-full max-h-[95vh] lg:sticky lg:top-8" // Adjusted height classes here
          initial={{ opacity: 0, x: -50 }} // Adjusted initial x for left-side animation
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image Container: Relative parent for absolute children */}
          <div className="relative w-full h-full">
            
            {/* Image (Background) */}
            <img
              // Using a placeholder image for robustness in all environments
              src="./public/images/faq image.jpg"
              alt="Fashion Designer sketching"
              className="w-full h-full object-cover"
            />
            
            {/* Dark/Red Tint Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/50 rounded-xl"></div>
            <div className="absolute inset-0 bg-red-900/10 mix-blend-color-burn rounded-xl"></div>

            {/* Text and CTA Content (Absolute Overlay) */}
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 text-center flex flex-col items-center">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight uppercase leading-snug">
                <span className="text-red-600">Design</span> Your Own Destiny.
              </h3>
              <p className="text-gray-200 max-w-md text-lg font-light mb-8">
                Unlock your creativity, learn from industry experts, and build your dream fashion career. Enrollment is limited and highly competitive.
              </p>

              {/* CTA Button: High-Impact Red Fill */}
              <a href="tel:+91 8427123322">
              <button className="border-2 border-red-600 bg-red-600 text-white px-10 py-4 rounded-full text-xl font-bold shadow-2xl shadow-red-600/50 transition-all duration-300 hover:bg-red-700 hover:scale-[1.05] uppercase tracking-wider">
                APPLY NOW
              </button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE (FAQ Section) --- */}
        <div>
          <motion.h2
            className="text-5xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-red-600">FAQ</span>: The Details.
          </motion.h2>
          <p className="text-gray-400 mb-10 max-w-xl text-lg font-light">
            Got questions about our Fashion Designing programs? Here’s everything you need to know before stepping into the world of creative design.
          </p>
          
          {/* FAQ Container: Items have their own dark background for structure */}
          <div className="bg-black/80 rounded-xl p-0 shadow-2xl shadow-red-900/10 border border-gray-800">
            {faqData.map((item) => (
              <FAQItem
                item={item}
                isOpen={openIndex === item.id}
                onClick={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;