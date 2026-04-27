import HeroSection   from '../components/HeroSection';
import ContactForm   from '../components/ContactForm';
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoTimeOutline,
         IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram,
         IoArrowForwardOutline } from 'react-icons/io5';

const ContactPage = () => {
  const contactItems = [
    { Icon: IoLocationOutline, title: 'Our Office',      text: '123 Tourism Street, Business District\nNew Delhi, India – 110001' },
    { Icon: IoCallOutline,     title: 'Phone',           text: '+91 11 1234 5678'          },
    { Icon: IoMailOutline,     title: 'Email',           text: 'info@vibranttourism.in'    },
    { Icon: IoTimeOutline,     title: 'Working Hours',   text: 'Mon – Sat: 9:00 AM – 6:00 PM' },
  ];

  const socials = [
    { Icon: IoLogoFacebook,  href: '#', label: 'Facebook'  },
    { Icon: IoLogoTwitter,   href: '#', label: 'Twitter'   },
    { Icon: IoLogoLinkedin,  href: '#', label: 'LinkedIn'  },
    { Icon: IoLogoInstagram, href: '#', label: 'Instagram' },
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
          <div className="text-center mb-12">
            <span className="section-label">Get In Touch</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-dark mt-1">Let's Connect</h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Info column */}
            <div className="space-y-4">
              {contactItems.map(({ Icon, title, text }, i) => (
                <div key={i} className="card p-4 flex items-start gap-3 group">
                  <div className={`${i % 2 === 0 ? 'icon-box-sm' : 'icon-box-sm bg-amber-50 text-accent'} flex-shrink-0 mt-0.5`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold text-gray-dark mb-0.5">{title}</h4>
                    <p className="text-[13px] text-gray-mid leading-relaxed whitespace-pre-line">{text}</p>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="card p-4">
                <p className="text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-3">Follow Us</p>
                <div className="flex gap-2">
                  {socials.map(({ Icon, href, label }) => (
                    <a key={label} href={href} aria-label={label}
                      className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-mid hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-150">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
