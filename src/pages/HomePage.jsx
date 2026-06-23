import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  IoAnalyticsOutline, IoPeopleOutline, IoBriefcaseOutline, IoAirplaneOutline,
  IoArrowForwardOutline, IoLeafOutline, IoHeartOutline, IoTelescopeOutline,
  IoRestaurantOutline, IoFlameOutline, IoCompassOutline,
  IoSchoolOutline, IoSparklesOutline,
} from 'react-icons/io5';
import { tourismCategories } from '../data/tourismData';

/* ─── Scroll reveal ─── */
const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io  = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.07 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
};

/* ─── Animated counter ─── */
const useCounter = (target, duration = 1400) => {
  const [count, setCount] = useState(0);
  const ref     = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const end  = parseFloat(target);
        const step = end / (duration / 16);
        let cur = 0;
        const t = setInterval(() => {
          cur += step;
          if (cur >= end) { setCount(end); clearInterval(t); }
          else setCount(Math.floor(cur));
        }, 16);
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return { count, ref };
};

/* ─── Section heading ─── */
const SH = ({ eyebrow, title, body, light = false, center = true }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    {eyebrow && (
      <span className={`inline-block text-[10.5px] font-extrabold uppercase tracking-[0.2em] mb-3.5 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100/50 ${light ? 'text-amber-300 bg-white/10 border-white/10' : 'text-[#2563EB]'}`}>
        {eyebrow}
      </span>
    )}
    <h2 className={`text-3.5xl md:text-4.5xl font-black leading-tight tracking-tight uppercase ${light ? 'text-white' : 'text-gray-dark'}`}>
      {title}
    </h2>
    <div className={`h-0.5 w-10 rounded-full mt-4 ${center ? 'mx-auto' : ''} ${light ? 'bg-amber-400' : 'bg-accent'}`} />
    {body && (
      <p className={`mt-5 text-[14.5px] leading-relaxed max-w-2xl font-medium ${center ? 'mx-auto' : ''} ${light ? 'text-white/75' : 'text-gray-mid'}`}>
        {body}
      </p>
    )}
  </div>
);

/* ─── Stat card ─── */
const StatCard = ({ value, suffix, label, Icon }) => {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="card p-7 text-center group bg-white border border-slate-100 hover:border-blue-100/70 relative overflow-hidden">
      <div className="icon-box mx-auto mb-5 group-hover:bg-[#2563EB] group-hover:text-white group-hover:scale-110 group-hover:shadow-md transition-all duration-250">
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-3xl font-extrabold text-gray-dark mb-1 font-sans">{count}{suffix}</div>
      <div className="text-[10px] text-gray-mid font-extrabold uppercase tracking-widest">{label}</div>
      <div className="absolute top-0 inset-x-0 h-1 bg-[#2563EB] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </div>
  );
};

/* ─── Experience scroll card ─── */
const ExpCard = ({ image, title, tag, Icon, href }) => (
  <Link to={href}
    className="img-card group flex-shrink-0 relative rounded-3xl overflow-hidden shadow-md border border-slate-150/50"
    style={{ width: '270px', height: '350px' }}>
    <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    <div className="img-card-overlay bg-gradient-to-t from-black/85 via-black/35 to-transparent absolute inset-0 transition-opacity group-hover:opacity-90" />
    <div className="absolute top-4 left-4 z-10">
      <span className="exp-tag bg-black/45 backdrop-blur-md border border-white/10 px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider rounded-full text-white inline-flex items-center gap-1.5">
        <Icon className="w-3.5 h-3.5 text-accent" />{tag}
      </span>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
      <h3 className="text-white font-extrabold text-[18px] leading-snug mb-3 tracking-wide drop-shadow-sm">{title}</h3>
      <div className="flex items-center gap-1 text-white/70 text-[11px] font-extrabold uppercase tracking-widest group-hover:text-white group-hover:gap-2.5 transition-all duration-200">
        Discover <IoArrowForwardOutline className="w-3.5 h-3.5" />
      </div>
    </div>
  </Link>
);

