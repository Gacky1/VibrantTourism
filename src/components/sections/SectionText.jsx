const SectionText = ({ 
  content, 
  title = null, 
  className = "", 
  containerClass = "py-16 bg-gray-50",
  textAlign = "center",
  maxWidth = "4xl"
}) => {
  return (
    <section className={containerClass}>
      <div className="section-container">
        <div className={`mx-auto max-w-${maxWidth} ${textAlign === 'center' ? 'text-center' : ''} ${className}`}>
          {title && (
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {title}
            </h2>
          )}
          
          {Array.isArray(content) ? (
            content.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-lg text-gray-700 leading-relaxed">
              {content}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionText;