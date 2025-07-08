import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Staff = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const staffMembers = [
    {
      name: "Libaan Atiam",
      position: "Head of ICT Department",
      image: "/images/Libaan Atiam.webp",
      bio: "Dr. Johnson has over 15 years of experience in computer science education and research. She holds a PhD in Computer Science from MIT and specializes in artificial intelligence and machine learning.",
      email: "s.johnson@atiamcollege.ac.ke",
      phone: "+254 700 001 001",
    },
    {
      name: "Adam Abdi Jama",
      position: "English Language Coordinator",
      image: "/images/Adam Abdi Jama.webp",
      bio: "Prof. Ochieng is a renowned linguist with expertise in English literature and communication. He has published numerous papers on language acquisition and has been teaching for over 20 years.",
      email: "m.ochieng@atiamcollege.ac.ke",
      phone: "+254 700 002 002",
    },
    {
      name: "Juliet",
      position: "Kiswahili Studies Lecturer",
      image: "/images/Juliet.webp",
      bio: "Ms. Hassan is passionate about preserving and promoting Kiswahili culture and language. She holds a Master's degree in African Studies and has extensive experience in cultural education.",
      email: "f.hassan@atiamcollege.ac.ke",
      phone: "+254 700 003 003",
    },
    {
      name: "Eugene Gitonga",
      position: "Programming Instructor",
      image: "/images/Eugene Gitonga.webp",
      bio: "Mr. Kimani is a software engineer turned educator with expertise in modern programming languages including Python, JavaScript, and Java. He brings real-world industry experience to the classroom.",
      email: "d.kimani@atiamcollege.ac.ke",
      phone: "+254 700 004 004",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(
        [
          headingRef.current?.children,
          cardsRef.current?.children,
          buttonRef.current,
        ],
        {
          y: 50,
          opacity: 0,
        }
      );

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
          toggleActions: "play none none reverse",
        },
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
          toggleActions: "play none none reverse",
        },
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
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleButtonClick = () => {
    navigate("/staff");
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our Staff
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of experienced educators and professionals are
            committed to providing you with the highest quality education.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer h-96"
            >
              {/* Default Card View */}
              <div className="relative h-full">
                <div className="relative group h-full overflow-hidden will-change-transform">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
                  />

                  {/* Only shows on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Basic Info - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2 text-shadow-md">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-200 text-shadow-md">
                    {member.position}
                  </p>
                </div>
              </div>

              {/* Expanded Details - Visible on Hover */}
              <div className="absolute inset-0 bg-white p-6 opacity-0 pointer-events-none transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 ease-in-out flex flex-col justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-3 border-lime-400">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-lime-600 font-semibold mb-3">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center text-gray-500">
                      <span className="w-4 h-4 mr-2">📧</span>
                      <span className="truncate text-xs">{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center text-gray-500">
                      <span className="w-4 h-4 mr-2">📞</span>
                      <span className="text-xs">{member.phone}</span>
                    </div>
                  </div>
                </div>
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
            <span className="mr-2">VIEW ALL STAFF</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Staff;
