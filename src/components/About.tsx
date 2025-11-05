"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Award,
  Briefcase,
  Code2,
  Globe,
  Sparkles,
  Zap,
  Rocket,
} from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    {
      icon: Code2,
      label: "Years Experience",
      value: "7+",
      color: "from-orange-500 to-pink-500",
      description: "Building exceptional web experiences",
    },
    {
      icon: Briefcase,
      label: "Projects Delivered",
      value: "20+",
      color: "from-pink-500 to-purple-500",
      description: "From concept to production",
    },
    {
      icon: Globe,
      label: "Open Source",
      value: "Active",
      color: "from-purple-500 to-orange-500",
      description: "Author of CosmWasmJS & Cosmos contributor",
    },
    {
      icon: Award,
      label: "Hackathon Wins",
      value: "2x",
      color: "from-orange-500 to-pink-500",
      description: "Hackmos 2025 Croatia & HackAtom winner",
    },
  ];

  const highlights = [
    { icon: Zap, text: "React & Vue.js Expert", color: "text-orange-400" },
    { icon: Rocket, text: "Blockchain Specialist", color: "text-pink-400" },
    { icon: Sparkles, text: "Web3 Pioneer", color: "text-purple-400" },
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      ref={ref}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black" />
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity }}
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
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium backdrop-blur-sm">
              Get to know me
            </div>
          </motion.div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            About <span className="gradient-text">Me</span>
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
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:border-white/20 transition-all group"
                  whileHover={{ scale: 1.05 }}
                >
                  <highlight.icon
                    className={`${highlight.color} group-hover:scale-110 transition-transform`}
                    size={16}
                  />
                  <span className="text-sm font-medium text-gray-300">
                    {highlight.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative pl-6 border-l-2 border-orange-500/50"
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  I turn complex ideas into beautiful, functional digital products. Whether it&apos;s a sleek{" "}
                  <span className="text-orange-400 font-bold">
                    corporate website
                  </span>, a powerful{" "}
                  <span className="text-pink-400 font-bold">web application</span>, or a groundbreaking{" "}
                  <span className="text-purple-400 font-bold">blockchain solution</span> — I&apos;ve got you covered.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative pl-6 border-l-2 border-pink-500/50"
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  Beyond just writing code, I{" "}
                  <span className="text-orange-400 font-bold">
                    lead teams and manage projects
                  </span>{" "}
                  from concept to launch. As the creator of{" "}
                  <span className="text-pink-400 font-bold">Phoenix Hub</span> and a{" "}
                  <span className="text-purple-400 font-bold">
                    2x hackathon winner
                  </span>{" "}
                  (Hackmos 2025 Croatia & HackAtom), I know what it takes to deliver exceptional results.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative pl-6 border-l-2 border-purple-500/50"
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  I&apos;m also the{" "}
                  <span className="text-orange-400 font-bold">
                    original author of CosmWasmJS
                  </span>{" "}
                  and an active contributor to the Cosmos ecosystem. My work powers countless blockchain applications, making Web3 more accessible to developers worldwide.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative p-8 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-purple-500/10 border-2 border-orange-500/20 rounded-2xl backdrop-blur-sm overflow-hidden group hover:border-orange-500/40 transition-all"
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <p className="text-xl text-white leading-relaxed font-semibold relative z-10">
                  Ready to bring your vision to life?
                </p>
                <p className="text-base text-gray-300 mt-2 relative z-10">
                  Let&apos;s build something amazing together. From small businesses to enterprise solutions — I&apos;m here to help.
                </p>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full text-white font-bold relative z-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                onHoverStart={() => setHoveredStat(index)}
                onHoverEnd={() => setHoveredStat(null)}
                className="relative group"
                whileHover={{ scale: 1.05, y: -8 }}
              >
                {/* Card Background */}
                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 transition-all group-hover:border-white/30 overflow-hidden backdrop-blur-sm">
                  {/* Animated gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />

                  {/* Sparkle effect on hover */}
                  {hoveredStat === index && (
                    <motion.div
                      className="absolute top-2 right-2"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sparkles size={16} className="text-white/50" />
                    </motion.div>
                  )}

                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} p-3 mb-4 group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  >
                    <stat.icon className="w-full h-full text-white" />
                  </motion.div>

                  {/* Value */}
                  <div className="text-2xl sm:text-4xl font-black mb-2 gradient-text">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm font-semibold text-gray-300 mb-2">
                    {stat.label}
                  </div>

                  {/* Description on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredStat === index ? 1 : 0,
                      height: hoveredStat === index ? "auto" : 0,
                    }}
                    className="text-xs text-gray-400 overflow-hidden"
                  >
                    {stat.description}
                  </motion.div>
                </div>

                {/* Glow effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-xl -z-10 rounded-2xl transition-opacity`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
