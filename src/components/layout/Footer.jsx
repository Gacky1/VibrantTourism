import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [email, setEmail] = useState('');

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Education', href: '/education' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Cultural Tourism', href: '/cultural' },
    { name: 'Heritage Tours', href: '/heritage' },
    { name: 'Wellness Programs', href: '/wellness' },
    { name: 'Business Travel', href: '/business' },
    { name: 'Wildlife Safari', href: '/wildlife' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: faFacebook },
    { name: 'Twitter', href: '#', icon: faTwitter },
    { name: 'Instagram', href: '#', icon: faInstagram },
    { name: 'LinkedIn', href: '#', icon: faLinkedin },
    { name: 'YouTube', href: '#', icon: faYoutube },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-primary-900 to-accent-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-300 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="section-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src="/images/Logo-White-Bg.png" 
                  alt="Vibrant Tourism" 
                  className="h-16 w-auto mb-4 drop-shadow-lg"
                />
                <p className="text-gray-300 leading-relaxed mb-6">
                  Discover extraordinary experiences across culture, heritage, wellness, and adventure with India's premier tourism platform.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-accent-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Rajasthan, India</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <FontAwesomeIcon icon={faPhone} className="text-accent-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+91 12345 67890</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <FontAwesomeIcon icon={faEnvelope} className="text-accent-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">info@vibranttourism.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-accent-400 transition-all duration-300 hover:translate-x-2 inline-block group"
                    >
                      <FontAwesomeIcon icon={faArrowRight} className="group-hover:text-accent-400 transition-colors duration-300 mr-2" /> {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative">
                Our Services
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="text-gray-300 hover:text-accent-400 transition-all duration-300 hover:translate-x-2 inline-block group"
                    >
                      <FontAwesomeIcon icon={faArrowRight} className="group-hover:text-accent-400 transition-colors duration-300 mr-2" /> {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative">
                Stay Connected
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"></div>
              </h3>
              
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest travel updates and exclusive offers.
              </p>
              
              {/* Newsletter Form */}
              <form onSubmit={handleSubscribe} className="mb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-medium hover:from-primary-600 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                    title={social.name}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-white text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-md">
          <div className="section-container py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 Vibrant Tourism. All rights reserved.
              </div>
              
              <div className="flex space-x-6 text-sm">
                <a href="/privacy" className="text-gray-100 hover:text-accent-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-100 hover:text-accent-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="/cookies" className="text-gray-100 hover:text-accent-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;