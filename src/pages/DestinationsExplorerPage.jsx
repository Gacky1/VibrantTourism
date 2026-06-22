import { useState, useEffect } from 'react';
import { IoLocationSharp, IoCloseOutline } from 'react-icons/io5';
import SmartBookingAssistant from '../components/assistant/SmartBookingAssistant';
import { tourismCategories, RegionsData } from '../data/tourismData';

// Interactive Hero banner slide images
const HERO_SLIDES = [
  {
    id: 'manali',
    name: 'Manali',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1920&q=80',
    tagline: 'Scenic forest temples and stone stairs in Himachal Pradesh.',
  },
  {
    id: 'delhi',
    name: 'Delhi',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920&q=80',
    tagline: 'Rich heritage forts and historic streets of India\'s capital.',
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1920&q=80',
    tagline: 'The spectacular Hawa Mahal in the Pink City.',
  },
  {
    id: 'kerala',
    name: 'Kerala',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=80',
    tagline: 'Lush backwaters, pristine palms, and wellness retreats.',
  },
  {
    id: 'hampi',
    name: 'Hampi',
    image: 'https://images.unsplash.com/photo-1722934804353-0d9f6a55ab5e?q=80&w=1145&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tagline: 'Ancient stone chariot ruins and boulder landscapes.',
  }
];

// Slides for the Lesser Known Wonders 3D Carousel
const LESSER_KNOWN_WONDERS = [
  {
    id: 'reiek',
    name: 'Reiek',
    subtitle: 'The home of majestic misty mountains!',
    state: 'Mizoram',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
    description: 'A serene mountain peak offering panoramic views of misty valleys and local Mizo heritage.'
  },
  {
    id: 'ziro',
    name: 'Ziro Valley',
    subtitle: 'A serene valley surrounded by pine-clad hills.',
    state: 'Arunachal Pradesh',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
    description: 'Home to the unique Apatani tribe, custom paddy-cum-fish farming, and stunning green meadows.'
  },
  {
    id: 'gandikota',
    name: 'Gandikota',
    subtitle: 'The grand canyon of India.',
    state: 'Andhra Pradesh',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
    description: 'A gorge carved by the Pennar river through red granite hills, topped by an ancient fort.'
  },
  {
    id: 'majuli',
    name: 'Majuli Island',
    subtitle: 'The world\'s largest river island.',
    state: 'Assam',
    image: 'https://images.unsplash.com/photo-1472214222541-d510753a4707?w=1200&q=80',
    description: 'A vibrant center of Vaishnavite culture, traditional mask-making, and river bio-networks.'
  },
  {
    id: 'mawlynnong',
    name: 'Mawlynnong',
    subtitle: 'Asia\'s cleanest village with root bridges.',
    state: 'Meghalaya',
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&q=80',
    description: 'Famed for its community-led hygiene, blooming trails, and living root bridges.'
  }
];



const PopularDestinations = [
  {
    id: 'heritage',
    label: 'Heritage Hubs',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80',
    list: ['Jaipur Palaces', 'Taj Mahal Agra', 'Hampi Ruins', 'Khajuraho Temples', 'Varanasi Ghats', 'Ajanta & Ellora']
  },
  {
    id: 'beaches',
    label: 'Beach Retreats',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80',
    list: ['Baga & Calangute Goa', 'Kovalam Beach Kerala', 'Radhanagar Andaman', 'Puducherry Coast', 'Gokarna Beaches', 'Mahabalipuram']
  },
  {
    id: 'mountains',
    label: 'Mountain Escapes',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80',
    list: ['Shimla & Manali', 'Munnar Hills', 'Darjeeling Slopes', 'Ooty Gardens', 'Leh Ladakh', 'Srinagar Valley']
  },
  {
    id: 'nature',
    label: 'Nature & Forest',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
    list: ['Coorg Coffee Estates', 'Wayanad Forests', 'Araku Valley', 'Spiti Valley', 'Cherrapunji Falls', 'Athirappilly Falls']
  }
];

