import { useEffect } from 'react';
import {
  IoAnalyticsOutline, IoPeopleOutline, IoBriefcaseOutline,
  IoAirplaneOutline, IoArrowForwardOutline,
} from 'react-icons/io5';
import HeroSection  from '../components/HeroSection';
import TourismCard  from '../components/TourismCard';
import InfoCard     from '../components/InfoCard';
import MemberCard   from '../components/MemberCard';
import { tourismCategories } from '../data/tourismData';
import { whatWeDoCards, sectionContent, boardMembers } from '../data/mockData';

/* ── Scroll-reveal hook ── */
const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io  = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
};

/* ── Stat card ── */
const StatCard = ({ value, label, Icon }) => (
  <div className="card p-6 text-center group">
    <div className="icon-box mx-auto mb-3 group-hover:bg-secondary group-hover:text-white transition-colors duration-200">
      <Icon className="w-5 h-5" />
    </div>
    <div className="text-2xl font-bold text-gray-dark mb-1">{value}</div>
    <div className="text-[12px] text-gray-mid font-medium uppercase tracking-wide">{label}</div>
  </div>
);

/* ── Section heading helper ── */
const SectionHead = ({ label, title, body, center = true }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    <span className="section-label">{label}</span>
    <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mt-1">{title}</h2>
    <div className={`section-divider ${center ? 'mx-auto' : ''}`} />
    {body && <p className="mt-5 text-[14px] text-gray-mid leading-relaxed max-w-3xl mx-auto">{body}</p>}
  </div>
);

const HomePage = () => {
  useReveal();

  return (
    <div className="bg-white min-h-screen">

      {/* ── 1. Hero ── */}
      <HeroSection
        badge="Vibrant Tourism Council"
        title="Transforming Tourism, Empowering India"
        description="Connecting stakeholders across tourism, hospitality, and skill development for a sustainable future."
        imageUrl="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&h=1080&fit=crop"
        primaryCta={
          <a href="/destination" className="btn-primary">
            Explore Destinations <IoArrowForwardOutline className="w-4 h-4" />
          </a>
        }
        secondaryCta={
          <a href="/membership" className="btn-outline">
            Become a Member
          </a>
        }
        stats={[
          { value: '40M+', label: 'Jobs Supported'  },
          { value: '2B+',  label: 'Domestic Trips'  },
          { value: '75%',  label: 'MSME Share'       },
        ]}
      />

      {/* ── 2. Tourism Categories — white ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SectionHead label="Choose Your Interest" title="Explore Types of Tourism" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(tourismCategories).map((cat, i) => (
              <div key={cat.id} className={`reveal reveal-delay-${(i % 4) + 1}`}>
                <TourismCard
                  title={cat.title}
                  subtitle={cat.subtitle}
                  image={cat.image}
                  icon={cat.icon}
                  color={cat.color}
                  onClick={() => { window.location.href = `/destination?type=${cat.id}`; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Stats — light gray ── */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SectionHead label="India Tourism Impact" title="Sector at a Glance" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { value: '9.5%', label: 'GDP Contribution',   Icon: IoAnalyticsOutline },
              { value: '46M+', label: 'Employment Created',  Icon: IoPeopleOutline    },
              { value: '75%',  label: 'MSME Segment',        Icon: IoBriefcaseOutline },
              { value: '12M+', label: 'Intl Tourists',       Icon: IoAirplaneOutline  },
            ].map((s, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`}>
                <StatCard {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. About / What We Do — white ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SectionHead
              label="What We Do"
              title={sectionContent.aboutTitle}
              body={sectionContent.aboutContent[0]}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whatWeDoCards.map((card, i) => (
              <div key={card.id} className={`reveal reveal-delay-${(i % 4) + 1}`}>
                <InfoCard title={card.title} description={card.description} icon={card.icon} colorIndex={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA Banner — deep blue ── */}
      <section className="py-20 bg-primary-dark relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=600&fit=crop")', backgroundSize: 'cover' }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <span className="section-label text-amber-400">Join Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-1 mb-4">
            Join the VTC Network
          </h2>
          <p className="text-[15px] text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Connect with India's leading tourism ecosystem. Build partnerships, access training, and grow your business.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/membership" className="btn-gold">
              Apply for Membership <IoArrowForwardOutline className="w-4 h-4" />
            </a>
            <a href="/contact" className="btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. Leadership — light gray ── */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SectionHead label="Our Leadership" title="Governing Council" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {boardMembers.map((m, i) => (
              <div key={m.id} className={`reveal reveal-delay-${i + 1}`}>
                <MemberCard name={m.name} designation={m.designation} image={m.image} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
