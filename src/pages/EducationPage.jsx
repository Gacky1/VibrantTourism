import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as IoIcons from 'react-icons/io5';
import HeroSection from '../components/HeroSection';
import {
  IoArrowForwardOutline, IoSchoolOutline, IoTimeOutline,
  IoRibbonOutline, IoPeopleOutline, IoCheckmarkCircle,
  IoBookmarkOutline, IoShieldCheckmarkOutline
} from 'react-icons/io5';
import { educationData, skillPrograms } from '../data/mockData';

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
    <h2 className={`text-2xl md:text-3.5xl font-black uppercase tracking-wide leading-tight ${light ? 'text-white' : 'text-[#0A2540]'}`}>{title}</h2>
    <div className={`h-0.5 w-10 rounded-full mt-4 ${center ? 'mx-auto' : ''} ${light ? 'bg-amber-400' : 'bg-accent'}`} />
    {body && <p className={`mt-5 text-[13.5px] font-semibold leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/75' : 'text-slate-500'}`}>{body}</p>}
  </div>
);

const highlights = [
  { Icon: IoSchoolOutline,  label: '5 Core Academic Programs' },
  { Icon: IoRibbonOutline,  label: '13+ Certified Skill Pathways' },
  { Icon: IoTimeOutline,    label: 'Flexible Practical Credits' },
  { Icon: IoPeopleOutline,  label: '1000+ Trained Graduates' },
];

/* Grouping the 13 skill programs into 3 professional career tracks */
const SKILL_TRACKS = [
  {
    title: "Hospitality & Guest Services",
    description: "Front-line operational excellence, guest relations, and service quality management.",
    programIds: [3, 8, 10, 11] // Customer Exp, Front Office, Housekeeping, F&B Service
  },
  {
    title: "Management & Digital Tourism",
    description: "Marketing analytics, strategic entrepreneurship, consulting, and destination management.",
    programIds: [1, 2, 4, 5, 6] // Digital Mktg, Entrepreneurship, Tour Guide, Travel Consultant, Destination Mgmt
  },
  {
    title: "Culinary & Wellness Operations",
    description: "Specialized kitchens, food safety regulations, and traditional wellness travel programs.",
    programIds: [9, 12, 13, 7] // Hotel Ops, Culinary Skills, Hygiene & Food Safety, Wellness/AYUSH coordinator
  }
];

const progImages = [
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop',
];

