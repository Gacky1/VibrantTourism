import { useEffect, useRef } from 'react';

const HeroSection = ({
  badge, title, subtitle, description,
  imageUrl, primaryCta, secondaryCta,
  stats = [], compact = false,
}) => {
  const imgRef = useRef(null);

  /* Subtle parallax on scroll */
  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      const y = window.scrollY * 0.28;
      imgRef.current.style.transform = `scale(1.08) translateY(${y}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`relative flex items-center overflow-hidden ${compact ? 'min-h-[52vh]' : 'min-h-[90vh]'}`}>

      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center scale-[1.08] will-change-transform"
          style={{ transformOrigin: 'center top' }}
        />
        {/* Layered overlay: deep blue left, transparent right */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white/20 to-transparent" />
      </div>

      {/* Decorative blurred circle — subtle depth */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <div className="max-w-2xl">

          {badge && (
            <span className="anim-fade-up anim-float inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
              text-[11px] font-semibold uppercase tracking-widest text-amber-300
              bg-white/10 border border-white/25 backdrop-blur-sm mb-6 shadow-sm">
              {badge}
            </span>
          )}

          <h1 className="anim-fade-up anim-delay-1 text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.12] mb-5"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.25)' }}>
            {title || 'Transforming Tourism, Empowering India'}
          </h1>

          {subtitle && (
            <p className="anim-fade-up anim-delay-2 text-lg font-semibold text-amber-300 mb-3 tracking-wide">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="anim-fade-up anim-delay-2 text-[15px] text-white/80 leading-relaxed mb-9 max-w-xl">
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
              <div key={i} className="px-8 py-5 text-center group hover:bg-white/10 transition-colors duration-200">
                <div className="text-2xl font-bold text-white stat-number">{s.value}</div>
                <div className="text-[11px] font-medium text-white/60 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
