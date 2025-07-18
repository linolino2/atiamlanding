import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { 
  createWhatsAppLink, 
  MAPS_LOCATION_URL, 
  FACEBOOK_URL, 
  TWITTER_URL, 
  LINKEDIN_URL, 
  INSTAGRAM_URL, 
  YOUTUBE_URL 
} from '../constants/contact';

const Footer = () => {
  return (
    <footer id="contact" className="bg-green-800 text-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-8 uppercase">
            READY FOR WHAT'S NEXT
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={createWhatsAppLink("I would like to request more information.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-8 rounded-full transition-colors"
            >
              REQUEST MORE INFO
            </a>
            <a 
              href={MAPS_LOCATION_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-bold py-4 px-8 rounded-full transition-colors"
            >
              VISIT CAMPUS
            </a>
            <a 
              href={createWhatsAppLink("I would like to explore the programs.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-8 rounded-full transition-colors"
            >
              EXPLORE PROGRAMS
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold text-white mb-4">ATIAM COLLEGE</div>
            <p className="text-sm leading-relaxed">
              Empowering students through excellence in ICT and Languages education.
            </p>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="font-bold text-white mb-3">FOLLOW US</h4>
              <div className="flex space-x-3">
                <a 
                  href={FACEBOOK_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-green-700 hover:bg-blue-600 text-white rounded-full transition-colors duration-200"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href={TWITTER_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-green-700 hover:bg-black text-white rounded-full transition-colors duration-200"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href={LINKEDIN_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-green-700 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-green-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-white rounded-full transition-all duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href={YOUTUBE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-green-700 hover:bg-red-600 text-white rounded-full transition-colors duration-200"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="hover:text-lime-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Student Life</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Financial Aid</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">PROGRAMS</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-lime-400 transition-colors">ICT Foundation</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">English Language</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Computer Programming</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Kiswahili Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">CONTACT INFO</h4>
            <div className="text-sm space-y-2">
              <p>123 Education Street</p>
              <p>Nairobi, Kenya</p>
              <p>Phone: +254 700 000 000</p>
              <p>Email: info@atiamcollege.ac.ke</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 pt-8 text-center text-sm">
          <p>&copy; 2025 ATIAM College. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;