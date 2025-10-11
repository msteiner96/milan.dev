'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const allSkills = [
    'React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript',
    'CosmWasm', 'Soroban', 'Solidity', 'Web3.js', 'CosmJS',
    'Node.js', 'Express', 'GraphQL', 'REST APIs',
    'Tailwind CSS', 'Framer Motion', 'Material-UI',
    'React Native', 'Mobile Development', 'PWA',
    'PostgreSQL', 'MongoDB', 'Redis',
    'Git', 'Docker', 'CI/CD', 'Testing'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % allSkills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [allSkills.length]);

  const skillGroups = [
    {
      category: 'Frontend Mastery',
      gradient: 'from-blue-500 via-cyan-500 to-blue-600',
      skills: [
        { name: 'React', level: 'Expert', emoji: '⚛️', color: 'blue' },
        { name: 'Next.js', level: 'Expert', emoji: '▲', color: 'cyan' },
        { name: 'Vue.js', level: 'Advanced', emoji: '💚', color: 'green' },
        { name: 'TypeScript', level: 'Expert', emoji: '📘', color: 'blue' },
        { name: 'Tailwind CSS', level: 'Expert', emoji: '🎨', color: 'cyan' },
        { name: 'Framer Motion', level: 'Advanced', emoji: '✨', color: 'purple' },
      ],
    },
    {
      category: 'Blockchain & Web3',
      gradient: 'from-purple-500 via-pink-500 to-purple-600',
      skills: [
        { name: 'CosmWasm', level: 'Expert', emoji: '🌌', color: 'purple' },
        { name: 'CosmJS', level: 'Expert', emoji: '🚀', color: 'blue' },
        { name: 'Soroban', level: 'Advanced', emoji: '⭐', color: 'yellow' },
        { name: 'Solidity', level: 'Advanced', emoji: '💎', color: 'purple' },
        { name: 'Web3.js', level: 'Advanced', emoji: '🔗', color: 'orange' },
        { name: 'Smart Contracts', level: 'Expert', emoji: '📜', color: 'pink' },
      ],
    },
    {
      category: 'Backend & Infrastructure',
      gradient: 'from-green-500 via-emerald-500 to-green-600',
      skills: [
        { name: 'Node.js', level: 'Expert', emoji: '🟢', color: 'green' },
        { name: 'Express', level: 'Expert', emoji: '🚂', color: 'gray' },
        { name: 'GraphQL', level: 'Advanced', emoji: '◼️', color: 'pink' },
        { name: 'REST APIs', level: 'Expert', emoji: '🔌', color: 'blue' },
        { name: 'PostgreSQL', level: 'Advanced', emoji: '🐘', color: 'blue' },
        { name: 'MongoDB', level: 'Advanced', emoji: '🍃', color: 'green' },
      ],
    },
    {
      category: 'Mobile & Cross-Platform',
      gradient: 'from-orange-500 via-red-500 to-orange-600',
      skills: [
        { name: 'React Native', level: 'Expert', emoji: '📱', color: 'blue' },
        { name: 'Responsive Design', level: 'Expert', emoji: '📐', color: 'purple' },
        { name: 'PWA', level: 'Advanced', emoji: '⚡', color: 'yellow' },
        { name: 'Mobile-First', level: 'Expert', emoji: '🎯', color: 'red' },
      ],
    },
    {
      category: 'DevOps & Tools',
      gradient: 'from-indigo-500 via-purple-500 to-indigo-600',
      skills: [
        { name: 'Git', level: 'Expert', emoji: '🔀', color: 'orange' },
        { name: 'Docker', level: 'Advanced', emoji: '🐳', color: 'blue' },
        { name: 'CI/CD', level: 'Advanced', emoji: '🔄', color: 'green' },
        { name: 'Testing', level: 'Advanced', emoji: '✅', color: 'green' },
        { name: 'Redis', level: 'Advanced', emoji: '🔴', color: 'red' },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/5 to-black" />
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
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
            <div className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium backdrop-blur-sm">
              My Expertise
            </div>
          </motion.div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            Skills & <span className="gradient-text">Tech Stack</span>
          </h2>
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-blue-500 w-24" />
            <Sparkles className="text-green-400" size={24} />
            <div className="h-px bg-gradient-to-r from-blue-500 via-green-500 to-transparent w-24" />
          </motion.div>

          {/* Animated Skill Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-light">
              Specializing in
            </p>
            <div className="h-16 sm:h-20 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSkillIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text inline-block"
                >
                  {allSkills[currentSkillIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills - Modern Flowing Layout */}
        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: groupIndex * 0.15 }}
              className="relative"
            >
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: groupIndex * 0.15 + 0.2 }}
                className="mb-6"
              >
                <div className="flex items-center gap-4">
                  <div className={`h-1 w-12 bg-gradient-to-r ${group.gradient} rounded-full`} />
                  <h3 className="text-2xl font-bold text-white">{group.category}</h3>
                  <div className={`h-1 flex-1 bg-gradient-to-r ${group.gradient} rounded-full opacity-20`} />
                </div>
              </motion.div>

              {/* Skills Cloud */}
              <div className="relative">
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: groupIndex * 0.15 + skillIndex * 0.08,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="group relative"
                    >
                      <div className={`relative px-6 py-3 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl backdrop-blur-sm hover:border-white/40 transition-all cursor-default overflow-hidden`}>
                        {/* Animated background on hover */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${group.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                        />

                        {/* Content */}
                        <div className="relative flex items-center gap-3">
                          <motion.span
                            className="text-2xl leading-none"
                            animate={hoveredSkill === skill.name ? { rotate: [0, -10, 10, -10, 0], scale: [1, 1.2, 1] } : {}}
                            transition={{ duration: 0.5 }}
                          >
                            {skill.emoji}
                          </motion.span>
                          <div className="flex flex-col justify-center">
                            <div className="text-sm font-bold text-white leading-tight">{skill.name}</div>
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={hoveredSkill === skill.name ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className={`text-xs bg-gradient-to-r ${group.gradient} bg-clip-text text-transparent font-semibold leading-tight`}>
                                {skill.level}
                              </div>
                            </motion.div>
                          </div>
                        </div>

                        {/* Shimmer effect on hover */}
                        {hoveredSkill === skill.name && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                          />
                        )}
                      </div>

                      {/* Glow effect */}
                      <motion.div
                        className={`absolute -inset-1 bg-gradient-to-r ${group.gradient} opacity-0 group-hover:opacity-20 blur-lg -z-10 rounded-2xl transition-opacity`}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-500/10 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-sm hover:border-blue-500/40 transition-all overflow-hidden">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                />

                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4 text-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🚀
                </motion.div>

                {/* Number */}
                <div className="relative text-center">
                  <motion.div
                    className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    27+
                  </motion.div>
                  <div className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Technologies</div>
                  <div className="text-xs text-gray-500 mt-1">Mastered & Growing</div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl" />
              </div>
            </motion.div>

            {/* Years Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-500/10 border border-purple-500/20 rounded-3xl p-8 backdrop-blur-sm hover:border-purple-500/40 transition-all overflow-hidden">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                />

                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4 text-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ⏱️
                </motion.div>

                {/* Number */}
                <div className="relative text-center">
                  <motion.div
                    className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    5+
                  </motion.div>
                  <div className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Years</div>
                  <div className="text-xs text-gray-500 mt-1">Professional Experience</div>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-2xl" />
              </div>
            </motion.div>

            {/* Always Learning */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-green-500/10 border border-green-500/20 rounded-3xl p-8 backdrop-blur-sm hover:border-green-500/40 transition-all overflow-hidden">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                />

                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4 text-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                >
                  📚
                </motion.div>

                {/* Number */}
                <div className="relative text-center">
                  <motion.div
                    className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2"
                    whileHover={{ scale: 1.1 }}
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ∞
                  </motion.div>
                  <div className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Always Learning</div>
                  <div className="text-xs text-gray-500 mt-1">Never Stop Growing</div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-500/20 to-transparent rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>

          {/* Optional Quote/Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-400 italic">
              &ldquo;Constantly evolving with the tech landscape&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
