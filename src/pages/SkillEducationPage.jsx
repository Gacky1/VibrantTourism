import { useEffect } from 'react';
import * as IoIcons from 'react-icons/io5';
import HeroSection from '../components/HeroSection';
import { IoArrowForwardOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { skillPrograms } from '../data/mockData';

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

/* Background images cycling for program cards */
const progImages = [
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop',
];

const SkillEducationPage = () => {
  useReveal();
  return (
    <div className="bg-white min-h-screen pb-20">
      <HeroSection
        badge="Practical Competencies"
        title="Skill Education in Tourism & Hospitality"
        subtitle="Bridging Workforce Capabilities"
        description="Competency-based training programs focusing on practical, hands-on learning rather than purely academic knowledge."
        imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop"
        primaryCta={<a href="/upskilling" className="btn-primary">RPL Upskilling <IoArrowForwardOutline className="w-4 h-4" /></a>}
        secondaryCta={<a href="#programs" className="btn-outline">Browse Programs</a>}
      />

      {/* ── Stats strip ── */}
      <section className="py-10 bg-primary-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-12 text-center">
            {[
              { value: `${skillPrograms.length}+`, label: 'Certified Programs' },
              { value: '1000+', label: 'Trained Professionals' },
              { value: '100%', label: 'Industry Aligned' },
              { value: '28', label: 'States Covered' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs grid ── */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal"><SH eyebrow="Certification Pathways" title="Skill Certification Programs" body="Choose from 13+ industry-recognised programs designed for every role in tourism & hospitality." /></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillPrograms.map((prog, i) => {
              const Icon = IoIcons[prog.icon] || IoIcons.IoBookmarkOutline;
              const isGold = i % 2 !== 0;
              return (
                <div key={prog.id} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="card group p-5 flex items-start gap-4 hover:border-blue-200">
                    <div className={`${isGold ? 'icon-box-gold' : 'icon-box'} flex-shrink-0 mt-0.5
                      group-hover:scale-110 group-hover:shadow-md transition-all duration-250
                      ${isGold ? 'group-hover:bg-amber-500 group-hover:text-white' : 'group-hover:bg-secondary group-hover:text-white'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[14px] font-semibold text-gray-dark leading-snug mb-1.5 group-hover:text-secondary transition-colors duration-150">
                        {prog.title}
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <IoCheckmarkCircleOutline className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                        <span className="text-[11px] font-semibold text-secondary">Certified Program</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Horizontal scroll — visual showcase ── */}
      <section className="py-20 bg-surface overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal"><SH eyebrow="Visual Showcase" title="Programs in Action" /></div>
          <div className="h-scroll-strip reveal">
            {progImages.map((img, i) => (
              <div key={i} className="img-card group flex-shrink-0" style={{ width: '280px', height: '200px' }}>
                <img src={img} alt={`Program ${i + 1}`} />
                <div className="img-card-overlay" />
                <div className="absolute bottom-3 left-3 z-10">
                  <span className="exp-tag">{skillPrograms[i]?.title.split(' ').slice(0, 3).join(' ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="section-band py-24">
        <div className="section-band-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=600&fit=crop")' }} />
        <div className="absolute inset-0 bg-primary/82" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 text-center reveal">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-amber-300 mb-4">Enroll Today</span>
          <h2 className="text-4xl font-bold text-white mb-5">{skillPrograms.length}+ Certified Programs Available</h2>
          <p className="text-white/75 text-[15px] max-w-xl mx-auto mb-10 leading-relaxed">
            Get industry-recognised certifications and boost your career in tourism & hospitality.
          </p>
          <a href="/membership" className="btn-gold">Enroll Now <IoArrowForwardOutline className="w-4 h-4" /></a>
        </div>
      </section>
    </div>
  );
};

export default SkillEducationPage;
