import HeroSection from '../components/HeroSection';
import ContactForm  from '../components/ContactForm';
import {
  IoLocationOutline, IoCallOutline, IoMailOutline, IoTimeOutline,
  IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram,
  IoArrowForwardOutline,
} from 'react-icons/io5';
import { useEffect } from 'react';

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io  = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const ContactPage = () => {
  useReveal();

  const contactItems = [
    { Icon: IoLocationOutline, title: 'Our Office',    text: '123 Tourism Street, Business District\nNew Delhi, India – 110001', boxClass: 'icon-box-sm' },
    { Icon: IoCallOutline,     title: 'Phone',         text: '+91 11 1234 5678',          boxClass: 'icon-box-sm bg-amber-50 text-accent' },
    { Icon: IoMailOutline,     title: 'Email',         text: 'info@vibranttourism.in',    boxClass: 'icon-box-sm' },
    { Icon: IoTimeOutline,     title: 'Working Hours', text: 'Mon – Sat: 9:00 AM – 6:00 PM', boxClass: 'icon-box-sm bg-amber-50 text-accent' },
  ];

  const socials = [
    { Icon: IoLogoFacebook,  href: '#', label: 'Facebook',  hoverBg: 'hover:bg-blue-600'  },
    { Icon: IoLogoTwitter,   href: '#', label: 'Twitter',   hoverBg: 'hover:bg-sky-500'   },
    { Icon: IoLogoLinkedin,  href: '#', label: 'LinkedIn',  hoverBg: 'hover:bg-blue-700'  },
    { Icon: IoLogoInstagram, href: '#', label: 'Instagram', hoverBg: 'hover:bg-pink-600'  },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      <HeroSection
        badge="Reach Out"
        title="Contact Us"
        subtitle="We're Here to Support"
        description="Whether you are an institution ready to partner, or an explorer finalising your itineraries, VTC listens."
        imageUrl="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
        primaryCta={
          <a href="#contact-form" className="btn-primary">
            Send a Message <IoArrowForwardOutline className="w-4 h-4" />
          </a>
        }
      />

      <section id="contact-form" className="py-20 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="section-label">Get In Touch</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mt-1">Let's Connect</h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Info column */}
            <div className="space-y-4">
              {contactItems.map(({ Icon, title, text, boxClass }, i) => (
                <div key={i} className={`card p-4 flex items-start gap-3 group reveal reveal-delay-${i + 1}`}>
                  <div className={`${boxClass} flex-shrink-0 mt-0.5
                    group-hover:scale-110 group-hover:shadow-sm transition-all duration-200`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold text-gray-dark mb-0.5">{title}</h4>
                    <p className="text-[13px] text-gray-mid leading-relaxed whitespace-pre-line">{text}</p>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="card p-4 reveal reveal-delay-4">
                <p className="text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-3">Follow Us</p>
                <div className="flex gap-2">
                  {socials.map(({ Icon, href, label, hoverBg }) => (
                    <a key={label} href={href} aria-label={label}
                      className={`w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center
                        text-gray-mid hover:text-white ${hoverBg} hover:border-transparent
                        transition-all duration-200 hover:scale-110 hover:shadow-md`}>
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 reveal reveal-delay-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
