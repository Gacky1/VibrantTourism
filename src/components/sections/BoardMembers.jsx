import { useState, useEffect, useRef } from 'react';

const BoardMembers = ({ members, title = "Board Members" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="section-container">
        {/* Title */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 relative">
              <span className="relative inline-block">
                {title}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our distinguished leadership team driving innovation in tourism
            </p>
          </div>
        </div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {members.map((member, index) => (
            <div
              key={member.id}
              className={`transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-3xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-full w-full bg-white rounded-3xl"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Photo */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-primary-200 transition-all duration-500">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-bounce"></div>
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                    {member.name}
                  </h3>
                  
                  {/* Designation */}
                  <p className="text-gray-600 font-medium transform group-hover:text-primary-600 transition-colors duration-500">
                    {member.designation}
                  </p>
                  
                  {/* Animated Line */}
                  <div className="mt-4 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;