import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import CareerPath from '../components/CareerPath';
import EarningPotential from '../components/EarningPotential';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';




const Home = () => {

    
useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

    return (
        <div className="bg-brand-cream text-brand-charcoal font-sans">
            <Header/>
      <Hero />
      <main>
        <Stats />
        <CareerPath />
        <Programs />
        <EarningPotential />
        <Testimonials />
        <FAQ />
      </main>
      <FloatingButtons />
    </div>
    )
}


export default Home