import { useState, useEffect } from 'react';

const Navbar = ({ menuItems, activeRoute = '/' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50' 
        : 'bg-black/40 backdrop-blur-md shadow-lg'
    }`}>
      <div className="section-container">
        <div className="flex items-center h-16 lg:h-20">
          {/* Logo - Fixed Width */}
          <div className="w-48 lg:w-56 flex-shrink-0">
            <div className="group">
              <img 
                src="/images/Logo-Transparent.png" 
                alt="Vibrant Tourism" 
                className="h-12 lg:h-16 xl:h-20 w-auto transition-all duration-500 transform group-hover:scale-105 drop-shadow-lg"
              />
            </div>
          </div>

          {/* Desktop Menu - Flex Grow */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-1 xl:space-x-2">
              {menuItems.map((item, index) => (
                <div key={item.id} className="relative">
                  <a
                    href={item.href}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`relative px-1 xl:px-2 py-2 text-xs xl:text-sm font-medium transition-all duration-300 rounded-lg transform hover:scale-105 whitespace-nowrap ${
                      activeRoute === item.href
                        ? 'text-accent-400 bg-white/20 shadow-lg'
                        : isScrolled
                        ? 'text-gray-700 hover:text-primary-600'
                        : 'text-white hover:text-accent-300 drop-shadow-md'
                    }`}
                  >
                    {item.label}
                    {/* Animated underline */}
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
                      hoveredItem === index || activeRoute === item.href ? 'w-full' : 'w-0'
                    }`} />
                    {/* Glow effect */}
                    {hoveredItem === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-lg animate-pulse" />
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Spacer - Fixed Width */}
          <div className="w-16 lg:w-20 flex justify-end">
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-primary-50 hover:text-primary-600' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {menuItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                    activeRoute === item.href 
                      ? 'text-accent-500 bg-gradient-to-r from-primary-50 to-accent-50 border-l-4 border-accent-500 shadow-lg' 
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:text-primary-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;