import CategoryGrid from '../components/sections/CategoryGrid';
import SectionText from '../components/sections/SectionText';
import AboutSection from '../components/sections/AboutSection';
import WhatWeDo from '../components/sections/WhatWeDo';
import BoardMembers from '../components/sections/BoardMembers';
import Button from '../components/ui/Button';
import { 
  tourismCategories, 
  whatWeDoCards,
  boardMembers, 
  sectionContent 
} from '../data/mockData';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Glass Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop&crop=center)'
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
        
        {/* Glass Card with Content */}
        <div className="relative z-10 text-center text-white section-container">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl max-w-4xl mx-auto">
            <div className="mb-6 flex justify-center">
              <img 
                src="/images/Logo-Transparent.png" 
                // src="/images/Logo-White-Bg.png" 
                alt="Vibrant Tourism" 
                className="h-24 md:h-32 lg:h-40 xl:h-48 w-auto drop-shadow-2xl"
              />
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md opacity-90">
              Discover extraordinary experiences across culture, heritage, wellness, and adventure
            </p>
            <Button size="lg" variant="accent" className="transform hover:scale-105 shadow-xl">
              Explore Destinations
            </Button>
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

      {/* Board Members */}
      <BoardMembers members={boardMembers} />
    </div>
  );
};

export default HomePage;