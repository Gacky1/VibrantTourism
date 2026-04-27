import { useEffect, useState, useRef } from 'react';
import {
  IoAnalyticsOutline, IoPeopleOutline, IoBriefcaseOutline,
  IoAirplaneOutline, IoArrowForwardOutline,
} from 'react-icons/io5';
import HeroSection from '../components/HeroSection';
import TourismCard from '../components/TourismCard';
import InfoCard    from '../components/InfoCard';
import MemberCard  from '../components/MemberCard';
import { tourismCategories } from '../data/tourismData';
import { whatWeDoCards, sectionContent, boardMembers } from '../data/mockData';

/* ── Scroll-reveal hook ── */
const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io  = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
};

/* ── Animated counter ── */
const useCounter = (target, duration = 1400) => {
  const [count, setCount] = useState(0);
  const ref   = useRef(null);
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

/* ── Stat card with animated counter ── */
const StatCard = ({ value, suffix, label, Icon }) => {
  const numericPart = value.replace(/[^0-9.]/g, '');
  const { count, ref } = useCounter(numericPart);

  return (
    <div ref={ref} className="card p-6 text-center group">
      <div className="icon-box mx-auto mb-4
        group-hover:bg-secondary group-hover:text-white group-hover:scale-110 group-hover:shadow-md
        transition-all duration-250">
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-2xl font-bold text-gray-dark mb-1 stat-number">
        {count}{suffix}
      </div>
      <div className="text-[12px] text-gray-mid font-medium uppercase tracking-wide">{label}</div>
    </div>
  );
};

/* ── Section heading ── */
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

      {/* ── Hero ── */}
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
          <a href="/membership" className="btn-outline">Become a Member</a>
        }
        stats={[
          { value: '40M+', label: 'Jobs Supported' },
          { value: '2B+',  label: 'Domestic Trips' },
          { value: '75%',  label: 'MSME Share'      },
        ]}
      />

      {/* ── Tourism Categories ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal"><SectionHead label="Choose Your Interest" title="Explore Types of Tourism" /></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(tourismCategories).map((cat, i) => (
              <div key={cat.id} className={`reveal reveal-delay-${(i % 4) + 1}`}>
                <TourismCard
                  title={cat.title} subtitle={cat.subtitle}
                  image={cat.image} icon={cat.icon} color={cat.color}
                  onClick={() => { window.location.href = `/destination?type=${cat.id}`; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats with animated counters ── */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal"><SectionHead label="India Tourism Impact" title="Sector at a Glance" /></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { value: '9.5', suffix: '%',  label: 'GDP Contribution',  Icon: IoAnalyticsOutline },
              { value: '46',  suffix: 'M+', label: 'Employment Created', Icon: IoPeopleOutline    },
              { value: '75',  suffix: '%',  label: 'MSME Segment',       Icon: IoBriefcaseOutline },
              { value: '12',  suffix: 'M+', label: 'Intl Tourists',      Icon: IoAirplaneOutline  },
            ].map((s, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`}>
                <StatCard {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SectionHead label="What We Do" title={sectionContent.aboutTitle} body={sectionContent.aboutContent[0]} />
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

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-primary-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=600&fit=crop")',
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}
        />
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(37,99,235,0.15) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <span className="section-label text-amber-400">Join Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-1 mb-4">Join the VTC Network</h2>
          <p className="text-[15px] text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Connect with India's leading tourism ecosystem. Build partnerships, access training, and grow your business.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/membership" className="btn-gold">
              Apply for Membership <IoArrowForwardOutline className="w-4 h-4" />
            </a>
            <a href="/contact" className="btn-outline">Contact Us</a>
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal"><SectionHead label="Our Leadership" title="Governing Council" /></div>
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
