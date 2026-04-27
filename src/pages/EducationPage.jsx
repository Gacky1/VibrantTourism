import HeroSection from '../components/HeroSection';
import { IoArrowForwardOutline, IoSchoolOutline } from 'react-icons/io5';
import { educationData } from '../data/mockData';

const EducationPage = () => (
  <div className="bg-white min-h-screen pb-20">
    <HeroSection
      badge="Tourism Education"
      title={educationData.title}
      subtitle={educationData.subtitle}
      description={educationData.introduction}
      imageUrl="https://images.unsplash.com/photo-1523050874724-358b67a3ed3b?w=1920&h=1080&fit=crop"
      primaryCta={
        <a href="/skill-education" className="btn-primary">
          View Skill Programs <IoArrowForwardOutline className="w-4 h-4" />
        </a>
      }
    />

    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-label">Foundational Learning</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mt-1">Core Academic Programs</h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.courses.map((course, i) => (
            <div key={course.id} className="card group overflow-hidden flex flex-col h-full">
              <div className="relative h-48 overflow-hidden img-zoom">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-3 left-3 tag bg-white/90 text-secondary border border-blue-100">
                  Course {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start gap-3 mb-2">
                  <div className="icon-box-sm flex-shrink-0 mt-0.5">
                    <IoSchoolOutline className="w-4 h-4" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-gray-dark leading-snug group-hover:text-secondary transition-colors duration-150">
                    {course.title}
                  </h3>
                </div>
                <p className="text-[13px] text-gray-mid leading-relaxed mb-4 pl-12 flex-grow">{course.description}</p>
                <button
                  onClick={() => alert(`Registration details for ${course.title}`)}
                  className="btn-outline-blue w-full justify-center text-xs py-2.5 mt-auto"
                >
                  View Curriculum <IoArrowForwardOutline className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <span className="section-label">Get Started</span>
        <h2 className="text-2xl font-bold text-gray-dark mt-1 mb-3">Ready to Start Learning?</h2>
        <div className="section-divider mx-auto mb-6" />
        <p className="text-[14px] text-gray-mid mb-7 max-w-xl mx-auto">
          Enroll in our certified programs and build a career in India's fastest-growing tourism sector.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/skill-education" className="btn-primary">Skill Programs</a>
          <a href="/upskilling"      className="btn-outline-blue">RPL Upskilling</a>
        </div>
      </div>
    </section>
  </div>
);

export default EducationPage;
