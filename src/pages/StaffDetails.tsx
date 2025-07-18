import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Twitter, Instagram, Mail, Phone, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { createWhatsAppLink, MAPS_LOCATION_URL } from '../constants/contact';

gsap.registerPlugin(ScrollTrigger);

const StaffDetails = () => {
  const navigate = useNavigate();
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const staffMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Head of ICT Department",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Dr. Johnson has over 15 years of experience in computer science education and research. She holds a PhD in Computer Science from MIT and specializes in artificial intelligence and machine learning. Her research has been published in numerous international journals and she has supervised over 50 graduate students.",
      email: "s.johnson@atiamcollege.ac.ke",
      phone: "+254 700 001 001",
      linkedin: "https://linkedin.com/in/sarah-johnson-phd",
      twitter: "https://twitter.com/drsarahjohnson",
      instagram: "https://instagram.com/dr.sarah.johnson",
      qualifications: ["PhD Computer Science - MIT", "MSc Information Systems - Stanford", "BSc Computer Engineering - UC Berkeley"],
      specializations: ["Artificial Intelligence", "Machine Learning", "Data Science", "Software Engineering"]
    },
    {
      name: "Prof. Michael Ochieng",
      position: "English Language Coordinator",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Prof. Ochieng is a renowned linguist with expertise in English literature and communication. He has published numerous papers on language acquisition and has been teaching for over 20 years. His passion for language education has helped thousands of students improve their English proficiency.",
      email: "m.ochieng@atiamcollege.ac.ke",
      phone: "+254 700 002 002",
      linkedin: "https://linkedin.com/in/michael-ochieng",
      twitter: "https://twitter.com/profochieng",
      instagram: "https://instagram.com/prof.ochieng",
      qualifications: ["PhD English Literature - Oxford University", "MA Applied Linguistics - Cambridge", "BA English Language - University of Nairobi"],
      specializations: ["English Literature", "Applied Linguistics", "Communication Skills", "Academic Writing"]
    },
    {
      name: "Ms. Fatuma Hassan",
      position: "Kiswahili Studies Lecturer",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Ms. Hassan is passionate about preserving and promoting Kiswahili culture and language. She holds a Master's degree in African Studies and has extensive experience in cultural education. She has authored several books on Kiswahili literature and cultural practices.",
      email: "f.hassan@atiamcollege.ac.ke",
      phone: "+254 700 003 003",
      linkedin: "https://linkedin.com/in/fatuma-hassan",
      twitter: "https://twitter.com/fatumahassan",
      instagram: "https://instagram.com/fatuma.hassan",
      qualifications: ["MA African Studies - University of Dar es Salaam", "BA Kiswahili Literature - Kenyatta University", "Diploma in Cultural Studies"],
      specializations: ["Kiswahili Literature", "East African Culture", "Language Pedagogy", "Cultural Preservation"]
    },
    {
      name: "Mr. David Kimani",
      position: "Programming Instructor",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Mr. Kimani is a software engineer turned educator with expertise in modern programming languages including Python, JavaScript, and Java. He brings real-world industry experience to the classroom, having worked at several tech companies before joining academia.",
      email: "d.kimani@atiamcollege.ac.ke",
      phone: "+254 700 004 004",
      linkedin: "https://linkedin.com/in/david-kimani-dev",
      twitter: "https://twitter.com/davidkimanidev",
      instagram: "https://instagram.com/david.kimani.codes",
      qualifications: ["MSc Software Engineering - University of Nairobi", "BSc Computer Science - JKUAT", "AWS Certified Solutions Architect"],
      specializations: ["Full-Stack Development", "Cloud Computing", "Mobile App Development", "DevOps"]
    },
    {
      name: "Dr. Grace Wanjiku",
      position: "Digital Marketing Specialist",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Dr. Wanjiku is a digital marketing expert with over 12 years of experience in the field. She has helped numerous businesses establish their online presence and has trained hundreds of students in digital marketing strategies.",
      email: "g.wanjiku@atiamcollege.ac.ke",
      phone: "+254 700 005 005",
      linkedin: "https://linkedin.com/in/grace-wanjiku-phd",
      twitter: "https://twitter.com/gracewanjiku",
      instagram: "https://instagram.com/grace.wanjiku.marketing",
      qualifications: ["PhD Marketing - Strathmore University", "MBA Digital Marketing - USIU", "Google Ads Certified Professional"],
      specializations: ["Digital Marketing Strategy", "Social Media Marketing", "SEO/SEM", "Content Marketing"]
    },
    {
      name: "Mr. John Muthomi",
      position: "Network Administrator",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Mr. Muthomi is responsible for maintaining the college's IT infrastructure and teaching network administration courses. With over 10 years of experience in network management, he ensures our systems run smoothly.",
      email: "j.muthomi@atiamcollege.ac.ke",
      phone: "+254 700 006 006",
      linkedin: "https://linkedin.com/in/john-muthomi-network",
      twitter: "https://twitter.com/johnmuthomi",
      instagram: "https://instagram.com/john.muthomi.tech",
      qualifications: ["MSc Network Security - University of Nairobi", "BSc Information Technology - KCA University", "Cisco Certified Network Professional"],
      specializations: ["Network Security", "System Administration", "Cybersecurity", "IT Infrastructure"]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set([headingRef.current?.children, cardsRef.current?.children], {
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

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-gradient-to-r from-green-800 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={handleBackClick}
            className="flex items-center text-white hover:text-lime-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Back to Home
          </button>
          <button 
            onClick={handleBackClick}
            className="flex items-center text-white hover:text-lime-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Back to Home
          </button>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              OUR STAFF
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Meet our dedicated team of experienced educators and professionals who are committed to providing you with the highest quality education.
            </p>
          </div>
        </div>
      </section>

      {/* Staff Details Section */}
      <section ref={sectionRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headingRef} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Faculty & Staff Directory</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get to know our team better and connect with them through their professional networks.
            </p>
          </div>
          
          <div ref={cardsRef} className="grid lg:grid-cols-2 gap-12">
            {staffMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-1/3 flex justify-center items-center md:items-start p-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 mb-6 md:mb-0 shadow-lg border-4 border-lime-400">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:w-2/3 p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                      <p className="text-lg text-lime-600 font-semibold mb-4">{member.position}</p>
                      <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                    </div>

                    {/* Qualifications */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">Qualifications</h4>
                      <ul className="space-y-1">
                        {member.qualifications.map((qual, qualIndex) => (
                          <li key={qualIndex} className="text-sm text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {qual}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specializations */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">Specializations</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specializations.map((spec, specIndex) => (
                          <span 
                            key={specIndex}
                            className="bg-lime-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="border-t pt-6">
                      <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide">Contact & Social</h4>
                      
                      {/* Email and Phone */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Mail size={16} className="mr-3 text-green-700" />
                          <a href={`mailto:${member.email}`} className="hover:text-lime-600 transition-colors text-sm">
                            {member.email}
                          </a>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Phone size={16} className="mr-3 text-green-700" />
                          <a href={`tel:${member.phone}`} className="hover:text-lime-600 transition-colors text-sm">
                            {member.phone}
                          </a>
                        </div>
                      </div>

                      {/* Social Media Links */}
                      <div className="flex space-x-4">
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin size={16} />
                        </a>
                        <a 
                          href={member.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                          aria-label={`${member.name} Twitter`}
                        >
                          <Twitter size={16} />
                        </a>
                        <a 
                          href={member.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
                          aria-label={`${member.name} Instagram`}
                        >
                          <Instagram size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            We're always looking for passionate educators and professionals to join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={createWhatsAppLink("I would like to view job openings at ATIAM College.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-lime-400 hover:bg-lime-500 text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 inline-block"
            >
              VIEW OPENINGS
            </a>
            <a 
              href={MAPS_LOCATION_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 inline-block"
            >
              VISIT CAMPUS
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StaffDetails;