import { useState } from 'react';
import HeroSection  from '../components/HeroSection';
import ArticleCard  from '../components/ArticleCard';
import { IoCalendarOutline, IoExpandOutline, IoCloseOutline, IoChatbubbleOutline } from 'react-icons/io5';
import { mediaEvents, researchArticles, mediaGallery, mediaTestimonials } from '../data/mockData';

const TABS = ['events', 'articles', 'gallery', 'testimonials'];

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [lightbox,  setLightbox]  = useState(null);

  return (
    <div className="bg-white min-h-screen pb-20">
      <HeroSection
        badge="News & Updates"
        title="Media & Research Portal"
        subtitle="VTC Communications"
        description="Stay updated with our latest field operations, global events, and sector research breakthroughs."
        imageUrl="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
      />

      <section className="py-16 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {TABS.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-[12px] font-semibold rounded-lg border capitalize transition-all duration-150 ${
                activeTab === tab
                  ? 'bg-secondary text-white border-secondary'
                  : 'bg-white text-gray-mid border-gray-200 hover:border-secondary hover:text-secondary'
              }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Events */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {mediaEvents.map(ev => (
              <div key={ev.id} className="card group overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden img-zoom flex-shrink-0">
                  <img src={ev.image} alt={ev.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-mid mb-2">
                      <IoCalendarOutline className="w-3.5 h-3.5 text-secondary" />
                      {ev.date}
                    </div>
                    <h3 className="text-[15px] font-semibold text-gray-dark mb-2 leading-snug group-hover:text-secondary transition-colors duration-150">{ev.title}</h3>
                    <p className="text-[13px] text-gray-mid leading-relaxed">{ev.description}</p>
                  </div>
                  <button onClick={() => alert(`Registration for ${ev.title}`)}
                    className="mt-4 text-[12px] font-semibold text-secondary flex items-center gap-1 hover:gap-2 transition-all duration-150">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Articles */}
        {activeTab === 'articles' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchArticles.map(a => (
              <ArticleCard key={a.id} title={a.title} date={a.date}
                excerpt={a.excerpt} image={a.image} onClick={() => alert(`Opening ${a.title}`)} />
            ))}
          </div>
        )}

        {/* Gallery */}
        {activeTab === 'gallery' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {mediaGallery.map(img => (
                <div key={img.id} className="card group overflow-hidden cursor-pointer"
                  onClick={() => setLightbox(img)}>
                  <div className="relative h-56 overflow-hidden img-zoom">
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-200 flex items-center justify-center">
                      <IoExpandOutline className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                  <div className="px-4 py-3 border-t border-gray-100">
                    <p className="text-[13px] font-medium text-gray-dark text-center">{img.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {lightbox && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/90"
                onClick={() => setLightbox(null)}>
                <div className="relative max-w-3xl w-full" onClick={e => e.stopPropagation()}>
                  <img src={lightbox.url} alt={lightbox.title} className="w-full rounded-xl shadow-2xl" />
                  <p className="text-white text-center text-sm font-medium mt-3">{lightbox.title}</p>
                  <button onClick={() => setLightbox(null)}
                    className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white text-gray-dark flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
                    <IoCloseOutline className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* Testimonials */}
        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {mediaTestimonials.map(t => (
              <div key={t.id} className="card p-6 relative">
                <IoChatbubbleOutline className="absolute top-5 right-5 w-8 h-8 text-blue-50" />
                <p className="text-[14px] text-gray-mid leading-relaxed italic mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                  <div>
                    <h4 className="text-[14px] font-semibold text-gray-dark">{t.name}</h4>
                    <span className="text-[11px] text-secondary font-medium">Verified Graduate</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default MediaPage;
