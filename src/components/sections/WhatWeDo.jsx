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
        {/* Title */}
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
          </div>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="group relative h-full">
                <div className={`relative h-full bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20 shadow-2xl transition-all duration-700 transform ${
                  hoveredCard === card.id ? 'scale-105 shadow-3xl translate-y-[-8px]' : 'scale-100'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl transition-opacity duration-500 ${
                    hoveredCard === card.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-7xl mb-8 transform transition-all duration-500 group-hover:scale-110">
                      <div className={`inline-block transition-all duration-700 ${
                        hoveredCard === card.id ? 'animate-bounce' : ''
                      }`}>
                        {card.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 group-hover:bg-gradient-to-r group-hover:from-primary-300 group-hover:to-accent-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {card.title}
                    </h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed transform transition-all duration-500 group-hover:translate-x-2">
                      {card.description}
                    </p>
                    
                    <div className="mt-8 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                  
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className={`absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full transition-all duration-1000 ${
                      hoveredCard === card.id ? 'animate-ping' : ''
                    }`}></div>
                    <div className={`absolute bottom-4 left-4 w-1 h-1 bg-accent-400 rounded-full transition-all duration-1000 delay-200 ${
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