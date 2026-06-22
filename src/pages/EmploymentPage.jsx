import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import { IoBarChartOutline, IoTrendingUpOutline, IoBriefcaseOutline,
         IoLocationOutline, IoArrowForwardOutline, IoRocketOutline } from 'react-icons/io5';

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

const SH = ({ eyebrow, title, body, light = false, center = true }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    {eyebrow && <span className={`inline-block text-[11px] font-bold uppercase tracking-[0.18em] mb-3 ${light ? 'text-amber-300' : 'text-secondary'}`}>{eyebrow}</span>}
    <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? 'text-white' : 'text-gray-dark'}`}>{title}</h2>
    <div className={`h-0.5 w-10 rounded-full mt-4 ${center ? 'mx-auto' : ''} ${light ? 'bg-amber-400' : 'bg-accent'}`} />
    {body && <p className={`mt-5 text-[14px] leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/75' : 'text-gray-mid'}`}>{body}</p>}
  </div>
);

const tagStyle = {
  Hot:      'bg-red-50 text-red-600 border border-red-100',
  New:      'bg-emerald-50 text-emerald-700 border border-emerald-100',
  Featured: 'bg-amber-50 text-amber-700 border border-amber-100',
};

const EmploymentPage = () => {
  useReveal();

  const empCards = [
    { title: 'Demand Aggregation', desc: 'Analyzing state-wide workforce gaps to guide educational placements.', Icon: IoBarChartOutline,  img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
    { title: 'Research & Trends',  desc: 'Forecasting travel trends to prepare for emerging operational roles.', Icon: IoTrendingUpOutline, img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop' },
    { title: 'Apprenticeships',    desc: 'Matching job-seekers with certified on-the-job training modules.',    Icon: IoBriefcaseOutline,  img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop' },
  ];

  const roles = [
    { title: 'Tour Guide',               openings: 24, location: 'Pan India',           tag: 'Hot'      },
    { title: 'Hotel Operations Manager', openings: 12, location: 'Delhi, Mumbai',       tag: 'New'      },
    { title: 'Wellness Coordinator',     openings: 8,  location: 'Kerala, Uttarakhand', tag: 'Featured' },
    { title: 'Travel Consultant',        openings: 31, location: 'All Metro Cities',    tag: 'Hot'      },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      <HeroSection
        badge="Career Development"
        title="Employment Opportunities in Tourism"
        description="We systematically aggregate industry demand to place certified personnel directly into leading hospitality hubs across India."
        imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1080&fit=crop"
        primaryCta={<a href="https://staffinn.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">Explore on StaffInn <IoArrowForwardOutline className="w-4 h-4" /></a>}
        secondaryCta={<a href="#jobs" className="btn-outline">View Openings</a>}
      />

      {/* ── Initiatives — image-backed cards ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal"><SH eyebrow="Our Initiatives" title="Strategic Workforce Planning" /></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {empCards.map(({ title, desc, Icon, img }, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} group card overflow-hidden`}>
                <div className="relative h-44 overflow-hidden img-zoom">
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <div className={`${i % 2 === 0 ? 'icon-box' : 'icon-box-gold'} mb-4 group-hover:scale-110 group-hover:shadow-md transition-all duration-250 ${i % 2 === 0 ? 'group-hover:bg-secondary group-hover:text-white' : 'group-hover:bg-amber-500 group-hover:text-white'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-gray-dark mb-2 group-hover:text-secondary transition-colors duration-150">{title}</h3>
                  <p className="text-[13px] text-gray-mid leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Job listings ── */}
      <section id="jobs" className="py-20 bg-surface">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal"><SH eyebrow="Live Openings" title="Active Job Listings" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            {roles.map((role, i) => (
              <div key={i} className={`reveal reveal-delay-${(i % 2) + 1} card p-5 flex items-center justify-between gap-4 group`}>
                <div className="flex items-center gap-3">
                  <div className="icon-box-sm flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-200">
                    <IoBriefcaseOutline className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="text-[14px] font-semibold text-gray-dark group-hover:text-secondary transition-colors duration-150">{role.title}</h4>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${tagStyle[role.tag]}`}>{role.tag}</span>
                    </div>
                    <p className="text-[12px] text-gray-mid flex items-center gap-1">
                      <IoLocationOutline className="w-3.5 h-3.5" />
                      {role.location} · {role.openings} openings
                    </p>
                  </div>
                </div>
                <a href="https://staffinn.com/" target="_blank" rel="noopener noreferrer"
                  className="btn-primary text-xs px-4 py-2 flex-shrink-0">Apply</a>
              </div>
            ))}
          </div>

          {/* Big CTA card */}
          <div className="reveal max-w-3xl mx-auto">
            <div className="img-card group" style={{ height: '200px' }}>
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=400&fit=crop" alt="Jobs" className="w-full h-full object-cover" />
              <div className="img-card-overlay" />
              <div className="absolute inset-0 flex items-center justify-between px-8 z-10">
                <div className="flex items-center gap-4">
                  <div className="icon-box-gold w-14 h-14 rounded-2xl flex-shrink-0">
                    <IoRocketOutline className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Explore All Opportunities</h3>
                    <p className="text-white/75 text-[13px]">Connect and apply for current operations, guides, and tech hospitality vacancies.</p>
                  </div>
                </div>
                <a href="https://staffinn.com/" target="_blank" rel="noopener noreferrer"
                  className="btn-gold flex-shrink-0 hidden md:flex">
                  Explore on StaffInn <IoArrowForwardOutline className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmploymentPage;
