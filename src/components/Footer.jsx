import { IoLocationOutline, IoMailOutline, IoCallOutline,
         IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5';
import { navigationMenu } from '../data/mockData';

const Footer = () => {
  const socials = [
    { Icon: IoLogoFacebook,  href: '#', label: 'Facebook'  },
    { Icon: IoLogoTwitter,   href: '#', label: 'Twitter'   },
    { Icon: IoLogoLinkedin,  href: '#', label: 'LinkedIn'  },
    { Icon: IoLogoInstagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary-dark text-slate-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div>
            <a href="/" className="inline-block mb-4">
              <img src="/Logo-White-Bg.png" alt="VTC" className="h-10 w-auto object-contain rounded" />
            </a>
            <p className="text-[13px] text-slate-400 leading-relaxed mb-5">
              Connecting tourism stakeholders, empowering communities, and promoting sustainable tourism growth through structured skill education.
            </p>
            <div className="flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-secondary hover:border-secondary transition-all duration-150"
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
                  <a href={item.href}
                    className="text-[13px] text-slate-400 hover:text-white transition-colors duration-150">
                    {item.label}
                  </a>
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
                  <a href={item.href}
                    className="text-[13px] text-slate-400 hover:text-white transition-colors duration-150">
                    {item.label}
                  </a>
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
                <li key={i} className="flex items-start gap-2.5">
                  <Icon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-[13px] text-slate-400 leading-relaxed whitespace-pre-line">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-slate-500">
            © {new Date().getFullYear()} Vibrant Tourism Council (VTC). All Rights Reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Use'].map((l) => (
              <a key={l} href="#" className="text-[12px] text-slate-500 hover:text-white transition-colors duration-150">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
