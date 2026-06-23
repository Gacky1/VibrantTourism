import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IoLocationOutline, IoMailOutline, IoCallOutline,
  IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram,
  IoArrowForwardOutline, IoCheckmarkCircleOutline
} from 'react-icons/io5';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const socials = [
    { Icon: IoLogoFacebook,  href: '#', label: 'Facebook',  color: 'hover:bg-blue-600 hover:border-blue-600'  },
    { Icon: IoLogoTwitter,   href: '#', label: 'Twitter',   color: 'hover:bg-sky-500 hover:border-sky-500'   },
    { Icon: IoLogoLinkedin,  href: '#', label: 'LinkedIn',  color: 'hover:bg-blue-700 hover:border-blue-700'  },
    { Icon: IoLogoInstagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600 hover:border-pink-600'  },
  ];

  return (
    <footer className="bg-[#0A2540] text-slate-300 relative overflow-hidden">
      {/* Premium top accent line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-accent to-red-500" />

      {/* Glassmorphic background glow effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 10% 20%, #2563EB 0%, transparent 40%), radial-gradient(circle at 90% 80%, #F59E0B 0%, transparent 45%)',
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        
        {/* ── TOP LAYER: Brand Header & Interactive Newsletter ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center">
          <div className="lg:col-span-6 flex items-center gap-4">
            <Link to="/" className="group flex-shrink-0">
              <img
                src="/Logo-Transparent.png"
                alt="VTC White Logo"
                className="h-16 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <div>
              <h3 className="text-white text-lg font-black uppercase tracking-wider leading-tight">Vibrant Tourism Council</h3>
              <p className="text-slate-400 text-[11.5px] uppercase tracking-widest font-semibold mt-1">Empowering Careers. Scaling Businesses.</p>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 text-emerald-400 animate-scale-in">
                <IoCheckmarkCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-[12.5px] font-black uppercase tracking-wider">Subscribed successfully! Thank you for joining our network.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Subscribe to VTC updates (email)..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-grow bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-xs font-bold text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/10 transition-all"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider transition-all shadow-md shadow-blue-600/20 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  Join List <IoArrowForwardOutline className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── MIDDLE LAYER: Grid Links & Details ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-14">
          
          {/* mandate summary */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-5">Our Mandate</h4>
              <p className="text-[13px] text-slate-400 leading-relaxed mb-6 font-semibold">
                Vibrant Tourism Council (VTC) is a structured national ecosystem facilitator. We engage travel MSMEs, academic entities, and workforce candidates to foster sustainable tourism growth, skill education certifications, and direct employment pathways.
              </p>
            </div>
            
            {/* social links */}
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Connect With Us</p>
              <div className="flex gap-2.5">
                {socials.map(({ Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
                      text-slate-400 hover:text-white ${color} hover:border-transparent
                      transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Portals & Tools */}
          <div className="lg:col-span-2.5 lg:col-start-6">
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-5">Portals & Tools</h4>
            <ul className="space-y-3">
              {[
                { label: 'Booking Assistant', to: '/destinations' },
                { label: 'Industry Matrix',    to: '/industry' },
                { label: 'Graduate Registry',  to: '/employment' },
                { label: 'Partner Directory',  to: '/membership' },
                { label: 'Media Portal',      to: '/media' },
              ].map(item => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-[12.5px] font-black text-slate-400 uppercase tracking-wide hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Skill Frameworks */}
          <div className="lg:col-span-2.5">
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-5">Skill Frameworks</h4>
            <ul className="space-y-3">
              {[
                { label: 'Education & Skills', to: '/education' },
                { label: 'Prior Learning (RPL)', to: '/upskilling' },
                { label: 'Academic Partners', to: '/membership' },
                { label: 'Industry Partners', to: '/membership' },
              ].map(item => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-[12.5px] font-black text-slate-400 uppercase tracking-wide hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-5">Contact Secretariat</h4>
            <ul className="space-y-4">
              {[
                { Icon: IoLocationOutline, text: 'VTC Secretariat, Sector-4\nNew Delhi, India – 110001' },
                { Icon: IoMailOutline,     text: 'info@vibranttourism.in' },
                { Icon: IoCallOutline,     text: '+91 11 1234 5678' },
              ].map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3 group/contact">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover/contact:border-blue-500 transition-colors duration-200">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-[13px] text-slate-400 leading-relaxed font-semibold whitespace-pre-line group-hover/contact:text-slate-200 transition-colors duration-150">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── BOTTOM LAYER: Copyright & Policy Links ── */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11.5px] font-extrabold text-slate-500 uppercase tracking-wider">
            © {new Date().getFullYear()} Vibrant Tourism Council (VTC). All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a
                key={l}
                href="#"
                className="text-[11.5px] font-extrabold text-slate-500 hover:text-white transition-colors uppercase tracking-wider"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
