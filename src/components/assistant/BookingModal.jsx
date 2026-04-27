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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(10,37,64,0.7)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative h-52 overflow-hidden rounded-t-2xl">
          <img src={provider.image} alt={provider.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-gray-dark hover:bg-white transition-colors shadow-md"
          >
            <IoCloseOutline className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-5">
            <h2 className="text-white text-xl font-bold">{provider.name}</h2>
            <div className="flex items-center gap-1 mt-1">
              {[1,2,3,4,5].map(i => (
                <IoStar key={i} className={`w-3.5 h-3.5 ${i <= Math.floor(provider.rating) ? 'text-amber-400' : 'text-white/30'}`} />
              ))}
              <span className="text-white/80 text-[12px] ml-1">{provider.rating} rating</span>
            </div>
          </div>
          <div className="absolute bottom-4 right-5 bg-white/95 rounded-lg px-3 py-1.5">
            <span className="text-[13px] font-bold text-gray-dark">{provider.price}</span>
          </div>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <IoCheckmarkCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-dark mb-2">Booking Request Sent!</h3>
              <p className="text-gray-mid text-sm mb-6">
                Our team will contact you within 24 hours to confirm your booking at {provider.name}.
              </p>
              <div className="flex gap-3 justify-center">
                <a href={provider.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-colors">
                  <IoLogoWhatsapp className="w-4 h-4" /> Chat on WhatsApp
                </a>
                <button onClick={onClose}
                  className="px-5 py-2.5 rounded-lg border border-gray-200 text-gray-mid text-sm font-semibold hover:border-secondary hover:text-secondary transition-colors">
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Description + facilities */}
              <p className="text-[14px] text-gray-mid leading-relaxed mb-4">{provider.description}</p>

              <div className="mb-5">
                <p className="text-[11px] font-bold text-gray-dark uppercase tracking-wider mb-2">Facilities Included</p>
                <div className="flex flex-wrap gap-2">
                  {(provider.facilities || []).map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5 bg-blue-50 rounded-lg px-3 py-1.5">
                      <IoCheckmarkCircle className="w-3.5 h-3.5 text-secondary" />
                      <span className="text-[12px] font-medium text-gray-dark">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick contact */}
              <div className="flex gap-3 mb-6">
                <a href={provider.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white text-xs font-semibold hover:bg-green-600 transition-colors">
                  <IoLogoWhatsapp className="w-4 h-4" /> WhatsApp
                </a>
                <a href="tel:+911112345678"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-mid text-xs font-semibold hover:border-secondary hover:text-secondary transition-colors">
                  <IoCallOutline className="w-4 h-4" /> Call
                </a>
                <a href="mailto:info@vibranttourism.in"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-mid text-xs font-semibold hover:border-secondary hover:text-secondary transition-colors">
                  <IoMailOutline className="w-4 h-4" /> Email
                </a>
              </div>

              {/* Booking form */}
              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-base font-bold text-gray-dark mb-4">Request a Booking</h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1">Full Name *</label>
                      <input type="text" required value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                        className="form-input" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1">Phone *</label>
                      <input type="tel" required value={form.phone}
                        onChange={e => setForm({...form, phone: e.target.value})}
                        className="form-input" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1">
                        <span className="flex items-center gap-1"><IoCalendarOutline className="w-3 h-3" /> Travel Date *</span>
                      </label>
                      <input type="date" required value={form.date}
                        onChange={e => setForm({...form, date: e.target.value})}
                        className="form-input" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1">
                        <span className="flex items-center gap-1"><IoPeopleOutline className="w-3 h-3" /> Guests</span>
                      </label>
                      <select value={form.guests} onChange={e => setForm({...form, guests: e.target.value})} className="form-input">
                        {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1">Special Requests</label>
                    <textarea rows={2} value={form.notes}
                      onChange={e => setForm({...form, notes: e.target.value})}
                      className="form-input resize-none" placeholder="Any special requirements..." />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center py-3">
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
