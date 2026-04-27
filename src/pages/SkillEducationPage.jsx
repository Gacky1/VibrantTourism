import * as IoIcons from 'react-icons/io5';
import HeroSection from '../components/HeroSection';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { skillPrograms } from '../data/mockData';

const SkillEducationPage = () => (
  <div className="bg-white min-h-screen pb-20">
    <HeroSection
      badge="Practical Competencies"
      title="Skill Education in Tourism & Hospitality"
      subtitle="Bridging Workforce Capabilities"
      description="Competency-based training programs focusing on practical, hands-on learning rather than purely academic knowledge."
      imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop"
      primaryCta={
        <a href="/upskilling" className="btn-primary">
          RPL Upskilling <IoArrowForwardOutline className="w-4 h-4" />
        </a>
      }
    />

    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-label">Certification Pathways</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mt-1">Skill Certification Programs</h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillPrograms.map((prog, i) => {
            const Icon = IoIcons[prog.icon] || IoIcons.IoBookmarkOutline;
            const boxClass = i % 2 === 0 ? 'icon-box' : 'icon-box-gold';
            return (
              <div key={prog.id} className="card p-4 flex items-center gap-4 group">
                <div className={`${boxClass} flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-gray-dark leading-snug group-hover:text-secondary transition-colors duration-150">
                    {prog.title}
                  </h3>
                  <span className="tag mt-1">Certified Program</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-primary-dark">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <span className="section-label text-amber-400">Enroll Today</span>
        <h2 className="text-2xl font-bold text-white mt-1 mb-3">
          {skillPrograms.length}+ Certified Programs Available
        </h2>
        <div className="section-divider mx-auto bg-accent mb-6" />
        <p className="text-[14px] text-slate-300 mb-7 max-w-xl mx-auto">
          Get industry-recognised certifications and boost your career in tourism & hospitality.
        </p>
        <a href="/membership" className="btn-gold">
          Enroll Now <IoArrowForwardOutline className="w-4 h-4" />
        </a>
      </div>
    </section>
  </div>
);

export default SkillEducationPage;
