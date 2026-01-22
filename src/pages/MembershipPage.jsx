import { useState, useEffect, useRef } from 'react';
import Button from '../components/ui/Button';

const MembershipPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [membersVisible, setMembersVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [activeCategory, setActiveCategory] = useState('academic'); // Filter for members display
  
  const membersRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    // Common fields
    category: '',
    
    // Academic fields
    organizationName: '',
    organizationAddress: '',
    state: '',
    decisionMakerName: '',
    decisionMakerContact: '',
    decisionMakerEmail: '',
    additionalInfo: '',
    
    // Industry fields
    companyName: '',
    subSector: '',
    headOfficeAddress: '',
    partneringInterest: '',
    decisionMakerDesignation: '',
    
    // Stakeholder fields
    stakeholderType: '',
    stakeholderName: '',
    stakeholderAddress: ''
  });

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ];

  const subSectors = [
    'Hospitality & Hotels',
    'Travel & Tourism',
    'Food & Beverage',
    'Adventure Tourism',
    'Wellness & Spa',
    'Tours & Travel Agencies',
    'Transportation Services',
    'Event Management',
    'Heritage & Cultural Tourism',
    'Eco-Tourism',
    'Other'
  ];

  const partneringOptions = [
    'Skill Development & Training',
    'Employment Generation',
    'CSR Activities',
    'Infrastructure Development',
    'Marketing & Promotion',
    'Research & Development',
    'Technology Integration',
    'Sustainable Tourism Initiatives',
    'Other'
  ];

  const stakeholderTypes = [
    'Government Body',
    'NGO/NPO',
    'Industry Association',
    'Research Institution',
    'Media & Publications',
    'Technology Provider',
    'Consultant',
    'Other'
  ];

  useEffect(() => {
    setHeroVisible(true);

    const observers = [
      { ref: membersRef, setter: setMembersVisible },
      { ref: formRef, setter: setFormVisible }
    ];

    const observerInstances = observers.map(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
          }
        },
        { threshold: 0.2 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observerInstances.forEach(observer => observer.disconnect());
    };
  }, []);

  const membershipCategories = [
    {
      id: 'academic',
      title: 'Academic Members',
      icon: '🎓',
      description: 'Educational institutions, universities, and training centers partnering in tourism education and skill development',
      color: 'from-blue-500 to-blue-600',
      members: [
        { logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop', name: 'Delhi Institute of Tourism', partner: 'Tourism Training Partner' },
        { logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop', name: 'National Hospitality Academy', partner: 'Skill Development Partner' },
        { logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop', name: 'Institute of Hotel Management', partner: 'Education Partner' }
      ]
    },
    {
      id: 'stakeholder',
      title: 'Stakeholder Members',
      icon: '🤝',
      description: 'Government bodies, associations, and organizations working towards tourism development and promotion',
      color: 'from-green-500 to-green-600',
      members: [
        { logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop', name: 'Tourism Development Board', partner: 'Government Partner' },
        { logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop', name: 'Heritage Conservation Society', partner: 'Conservation Partner' },
        { logo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=200&fit=crop', name: 'Travel Association of India', partner: 'Industry Association' }
      ]
    },
    {
      id: 'industry',
      title: 'Industry Members',
      icon: '🏢',
      description: 'Hotels, resorts, travel companies, and tourism businesses contributing to industry growth',
      color: 'from-purple-500 to-purple-600',
      members: [
        { logo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=200&fit=crop', name: 'Grand Heritage Hotels', partner: 'Hospitality Partner' },
        { logo: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=200&h=200&fit=crop', name: 'Wanderlust Travels', partner: 'Travel Partner' },
        { logo: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=200&h=200&fit=crop', name: 'Wellness Retreats Ltd', partner: 'Wellness Partner' }
      ]
    }
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFormData({ ...formData, category });
    setShowApplicationForm(true);
    setFormVisible(true); // Trigger form visibility immediately
    // Scroll to form with longer delay to ensure it's rendered
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your application! We will review it and get back to you soon.');
    // Reset form
    setFormData({
      category: '',
      organizationName: '',
      organizationAddress: '',
      state: '',
      decisionMakerName: '',
      decisionMakerContact: '',
      decisionMakerEmail: '',
      additionalInfo: '',
      companyName: '',
      subSector: '',
      headOfficeAddress: '',
      partneringInterest: '',
      decisionMakerDesignation: '',
      stakeholderType: '',
      stakeholderName: '',
      stakeholderAddress: ''
    });
    setShowApplicationForm(false);
    setSelectedCategory('');
  };

  const renderFormFields = () => {
    switch (selectedCategory) {
      case 'academic':
        return (
          <>
            <div>
              <label htmlFor="organizationName" className="block text-sm font-semibold text-gray-700 mb-2">
                Name of Organization *
              </label>
              <input
                type="text"
                id="organizationName"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                placeholder="Enter organization name"
              />
            </div>

            <div>
              <label htmlFor="organizationAddress" className="block text-sm font-semibold text-gray-700 mb-2">
                Address of Organization *
              </label>
              <textarea
                id="organizationAddress"
                name="organizationAddress"
                value={formData.organizationAddress}
                onChange={handleInputChange}
                required
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white resize-none"
                placeholder="Enter complete address"
              ></textarea>
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                Select the state you are operating in *
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
              >
                <option value="">Select State</option>
                {indianStates.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="decisionMakerName" className="block text-sm font-semibold text-gray-700 mb-2">
                Name of the Decision Maker *
              </label>
              <input
                type="text"
                id="decisionMakerName"
                name="decisionMakerName"
                value={formData.decisionMakerName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                placeholder="Enter decision maker's name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="decisionMakerContact" className="block text-sm font-semibold text-gray-700 mb-2">
                  Contact number of the Decision Maker *
                </label>
                <input
                  type="tel"
                  id="decisionMakerContact"
                  name="decisionMakerContact"
                  value={formData.decisionMakerContact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                  placeholder="+91 12345 67890"
                />
              </div>

              <div>
                <label htmlFor="decisionMakerEmail" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Id of the Decision Maker *
                </label>
                <input
                  type="email"
                  id="decisionMakerEmail"
                  name="decisionMakerEmail"
                  value={formData.decisionMakerEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white resize-none"
                placeholder="Any additional information you'd like to share"
              ></textarea>
            </div>
          </>
        );

      case 'industry':
        return (
          <>
            <div>
              <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                Name of the Company *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                placeholder="Enter company name"
              />
            </div>

            <div>
              <label htmlFor="subSector" className="block text-sm font-semibold text-gray-700 mb-2">
                Sub Sector *
              </label>
              <select
                id="subSector"
                name="subSector"
                value={formData.subSector}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
              >
                <option value="">Select Sub Sector</option>
                {subSectors.map((sector, index) => (
                  <option key={index} value={sector}>{sector}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="headOfficeAddress" className="block text-sm font-semibold text-gray-700 mb-2">
                Address of the Head Office *
              </label>
              <textarea
                id="headOfficeAddress"
                name="headOfficeAddress"
                value={formData.headOfficeAddress}
                onChange={handleInputChange}
                required
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white resize-none"
                placeholder="Enter head office address"
              ></textarea>
            </div>

            <div>
              <label htmlFor="partneringInterest" className="block text-sm font-semibold text-gray-700 mb-2">
                Interested for Partnering in *
              </label>
              <select
                id="partneringInterest"
                name="partneringInterest"
                value={formData.partneringInterest}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
              >
                <option value="">Select Partnering Interest</option>
                {partneringOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="decisionMakerName" className="block text-sm font-semibold text-gray-700 mb-2">
                Name of the Decision Maker *
              </label>
              <input
                type="text"
                id="decisionMakerName"
                name="decisionMakerName"
                value={formData.decisionMakerName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                placeholder="Enter decision maker's name"
              />
            </div>

            <div>
              <label htmlFor="decisionMakerDesignation" className="block text-sm font-semibold text-gray-700 mb-2">
                Designation of the Decision Maker *
              </label>
              <input
                type="text"
                id="decisionMakerDesignation"
                name="decisionMakerDesignation"
                value={formData.decisionMakerDesignation}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                placeholder="e.g., CEO, Director, Manager"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="decisionMakerContact" className="block text-sm font-semibold text-gray-700 mb-2">
                  Contact number of the Decision Maker *
                </label>
                <input
                  type="tel"
                  id="decisionMakerContact"
                  name="decisionMakerContact"
                  value={formData.decisionMakerContact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                  placeholder="+91 12345 67890"
                />
              </div>

              <div>
                <label htmlFor="decisionMakerEmail" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address of the Decision Maker *
                </label>
                <input
                  type="email"
                  id="decisionMakerEmail"
                  name="decisionMakerEmail"
                  value={formData.decisionMakerEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white resize-none"
                placeholder="Any additional information you'd like to share"
              ></textarea>
            </div>
          </>
        );

      case 'stakeholder':
        return (
          <>
            <div>
              <label htmlFor="stakeholderType" className="block text-sm font-semibold text-gray-700 mb-2">
                Stakeholder Type *
              </label>
              <select
                id="stakeholderType"
                name="stakeholderType"
                value={formData.stakeholderType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
              >
                <option value="">Select Stakeholder Type</option>
                {stakeholderTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="stakeholderName" className="block text-sm font-semibold text-gray-700 mb-2">
                Name of Organization *
              </label>
              <input
                type="text"
                id="stakeholderName"
                name="stakeholderName"
                value={formData.stakeholderName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                placeholder="Enter organization name"
              />
            </div>

            <div>
              <label htmlFor="stakeholderAddress" className="block text-sm font-semibold text-gray-700 mb-2">
                Address of Organization *
              </label>
              <textarea
                id="stakeholderAddress"
                name="stakeholderAddress"
                value={formData.stakeholderAddress}
                onChange={handleInputChange}
                required
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white resize-none"
                placeholder="Enter complete address"
              ></textarea>
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                Select the state you are operating in *
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
              >
                <option value="">Select State</option>
                {indianStates.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="decisionMakerName" className="block text-sm font-semibold text-gray-700 mb-2">
                Name of the Decision Maker *
              </label>
              <input
                type="text"
                id="decisionMakerName"
                name="decisionMakerName"
                value={formData.decisionMakerName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                placeholder="Enter decision maker's name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="decisionMakerContact" className="block text-sm font-semibold text-gray-700 mb-2">
                  Contact number of the Decision Maker *
                </label>
                <input
                  type="tel"
                  id="decisionMakerContact"
                  name="decisionMakerContact"
                  value={formData.decisionMakerContact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                  placeholder="+91 12345 67890"
                />
              </div>

              <div>
                <label htmlFor="decisionMakerEmail" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Id of the Decision Maker *
                </label>
                <input
                  type="email"
                  id="decisionMakerEmail"
                  name="decisionMakerEmail"
                  value={formData.decisionMakerEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white resize-none"
                placeholder="Any additional information you'd like to share"
              ></textarea>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary-300/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-300/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-ping"></div>
        </div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop&crop=center)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        
        <div className="relative z-10 text-center text-white section-container">
          <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl max-w-5xl mx-auto transform transition-all duration-1000 ${
            heroVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
          }`}>
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg transform transition-all duration-1200 delay-300 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Membership
              <span className="block text-accent-300 drop-shadow-2xl">
                Join Our Growing Community
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto drop-shadow-md opacity-90 leading-relaxed transform transition-all duration-1200 delay-500 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Be part of a vibrant network of tourism professionals, institutions, and organizations shaping the future of tourism in India.
            </p>
          </div>
        </div>
      </section>

      {/* Active Members Section */}
      <section ref={membersRef} className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${
              membersVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Active Members
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto mb-8 transform transition-all duration-1000 delay-300 ${
              membersVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Our diverse membership includes leading institutions, stakeholders, and industry partners
            </p>

            {/* Category Filter Buttons */}
            <div className={`flex flex-wrap justify-center gap-4 transform transition-all duration-1000 delay-500 ${
              membersVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {membershipCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-xl`
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-lg border-2 border-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Display Selected Category Members */}
          {membershipCategories
            .filter(cat => cat.id === activeCategory)
            .map((category, catIndex) => (
              <div key={category.id} className={`transform transition-all duration-1000 ${
                membersVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`} style={{ transitionDelay: '700ms' }}>
                <div className={`bg-gradient-to-r ${category.color} rounded-2xl p-6 mb-8 text-white`}>
                  <div className="flex items-center">
                    <span className="text-5xl mr-4">{category.icon}</span>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{category.title}</h3>
                      <p className="text-white/90">{category.description}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.members.map((member, memIndex) => (
                    <div
                      key={memIndex}
                      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                        membersVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                      }`}
                      style={{ transitionDelay: `${800 + memIndex * 100}ms` }}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 shadow-lg">
                          <img 
                            src={member.logo} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                        <p className={`text-sm font-medium bg-gradient-to-r ${category.color} text-transparent bg-clip-text`}>
                          {member.partner}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Become a Member CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-500">
        <div className="section-container text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              We Invite You to Become Our Member
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join our community and contribute to the growth of tourism and hospitality sector
            </p>
            
            {!showApplicationForm && (
              <div>
                <p className="text-lg text-white/90 mb-6">Select your membership category:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => handleCategorySelect('academic')}
                    className="bg-white text-primary-600 hover:bg-primary-100 border-2 border-white transform hover:scale-105 shadow-xl font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
                  >
                    🎓 Academic
                  </button>
                  <button
                    onClick={() => handleCategorySelect('stakeholder')}
                    className="bg-white text-primary-600 hover:bg-primary-100 border-2 border-white transform hover:scale-105 shadow-xl font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
                  >
                    🤝 Stakeholder
                  </button>
                  <button
                    onClick={() => handleCategorySelect('industry')}
                    className="bg-white text-primary-600 hover:bg-primary-100 border-2 border-white transform hover:scale-105 shadow-xl font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
                  >
                    🏢 Industry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      {showApplicationForm && (
        <section ref={formRef} className="py-20 bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className={`bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-200 transform transition-all duration-1000 ${
                formVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    {selectedCategory === 'academic' && '🎓 Academic Membership Application'}
                    {selectedCategory === 'stakeholder' && '🤝 Stakeholder Membership Application'}
                    {selectedCategory === 'industry' && '🏢 Industry Membership Application'}
                  </h2>
                  <button
                    onClick={() => {
                      setShowApplicationForm(false);
                      setSelectedCategory('');
                    }}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <i className="fas fa-times text-2xl"></i>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {renderFormFields()}

                  <div className="flex gap-4 pt-6">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-primary-700 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Submit Application
                      <i className="fas fa-paper-plane ml-2"></i>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowApplicationForm(false);
                        setSelectedCategory('');
                      }}
                      className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MembershipPage;
