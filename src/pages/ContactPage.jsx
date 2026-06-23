import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ContactForm  from '../components/ContactForm';
import {
  IoLocationOutline, IoCallOutline, IoMailOutline, IoTimeOutline,
  IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram,
  IoArrowForwardOutline,
} from 'react-icons/io5';

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io  = new IntersectionObserver(
      (e) => e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); }),
      { threshold: 0.07 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const ContactPage = () => {
  useReveal();

  const contactItems = [
    { Icon: IoLocationOutline, title: 'Our Office',    text: '123 Tourism Street, Business District\nNew Delhi, India – 110001', boxClass: 'icon-box' },
    { Icon: IoCallOutline,     title: 'Phone',         text: '+91 11 1234 5678',                                                  boxClass: 'icon-box-gold' },
    { Icon: IoMailOutline,     title: 'Email',         text: 'info@vibranttourism.in',                                           boxClass: 'icon-box' },
    { Icon: IoTimeOutline,     title: 'Working Hours', text: 'Mon – Sat: 9:00 AM – 6:00 PM',                                     boxClass: 'icon-box-gold' },
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
        title="Let's Connect"
        subtitle="We're Here to Support"
        description="Whether you are an institution ready to partner, or an explorer finalising your itineraries, VTC listens and responds."
        imageUrl="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
        primaryCta={<a href="#contact-form" className="btn-primary">Send a Message <IoArrowForwardOutline className="w-4 h-4" /></a>}
        secondaryCta={<Link to="/membership" className="btn-outline">Join Network</Link>}
      />

      {/* ── Contact info band ── */}
      <section className="section-band py-16">
        <div className="section-band-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&h=400&fit=crop")' }} />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contactItems.map(({ Icon, title, text, boxClass }, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <div className={`${boxClass} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-[13px] mb-1">{title}</h4>
                  <p className="text-slate-300 text-[12px] leading-relaxed whitespace-pre-line">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + info split ── */}
      <section id="contact-form" className="py-20 bg-surface">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-secondary mb-3">Get In Touch</span>
            <h2 className="text-3xl font-bold text-gray-dark">Send Us a Message</h2>
            <div className="h-0.5 w-10 bg-accent rounded-full mt-4 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Info column */}
            <div className="space-y-4">
              {/* Map image card */}
              <div className="img-card group" style={{ height: '200px' }}>
                <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop" alt="New Delhi" />
                <div className="img-card-overlay" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-white font-bold text-[14px]">New Delhi, India</span>
                  <p className="text-white/70 text-[11px]">Our Headquarters</p>
                </div>
              </div>

              {/* Contact cards */}
              {contactItems.slice(0, 3).map(({ Icon, title, text, boxClass }, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1} card p-4 flex items-start gap-3 group`}>
                  <div className={`${boxClass} flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:shadow-sm transition-all duration-200`}>
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
                      className={`w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-mid hover:text-white ${hoverBg} hover:border-transparent transition-all duration-200 hover:scale-110 hover:shadow-md`}>
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
