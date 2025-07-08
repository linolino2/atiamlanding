import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(imageRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef}>
            <h2 className="text-4xl font-bold text-gray-800 uppercase mb-6">
              THE ATIAM DIFFERENCE
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We provide students with much more than just a single letter
              grade. Our feedback identifies strengths and target areas for
              growth. Our learning approach is centered around the 8 Abilities -
              all of our students will learn and thrive apart. These are the
              skills that will help you thrive both personally and
              professionally.
            </p>
            <button className="btn-secondary">OUR ABILITIES IN ACTION</button>
          </div>
          <div ref={imageRef} className="relative">
            <iframe
              src="https://youtube.com/embed/b5G1wpJAPlA?controls=0&modestbranding=1&rel=0&showinfo=0"
              title="Custom video"
              className="rounded-lg shadow-lg w-full h-[400px]"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
