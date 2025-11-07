import React, { useState } from "react";

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

const ApplyForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    city: "",
    course: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your application!");
  };

  const inputClasses =
    "w-full bg-transparent border-0 border-b border-stone-400/50 focus:border-white outline-none py-2 px-1 placeholder-stone-300 text-white transition-colors";

  return (
    <div className="backdrop-blur-2xl bg-white/10 p-8 rounded-2xl w-full max-w-lg shadow-2xl border border-white/20 relative overflow-hidden">
      {/* Shimmer light effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-400/10 via-white/5 to-transparent animate-shimmer"></div>

      <div className="relative z-10">
        <p className="flex items-center text-sm font-medium mb-2 text-pink-100 tracking-wide">
          <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
          EXCLUSIVE OFFER
        </p>
        <h2 className="text-2xl font-extrabold mb-6 text-white leading-tight">
          Apply for Your Fashion Future
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              required
              onChange={handleChange}
              className={inputClasses}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              required
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp / Alternate Number*"
            onChange={handleChange}
            className={inputClasses}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              required
              onChange={handleChange}
              className={inputClasses}
            />
            <input
              type="text"
              name="city"
              placeholder="City*"
              required
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <select
            name="course"
            required
            onChange={handleChange}
            className={`${inputClasses} text-stone-200`}
          >
            <option value="">Select Course</option>
            <option value="fashion-design">Fashion Design</option>
            <option value="skill-development">Skill Development</option>
            <option value="fine-art">Fine Art</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message*"
            required
            onChange={handleChange}
            className={inputClasses}
            rows={2}
          ></textarea>

          <div className="flex items-center space-x-3 my-3 text-stone-300">
            <input
              type="checkbox"
              id="recaptcha"
              className="h-5 w-5 accent-pink-500 rounded focus:ring-pink-400"
            />
            <label htmlFor="recaptcha" className="text-sm">
              I'm not a robot
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-rose-600 font-semibold py-3 px-6 rounded-full flex items-center justify-center group transition-all duration-300 text-white hover:from-pink-600 hover:to-rose-700 text-lg shadow-lg"
          >
            Submit Now
            <span className="rounded-full p-1 ml-3 group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRightIcon className="w-5 h-5" />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/banner.mp4" type="video/mp4" autoPlay={true} />
        {/* You can use other formats like webm */}
      </video>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent"></div>

      {/* Floating ambient glows */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-pink-500/30 blur-3xl rounded-full animate-float-slow"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-rose-400/20 blur-3xl rounded-full animate-float"></div>

      <div className="relative container mx-auto px-4 grid lg:grid-cols-2 items-center gap-1 z-10">
        {/* Left Content */}
      <div className="text-white text-center sm:text-left space-y-4 max-w-3xl">
  <h4 className="text-lg sm:text-xl tracking-widest uppercase text-pink-200 font-medium">
    Step Into the World of fashion with
  </h4>

  <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold leading-tight">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-350 to-red-300">
      {/* Fashion Designing & Glamorous Future */}
      {/* Creativity & Confidence */}
      {/* Fashion Designing & Career Success */}
      Innovation & Imagination
    </span>
  </h1>

  <p className="text-base sm:text-lg lg:text-xl text-stone-200 leading-relaxed max-w-2xl [text-shadow:_2px_2px_4px rgb(0 0 0)]">
    Explore the elegance of creativity and redefine trends with the 
    <span className="text-pink-200 font-semibold "> <br/>Best Fashion Designing Course in Chandigarh</span>.  
    Your runway to success starts here.
  </p>

  
</div>


        {/* Right Form */}
        <div className="flex justify-center lg:justify-end">
          <ApplyForm />
        </div>
      </div>

      {/* Soft floating glow layers */}
      <div className="absolute -bottom-10 left-0 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400/10 blur-3xl rounded-full animate-pulse-slow"></div>
    </section>
  );
};


export default Hero;

