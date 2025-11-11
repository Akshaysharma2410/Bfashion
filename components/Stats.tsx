import React, { useEffect, useState } from "react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const stepTime = 10;
    const step = (end / duration) * stepTime;

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center text-center p-5 bg-white rounded-2xl shadow-md border border-white/20 hover:scale-105 transition-transform duration-300">
      <div className="text-5xl text-red-700 mb-3">{icon}</div>
      <p className="text-4xl sm:text-5xl font-extrabold">
        {count}
        {suffix}
      </p>
      <p className="text-sm uppercase tracking-wider mt-2 font-medium">
        {label}
      </p>
    </div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    { icon: <GraduationCapIcon />, value: 300, label: "Students Globally", suffix: "+" },
    { icon: <AwardIcon />, value: 12, label: "Awards" , suffix: "+" },
    { icon: <BookOpenIcon />, value: 50, label: "Industry Relevant Modules", suffix: "+" },
    { icon: <BriefcaseIcon />, value: 100, label: "Placement Assistance", suffix: "%" },
    { icon: <SparklesIcon />, value: 30, label: "Workshops / Fashion Shows", suffix: "+" },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),_transparent)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <p className="flex items-center justify-center text-sm font-semibold mb-2 uppercase tracking-wider">
            <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
            Our Highlights
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Why Students Choose Our <span className="text-red-500">Fashion Institute</span>
          </h2>
          <p className="mt-4 mx-auto text-lg">
            Building creative professionals with world-class training & industry exposure.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple SVG Icons (universal)
const GraduationCapIcon = () => ( <svg xmlns="https://img.icons8.com/ios-glyphs/30/graduation-cap--v1.png" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l15.482 0m-15.482 0L12 5.847l7.741 4.3z" />
  </svg> );

const AwardIcon = () => ( <svg xmlns="https://img.icons8.com/ios-glyphs/30/graduation-cap--v1.png" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg> );


const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h7v16H3zM14 4h7v16h-7z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18v13H3zM8 7V5h8v2" />
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3zm7 10l1 3-3 1 3 1-1 3-3-1-1-3 1-3 3-1zM5 13l1.5 2L9 15l-2 1.5L7 19l-2-1-1-2 1-2 2-1z" />
  </svg>
);

export default Stats;
