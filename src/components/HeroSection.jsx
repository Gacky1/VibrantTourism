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
      imgRef.current.style.transform = `scale(1.08) translateY(${window.scrollY * 0.18}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={`relative w-full overflow-hidden flex items-center justify-center ${
      compact ? 'min-h-[52vh] pt-28 pb-16' : 'min-h-[82vh] pt-32 pb-20'
    } px-4 sm:px-6 lg:px-8 bg-black`}>

      {/* ── Background Image with Parallax ── */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          ref={imgRef}
          src={imageUrl}
          alt=""
          className="w-full h-full object-cover object-center scale-[1.08] will-change-transform"
          style={{ transformOrigin: 'center top' }}
        />
        {/* Cinematic dark vignette — same as home page hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/80 z-10" />
      </div>

      {/* ── Decorative Side Accent (left dashed path + gear icons) ── */}
      <div className="absolute left-6 lg:left-12 top-1/4 bottom-1/4 w-8 flex-col items-center justify-between z-20 pointer-events-none select-none hidden md:flex">
        <div className="w-px flex-1 border-l border-dashed border-white/25" />
        <div className="my-8 flex flex-col items-center gap-12">
          <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center bg-black/30 backdrop-blur-xs">
            <svg className="w-3.5 h-3.5 text-white/60 animate-spin" style={{ animationDuration: '10s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
        <div className="w-px flex-1 border-l border-dashed border-white/25" />
      </div>

      {/* ── Central Content ── */}
      <div className="relative z-20 max-w-4xl w-full text-center flex flex-col items-center justify-center select-none px-4">

        {/* Badge */}
        {badge && (
          <span className="inline-block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.25em] text-amber-300 mb-6 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/15 animate-fade-in shadow-lg">
            {badge}
          </span>
        )}

        {/* Title */}
        <h1
          className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-black uppercase tracking-wider leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] font-sans animate-fade-up"
          style={{ textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}
        >
          {title || 'Transforming Tourism, Empowering India'}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-amber-300 font-bold text-sm sm:text-base md:text-lg mt-4 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] max-w-lg mx-auto animate-fade-up anim-delay-1 uppercase">
            {subtitle}
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="text-white/80 font-medium text-sm sm:text-base md:text-[15.5px] mt-5 tracking-wide font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] max-w-2xl mx-auto leading-relaxed animate-fade-up anim-delay-1">
            {description}
          </p>
        )}

        {/* Accent divider */}
        <div className="w-12 h-0.5 bg-amber-400 rounded-full mt-6 animate-fade-up anim-delay-2" />

        {/* CTA Buttons */}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-up anim-delay-2">
            {primaryCta && (
              <span className="[&>a]:bg-[#FF0000] [&>a]:hover:bg-red-700 [&>a]:text-white [&>a]:border-none [&>a]:py-3.5 [&>a]:px-8 [&>a]:text-xs [&>a]:font-bold [&>a]:uppercase [&>a]:tracking-wider [&>a]:rounded-full [&>a]:shadow-lg [&>a]:transition-transform [&>a]:hover:-translate-y-0.5 [&>a]:active:translate-y-0">
                {primaryCta}
              </span>
            )}
            {secondaryCta && (
              <span className="[&>a]:border-white [&>a]:text-white [&>a]:hover:bg-white [&>a]:hover:text-black [&>a]:py-3.5 [&>a]:px-8 [&>a]:text-xs [&>a]:font-bold [&>a]:uppercase [&>a]:tracking-wider [&>a]:rounded-full [&>a]:shadow-lg [&>a]:transition-transform [&>a]:hover:-translate-y-0.5 [&>a]:active:translate-y-0 [&>a]:bg-transparent [&>a]:border">
                {secondaryCta}
              </span>
            )}
          </div>
        )}

        {/* Stats Overlay Bar */}
        {stats.length > 0 && (
          <div className="mt-10 inline-flex flex-wrap justify-center animate-fade-up anim-delay-3
            divide-x divide-white/15 bg-white/10 backdrop-blur-md
            border border-white/15 rounded-2xl overflow-hidden shadow-2xl max-w-xl mx-auto">
            {stats.map((s, i) => (
              <div key={i} className="px-7 py-4 text-center hover:bg-white/5 transition-colors duration-200">
                <div className="text-base md:text-lg font-black text-white leading-none">{s.value}</div>
                <div className="text-[9px] font-extrabold text-white/60 uppercase tracking-widest mt-1.5">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll-down indicator */}
      {!compact && (
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 animate-fade-up anim-delay-3">
          <span className="text-white/40 text-[9px] font-extrabold uppercase tracking-widest">Scroll</span>
          <IoChevronDownOutline className="w-4 h-4 text-white/40 animate-bounce" />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
