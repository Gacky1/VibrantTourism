import HeroSection from '../components/HeroSection';
import InfoCard    from '../components/InfoCard';
import MemberCard  from '../components/MemberCard';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { whatWeDoCards, boardMembers, sectionContent } from '../data/mockData';

const SectionHead = ({ label, title, body, center = true }) => (
  <div className={`mb-10 ${center ? 'text-center' : ''}`}>
    <span className="section-label">{label}</span>
    <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mt-1">{title}</h2>
    <div className={`section-divider ${center ? 'mx-auto' : ''}`} />
    {body && <p className="mt-5 text-[14px] text-gray-mid leading-relaxed max-w-3xl mx-auto">{body}</p>}
  </div>
);

const IndustryPage = () => (
  <div className="bg-white min-h-screen">
    <HeroSection
      badge="Industry Sector"
      title="Strengthening Tourism & Hospitality"
      subtitle="VTC for India"
      description={sectionContent.aboutContent[0]}
      imageUrl="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop"
      primaryCta={
        <a href="/membership" className="btn-primary">
          Join Network <IoArrowForwardOutline className="w-4 h-4" />
        </a>
      }
      secondaryCta={<a href="/destination" className="btn-outline">Explore Destinations</a>}
    />

    {/* About */}
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <SectionHead label="About VTC" title={sectionContent.aboutTitle} />
        {sectionContent.aboutContent.map((p, i) => (
          <p key={i} className="text-[14px] text-gray-mid leading-relaxed mb-4 max-w-3xl mx-auto">{p}</p>
        ))}
      </div>
    </section>

    {/* What We Do */}
    <section className="py-20 bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead label="Our Actions" title="What We Do" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whatWeDoCards.map((c, i) => (
            <InfoCard key={c.id} title={c.title} description={c.description} icon={c.icon} colorIndex={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="py-20 bg-primary-dark">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="section-label text-amber-400">Our Leadership</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">Governing Council</h2>
          <div className="section-divider mx-auto bg-accent" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {boardMembers.map(m => (
            <MemberCard key={m.id} name={m.name} designation={m.designation} image={m.image} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default IndustryPage;
