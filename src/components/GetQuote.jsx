import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Calculator, 
  PhoneCall, 
  Mail, 
  Send, 
  Sparkles,
  Calendar,
  TrendingDown,
  Clock,
  CheckCircle2,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// ✅ EmailJS Config
const EMAILJS_SERVICE_ID  = 'service_v7ddpcj';
const EMAILJS_TEMPLATE_ID = 'template_p1i266b';
const EMAILJS_PUBLIC_KEY  = 'PFg3iKU7VtDcyjEWG';

// ✅ Calendly Link - Replace with your actual Calendly URL
const CALENDLY_URL = 'https://calendly.com/naturesaura-net/30min';

export default function GetQuote() {
  const navigate = useNavigate();

  // Quick Request form state
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  // ── Validation ──────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!formData.from_name.trim())  e.from_name  = 'Name is required';
    if (!formData.from_email.trim()) e.from_email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.from_email)) e.from_email = 'Enter a valid email';
    if (!formData.message.trim())    e.message    = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  // ── Submit Quick Request ─────────────────────────────
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
          form_type:  '⚡ Quick Request',
          from_name:  formData.from_name,
          company:    'N/A',
          from_email: formData.from_email,
          phone:      'N/A',
          subject:    'Quick Request',
          message:    formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ from_name: '', from_email: '', message: '' });

    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section className="relative bg-[#020617] min-h-screen py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-cyan-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.4em]">Get Started</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight tracking-wide">
            Get a{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              Quote
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
            See how Shah Traders can save you time and money. Choose the option that works best for you.
          </p>
        </motion.div>

        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {/* ── Card 1: Quote Calculator ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all shadow-xl"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl flex items-center justify-center border border-cyan-400/30 mb-6 group-hover:scale-110 transition-transform">
              <Calculator className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Quote Calculator</h3>
            <p className="text-gray-400 mb-4">
              Calculate approximate costs in minutes with our self-service tool.
            </p>
            <div className="flex items-center gap-2 text-sm text-cyan-400 mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Get instant estimates</span>
            </div>
            <button
              onClick={() => navigate('/calculator')}
              className="w-full px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-400 to-cyan-600 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60 hover:scale-[1.02] transition-all duration-300"
            >
              Try Calculator
            </button>
          </motion.div>

          {/* ── Card 2: Book a Call ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-400/30 transition-all shadow-xl relative overflow-hidden"
          >
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-400/30 rounded-full px-3 py-1">
              <span className="text-xs font-semibold text-green-400">Save 20% avg.</span>
            </div>

            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-purple-400/30 mb-6 group-hover:scale-110 transition-transform">
              <PhoneCall className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Book a Call</h3>
            <p className="text-gray-400 mb-4">
              Let's save you money. Book a call with our team now.
            </p>
            <div className="flex items-center gap-2 text-sm text-purple-400 mb-6">
              <TrendingDown className="w-4 h-4" />
              <span>Clients save 20% on average</span>
            </div>

            {/* ✅ Opens Calendly in new tab */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Schedule a Call
            </a>
          </motion.div>

          {/* ── Card 3: Quick Request ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
            className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-pink-400/30 transition-all shadow-xl"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl flex items-center justify-center border border-pink-400/30 mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Quick Request</h3>
            <p className="text-gray-400 text-sm mb-4">Get a response within 1 business hour.</p>

            {/* ✅ SUCCESS STATE */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-6 text-center"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-3 border border-green-400/30">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-white font-bold mb-1">Request Sent! 🎉</h4>
                <p className="text-gray-400 text-xs mb-4">We'll get back to you within 1 hour.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:scale-105 transition-all"
                >
                  Send Another
                </button>
              </motion.div>
            )}

            {/* ✅ FORM STATE */}
            {status !== 'success' && (
              <form className="space-y-3" onSubmit={handleSubmit} noValidate>

                {/* Error Banner */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
                  </div>
                )}

                {/* Name */}
                <div>
                  <input
                    type="text" name="from_name" value={formData.from_name}
                    onChange={handleChange} placeholder="Your name"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-400/50 transition-all duration-300 ${errors.from_name ? 'border-red-500/50' : 'border-white/10'}`}
                  />
                  {errors.from_name && <p className="text-red-400 text-xs mt-1">{errors.from_name}</p>}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email" name="from_email" value={formData.from_email}
                    onChange={handleChange} placeholder="Work email"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-400/50 transition-all duration-300 ${errors.from_email ? 'border-red-500/50' : 'border-white/10'}`}
                  />
                  {errors.from_email && <p className="text-red-400 text-xs mt-1">{errors.from_email}</p>}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows="2" name="message" value={formData.message}
                    onChange={handleChange} placeholder="How can we help?"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-400/50 transition-all duration-300 resize-none ${errors.message ? 'border-red-500/50' : 'border-white/10'}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-600 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/60 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : (
                    <>Send Request <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}

            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>1 hour response time</span>
            </div>
          </motion.div>
        </div>

        {/* Direct Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#020617] px-6 text-gray-500">Or contact us directly</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:+17865941795" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/30 group-hover:bg-cyan-500/10 transition-all">
                <PhoneCall className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-lg">+17865941795</span>
            </a>
            <a href="mailto:info@shahtraders.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/30 group-hover:bg-cyan-500/10 transition-all">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-lg">info@shahtradrs.com</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
