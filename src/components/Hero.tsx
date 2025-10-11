'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    // Set initial window size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Mesh */}
        <motion.div
          className="absolute inset-0 opacity-60"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 20%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Grid Pattern - Static */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse 100% 60% at 50% 50%, black 0%, transparent 100%)',
          }}
        />

        {/* Floating Orbs */}
        {[...Array(5)].map((_, i) => {
          const startX = (i * windowSize.width) / 5;
          const startY = (i * windowSize.height) / 5;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl"
              style={{
                width: 300,
                height: 300,
                background: `radial-gradient(circle, ${
                  ['rgba(59, 130, 246, 0.15)', 'rgba(139, 92, 246, 0.15)', 'rgba(6, 182, 212, 0.15)'][i % 3]
                } 0%, transparent 70%)`,
              }}
              initial={{ x: startX, y: startY }}
              animate={{
                x: [startX, startX + 200, startX - 100, startX],
                y: [startY, startY - 150, startY + 100, startY],
              }}
              transition={{
                duration: 25 + i * 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          );
        })}

        {/* Particle System */}
        {[...Array(30)].map((_, i) => {
          const startX = (Math.random() * windowSize.width);
          const startY = (Math.random() * windowSize.height);
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
              initial={{ x: startX, y: startY }}
              animate={{
                y: [startY, startY - 100, startY + 50, startY],
                x: [startX, startX + 50, startX - 30, startX],
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 15 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          );
        })}

        {/* Spotlight Effect */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          animate={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
          }}
          transition={{ type: 'spring', damping: 40, stiffness: 50, mass: 0.5 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Elements */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mb-12"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="text-blue-400" size={20} />
          </motion.div>
          <span className="text-sm sm:text-base text-gray-400 font-mono tracking-wider uppercase">
            Available for Work
          </span>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="text-purple-400" size={20} />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="relative text-6xl sm:text-8xl lg:text-9xl font-black mb-6"
        >
          <span className="gradient-text inline-block">
            Milan
          </span>
          {/* Glow effect */}
          <motion.span
            className="absolute inset-0 gradient-text blur-2xl opacity-50 pointer-events-none"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Milan
          </motion.span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-16 sm:w-24"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-16 sm:w-24"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Senior Frontend Engineer
          </h2>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <motion.span
              className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm sm:text-base font-medium backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.4)' }}
            >
              Blockchain Architect
            </motion.span>
            <motion.span
              className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm sm:text-base font-medium backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.4)' }}
            >
              dApp Specialist
            </motion.span>
            <motion.span
              className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm sm:text-base font-medium backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.4)' }}
            >
              Web3 Expert
            </motion.span>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg lg:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Building the decentralized future, one dApp at a time.
          Creator of <span className="text-blue-400 font-semibold">Phoenix Hub</span> and
          <span className="text-purple-400 font-semibold"> HackAtom Winner</span>.
        </motion.p>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="https://github.com/msteiner96"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-2xl transition-all border border-white/10 overflow-hidden"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Github size={24} className="relative z-10" />
          </motion.a>
          <motion.a
            href="#contact"
            className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-2xl transition-all border border-white/10 overflow-hidden"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Email"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Mail size={24} className="relative z-10" />
          </motion.a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full text-white font-bold transition-all overflow-hidden shadow-2xl shadow-blue-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600"
              initial={{ x: '100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full text-white font-bold transition-all border-2 border-white/20 hover:border-white/40"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-gray-400" />
      </motion.a>
    </section>
  );
}
