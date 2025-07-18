import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { createWhatsAppLink, EMAIL, PHONE } from '../constants/contact';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const mapsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set([
        heroRef.current?.children,
        contactInfoRef.current?.children,
        mapsRef.current?.children
      ], {
        y: 50,
        opacity: 0
      });

      // Animate hero
      gsap.to(heroRef.current?.children || [], {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });

      // Animate contact info
      gsap.to(contactInfoRef.current?.children || [], {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate maps
      gsap.to(mapsRef.current?.children || [], {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mapsRef.current,
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
          <div ref={heroRef} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              CONTACT US
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Get in touch with ATIAM College. We're here to help you start your journey towards excellence in ICT and Languages education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={createWhatsAppLink("I would like to get more information about ATIAM College.")} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-lime-400 hover:bg-lime-500 text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 inline-block"
              >
                MESSAGE US NOW
              </a>
              <a 
                href={`tel:${PHONE}`}
                className="border-2 border-white text-white hover:bg-white hover:text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 inline-block"
              >
                CALL US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section ref={sectionRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={contactInfoRef} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Ready to transform your future? Contact us today to learn more about our programs and how we can help you achieve your goals.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Phone */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">Call us directly</p>
                <a 
                  href={`tel:${PHONE}`}
                  className="text-green-700 hover:text-green-800 font-semibold transition-colors"
                >
                  {PHONE}
                </a>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Send us a message</p>
                <a 
                  href={`mailto:${EMAIL}`}
                  className="text-blue-700 hover:text-blue-800 font-semibold transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Chat with us</p>
                <a 
                  href={createWhatsAppLink("Hello! I would like to know more about ATIAM College.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-semibold transition-colors"
                >
                  Start Chat
                </a>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Office Hours</h3>
                <p className="text-gray-600 mb-2">Monday - Friday</p>
                <p className="text-purple-700 font-semibold">8:00 AM - 6:00 PM</p>
                <p className="text-gray-600 mt-2">Saturday</p>
                <p className="text-purple-700 font-semibold">9:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Locations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Campus Locations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at either of our two convenient locations in Nairobi. Both campuses offer the same high-quality education and modern facilities.
            </p>
          </div>

          <div ref={mapsRef} className="grid lg:grid-cols-2 gap-12">
            {/* Nasra Garden Campus */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-green-700 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Nasra Garden Campus</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our main campus located in the heart of Nasra Garden, offering all our ICT and Languages programs with state-of-the-art facilities.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-green-700" />
                    <span>Nasra Garden, Nairobi</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-green-700" />
                    <span>Main Campus - All Programs Available</span>
                  </div>
                </div>
                <a 
                  href="https://maps.app.goo.gl/on3KUQkb4cwCQ1dCA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors mb-6"
                >
                  Get Directions
                </a>
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8158!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMzEuNiJTIDM2wrA0OSczMS4wIkU!5e0!3m2!1sen!2ske!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nasra Garden Campus Location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Komarok Campus */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-700 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Komarok Campus</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our secondary campus in Komarok, providing convenient access to quality education for students in the eastern parts of Nairobi.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-blue-700" />
                    <span>Komarok, Nairobi</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-blue-700" />
                    <span>Branch Campus - Selected Programs</span>
                  </div>
                </div>
                <a 
                  href="https://maps.app.goo.gl/komarokCampusLocation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors mb-6"
                >
                  Get Directions
                </a>
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7158!2d36.9219!3d-1.2821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNTUuNiJTIDM2wrA1NSczMS4wIkU!5e0!3m2!1sen!2ske!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Komarok Campus Location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today to learn more about our programs and take the first step towards your future success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={createWhatsAppLink("I would like to schedule a campus visit.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-lime-400 hover:bg-lime-500 text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 inline-block"
            >
              SCHEDULE VISIT
            </a>
            <a 
              href={createWhatsAppLink("I would like to apply for admission.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 inline-block"
            >
              APPLY NOW
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;