import { useState, useEffect, useRef } from 'react';

const AboutSection = ({ title, content, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`relative py-20 overflow-hidden ${className}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Title with Animation */}
          <div className="relative">
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <div className="relative">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                  <span className="relative inline-block">
                    {title}
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 origin-left transition-transform duration-1000 delay-500 group-hover:scale-x-100"></div>
                  </span>
                </h2>
                
                {/* Decorative Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full opacity-30 animate-bounce"></div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content with Staggered Animation */}
          <div className="space-y-8">
            {Array.isArray(content) ? (
              content.map((paragraph, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-100/50 to-accent-100/50 rounded-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
                    <p className="relative text-lg lg:text-xl text-gray-700 leading-relaxed p-6 rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:scale-105">
                      {paragraph}
                      <div className="absolute bottom-2 right-2 w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-100/50 to-accent-100/50 rounded-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
                  <p className="relative text-lg lg:text-xl text-gray-700 leading-relaxed p-6 rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:scale-105">
                    {content}
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;