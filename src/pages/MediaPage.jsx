import { useState, useEffect, useRef } from 'react';
import Button from '../components/ui/Button';
import { mediaData as mockMediaData } from '../data/mockData';

const MediaPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [eventsVisible, setEventsVisible] = useState(false);
  const [articlesVisible, setArticlesVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [events, setEvents] = useState([]);
  const [articles, setArticles] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  const eventsRef = useRef(null);
  const articlesRef = useRef(null);
  const galleryRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    setHeroVisible(true);

    fetch('/api/content/all')
      .then(res => {
        if (!res.ok) throw new Error('API not available');
        return res.json();
      })
      .then(data => {
        if (data.mediaData) {
          setEvents(data.mediaData.events || []);
          setArticles(data.mediaData.articles || []);
          setGalleryImages(data.mediaData.galleryImages || []);
          setTestimonials(data.mediaData.testimonials || []);
        }
      })
      .catch(err => {
        console.log('Using mock data (API not available in dev)');
        setEvents(mockMediaData.events || []);
        setArticles(mockMediaData.articles || []);
        setGalleryImages([]);
        setTestimonials([]);
      });

    const observers = [
      { ref: eventsRef, setter: setEventsVisible },
      { ref: articlesRef, setter: setArticlesVisible },
      { ref: galleryRef, setter: setGalleryVisible },
      { ref: testimonialsRef, setter: setTestimonialsVisible }
    ];

    const observerInstances = observers.map(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
          }
        },
        { threshold: 0.2 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    if (testimonials.length > 0) {
      const testimonialInterval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => {
        observerInstances.forEach(observer => observer.disconnect());
        clearInterval(testimonialInterval);
      };
    }
  }, [testimonials.length]);

  const filteredGallery = galleryFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === galleryFilter);

  const nextTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  if (events.length === 0) return <div className="min-h-screen flex items-center justify-center"><div className="text-2xl">Loading...</div></div>;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary-300/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-300/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-ping"></div>
        </div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        
        <div className="relative z-10 text-center text-white section-container">
          <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl max-w-5xl mx-auto transform transition-all duration-1000 ${
            heroVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
          }`}>
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg transform transition-all duration-1200 delay-300 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Media & Stories
              <span className="block text-accent-300 drop-shadow-2xl">
                Explore Our Journey
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto drop-shadow-md opacity-90 leading-relaxed transform transition-all duration-1200 delay-500 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Discover upcoming events, read inspiring stories, explore our gallery, and hear from our community
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section ref={eventsRef} className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="section-container">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            eventsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for exciting events, workshops, and experiences throughout the year
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group ${
                  eventsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${event.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <i className="fas fa-calendar-alt mr-2 text-primary-500"></i>
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <i className="fas fa-map-marker-alt mr-2 text-accent-500"></i>
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white transform hover:scale-105 transition-all duration-300"
                  >
                    Learn More
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section ref={articlesRef} className="py-20 bg-white">
        <div className="section-container">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            articlesVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, stories, and updates from the world of tourism
            </p>
          </div>

          {/* Featured Article */}
          <div className={`mb-12 transform transition-all duration-1000 ${
            articlesVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <img 
                    src={articles[0].image} 
                    alt={articles[0].title}
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Featured
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                    {articles[0].category}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {articles[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <span className="font-semibold text-gray-700">{articles[0].author}</span>
                    <span className="mx-3">•</span>
                    <span>{articles[0].date}</span>
                    <span className="mx-3">•</span>
                    <span className="flex items-center">
                      <i className="fas fa-clock mr-1"></i>
                      {articles[0].readTime}
                    </span>
                  </div>
                  <Button 
                    size="lg" 
                    className="w-fit bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white transform hover:scale-105 transition-all duration-300"
                  >
                    Read Full Article
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <div
                key={article.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 group ${
                  articlesVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <span className="font-semibold text-gray-700">{article.author}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <i className="fas fa-clock mr-1"></i>
                      {article.readTime}
                    </span>
                  </div>
                  <a href="#" className="text-primary-600 hover:text-accent-500 font-semibold text-sm transition-colors duration-300 flex items-center">
                    Read More
                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="section-container">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${
            galleryVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Photo Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Capturing moments from our incredible journeys
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {['all', 'heritage', 'nature', 'culture', 'adventure'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setGalleryFilter(filter)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    galleryFilter === filter
                      ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((image, index) => (
              <div
                key={image.id}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  galleryVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  height: index % 3 === 0 ? '400px' : '300px'
                }}
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-white/90 capitalize">{image.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                  <i className="fas fa-search-plus text-primary-600"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-accent-300 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="max-w-6xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-white/90 capitalize">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-gradient-to-r from-primary-600 to-accent-500">
        <div className="section-container">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            testimonialsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Real experiences from our amazing community
            </p>
          </div>

          <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${
            testimonialsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-white shadow-xl object-cover"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 text-2xl mx-1"></i>
                  ))}
                </div>
                <p className="text-xl lg:text-2xl text-white leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <h4 className="text-2xl font-bold text-white mb-2">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-white/80 text-lg">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center gap-6">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentTestimonial 
                          ? 'w-8 h-3 bg-white' 
                          : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of travelers who have discovered extraordinary experiences with Vibrant Tourism
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white transform hover:scale-105 shadow-xl font-semibold"
              >
                <i className="fas fa-calendar-check mr-2"></i>
                Book an Event
              </Button>
              <Button 
                size="lg" 
                className="bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 transform hover:scale-105 shadow-xl font-semibold"
              >
                <i className="fas fa-envelope text-primary-600 mr-2"></i>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;
