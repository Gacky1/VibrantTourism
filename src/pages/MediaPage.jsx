import { useState, useEffect, useCallback } from 'react';
import HeroSection from '../components/HeroSection';
import {
  IoCalendarOutline, IoExpandOutline, IoCloseOutline,
  IoChatbubbleOutline, IoChevronBackOutline, IoChevronForwardOutline,
  IoStar, IoStarOutline, IoArrowForwardOutline,
} from 'react-icons/io5';
import { mediaEvents, researchArticles, mediaTestimonials } from '../data/mockData';

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io  = new IntersectionObserver(
      (e) => e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); }),
      { threshold: 0.07 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
};



const Stars = ({ n = 5 }) => (
  <div className="flex gap-0.5">
    {[1,2,3,4,5].map(i => i <= n
      ? <IoStar key={i} className="w-3.5 h-3.5 text-amber-400" />
      : <IoStarOutline key={i} className="w-3.5 h-3.5 text-gray-200" />
    )}
  </div>
);

const TestimonialCarousel = ({ items }) => {
  const [idx, setIdx] = useState(0);
  const prev = useCallback(() => setIdx(i => (i - 1 + items.length) % items.length), [items.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % items.length), [items.length]);
  useEffect(() => { const t = setInterval(next, 5000); return () => clearInterval(t); }, [next]);
  const t = items[idx];
  return (
    <div className="max-w-2xl mx-auto">
      <div key={idx} className="card p-8 relative anim-scale-in">
        <IoChatbubbleOutline className="absolute top-6 right-6 w-10 h-10 text-blue-50" />
        <Stars n={5} />
        <p className="text-[15px] text-gray-mid leading-relaxed italic my-5">"{t.text}"</p>
        <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
          <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-100 shadow-sm" />
          <div>
            <h4 className="text-[14px] font-semibold text-gray-dark">{t.name}</h4>
            <span className="text-[11px] text-secondary font-medium">Verified Graduate</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-6">
        <button onClick={prev} className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-mid hover:border-secondary hover:text-secondary hover:bg-blue-50 transition-all duration-150">
          <IoChevronBackOutline className="w-4 h-4" />
        </button>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={`rounded-full transition-all duration-300 ${i === idx ? 'w-6 h-2 bg-secondary' : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'}`} />
          ))}
        </div>
        <button onClick={next} className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-mid hover:border-secondary hover:text-secondary hover:bg-blue-50 transition-all duration-150">
          <IoChevronForwardOutline className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const TABS = ['events', 'articles', 'gallery', 'testimonials'];

const MediaPage = () => {
  useReveal();
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

      <section className="py-16 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-14">
          {TABS.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 text-[12px] font-semibold rounded-xl border capitalize transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-secondary text-white border-secondary shadow-md shadow-blue-100'
                  : 'bg-white text-gray-mid border-gray-200 hover:border-secondary hover:text-secondary hover:bg-blue-50/40'
              }`}>{tab}
            </button>
          ))}
        </div>

        {/* Events — image-first cards */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto anim-fade-in">
            {mediaEvents.map(ev => (
              <div key={ev.id} className="img-card group cursor-pointer" style={{ height: '320px' }}
                onClick={() => alert(`Registration for ${ev.title}`)}>
                <img src={ev.image} alt={ev.title} />
                <div className="img-card-overlay" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="exp-tag"><IoCalendarOutline className="w-3 h-3" />{ev.date}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-white text-xl font-bold mb-2">{ev.title}</h3>
                  <p className="text-white/75 text-[13px] mb-3 line-clamp-2">{ev.description}</p>
                  <div className="flex items-center gap-1.5 text-white/80 text-[12px] font-semibold group-hover:text-white group-hover:gap-3 transition-all duration-200">
                    Register Now <IoArrowForwardOutline className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Articles — image-first */}
        {activeTab === 'articles' && (
          <div className="anim-fade-in">
            {/* Featured top article */}
            <div className="img-card group cursor-pointer mb-5 reveal" style={{ height: '360px' }}
              onClick={() => alert(`Opening ${researchArticles[0].title}`)}>
              <img src={researchArticles[0].image} alt={researchArticles[0].title} />
              <div className="img-card-overlay" />
              <div className="absolute top-4 left-4 z-10">
                <span className="exp-tag"><IoCalendarOutline className="w-3 h-3" />{researchArticles[0].date}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10 max-w-2xl">
                <h3 className="text-white text-2xl font-bold mb-2">{researchArticles[0].title}</h3>
                <p className="text-white/75 text-[14px] mb-3">{researchArticles[0].excerpt}</p>
                <div className="flex items-center gap-1.5 text-white/80 text-[12px] font-semibold group-hover:text-white group-hover:gap-3 transition-all duration-200">
                  Read Article <IoArrowForwardOutline className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {researchArticles.slice(1).map((a, i) => (
                <div key={a.id} className={`reveal reveal-delay-${i + 1} img-card group cursor-pointer`} style={{ height: '240px' }}
                  onClick={() => alert(`Opening ${a.title}`)}>
                  <img src={a.image} alt={a.title} />
                  <div className="img-card-overlay" />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="exp-tag"><IoCalendarOutline className="w-3 h-3" />{a.date}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="text-white text-[16px] font-bold mb-1">{a.title}</h3>
                    <div className="flex items-center gap-1 text-white/70 text-[11px] font-semibold group-hover:text-white group-hover:gap-2 transition-all duration-200">
                      Read Article <IoArrowForwardOutline className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery — masonry */}
        {activeTab === 'gallery' && (
          <div className="anim-fade-in">
            <div className="gallery-grid reveal">
              {[
                { url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=800&fit=crop', title: 'Taj Mahal', tall: true },
                { url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop', title: 'Rajasthan Festival' },
                { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop', title: 'Goa Beaches' },
                { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop', title: 'Himalayan Peaks', tall: true },
                { url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop', title: 'Kerala Backwaters' },
                { url: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=600&h=400&fit=crop', title: 'Wildlife Safari' },
              ].map((img, i) => (
                <div key={i} className={`img-card group cursor-pointer ${img.tall ? 'tall' : ''}`}
                  style={{ height: img.tall ? '100%' : '200px', minHeight: '200px' }}
                  onClick={() => setLightbox(img)}>
                  <img src={img.url} alt={img.title} />
                  <div className="img-card-overlay" style={{ opacity: 0.35 }} />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-300 flex items-center justify-center z-10">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-2.5 flex items-center gap-2">
                      <IoExpandOutline className="w-4 h-4 text-white" />
                      <span className="text-white text-[12px] font-semibold">View</span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="text-white text-[11px] font-semibold">{img.title}</span>
                  </div>
                </div>
              ))}
            </div>
            {lightbox && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
                style={{ background: 'rgba(10,37,64,0.92)', backdropFilter: 'blur(6px)' }}
                onClick={() => setLightbox(null)}>
                <div className="relative max-w-3xl w-full lightbox-enter" onClick={e => e.stopPropagation()}>
                  <img src={lightbox.url} alt={lightbox.title} className="w-full rounded-2xl shadow-2xl" />
                  <p className="text-white text-center text-sm font-medium mt-4">{lightbox.title}</p>
                  <button onClick={() => setLightbox(null)}
                    className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-gray-dark flex items-center justify-center shadow-xl hover:bg-gray-100 transition-colors hover:scale-110">
                    <IoCloseOutline className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Testimonials */}
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
