import { useState, useEffect, useRef } from 'react';
import { educationData } from '../data/mockData';
import Button from '../components/ui/Button';

const EducationPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [coursesVisible, setCoursesVisible] = useState(false);
  const sectionRef = useRef(null);
  const coursesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const coursesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCoursesVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (coursesRef.current) coursesObserver.observe(coursesRef.current);

    return () => {
      observer.disconnect();
      coursesObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop&crop=center)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        
        <div className="relative z-10 text-center text-white section-container">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              {educationData.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto drop-shadow-md opacity-90 leading-relaxed">
              {educationData.subtitle}
            </p>
            <Button size="lg" variant="accent" className="transform hover:scale-105 shadow-xl">
              Explore Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section ref={coursesRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Course Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to build expertise across all tourism sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationData.courses.map((course, index) => (
              <div
                key={course.id}
                className={`transform transition-all duration-1000 ${
                  coursesVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="mb-6">
                    <img 
                      src={course.logo} 
                      alt={course.title}
                      className="w-full h-48 rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8">
                {educationData.introduction.title}
              </h2>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  {educationData.introduction.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Education Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed to create a skilled and future-ready tourism workforce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {educationData.objectives.map((objective, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible ? 'translate-x-0 opacity-100' : index % 2 === 0 ? 'translate-x-[-50px] opacity-0' : 'translate-x-[50px] opacity-0'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="flex items-start space-x-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {objective}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-500">
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join our comprehensive education programs and become part of India's thriving tourism industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-primary-600 hover:bg-primary-100 border-2 border-white transform hover:scale-105 shadow-xl font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                Apply Now
              </button>
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 transform hover:scale-105 shadow-xl font-semibold"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;