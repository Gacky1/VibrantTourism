import { useEffect, useRef } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';

const HeroSection = ({
  badge, title, subtitle, description,
  imageUrl, primaryCta, secondaryCta,
  stats = [], compact = false,
}) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      imgRef.current.style.transform = `scale(1.08) translateY(${window.scrollY * 0.22}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`relative flex items-center overflow-hidden ${compact ? 'min-h-[52vh]' : 'min-h-[92vh]'}`}>

      {/* Parallax image */}
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center scale-[1.08] will-change-transform"
          style={{ transformOrigin: 'center top' }}
        />
        {/* Cinematic overlay — lighter on right so image shows through */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-[640px]">

          {badge && (
            <span className="anim-fade-up exp-tag mb-6 inline-flex">
              {badge}
            </span>
          )}

          <h1
            className="anim-fade-up anim-delay-1 font-bold text-white leading-[1.08] mb-5"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.75rem)',
              textShadow: '0 2px 32px rgba(0,0,0,0.30)',
            }}
          >
            {title || 'Transforming Tourism, Empowering India'}
          </h1>

          {subtitle && (
            <p className="anim-fade-up anim-delay-2 text-lg font-semibold text-amber-300 mb-3 tracking-wide">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="anim-fade-up anim-delay-2 text-[15px] text-white/82 leading-relaxed mb-9 max-w-lg">
              {description}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="anim-fade-up anim-delay-3 flex flex-wrap gap-3">
              {primaryCta}
              {secondaryCta}
            </div>
          )}
        </div>

        {/* Stats bar */}
        {stats.length > 0 && (
          <div className="anim-fade-up anim-delay-4 mt-16 inline-flex flex-wrap
            divide-x divide-white/15 bg-white/10 backdrop-blur-md
            border border-white/20 rounded-2xl overflow-hidden shadow-lg">
            {stats.map((s, i) => (
              <div key={i} className="px-8 py-5 text-center hover:bg-white/10 transition-colors duration-200">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-[11px] font-medium text-white/60 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll-down indicator */}
      {!compact && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 anim-fade-up anim-delay-4">
          <span className="text-white/50 text-[10px] font-semibold uppercase tracking-widest">Scroll</span>
          <IoChevronDownOutline className="w-5 h-5 text-white/50 animate-bounce" />
        </div>
      )}
    </div>
  );
};

export default HeroSection;
