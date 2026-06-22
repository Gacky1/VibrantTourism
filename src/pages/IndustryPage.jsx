import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import InfoCard    from '../components/InfoCard';
import MemberCard  from '../components/MemberCard';
import { IoArrowForwardOutline, IoCheckmarkCircleOutline,
         IoPeopleOutline, IoGlobeOutline, IoLeafOutline, IoRibbonOutline } from 'react-icons/io5';
import { whatWeDoCards, boardMembers, sectionContent } from '../data/mockData';

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

const pillars = [
  { Icon: IoPeopleOutline,  label: 'Stakeholder Connect'   },
  { Icon: IoGlobeOutline,   label: 'National Reach'        },
  { Icon: IoLeafOutline,    label: 'Sustainable Tourism'   },
  { Icon: IoRibbonOutline,  label: 'Certified Excellence'  },
];

const IndustryPage = () => {
  useReveal();
  return (
    <div className="bg-white min-h-screen">
      <HeroSection
        badge="Industry Sector"
        title="Strengthening Tourism & Hospitality"
        subtitle="VTC for India"
        description={sectionContent.aboutContent[0]}
        imageUrl="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop"
        primaryCta={<a href="/membership" className="btn-primary">Join Network <IoArrowForwardOutline className="w-4 h-4" /></a>}
        secondaryCta={<a href="/destination" className="btn-outline">Explore Destinations</a>}
      />

      {/* ── Split storytelling ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="grid grid-cols-2 gap-3 h-[460px]">
                <div className="split-img row-span-2">
                  <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=900&fit=crop" alt="India Tourism" />
                </div>
                <div className="split-img">
                  <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop" alt="Culture" />
                </div>
                <div className="split-img">
                  <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop" alt="Business" />
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <SH eyebrow="About VTC" title={sectionContent.aboutTitle} center={false} />
              {sectionContent.aboutContent.map((p, i) => (
                <p key={i} className="text-[15px] text-gray-mid leading-relaxed mb-4">{p}</p>
              ))}
              <div className="grid grid-cols-2 gap-3 mt-8 mb-8">
                {pillars.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 p-3 bg-surface rounded-xl border border-gray-100">
                    <div className="icon-box-sm flex-shrink-0"><Icon className="w-4 h-4" /></div>
                    <span className="text-[13px] font-semibold text-gray-dark">{label}</span>
                  </div>
                ))}
              </div>
              <a href="/membership" className="btn-primary">Join the Network <IoArrowForwardOutline className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal"><SH eyebrow="Our Actions" title="What We Do" /></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whatWeDoCards.map((c, i) => (
              <div key={c.id} className={`reveal reveal-delay-${(i % 4) + 1}`}>
                <InfoCard title={c.title} description={c.description} icon={c.icon} colorIndex={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-bleed CTA band ── */}
      <section className="section-band py-24">
        <div className="section-band-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=600&fit=crop")' }} />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 text-center reveal">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-amber-300 mb-4">Why VTC</span>
          <h2 className="text-4xl font-bold text-white mb-5">India's Tourism Ecosystem Partner</h2>
          <p className="text-white/75 text-[15px] max-w-xl mx-auto mb-8 leading-relaxed">
            Connecting hotels, travel companies, wellness centres, academic institutions, and professionals to build a world-class tourism workforce.
          </p>
          <ul className="flex flex-wrap justify-center gap-4 mb-10">
            {['Skill Training', 'Industry Linkage', 'Research & Data', 'Sustainable Growth'].map(f => (
              <li key={f} className="flex items-center gap-2 text-white/85 text-[13px] font-semibold">
                <IoCheckmarkCircleOutline className="w-4 h-4 text-amber-300 flex-shrink-0" />{f}
              </li>
            ))}
          </ul>
          <a href="/membership" className="btn-gold">Apply for Membership <IoArrowForwardOutline className="w-4 h-4" /></a>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-amber-300 mb-3">Our Leadership</span>
            <h2 className="text-3xl font-bold text-white">Governing Council</h2>
            <div className="h-0.5 w-10 bg-amber-400 rounded-full mt-4 mx-auto" />
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

export default IndustryPage;
