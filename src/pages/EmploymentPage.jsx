import HeroSection from '../components/HeroSection';
import { IoBarChartOutline, IoTrendingUpOutline, IoBriefcaseOutline,
         IoLocationOutline, IoArrowForwardOutline, IoRocketOutline } from 'react-icons/io5';

const tagStyle = {
  Hot:      'bg-red-50 text-red-600',
  New:      'bg-emerald-50 text-emerald-700',
  Featured: 'bg-amber-50 text-amber-700',
};

const EmploymentPage = () => {
  const empCards = [
    { title: 'Demand Aggregation', desc: 'Analyzing state-wide workforce gaps to guide educational placements.', Icon: IoBarChartOutline  },
    { title: 'Research & Trends',  desc: 'Forecasting travel trends to prepare for emerging operational roles.', Icon: IoTrendingUpOutline },
    { title: 'Apprenticeships',    desc: 'Matching job-seekers with certified on-the-job training modules.',    Icon: IoBriefcaseOutline  },
  ];

  const roles = [
    { title: 'Tour Guide',                openings: 24, location: 'Pan India',         tag: 'Hot'      },
    { title: 'Hotel Operations Manager',  openings: 12, location: 'Delhi, Mumbai',     tag: 'New'      },
    { title: 'Wellness Coordinator',      openings: 8,  location: 'Kerala, Uttarakhand', tag: 'Featured' },
    { title: 'Travel Consultant',         openings: 31, location: 'All Metro Cities',  tag: 'Hot'      },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      <HeroSection
        badge="Career Development"
        title="Employment Opportunities"
        description="We systematically aggregate industry demand to place certified personnel directly into leading hospitality hubs."
        imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1080&fit=crop"
        primaryCta={
          <a href="https://staffinn.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Explore on StaffInn <IoArrowForwardOutline className="w-4 h-4" />
          </a>
        }
      />

      {/* Initiatives */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-label">Our Initiatives</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mt-1">Strategic Workforce Planning</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {empCards.map(({ title, desc, Icon }, i) => (
              <div key={i} className="card p-6 group">
                <div className={`${i % 2 === 0 ? 'icon-box' : 'icon-box-gold'} mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-[15px] font-semibold text-gray-dark mb-2 group-hover:text-secondary transition-colors duration-150">{title}</h3>
                <p className="text-[13px] text-gray-mid leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-label">Live Openings</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mt-1">Active Job Listings</h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            {roles.map((role, i) => (
              <div key={i} className="card p-5 flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-3">
                  <div className="icon-box-sm flex-shrink-0">
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
                  className="btn-primary text-xs px-4 py-2 flex-shrink-0">
                  Apply
                </a>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="card bg-primary-dark border-0 p-7 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="icon-box-gold w-12 h-12 rounded-xl flex-shrink-0">
                <IoRocketOutline className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">Explore All Opportunities</h3>
                <p className="text-[13px] text-slate-300">Connect and apply for current operations, guides, and tech hospitality vacancies.</p>
              </div>
            </div>
            <a href="https://staffinn.com/" target="_blank" rel="noopener noreferrer"
              className="btn-gold flex-shrink-0">
              Explore on StaffInn <IoArrowForwardOutline className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmploymentPage;
