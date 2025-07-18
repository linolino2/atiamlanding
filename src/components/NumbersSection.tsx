import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NumbersSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      number: "2,335",
      label: "Graduates Number"
    },
    {
      number: "178",
      label: "Attaches Number"
    },
    {
      number: "860",
      label: "Happy Students"
    },
    {
      number: "2",
      label: "No. of Campuses"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate numbers on scroll
      gsap.from(numbersRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: numbersRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate number counting effect
      stats.forEach((stat, index) => {
        const numberElement = numbersRef.current?.children[index]?.querySelector('.number');
        if (numberElement) {
          const finalNumber = parseInt(stat.number.replace(',', ''));
          gsap.from({ value: 0 }, {
            value: finalNumber,
            duration: 2,
            ease: "power2.out",
            onUpdate: function() {
              const currentValue = Math.round(this.targets()[0].value);
              numberElement.textContent = currentValue.toLocaleString();
            },
            scrollTrigger: {
              trigger: numberElement,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 bg-fixed bg-cover bg-center bg-no-repeat min-h-[400px] flex items-center"
      style={{ backgroundImage: 'url(/images/image.png)' }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div ref={numbersRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="stat-number text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-lime-400">
                {stat.number}
              </div>
              <div className="w-12 h-1 bg-lime-400 mx-auto mb-3"></div>
              <div className="text-sm md:text-base font-medium text-green-100 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;