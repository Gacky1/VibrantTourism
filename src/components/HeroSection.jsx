const HeroSection = ({
  badge,
  title,
  subtitle,
  description,
  imageUrl,
  primaryCta,
  secondaryCta,
  stats = [],
  compact = false,
}) => {
  return (
    <div className={`relative flex items-center overflow-hidden ${compact ? 'min-h-[52vh]' : 'min-h-[88vh]'}`}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        {/* Clean dark-blue overlay — not colourful */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(10,37,64,0.88) 0%, rgba(10,37,64,0.65) 55%, rgba(10,37,64,0.30) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-2xl">
          {badge && (
            <span className="anim-fade-up inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-amber-300 bg-white/10 border border-white/20 mb-5">
              {badge}
            </span>
          )}

          <h1
            className="anim-fade-up anim-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            {title || 'Transforming Tourism, Empowering India'}
          </h1>

          {subtitle && (
            <p className="anim-fade-up anim-delay-2 text-lg font-semibold text-amber-300 mb-3">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="anim-fade-up anim-delay-2 text-base text-white/80 leading-relaxed mb-8 max-w-xl">
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
          <div className="anim-fade-up anim-delay-3 mt-14 inline-flex flex-wrap divide-x divide-white/20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden">
            {stats.map((s, i) => (
              <div key={i} className="px-7 py-4 text-center">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-[11px] font-medium text-white/65 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
