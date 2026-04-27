import { useState, useEffect } from 'react';
import { IoMenuOutline, IoCloseOutline, IoChevronDownOutline } from 'react-icons/io5';
import { navigationMenu } from '../data/mockData';

const Navbar = ({ activeRoute = '/' }) => {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-200 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <img
              src="/Logo-Transparent.png"
              alt="VTC Logo"
              className="h-9 w-auto object-contain"
            />
          </a>

          {/* ── Desktop nav ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navigationMenu.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`px-3 py-2 text-[11px] font-semibold uppercase tracking-wide rounded-md transition-colors duration-150 ${
                  activeRoute === item.href
                    ? 'text-secondary bg-blue-50'
                    : 'text-gray-600 hover:text-secondary hover:bg-slate-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="hidden lg:block">
            <a href="/membership" className="btn-primary text-xs px-5 py-2.5">
              Join Network
            </a>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <IoCloseOutline className="w-6 h-6" />
              : <IoMenuOutline  className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="max-w-[1200px] mx-auto px-4 py-3 space-y-0.5">
            {navigationMenu.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-150 ${
                  activeRoute === item.href
                    ? 'text-secondary bg-blue-50'
                    : 'text-gray-600 hover:text-secondary hover:bg-slate-50'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <a href="/membership" className="btn-primary w-full justify-center text-xs py-2.5">
                Join Network
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
