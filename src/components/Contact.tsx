'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Sparkles, Send, Copy, CheckCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, item: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'milan@moonbite.space',
      link: 'mailto:milan@moonbite.space',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Best for detailed inquiries',
    },
    {
      icon: Send,
      label: 'Telegram',
      value: '@milan_cosmos',
      link: 'https://t.me/milan_cosmos',
      gradient: 'from-blue-400 to-blue-600',
      description: 'Quick responses & updates',
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

      <div className="relative max-w-5xl mx-auto">
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
              Let's Work Together
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
            Ready to collaborate? Reach out and let's create something amazing together
          </p>
        </motion.div>

        {/* Availability Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-3xl p-8 backdrop-blur-sm overflow-hidden group hover:border-green-500/40 transition-all">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-4 h-4 bg-green-400 rounded-full shrink-0"
              />
              <div>
                <div className="text-2xl font-bold text-white mb-2">Currently Available for Work</div>
                <div className="text-gray-300">Open for freelance projects, consulting, and exciting collaborations</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-white/30 transition-all overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
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
                    className={`inline-flex p-4 bg-gradient-to-br ${method.gradient} rounded-2xl mb-6`}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <method.icon size={32} className="text-white" />
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-2xl font-bold text-white mb-2">{method.label}</h3>
                  <p className="text-sm text-gray-400 mb-6">{method.description}</p>

                  {/* Value with copy button */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-mono text-sm sm:text-base break-all">
                      {method.value}
                    </div>
                    <motion.button
                      onClick={() => copyToClipboard(method.value, method.label)}
                      className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-xl transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title="Copy to clipboard"
                    >
                      {copiedItem === method.label ? (
                        <CheckCircle size={20} className="text-green-400" />
                      ) : (
                        <Copy size={20} className="text-gray-400" />
                      )}
                    </motion.button>
                  </div>

                  {/* Action Button */}
                  <motion.a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${method.gradient} hover:opacity-90 rounded-xl text-white font-semibold transition-all shadow-lg`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{method.label === 'Email' ? 'Send Email' : 'Open Telegram'}</span>
                    <motion.span
                      className="group-hover/btn:translate-x-1 transition-transform"
                    >
                      →
                    </motion.span>
                  </motion.a>

                  {/* Copied notification */}
                  {copiedItem === method.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-4 right-4 px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm font-medium backdrop-blur-sm"
                    >
                      Copied!
                    </motion.div>
                  )}
                </div>

                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 blur-xl -z-10 rounded-3xl transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-lg">
            Prefer email for detailed project discussions or Telegram for quick chats
          </p>
        </motion.div>
      </div>
    </section>
  );
}