const EducationPage = () => {
  useReveal();

  return (
    <div className="bg-white min-h-screen pb-20">
      <HeroSection
        badge="Academic & Skill Portfolios"
        title="Empowering the Next Generation of Tourism Professionals"
        subtitle="Consolidated Education & Training Framework"
        description="Comprehensive learning systems bridging foundational academic curricula with modern, practical skill certifications to meet industry operational requirements."
        imageUrl="https://images.unsplash.com/photo-1499591934245-40b55745b905?q=80&w=1172&auto=format&fit=crop"
        primaryCta={<a href="#programs" className="btn-primary">Explore Skill Pathways <IoArrowForwardOutline className="w-4 h-4" /></a>}
        secondaryCta={<a href="#courses" className="btn-outline">Academic Programs</a>}
      />

      {/* ── Highlight metrics strip ── */}
      <section className="py-10 bg-[#0A2540]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-10 md:gap-14">
            {highlights.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-3.5 group">
                <div className="w-9 h-9 rounded-xl bg-white/10 text-amber-400 border border-white/15 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <span className="text-white font-extrabold text-[12.5px] uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 1: Foundational Academic Courses ── */}
      <section id="courses" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SH
              eyebrow="Foundational Education"
              title="Core Academic Programs"
              body="Structured academic curriculums designed to build strategic thinking, service operational excellence, and leadership competencies."
            />
          </div>

          {/* Featured Courses: Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 reveal">
            {educationData.courses.slice(0, 2).map((course, i) => (
              <div
                key={course.id}
                className="img-card group cursor-pointer relative h-96 rounded-3xl overflow-hidden shadow-sm border border-slate-100/50"
                onClick={() => alert(`Registration details for ${course.title}`)}
              >
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-105" />
                <div className="img-card-overlay bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/30 to-[#0A2540]/5" />
                <div className="absolute top-5 left-5 z-10">
                  <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-xl border border-white/15">
                    Course {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h3 className="text-white text-xl font-bold uppercase tracking-wide leading-tight mb-2">{course.title}</h3>
                  <p className="text-white/80 text-[13px] font-semibold mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex items-center gap-1.5 text-white/90 text-[12px] font-black uppercase tracking-wider group-hover:text-amber-300 transition-colors">
                    View Syllabus <IoArrowForwardOutline className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Core Academic List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {educationData.courses.slice(2).map((course, i) => (
              <div key={course.id} className={`reveal reveal-delay-${i + 1}`}>
                <div
                  className="img-card group cursor-pointer relative h-72 rounded-3xl overflow-hidden shadow-xs border border-slate-150"
                  onClick={() => alert(`Registration details for ${course.title}`)}
                >
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-105" />
                  <div className="img-card-overlay bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/35 to-transparent" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-xl border border-white/15">
                      Course {String(i + 3).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-10">
                    <h3 className="text-white text-[15px] font-bold uppercase tracking-wide leading-tight mb-2.5">{course.title}</h3>
                    <div className="flex items-center gap-1 text-white/80 text-[11px] font-black uppercase tracking-wider group-hover:text-amber-300 transition-colors">
                      View Syllabus <IoArrowForwardOutline className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Certified Skill Pathways (Professional Redesign) ── */}
      <section id="programs" className="py-20 bg-slate-50/50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SH
              eyebrow="Practical Competencies"
              title="Certified Skill Pathways"
              body="Specialized, competency-based programs focused on hands-on practical skills, aligned to standard hospitality and travel roles."
            />
          </div>

          {/* Grouped Career Tracks Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SKILL_TRACKS.map((track, ti) => (
              <div key={ti} className="flex flex-col bg-white rounded-3xl border border-slate-200/60 shadow-sm p-6 reveal">
                {/* Track Header */}
                <div className="border-b border-slate-100 pb-5 mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center">
                      <IoIcons.IoRibbon className="w-4 h-4" />
                    </div>
                    <h3 className="text-[15px] font-black text-[#0A2540] uppercase tracking-wider leading-none">
                      {track.title}
                    </h3>
                  </div>
                  <p className="text-[12px] text-slate-500 font-semibold leading-relaxed">
                    {track.description}
                  </p>
                </div>

                {/* Programs List */}
                <div className="flex-grow space-y-4">
                  {track.programIds.map(pid => {
                    const prog = skillPrograms.find(p => p.id === pid);
                    if (!prog) return null;
                    const Icon = IoIcons[prog.icon] || IoBookmarkOutline;
                    return (
                      <div
                        key={prog.id}
                        className="group flex items-start gap-3 p-3.5 rounded-2xl border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all duration-200"
                      >
                        <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-500 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-all duration-200">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-[13.5px] font-black text-slate-700 leading-snug group-hover:text-blue-600 transition-colors uppercase tracking-wide">
                            {prog.title}
                          </h4>
                          <span className="inline-flex items-center gap-1 mt-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">
                            <IoCheckmarkCircle className="w-3 h-3" /> Certified Code
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Visual Showcase ── */}
      <section className="py-20 bg-white overflow-hidden border-t border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SH eyebrow="Visual Portfolio" title="Practical Training Showcase" />
          </div>
          <div className="h-scroll-strip reveal">
            {progImages.map((img, i) => (
              <div key={i} className="img-card group flex-shrink-0 rounded-3xl" style={{ width: '280px', height: '200px' }}>
                <img src={img} alt={`Program ${i + 1}`} className="rounded-3xl" />
                <div className="img-card-overlay bg-[#0A2540]/40" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="bg-white/95 text-[#0A2540] text-[9.5px] font-black uppercase tracking-wider px-2.5 py-1.5 rounded-lg border border-white/20">
                    {skillPrograms[i]?.title.split(' ').slice(0, 3).join(' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Premium Accreditation Badge Section ── */}
      <section className="py-16 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <div className="flex items-center justify-center gap-2 mb-3">
            <IoShieldCheckmarkOutline className="w-5 h-5 text-blue-600" />
            <span className="text-[11px] font-black text-[#0A2540] uppercase tracking-widest">Legitimacy & Standards</span>
          </div>
          <h3 className="text-lg font-black text-[#0A2540] uppercase tracking-wider mb-2">Accredited Training Framework</h3>
          <p className="text-[13px] text-slate-500 font-semibold max-w-lg mx-auto mb-8">
            All programs are structured in alignment with National Skill Qualifications Framework (NSQF) parameters.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-60 hover:opacity-85 transition-opacity duration-300">
            <span className="text-[14px] font-extrabold text-[#0A2540] tracking-widest border border-slate-300 px-4 py-2 rounded-xl">NSQF ALIGNED</span>
            <span className="text-[14px] font-extrabold text-[#0A2540] tracking-widest border border-slate-300 px-4 py-2 rounded-xl">VTC ACADEMIC COUNCIL</span>
            <span className="text-[14px] font-extrabold text-[#0A2540] tracking-widest border border-slate-300 px-4 py-2 rounded-xl">INDUSTRY CERTIFIED</span>
          </div>
        </div>
      </section>

      {/* ── Section 5: Action Band ── */}
      <section className="section-band py-24 relative overflow-hidden">
        <div className="section-band-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523050874724-358b67a3ed3b?w=1920&h=600&fit=crop")' }} />
        <div className="absolute inset-0 bg-[#0A2540]/90" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 text-center reveal">
          <span className="inline-block text-[11px] font-black uppercase tracking-[0.18em] text-amber-400 mb-4">Educational Enrollment</span>
          <h2 className="text-3xl md:text-4.5xl font-black uppercase tracking-wider text-white mb-5">Advance Your Career in Tourism</h2>
          <p className="text-white/80 text-[14px] font-semibold max-w-xl mx-auto mb-10 leading-relaxed">
            Register in our verified academic courses or specialized skill tracks to receive professional certifications recognized across tourism boards.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/membership" className="flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition-all active:scale-95">
              Apply for Enrollment <IoArrowForwardOutline className="w-4 h-4" />
            </Link>
            <Link to="/upskilling" className="flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white text-xs font-black uppercase tracking-wider rounded-xl hover:bg-white hover:text-[#0A2540] transition-all duration-200">
              RPL Upskilling
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;
