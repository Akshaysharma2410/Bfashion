import React from 'react';

// --- Icon Components (Keeping your original icons) ---
const CheckIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-red-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

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

// --- Main CareerPath Component ---

const CareerPath: React.FC = () => {
  const careerPaths = [
    'Fashion Illustrator',
    'Fashion Designer',
    'Fashion CAD',
    'Fashion Consultant',
    'Garment Technologist',
    'Fashion Merchandiser',
    'Personal Stylist',
    'Own Fashion Studio',
  ];

  // NOTE: Using a placeholder URL that simulates a high-quality fashion image
   const backgroundImageUrl = '../public/images/designers.png'; 

  return (
    // Apply bg-fixed for parallax and min-h-screen for effective vertical centering
    <section 
      className="relative py-20 sm:py-28 overflow-hidden bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Full Section Overlay: Darkens the background image to ensure text contrast */}
      <div className="absolute inset-0 bg-white/45"></div>

      {/* Content Container: Use Flexbox to center the content panel */}
      <div className="relative container mx-auto px-6 flex items-center justify-center h-full">
        
        {/* Centralized Content Panel (Max Width and Centered Text) */}
        <div className="text-white max-w-9xl w-full mx-auto
                       bg-gradient-to-br from-red-950/90 to-stone-950/90 border border-red-900/20 rounded-3xl p-8 sm:p-12 lg:p-16 
                       shadow-[0_0_80px_rgba(255,255,255,0.08)] backdrop-blur-md z-10 text-center">
          
          <p className="text-sm sm:text-lg font-medium text-red-200 tracking-widest mb-4 uppercase">
           Fashion Dreams to Reality
          </p>

          <h2 className="text-4xl sm:text-6xl font-extrabold max-w-4xl mb-6 leading-tight mx-auto ">
            Build a <span className="text-red-500">Glamorous Career</span> in
            Fashion Designing
          </h2>

          <p className="text-white/80 mb-6 text-lg leading-relaxed">
            Studying fashion at <span className="text-red-400 font-semibold">BFashion Academy</span> means stepping into a world where your imagination meets opportunity.
          </p>
          <p className="text-white/70 mb-10 text-lg leading-relaxed">
            From runway shows to brand styling, our training prepares you for
            success in every corner of the fashion world. Explore the career
            paths that await you:
          </p>

          {/* Career Paths Grid: Adjusted for better visual flow in a centered panel */}
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-x-6 gap-y-4 mb-10 text-left justify-items-center sm:justify-items-start">
            {careerPaths.map((path, index) => (
              <div
                key={index}
                className="flex items-center text-white/90 hover:text-red-400 transition-all duration-300 min-w-full"
              >
                <span className="flex items-center justify-center w-8 h-8 bg-white/10 border border-red-600/30 rounded-full mr-3 shadow-inner shrink-0">
                  <CheckIcon />
                </span>
                <span className="text-lg font-medium">{path}</span>
              </div>
            ))}
          </div>

        <div className="flex gap-5 justify-center items-center">
            <a
            href="https://wa.me/842712332"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transition-all duration-300 group mt-4"
          >
            Chat on WhatsApp
            <span className="bg-white/10 rounded-full p-1 ml-3 group-hover:translate-x-2 transition-transform duration-300">
              <ArrowRightIcon className="w-6 h-6 text-white" />
            </span>
          </a>
           <a
            href="tel:+91 842712332"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center  hover:bg-red-700 border border-neutral-100 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transition-all duration-300 group mt-4"
          >
            Learn More
            <span className="bg-white/10 rounded-full p-1 ml-3 group-hover:translate-x-2 transition-transform duration-300">
              <ArrowRightIcon className="w-6 h-6 text-white" />
            </span>
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPath;