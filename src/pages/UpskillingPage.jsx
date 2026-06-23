import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { IoCheckmarkCircleOutline, IoArrowForwardOutline,
         IoPeopleOutline, IoBriefcaseOutline } from 'react-icons/io5';
import { rplData } from '../data/mockData';

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

const UpskillingPage = () => {
  useReveal();
  return (
    <div className="bg-white min-h-screen pb-20">
      <HeroSection
        badge="Career Progression"
        title="Recognition of Prior Learning (RPL)"
        subtitle="VTC Upskilling Protocols"
        description="RPL formally recognises skills and knowledge already acquired through years of work experience, elevating careers without restarting."
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
        primaryCta={<Link to="/membership" className="btn-primary">Get Certified <IoArrowForwardOutline className="w-4 h-4" /></Link>}
        secondaryCta={<a href="#benefits" className="btn-outline">See Benefits</a>}
      />

      {/* ── Split: Why RPL ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <SH eyebrow="Our Standards" title="Why RPL is Crucial" body="Bridging the gap between real-world expertise and formal certifications." center={false} />
              <ul className="space-y-4 mb-8">
                {rplData.whyRPL.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-gray-mid">
                    <IoCheckmarkCircleOutline className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link to="/membership" className="btn-primary">Apply for RPL <IoArrowForwardOutline className="w-4 h-4" /></Link>
            </div>

            {/* Image collage */}
            <div className="reveal reveal-delay-2">
              <div className="grid grid-cols-2 gap-3 h-[420px]">
                <div className="split-img row-span-2">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=900&fit=crop" alt="RPL Training" />
                </div>
                <div className="split-img">
                  <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop" alt="Employment" />
                </div>
                <div className="split-img">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop" alt="Skill Training" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who is it for — image card strip ── */}
      <section className="py-20 bg-surface overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal"><SH eyebrow="Target Audience" title="Who is RPL Tailored For?" /></div>
          <div className="h-scroll-strip reveal">
            {[
              { img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop', label: 'Hotel & Resort Staff'       },
              { img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop', label: 'F&B Teams'                  },
              { img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop', label: 'Tour Guides & Executives'   },
              { img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop', label: 'Wellness Providers'          },
              { img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop', label: 'Seasonal Workers'           },
            ].map((item, i) => (
              <div key={i} className="img-card group flex-shrink-0" style={{ width: '240px', height: '200px' }}>
                <img src={item.img} alt={item.label} />
                <div className="img-card-overlay" />
                <div className="absolute bottom-3 left-3 z-10">
                  <span className="text-white text-[12px] font-bold">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal"><SH eyebrow="Outcomes" title="Measurable RPL Benefits" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { title: 'For Employers',     Icon: IoBriefcaseOutline, points: rplData.benefits.employers,    isGold: false },
              { title: 'For Professionals', Icon: IoPeopleOutline,    points: rplData.benefits.professionals, isGold: true  },
            ].map(({ title, Icon, points, isGold }, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} card p-7 group`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`${isGold ? 'icon-box-gold group-hover:bg-amber-500' : 'icon-box group-hover:bg-secondary'} group-hover:text-white group-hover:scale-110 transition-all duration-250`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-dark">{title}</h3>
                </div>
                <div className="h-0.5 w-full bg-gray-100 rounded-full mb-5" />
                <ul className="space-y-3">
                  {points.map((p, pi) => (
                    <li key={pi} className="flex items-start gap-2.5 text-[13px] text-gray-mid">
                      <IoCheckmarkCircleOutline className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="section-band py-24">
        <div className="section-band-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=600&fit=crop")' }} />
        <div className="absolute inset-0 bg-primary/82" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 text-center reveal">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-amber-300 mb-4">Get Recognised</span>
          <h2 className="text-4xl font-bold text-white mb-5">Your Experience Deserves Certification</h2>
          <p className="text-white/75 text-[15px] max-w-xl mx-auto mb-10 leading-relaxed">
            Don't start from scratch. Get your existing skills formally recognised and open new career doors.
          </p>
          <Link to="/membership" className="btn-gold">Apply for RPL <IoArrowForwardOutline className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
};
export default UpskillingPage;
