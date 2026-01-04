import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CategoryGrid from '../components/sections/CategoryGrid';
import SectionText from '../components/sections/SectionText';
import AboutSection from '../components/sections/AboutSection';
import WhatWeDo from '../components/sections/WhatWeDo';
import BoardMembers from '../components/sections/BoardMembers';
import TourismContribution from '../components/sections/TourismContribution';
import Button from '../components/ui/Button';
import { 
  tourismCategories, 
  whatWeDoCards,
  boardMembers, 
  sectionContent 
} from '../data/mockData';

const HomePage = () => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary-300/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-300/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-ping"></div>
        </div>
        
        {/* Background Image with Glass Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop&crop=center)'
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
        
        {/* Glass Card with Content */}
        <div className="relative z-10 text-center text-white section-container">
          <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl max-w-4xl mx-auto transform transition-all duration-1000 ${
            heroVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
          }`}>
            <div className={`mb-6 flex justify-center transform transition-all duration-1200 delay-300 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <img 
                src="/images/Logo-Transparent.png" 
                alt="Vibrant Tourism" 
                className="h-24 md:h-32 lg:h-40 xl:h-48 w-auto drop-shadow-2xl animate-pulse"
              />
            </div>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md opacity-90 transform transition-all duration-1200 delay-500 ${
              heroVisible ? 'translate-y-0 opacity-90' : 'translate-y-10 opacity-0'
            }`}>
              Discover extraordinary experiences across culture, heritage, wellness, and adventure
            </p>
            <div className={`transform transition-all duration-1200 delay-700 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Link to="/destination">
                <Button size="lg" variant="accent" className="transform hover:scale-105 shadow-xl animate-pulse">
                  Explore Destinations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tourism Categories Grid */}
      <CategoryGrid categories={tourismCategories} />

      {/* Tourism Description */}
      <SectionText content={sectionContent.tourismDescription} />

      {/* About Section */}
      <AboutSection 
        title={sectionContent.aboutTitle}
        content={sectionContent.aboutContent}
      />

      {/* What We Do */}
      <WhatWeDo cards={whatWeDoCards} />

      {/* Tourism Contribution */}
      <TourismContribution />

      {/* Board Members */}
      <BoardMembers members={boardMembers} />
    </div>
  );
};

export default HomePage;