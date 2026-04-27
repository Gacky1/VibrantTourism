import { useState } from 'react';
import { IoSendOutline, IoAttachOutline } from 'react-icons/io5';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', file: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out. A VTC specialist will respond shortly.');
    setFormData({ name: '', email: '', subject: '', message: '', file: null });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-8">
      <h3 className="text-lg font-bold text-gray-dark mb-6">Send an Inquiry</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1.5">Full Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required
            className="form-input" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1.5">Email Address *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required
            className="form-input" placeholder="john@example.com" />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1.5">Subject *</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required
          className="form-input" placeholder="How can we help?" />
      </div>

      <div className="mb-4">
        <label className="block text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1.5">Message *</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
          className="form-input resize-none" placeholder="Your message..." />
      </div>

      <div className="mb-6">
        <label className="block text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1.5">
          <span className="flex items-center gap-1"><IoAttachOutline className="w-3.5 h-3.5" /> Attachment (Optional)</span>
        </label>
        <input type="file" name="file" onChange={handleChange}
          className="w-full text-sm text-gray-mid file:mr-3 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-secondary hover:file:bg-blue-100 cursor-pointer" />
      </div>

      <button type="submit" className="btn-primary w-full justify-center py-3">
        <IoSendOutline className="w-4 h-4" />
        Submit Message
      </button>
    </form>
  );
};

export default ContactForm;
