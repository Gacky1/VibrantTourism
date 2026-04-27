import { useState, useEffect, useCallback } from 'react';
import HeroSection from '../components/HeroSection';
import ArticleCard from '../components/ArticleCard';
import {
  IoCalendarOutline, IoExpandOutline, IoCloseOutline,
  IoChatbubbleOutline, IoChevronBackOutline, IoChevronForwardOutline,
  IoStarOutline, IoStar,
} from 'react-icons/io5';
import { mediaEvents, researchArticles, mediaGallery, mediaTestimonials } from '../data/mockData';

const TABS = ['events', 'articles', 'gallery', 'testimonials'];

/* ── Star rating display ── */
const Stars = ({ n = 5 }) => (
  <div className="flex gap-0.5">
    {[1,2,3,4,5].map(i =>
      i <= n
        ? <IoStar        key={i} className="w-3.5 h-3.5 text-amber-400" />
        : <IoStarOutline key={i} className="w-3.5 h-3.5 text-gray-200" />
    )}
  </div>
);

/* ── Testimonial carousel ── */
const TestimonialCarousel = ({ items }) => {
  const [idx, setIdx] = useState(0);

  const prev = useCallback(() => setIdx(i => (i - 1 + items.length) % items.length), [items.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % items.length), [items.length]);

  /* Auto-advance every 5 s */
  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const t = items[idx];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Card */}
      <div key={idx} className="card p-8 relative anim-scale-in">
        <IoChatbubbleOutline className="absolute top-6 right-6 w-10 h-10 text-blue-50" />
        <Stars n={5} />
        <p className="text-[15px] text-gray-mid leading-relaxed italic my-5">"{t.text}"</p>
        <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
          <img src={t.image} alt={t.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-100 shadow-sm" />
          <div>
            <h4 className="text-[14px] font-semibold text-gray-dark">{t.name}</h4>
            <span className="text-[11px] text-secondary font-medium">Verified Graduate</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button onClick={prev}
          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center
            text-gray-mid hover:border-secondary hover:text-secondary hover:bg-blue-50 transition-all duration-150">
          <IoChevronBackOutline className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={`rounded-full transition-all duration-300 ${
                i === idx ? 'w-6 h-2 bg-secondary' : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button onClick={next}
          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center
            text-gray-mid hover:border-secondary hover:text-secondary hover:bg-blue-50 transition-all duration-150">
          <IoChevronForwardOutline className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

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
              className={`px-5 py-2.5 text-[12px] font-semibold rounded-xl border capitalize
                transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-secondary text-white border-secondary shadow-md shadow-blue-100'
                  : 'bg-white text-gray-mid border-gray-200 hover:border-secondary hover:text-secondary hover:bg-blue-50/40'
              }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Events */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto anim-fade-in">
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
                    <h3 className="text-[15px] font-semibold text-gray-dark mb-2 leading-snug
                      group-hover:text-secondary transition-colors duration-200">{ev.title}</h3>
                    <p className="text-[13px] text-gray-mid leading-relaxed">{ev.description}</p>
                  </div>
                  <button onClick={() => alert(`Registration for ${ev.title}`)}
                    className="mt-4 text-[12px] font-semibold text-secondary flex items-center gap-1
                      hover:gap-2.5 transition-all duration-200">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Articles */}
        {activeTab === 'articles' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 anim-fade-in">
            {researchArticles.map(a => (
              <ArticleCard key={a.id} title={a.title} date={a.date}
                excerpt={a.excerpt} image={a.image} onClick={() => alert(`Opening ${a.title}`)} />
            ))}
          </div>
        )}

        {/* Gallery */}
        {activeTab === 'gallery' && (
          <div className="anim-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {mediaGallery.map(img => (
                <div key={img.id} className="card group overflow-hidden cursor-pointer"
                  onClick={() => setLightbox(img)}>
                  <div className="relative h-60 overflow-hidden img-zoom">
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/35
                      transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300
                        translate-y-2 group-hover:translate-y-0
                        bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-2.5
                        flex items-center gap-2">
                        <IoExpandOutline className="w-4 h-4 text-white" />
                        <span className="text-white text-[12px] font-semibold">View</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 border-t border-gray-100">
                    <p className="text-[13px] font-medium text-gray-dark text-center">{img.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Lightbox */}
            {lightbox && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                style={{ background: 'rgba(10,37,64,0.92)', backdropFilter: 'blur(6px)' }}
                onClick={() => setLightbox(null)}
              >
                <div className="relative max-w-3xl w-full lightbox-enter" onClick={e => e.stopPropagation()}>
                  <img src={lightbox.url} alt={lightbox.title}
                    className="w-full rounded-2xl shadow-2xl" />
                  <p className="text-white text-center text-sm font-medium mt-4">{lightbox.title}</p>
                  <button onClick={() => setLightbox(null)}
                    className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-gray-dark
                      flex items-center justify-center shadow-xl hover:bg-gray-100 transition-colors duration-150
                      hover:scale-110">
                    <IoCloseOutline className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Testimonials — carousel */}
        {activeTab === 'testimonials' && (
          <div className="anim-fade-in">
            <TestimonialCarousel items={mediaTestimonials} />
          </div>
        )}
      </section>
    </div>
  );
};

export default MediaPage;
