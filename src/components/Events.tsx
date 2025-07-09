import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createWhatsAppLink } from '../constants/contact';

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const events = [
    {
      date: { day: "25", month: "JUN" },
      title: "SOAR - New Student Orientation",
      description: "Join us for a comprehensive orientation program designed to help new students transition smoothly into college life.",
      image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      date: { day: "03", month: "JUL" },
      title: "Last Day of Summer Session 1 Classes",
      description: "Final day of classes for our intensive summer session. Students will complete their coursework and prepare for assessments.",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      date: { day: "04", month: "JUL" },
      title: "Independence Day",
      description: "College closed in observance of Independence Day. Classes will resume the following day.",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      date: { day: "07", month: "JUL" },
      title: "First Day of Summer Session 2 Classes",
      description: "Beginning of our second summer session with new course offerings and continued learning opportunities.",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
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
    <section ref={sectionRef} id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef}>
          <h2 className="section-heading text-green-700">ATIAM TODAY</h2>
          <h3 className="text-2xl font-bold text-green-700 text-center mb-12">Upcoming Events</h3>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="card overflow-hidden border rounded shadow-sm bg-white">
              <div className="flex">
                <div className="bg-green-700 text-white p-4 flex flex-col items-center justify-center min-w-[80px]">
                  <div className="text-2xl font-bold">{event.date.day}</div>
                  <div className="text-sm">{event.date.month}</div>
                </div>
                <div className="flex-1">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h4>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
                <a 
                  href={createWhatsAppLink(`I would like to learn more about the event: ${event.title}.`)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded text-sm mt-4 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            ref={buttonRef as React.RefObject<HTMLAnchorElement>} 
            href={createWhatsAppLink("I would like to see all upcoming events.")} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border border-green-700 text-green-700 hover:bg-green-700 hover:text-white py-2 px-6 rounded transition-colors"
          >
            SEE ALL EVENTS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;