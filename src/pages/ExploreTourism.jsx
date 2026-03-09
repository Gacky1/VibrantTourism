import { useState, useEffect } from 'react';
import { tourismCategories, stateWiseTourism, indianStates } from '../data/tourismData';
import Button from '../components/ui/Button';

const ExploreTourism = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedState, setSelectedState] = useState('');
  const [showStateFilter, setShowStateFilter] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory]);

  const filteredCategories = selectedState
    ? stateWiseTourism[selectedState]?.map(id => tourismCategories[id]) || []
    : Object.values(tourismCategories);

  const handleBookTravel = (categoryTitle) => {
    alert(`Booking inquiry for ${categoryTitle}. This will redirect to booking form.`);
  };

  if (selectedCategory) {
    const category = tourismCategories[selectedCategory];
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container py-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className="mb-8 flex items-center text-primary-600 hover:text-primary-700 font-semibold"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Categories
          </button>

          <div className="max-w-5xl mx-auto">
            <div className="relative h-96 rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h1 className="text-5xl font-bold mb-2">{category.title}</h1>
                <p className="text-xl opacity-90">{category.subtitle}</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What it is</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{category.whatItIs}</p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Famous States & Destinations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {category.states.map((state, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{state.name}</h3>
                    <p className="text-gray-700">{state.highlights}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Things to Do</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {category.thingsToDo.map((activity, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mt-1">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                    <p className="text-gray-700 font-medium">{activity}</p>
                  </div>
                ))}
              </div>

              {category.significance && (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why it Matters</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">{category.significance}</p>
                </>
              )}

              <div className="text-center pt-6">
                <Button
                  size="lg"
                  onClick={() => handleBookTravel(category.title)}
                  className="bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white transform hover:scale-105 shadow-xl font-semibold px-12 py-4 text-xl"
                >
                  <i className="fas fa-plane-departure mr-3"></i>
                  Book Your Travel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="section-container py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Explore Tourism in India
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover incredible experiences across diverse tourism categories
          </p>
          
          <button
            onClick={() => setShowStateFilter(!showStateFilter)}
            className="inline-flex items-center px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-all duration-300"
          >
            <i className="fas fa-map-marker-alt mr-2"></i>
            {showStateFilter ? 'Show All Categories' : 'Select Tourism by State'}
          </button>
        </div>

        {showStateFilter && (
          <div className="max-w-md mx-auto mb-12">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-2xl focus:border-primary-500 focus:outline-none shadow-lg"
            >
              <option value="">Select a State</option>
              {indianStates.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, index) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-full text-3xl shadow-lg`}>
                    {category.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.subtitle}</p>
                  
                  <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Explore Details
                    <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedState && filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No tourism categories found for {selectedState}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreTourism;
