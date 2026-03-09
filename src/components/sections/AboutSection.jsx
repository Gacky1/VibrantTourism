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
        <div className="max-w-6xl mx-auto">
          {/* Title with Animation */}
          <div className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="relative inline-block">
                {title}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500"></div>
              </span>
            </h2>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.isArray(content) ? (
              content.map((paragraph, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl transform scale-95 group-hover:scale-100 transition-transform duration-500"></div>
                    <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 h-full">
                      <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
                      <p className="relative text-lg text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                      <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={`md:col-span-2 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl transform scale-95 group-hover:scale-100 transition-transform duration-500"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200">
                    <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
                    <p className="relative text-lg lg:text-xl text-gray-700 leading-relaxed">
                      {content}
                    </p>
                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
                  </div>
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