/* ─── Gallery image ─── */
const GalleryImg = ({ src, alt, tall = false }) => (
  <div className={`img-card shadow-md rounded-3xl overflow-hidden border border-slate-100 relative group cursor-pointer ${tall ? 'tall' : ''}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    <div className="img-card-overlay bg-gradient-to-t from-black/80 via-transparent to-transparent absolute inset-0 opacity-40 group-hover:opacity-85 transition-opacity duration-300" />
    <div className="absolute bottom-4 left-4 z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
      <span className="text-white text-xs font-black uppercase tracking-widest bg-[#2563EB] px-3.5 py-1.5 rounded-xl border border-white/10 shadow-md inline-block">
        {alt}
      </span>
    </div>
  </div>
);

/* ─── Action Planner Widget (Direct value on home page) ─── */
const ActionPlannerWidget = () => {
  const [interest, setInterest] = useState('');
  const [region, setRegion] = useState('');

  const handleLaunch = () => {
    if (!interest) {
      alert('Please select a travel interest to continue!');
      return;
    }
    let url = `/destination?type=${interest}`;
    if (region) {
      url += `&region=${region}`;
    }
    url += `#booking-assistant-section`;
    window.location.href = url;
  };

  return (
    <div className="w-full max-w-4xl bg-white border border-slate-200/80 rounded-[2rem] p-6 sm:p-8 shadow-2xl relative -mt-16 z-30 select-none animate-fade-in mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 items-stretch lg:items-center">
        {/* Category selector */}
        <div className="flex-1 min-w-0">
          <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-mid mb-2">What is your travel interest?</label>
          <div className="relative">
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-4 text-xs font-bold text-gray-dark focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white appearance-none cursor-pointer"
            >
              <option value="">Select interest...</option>
              {Object.values(tourismCategories).map(cat => (
                <option key={cat.id} value={cat.id}>{cat.title}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-mid text-xs">▼</div>
          </div>
        </div>

        {/* Region selector */}
        <div className="flex-1 min-w-0">
          <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-mid mb-2">Preferred Region</label>
          <div className="relative">
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-4 text-xs font-bold text-gray-dark focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white appearance-none cursor-pointer"
            >
              <option value="">Any Region</option>
              <option value="north">North India</option>
              <option value="south">South India</option>
              <option value="west">West India</option>
              <option value="central">Central India</option>
              <option value="east">East India</option>
              <option value="northEast">North East India</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-mid text-xs">▼</div>
          </div>
        </div>

        {/* Launch button */}
        <div className="flex items-end pt-2 lg:pt-0">
          <button
            onClick={handleLaunch}
            className="w-full lg:w-auto bg-[#FF0000] hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-widest py-4 px-8 rounded-2xl shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
          >
            Launch Planner <IoArrowForwardOutline className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ─── Static Data ─── */
const HOME_HERO_SLIDES = [
  {
    id: 'tajmahal',
    name: 'Taj Mahal',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1920&q=80',
    tagline: 'Delivering standard-vetted local guides and seamless planner access.',
  },
  {
    id: 'kerala',
    name: 'Kerala Backwaters',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=80',
    tagline: 'Connecting you with verified heritage and wellness providers directly.',
  },
  {
    id: 'jaipur',
    name: 'Jaipur Palaces',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1920&q=80',
    tagline: 'Subsidizing hospitality and tour certifications across the network.',
  },
  {
    id: 'ladakh',
    name: 'Ladakh Peaks',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
    tagline: 'Shining tourist spotlight on offbeat regional economies.',
  }
];

const STAKEHOLDER_VAL_PROPS = [
  {
    id: 'learners',
    eyebrow: 'For Career Seekers',
    title: 'Subsidized Skills & Careers',
    icon: IoSchoolOutline,
    points: [
      { bold: 'Subsidized Skill Courses', normal: 'Hospitality, culinary, and guiding certificates aligned with national boards.' },
      { bold: 'Prior Skill Recognition (RPL)', normal: 'Formalize on-the-job experience to boost job mobility and wages.' },
      { bold: 'Direct Partner Placements', normal: 'Instant hiring pipelines to top hotels, resorts, and tour operators.' }
    ],
    ctaText: 'Browse Course Paths',
    ctaLink: '/education'
  },
  {
    id: 'businesses',
    eyebrow: 'For Tourism Businesses',
    title: 'MSME Growth & Visibility',
    icon: IoBriefcaseOutline,
    points: [
      { bold: 'Verified Planner Placement', normal: 'Receive direct, commission-free traveler leads from our Smart Assistant.' },
      { bold: 'VTC Compliance Badge', normal: 'Gain certified status, boosting guest confidence and booking conversions.' },
      { bold: 'Capacity Scaling Modules', normal: 'Improve service quality with digital-readiness and operations courses.' }
    ],
    ctaText: 'Partner With Us',
    ctaLink: '/membership'
  },
  {
    id: 'travelers',
    eyebrow: 'For VTC Travelers',
    title: 'Guaranteed Unmatched Trips',
    icon: IoCompassOutline,
    points: [
      { bold: 'Pre-Vetted Local Stays', normal: 'Browse resorts and services vetted for quality, hygiene, and standards.' },
      { bold: 'Sustainable Offbeat Routes', normal: 'Hand-curated local routes promoting regional heritage and economies.' },
      { bold: 'Guided Planners & Assistant', normal: 'Build your travel roadmap via step-by-step tools and our chatbot widget.' }
    ],
    ctaText: 'Plan Your Journey',
    ctaLink: '/destination'
  }
];

const DELIVERABLES_DATA = {
  skills: {
    label: 'Certified Skills',
    title: 'Subsidized training pathways for the workforce',
    description: 'We develop industry-approved, structured certifications across hospitality, wellness (AYUSH), and adventure domains to turn career-seekers into certified professionals.',
    bullets: [
      'Over 13+ specialized certified learning pathways',
      'Curriculums aligned with industry standard requirements',
      'Integration with hospitality business placement boards',
      'Dedicated wellness & AYUSH tourist specialist tracks'
    ],
    ctaText: 'Browse Courses',
    ctaLink: '/education',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
  },
  planner: {
    label: 'Smart Planners',
    title: 'Interactive direct-booking travel tools',
    description: 'We bring direct value to both travelers and providers via our 5-step Smart Booking Assistant. It matches travelers with the exact type of tourism experiences they seek.',
    bullets: [
      'Step-by-step traveler-to-provider routing workflow',
      'Direct comparison table for up to 3 local providers side-by-side',
      'Completely transparent and commission-free provider contact details',
      'Pre-vetted rating and accommodation verification tags'
    ],
    ctaText: 'Try Travel Planner',
    ctaLink: '/destination#booking-assistant-section',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80'
  },
  rural: {
    label: 'Offbeat Exploration',
    title: 'Driving revenues to rural economies',
    description: 'VTC actively promotes Lesser Known Wonders (such as Reiek, Gandikota, and Majuli Island). We structure their capacity and expose them directly to the traveler network.',
    bullets: [
      'Sustainable destination management frameworks',
      'Empowering local indigenous guides and homestays',
      'Spreading travel spending beyond saturated tourist hubs',
      'Interactive 3D stacks and guides for regional offbeat routes'
    ],
    ctaText: 'Discover Offbeat India',
    ctaLink: '/destination',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80'
  }
};

const SUCCESS_STORIES = [
  {
    id: 1,
    name: 'Aditya Rao',
    role: 'Certified Nature Guide, Munnar',
    text: 'Before VTC, I worked as an informal guide. The VTC Tour Guide Certification gave me formal training and a verified badge. Now my bookings have doubled!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=faces',
  },
  {
    id: 2,
    name: 'Kavita Devi',
    role: 'Founder of Heritage Homestay, Jaipur',
    text: 'Integrating our boutique homestay with the VTC Smart Booking Assistant connected us to premium travelers looking for authentic experiences.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=faces',
  },
  {
    id: 3,
    name: 'Rajesh Nair',
    role: 'Director, Horizon Hotel Institute',
    text: "VTC's capacity building curriculum has allowed us to train and place over 450 hospitality students in verified careers this year.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces',
  }
];

/* ─── Main Component ─── */
const HomePage = () => {
  useReveal();
  const [heroIndex, setHeroIndex] = useState(0);
  const [deliverableTab, setDeliverableTab] = useState('skills');

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HOME_HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextHeroSlide = () => {
    setHeroIndex((prev) => (prev + 1) % HOME_HERO_SLIDES.length);
  };
  const prevHeroSlide = () => {
    setHeroIndex((prev) => (prev - 1 + HOME_HERO_SLIDES.length) % HOME_HERO_SLIDES.length);
  };

  const experiences = [
    { image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=800&fit=crop', title: 'Royal Rajasthan', tag: 'Heritage', Icon: IoTelescopeOutline, href: '/destination?type=heritage' },
    { image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=800&fit=crop', title: 'Kerala Backwaters', tag: 'Leisure', Icon: IoLeafOutline, href: '/destination?type=leisure' },
    { image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=600&h=800&fit=crop', title: 'Wildlife Safari', tag: 'Wildlife', Icon: IoCompassOutline, href: '/destination?type=wildlife' },
    { image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=800&fit=crop', title: 'Wellness Retreats', tag: 'Wellness', Icon: IoHeartOutline, href: '/destination?type=wellness' },
    { image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=800&fit=crop', title: 'Culinary Trails', tag: 'Food', Icon: IoRestaurantOutline, href: '/destination?type=culinary' },
    { image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=800&fit=crop', title: 'Spiritual Journeys', tag: 'Spiritual', Icon: IoFlameOutline, href: '/destination?type=spiritual' },
  ];

  const galleryItems = [
    { src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=800&fit=crop', alt: 'Taj Mahal', tall: true },
    { src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop', alt: 'Rajasthan Festival' },
    { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop', alt: 'Goa Beaches' },
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop', alt: 'Himalayan Peaks', tall: true },
    { src: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop', alt: 'Kerala Backwaters' },
    { src: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=600&h=400&fit=crop', alt: 'Wildlife Safari' },
  ];

  const activeDeliverable = DELIVERABLES_DATA[deliverableTab];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── HERO SECTION WITH FULL-BLEED SLIDER (Value Delivery Centric) ── */}
      <section className="relative w-full min-h-[85vh] bg-black overflow-hidden flex items-center justify-center pt-28 pb-28 px-4 sm:px-6 lg:px-8">
        
        {/* Background Image Slides with Cross-Fade */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          {HOME_HERO_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                idx === heroIndex ? 'opacity-95 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              } transform duration-[1200ms]`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          ))}
          {/* Top/bottom dark vignette & overall dimming overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black/85 z-10" />
        </div>

        {/* Decorative Dotted Path (Left Side Accent) */}
        <div className="absolute left-6 lg:left-12 top-1/4 bottom-1/4 w-8 flex flex-col items-center justify-between z-20 pointer-events-none select-none">
          <div className="w-px flex-1 border-l border-dashed border-white/30" />
          <div className="my-10 flex flex-col items-center gap-16">
            <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center bg-black/30 backdrop-blur-xs">
              <svg className="w-4 h-4 text-white/70 animate-spin" style={{ animationDuration: '9s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center bg-black/30 backdrop-blur-xs">
              <svg className="w-4 h-4 text-white/70 animate-spin" style={{ animationDuration: '15s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div className="w-px flex-1 border-l border-dashed border-white/30" />
        </div>

        {/* Central Content Box (Perfect alignment & spacing) */}
        <div className="relative z-20 max-w-4xl w-full text-center flex flex-col items-center justify-center select-none px-4">
          
          {/* Badge */}
          <span className="inline-block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.25em] text-amber-300 mb-4 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/15 animate-fade-in shadow-lg">
            Value Delivery Ecosystem
          </span>

          {/* Title */}
          <h1 
            className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-black uppercase tracking-wider leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] font-sans animate-fade-up"
            style={{ textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}
          >
            Empowering Careers.<br />Scaling Businesses.<br />Transforming Tourism.
          </h1>

          {/* Description */}
          <p className="text-white/85 font-medium text-xs sm:text-sm md:text-[15px] mt-4 tracking-wide font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] max-w-2xl mx-auto leading-relaxed animate-fade-up anim-delay-1">
            Vibrant Tourism Council delivers standardized certifications, direct traveler booking tools, and sustainable regional promotion to power India's tourism sector.
          </p>

          {/* Slider controls row */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 text-white text-2xl sm:text-3xl md:text-4xl font-extrabold select-none drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)] mt-5 animate-fade-up anim-delay-2">
            <button 
              onClick={prevHeroSlide} 
              className="hover:scale-115 hover:text-[#FF0000] active:scale-95 transition-all px-3 py-1 cursor-pointer focus:outline-none"
              aria-label="Previous Slide"
            >
              ←
            </button>
            <span className="min-w-[180px] sm:min-w-[280px] text-center font-sans tracking-tight text-lg sm:text-xl md:text-xl font-black uppercase text-amber-300">
              {HOME_HERO_SLIDES[heroIndex].name}
            </span>
            <button 
              onClick={nextHeroSlide} 
              className="hover:scale-115 hover:text-[#FF0000] active:scale-95 transition-all px-3 py-1 cursor-pointer focus:outline-none"
              aria-label="Next Slide"
            >
              →
            </button>
          </div>

          {/* Tagline */}
          <p className="text-white/80 font-bold text-xs sm:text-sm tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] max-w-lg mx-auto mt-2 min-h-[20px] animate-fade-up anim-delay-2">
            {HOME_HERO_SLIDES[heroIndex].tagline}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-5 animate-fade-up anim-delay-3">
            <Link to="/destination" className="btn-primary hover:bg-red-700 bg-[#FF0000] text-white border-none py-3.5 px-8 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0">
              Explore Destinations <IoArrowForwardOutline className="w-4 h-4 ml-1.5 inline-block" />
            </Link>
            <Link to="/membership" className="btn-outline border-white text-white hover:bg-white hover:text-black py-3.5 px-8 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 bg-transparent">
              Partner With VTC
            </Link>
          </div>

          {/* Stats Overlay Bar */}
          <div className="mt-6 inline-flex flex-wrap justify-center animate-fade-up anim-delay-4
            divide-x divide-white/15 bg-white/10 backdrop-blur-md
            border border-white/15 rounded-2xl overflow-hidden shadow-2xl max-w-xl mx-auto">
            {[
              { value: '500+ Partners', label: 'Active Network' },
              { value: '40M+ Workforce', label: 'Impacted Sector' },
              { value: '13+ Domains',    label: 'Certified Pathways' },
            ].map((s, i) => (
              <div key={i} className="px-6 py-3.5 text-center hover:bg-white/5 transition-colors duration-200">
                <div className="text-base md:text-lg font-black text-white leading-none">{s.value}</div>
                <div className="text-[9px] font-extrabold text-white/60 uppercase tracking-widest mt-1.5">{s.label}</div>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* ── 2. INSTANT ACTION PLANNER WIDGET ── */}
      <section className="relative px-4 sm:px-6 lg:px-8 z-30">
        <ActionPlannerWidget />
      </section>

      {/* ── 3. STAKEHOLDER VALUE MATRIX ("What We Bring to the Table") ── */}
      <section className="py-28 bg-white relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SH eyebrow="Ecosystem Value" title="What We Bring to the Table" body="We deliver structural value, certified training, and direct business channels to empower every stakeholder in India's hospitality and travel system." />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {STAKEHOLDER_VAL_PROPS.map((prop, i) => {
              const IconComponent = prop.icon;
              return (
                <div key={prop.id} className={`reveal reveal-delay-${i + 1} bg-slate-50/50 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between hover:border-blue-100 hover:bg-blue-50/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg`}>
                  <div>
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#2563EB] block mb-2">{prop.eyebrow}</span>
                    <h3 className="text-xl font-extrabold text-gray-dark leading-snug mb-6">{prop.title}</h3>
                    
                    <ul className="space-y-4 mb-8">
                      {prop.points.map((pt, pi) => (
                        <li key={pi} className="text-[13.5px] leading-relaxed text-gray-mid flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] flex-shrink-0 mt-2" />
                          <span>
                            <strong className="text-gray-dark font-extrabold">{pt.bold}:</strong> {pt.normal}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to={prop.ctaLink} className="w-full text-center bg-white border border-slate-200 text-gray-dark font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-2xl hover:border-secondary hover:text-secondary hover:bg-blue-50/30 transition-all duration-200 block">
                    {prop.ctaText} &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. CORE DELIVERABLES SHOWCASE (Interactive Tabs) ── */}
      <section className="py-24 bg-slate-50 relative border-t border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SH eyebrow="Ecosystem Assets" title="Our Tangible Deliverables" body="Interactive services, qualifications, and distribution models that create verified value daily." />
          </div>

          {/* Interactive tab selector */}
          <div className="flex justify-center gap-3 md:gap-5 mb-14 max-w-lg mx-auto flex-wrap reveal">
            {Object.entries(DELIVERABLES_DATA).map(([key, item]) => (
              <button
                key={key}
                onClick={() => setDeliverableTab(key)}
                className={`px-5 py-3 text-xs font-bold uppercase tracking-wider rounded-2xl border transition-all duration-250 cursor-pointer ${
                  deliverableTab === key
                    ? 'bg-secondary text-white border-secondary shadow-md shadow-blue-100'
                    : 'bg-white text-gray-mid border-gray-200 hover:border-secondary hover:text-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Tab content split layout */}
          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-xl reveal">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Left Column: Description & Bullet details */}
              <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#2563EB] mb-3.5 bg-blue-50 px-3 py-1 rounded-full border border-blue-100/50 inline-block self-start">
                  VTC Deliverable
                </span>
                
                <h3 className="text-2xl sm:text-3.5xl font-black text-gray-dark leading-tight uppercase mb-5">
                  {activeDeliverable.title}
                </h3>
                
                <p className="text-[14.5px] text-gray-mid leading-relaxed mb-6 font-medium">
                  {activeDeliverable.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {activeDeliverable.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[13px] font-semibold text-gray-dark">
                      <IoSparklesOutline className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link to={activeDeliverable.ctaLink} className="btn-primary hover:bg-[#1d4ed8] bg-[#2563EB] text-white border-none py-3.5 px-8 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-md transition-all inline-flex items-center gap-2 self-start">
                  {activeDeliverable.ctaText} <IoArrowForwardOutline className="w-4 h-4" />
                </Link>
              </div>

              {/* Right Column: Dynamic zoomable cover image */}
              <div className="lg:col-span-5 relative h-[320px] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                <img
                  key={deliverableTab}
                  src={activeDeliverable.image}
                  alt={activeDeliverable.label}
                  className="w-full h-full object-cover transition-transform duration-[600ms] scale-100 hover:scale-105 animate-scale-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 5. TOURISM EXPERIENCES — Curved horizontal strip ── */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal">
            <SH eyebrow="Experiential Pathways" title="Signature Experiences" center={false} />
            <Link to="/destination" className="inline-flex items-center gap-2 text-[12px] font-extrabold text-[#2563EB] hover:text-[#1d4ed8] uppercase tracking-wider transition-colors mb-12">
              Browse Experiences <IoArrowForwardOutline className="w-4 h-4" />
            </Link>
          </div>
          <div className="h-scroll-strip reveal">
            {experiences.map((exp, i) => (
              <ExpCard key={i} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. IMPACT DASHBOARD (Stats counters) ── */}
      <section className="py-24 bg-[#f8fafc] relative overflow-hidden border-t border-b border-slate-100">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none bg-[radial-gradient(#0A2540_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="reveal">
            <SH eyebrow="Measurable Impact" title="Delivering Value at Scale" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '9.5',  suffix: '%',  label: 'GDP Contribution',  Icon: IoAnalyticsOutline },
              { value: '46',   suffix: 'M+', label: 'Employment Created', Icon: IoPeopleOutline    },
              { value: '75',   suffix: '%',  label: 'MSME Support',       Icon: IoBriefcaseOutline },
              { value: '12',   suffix: 'M+', label: 'Annual travelers',   Icon: IoAirplaneOutline  },
            ].map((s, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`}>
                <StatCard {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. ECOSYSTEM SUCCESS STORIES (Replaces Governing Council) ── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SH eyebrow="Real Outcomes" title="Ecosystem Success Stories" body="See how we have delivered career empowerment, business growth, and travel confidence to real people." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SUCCESS_STORIES.map((story, i) => (
              <div key={story.id} className={`reveal reveal-delay-${i + 1} bg-white border border-slate-150 rounded-3xl p-6 relative flex flex-col justify-between hover:shadow-xl hover:border-slate-350 transition-all duration-300`}>
                
                {/* Profile row */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-14 h-14 rounded-full object-cover border border-slate-100 shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-black text-gray-dark leading-tight">{story.name}</h4>
                    <span className="text-[10.5px] text-[#2563EB] font-bold uppercase tracking-wider block mt-1">{story.role}</span>
                  </div>
                </div>

                {/* Testimonial body */}
                <p className="text-[13.5px] leading-relaxed text-gray-mid font-medium italic mb-6">
                  "{story.text}"
                </p>

                {/* Badge verification row */}
                <div className="flex items-center gap-1.5 border-t border-slate-100 pt-4 text-[10px] uppercase font-bold tracking-wider text-green-600">
                  <IoSparklesOutline className="w-3.5 h-3.5" />
                  <span>VTC Vetted Outcome</span>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. GALLERY — Masonry-style Grid ── */}
      <section className="py-24 bg-[#f8fafc] border-t border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal">
            <SH eyebrow="Visual India" title="A Glimpse of the Journey" center={false} />
            <Link to="/media" className="inline-flex items-center gap-2 text-[12px] font-extrabold text-[#2563EB] hover:text-[#1d4ed8] uppercase tracking-wider transition-colors mb-12">
              View Gallery <IoArrowForwardOutline className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="gallery-grid reveal">
            {galleryItems.map((g, i) => (
              <GalleryImg key={i} src={g.src} alt={g.alt} tall={g.tall} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CTA BAND — Full-width Cinematic Video Background ── */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
            src="https://assets.mixkit.co/videos/43150/43150-720.mp4"
            poster="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=700&fit=crop"
          />
        </div>
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0A2540]/92 via-[#0A2540]/78 to-[#0A2540]/92" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 sm:p-14 shadow-2xl relative">
            <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.25em] text-amber-300 mb-4 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 shadow-sm">
              Join the Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4.5xl font-black text-white mb-5 leading-tight uppercase tracking-wide">
              Ready to Start Scaling?
            </h2>
            <p className="text-[14.5px] text-white/80 max-w-xl mx-auto mb-10 leading-relaxed font-medium">
              Whether you are a student launching a career, an MSME scaling operations, or a traveler exploring Incredible India — VTC brings the standard tools you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/education" className="btn-gold hover:bg-[#d97706] bg-accent border-none py-3.5 px-8 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0">
                Browse Courses <IoArrowForwardOutline className="w-4 h-4 ml-1.5 inline-block" />
              </Link>
              <Link to="/membership" className="btn-outline border-white/30 text-white hover:bg-white hover:text-black py-3.5 px-8 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 bg-transparent">
                Apply for Membership
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
