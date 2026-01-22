import { useState, useEffect, useRef } from 'react';
import Button from '../components/ui/Button';

const UpskillingPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);
  const [whyRPLVisible, setWhyRPLVisible] = useState(false);
  const [whoForVisible, setWhoForVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  
  const introRef = useRef(null);
  const whyRPLRef = useRef(null);
  const whoForRef = useRef(null);
  const benefitsRef = useRef(null);

  useEffect(() => {
    setHeroVisible(true);

    const observers = [
      {
        ref: introRef,
        setter: setIntroVisible
      },
      {
        ref: whyRPLRef,
        setter: setWhyRPLVisible
      },
      {
        ref: whoForRef,
        setter: setWhoForVisible
      },
      {
        ref: benefitsRef,
        setter: setBenefitsVisible
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

  const whyRPLPoints = [
    'Recognising practical skills gained on the job',
    'Creating a certified and reliable workforce',
    'Improving service standards and professionalism',
    'Supporting workforce retention and motivation',
    'Enabling structured career pathways'
  ];

  const targetAudience = [
    { icon: '🏨', title: 'Hotel & Resort Staff', desc: 'Front office, housekeeping, and F&B teams' },
    { icon: '🧳', title: 'Tour Professionals', desc: 'Tour guides, tour escorts, and travel executives' },
    { icon: '⛰️', title: 'Adventure & Wellness', desc: 'Adventure, wellness, and destination service providers' },
    { icon: '🌍', title: 'Informal Workers', desc: 'Seasonal and informal tourism workers' }
  ];

  const employerBenefits = [
    'Access to a verified and skilled workforce',
    'Reduced training and onboarding costs',
    'Improved service quality and customer satisfaction',
    'Higher workforce stability and engagement'
  ];

  const professionalBenefits = [
    'Formal recognition of existing skills',
    'Increased confidence and professional identity',
    'Better employment and growth opportunities',
    'Eligibility for higher roles and upskilling pathways'
  ];

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
            backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&crop=center)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        
        <div className="relative z-10 text-center text-white section-container">
          <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl max-w-5xl mx-auto transform transition-all duration-1000 ${
            heroVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
          }`}>
            <div className={`inline-block bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-2 rounded-full mb-6 text-sm font-semibold transform transition-all duration-1200 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Recognition of Prior Learning (RPL)
            </div>
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg transform transition-all duration-1200 delay-300 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Recognising Experience.
              <span className="block text-accent-300 drop-shadow-2xl">
                Strengthening the Industry.
              </span>
            </h1>
            <div className={`transform transition-all duration-1200 delay-500 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Button size="lg" variant="accent" className="transform hover:scale-105 shadow-xl animate-pulse">
                Apply for RPL
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* RPL Introduction Section */}
      <section ref={introRef} className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className={`bg-white/80 backdrop-blur-md rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200 transform transition-all duration-1000 ${
              introVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
                Recognition of Prior Learning (RPL) is a process that formally recognises the skills and knowledge already acquired by tourism and hospitality professionals through work experience. It allows skilled individuals to receive certification without undergoing full-time training again.
              </p>
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6">
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  Vibrant Tourism Council (VTC) supports RPL as an industry-enabling initiative to help standardise skills, improve workforce credibility, and enhance service quality across the tourism and hospitality sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why RPL Is Important Section */}
      <section ref={whyRPLRef} className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${
              whyRPLVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why RPL Is Important for the Tourism Industry
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A large section of the tourism workforce is highly experienced but informally trained and uncertified. This often limits career growth, wage progression, and service consistency.
              </p>
            </div>

            <div className={`bg-white/80 backdrop-blur-md rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200 mb-12 transform transition-all duration-1000 delay-300 ${
              whyRPLVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">RPL helps the industry by:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyRPLPoints.map((point, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-1000 ${
                      whyRPLVisible ? 'translate-x-0 opacity-100' : index % 2 === 0 ? 'translate-x-[-50px] opacity-0' : 'translate-x-[50px] opacity-0'
                    }`}
                    style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                  >
                    <div className="flex items-start space-x-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-5 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {point}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who RPL Is For Section */}
      <section ref={whoForRef} className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${
              whoForVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Who RPL Is For
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${
              whoForVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              RPL is designed for working professionals with experience, including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetAudience.map((item, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  whoForVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary-100 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent-100 rounded-full animate-bounce"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${
              benefitsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              How RPL Benefits Employers & Workforce
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* For Industry & Employers */}
            <div className={`bg-white/80 backdrop-blur-md rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-200 transform transition-all duration-1000 ${
              benefitsVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'
            }`}>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mr-4">
                  <i className="fas fa-building text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For the Industry & Employers</h3>
              </div>
              <div className="space-y-4">
                {employerBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 transform transition-all duration-1000 ${
                      benefitsVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-30px] opacity-0'
                    }`}
                    style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* For Professionals */}
            <div className={`bg-white/80 backdrop-blur-md rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-200 transform transition-all duration-1000 ${
              benefitsVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'
            }`}>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center mr-4">
                  <i className="fas fa-user-graduate text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For Professionals</h3>
              </div>
              <div className="space-y-4">
                {professionalBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 transform transition-all duration-1000 ${
                      benefitsVisible ? 'translate-x-0 opacity-100' : 'translate-x-[30px] opacity-0'
                    }`}
                    style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center mt-1">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-500">
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Certified?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transform your work experience into formal qualifications through Recognition of Prior Learning
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
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpskillingPage;
