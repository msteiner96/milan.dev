'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, Briefcase, Code, GitBranch, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const timeline = [
    {
      year: '2021 - Present',
      title: 'Creator & Lead Developer',
      company: 'Phoenix Hub',
      location: 'Remote',
      description: 'Leading development of cutting-edge decentralized applications and web platforms. Architecting scalable solutions and managing technical strategy for blockchain projects.',
      icon: Briefcase,
      achievements: [
        'Built comprehensive dApp ecosystem',
        'Designed scalable architecture',
        'Led technical strategy and development',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      year: '2021',
      title: 'HackAtom Winner',
      company: 'WYND DAO',
      location: 'Global Competition',
      description: 'Won HackAtom competition with an innovative DAO solution. Built advanced governance mechanisms and smart contract architecture on CosmWasm.',
      icon: Award,
      achievements: [
        'Award-winning blockchain solution',
        'Advanced governance mechanisms',
        'Smart contract innovation',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      year: '2020 - Present',
      title: 'Open Source Contributor',
      company: 'Cosmos Ecosystem',
      location: 'Global',
      description: 'Active contributor to CosmJS and CosmWasmJS - essential TypeScript libraries for the Cosmos ecosystem. Helping developers worldwide build blockchain applications.',
      icon: GitBranch,
      achievements: [
        'Core contributor to CosmJS',
        'CosmWasmJS development',
        'Supporting global developer community',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      year: '2019 - Present',
      title: 'Senior Frontend Engineer',
      company: 'Various Projects',
      location: 'Worldwide',
      description: 'Delivered 50+ successful projects ranging from enterprise web applications to mobile apps. Specialized in React, Vue.js, and modern web technologies.',
      icon: Code,
      achievements: [
        '50+ successful projects delivered',
        'Enterprise-level applications',
        'Modern web technology expertise',
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="experience" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
      <motion.div
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative max-w-6xl mx-auto">
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
            <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium backdrop-blur-sm">
              My Journey
            </div>
          </motion.div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-blue-500 w-24" />
            <Sparkles className="text-purple-400" size={24} />
            <div className="h-px bg-gradient-to-r from-blue-500 via-purple-500 to-transparent w-24" />
          </motion.div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building innovative solutions and contributing to the blockchain ecosystem
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Content Card */}
                <motion.div
                  className="w-full md:w-5/12 mb-8 md:mb-0"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-white/30 transition-all group">
                    {/* Icon Badge */}
                    <div className="absolute -top-6 left-8 md:left-auto md:-right-6">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-xl`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon size={32} className="text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="mt-8">
                      {/* Year Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 mb-4">
                        <Calendar size={14} />
                        {item.year}
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-lg text-purple-400 font-semibold mb-2">
                        {item.company}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                        <MapPin size={14} />
                        {item.location}
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: hoveredIndex === index ? 'auto' : 0,
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-white/10 space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color} mt-2 shrink-0`} />
                              <span className="text-sm text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Sparkle indicator for more info */}
                    {hoveredIndex !== index && (
                      <div className="absolute bottom-4 right-4 text-xs text-gray-500 flex items-center gap-1">
                        <Sparkles size={12} />
                        <span>Hover for details</span>
                      </div>
                    )}
                  </div>

                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-xl -z-10 rounded-3xl transition-opacity`}
                  />
                </motion.div>

                {/* Center Timeline Dot */}
                <motion.div
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                >
                  <div className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-full border-4 border-black shadow-lg`}>
                    <motion.div
                      className="w-full h-full rounded-full"
                      animate={hoveredIndex === index ? { scale: [1, 1.5, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
