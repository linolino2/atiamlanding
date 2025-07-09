import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTABanner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-green-800 py-16">
      <div ref={contentRef} className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Think a world-class education is out of reach?
        </h2>
        <p className="text-xl text-white mb-2">
          Think again.
        </p>
        <p className="text-lg text-lime-200 mb-8">
          Our institution is redefining what it means to learn in the modern world, offering you access to cutting-edge technology, globally competitive language programs, and hands-on training guided by professionally certified tutors.

Whether you're mastering a new language or advancing your tech skills, we equip you with real-world experience and career-relevant tools that set you apart. This is more than education, it’s your launchpad to global opportunities.
        </p>
        <a 
          href="/ATIAM College School Bronchure 2025 - July Updated.pdf" 
          download
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200"
        >
          Download Bronchure
        </a>
      </div>
    </section>
  );
};

export default CTABanner;