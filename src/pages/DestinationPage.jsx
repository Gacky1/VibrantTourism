import { useState, useEffect, useRef } from 'react';
import Button from '../components/ui/Button';
import TourismCharts from '../components/sections/TourismCharts';

const DestinationPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const keyStats = [
    { label: 'GDP Contribution', value: '9-10%', description: 'Tourism & Hospitality' },
    { label: 'Employment', value: '40M+', description: 'Direct & Indirect Jobs' },
    { label: 'MSMEs', value: '75%', description: 'Tourism Businesses' },
    { label: 'International Tourists', value: '12M', description: '2024 Arrivals' },
    { label: 'Domestic Trips', value: '2B+', description: '2024 Tourism Trips' }
  ];

  const tourismSegments = [
    { name: 'Leisure & Recreation', percentage: 30, color: 'from-blue-500 to-blue-600' },
    { name: 'Cultural & Heritage', percentage: 20, color: 'from-purple-500 to-purple-600' },
    { name: 'Wellness & AYUSH', percentage: 15, color: 'from-green-500 to-green-600' },
    { name: 'Rural & Eco', percentage: 15, color: 'from-emerald-500 to-emerald-600' },
    { name: 'Adventure & Sports', percentage: 10, color: 'from-orange-500 to-orange-600' },
    { name: 'Culinary / Food', percentage: 10, color: 'from-red-500 to-red-600' }
  ];

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&h=1080&fit=crop&crop=center)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        
        <div className="relative z-10 text-center text-white section-container">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              Transforming Destinations,
              <span className="block text-accent-300 drop-shadow-2xl">
                Empowering Communities
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto drop-shadow-md opacity-90 leading-relaxed">
              Tourism drives economic growth, creates jobs, and supports local communities through travel, leisure, and cultural experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Tourism Impact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Tourism Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              India's tourism and hospitality sector is one of the largest and fastest-growing contributors to the economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: '🏨', title: 'Hotels & Resorts', desc: 'Benefit from increased demand and occupancy rates' },
              { icon: '🎯', title: 'Tour Operators', desc: 'Design unique packages and memorable experiences' },
              { icon: '🎨', title: 'Local Communities', desc: 'Artisans, F&B providers gain sustainable income' },
              { icon: '🌿', title: 'Conservation', desc: 'Cultural preservation initiatives receive support' }
            ].map((item, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary-200 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-200 rounded-full animate-bounce"></div>
        </div>

        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Tourism & Hospitality in India
              <span className="block text-primary-600">Key Indicators</span>
            </h2>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {keyStats.map((stat, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/90 transition-all duration-500 group shadow-lg border border-gray-200">
                  <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold mb-1 text-gray-900">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tourism Charts Section */}
      <TourismCharts />

      {/* Tourism Segments Contribution */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contribution of Each Type of Tourism
              <span className="block text-primary-600">in the Growth of India</span>
            </h2>
          </div>

          {/* Source Citations */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-gray-700 italic mb-4">
                  "According to IBEF, India's tourism and hospitality sector supported over 46.5 million jobs in 2024 and continues to grow as a major contributor to national employment and economic activity."
                </p>
                <div className="text-sm font-semibold text-primary-600">— India Brand Equity Foundation</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-gray-700 italic mb-4">
                  "Statista reports that the tourism industry's direct contribution to India's GDP is significant with continued growth projected through 2034."
                </p>
                <div className="text-sm font-semibold text-primary-600">— Statista</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button size="lg" className="transform hover:scale-105 shadow-xl">
              Explore Types of Tourism
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;