import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import { IoArrowForwardOutline, IoSchoolOutline, IoTimeOutline,
         IoRibbonOutline, IoPeopleOutline } from 'react-icons/io5';
import { educationData } from '../data/mockData';

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

const highlights = [
  { Icon: IoSchoolOutline,  label: '5 Core Programs'       },
  { Icon: IoRibbonOutline,  label: 'Industry Certified'    },
  { Icon: IoTimeOutline,    label: 'Flexible Duration'      },
  { Icon: IoPeopleOutline,  label: '1000+ Graduates'        },
];

const EducationPage = () => {
  useReveal();
  return (
    <div className="bg-white min-h-screen pb-20">
      <HeroSection
        badge="Tourism Education"
        title="Learn for Every Tourism Opportunity"
        subtitle="Education & Training Programs"
        description={educationData.introduction}
        imageUrl="https://images.unsplash.com/photo-1523050874724-358b67a3ed3b?w=1920&h=1080&fit=crop"
        primaryCta={<a href="/skill-education" className="btn-primary">View Skill Programs <IoArrowForwardOutline className="w-4 h-4" /></a>}
        secondaryCta={<a href="#courses" className="btn-outline">Browse Courses</a>}
      />

      {/* ── Highlight strip ── */}
      <section className="py-10 bg-primary-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-10">
            {highlights.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-3 group">
                <div className="icon-box-gold group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-white font-semibold text-[14px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Course cards — image-first ── */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal"><SH eyebrow="Foundational Learning" title="Core Academic Programs" body="Industry-aligned courses designed to build a skilled, future-ready tourism workforce." /></div>

          {/* Featured top 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 reveal">
            {educationData.courses.slice(0, 2).map((course, i) => (
              <div key={course.id} className="img-card group cursor-pointer" style={{ height: '340px' }}
                onClick={() => alert(`Registration details for ${course.title}`)}>
                <img src={course.image} alt={course.title} />
                <div className="img-card-overlay" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="exp-tag">Course {String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-white text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-white/75 text-[13px] mb-3 line-clamp-2">{course.description}</p>
                  <div className="flex items-center gap-1.5 text-white/80 text-[12px] font-semibold group-hover:text-white group-hover:gap-3 transition-all duration-200">
                    View Curriculum <IoArrowForwardOutline className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {educationData.courses.slice(2).map((course, i) => (
              <div key={course.id} className={`reveal reveal-delay-${i + 1}`}>
                <div className="img-card group cursor-pointer" style={{ height: '260px' }}
                  onClick={() => alert(`Registration details for ${course.title}`)}>
                  <img src={course.image} alt={course.title} />
                  <div className="img-card-overlay" />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="exp-tag">Course {String(i + 3).padStart(2, '0')}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <h3 className="text-white text-[15px] font-bold mb-1">{course.title}</h3>
                    <div className="flex items-center gap-1 text-white/70 text-[11px] font-semibold group-hover:text-white group-hover:gap-2 transition-all duration-200">
                      View Curriculum <IoArrowForwardOutline className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horizontal scroll — quick browse ── */}
      <section className="py-20 bg-surface overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 reveal">
            <SH eyebrow="Also Explore" title="Related Pathways" center={false} />
            <a href="/skill-education" className="hidden md:flex items-center gap-1.5 text-[13px] font-semibold text-secondary hover:gap-3 transition-all duration-200 mb-12">
              All Programs <IoArrowForwardOutline className="w-4 h-4" />
            </a>
          </div>
          <div className="h-scroll-strip reveal">
            {[
              { img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=800&fit=crop', title: 'Skill Certification', tag: 'Practical' },
              { img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop',   title: 'RPL Upskilling',    tag: 'Career'    },
              { img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=800&fit=crop', title: 'Employment Ready',  tag: 'Jobs'      },
              { img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=800&fit=crop',   title: 'Wellness Tourism',  tag: 'AYUSH'     },
            ].map((item, i) => (
              <div key={i} className="img-card group flex-shrink-0" style={{ width: '240px', height: '320px' }}>
                <img src={item.img} alt={item.title} />
                <div className="img-card-overlay" />
                <div className="absolute top-3 left-3 z-10"><span className="exp-tag">{item.tag}</span></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <h3 className="text-white font-bold text-[15px]">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="section-band py-24">
        <div className="section-band-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523050874724-358b67a3ed3b?w=1920&h=600&fit=crop")' }} />
        <div className="absolute inset-0 bg-primary/82" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 text-center reveal">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-amber-300 mb-4">Get Started</span>
          <h2 className="text-4xl font-bold text-white mb-5">Ready to Start Learning?</h2>
          <p className="text-white/75 text-[15px] max-w-xl mx-auto mb-10 leading-relaxed">
            Enroll in our certified programs and build a career in India's fastest-growing tourism sector.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/skill-education" className="btn-gold">Skill Programs <IoArrowForwardOutline className="w-4 h-4" /></a>
            <a href="/upskilling" className="btn-outline">RPL Upskilling</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;
