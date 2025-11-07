import React from 'react';

const BfashionLogo: React.FC = () => (
  <img 
    src="/images/logo.png" 
    alt="bFashion Logo" 
    style={{ width: "150px", height: "40px", objectFit: "contain" }} 
  />
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        
        { <div className="flex justify-center mb-6">
        <BfashionLogo />
        </div> }
        <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
        <div className="flex justify-center items-center text-gray-300 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
            <span>SCO 64-65, 2th Floor, Sector-34A, Chandigarh, India</span>
        </div>
        <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Admission Helpline Number: <a href="tel:+918427123322" className="hover:text-brand-gold transition-colors font-semibold">+91 84271 23322</a>
        </p>

        <div className="border-t border-gray-700 pt-8 mt-8 text-sm text-gray-500">
          <p>Copyright © 2025 All Rights Reserved for Bfashion Academy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;