import React, { useEffect, useState } from 'react';

const BfashionLogo: React.FC = () => (
  <img 
    src="/images/logo.png" 
    alt="bFashion Logo" 
    className="w-36 sm:w-44 object-contain"
  />
);

const PhoneIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" 
       viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" 
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const WhatsAppIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.612-.918-2.21-.242-.579-.487-.5-.67-.51-.173-.009-.372-.011-.57-.011s-.521.075-.795.372c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.711.226 1.358.194 1.871.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.289.173-1.412-.074-.124-.272-.198-.57-.347zM12.004 2C6.48 2 2 6.48 2 12.004c0 1.963.518 3.882 1.501 5.554L2 22l4.58-1.477A9.94 9.94 0 0012.004 22C17.528 22 22 17.52 22 12.004 22 6.48 17.528 2 12.004 2z" />
  </svg>
);

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none"
       viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-md bg-black/80 shadow-lg py-3 animate-fade-down' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
        
        {/* LOGO */}
        <BfashionLogo />

        {/* CTA BUTTONS */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/918427123322?text=Hi!%20I'm%20interested%20in%20Fashion%20Design%20Courses"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-green-400/40"
          >
            <WhatsAppIcon />
            <span className="ml-2 hidden sm:inline">Chat on WhatsApp</span>
          </a>

        

          {/* Apply Now CTA */}
          <a
            href="#apply-form"
            className="hidden sm:flex items-center text-sm font-semibold text-white bg-gradient-to-r from-red-700 to-red-500 hover:to-red-600 px-6 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-400/30"
          >
            Apply Now
            <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
