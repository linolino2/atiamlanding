import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade in animation
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          descriptionRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          buttonsRef.current?.children || [],
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const heroImages = [
    "/images/hero1.webp",
    "/images/hero2.webp",
    "/images/hero3.webp",
    "/images/hero4.webp",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      <div>
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-green-800 bg-opacity-70 z-10"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold uppercase mb-6 leading-tight"
        >
          GET READY
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl font-semibold mb-8 uppercase tracking-wide"
        >
          TO IGNITE YOUR POTENTIAL
        </p>
        <p
          ref={descriptionRef}
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        >
          Join ATIAM College - Your gateway to excellence in ICT and Languages
          (English & Kiswahili)
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-primary text-lg px-8 py-4">
            FIND YOUR PROGRAM
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            WHY ATIAM?
          </button>
          <button className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-green-800">
            APPLY NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
