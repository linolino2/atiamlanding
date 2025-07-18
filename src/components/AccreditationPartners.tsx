import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AccreditationPartners = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const accreditationRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);

  // Placeholder logos - replace with actual logo URLs
  const accreditationLogos = [
    "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
  ];

  const partnerLogos = [
    "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    "https://images.pexels.com/photos/6801650/pexels-photo-6801650.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    "https://images.pexels.com/photos/6802043/pexels-photo-6802043.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section on scroll
      gsap.from([accreditationRef.current, partnersRef.current], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
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
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Accreditation Section */}
        <div ref={accreditationRef} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
              Accreditation
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto"></div>
          </div>
          
          <div className="overflow-hidden">
            <div className="carousel-container">
              <div className="carousel-track">
                {/* First set of logos */}
                {accreditationLogos.map((logo, index) => (
                  <div key={index} className="carousel-item">
                    <img 
                      src={logo} 
                      alt={`Accreditation ${index + 1}`}
                      className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {accreditationLogos.map((logo, index) => (
                  <div key={`duplicate-${index}`} className="carousel-item">
                    <img 
                      src={logo} 
                      alt={`Accreditation ${index + 1}`}
                      className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div ref={partnersRef}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
              OUR PARTNERS
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto"></div>
          </div>
          
          <div className="overflow-hidden">
            <div className="carousel-container">
              <div className="carousel-track carousel-reverse">
                {/* First set of logos */}
                {partnerLogos.map((logo, index) => (
                  <div key={index} className="carousel-item">
                    <img 
                      src={logo} 
                      alt={`Partner ${index + 1}`}
                      className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {partnerLogos.map((logo, index) => (
                  <div key={`duplicate-${index}`} className="carousel-item">
                    <img 
                      src={logo} 
                      alt={`Partner ${index + 1}`}
                      className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccreditationPartners;