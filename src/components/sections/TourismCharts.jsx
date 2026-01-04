import { useState, useEffect, useRef } from 'react';

const TourismCharts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const barChartData = [
    { segment: 'Tourism & Hospitality', gdp: 9.5, employment: 46.5, msme: 75 },
    { segment: 'Cultural Heritage', gdp: 2.1, employment: 8.2, msme: 68 },
    { segment: 'Wellness & AYUSH', gdp: 1.8, employment: 5.4, msme: 82 },
    { segment: 'Adventure Sports', gdp: 1.2, employment: 3.1, msme: 71 }
  ];

  const pieChartData = [
    { name: 'Leisure & Recreation', percentage: 30, color: '#3B82F6' },
    { name: 'Cultural & Heritage', percentage: 20, color: '#8B5CF6' },
    { name: 'Wellness & AYUSH', percentage: 15, color: '#10B981' },
    { name: 'Rural & Eco', percentage: 15, color: '#059669' },
    { name: 'Adventure & Sports', percentage: 10, color: '#F59E0B' },
    { name: 'Culinary / Food', percentage: 10, color: '#EF4444' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const maxValue = Math.max(...barChartData.flatMap(d => [d.gdp, d.employment, d.msme]));

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tourism & Hospitality in India
            <span className="block text-primary-600">Key Indicators</span>
          </h2>
        </div>

        {/* Bar Chart Section */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-12">
            Sector Performance Metrics
          </h3>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {barChartData.map((data, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="text-center mb-6">
                    <h4 className="font-semibold text-gray-800 text-sm mb-4">{data.segment}</h4>
                    
                    {/* GDP Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>GDP %</span>
                        <span>{data.gdp}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full transition-all duration-1000"
                          style={{ 
                            width: isVisible ? `${(data.gdp / maxValue) * 100}%` : '0%',
                            transitionDelay: `${index * 200 + 500}ms`
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Employment Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Employment (M)</span>
                        <span>{data.employment}M</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-green-600 h-4 rounded-full transition-all duration-1000"
                          style={{ 
                            width: isVisible ? `${(data.employment / maxValue) * 100}%` : '0%',
                            transitionDelay: `${index * 200 + 700}ms`
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* MSME Bar */}
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>MSME %</span>
                        <span>{data.msme}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-purple-600 h-4 rounded-full transition-all duration-1000"
                          style={{ 
                            width: isVisible ? `${(data.msme / maxValue) * 100}%` : '0%',
                            transitionDelay: `${index * 200 + 900}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex justify-center space-x-8 mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded"></div>
                <span className="text-sm text-gray-600">GDP Contribution (%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded"></div>
                <span className="text-sm text-gray-600">Employment (Millions)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded"></div>
                <span className="text-sm text-gray-600">MSME Share (%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pie Chart Section */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-12">
            Tourism Segment Distribution
          </h3>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Pie Chart */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                    {pieChartData.map((segment, index) => {
                      const previousPercentages = pieChartData.slice(0, index).reduce((sum, seg) => sum + seg.percentage, 0);
                      const startAngle = (previousPercentages / 100) * 360;
                      const endAngle = ((previousPercentages + segment.percentage) / 100) * 360;
                      
                      const startAngleRad = (startAngle * Math.PI) / 180;
                      const endAngleRad = (endAngle * Math.PI) / 180;
                      
                      const largeArcFlag = segment.percentage > 50 ? 1 : 0;
                      
                      const x1 = 100 + 80 * Math.cos(startAngleRad);
                      const y1 = 100 + 80 * Math.sin(startAngleRad);
                      const x2 = 100 + 80 * Math.cos(endAngleRad);
                      const y2 = 100 + 80 * Math.sin(endAngleRad);
                      
                      const pathData = [
                        `M 100 100`,
                        `L ${x1} ${y1}`,
                        `A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                        'Z'
                      ].join(' ');

                      return (
                        <path
                          key={index}
                          d={pathData}
                          fill={segment.color}
                          className={`transition-all duration-1000 hover:opacity-80 cursor-pointer ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{ transitionDelay: `${index * 200}ms` }}
                        />
                      );
                    })}
                  </svg>
                  
                  {/* Center Label */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                      <div>
                        <div className="text-lg font-bold text-gray-900">Tourism</div>
                        <div className="text-sm text-gray-600">Segments</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-4">
                {pieChartData.map((segment, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 cursor-pointer group ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 500}ms` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div 
                        className="w-6 h-6 rounded-full group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: segment.color }}
                      ></div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                          {segment.name}
                        </div>
                        <div className="text-sm text-gray-600">Market Share</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary-600">
                      {segment.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismCharts;