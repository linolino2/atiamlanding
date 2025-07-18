import React, { useState, useEffect } from 'react';

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "At ATIAM, I've been able to develop my communication skills and learned how to work well independently and on a team. With the support of my professors, I've been able to gain valuable career experience on and off campus. Ultimately, I'm becoming a stronger leader.",
      name: "ISABELLE",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      quote: "The ICT program at ATIAM has transformed my understanding of technology. The hands-on approach and industry-relevant curriculum have prepared me for real-world challenges. I feel confident about my future in the tech industry.",
      name: "JAMES MWANGI",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      quote: "Learning Kiswahili at ATIAM has connected me to my roots and opened doors to new opportunities. The cultural immersion and language proficiency I've gained here are invaluable for my career in international relations.",
      name: "AMINA HASSAN",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      quote: "The English Language program has enhanced my communication skills tremendously. The supportive faculty and comprehensive curriculum have prepared me for global opportunities. I'm grateful for the foundation ATIAM has provided.",
      name: "PETER OCHIENG",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      className="py-20 bg-fixed bg-cover bg-center bg-no-repeat relative overflow-hidden min-h-[600px] flex items-center"
      style={{ backgroundImage: 'url(/images/image.png)' }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 transform translate-x-0' 
                  : index < currentSlide 
                    ? 'opacity-0 transform -translate-x-full absolute inset-0'
                    : 'opacity-0 transform translate-x-full absolute inset-0'
              }`}
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="block mt-6 text-lg font-semibold text-green-800">
                    - {testimonial.name}
                  </cite>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    className="w-48 h-48 rounded-full object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-green-800 scale-125' 
                  : 'bg-green-600 hover:bg-green-700'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;