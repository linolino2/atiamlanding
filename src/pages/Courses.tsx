import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Courses = () => {
  const courses = [
    {
      title: "ICT Foundation",
      description: "Build your foundation in Information and Communication Technology with hands-on experience in computer basics, networking, and digital literacy.",
      duration: "6 months",
      level: "Beginner",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Computer Basics", "Internet & Email", "Microsoft Office", "Digital Literacy"],
      fee: "KES 25,000"
    },
    {
      title: "English Language",
      description: "Master English communication skills for global opportunities and academic excellence with comprehensive grammar, writing, and speaking practice.",
      duration: "8 months",
      level: "All Levels",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Grammar & Vocabulary", "Speaking & Listening", "Academic Writing", "Business English"],
      fee: "KES 30,000"
    },
    {
      title: "Computer Programming",
      description: "Learn modern programming languages and software development methodologies including Python, JavaScript, and web development.",
      duration: "12 months",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Python Programming", "Web Development", "Database Management", "Software Engineering"],
      fee: "KES 45,000"
    },
    {
      title: "Kiswahili Studies",
      description: "Explore the richness of Kiswahili language and East African culture with comprehensive language skills and cultural understanding.",
      duration: "6 months",
      level: "All Levels",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Kiswahili Grammar", "Literature", "Cultural Studies", "Communication Skills"],
      fee: "KES 20,000"
    },
    {
      title: "Advanced ICT",
      description: "Advanced topics in Information Technology including cybersecurity, cloud computing, and system administration.",
      duration: "10 months",
      level: "Advanced",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Cybersecurity", "Cloud Computing", "Network Administration", "IT Project Management"],
      fee: "KES 55,000"
    },
    {
      title: "Digital Marketing",
      description: "Learn modern digital marketing strategies including social media marketing, SEO, and content creation.",
      duration: "4 months",
      level: "Beginner",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Social Media Marketing", "SEO & SEM", "Content Creation", "Analytics"],
      fee: "KES 35,000"
    },
    {
      title: "Graphic Design",
      description: "Master the fundamentals of graphic design using industry-standard software and develop a professional portfolio.",
      duration: "8 months",
      level: "Beginner to Intermediate",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Design Principles", "Adobe Photoshop", "Adobe Illustrator", "Portfolio Development"],
      fee: "KES 40,000"
    },
    {
      title: "Business Administration",
      description: "Develop essential business management skills including leadership, marketing, and financial management.",
      duration: "12 months",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Business Management", "Marketing Fundamentals", "Financial Accounting", "Human Resource Management"],
      fee: "KES 50,000"
    },
    {
      title: "Mobile App Development",
      description: "Learn to create mobile applications for Android and iOS platforms using modern frameworks and tools.",
      duration: "9 months",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      modules: ["Mobile UI/UX Design", "Android Development", "iOS Development", "App Publishing"],
      fee: "KES 48,000"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <button className="flex-1 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                      Enroll Now
                    </button>
                    <button className="flex-1 border border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                      Learn More
                    </button>
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
            <button className="bg-lime-400 hover:bg-lime-500 text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200">
              APPLY NOW
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200">
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;