const CategoryGrid = ({ categories, title = "Explore Tourism Categories" }) => {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* High-Quality Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ 
                  backgroundImage: `url(${category.image})`
                }}
              />
              
              {/* Glass Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/80" />
              <div className="absolute inset-0 backdrop-blur-[0.5px] group-hover:backdrop-blur-[1px] transition-all duration-500" />
              
              {/* Glass Card Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 transform transition-all duration-500 group-hover:bg-white/20 group-hover:translate-y-[-8px]">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {category.title}
                  </h3>
                  <p className="text-sm lg:text-base text-white/90 drop-shadow-md opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;