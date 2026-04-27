import { useState, useEffect } from 'react';
import HeroSection           from '../components/HeroSection';
import SmartBookingAssistant from '../components/assistant/SmartBookingAssistant';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { IoAnalyticsOutline, IoPeopleOutline, IoBriefcaseOutline,
         IoAirplaneOutline, IoMapOutline, IoArrowForwardOutline,
         IoCompassOutline } from 'react-icons/io5';
import * as IoIcons from 'react-icons/io5';
import { tourismCategories } from '../data/tourismData';

/* ── Animated counter ── */
const Counter = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let n = 0;
    const end  = parseFloat(value);
    const step = end / (900 / 30);
    const t = setInterval(() => {
      n += step;
      if (n >= end) { setCount(end); clearInterval(t); }
      else setCount(Math.floor(n));
    }, 30);
    return () => clearInterval(t);
  }, [value]);
  return <span>{count}{suffix}</span>;
};

const SectionHead = ({ label, title }) => (
  <div className="text-center mb-10">
    <span className="section-label">{label}</span>
    <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mt-1">{title}</h2>
    <div className="section-divider mx-auto" />
  </div>
);

const DestinationPage = () => {
  const [initialType, setInitialType] = useState(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('type');
    if (p && tourismCategories[p]) setInitialType(p);
  }, []);

  const barData = [
    { name: 'GDP %',    value: 9.5  },
    { name: 'Jobs (M)', value: 46.5 },
    { name: 'MSME %',   value: 75   },
  ];

  const stats = [
    { label: 'GDP Contribution', value: '9.5', suffix: '%',  Icon: IoAnalyticsOutline },
    { label: 'Employment',       value: '46',  suffix: 'M+', Icon: IoPeopleOutline    },
    { label: 'MSME Segment',     value: '75',  suffix: '%',  Icon: IoBriefcaseOutline },
    { label: 'Intl Tourists',    value: '12',  suffix: 'M+', Icon: IoAirplaneOutline  },
    { label: 'Domestic Trips',   value: '2',   suffix: 'B+', Icon: IoMapOutline       },
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* ── Hero ── */}
      <HeroSection
        badge="Discover India"
        title="Plan Your Perfect Journey"
        description="Use our smart travel assistant to discover destinations, compare providers, and book your ideal experience — all in one place."
        imageUrl="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&h=1080&fit=crop"
        primaryCta={
          <a href="#assistant" className="btn-primary">
            Start Planning <IoArrowForwardOutline className="w-4 h-4" />
          </a>
        }
        secondaryCta={
          <a href="#stats" className="btn-outline">
            View Sector Data
          </a>
        }
        stats={[
          { value: '9',   label: 'Tourism Types'    },
          { value: '19+', label: 'Destinations'     },
          { value: '8+',  label: 'Verified Providers'},
        ]}
      />

      {/* ── Stats ── */}
      <section id="stats" className="py-16 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead label="Key Indicators" title="Sector Performance" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="card p-5 text-center group">
                <div className="icon-box mx-auto mb-3 group-hover:bg-secondary group-hover:text-white transition-colors duration-200">
                  <s.Icon className="w-5 h-5" />
                </div>
                <div className="text-xl font-bold text-gray-dark mb-1">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[11px] text-gray-mid uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chart ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-7 h-[320px]">
            <h3 className="text-base font-bold text-gray-dark mb-5 text-center">Industry Metrics Forecast</h3>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart data={barData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#4B5563', fontWeight: 600 }} />
                <YAxis tick={{ fontSize: 11, fill: '#4B5563', fontWeight: 600 }} />
                <Tooltip
                  cursor={{ fill: '#EFF6FF' }}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: 12 }}
                />
                <Bar dataKey="value" fill="#2563EB" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* ── Smart Booking Assistant ── */}
      <section id="assistant" className="py-16 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-10">
            <span className="section-label">Smart Travel Planner</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mt-1">
              Destination Booking Assistant
            </h2>
            <div className="section-divider mx-auto mb-4" />
            <p className="text-[14px] text-gray-mid max-w-xl mx-auto">
              A guided 5-step journey — from choosing your interest to confirming your booking.
            </p>
          </div>

          {/* Step legend */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { n: '01', label: 'Choose Interest' },
              { n: '02', label: 'Pick Destination' },
              { n: '03', label: 'Explore Options' },
              { n: '04', label: 'Compare Providers' },
              { n: '05', label: 'Book & Confirm' },
            ].map(({ n, label }) => (
              <div key={n} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                <span className="w-5 h-5 rounded-full bg-secondary text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">{n}</span>
                <span className="text-[12px] font-semibold text-gray-dark">{label}</span>
              </div>
            ))}
          </div>

          {/* The assistant */}
          <SmartBookingAssistant initialType={initialType} />
        </div>
      </section>

      {/* ── Browse by category quick links ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead label="Browse by Interest" title="All Tourism Categories" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {Object.values(tourismCategories).map(cat => {
              const Icon = IoIcons[cat.icon] || IoCompassOutline;
              return (
                <a
                  key={cat.id}
                  href={`/destination?type=${cat.id}`}
                  className="group flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-xl hover:border-secondary hover:shadow-md transition-all duration-200 text-center"
                >
                  <div className="icon-box group-hover:bg-secondary group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[12px] font-semibold text-gray-dark group-hover:text-secondary transition-colors duration-150 leading-tight">
                    {cat.title.split(' ')[0]}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;
