import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Users, User, BookOpen } from 'lucide-react';
import TopBar from './TopBar';
import { MAPS_LOCATION_URL } from '../constants/contact';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <TopBar />
      <header className="bg-white shadow-md fixed w-full top-0 md:top-8 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-green-800">
              ATIAM COLLEGE
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/#home" className="text-gray-700 hover:text-lime-400 font-medium transition-colors">Home</Link>
            <Link to="/#programs" className="text-gray-700 hover:text-lime-400 font-medium transition-colors">Programs</Link>
            <Link to="/#about" className="text-gray-700 hover:text-lime-400 font-medium transition-colors">About</Link>
            <Link to="/#events" className="text-gray-700 hover:text-lime-400 font-medium transition-colors">Events</Link>
            <Link to="/#news" className="text-gray-700 hover:text-lime-400 font-medium transition-colors">News</Link>
            <Link to="/#contact" className="text-gray-700 hover:text-lime-400 font-medium transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex space-x-4">
            <a 
              href="https://wa.me/254793746046?text=I%20would%20like%20to%20apply%20to%20ATIAM%20College" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline"
            >
              Apply Now
            </a>
            <a 
              href={MAPS_LOCATION_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Visit Campus
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/#home" className="text-gray-700 hover:text-lime-400 font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/#programs" className="text-gray-700 hover:text-lime-400 font-medium" onClick={() => setIsMenuOpen(false)}>Programs</Link>
              <Link to="/#about" className="text-gray-700 hover:text-lime-400 font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/#events" className="text-gray-700 hover:text-lime-400 font-medium" onClick={() => setIsMenuOpen(false)}>Events</Link>
              <Link to="/#news" className="text-gray-700 hover:text-lime-400 font-medium" onClick={() => setIsMenuOpen(false)}>News</Link>
              <Link to="/#contact" className="text-gray-700 hover:text-lime-400 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              
              {/* Portal Links for Mobile */}
              <div className="border-t pt-4 mt-4">
                <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">Portals</h4>
                <div className="flex flex-col space-y-3">
                  <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-lime-400 font-medium transition-colors">
                    <Users size={16} />
                    <span>Student Portal</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-lime-400 font-medium transition-colors">
                    <User size={16} />
                    <span>Staff Portal</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-lime-400 font-medium transition-colors">
                    <BookOpen size={16} />
                    <span>E-Learning</span>
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <a 
                  href="https://wa.me/254793746046?text=I%20would%20like%20to%20apply%20to%20ATIAM%20College" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline"
                >
                  Apply Now
                </a>
                <a 
                  href={MAPS_LOCATION_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  Visit Campus
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;