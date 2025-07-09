import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { createWhatsAppLink } from '../constants/contact';

const Courses = () => {
  const courses = [
    {
      title: "AI Essentials & VR Gaming",
      description: "Learn the fundamentals of artificial intelligence and virtual reality game development with practical applications.",
      duration: "3 Months",
      level: "Beginner to Intermediate",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["AI Fundamentals", "VR Development Basics", "Game Design", "Practical Projects"],
      fee: "KES 15,000"
    },
    {
      title: "Forex & Cryptocurrency",
      description: "Master trading in foreign exchange markets and cryptocurrency investments with real-world trading strategies.",
      duration: "3 Months",
      level: "Beginner to Advanced",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Forex Fundamentals", "Crypto Markets", "Trading Strategies", "Risk Management"],
      fee: "KES 15,000"
    },
    {
      title: "Video Production & Motion Graphics",
      description: "Create professional videos and dynamic motion graphics for various platforms with industry-standard tools.",
      duration: "3 Months",
      level: "Beginner to Intermediate",
      image: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Video Fundamentals", "Camera Techniques", "Editing", "Motion Graphics"],
      fee: "KES 15,000"
    },
    {
      title: "Graphic Design",
      description: "Develop skills in visual communication and digital art creation using professional design software.",
      duration: "3 Months",
      level: "Beginner",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Design Principles", "Adobe Photoshop", "Adobe Illustrator", "Portfolio Development"],
      fee: "KES 15,000"
    },
    {
      title: "Web Design",
      description: "Learn to create visually appealing and user-friendly websites with modern design principles.",
      duration: "2 Months",
      level: "Beginner",
      image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["HTML & CSS", "UI/UX Principles", "Responsive Design", "Web Graphics"],
      fee: "KES 10,000"
    },
    {
      title: "Web Development",
      description: "Master full-stack web development with modern frameworks and technologies.",
      duration: "4 Months",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["HTML/CSS/JavaScript", "Frontend Frameworks", "Backend Development", "Database Integration"],
      fee: "KES 20,000"
    },
    {
      title: "Mobile Development & Mobile Design",
      description: "Learn to create mobile applications for Android and iOS platforms with focus on both development and design.",
      duration: "4 Months",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Mobile UI/UX Design", "Android Development", "iOS Development", "App Publishing"],
      fee: "KES 20,000"
    },
    {
      title: "Digital Marketing & Dropshipping",
      description: "Learn modern digital marketing strategies and how to set up successful dropshipping businesses.",
      duration: "4 Months",
      level: "Beginner to Intermediate",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Social Media Marketing", "SEO & SEM", "Content Creation", "Dropshipping Fundamentals"],
      fee: "KES 20,000"
    },
    {
      title: "Game Development",
      description: "Create interactive games for various platforms using modern game engines and programming techniques.",
      duration: "4 Months",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/7360387/pexels-photo-7360387.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Game Design", "Unity Engine", "Game Programming", "Asset Creation"],
      fee: "KES 20,000"
    },
    {
      title: "Cyber Security & Ethical Hacking",
      description: "Learn to protect systems and networks from cyber threats with ethical hacking techniques.",
      duration: "6 Months",
      level: "Intermediate to Advanced",
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Network Security", "Penetration Testing", "Security Protocols", "Ethical Hacking"],
      fee: "KES 30,000"
    },
    {
      title: "Accounting Packages",
      description: "Master popular accounting software packages used in modern business environments.",
      duration: "4 Months",
      level: "Beginner to Intermediate",
      image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["QuickBooks", "Sage", "Excel for Accounting", "Financial Reporting"],
      fee: "KES 20,000"
    },
    {
      title: "Computer Application Packages",
      description: "Learn essential computer applications for office productivity and professional work.",
      duration: "3 Months",
      level: "Beginner",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Microsoft Office Suite", "Google Workspace", "Basic Computing", "Document Management"],
      fee: "KES 15,000"
    }
  ];

  const languageCourses = [
    {
      title: "English",
      description: "Master English language skills from beginner to proficient level with comprehensive instruction.",
      levels: "A1 (Beginner) to C2 (Proficient)",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Reading", "Writing", "Speaking", "Listening"],
      fee: "KES 3,000"
    },
    {
      title: "Kiswahili",
      description: "Learn Kiswahili language from basic to advanced levels with focus on practical communication.",
      levels: "A1 (Beginner) to C2 (Proficient)",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Grammar", "Conversation", "Reading", "Writing"],
      fee: "KES 3,000"
    },
    {
      title: "German",
      description: "Develop German language proficiency from beginner to advanced levels with native-like fluency.",
      levels: "A1 (Beginner) to C2 (Proficient)",
      image: "https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Vocabulary", "Grammar", "Conversation", "Culture"],
      fee: "KES 3,000"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-gradient-to-r from-green-800 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            OUR COURSES
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover our comprehensive range of courses designed to equip you with the skills needed for success in today's digital world.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">ICT Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.level}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Duration:</span>
                      <span className="text-sm text-gray-600">{course.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Fee:</span>
                      <span className="text-sm text-green-700 font-bold">{course.fee}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Course Modules:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.modules.map((module, moduleIndex) => (
                        <span 
                          key={moduleIndex}
                          className="bg-lime-100 text-green-800 text-xs px-2 py-1 rounded-full"
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a 
                      href={createWhatsAppLink(`I would like to enroll in the ${course.title} course.`)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
                    >
                      Enroll Now
                    </a>
                    <a 
                      href={createWhatsAppLink(`I would like to learn more about the ${course.title} course.`)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 border border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Language Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Language Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {languageCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Levels:</span>
                      <span className="text-sm text-gray-600">{course.levels}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Fee:</span>
                      <span className="text-sm text-green-700 font-bold">{course.fee}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Course Modules:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.modules.map((module, moduleIndex) => (
                        <span 
                          key={moduleIndex}
                          className="bg-lime-100 text-green-800 text-xs px-2 py-1 rounded-full"
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a 
                      href={createWhatsAppLink(`I would like to enroll in the ${course.title} language course.`)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
                    >
                      Enroll Now
                    </a>
                    <a 
                      href={createWhatsAppLink(`I would like to learn more about the ${course.title} language course.`)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 border border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
                    >
                      Learn More
                    </a>
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
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of students who have transformed their careers with our courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={createWhatsAppLink("I would like to apply for a course.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-lime-400 hover:bg-lime-500 text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 inline-block"
            >
              APPLY NOW
            </a>
            <a 
              href={createWhatsAppLink("I would like to contact you about courses.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 inline-block"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;