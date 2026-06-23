import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import {
  IoArrowForwardOutline, IoSchoolOutline, IoBriefcaseOutline,
  IoBusinessOutline, IoPeopleOutline, IoCheckmarkCircle,
  IoPersonOutline, IoCallOutline, IoMailOutline,
  IoLocationOutline, IoDocumentTextOutline, IoLayersOutline,
  IoRibbonOutline, IoStarOutline, IoShieldCheckmarkOutline,
  IoConstructOutline, IoChevronDown
} from 'react-icons/io5';

/* ─── Indian states ─── */
const INDIAN_STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana',
  'Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur',
  'Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu',
  'Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Delhi','Chandigarh',
  'Puducherry','Jammu & Kashmir','Ladakh'
];

const CONSTITUTIONS = ['Proprietorship','Partnership','LLP','Pvt Ltd','Public Ltd','Trust','Society','Section 8 Company','Government Body','Other'];
const ACTIVITIES = ['Skill Training','Hospitality Training','Tourism Education','Culinary Arts','Wellness & AYUSH','Travel & Tour Operations','Hotel Management','Others'];
const TEXTILE_SECTORS = ['Spinning','Weaving','Processing','Garments','Home Textiles','Technical Textiles','Fibre Production','Fashion & Design','Other'];
const PARTNERING_INTERESTS = ['Skill Development','Employment Linkages','CSR Partnership','Technology Collaboration','Research & Innovation','Investment','Supply Chain Integration','Other'];

/* ─── Animated counter ─── */
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

/* ─── Reveal on scroll ─── */
const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (e) => e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); }),
      { threshold: 0.07 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
};

/* ─── Section Heading ─── */
const SH = ({ eyebrow, title, body, light = false, center = true }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    {eyebrow && <span className={`inline-block text-[11px] font-bold uppercase tracking-[0.18em] mb-3 ${light ? 'text-amber-300' : 'text-secondary'}`}>{eyebrow}</span>}
    <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? 'text-white' : 'text-gray-dark'}`}>{title}</h2>
    <div className={`h-0.5 w-10 rounded-full mt-4 ${center ? 'mx-auto' : ''} ${light ? 'bg-amber-400' : 'bg-accent'}`} />
    {body && <p className={`mt-5 text-[14px] leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/75' : 'text-gray-mid'}`}>{body}</p>}
  </div>
);

