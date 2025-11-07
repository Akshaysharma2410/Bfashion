import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/**
 * HomePage.jsx
 * BigBoxx Professional Academy - Fashion Design (Luxury Black + Rose theme)
 *
 * Paste in src/pages/HomePage.jsx and import into your router.
 * Replace placeholder images / videos and adjust copy as needed.
 */

const courses = [
  { id: 1, title: "Fashion Designing (Diploma)", short: "360° design workflow — sketch to runway", image: "/images/course-fashion.jpg", level: "Advanced" },
  { id: 2, title: "Fashion CAD & CLO3D", short: "Digital pattern drafting & 3D simulation", image: "/images/course-cad.jpg", level: "Intermediate" },
  { id: 3, title: "Pattern Making & Draping", short: "Precision patterning & creative draping", image: "/images/course-pattern.jpg", level: "Advanced" },
  { id: 4, title: "Embroidery & Surface Ornamentation", short: "Hand & machine techniques for couture", image: "/images/course-embroidery.jpg", level: "Beginner" },
  { id: 5, title: "Fashion Illustration", short: "Editorial illustration & fashion storytelling", image: "/images/course-illustration.jpg", level: "Beginner" },
  { id: 6, title: "Portfolio & Industry Placements", short: "Portfolio building + placement assistance", image: "/images/course-portfolio.jpg", level: "All Levels" },
];

const testimonials = [
  { id: 1, name: "Priya K.", role: "Alumni — Fashion Designer", quote: "BigBoxx transformed my sketches into real collections. The mentors are industry pros.", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 2, name: "Rahul S.", role: "Alumni — CAD Specialist", quote: "CLO3D and CAD classes were top-notch — got placed within 2 months.", video: "" },
  { id: 3, name: "Meera D.", role: "Alumni — Embroidery Artist", quote: "Hands-on workshops and live projects helped me build a strong portfolio.", video: "" },
];

