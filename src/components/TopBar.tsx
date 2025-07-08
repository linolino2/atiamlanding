import React from 'react';
import { Phone, Mail, Users, User, BookOpen } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-green-700 text-white py-2 text-sm fixed w-full top-0 z-50 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="text-green-200 hidden lg:block">Have any question?</span>
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>+254 793 746 046</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>admin@atiamcollege.co.ke</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-1 hover:text-lime-400 transition-colors">
              <Users size={14} />
              <span>Student Portal</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-lime-400 transition-colors">
              <User size={14} />
              <span>Staff Portal</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-lime-400 transition-colors">
              <BookOpen size={14} />
              <span>E-Learning</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;