'use client';

import { motion } from 'framer-motion';
import { Github, Mail, Heart, ArrowUp, Send, MessageSquare } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/msteiner96',
      label: 'GitHub',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Send,
      href: 'https://t.me/milan_cosmos',
      label: 'Telegram',
      gradient: 'from-orange-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      href: 'https://discord.com/users/milan_cosmos',
      label: 'Discord',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: Mail,
      href: '#contact',
      label: 'Email',
      gradient: 'from-orange-500 to-purple-500'
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/5 to-black" />
      <motion.div
        className="absolute -bottom-32 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              className="text-2xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              milancodes.dev
            </motion.h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Crafting beautiful web experiences and pioneering blockchain solutions. Let&apos;s build something amazing together.
            </p>
            <motion.div
              className="flex items-center gap-2 text-sm text-gray-400"
              whileHover={{ scale: 1.05 }}
            >
              <span>Built with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500 fill-red-500" />
              </motion.div>
              <span>using Next.js & Tailwind</span>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-400 transition-all inline-block group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10 hover:border-white/30 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} className="relative z-10" />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity`}
                  />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Available for freelance projects and collaboration
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} milancodes.dev. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="p-2 bg-gradient-to-r from-orange-600 to-pink-600 rounded-lg hover:from-orange-700 hover:to-pink-700 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
