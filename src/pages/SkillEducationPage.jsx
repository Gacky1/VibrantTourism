import { useState, useEffect, useRef } from 'react';
import { skillEducationData } from '../data/mockData';
import Button from '../components/ui/Button';

const SkillEducationPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);
  const [programsVisible, setProgramsVisible] = useState(false);
  const [vtcVisible, setVtcVisible] = useState(false);
  const introRef = useRef(null);
  const programsRef = useRef(null);
  const vtcRef = useRef(null);

  useEffect(() => {
    setHeroVisible(true);

    const observers = [
      {
        ref: introRef,
        setter: setIntroVisible
      },
      {
        ref: programsRef,
        setter: setProgramsVisible
      },
      {
        ref: vtcRef,
        setter: setVtcVisible
      }
    ];

    const observerInstances = observers.map(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
          }
        },
        { threshold: 0.2 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observerInstances.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary-300/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-300/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-ping"></div>
        </div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop&crop=center)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        
        <div className="relative z-10 text-center text-white section-container">
          <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl max-w-5xl mx-auto transform transition-all duration-1000 ${
            heroVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
          }`}>
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg transform transition-all duration-1200 delay-300 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {skillEducationData.title}
            </h1>
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-accent-300 drop-shadow-md transform transition-all duration-1200 delay-500 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {skillEducationData.subtitle}
            </h2>
            <div className={`transform transition-all duration-1200 delay-700 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Button size="lg" variant="accent" className="transform hover:scale-105 shadow-xl animate-pulse">
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={introRef} className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className={`transform transition-all duration-1000 ${
              introVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200 mb-12">
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-8">
                  {skillEducationData.introduction.content}
                </p>
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6">
                  <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    {skillEducationData.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VTC Enables Section */}
      <section ref={vtcRef} className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${
              vtcVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              VTC Enables This Connection Through
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skillEducationData.vtcEnables.map((item, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  vtcVisible ? 'translate-x-0 opacity-100' : index % 2 === 0 ? 'translate-x-[-50px] opacity-0' : 'translate-x-[50px] opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Programs Section */}
      <section ref={programsRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary-100 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent-100 rounded-full animate-bounce"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${
              programsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Skill Programs
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${
              programsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Comprehensive skill development programs designed for tourism and hospitality professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillEducationData.skillPrograms.map((program, index) => (
              <div
                key={program.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  programsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${program.color} text-white text-xs font-semibold rounded-full`}>
                    {program.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                    {program.title}
                  </h3>
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
              Ready to Enhance Your Skills?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join our skill development programs and advance your career in tourism and hospitality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-primary-600 hover:bg-primary-100 border-2 border-white transform hover:scale-105 shadow-xl font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                Enroll Now
              </button>
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 transform hover:scale-105 shadow-xl font-semibold"
              >
                View Programs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillEducationPage;