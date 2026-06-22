import { useState } from 'react';
import { IoSendOutline, IoAttachOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';

const Field = ({ label, children }) => (
  <div className="group/field">
    <label className="block text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1.5
      group-focus-within/field:text-secondary transition-colors duration-150">
      {label}
    </label>
    {children}
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', file: null });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '', file: null });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-8">
      <h3 className="text-lg font-bold text-gray-dark mb-1">Send an Inquiry</h3>
      <p className="text-[13px] text-gray-mid mb-6">We'll respond within 24 hours.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Field label="Full Name *">
          <input type="text" name="name" value={formData.name} onChange={handleChange} required
            className="form-input" placeholder="John Doe" />
        </Field>
        <Field label="Email Address *">
          <input type="email" name="email" value={formData.email} onChange={handleChange} required
            className="form-input" placeholder="john@example.com" />
        </Field>
      </div>

      <div className="mb-4">
        <Field label="Subject *">
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required
            className="form-input" placeholder="How can we help?" />
        </Field>
      </div>

      <div className="mb-4">
        <Field label="Message *">
          <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
            className="form-input resize-none" placeholder="Your message..." />
        </Field>
      </div>

      <div className="mb-7">
        <label className="block text-[11px] font-semibold text-gray-mid uppercase tracking-wider mb-1.5">
          <span className="flex items-center gap-1">
            <IoAttachOutline className="w-3.5 h-3.5" /> Attachment (Optional)
          </span>
        </label>
        <input type="file" name="file" onChange={handleChange}
          className="w-full text-sm text-gray-mid
            file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0
            file:text-xs file:font-semibold file:bg-blue-50 file:text-secondary
            hover:file:bg-blue-100 file:transition-colors file:duration-150 cursor-pointer" />
      </div>

      <button
        type="submit"
        disabled={submitted}
        className={`btn-primary w-full justify-center py-3.5 text-sm ${submitted ? 'opacity-80 cursor-default' : ''}`}
      >
        {submitted
          ? <><IoCheckmarkCircleOutline className="w-4 h-4" /> Message Sent!</>
          : <><IoSendOutline className="w-4 h-4" /> Submit Message</>
        }
      </button>
    </form>
  );
};

export default ContactForm;
