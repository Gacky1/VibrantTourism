import { useState, useEffect, useRef } from 'react';

const WhatWeDo = ({ cards, title = "What We Do" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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
    <section ref={sectionRef} className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-primary-900 to-accent-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-accent-400/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-primary-300/20 rounded-full animate-ping"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="section-container relative z-10">
        {/* Title with Spectacular Animation */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 relative">
              <span className="relative inline-block">
                {title}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"></div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empowering tourism through innovation, collaboration, and excellence
            </p>
          </div>
        </div>
        
        {/* Cards Grid with 3D Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="group relative h-full">
                {/* Card Container with 3D Transform */}
                <div className={`relative h-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl transition-all duration-700 transform ${
                  hoveredCard === card.id 
                    ? 'scale-105 shadow-3xl -rotate-2' 
                    : 'scale-100 rotate-0'
                }`}>
                  
                  {/* Glowing Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl transition-opacity duration-500 ${
                    hoveredCard === card.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with Floating Animation */}
                    <div className="text-6xl mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <div className={`inline-block transition-all duration-700 ${
                        hoveredCard === card.id ? 'animate-bounce' : ''
                      }`}>
                        {card.icon}
                      </div>
                    </div>
                    
                    {/* Title with Gradient Effect */}
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-primary-300 group-hover:to-accent-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {card.title}
                    </h3>
                    
                    {/* Description with Slide Effect */}
                    <p className="text-gray-300 leading-relaxed transform transition-all duration-500 group-hover:translate-x-2">
                      {card.description}
                    </p>
                    
                    {/* Animated Accent Line */}
                    <div className="mt-6 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className={`absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full transition-all duration-1000 ${
                      hoveredCard === card.id ? 'animate-ping' : ''
                    }`}></div>
                    <div className={`absolute bottom-4 left-4 w-1 h-1 bg-accent-400 rounded-full transition-all duration-1000 delay-200 ${
                      hoveredCard === card.id ? 'animate-ping' : ''
                    }`}></div>
                    <div className={`absolute top-1/2 left-2 w-1.5 h-1.5 bg-primary-300 rounded-full transition-all duration-1000 delay-400 ${
                      hoveredCard === card.id ? 'animate-ping' : ''
                    }`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;