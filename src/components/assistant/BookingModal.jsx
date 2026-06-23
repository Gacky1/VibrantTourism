import { useState } from 'react';
import { IoCloseOutline, IoStar, IoCheckmarkCircle, IoLogoWhatsapp,
         IoCallOutline, IoMailOutline, IoCalendarOutline, IoPeopleOutline } from 'react-icons/io5';

const BookingModal = ({ provider, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', guests: '2', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!provider) return null;

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-gray-dark focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Image Cover */}
        <div className="relative h-56 overflow-hidden rounded-t-3xl">
          <img src={provider.image} alt={provider.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/5" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#0A2540] flex items-center justify-center transition-all shadow-md cursor-pointer"
            aria-label="Close booking modal"
          >
            <IoCloseOutline className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-4 left-5 pr-5">
            <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest text-amber-300 mb-1">VTC Verified Booking</span>
            <h2 className="text-white text-xl md:text-2xl font-black uppercase tracking-wide leading-tight">{provider.name}</h2>
            <div className="flex items-center gap-1 mt-1.5">
              {[1,2,3,4,5].map(i => (
                <IoStar key={i} className={`w-3.5 h-3.5 ${i <= Math.floor(provider.rating) ? 'text-amber-400' : 'text-white/20'}`} />
              ))}
              <span className="text-white/80 text-[11px] font-bold ml-1">{provider.rating} rating</span>
            </div>
          </div>
          <div className="absolute bottom-4 right-5 bg-white/95 rounded-xl px-3 py-1.5 border border-slate-100 shadow-sm">
            <span className="text-[12.5px] font-black text-[#0A2540]">{provider.price}</span>
          </div>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <IoCheckmarkCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-scale-in" />
              <h3 className="text-xl font-black text-[#0A2540] mb-2 uppercase tracking-wide">Request Received!</h3>
              <p className="text-slate-500 text-sm max-w-sm mx-auto mb-8 font-semibold leading-relaxed">
                Your request has been forwarded directly. VTC team will connect with you via email or phone within 24 hours.
              </p>
              <div className="flex gap-3 justify-center">
                <a
                  href={provider.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white text-xs font-black uppercase tracking-wider transition-all shadow-md"
                >
                  <IoLogoWhatsapp className="w-4 h-4" /> Chat on WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl border border-slate-200 text-slate-600 text-xs font-black uppercase tracking-wider hover:border-blue-600 hover:text-blue-600 transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <>
              <p className="text-[13.5px] text-slate-500 leading-relaxed font-semibold mb-5">{provider.description}</p>

              {/* Facilities grid */}
              <div className="mb-6">
                <p className="text-[10px] font-black text-[#0A2540] uppercase tracking-widest mb-2.5">Included Highlights</p>
                <div className="flex flex-wrap gap-2">
                  {(provider.facilities || []).map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 rounded-lg px-3 py-1.5 shadow-xs">
                      <IoCheckmarkCircle className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-[11.5px] font-bold text-slate-600">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct channels */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-100 pb-5">
                <a
                  href={provider.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 h-9 rounded-lg bg-green-500 hover:bg-green-600 text-white text-[11px] font-black uppercase tracking-wider transition-all shadow-sm"
                >
                  <IoLogoWhatsapp className="w-4 h-4" /> WhatsApp Direct
                </a>
                <a
                  href="tel:+911112345678"
                  className="flex items-center gap-2 px-4 h-9 rounded-lg border border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-colors text-[11px] font-black uppercase tracking-wider"
                >
                  <IoCallOutline className="w-4 h-4" /> Call VTC
                </a>
                <a
                  href="mailto:info@vibranttourism.in"
                  className="flex items-center gap-2 px-4 h-9 rounded-lg border border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-colors text-[11px] font-black uppercase tracking-wider"
                >
                  <IoMailOutline className="w-4 h-4" /> Email Us
                </a>
              </div>

              {/* Booking form */}
              <div>
                <h3 className="text-xs font-black text-[#0A2540] uppercase tracking-widest mb-4">Request Booking Package</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-black text-[#0A2540] uppercase tracking-wider mb-1.5">Full Name *</label>
                      <input type="text" required value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                        className={inputClass} placeholder="Enter your name" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-[#0A2540] uppercase tracking-wider mb-1.5">Contact Number *</label>
                      <input type="tel" required value={form.phone}
                        onChange={e => setForm({...form, phone: e.target.value})}
                        className={inputClass} placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-black text-[#0A2540] uppercase tracking-wider mb-1.5">
                        <span className="flex items-center gap-1"><IoCalendarOutline className="w-3.5 h-3.5 text-blue-600" /> Travel Date *</span>
                      </label>
                      <input type="date" required value={form.date}
                        onChange={e => setForm({...form, date: e.target.value})}
                        className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-[#0A2540] uppercase tracking-wider mb-1.5">
                        <span className="flex items-center gap-1"><IoPeopleOutline className="w-3.5 h-3.5 text-blue-600" /> Total Guests</span>
                      </label>
                      <select value={form.guests} onChange={e => setForm({...form, guests: e.target.value})} className={inputClass}>
                        {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-[#0A2540] uppercase tracking-wider mb-1.5">Special Notes / Requests</label>
                    <textarea rows={2} value={form.notes}
                      onChange={e => setForm({...form, notes: e.target.value})}
                      className={`${inputClass} resize-none`} placeholder="Any specific dietary, accessibility, or path requests..." />
                  </div>
                  
                  <button type="submit" className="btn-primary w-full justify-center py-4 rounded-xl shadow-md cursor-pointer hover:bg-blue-700 transition-all font-extrabold text-xs uppercase tracking-wider">
                    Confirm Booking Request
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
