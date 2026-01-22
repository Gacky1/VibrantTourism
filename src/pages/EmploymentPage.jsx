import { useState, useEffect, useRef } from 'react';
import Button from '../components/ui/Button';

const EmploymentPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [demandVisible, setDemandVisible] = useState(false);
  const [researchVisible, setResearchVisible] = useState(false);
  const [apprenticeshipVisible, setApprenticeshipVisible] = useState(false);
  const [jobOpportunitiesVisible, setJobOpportunitiesVisible] = useState(false);
  
  const demandRef = useRef(null);
  const researchRef = useRef(null);
  const apprenticeshipRef = useRef(null);
  const jobOpportunitiesRef = useRef(null);

  useEffect(() => {
    setHeroVisible(true);

    const observers = [
      { ref: demandRef, setter: setDemandVisible },
      { ref: researchRef, setter: setResearchVisible },
      { ref: apprenticeshipRef, setter: setApprenticeshipVisible },
      { ref: jobOpportunitiesRef, setter: setJobOpportunitiesVisible }
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

  const demandAggregationPoints = [
    {
      icon: '📊',
      title: 'Industry Demand Assessment',
      description: 'Comprehensive analysis of workforce requirements across tourism and hospitality sectors'
    },
    {
      icon: '🎯',
      title: 'Skill Gap Identification',
      description: 'Systematic mapping of skill gaps in the tourism workforce to align training programs'
    },
    {
      icon: '🤝',
      title: 'Employer Partnerships',
      description: 'Collaboration with industry partners to understand hiring needs and workforce trends'
    },
    {
      icon: '📈',
      title: 'Workforce Planning',
      description: 'Strategic planning to meet future workforce demands in emerging tourism segments'
    }
  ];

  const researchTrends = [
    {
      title: 'Emerging Tourism Sectors',
      stats: '35% Growth',
      description: 'Wellness, adventure, and sustainable tourism leading job creation',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Digital Skills Demand',
      stats: '50% Increase',
      description: 'Rising demand for digital marketing and tech-savvy hospitality professionals',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Service Excellence',
      stats: '70% Priority',
      description: 'Customer experience and service quality remain top hiring criteria',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Regional Expansion',
      stats: '40% Growth',
      description: 'Tier 2 and Tier 3 cities showing significant tourism employment growth',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const apprenticeshipBenefits = [
    {
      icon: '🎓',
      title: 'Learn & Earn',
      description: 'Gain practical experience while earning during your apprenticeship period'
    },
    {
      icon: '💼',
      title: 'Industry Exposure',
      description: 'Work with leading hotels, resorts, and tourism companies for real-world experience'
    },
    {
      icon: '📜',
      title: 'Certification',
      description: 'Receive recognized certifications upon successful completion of apprenticeship'
    },
    {
      icon: '🚀',
      title: 'Career Growth',
      description: 'High potential for full-time employment and career advancement post-apprenticeship'
    }
  ];

  const apprenticeshipPrograms = [
    'Front Office Operations',
    'Housekeeping & Facility Management',
    'Food & Beverage Service',
    'Culinary Arts',
    'Tour Operations',
    'Event Management',
    'Travel Desk Operations',
    'Wellness & Spa Services'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary-300/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-300/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-ping"></div>
        </div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop&crop=center)'
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
              Employment Opportunities
              <span className="block text-accent-300 drop-shadow-2xl">
                Building Careers in Tourism
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto drop-shadow-md opacity-90 leading-relaxed transform transition-all duration-1200 delay-500 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Connecting skilled professionals with opportunities across India's vibrant tourism and hospitality sector
            </p>
          </div>
        </div>
      </section>

      {/* Demand Aggregation Section */}
      <section ref={demandRef} className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${
              demandVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Demand Aggregation
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${
              demandVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Understanding and mapping workforce needs across the tourism and hospitality industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {demandAggregationPoints.map((point, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  demandVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl mb-4">{point.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Trends Section */}
      <section ref={researchRef} className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${
              researchVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Research & Trends
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${
              researchVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Latest insights and trends shaping employment in the tourism sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchTrends.map((trend, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  researchVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`inline-block bg-gradient-to-r ${trend.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                  {trend.stats}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{trend.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{trend.description}</p>
              </div>
            ))}
          </div>

          <div className={`mt-16 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-10 max-w-4xl mx-auto transform transition-all duration-1000 delay-600 ${
            researchVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Industry Insights
            </h3>
            <p className="text-gray-700 leading-relaxed text-center">
              The Indian tourism sector is projected to create over <span className="font-bold text-primary-600">50 million jobs</span> by 2030. 
              With increasing domestic and international travel, the demand for skilled hospitality and tourism professionals continues to rise, 
              offering diverse career opportunities across various segments including hotels, travel agencies, tour operations, wellness, 
              and adventure tourism.
            </p>
          </div>
        </div>
      </section>

      {/* Apprenticeship Opportunities Section */}
      <section ref={apprenticeshipRef} className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${
              apprenticeshipVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Apprenticeship Opportunities
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${
              apprenticeshipVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Hands-on training programs combining practical experience with formal learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {apprenticeshipBenefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center ${
                  apprenticeshipVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className={`bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-200 max-w-4xl mx-auto transform transition-all duration-1000 delay-600 ${
            apprenticeshipVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Available Apprenticeship Programs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {apprenticeshipPrograms.map((program, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-4 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <p className="text-gray-700 font-medium">{program}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section ref={jobOpportunitiesRef} className="py-20 bg-gradient-to-r from-primary-600 to-accent-500">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transform transition-all duration-1000 ${
              jobOpportunitiesVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <div className="text-6xl mb-6">💼</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Explore Job Opportunities
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Discover thousands of job openings in tourism, hospitality, and related sectors. 
                Connect with top employers and take the next step in your career.
              </p>
              
              <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 transform transition-all duration-1000 delay-300 ${
                jobOpportunitiesVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Find Your Perfect Role
                </h3>
                <p className="text-white/90 mb-6">
                  Browse through verified job listings from leading hotels, resorts, travel companies, 
                  and tourism businesses across India. Filter by location, category, and experience level 
                  to find opportunities that match your skills and aspirations.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-white/90 text-sm">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle mr-2"></i>
                    Verified Employers
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle mr-2"></i>
                    Real-time Updates
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle mr-2"></i>
                    Easy Application
                  </div>
                </div>
              </div>

              <a
                href="https://staffinn.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block bg-white text-primary-600 hover:bg-primary-100 border-2 border-white transform hover:scale-105 shadow-2xl font-bold px-12 py-5 rounded-full text-xl transition-all duration-300 transform transition-all duration-1000 delay-500 ${
                  jobOpportunitiesVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              >
                <i className="fas fa-external-link-alt mr-3"></i>
                Visit Staffinn.com
              </a>
              
              <p className={`text-white/80 mt-6 text-sm transform transition-all duration-1000 delay-700 ${
                jobOpportunitiesVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}>
                Your gateway to tourism and hospitality careers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start Your Career Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Whether you're looking for apprenticeships, training programs, or job opportunities, 
              we're here to support your career in tourism and hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary-600 to-accent-500 text-white transform hover:scale-105 shadow-xl font-semibold"
              >
                <i className="fas fa-graduation-cap mr-2"></i>
                Explore Training Programs
              </Button>
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 transform hover:scale-105 shadow-xl font-semibold"
              >
                <i className="fas fa-phone mr-2"></i>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmploymentPage;
