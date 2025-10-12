'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0 pb-16 sm:pb-0">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Mesh */}
        <motion.div
          className="absolute inset-0 opacity-60"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
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
            backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(249, 115, 22, 0.15) 1px, transparent 1px)`,
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
                  ['rgba(249, 115, 22, 0.15)', 'rgba(236, 72, 153, 0.15)', 'rgba(139, 92, 246, 0.15)'][i % 3]
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
              className="absolute w-1 h-1 bg-orange-400/40 rounded-full"
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
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, transparent 70%)',
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
        <motion.div
          variants={itemVariants}
          className="mb-6 relative"
        >
          {/* Greeting with wave */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <motion.span
              className="text-2xl sm:text-3xl"
              animate={{
                rotate: [0, 14, -8, 14, -4, 10, 0],
                y: [0, -2, 0, -2, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
            >
              👋
            </motion.span>
            <span className="text-xl sm:text-2xl text-gray-400 font-light tracking-wide">
              Hey, I&apos;m
            </span>
          </div>

          {/* Name with split gradient animation */}
          <h1 className="relative text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {['M', 'i', 'l', 'a', 'n'].map((letter, index) => (
                <motion.span
                  key={index}
                  className="gradient-text inline-block"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [-2, 2, -2, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>

            {/* Enhanced glow effect */}
            <motion.span
              className="absolute inset-0 gradient-text blur-3xl opacity-40 pointer-events-none"
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Milan
            </motion.span>
          </h1>
        </motion.div>

        {/* Open to work indicator - Moved higher for visibility */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm mb-2"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(34, 197, 94, 0)',
                '0 0 0 8px rgba(34, 197, 94, 0.1)',
                '0 0 0 0 rgba(34, 197, 94, 0)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-2.5 h-2.5 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-green-400 font-semibold text-sm sm:text-base">
              Available for Hire
            </span>
          </motion.div>
          <p className="text-xs sm:text-sm text-gray-400">
            Trusted by startups & enterprises • 7+ years experience
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-16 sm:w-24"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
          <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
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
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 tracking-tight">
            I Bring Your Digital Dreams to Life ✨
          </h2>

          {/* Engaging description for all audiences */}
          <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            From stunning <span className="text-orange-400 font-semibold">websites</span> to powerful{' '}
            <span className="text-pink-400 font-semibold">web apps</span> and cutting-edge{' '}
            <span className="text-purple-400 font-semibold">blockchain solutions</span> —
            I craft digital experiences that wow your users and grow your business.
          </p>

          {/* What I do - Simple & Clear */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <motion.span
              className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm sm:text-base font-medium backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgba(249, 115, 22, 0.4)' }}
            >
              💼 Websites & Web Apps
            </motion.span>
            <motion.span
              className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm sm:text-base font-medium backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgba(236, 72, 153, 0.4)' }}
            >
              🚀 Blockchain & Web3
            </motion.span>
            <motion.span
              className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm sm:text-base font-medium backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.4)' }}
            >
              👥 Team Leadership
            </motion.span>
          </div>
        </motion.div>

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
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Github size={24} className="relative z-10" />
          </motion.a>
          <motion.a
            href="#contact"
            className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-2xl transition-all border border-white/10 overflow-hidden"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Email"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
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
            className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 rounded-full text-white font-bold transition-all overflow-hidden shadow-2xl shadow-orange-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600"
              initial={{ x: '100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              See What I&apos;ve Built
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
            Let&apos;s Talk About Your Project
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
