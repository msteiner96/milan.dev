'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Sparkles, User, MessageSquare, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Get reCAPTCHA token
      const captchaToken = recaptchaRef.current?.getValue();

      if (!captchaToken) {
        setStatus('error');
        setErrorMessage('Please complete the captcha');
        return;
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        console.error('Failed to parse response:', parseError);
        throw new Error('Invalid response from server');
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      recaptchaRef.current?.reset();

      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
      recaptchaRef.current?.reset();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Send,
      label: 'Telegram',
      value: '@milan_cosmos',
      link: 'https://t.me/milan_cosmos',
      gradient: 'from-blue-400 to-blue-600',
      description: 'Quick responses & updates',
    },
    {
      icon: MessageSquare,
      label: 'Discord',
      value: 'milan_cosmos',
      link: 'https://discord.com/users/milan_cosmos',
      gradient: 'from-indigo-500 to-purple-600',
      description: 'Community & collaboration',
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black" />
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
              Let&apos;s Work Together
            </div>
          </motion.div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-purple-500 w-24" />
            <Sparkles className="text-blue-400" size={24} />
            <div className="h-px bg-gradient-to-r from-purple-500 via-blue-500 to-transparent w-24" />
          </motion.div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate? Send me a message and let&apos;s create something amazing together
          </p>
        </motion.div>

        {/* Availability Banner - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="relative bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 border border-green-500/30 rounded-3xl p-8 sm:p-10 backdrop-blur-sm overflow-hidden group hover:border-green-400/50 transition-all">
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-emerald-500/10 to-teal-500/5"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% 100%' }}
            />

            {/* Floating particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-green-400/30 rounded-full"
                style={{
                  left: `${20 + i * 30}%`,
                  top: '50%',
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5,
                }}
              />
            ))}

            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Left side - Status indicator */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  {/* Pulsing rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-green-400/20"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-green-400/20"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  {/* Center dot */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="relative w-6 h-6 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                  />
                </div>

                <div className="text-left">
                  <motion.div
                    className="text-2xl sm:text-3xl font-black text-white mb-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Available for Work
                  </motion.div>
                  <motion.div
                    className="text-sm sm:text-base text-green-300 font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Ready to start immediately
                  </motion.div>
                </div>
              </div>

              {/* Right side - Info chips */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {['Freelance', 'Consulting', 'Full-time'].map((type, i) => (
                  <motion.div
                    key={type}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-400/30 hover:border-green-400/50 rounded-full backdrop-blur-sm transition-all cursor-default"
                  >
                    <span className="text-sm font-semibold text-green-200">
                      {type}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 blur-2xl -z-10 rounded-3xl transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* Contact Info & Form Grid */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Side - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-400">
                Feel free to reach out through the form or via my direct contact methods below.
              </p>
            </div>

            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/30 transition-all overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
                      backgroundSize: '200% 200%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex p-3 bg-gradient-to-br ${method.gradient} rounded-xl mb-4`}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <method.icon size={24} className="text-white" />
                    </motion.div>

                    {/* Label */}
                    <h4 className="text-xl font-bold text-white mb-1">{method.label}</h4>
                    <p className="text-xs text-gray-400 mb-3">{method.description}</p>

                    {/* Value */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-300 font-mono break-all">
                        {method.value}
                      </div>
                    </div>

                    {/* Action Button */}
                    <motion.a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/btn inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${method.gradient} hover:opacity-90 rounded-lg text-white text-sm font-semibold transition-all shadow-lg`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Open {method.label}</span>
                      <motion.span
                        className="group-hover/btn:translate-x-1 transition-transform"
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </div>

                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 blur-xl -z-10 rounded-2xl transition-opacity`} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-sm overflow-hidden">
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)',
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                      <User size={16} className="text-blue-400" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                      <Mail size={16} className="text-purple-400" />
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                      <MessageSquare size={16} className="text-cyan-400" />
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  {/* reCAPTCHA v2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex justify-start"
                  >
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                      theme="dark"
                    />
                  </motion.div>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400"
                    >
                      <CheckCircle size={20} />
                      <span className="font-medium">Message sent successfully! I&apos;ll get back to you soon.</span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400"
                    >
                      <AlertCircle size={20} />
                      <span className="font-medium">{errorMessage || 'Failed to send message. Please try again.'}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      className={`group w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:opacity-90 rounded-xl text-white font-bold transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-3 ${
                        status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                      whileHover={status !== 'loading' ? { scale: 1.02, y: -2 } : {}}
                      whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 hover:opacity-10 blur-xl -z-10 rounded-3xl transition-opacity" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