// Premium detailed region highlight map outlines
const REGION_MAP_SVGS = {
  north: (
    <svg className="w-16 h-16 text-[#38bdf8] mx-auto transition-transform group-hover:scale-105 duration-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M50 12 L65 24 L62 38 L55 52 L58 64 L48 70 L34 56 L36 34 L45 22 Z" fill="rgba(56,189,248,0.06)" />
      <circle cx="50" cy="34" r="3" fill="#FF0000" className="animate-ping" style={{ transformOrigin: '50px 34px' }} />
      <circle cx="50" cy="34" r="2.5" fill="#FF0000" />
    </svg>
  ),
  northEast: (
    <svg className="w-16 h-16 text-[#38bdf8] mx-auto transition-transform group-hover:scale-105 duration-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M28 46 L46 42 L55 36 L72 32 L84 45 L78 58 L62 55 L50 62 L40 52 Z" fill="rgba(56,189,248,0.06)" />
      <circle cx="64" cy="45" r="3" fill="#FF0000" className="animate-ping" style={{ transformOrigin: '64px 45px' }} />
      <circle cx="64" cy="45" r="2.5" fill="#FF0000" />
    </svg>
  ),
  east: (
    <svg className="w-16 h-16 text-[#38bdf8] mx-auto transition-transform group-hover:scale-105 duration-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M40 40 L58 38 L68 45 L74 58 L62 68 L46 62 L44 48 Z" fill="rgba(56,189,248,0.06)" />
      <circle cx="58" cy="52" r="3" fill="#FF0000" className="animate-ping" style={{ transformOrigin: '58px 52px' }} />
      <circle cx="58" cy="52" r="2.5" fill="#FF0000" />
    </svg>
  ),
  central: (
    <svg className="w-16 h-16 text-[#38bdf8] mx-auto transition-transform group-hover:scale-105 duration-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M36 48 L56 44 L66 52 L56 68 L40 66 L32 56 Z" fill="rgba(56,189,248,0.06)" />
      <circle cx="48" cy="56" r="3" fill="#FF0000" className="animate-ping" style={{ transformOrigin: '48px 56px' }} />
      <circle cx="48" cy="56" r="2.5" fill="#FF0000" />
    </svg>
  ),
  west: (
    <svg className="w-16 h-16 text-[#38bdf8] mx-auto transition-transform group-hover:scale-105 duration-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 46 L36 42 L45 52 L36 66 L26 68 L18 56 Z" fill="rgba(56,189,248,0.06)" />
      <circle cx="28" cy="54" r="3" fill="#FF0000" className="animate-ping" style={{ transformOrigin: '28px 54px' }} />
      <circle cx="28" cy="54" r="2.5" fill="#FF0000" />
    </svg>
  ),
  south: (
    <svg className="w-16 h-16 text-[#38bdf8] mx-auto transition-transform group-hover:scale-105 duration-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M35 58 L50 60 L45 82 L40 88 L34 76 Z" fill="rgba(56,189,248,0.06)" />
      <circle cx="42" cy="70" r="3" fill="#FF0000" className="animate-ping" style={{ transformOrigin: '42px 70px' }} />
      <circle cx="42" cy="70" r="2.5" fill="#FF0000" />
    </svg>
  )
};

