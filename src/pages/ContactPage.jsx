import { useState, useEffect, useRef } from 'react';
import Button from '../components/ui/Button';

const ContactPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);
  
  const formRef = useRef(null);
  const detailsRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setHeroVisible(true);

    const observers = [
      {
        ref: formRef,
        setter: setFormVisible
      },
      {
        ref: detailsRef,
        setter: setDetailsVisible
      }
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Visit Us',
      details: ['Vibrant Tourism Council', '123 Tourism Street, Business District', 'New Delhi, India - 110001'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'fa-phone',
      title: 'Call Us',
      details: ['+91 11 1234 5678', '+91 98765 43210', 'Mon - Fri: 9:00 AM - 6:00 PM'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'fa-envelope',
      title: 'Email Us',
      details: ['info@vibranttourism.in', 'support@vibranttourism.in', 'We reply within 24 hours'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'fa-clock',
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const socialLinks = [
    { icon: 'fa-facebook-f', url: '#', color: 'hover:bg-blue-600' },
    { icon: 'fa-twitter', url: '#', color: 'hover:bg-sky-500' },
    { icon: 'fa-linkedin-in', url: '#', color: 'hover:bg-blue-700' },
    { icon: 'fa-instagram', url: '#', color: 'hover:bg-pink-600' },
    { icon: 'fa-youtube', url: '#', color: 'hover:bg-red-600' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary-300/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-300/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-ping"></div>
        </div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop&crop=center)'
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
              Get In Touch
              <span className="block text-accent-300 drop-shadow-2xl">
                We're Here to Help
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto drop-shadow-md opacity-90 leading-relaxed transform transition-all duration-1200 delay-500 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Have questions about our programs, services, or initiatives? Reach out to us and we'll be happy to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards Section */}
      <section ref={detailsRef} className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  detailsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mb-4 transform transition-transform duration-300 hover:scale-110`}>
                  <i className={`fas ${info.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section ref={formRef} className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 ${
              formVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'
            }`}>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-200">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-primary-700 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                    <i className="fas fa-paper-plane ml-2"></i>
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className={`space-y-8 transform transition-all duration-1000 ${
              formVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'
            }`}>
              {/* Map */}
              <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96 lg:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9770869968987!2d77.20902931508044!3d28.636065982421715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd371c7ab2df%3A0xefdfe1c1bc2e21b5!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1642095987654!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Connect With Us
                </h3>
                <p className="text-gray-600 mb-6">
                  Follow us on social media for the latest updates, news, and insights from the tourism industry.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-700 ${social.color} rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl`}
                    >
                      <i className={`fab ${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/faq" className="text-primary-600 hover:text-accent-500 font-medium transition-colors duration-300 flex items-center">
                      <i className="fas fa-question-circle mr-2"></i>
                      Frequently Asked Questions
                    </a>
                  </li>
                  <li>
                    <a href="/membership" className="text-primary-600 hover:text-accent-500 font-medium transition-colors duration-300 flex items-center">
                      <i className="fas fa-users mr-2"></i>
                      Membership Information
                    </a>
                  </li>
                  <li>
                    <a href="/skill-education" className="text-primary-600 hover:text-accent-500 font-medium transition-colors duration-300 flex items-center">
                      <i className="fas fa-graduation-cap mr-2"></i>
                      Training Programs
                    </a>
                  </li>
                  <li>
                    <a href="/employment" className="text-primary-600 hover:text-accent-500 font-medium transition-colors duration-300 flex items-center">
                      <i className="fas fa-briefcase mr-2"></i>
                      Career Opportunities
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-500">
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Have More Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our team is always ready to assist you with any inquiries about tourism, training, or partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary-600 hover:bg-primary-100 border-2 border-white transform hover:scale-105 shadow-xl font-semibold"
              >
                <i className="fas fa-phone mr-2"></i>
                Call Us Now
              </Button>
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 transform hover:scale-105 shadow-xl font-semibold"
              >
                <i className="fas fa-envelope mr-2"></i>
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
