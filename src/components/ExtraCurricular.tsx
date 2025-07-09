import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExtraCurricular = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const activities = [
    {
      title: "5-Aside Football",
      description: "Join our energetic 5-aside football sessions for fun, fitness, and friendly competition.",
      image: "https://images.pexels.com/photos/46798/pexels-photo-46798.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Gaming Club (Playstation)",
      description: "Compete in popular Playstation games, challenge your friends, and unwind in our dedicated gaming zone.",
      image: "https://images.pexels.com/photos/1390065/pexels-photo-1390065.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Chess Club",
      description: "Develop strategic thinking and problem-solving skills in our Chess Club, open to all skill levels.",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Board Games (Monopoly & More)",
      description: "Enjoy classic board games like Monopoly and discover new favorites with fellow students.",
      image: "https://images.pexels.com/photos/66004/pexels-photo-66004.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Game Jenga",
      description: "Test your steady hand and nerve with exciting Jenga challenges and other fun dexterity games.",
      image: "https://images.pexels.com/photos/163036/mario-bros-figure-toy-nintendo-163036.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "School Trips & Excursions",
      description: "Explore new places, learn outside the classroom, and create lasting memories on our organized school trips.",
      image: "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set([headingRef.current?.children, cardsRef.current?.children, buttonRef.current], {
        y: 50,
        opacity: 0
      });

      // Animate heading
      gsap.to(headingRef.current?.children || [], {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
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

  return (
    <section ref={sectionRef} id="extracurricular" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef}>
          <h2 className="section-heading text-green-700">STUDENT LIFE</h2>
          <h3 className="text-2xl font-bold text-green-700 text-center mb-12">Extra-Curricular Activities</h3>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="card overflow-hidden border rounded shadow-sm bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">{activity.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{activity.description}</p>
                <button className="text-lime-400 font-semibold hover:text-lime-500 transition-colors">
                  LEARN MORE →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            ref={buttonRef} 
            className="group inline-flex items-center bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">VIEW ALL ACTIVITIES</span>
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

export default ExtraCurricular;