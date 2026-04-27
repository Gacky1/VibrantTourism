import { IoStar, IoCheckmarkCircle, IoCloseCircleOutline,
         IoBookmarkOutline, IoLogoWhatsapp, IoTrashOutline } from 'react-icons/io5';

const ALL_FACILITIES = ['Free WiFi', 'Restaurant', 'Spa', 'Pool', 'Parking', 'Safari Desk',
                        'Bonfire', 'Guided Tours', 'Pickup & Drop', 'Meals', 'Transport'];

const StarRow = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1,2,3,4,5].map(i => (
      <IoStar key={i} className={`w-3.5 h-3.5 ${i <= Math.floor(rating) ? 'text-amber-400' : 'text-gray-200'}`} />
    ))}
    <span className="text-[11px] text-gray-mid ml-1 font-semibold">{rating}</span>
  </div>
);

const ComparisonTable = ({ providers, onRemove, onBook }) => {
  if (!providers.length) return null;

  // Collect all unique facilities across selected providers
  const allFacilities = [...new Set(providers.flatMap(p => p.facilities || []))];

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px]">
        {/* Header row — provider images + names */}
        <div className={`grid gap-3 mb-3`} style={{ gridTemplateColumns: `180px repeat(${providers.length}, 1fr)` }}>
          <div className="flex items-end pb-2">
            <span className="text-[11px] font-bold text-gray-mid uppercase tracking-wider">Feature</span>
          </div>
          {providers.map(p => (
            <div key={p.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="relative h-28 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <button
                  onClick={() => onRemove(p.id)}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/90 flex items-center justify-center text-gray-mid hover:text-red-500 transition-colors"
                >
                  <IoTrashOutline className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="p-3">
                <h4 className="text-[13px] font-bold text-gray-dark leading-tight mb-1">{p.name}</h4>
                <StarRow rating={p.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Comparison rows */}
        {[
          {
            label: 'Price',
            render: p => <span className="text-[13px] font-bold text-secondary">{p.price}</span>,
          },
          {
            label: 'Category',
            render: p => <span className="tag capitalize">{p.category}</span>,
          },
          {
            label: 'Tags',
            render: p => (
              <div className="flex flex-wrap gap-1">
                {p.tags.map((t, i) => <span key={i} className="tag text-[10px]">{t}</span>)}
              </div>
            ),
          },
          ...allFacilities.map(fac => ({
            label: fac,
            render: p => p.facilities?.includes(fac)
              ? <IoCheckmarkCircle    className="w-5 h-5 text-green-500" />
              : <IoCloseCircleOutline className="w-5 h-5 text-gray-200"  />,
          })),
        ].map((row, ri) => (
          <div
            key={ri}
            className={`grid gap-3 py-2.5 border-b border-gray-100 items-center`}
            style={{ gridTemplateColumns: `180px repeat(${providers.length}, 1fr)` }}
          >
            <span className="text-[12px] font-semibold text-gray-mid">{row.label}</span>
            {providers.map(p => (
              <div key={p.id} className="flex justify-center">{row.render(p)}</div>
            ))}
          </div>
        ))}

        {/* Book row */}
        <div className="grid gap-3 pt-4" style={{ gridTemplateColumns: `180px repeat(${providers.length}, 1fr)` }}>
          <div />
          {providers.map(p => (
            <div key={p.id} className="flex flex-col gap-2">
              <button onClick={() => onBook(p)} className="btn-primary w-full justify-center text-xs py-2">
                <IoBookmarkOutline className="w-3.5 h-3.5" /> Book Now
              </button>
              <a href={p.link} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 rounded-lg border border-green-300 text-green-600 hover:bg-green-50 transition-colors text-xs font-semibold">
                <IoLogoWhatsapp className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
