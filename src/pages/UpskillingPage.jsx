import HeroSection from '../components/HeroSection';
import { IoCheckmarkCircleOutline, IoArrowForwardOutline,
         IoPeopleOutline, IoBriefcaseOutline } from 'react-icons/io5';
import { rplData } from '../data/mockData';

const UpskillingPage = () => (
  <div className="bg-white min-h-screen pb-20">
    <HeroSection
      badge="Career Progression"
      title="Recognition of Prior Learning (RPL)"
      subtitle="VTC Upskilling Protocols"
      description="RPL formally recognises skills and knowledge already acquired through years of work experience, elevating careers without restarting."
      imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
      primaryCta={
        <a href="/membership" className="btn-primary">
          Get Certified <IoArrowForwardOutline className="w-4 h-4" />
        </a>
      }
    />

    {/* Why RPL */}
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="section-label">Our Standards</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mt-1 mb-2">Why RPL is Crucial</h2>
            <div className="section-divider mb-5" />
            <p className="text-[14px] text-gray-mid mb-6 leading-relaxed">
              Bridging the gap between real-world expertise and formal certifications.
            </p>
            <ul className="space-y-3">
              {rplData.whyRPL.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-gray-mid">
                  <IoCheckmarkCircleOutline className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-7 bg-surface border-0">
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-box"><IoPeopleOutline className="w-5 h-5" /></div>
              <h3 className="text-base font-bold text-gray-dark">Who is RPL Tailored For?</h3>
            </div>
            <ul className="space-y-3">
              {rplData.whoRPLIsFor.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-gray-mid">
                  <IoArrowForwardOutline className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20 bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="section-label">Outcomes</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mt-1">Measurable RPL Benefits</h2>
          <div className="section-divider mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { title: 'For Employers',    Icon: IoBriefcaseOutline, points: rplData.benefits.employers    },
            { title: 'For Professionals', Icon: IoPeopleOutline,   points: rplData.benefits.professionals },
          ].map(({ title, Icon, points }, i) => (
            <div key={i} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={i === 0 ? 'icon-box' : 'icon-box-gold'}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-gray-dark">{title}</h3>
              </div>
              <ul className="space-y-2.5">
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
  </div>
);

export default UpskillingPage;
