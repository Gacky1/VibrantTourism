import { IoStar, IoCheckmarkCircle, IoCloseCircleOutline,
         IoBookmarkOutline, IoLogoWhatsapp, IoTrashOutline } from 'react-icons/io5';

const StarRow = ({ rating }) => (
  <div className="flex items-center gap-0.5 mt-1">
    {[1,2,3,4,5].map(i => (
      <IoStar key={i} className={`w-3.5 h-3.5 ${i <= Math.floor(rating) ? 'text-amber-400' : 'text-slate-200'}`} />
    ))}
    <span className="text-[11px] text-slate-500 ml-1 font-bold">{rating}</span>
  </div>
);

const ComparisonTable = ({ providers, onRemove, onBook }) => {
  if (!providers.length) return null;

  // Collect all unique facilities across selected providers
  const allFacilities = [...new Set(providers.flatMap(p => p.facilities || []))];

  return (
    <div className="w-full overflow-x-auto rounded-3xl border border-slate-150 shadow-sm bg-white">
      <div className="min-w-[700px] p-6">
        {/* Header row — provider images + names */}
        <div className="grid gap-4 mb-6" style={{ gridTemplateColumns: `200px repeat(${providers.length}, 1fr)` }}>
          <div className="flex items-end pb-3 border-b-2 border-slate-100">
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Key Comparison</span>
          </div>
          {providers.map(p => (
            <div key={p.id} className="bg-slate-50/50 rounded-2xl border border-slate-100 overflow-hidden relative group">
              <div className="relative h-28 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => onRemove(p.id)}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 hover:bg-red-500 hover:text-white flex items-center justify-center text-slate-400 transition-colors shadow-sm cursor-pointer"
                  title="Remove from comparison"
                >
                  <IoTrashOutline className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="p-3">
                <h4 className="text-[13px] font-extrabold text-[#0A2540] leading-tight truncate uppercase tracking-wide">{p.name}</h4>
                <StarRow rating={p.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Comparison rows */}
        {[
          {
            label: 'Pricing',
            render: p => <span className="text-[13.5px] font-black text-blue-600">{p.price}</span>,
          },
          {
            label: 'Category Type',
            render: p => <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-[10px] font-extrabold uppercase tracking-wide text-slate-600">{p.category}</span>,
          },
          {
            label: 'Key Attributes',
            render: p => (
              <div className="flex flex-wrap gap-1 justify-center">
                {p.tags.slice(0, 2).map((t, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-blue-50 border border-blue-100 text-[9px] font-extrabold uppercase tracking-wide text-blue-600">{t}</span>
                ))}
              </div>
            ),
          },
          ...allFacilities.map(fac => ({
            label: fac,
            render: p => p.facilities?.includes(fac)
              ? <IoCheckmarkCircle    className="w-5 h-5 text-emerald-500" />
              : <IoCloseCircleOutline className="w-5 h-5 text-slate-200"  />,
          })),
        ].map((row, ri) => (
          <div
            key={ri}
            className={`grid gap-4 py-3.5 items-center border-b border-slate-100 ${
              ri % 2 === 0 ? 'bg-slate-50/25' : 'bg-transparent'
            }`}
            style={{ gridTemplateColumns: `200px repeat(${providers.length}, 1fr)` }}
          >
            <span className="text-[12px] font-extrabold text-[#0A2540] uppercase tracking-wide pl-2">{row.label}</span>
            {providers.map(p => (
              <div key={p.id} className="flex justify-center">{row.render(p)}</div>
            ))}
          </div>
        ))}

        {/* Book row */}
        <div className="grid gap-4 pt-6" style={{ gridTemplateColumns: `200px repeat(${providers.length}, 1fr)` }}>
          <div />
          {providers.map(p => (
            <div key={p.id} className="flex flex-col gap-2">
              <button
                onClick={() => onBook(p)}
                className="btn-primary w-full justify-center text-xs py-3 rounded-xl shadow-md cursor-pointer hover:bg-blue-700 transition-all"
              >
                <IoBookmarkOutline className="w-3.5 h-3.5" /> Book Now
              </button>
              
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-green-200 text-green-600 hover:bg-green-50 transition-all text-xs font-black uppercase tracking-wider"
              >
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
