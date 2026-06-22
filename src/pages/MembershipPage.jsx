import { useState, useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import { IoArrowForwardOutline, IoSchoolOutline, IoBriefcaseOutline,
         IoBusinessOutline, IoPeopleOutline } from 'react-icons/io5';

const inputClass = 'form-input';

const AnimCounter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const end = parseFloat(target);
        const step = end / (1200 / 16);
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
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
};

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

const MembershipPage = () => {
  useReveal();
  const [activeTab, setActiveTab] = useState('training');
  const [formType, setFormType]   = useState('Training Institute');
  const [formData, setFormData]   = useState({ orgName: '', address: '', contactPerson: '', email: '', phone: '', state: '', city: '', message: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Membership application submitted for ${formData.orgName || formData.contactPerson}. Thank you!`);
    setFormData({ orgName: '', address: '', contactPerson: '', email: '', phone: '', state: '', city: '', message: '' });
  };

  const memberData = {
    training:   [{ name: 'National Skill Academy', city: 'Delhi',     type: 'Training Partner'  },
                 { name: 'Apex Skill Ventures',    city: 'Mumbai',    type: 'Training Partner'  }],
    colleges:   [{ name: 'Institute of Hotel Management', city: 'Shimla', type: 'Academic'      },
                 { name: 'Vibrant Tourism College',       city: 'Goa',    type: 'Academic'      }],
    industries: [{ name: 'Grand Horizon Hotels',          city: 'Bengaluru', type: 'Industry Partner' },
                 { name: 'Nomad Travels & Logistics',     city: 'Kochi',     type: 'Industry Partner' }],
  };

  const tabMeta = {
    training:   { label: 'Training Partners',       Icon: IoSchoolOutline    },
    colleges:   { label: 'Colleges & Universities', Icon: IoBriefcaseOutline },
    industries: { label: 'Industry Partners',       Icon: IoBusinessOutline  },
  };

  const formTypes = ['Training Institute', 'Colleges / Universities', 'Industry Partner', 'Freelance Trainer'];

  return (
    <div className="bg-white min-h-screen pb-20">
      <HeroSection
        badge="Alliance & Growth"
        title="VTC Membership Network"
        subtitle="Empowering the Industry Together"
        description="Join an elite tier of academic institutions, freelancers, and industrial hospitality powerhouses building sustainable operations."
        imageUrl="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920&h=1080&fit=crop"
        primaryCta={<a href="#form-section" className="btn-primary">Apply Now <IoArrowForwardOutline className="w-4 h-4" /></a>}
        secondaryCta={<a href="#members" className="btn-outline">Our Members</a>}
      />

      {/* ── Stats band ── */}
      <section className="section-band py-16">
        <div className="section-band-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920&h=400&fit=crop")' }} />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-16 text-center">
            {[
              { value: '500', suffix: '+', label: 'Members',  Icon: IoPeopleOutline    },
              { value: '28',  suffix: '',  label: 'States',   Icon: IoBusinessOutline  },
              { value: '100', suffix: '+', label: 'Partners', Icon: IoBriefcaseOutline },
            ].map(({ value, suffix, label, Icon }, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="icon-box-gold w-12 h-12 rounded-xl group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-white"><AnimCounter target={value} suffix={suffix} /></div>
                  <div className="text-[12px] text-slate-400 uppercase tracking-wider">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Members grid ── */}
      <section id="members" className="py-20 bg-surface">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal"><SH eyebrow="Our Network" title="Network Members" /></div>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(tabMeta).map(([key, { label, Icon }]) => (
              <button key={key} onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-5 py-2.5 text-[12px] font-semibold rounded-xl border transition-all duration-200 ${
                  activeTab === key
                    ? 'bg-secondary text-white border-secondary shadow-md shadow-blue-100'
                    : 'bg-white text-gray-mid border-gray-200 hover:border-secondary hover:text-secondary hover:bg-blue-50/40'
                }`}>
                <Icon className="w-4 h-4" />{label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {memberData[activeTab].map((m, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} card p-5 flex flex-col items-center text-center group`}>
                <div className="icon-box w-12 h-12 rounded-xl mb-3 group-hover:bg-secondary group-hover:text-white group-hover:scale-110 group-hover:shadow-md transition-all duration-250">
                  {(() => { const { Icon } = tabMeta[activeTab]; return <Icon className="w-6 h-6" />; })()}
                </div>
                <h4 className="text-[14px] font-semibold text-gray-dark mb-1 group-hover:text-secondary transition-colors duration-150">{m.name}</h4>
                <p className="text-[11px] text-gray-mid mb-2">{m.city}</p>
                <span className="tag">{m.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="section-band py-20">
        <div className="section-band-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=500&fit=crop")' }} />
        <div className="absolute inset-0 bg-primary/82" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 text-center reveal">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-amber-300 mb-4">Join the Network</span>
          <h2 className="text-4xl font-bold text-white mb-5">Be Part of India's Tourism Ecosystem</h2>
          <p className="text-white/75 text-[15px] max-w-xl mx-auto mb-8 leading-relaxed">
            Connect with 500+ tourism professionals, institutions, and industry leaders across India.
          </p>
          <a href="#form-section" className="btn-gold">Apply for Membership <IoArrowForwardOutline className="w-4 h-4" /></a>
        </div>
      </section>

      {/* ── Application form ── */}
      <section id="form-section" className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal"><SH eyebrow="Apply" title="Apply for Membership" /></div>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {formTypes.map(type => (
              <button key={type} onClick={() => setFormType(type)}
                className={`px-4 py-2 text-[12px] font-semibold rounded-xl border transition-all duration-200 ${
                  formType === type
                    ? 'bg-secondary text-white border-secondary shadow-md shadow-blue-100'
                    : 'bg-white text-gray-mid border-gray-200 hover:border-secondary hover:text-secondary hover:bg-blue-50/40'
                }`}>{type}
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="card p-8 max-w-2xl mx-auto reveal">
            <h3 className="text-base font-bold text-gray-dark mb-6">Application: {formType}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {[
                { label: 'Organization / Name *', name: 'orgName',       type: 'text'  },
                { label: 'Contact Person *',       name: 'contactPerson', type: 'text'  },
                { label: 'Email Address *',        name: 'email',         type: 'email' },
                { label: 'Phone Number *',         name: 'phone',         type: 'tel'   },
                { label: 'State *',                name: 'state',         type: 'text'  },
                { label: 'City *',                 name: 'city',          type: 'text'  },
              ].map(({ label, name, type }) => (
                <div key={name} className="group/field">
                  <label className="block text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1.5 group-focus-within/field:text-secondary transition-colors duration-150">{label}</label>
                  <input type={type} name={name} value={formData[name]} onChange={handleChange} required className={inputClass} />
                </div>
              ))}
            </div>
            <div className="mb-4">
              <label className="block text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1.5">Address *</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} required className={inputClass} />
            </div>
            <div className="mb-6">
              <label className="block text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1.5">Message (Optional)</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className={`${inputClass} resize-none`} />
            </div>
            <button type="submit" className="btn-primary w-full justify-center py-3">
              Submit Application <IoArrowForwardOutline className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;
