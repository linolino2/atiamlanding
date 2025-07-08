import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const News = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const newsItems = [
    {
      title: "ATIAM College's Community Psychology Graduate Program Earns National Accreditation",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      link: "#"
    },
    {
      title: "ATIAM College graduate receives art therapy after it changed her life",
      image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      link: "#"
    },
    {
      title: "ATIAM College Dean Elected to Higher Learning Commission's Board of Trustees",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      link: "#"
    },
    {
      title: "ATIAM College Announces 2025 Faculty Promotions",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      link: "#"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set([headingRef.current, cardsRef.current?.children], {
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

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={headingRef} className="text-3xl font-bold text-green-700 mb-12">ATIAM News</h2>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="card overflow-hidden group cursor-pointer">
              <div className="flex">
                <div className="w-1/3">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-2/3 p-6 flex flex-col justify-between">
                  <h3 className="text-lg font-bold text-gray-800 leading-tight group-hover:text-lime-400 transition-colors">
                    {item.title}
                  </h3>
                  <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded text-sm self-start mt-4 transition-colors">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;