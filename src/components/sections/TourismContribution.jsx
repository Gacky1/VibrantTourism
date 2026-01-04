import { tourismContribution } from '../../data/mockData';

const TourismContribution = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          {tourismContribution.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-primary-600 mb-2">
                  {tourismContribution.statistics.jobs}
                </div>
                <div className="text-gray-600">
                  Jobs supported in {tourismContribution.statistics.year}
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href={tourismContribution.cta.href}
                className="inline-block bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                {tourismContribution.cta.text}
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            {tourismContribution.quotes.map((quote, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <blockquote className="text-gray-700 italic mb-4">
                  "{quote.text}"
                </blockquote>
                <cite className="text-primary-600 font-semibold">
                  {quote.source}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismContribution;