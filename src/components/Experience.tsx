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
      description: 'Building the future of decentralized applications. From concept to execution, I lead the technical vision and development of innovative blockchain solutions that make Web3 accessible to everyone.',
      icon: Briefcase,
      achievements: [
        'Built comprehensive dApp ecosystem from scratch',
        'Architected scalable Web3 infrastructure',
        'Led cross-functional development teams',
      ],
      color: 'from-orange-500 to-pink-500',
    },
    {
      year: '2021',
      title: 'HackAtom Winner',
      company: 'WYND DAO',
      location: 'Global Competition',
      description: 'Won the prestigious HackAtom competition with an innovative DAO governance solution. Showcased expertise in smart contract development and blockchain architecture on the Cosmos network.',
      icon: Award,
      achievements: [
        'First place in global blockchain competition',
        'Built advanced governance mechanisms',
        'Pioneered CosmWasm smart contract patterns',
      ],
      color: 'from-pink-500 to-purple-500',
    },
    {
      year: '2020 - Present',
      title: 'Open Source Contributor',
      company: 'Cosmos Ecosystem',
      location: 'Global',
      description: 'Original author of CosmWasmJS and active contributor to CosmJS. My work powers countless blockchain applications, making it easier for developers worldwide to build on Cosmos.',
      icon: GitBranch,
      achievements: [
        'Created CosmWasmJS SDK from the ground up',
        'Active contributor to CosmJS core',
        'Empowering thousands of developers globally',
      ],
      color: 'from-purple-500 to-orange-500',
    },
    {
      year: '2019 - Present',
      title: 'Senior Frontend Engineer',
      company: 'Freelance & Consulting',
      location: 'Remote - Worldwide',
      description: 'Crafting beautiful, high-performance web applications for startups and enterprises. Specializing in React, Vue.js, and modern JavaScript frameworks to deliver exceptional user experiences.',
      icon: Code,
      achievements: [
        'Built enterprise web applications and mobile apps',
        'Led technical architecture and development',
        'Delivered solutions across diverse industries',
      ],
      color: 'from-orange-500 to-pink-500',
    },
  ];

  return (
    <section id="experience" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/5 to-black" />
      <motion.div
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
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
            <div className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium backdrop-blur-sm">
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
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-pink-500 w-24" />
            <Sparkles className="text-orange-400" size={24} />
            <div className="h-px bg-gradient-to-r from-pink-500 via-purple-500 to-transparent w-24" />
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
              className="w-full bg-gradient-to-b from-orange-500 via-pink-500 to-purple-500"
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
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 transition-all">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-lg text-orange-400 font-semibold mb-2">
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
                  className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
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
