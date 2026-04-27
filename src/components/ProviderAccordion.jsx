import { useState } from 'react';
import { IoChevronDownOutline, IoCallOutline, IoBookmarkOutline } from 'react-icons/io5';

const ProviderAccordion = ({ title, providers = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3 rounded-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors duration-150 focus:outline-none ${
          isOpen ? 'bg-secondary text-white' : 'bg-white text-gray-dark hover:bg-slate-50'
        }`}
      >
        <span className="text-sm font-semibold">{title}</span>
        <IoChevronDownOutline
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white' : 'text-gray-400'}`}
        />
      </button>

      {/* Body */}
      <div className={`transition-all duration-300 ${isOpen ? 'max-h-[900px]' : 'max-h-0 overflow-hidden'}`}>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white border-t border-gray-100">
          {providers.map((provider, i) => (
            <div key={i} className="card-flat p-4 flex flex-col gap-3 hover:border-blue-200 transition-colors duration-150">
              <h4 className="text-sm font-semibold text-gray-dark">{provider.name}</h4>
              <div className="flex flex-wrap gap-1.5">
                {provider.services.split(',').map((s, si) => (
                  <span key={si} className="tag">{s.trim()}</span>
                ))}
              </div>
              <div className="flex gap-2 mt-1">
                <button
                  onClick={() => alert(`Booking flow opened for ${provider.name}`)}
                  className="btn-primary flex-1 justify-center text-xs py-2"
                >
                  <IoBookmarkOutline className="w-3.5 h-3.5" />
                  Book Now
                </button>
                <a
                  href={provider.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-blue flex-1 justify-center text-xs py-2"
                >
                  <IoCallOutline className="w-3.5 h-3.5" />
                  Contact
                </a>
              </div>
            </div>
          ))}
          {providers.length === 0 && (
            <p className="text-gray-mid text-xs italic col-span-2 py-3 text-center">No providers available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProviderAccordion;
