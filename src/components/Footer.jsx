import { IoLocationOutline, IoMailOutline, IoCallOutline,
         IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5';
import { navigationMenu } from '../data/mockData';

const Footer = () => {
  const socials = [
    { Icon: IoLogoFacebook,  href: '#', label: 'Facebook',  color: 'hover:bg-blue-600'  },
    { Icon: IoLogoTwitter,   href: '#', label: 'Twitter',   color: 'hover:bg-sky-500'   },
    { Icon: IoLogoLinkedin,  href: '#', label: 'LinkedIn',  color: 'hover:bg-blue-700'  },
    { Icon: IoLogoInstagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600'  },
  ];

  return (
    <footer className="bg-primary-dark text-slate-300 relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #2563EB 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F59E0B 0%, transparent 40%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div>
            <a href="/" className="inline-block mb-5 group">
              <img
                src="/Logo-White-Bg.png"
                alt="VTC"
                className="h-10 w-auto object-contain rounded transition-transform duration-200 group-hover:scale-105"
              />
            </a>
            <p className="text-[13px] text-slate-400 leading-relaxed mb-5">
              Connecting tourism stakeholders, empowering communities, and promoting sustainable tourism growth through structured skill education.
            </p>
            <div className="flex gap-2">
              {socials.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center
                    text-slate-400 hover:text-white ${color} hover:border-transparent
                    transition-all duration-200 hover:scale-110 hover:shadow-lg`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {navigationMenu.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="footer-link text-[13px]">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Scope */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Our Scope</h4>
            <ul className="space-y-2.5">
              {navigationMenu.slice(5).map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="footer-link text-[13px]">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Contact Us</h4>
            <ul className="space-y-3.5">
              {[
                { Icon: IoLocationOutline, text: '123 Tourism Street, Business District\nNew Delhi, India – 110001' },
                { Icon: IoMailOutline,     text: 'info@vibranttourism.in' },
                { Icon: IoCallOutline,     text: '+91 11 1234 5678' },
              ].map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start gap-2.5 group/contact">
                  <Icon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover/contact:scale-110" />
                  <span className="text-[13px] text-slate-400 leading-relaxed whitespace-pre-line
                    group-hover/contact:text-slate-300 transition-colors duration-150">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-slate-500 flex items-center gap-1.5">
            © {new Date().getFullYear()} Vibrant Tourism Council (VTC). All Rights Reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Use'].map((l) => (
              <a key={l} href="#" className="footer-link text-[12px]">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
