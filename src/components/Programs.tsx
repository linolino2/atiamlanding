import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createWhatsAppLink } from '../constants/contact';

gsap.registerPlugin(ScrollTrigger);

const Programs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const programs = [
    {
      title: "AI Essentials & VR Gaming",
      description: "Learn the fundamentals of artificial intelligence and virtual reality game development.",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      duration: "3 Months",
      fees: "5,000/= per month",
      link: "#"
    },
    {
      title: "Forex & Cryptocurrency",
      description: "Master trading in foreign exchange markets and cryptocurrency investments.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      duration: "3 Months",
      fees: "5,000/= per month",
      link: "#"
    },
    {
      title: "Video Production & Motion Graphics",
      description: "Create professional videos and dynamic motion graphics for various platforms.",
      image: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      duration: "3 Months",
      fees: "5,000/= per month",
      link: "#"
    },
    {
      title: "Graphic Design",
      description: "Develop skills in visual communication and digital art creation.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      duration: "3 Months",
      fees: "5,000/= per month",
      link: "#"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set([headingRef.current, cardsRef.current?.children, buttonRef.current], {
        y: 50,
        opacity: 0
      });

      // Animate heading
      gsap.to(headingRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate cards
      gsap.to(cardsRef.current?.children || [], {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate button
      gsap.to(buttonRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleButtonClick = () => {
    window.location.href = '/courses';
  };

  return (
    <section ref={sectionRef} id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={headingRef} className="section-heading">EXPLORE OUR PROGRAMS</h2>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="card overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                <div className="text-sm text-gray-500 mb-3">
                  <p><span className="font-semibold">Duration:</span> {program.duration}</p>
                  <p><span className="font-semibold">Fees:</span> {program.fees}</p>
                </div>
                <a 
                  href={createWhatsAppLink(`I would like to learn more about the ${program.title} program.`)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lime-400 font-semibold hover:text-lime-500 transition-colors inline-block"
                >
                  LEARN MORE →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            ref={buttonRef}
            onClick={handleButtonClick}
            className="group inline-flex items-center bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">VIEW MORE</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;