/* ─── Custom Select ─── */
const SelectField = ({ label, name, value, onChange, options, placeholder, icon: Icon, accentColor }) => (
  <div className="group/field">
    <label className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1.5 group-focus-within/field:text-secondary transition-colors duration-150">
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {label}
    </label>
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        required
        className="form-input appearance-none pr-10 cursor-pointer"
        style={{ '--ring-color': accentColor }}
      >
        <option value="" disabled>{placeholder || 'Select...'}</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

/* ─── Input Field ─── */
const InputField = ({ label, name, value, onChange, type = 'text', placeholder, icon: Icon, required = true }) => (
  <div className="group/field">
    <label className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1.5 group-focus-within/field:text-secondary transition-colors duration-150">
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="form-input"
    />
  </div>
);

/* ─── Textarea Field ─── */
const TextareaField = ({ label, name, value, onChange, placeholder, icon: Icon, rows = 3, required = false }) => (
  <div className="group/field">
    <label className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1.5 group-focus-within/field:text-secondary transition-colors duration-150">
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {label}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      required={required}
      placeholder={placeholder}
      className="form-input resize-none"
    />
  </div>
);

/* ─── Form Section Divider ─── */
const FormSectionTitle = ({ icon: Icon, title, subtitle, accentColor = '#2563EB' }) => (
  <div className="flex items-center gap-3 mb-5 mt-2">
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
      style={{ backgroundColor: `${accentColor}12`, color: accentColor }}
    >
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="text-[15px] font-bold text-gray-dark leading-tight">{title}</h4>
      {subtitle && <p className="text-[11px] text-gray-mid mt-0.5">{subtitle}</p>}
    </div>
  </div>
);

/* ─── Category definitions ─── */
const CATEGORIES = [
  {
    id: 'academic',
    label: 'Partner as Academic',
    shortLabel: 'Academic',
    Icon: IoSchoolOutline,
    color: '#7C3AED',
    gradient: 'from-violet-500 to-purple-600',
    bgLight: 'bg-violet-50',
    description: 'Colleges, universities & training institutes',
  },
  {
    id: 'stakeholder',
    label: 'Partner as Stakeholder',
    shortLabel: 'Stakeholder',
    Icon: IoPeopleOutline,
    color: '#0891B2',
    gradient: 'from-cyan-500 to-teal-600',
    bgLight: 'bg-cyan-50',
    description: 'Organizations & bodies in tourism value chain',
  },
  {
    id: 'industry',
    label: 'Partner as Industry',
    shortLabel: 'Industry',
    Icon: IoBusinessOutline,
    color: '#DC2626',
    gradient: 'from-red-500 to-rose-600',
    bgLight: 'bg-red-50',
    description: 'Companies & enterprises in textile & tourism',
  },
];

/* ═══════════════════════════════════════════════════════════
   ACADEMIC FORM
═══════════════════════════════════════════════════════════ */
const AcademicForm = ({ formData, handleChange, accentColor }) => {
  const [entityType, setEntityType] = useState('training');

  return (
    <>
      {/* Entity Type Selector */}
      <FormSectionTitle
        icon={IoLayersOutline}
        title="Select Academic Entity Type"
        accentColor={accentColor}
      />
      <div className="grid grid-cols-2 gap-3 mb-8">
        {[
          { id: 'training', label: 'Training Institute', icon: IoConstructOutline },
          { id: 'college', label: 'College / University', icon: IoSchoolOutline },
        ].map(({ id, label, icon: BtnIcon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setEntityType(id)}
            className={`relative flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-250 cursor-pointer group ${
              entityType === id
                ? 'border-violet-500 bg-violet-50/60 shadow-md shadow-violet-100'
                : 'border-gray-200 bg-white hover:border-violet-300 hover:bg-violet-50/30'
            }`}
          >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
              entityType === id
                ? 'bg-violet-500 text-white shadow-sm'
                : 'bg-gray-100 text-gray-400 group-hover:bg-violet-100 group-hover:text-violet-500'
            }`}>
              <BtnIcon className="w-4.5 h-4.5" />
            </div>
            <span className={`text-[13px] font-semibold transition-colors duration-150 ${
              entityType === id ? 'text-violet-700' : 'text-gray-600 group-hover:text-violet-600'
            }`}>{label}</span>
            {entityType === id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-2 right-2"
              >
                <IoCheckmarkCircle className="w-5 h-5 text-violet-500" />
              </motion.div>
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={entityType}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent mb-6" />

          {entityType === 'training' ? (
            /* ── Training Institute Fields ── */
            <>
              <FormSectionTitle
                icon={IoConstructOutline}
                title="Training Institute Details"
                accentColor={accentColor}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <InputField label="Name of the Organization *" name="orgName" value={formData.orgName} onChange={handleChange} placeholder="Organization Name" icon={IoBusinessOutline} />
                <SelectField label="State of Operation *" name="state" value={formData.state} onChange={handleChange} options={INDIAN_STATES} placeholder="Select State" icon={IoLocationOutline} accentColor={accentColor} />
              </div>
              <div className="mb-6">
                <InputField label="Address of the Organization (HO) *" name="address" value={formData.address} onChange={handleChange} placeholder="Full address of Head Office" icon={IoLocationOutline} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <SelectField label="Constitution of the Organisation *" name="constitution" value={formData.constitution} onChange={handleChange} options={CONSTITUTIONS} placeholder="Select Constitution" icon={IoDocumentTextOutline} accentColor={accentColor} />
                <SelectField label="Line of Business Activity *" name="activity" value={formData.activity} onChange={handleChange} options={ACTIVITIES} placeholder="Select Activity" icon={IoBriefcaseOutline} accentColor={accentColor} />
              </div>
            </>
          ) : (
            /* ── College/University Fields ── */
            <>
              <FormSectionTitle
                icon={IoSchoolOutline}
                title="College/University Details"
                accentColor={accentColor}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <InputField label="Name of the College/University *" name="orgName" value={formData.orgName} onChange={handleChange} placeholder="Institution Name" icon={IoSchoolOutline} />
                <SelectField label="State of Operation *" name="state" value={formData.state} onChange={handleChange} options={INDIAN_STATES} placeholder="Select State" icon={IoLocationOutline} accentColor={accentColor} />
              </div>
              <div className="mb-6">
                <InputField label="Address of the College/University *" name="address" value={formData.address} onChange={handleChange} placeholder="Full campus address" icon={IoLocationOutline} />
              </div>
            </>
          )}

          {/* Decision Maker (common) */}
          <div className="h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent mb-6" />
          <FormSectionTitle
            icon={IoPersonOutline}
            title="The Decision Maker"
            accentColor={accentColor}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <InputField label="Name *" name="contactPerson" value={formData.contactPerson} onChange={handleChange} placeholder="Full Name" icon={IoPersonOutline} />
            <InputField label="Contact Number *" name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 XXXXX XXXXX" icon={IoCallOutline} />
            <InputField label="Email ID *" name="email" value={formData.email} onChange={handleChange} type="email" placeholder={entityType === 'training' ? 'email@organization.org' : 'registrar@university.edu.in'} icon={IoMailOutline} />
          </div>

          {/* Additional Info */}
          <div className="h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent mb-6" />
          <FormSectionTitle
            icon={IoDocumentTextOutline}
            title="Additional Information"
            accentColor={accentColor}
          />
          <TextareaField
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your institute's mission..."
            rows={4}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

/* ═══════════════════════════════════════════════════════════
   STAKEHOLDER FORM
═══════════════════════════════════════════════════════════ */
const StakeholderForm = ({ formData, handleChange, accentColor }) => (
  <>
    <FormSectionTitle
      icon={IoPeopleOutline}
      title="Stakeholder Profile"
      accentColor={accentColor}
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <InputField label="Organization/Body Name *" name="orgName" value={formData.orgName} onChange={handleChange} placeholder="Stakeholder Name" icon={IoBusinessOutline} />
      <SelectField label="State *" name="state" value={formData.state} onChange={handleChange} options={INDIAN_STATES} placeholder="Select State" icon={IoLocationOutline} accentColor={accentColor} />
    </div>
    <div className="mb-6">
      <InputField label="Official Address *" name="address" value={formData.address} onChange={handleChange} placeholder="Full official address" icon={IoLocationOutline} />
    </div>

    <div className="h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent mb-6" />
    <FormSectionTitle
      icon={IoPersonOutline}
      title="Contact Person"
      accentColor={accentColor}
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <InputField label="Name *" name="contactPerson" value={formData.contactPerson} onChange={handleChange} placeholder="Full Name" icon={IoPersonOutline} />
      <InputField label="Contact Number *" name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 XXXXX XXXXX" icon={IoCallOutline} />
      <InputField label="Email ID *" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="contact@stakeholder.org" icon={IoMailOutline} />
    </div>

    <div className="h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent mb-6" />
    <FormSectionTitle
      icon={IoDocumentTextOutline}
      title="Purpose of Partnership"
      accentColor={accentColor}
    />
    <TextareaField
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Describe your interest in the textile value chain..."
      rows={4}
    />
  </>
);

/* ═══════════════════════════════════════════════════════════
   INDUSTRY FORM
═══════════════════════════════════════════════════════════ */
const IndustryForm = ({ formData, handleChange, accentColor }) => (
  <>
    <FormSectionTitle
      icon={IoBusinessOutline}
      title="Company Details"
      accentColor={accentColor}
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <InputField label="Name of the Company *" name="orgName" value={formData.orgName} onChange={handleChange} placeholder="Enterprise Name" icon={IoBusinessOutline} />
      <SelectField label="Textile Sub Sector *" name="subSector" value={formData.subSector} onChange={handleChange} options={TEXTILE_SECTORS} placeholder="Select Sub Sector" icon={IoLayersOutline} accentColor={accentColor} />
    </div>
    <div className="mb-6">
      <InputField label="Address of the Head Office *" name="address" value={formData.address} onChange={handleChange} placeholder="Full HQ address" icon={IoLocationOutline} />
    </div>
    <div className="mb-6">
      <SelectField label="Interested for Partnering in *" name="partneringInterest" value={formData.partneringInterest} onChange={handleChange} options={PARTNERING_INTERESTS} placeholder="Select Partnering Interests" icon={IoStarOutline} accentColor={accentColor} />
    </div>

    <div className="h-px bg-gradient-to-r from-transparent via-red-200 to-transparent mb-6" />
    <FormSectionTitle
      icon={IoPersonOutline}
      title="The Decision Maker"
      accentColor={accentColor}
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <InputField label="Name *" name="contactPerson" value={formData.contactPerson} onChange={handleChange} placeholder="Full Name" icon={IoPersonOutline} />
      <InputField label="Designation *" name="designation" value={formData.designation} onChange={handleChange} placeholder="e.g. Managing Director" icon={IoRibbonOutline} />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <InputField label="Contact Number *" name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 XXXXX XXXXX" icon={IoCallOutline} />
      <InputField label="Email Address *" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="business@company.com" icon={IoMailOutline} />
    </div>

    <div className="h-px bg-gradient-to-r from-transparent via-red-200 to-transparent mb-6" />
    <FormSectionTitle
      icon={IoDocumentTextOutline}
      title="Additional Information"
      accentColor={accentColor}
    />
    <TextareaField
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Share your industry scale or specific needs..."
      rows={4}
    />
  </>
);

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════ */
const MembershipPage = () => {
  useReveal();
  const [activeTab, setActiveTab] = useState('training');
  const [activeCategory, setActiveCategory] = useState('academic');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    orgName: '', address: '', contactPerson: '', email: '', phone: '',
    state: '', city: '', message: '', constitution: '', activity: '',
    subSector: '', partneringInterest: '', designation: ''
  });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        orgName: '', address: '', contactPerson: '', email: '', phone: '',
        state: '', city: '', message: '', constitution: '', activity: '',
        subSector: '', partneringInterest: '', designation: ''
      });
    }, 3000);
  };

  const currentCat = CATEGORIES.find(c => c.id === activeCategory);

  const memberData = {
    training:   [
      { name: 'National Skill Academy', city: 'Delhi', type: 'Training Partner' },
      { name: 'Apex Skill Ventures', city: 'Mumbai', type: 'Training Partner' },
    ],
    colleges:   [
      { name: 'Institute of Hotel Management', city: 'Shimla', type: 'Academic' },
      { name: 'Vibrant Tourism College', city: 'Goa', type: 'Academic' },
    ],
    industries: [
      { name: 'Grand Horizon Hotels', city: 'Bengaluru', type: 'Industry Partner' },
      { name: 'Nomad Travels & Logistics', city: 'Kochi', type: 'Industry Partner' },
    ],
  };

  const tabMeta = {
    training:   { label: 'Training Partners',       Icon: IoSchoolOutline },
    colleges:   { label: 'Colleges & Universities', Icon: IoBriefcaseOutline },
    industries: { label: 'Industry Partners',       Icon: IoBusinessOutline },
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <HeroSection
        badge="Alliance & Growth"
        title="VTC Membership Network"
        subtitle="Empowering the Industry Together"
        description="Join an elite tier of academic institutions, stakeholders, and industrial hospitality powerhouses building sustainable operations."
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
              { value: '500', suffix: '+', label: 'Members',  Icon: IoPeopleOutline },
              { value: '28',  suffix: '',  label: 'States',   Icon: IoBusinessOutline },
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

      {/* ═══════════════════════════════════════════════════════
          APPLICATION FORM — fully redesigned
      ═══════════════════════════════════════════════════════ */}
      <section id="form-section" className="py-20 bg-surface">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal"><SH eyebrow="Apply" title="Membership Application" body="Choose your partnership category and fill in the details below to join our growing network." /></div>

          {/* Category selector cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto mb-12 reveal">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => { setActiveCategory(cat.id); setSubmitted(false); }}
                  className={`relative p-6 rounded-2xl border-2 text-center transition-all duration-300 cursor-pointer group overflow-hidden ${
                    isActive
                      ? 'border-transparent shadow-xl shadow-gray-200/50 scale-[1.02]'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                  style={isActive ? { borderColor: cat.color } : {}}
                >
                  {/* Active background glow */}
                  {isActive && (
                    <div
                      className="absolute inset-0 opacity-[0.06] rounded-2xl"
                      style={{ background: `radial-gradient(ellipse at center, ${cat.color}, transparent 70%)` }}
                    />
                  )}
                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${
                        isActive ? 'text-white shadow-lg' : 'text-gray-400'
                      }`}
                      style={isActive
                        ? { backgroundColor: cat.color, boxShadow: `0 8px 24px ${cat.color}30` }
                        : { backgroundColor: '#F3F4F6' }
                      }
                    >
                      <cat.Icon className="w-7 h-7" />
                    </div>
                    <h4 className={`text-[14px] font-bold mb-1 transition-colors duration-200 ${
                      isActive ? 'text-gray-dark' : 'text-gray-600'
                    }`}>{cat.shortLabel}</h4>
                    <p className="text-[11px] text-gray-mid leading-relaxed">{cat.description}</p>
                  </div>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-3 right-3"
                    >
                      <IoCheckmarkCircle className="w-6 h-6" style={{ color: cat.color }} />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Form card */}
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-2xl mx-auto"
              >
                <div className="card p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                  >
                    <IoShieldCheckmarkOutline className="w-16 h-16 mx-auto mb-4" style={{ color: currentCat.color }} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-dark mb-2">Application Submitted!</h3>
                  <p className="text-gray-mid text-[14px] max-w-sm mx-auto">
                    Thank you for applying as a <strong>{currentCat.shortLabel}</strong> partner. Our team will review your application and get in touch shortly.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl mx-auto"
              >
                <form onSubmit={handleSubmit} className="card p-0 overflow-hidden">
                  {/* Form header ribbon */}
                  <div
                    className="px-8 py-5 flex items-center gap-3"
                    style={{
                      background: `linear-gradient(135deg, ${currentCat.color}E8, ${currentCat.color}C0)`,
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <currentCat.Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-[15px] leading-tight">Membership Application</h3>
                      <p className="text-white/70 text-[11px] font-medium">{currentCat.label}</p>
                    </div>
                  </div>

                  <div className="p-8">
                    {activeCategory === 'academic' && (
                      <AcademicForm formData={formData} handleChange={handleChange} accentColor={currentCat.color} />
                    )}
                    {activeCategory === 'stakeholder' && (
                      <StakeholderForm formData={formData} handleChange={handleChange} accentColor={currentCat.color} />
                    )}
                    {activeCategory === 'industry' && (
                      <IndustryForm formData={formData} handleChange={handleChange} accentColor={currentCat.color} />
                    )}

                    {/* Actions */}
                    <div className="flex items-center gap-3 mt-8 pt-6 border-t border-gray-100">
                      <button
                        type="button"
                        onClick={() => setFormData({
                          orgName: '', address: '', contactPerson: '', email: '', phone: '',
                          state: '', city: '', message: '', constitution: '', activity: '',
                          subSector: '', partneringInterest: '', designation: ''
                        })}
                        className="px-6 py-3 text-[13px] font-semibold text-gray-mid rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 flex items-center justify-center gap-2 py-3 text-[13px] font-bold text-white rounded-xl transition-all duration-250 cursor-pointer active:scale-[0.98]"
                        style={{
                          backgroundColor: currentCat.color,
                          boxShadow: `0 8px 24px ${currentCat.color}30`,
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.transform = 'translateY(-1px)';
                          e.currentTarget.style.boxShadow = `0 12px 32px ${currentCat.color}40`;
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = `0 8px 24px ${currentCat.color}30`;
                        }}
                      >
                        Submit Application <IoArrowForwardOutline className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;
