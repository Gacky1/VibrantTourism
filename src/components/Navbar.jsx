import { useState, useEffect } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { navigationMenu } from '../data/mockData';

/* Shorten labels that are too long for a single nav row */
const SHORT_LABELS = {
  'SKILL EDUCATION':        'SKILL EDU',
  'EMPLOYMENT OPPORTUNITY': 'EMPLOYMENT',
  'CONTACT US':             'CONTACT',
};

const Navbar = ({ activeRoute = '/' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 bg-white transition-all duration-300 ${
      isScrolled
        ? 'shadow-[0_2px_20px_rgba(10,37,64,0.10)]'
        : 'shadow-sm'
    }`}>

      {/* ── TOP BAR: Logo + CTA ── */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3 flex-shrink-0 group">
              <img
                src="/Logo-Transparent.png"
                alt="VTC Logo"
                className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              {/* Fallback text in case image is slow / missing */}
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-[15px] font-extrabold text-primary tracking-tight">
                  Vibrant Tourism Council
                </span>
                <span className="text-[10px] font-semibold text-secondary uppercase tracking-widest mt-0.5">
                  Vibrant पर्यटन परिषद
                </span>
              </div>
            </a>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="/contact" className="text-[11px] font-semibold text-gray-mid hover:text-secondary transition-colors duration-150 whitespace-nowrap">
                Contact Us
              </a>
              <a href="/membership" className="btn-primary text-[11px] px-5 py-2.5 whitespace-nowrap">
                Join Network
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-slate-100 transition-colors duration-150"
              aria-label="Toggle menu"
            >
              {mobileOpen
                ? <IoCloseOutline className="w-6 h-6" />
                : <IoMenuOutline  className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR: Nav links (desktop only) ── */}
      <div className="hidden lg:block bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-0.5 h-10">
            {navigationMenu.map((item) => {
              const label = SHORT_LABELS[item.label] ?? item.label;
              const isActive = activeRoute === item.href;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`
                    relative whitespace-nowrap px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-wide
                    rounded-md transition-colors duration-150 group
                    ${isActive
                      ? 'text-secondary bg-blue-50/70'
                      : 'text-gray-500 hover:text-secondary hover:bg-slate-50'
                    }
                  `}
                >
                  {label}
                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-secondary rounded-full" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-xl mobile-menu-enter">
          <div className="max-w-[1280px] mx-auto px-4 py-3 space-y-0.5">
            {navigationMenu.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors duration-150 ${
                  activeRoute === item.href
                    ? 'text-secondary bg-blue-50'
                    : 'text-gray-600 hover:text-secondary hover:bg-slate-50'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 pb-1 flex flex-col gap-2">
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