const gallery = [
  { id: 1, type: "image", src: "/images/gallery-1.jpg", alt: "Student runway show" },
  { id: 2, type: "image", src: "/images/gallery-2.jpg", alt: "Stitching lab" },
  { id: 3, type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", alt: "Student project video" },
  { id: 4, type: "image", src: "/images/gallery-3.jpg", alt: "Fabric printing workshop" },
  { id: 5, type: "image", src: "/images/gallery-4.jpg", alt: "Embroidery close-up" },
  { id: 6, type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", alt: "Fashion show highlight" },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#050505] text-white leading-relaxed">
      {/* ===== HERO ===== */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* subtle decorative gradient shapes */}
          <div className="absolute -left-40 top-10 w-[420px] h-[420px] bg-rose-600/6 blur-[80px] rounded-full" />
          <div className="absolute -right-40 bottom-10 w-[420px] h-[420px] bg-pink-500/6 blur-[80px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <p className="inline-block text-sm uppercase tracking-wide px-3 py-1 rounded-full bg-rose-700/20 text-rose-300 mb-6">100% Placement Assistance</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-pink-300 to-rose-500">
                Step Into the World of Fashion
              </h1>
              <p className="text-gray-300 mt-6 max-w-xl">
                BigBoxx Professional Academy — learn couture-level design, digital fashion, and artisanal craft from industry mentors. Hands-on projects, live shows & placement support.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button onClick={() => navigate("/courses")} className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 transition-all px-6 py-3 rounded-full text-sm font-semibold shadow-md">
                  Explore Courses
                </button>
                <button onClick={() => window.location.href = "#contact"} className="px-5 py-3 rounded-full border border-neutral-700 text-sm text-gray-200 hover:bg-neutral-900 transition">
                  Book Free Counselling
                </button>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
                <div><strong className="text-white">Mentors:</strong> Industry professionals from couture brands</div>
                <div className="hidden sm:block">•</div>
                <div><strong className="text-white">Studio:</strong> Live labs, pattern room & runways</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative">
              <div className="rounded-3xl overflow-hidden border border-neutral-800 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <img src="/images/hero-fashion.jpg" alt="Fashion studio" className="w-full h-96 object-cover" />
                <div className="p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-lg font-semibold">Upcoming: Student Runway Showcase</h3>
                  <p className="text-sm text-gray-300 mt-2">See final collections and portfolio presentations — open to public.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* ===== ABOUT ===== */}
      <section className="py-16 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-rose-400">About BigBoxx Professional Academy</h2>
            <p className="text-gray-300 mt-4">
              BigBoxx is a creative incubator for fashion talent — blending traditional craftsmanship with modern digital tools. Our curriculum covers design thinking, pattern-making, garment construction, CAD, styling, and portfolio development. We emphasize real projects, mentorship, and industry exposure.
            </p>

            <ul className="mt-6 space-y-3 text-gray-400">
              <li>• Live studio sessions & internship opportunities</li>
              <li>• Industry mentors & placement assistance</li>
              <li>• Professional portfolio & show-ready collections</li>
            </ul>

            <div className="mt-6 flex gap-4">
              <button onClick={() => navigate("/about")} className="px-5 py-3 rounded-full bg-rose-600/80 hover:bg-rose-600 transition text-white font-semibold">Learn More</button>
              <button onClick={() => navigate("/apply")} className="px-5 py-3 rounded-full border border-neutral-700 text-sm text-gray-200 hover:bg-neutral-900">Apply Now</button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-neutral-800">
              <img src="/images/about-1.jpg" alt="studio class" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-neutral-800">
              <img src="/images/about-2.jpg" alt="students" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-neutral-800">
              <img src="/images/about-3.jpg" alt="fabric" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-neutral-800">
              <img src="/images/about-4.jpg" alt="runway" className="w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== COURSES ===== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold text-white">Our Courses</h2>
            <button onClick={() => navigate("/courses")} className="text-sm text-rose-400 hover:text-rose-300">View All Courses</button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((c) => (
              <motion.div key={c.id} whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="bg-[#0c0c0c] rounded-2xl overflow-hidden border border-neutral-800 shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute left-4 bottom-4 px-3 py-1 rounded-full text-xs bg-rose-700/20 text-rose-300">{c.level}</div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{c.short}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <button onClick={() => navigate(`/course/${c.id}`)} className="px-4 py-2 rounded-full text-sm bg-rose-500/90 hover:bg-rose-600 text-white font-medium">View Course</button>
                    <button onClick={() => navigate("/contact")} className="text-sm text-gray-400 hover:text-rose-300">Enquire</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl font-semibold text-white text-center mb-10">What Our Students Say</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.15 }} className="bg-[#0b0b0b] rounded-2xl p-5 border border-neutral-800">
                {t.video ? (
                  <div className="w-full h-44 mb-4 bg-black rounded overflow-hidden">
                    <iframe title={t.name} src={t.video} className="w-full h-full" frameBorder="0" allowFullScreen></iframe>
                  </div>
                ) : (
                  <div className="w-full h-44 mb-4 rounded bg-neutral-900 flex items-center justify-center text-gray-600">Student Photo</div>
                )}

                <p className="text-gray-300">“{t.quote}”</p>
                <p className="mt-4 text-sm text-rose-400 font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl font-semibold text-white text-center mb-8">Gallery — Work & Studio</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((g) => (
              <motion.div key={g.id} whileHover={{ scale: 1.02 }} transition={{ duration: 0.25 }} className="rounded-2xl overflow-hidden border border-neutral-800 bg-[#0a0a0a]">
                {g.type === "image" ? (
                  <img src={g.src} alt={g.alt} className="w-full h-52 object-cover" />
                ) : (
                  <div className="w-full h-52 bg-black">
                    <iframe title={g.alt} src={g.src} className="w-full h-full" frameBorder="0" allowFullScreen></iframe>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLACEMENT & CTA ===== */}
      <section className="py-20 bg-gradient-to-b from-[#080808] to-[#050505] border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-semibold text-rose-400">Career Outcomes & Placements</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Our alumni work at leading fashion houses, manage brand design studios, and run their own labels. We offer placement support, industry projects and internship tie-ups.</p>

          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-neutral-800">
              <h3 className="text-xl font-bold">100% Placement Assistance</h3>
              <p className="text-gray-400 mt-2 text-sm">Dedicated career coaches & portfolio reviews.</p>
            </div>
            <div className="p-6 rounded-2xl border border-neutral-800">
              <h3 className="text-xl font-bold">Industry Internships</h3>
              <p className="text-gray-400 mt-2 text-sm">Partnerships with ateliers & brands.</p>
            </div>
            <div className="p-6 rounded-2xl border border-neutral-800">
              <h3 className="text-xl font-bold">Portfolio Showcase</h3>
              <p className="text-gray-400 mt-2 text-sm">Runway show & buyer presentations.</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate("/apply")} className="px-8 py-3 rounded-full bg-gradient-to-r from-rose-500 to-red-600 text-white font-semibold">Apply Now</button>
            <button onClick={() => { /* download brochure action */ }} className="px-8 py-3 rounded-full border border-neutral-700 text-gray-200">Download Brochure</button>
          </div>
        </div>
      </section>

      {/* ===== CONTACT / FOOTER ===== */}
      <footer id="contact" className="pt-16 pb-10 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-rose-400">BigBoxx Professional Academy</h4>
            <p className="text-gray-400 mt-3">Creative education in fashion design, pattern-making, CAD, illustration, and embroidery.</p>

            <div className="mt-4 text-sm text-gray-400">
              <div>📍 Chandigarh, India</div>
              <div>✉️ info@bigboxxacademy.com</div>
              <div>📞 +91 98765 43210</div>
            </div>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="text-gray-400 space-y-2">
              <li className="hover:text-rose-300 cursor-pointer" onClick={() => navigate("/")}>Home</li>
              <li className="hover:text-rose-300 cursor-pointer" onClick={() => navigate("/courses")}>Courses</li>
              <li className="hover:text-rose-300 cursor-pointer" onClick={() => navigate("/gallery")}>Gallery</li>
              <li className="hover:text-rose-300 cursor-pointer" onClick={() => navigate("/contact")}>Contact</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Follow Us</h5>
            <div className="flex gap-3">
              <a className="w-10 h-10 rounded-full flex items-center justify-center border border-neutral-800 hover:bg-rose-800/10">IG</a>
              <a className="w-10 h-10 rounded-full flex items-center justify-center border border-neutral-800 hover:bg-neutral-800/10">FB</a>
              <a className="w-10 h-10 rounded-full flex items-center justify-center border border-neutral-800 hover:bg-neutral-800/10">YT</a>
            </div>

            <div className="mt-6">
              <h6 className="font-semibold mb-2">Subscribe</h6>
              <div className="flex gap-2">
                <input className="flex-1 bg-[#0a0a0a] border border-neutral-800 rounded-md px-3 py-2 text-sm" placeholder="Your email" />
                <button className="px-4 py-2 rounded-md bg-rose-600 text-white">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-600 mt-8 pb-6">© {new Date().getFullYear()} BigBoxx Professional Academy · All rights reserved</div>
      </footer>
    </div>
  );
}