const DestinationsExplorerPage = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [initialType] = useState(() => {
    const p = new URLSearchParams(window.location.search).get('type');
    return p && tourismCategories[p] ? p : null;
  });
  const [initialRegion] = useState(() => {
    const r = new URLSearchParams(window.location.search).get('region');
    return r && RegionsData[r] ? r : null;
  });

  // Chatbot states
  const [showNamastePrompt, setShowNamastePrompt] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'assistant', text: 'Namaste! 🙏 I am your VTC Travel Assistant. Tell me where you would like to explore!' }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Tabs states
  const [activeDirectoryTab, setActiveDirectoryTab] = useState('states');
  const [showDirectorySection, setShowDirectorySection] = useState(true);

  // Carousel states
  const [wonderIndex, setWonderIndex] = useState(0);

  // ── AUTOPLAY EFFECT FOR HERO SLIDER (5s interval) ──
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // ── AUTOPLAY EFFECT FOR WONDERS CAROUSEL (4s interval) ──
  useEffect(() => {
    const timer = setInterval(() => {
      setWonderIndex((prev) => (prev + 1) % LESSER_KNOWN_WONDERS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);


  const nextHeroSlide = () => {
    setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };
  const prevHeroSlide = () => {
    setHeroIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextWonderSlide = () => {
    setWonderIndex((prev) => (prev + 1) % LESSER_KNOWN_WONDERS.length);
  };
  const prevWonderSlide = () => {
    setWonderIndex((prev) => (prev - 1 + LESSER_KNOWN_WONDERS.length) % LESSER_KNOWN_WONDERS.length);
  };

  const scrollToAssistant = () => {
    const section = document.getElementById('booking-assistant-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput.trim();
    setChatMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');

    setTimeout(() => {
      let reply = "That sounds amazing! Scroll down to our Smart Booking Assistant to view verified tour packages for that region.";
      if (userMsg.toLowerCase().includes('manali')) {
        reply = "Manali is gorgeous! We offer details on Hadimba Temple, Solang Valley, and Rohtang Pass. Check step 4 of the Booking Assistant below to browse verified transport and resort options.";
      } else if (userMsg.toLowerCase().includes('delhi')) {
        reply = "Delhi offers great food and heritage walks! Check out the details in the Booking Assistant below.";
      }
      setChatMessages((prev) => [...prev, { sender: 'assistant', text: reply }]);
    }, 700);
  };

  return (
    <div className="bg-white min-h-screen relative overflow-x-hidden">
      
      {/* ── FIXED/FLOATING SIDE RIBBON (Rotated vertical tab) ── */}
      <div className="fixed right-0 top-[45%] -translate-y-1/2 z-40 hidden md:block select-none">
        <div 
          className="bg-[#FF0000] hover:bg-red-700 text-white font-extrabold text-[9px] tracking-widest uppercase py-3.5 px-2.5 rounded-l-md cursor-pointer transition-all duration-200 shadow-xl"
          style={{ writingMode: 'vertical-lr' }}
          onClick={scrollToAssistant}
        >
          Book Your Travel
        </div>
      </div>

      {/* ── HERO SECTION WITH FULL-BLEED SLIDER ── */}
      <section className="relative w-full h-[100vh] min-h-[600px] bg-black overflow-hidden flex flex-col justify-between">
        
        {/* Background Image Slides with Cross-Fade */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                idx === heroIndex ? 'opacity-90 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              } transform duration-[1200ms]`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          ))}
          {/* Top dark vignette & overall dimming overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75 z-10" />
        </div>

        {/* Decorative Dotted Path (Left Side Accent) */}
        <div className="absolute left-6 lg:left-12 top-1/4 bottom-1/4 w-8 flex flex-col items-center justify-between z-20 pointer-events-none select-none">
          <div className="w-px flex-1 border-l border-dashed border-white/40" />
          
          <div className="my-10 flex flex-col items-center gap-16">
            <div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center bg-black/30 backdrop-blur-xs">
              <svg className="w-4 h-4 text-white/80 animate-spin" style={{ animationDuration: '9s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center bg-black/30 backdrop-blur-xs">
              <svg className="w-4 h-4 text-white/80 animate-spin" style={{ animationDuration: '15s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>

          <div className="w-px flex-1 border-l border-dashed border-white/40" />
        </div>

        {/* Hero Headings Area (Clean Upper-Middle Alignment) */}
        <div className="w-full text-center z-20 pt-[14vh] sm:pt-[18vh] select-none">
          <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[90px] font-black uppercase tracking-wider leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] font-sans">
            Destinations
          </h1>
          <p className="text-white/95 font-medium text-lg sm:text-2xl mt-4 tracking-wide font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            for every bucket list
          </p>
        </div>

        {/* Hero Navigation Controls (Placed overlaying the bottom background stairs/view) */}
        <div className="w-full text-center z-20 pb-[10vh] flex flex-col items-center gap-4">
          
          {/* Unicode Selector row: "← Landmark →" */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 text-white text-3xl sm:text-4xl md:text-5xl font-extrabold select-none drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]">
            <button 
              onClick={prevHeroSlide} 
              className="hover:scale-110 hover:text-red-500 active:scale-90 transition-all px-3 py-1 cursor-pointer focus:outline-none"
              aria-label="Previous Slide"
            >
              ←
            </button>
            <span className="min-w-[160px] sm:min-w-[240px] text-center font-sans tracking-tight">
              {HERO_SLIDES[heroIndex].name}
            </span>
            <button 
              onClick={nextHeroSlide} 
              className="hover:scale-110 hover:text-red-500 active:scale-90 transition-all px-3 py-1 cursor-pointer focus:outline-none"
              aria-label="Next Slide"
            >
              →
            </button>
          </div>

          {/* Discover More red pill button */}
          <button
            onClick={scrollToAssistant}
            className="bg-[#FF0000] hover:bg-red-700 text-white font-extrabold text-[11px] uppercase tracking-widest px-8 py-3 rounded-full shadow-lg transform transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer mt-1"
          >
            Discover more
          </button>
        </div>

      </section>

      {/* ── REGIONAL DIRECTORY & CATEGORY NAVIGATION ── */}
      {showDirectorySection && (
        <section className="py-24 bg-white relative border-b border-slate-100 animate-fade-in">
          
          {/* Close button inside directory container */}
          <button 
            onClick={() => setShowDirectorySection(false)}
            className="absolute top-6 right-8 text-gray-400 hover:text-[#FF0000] transition-colors p-2 rounded-full hover:bg-slate-100 cursor-pointer z-10"
            aria-label="Hide Directory"
            title="Hide Section"
          >
            <IoCloseOutline className="w-6 h-6" />
          </button>

          <div className="max-w-[1200px] mx-auto px-6">
            
            {/* Main Tabs Header */}
            <div className="flex justify-center gap-8 md:gap-12 border-b border-gray-150 pb-4 mb-16 max-w-sm mx-auto">
              {[
                { id: 'states', label: 'States and UTs' },
                { id: 'destinations', label: 'Destinations' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDirectoryTab(tab.id)}
                  className={`text-xs sm:text-sm font-black uppercase tracking-wider pb-3 relative transition-colors cursor-pointer ${
                    activeDirectoryTab === tab.id 
                      ? 'text-[#FF0000]' 
                      : 'text-gray-dark hover:text-red-500'
                  }`}
                >
                  {tab.label}
                  {activeDirectoryTab === tab.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF0000] rounded-full animate-scale-in" />
                  )}
                </button>
              ))}
            </div>

            {/* TAB 1: States and UTs Grid (Whitespace-based directory matching screenshot Image 2) */}
            {activeDirectoryTab === 'states' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6 anim-fade-in">
                {Object.keys(RegionsData).map((regionKey) => {
                  const region = RegionsData[regionKey];
                  return (
                    <div key={regionKey} className="flex flex-col items-center text-center">
                      
                      {/* SVG Map Illustration Icon outline */}
                      <div className="h-16 w-full flex items-center justify-center p-2 mb-2">
                        {REGION_MAP_SVGS[regionKey] || REGION_MAP_SVGS.north}
                      </div>

                      <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#38bdf8] mb-4">
                        {region.label}
                      </h4>

                      <ul className="flex flex-col gap-2.5 w-full">
                        {region.states.map((state) => (
                          <li key={state}>
                            <button
                              onClick={scrollToAssistant}
                              className="text-[13px] font-semibold text-gray-mid hover:text-[#FF0000] hover:translate-x-0.5 transition-all duration-150 py-0.5 block w-full text-center cursor-pointer"
                            >
                              {state}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}

            {/* TAB 2: Popular Destinations Visual Cards */}
            {activeDirectoryTab === 'destinations' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 anim-fade-in">
                {PopularDestinations.map((category) => (
                  <div key={category.id} className="relative rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:border-slate-300 bg-white flex flex-col justify-between h-[360px] group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    {/* Header Image Header */}
                    <div className="relative h-24 overflow-hidden">
                      <img src={category.image} alt={category.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/45" />
                      <h4 className="absolute bottom-3 left-4 text-white text-base font-black tracking-wide uppercase">
                        {category.label}
                      </h4>
                    </div>

                    {/* Destination List Body */}
                    <div className="p-5 flex-grow flex flex-col justify-start">
                      <ul className="flex flex-col gap-2">
                        {category.list.map((dest) => (
                          <li key={dest} className="group/dest">
                            <button
                              onClick={scrollToAssistant}
                              className="text-xs font-semibold text-gray-mid hover:text-[#FF0000] flex items-center gap-1.5 transition-colors text-left cursor-pointer hover:translate-x-1"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/dest:bg-[#FF0000] transition-colors" />
                              {dest}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>
      )}

      {/* Toggle directory button if hidden */}
      {!showDirectorySection && (
        <div className="py-8 text-center bg-slate-50 border-b border-slate-100 animate-fade-in">
          <button 
            onClick={() => setShowDirectorySection(true)} 
            className="text-xs font-bold uppercase tracking-widest text-[#FF0000] border-2 border-[#FF0000] px-6 py-2.5 rounded-full hover:bg-[#FF0000] hover:text-white transition-all cursor-pointer"
          >
            Show Regions & States Directory
          </button>
        </div>
      )}

      {/* ── LESSER KNOWN WONDERS 3D CAROUSEL SECTION ── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center min-h-[680px]">
        
        {/* Layered titles */}
        <div className="text-center mb-10 z-10 w-full px-4 relative select-none">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
            —— Uncover India's ——
          </span>
          {/* Large background typography behind */}
          <h2 className="text-slate-200/50 text-4xl sm:text-6xl md:text-8xl lg:text-[100px] tracking-widest font-black uppercase text-center absolute left-0 right-0 transform -translate-y-4 md:-translate-y-6 z-0">
            Lesser Known
          </h2>
          <h2 className="text-2xl md:text-4xl font-black text-gray-dark relative z-10 mt-10 md:mt-14 uppercase tracking-wider">
            Wonders
          </h2>
        </div>

        {/* 3D Stack Carousel Container with Absolutely Positioned Cards */}
        <div className="relative w-full max-w-[1100px] h-[320px] sm:h-[400px] md:h-[460px] flex items-center justify-center my-6 z-10 overflow-visible mx-auto">
          {LESSER_KNOWN_WONDERS.map((wonder, idx) => {
            const isActive = idx === wonderIndex;
            const isPrev = idx === (wonderIndex - 1 + LESSER_KNOWN_WONDERS.length) % LESSER_KNOWN_WONDERS.length;
            const isNext = idx === (wonderIndex + 1) % LESSER_KNOWN_WONDERS.length;

            let slideClass = "opacity-0 scale-75 pointer-events-none z-0";
            if (isActive) {
              slideClass = "opacity-100 z-30 scale-100 shadow-2xl left-1/2 -translate-x-1/2 absolute top-1/2 -translate-y-1/2";
            } else if (isPrev) {
              slideClass = "opacity-35 z-10 scale-80 left-0 -translate-x-[48%] sm:-translate-x-[36%] blur-[2px] cursor-pointer pointer-events-auto absolute top-1/2 -translate-y-1/2";
            } else if (isNext) {
              slideClass = "opacity-35 z-10 scale-80 right-0 translate-x-[48%] sm:translate-x-[36%] blur-[2px] cursor-pointer pointer-events-auto absolute top-1/2 -translate-y-1/2";
            }

            return (
              <div
                key={wonder.id}
                onClick={() => {
                  if (isPrev) prevWonderSlide();
                  if (isNext) nextWonderSlide();
                }}
                className={`w-[85%] sm:w-[500px] md:w-[650px] h-[240px] sm:h-[300px] md:h-[390px] rounded-3xl overflow-hidden transition-all duration-500 ease-out select-none border border-slate-200/20 ${slideClass}`}
              >
                {/* Image */}
                <img
                  src={wonder.image}
                  alt={wonder.name}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable="false"
                />
                
                {/* Vignette gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-5 md:p-8" />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 text-white z-10 flex flex-col gap-1 md:gap-2">
                  
                  <h3 className="text-[#F59E0B] text-2xl sm:text-3xl md:text-5xl font-black tracking-tight font-sans">
                    {wonder.name}
                  </h3>

                  <p className="text-white text-xs sm:text-sm font-semibold opacity-95">
                    {wonder.subtitle}
                  </p>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10 w-full">
                    <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-white/85 font-semibold uppercase tracking-widest">
                      <IoLocationSharp className="w-3.5 h-3.5 text-[#FF0000]" />
                      <span>{wonder.state}</span>
                    </div>
                    <span className="text-[10px] text-white/50 hidden sm:inline uppercase tracking-widest font-bold">Uncover more &rarr;</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel buttons */}
        <div className="flex flex-col items-center gap-5 mt-4 z-10">
          <div className="flex items-center gap-6">
            <button
              onClick={prevWonderSlide}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-dark flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all duration-200 shadow-sm cursor-pointer hover:scale-105 active:scale-95 focus:outline-none"
              aria-label="Previous Wonder"
            >
              ←
            </button>
            <button
              onClick={nextWonderSlide}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-dark flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all duration-200 shadow-sm cursor-pointer hover:scale-105 active:scale-95 focus:outline-none"
              aria-label="Next Wonder"
            >
              →
            </button>
          </div>

          <button
            onClick={scrollToAssistant}
            className="bg-[#FF0000] hover:bg-red-700 text-white font-extrabold px-8 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-md transform transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Discover more
          </button>
        </div>

        {/* Watercolor organic wavy transition mask overlay at bottom */}
        <div className="w-full absolute bottom-0 left-0 right-0 z-20 pointer-events-none -mb-1">
          <svg className="w-full h-16 fill-white" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,0 Q180,80 360,50 T720,60 T1080,40 T1440,70 L1440,100 L0,100 Z"></path>
          </svg>
        </div>

      </section>

      {/* ── SMART BOOKING ASSISTANT INTEGRATION ── */}
      <section id="booking-assistant-section" className="py-24 bg-white relative scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">Verify & Book Stays</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-dark mt-1">
              Smart Booking Assistant
            </h2>
            <div className="section-divider mx-auto mb-4" />
            <p className="text-sm text-gray-mid max-w-xl mx-auto">
              Follow our smart 5-step checklist to search tourism interest, review verified local guides & resorts, and book directly.
            </p>
          </div>

          {/* Stepper indicator legend */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-4xl mx-auto">
            {[
              { n: '01', label: 'Interest' },
              { n: '02', label: 'State' },
              { n: '03', label: 'Offerings' },
              { n: '04', label: 'Providers' },
              { n: '05', label: 'Confirm' }
            ].map(({ n, label }) => (
              <div key={n} className="flex items-center gap-2 bg-slate-50 border border-gray-100 rounded-full px-4 py-2 shadow-sm">
                <span className="w-5 h-5 rounded-full bg-secondary text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">{n}</span>
                <span className="text-[11px] font-semibold text-gray-dark">{label}</span>
              </div>
            ))}
          </div>

          {/* Assistant UI Wrapper */}
          <div className="card p-6 md:p-8 bg-[#f8fafc] border border-slate-200/70 shadow-sm rounded-3xl">
            <SmartBookingAssistant initialType={initialType} initialRegion={initialRegion} />
          </div>
        </div>
      </section>

      {/* ── FLOATING NAMASTE CHATBOT WIDGET (Bottom Right) ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* The prompt bubble */}
        {showNamastePrompt && !chatOpen && (
          <div className="bg-white border border-gray-150 shadow-xl rounded-2xl p-3 mb-3 mr-1 relative animate-bounce max-w-[240px] text-right flex flex-col items-end">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowNamastePrompt(false);
              }}
              className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center text-xs shadow-sm border border-gray-200 cursor-pointer"
              aria-label="Close bubble"
            >
              <IoCloseOutline className="w-3.5 h-3.5" />
            </button>
            <p className="text-[11px] font-medium text-gray-dark leading-tight text-left">
              Namaste 🙏 how can I guide you?
            </p>
          </div>
        )}

        {/* Circular Avatar Trigger Button */}
        <button
          onClick={() => {
            setChatOpen(!chatOpen);
            setShowNamastePrompt(false);
          }}
          className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
            chatOpen ? 'bg-gray-dark text-white' : 'bg-[#FF0000] hover:bg-red-700 text-white'
          }`}
          aria-label="Open VTC Assistant Chat"
        >
          {chatOpen ? (
            <IoCloseOutline className="w-7 h-7" />
          ) : (
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&fit=crop&crop=faces" 
                alt="Assistant Avatar"
                className="w-12 h-12 rounded-full object-cover border border-white/20"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            </div>
          )}
        </button>

        {/* Chat Panel Popout */}
        {chatOpen && (
          <div className="absolute bottom-16 right-0 w-[320px] sm:w-[360px] h-[450px] bg-white border border-gray-150 shadow-2xl rounded-3xl overflow-hidden flex flex-col z-50 animate-scale-in">
            {/* Chat Header */}
            <div className="bg-primary-dark text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&fit=crop&crop=faces" 
                  alt="Assistant Avatar"
                  className="w-9 h-9 rounded-full object-cover border border-white/30"
                />
                <div>
                  <h4 className="text-xs font-bold leading-none text-white">VTC Guide</h4>
                  <span className="text-[10px] text-green-400 font-semibold flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" /> Online
                  </span>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg text-white/80 transition-colors cursor-pointer"
              >
                <IoCloseOutline className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-slate-50/50">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-[#FF0000] text-white rounded-br-none'
                        : 'bg-white text-gray-dark border border-gray-100 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input Field */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-100 p-3 flex gap-2 bg-white">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about states or locations..."
                className="flex-grow px-4 py-2 bg-slate-100 rounded-full text-xs text-gray-dark focus:outline-none focus:ring-1 focus:ring-red-500 border border-transparent focus:bg-white"
              />
              <button
                type="submit"
                className="bg-[#FF0000] hover:bg-red-700 text-white text-[11px] font-bold px-4 py-2 rounded-full shadow-sm transition-all cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>

    </div>
  );
};

export default DestinationsExplorerPage;
