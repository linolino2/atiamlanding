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
          Incoming first-year undergraduate students can earn between $18,000 and $23,000 in scholarships, renewable for four years.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200">
          VIEW SCHOLARSHIPS
        </button>
      </div>
    </section>
  );
};

export default CTABanner;