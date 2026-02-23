import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  MapPin, Phone, Mail, Clock, Send,
  Building2, Users, CheckCircle2, Loader2, AlertCircle
} from 'lucide-react';

// ✅ EmailJS Config
const EMAILJS_SERVICE_ID  = 'service_v7ddpcj';
const EMAILJS_TEMPLATE_ID = 'template_p1i266b';
const EMAILJS_PUBLIC_KEY  = 'PFg3iKU7VtDcyjEWG';

export default function ContactUs() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    from_name: '',
    company: '',
    from_email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.from_name.trim())  e.from_name  = 'Full name is required';
    if (!formData.from_email.trim()) e.from_email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.from_email)) e.from_email = 'Enter a valid email';
    if (!formData.message.trim())    e.message    = 'Message is required';
    if (!formData.consent)           e.consent    = 'Please agree to the privacy policy';
    return e;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          form_type: 'Contact Us Message',
          from_name: formData.from_name,
          company:   formData.company || 'N/A',
          from_email: formData.from_email,
          phone:     formData.phone   || 'N/A',
          subject:   formData.subject || 'General Inquiry',
          message:   formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ from_name:'', company:'', from_email:'', phone:'', subject:'', message:'', consent: false });

    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section className="relative bg-[#020617] min-h-screen py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-cyan-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-6 md:px-8 lg:px-16">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.4em]">Get in Touch</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Us</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed font-light">
            We're here to help with any questions about our 3PL solutions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl flex items-center justify-center border border-cyan-400/30">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">Verified</span>
                  </div>
                  <p className="text-2xl font-bold text-white">1,000+</p>
                  <p className="text-slate-400 text-sm font-light">client inquiries answered last month</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-cyan-400/30 transition-all duration-300 shadow-lg group">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center border border-orange-400/30 mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">Ohio, US</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-cyan-400/30 transition-all duration-300 shadow-lg group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center border border-purple-400/30 mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                <a href="tel:+17865941795" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm block font-light">Phone: +17865941795</a>
                <a href="tel:+17865941795" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm block mt-1 font-light">Whatsapp: +17865941795</a>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-cyan-400/30 transition-all duration-300 shadow-lg group">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center border border-pink-400/30 mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                <a href="mailto:info@shahtradrs.com" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm block font-light">info@shahtradrs.com</a>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-cyan-400/30 transition-all duration-300 shadow-lg group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-400/30 mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Hours</h3>
                <p className="text-slate-400 text-sm font-light">Mon-Fri: 8:00 AM - 6:00 PM LocalTime<br />Sat-Sun: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-400/30">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent! 🎉</h3>
                  <p className="text-slate-400 text-sm max-w-xs">Thank you for reaching out. We'll get back to you within 1 business hour.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 text-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}

              {status !== 'success' && (
                <form ref={formRef} className="space-y-5" onSubmit={handleSubmit} noValidate>

                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <p className="text-red-400 text-sm">Something went wrong. Please try again or email us directly.</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-sm mb-2 font-light">Full name *</label>
                      <input
                        type="text" name="from_name" value={formData.from_name}
                        onChange={handleChange} placeholder="John Doe"
                        className={`w-full px-4 py-3 bg-white/5 border rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 ${errors.from_name ? 'border-red-500/50' : 'border-white/10 focus:border-cyan-400/50'}`}
                      />
                      {errors.from_name && <p className="text-red-400 text-xs mt-1">{errors.from_name}</p>}
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm mb-2 font-light">Company name</label>
                      <input
                        type="text" name="company" value={formData.company}
                        onChange={handleChange} placeholder="3PL Center"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-sm mb-2 font-light">Email *</label>
                      <input
                        type="email" name="from_email" value={formData.from_email}
                        onChange={handleChange} placeholder="john@company.com"
                        className={`w-full px-4 py-3 bg-white/5 border rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 ${errors.from_email ? 'border-red-500/50' : 'border-white/10 focus:border-cyan-400/50'}`}
                      />
                      {errors.from_email && <p className="text-red-400 text-xs mt-1">{errors.from_email}</p>}
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm mb-2 font-light">Phone number</label>
                      <input
                        type="tel" name="phone" value={formData.phone}
                        onChange={handleChange} placeholder="(555) 123-4567"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-sm mb-2 font-light">Subject</label>
                    <select
                      name="subject" value={formData.subject} onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-gray-900">Select a topic</option>
                      <option value="Sales & Pricing" className="bg-gray-900">Sales & Pricing</option>
                      <option value="Customer Support" className="bg-gray-900">Customer Support</option>
                      <option value="Partnership" className="bg-gray-900">Partnership</option>
                      <option value="Other" className="bg-gray-900">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-sm mb-2 font-light">Message *</label>
                    <textarea
                      rows="5" name="message" value={formData.message}
                      onChange={handleChange} placeholder="How can we help you?"
                      className={`w-full px-4 py-3 bg-white/5 border rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 resize-none ${errors.message ? 'border-red-500/50' : 'border-white/10 focus:border-cyan-400/50'}`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <div>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox" id="consent" name="consent"
                        checked={formData.consent} onChange={handleChange}
                        className="mt-1 w-4 h-4 bg-white/5 border border-white/10 rounded cursor-pointer"
                      />
                      <label htmlFor="consent" className="text-sm text-slate-400 font-light cursor-pointer">
                        I agree to be contacted about my inquiry and understand the
                        <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors ml-1">privacy policy</a>.
                      </label>
                    </div>
                    {errors.consent && <p className="text-red-400 text-xs mt-1 ml-7">{errors.consent}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60 hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 text-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-5 h-5" /> Send Message</>
                    )}
                  </button>

                  <p className="text-xs text-center text-slate-500 font-light">
                    * Required fields. We typically respond within 1 business hour.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* ✅ UPDATED: Map showing Ohio, US */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">Our Location — Ohio, US</h3>
            </div>
            <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/5">
              <iframe
                title="Shah Traders - Ohio US Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1556567.7692593513!2d-84.81996!3d40.367474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b0e1954aab97b%3A0x9140b7ff7e4e8b8f!2sOhio%2C%20USA!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

