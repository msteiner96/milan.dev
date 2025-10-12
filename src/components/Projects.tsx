"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Smartphone,
  Sparkles,
  ArrowUpRight,
  Star,
  Code,
  Users,
} from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Phoenix Hub",
      description:
        "Your all-in-one platform for exploring the decentralized web. Built with React and cutting-edge Web3 technology, Phoenix Hub makes blockchain accessible and beautiful. Available on web and mobile.",
      image: "/projects/phoenix-hub.jpg",
      tags: ["React", "TypeScript", "Material-UI", "Web3", "Mobile"],
      links: {
        website: "https://phoenix-hub.io",
        app: "#",
      },
      stats: {
        icon: Users,
        label: "Active",
        value: "Live",
      },
      featured: true,
      gradient: "from-orange-500 via-pink-500 to-purple-500",
    },
    {
      title: "CosmJS",
      description:
        "Contributing to the powerhouse SDK that connects JavaScript developers to the Cosmos blockchain. My work helps thousands of developers build amazing decentralized apps with ease.",
      image: "/projects/cosmjs.png",
      tags: ["TypeScript", "Blockchain", "SDK", "Open Source", "Cosmos"],
      links: {
        github: "https://github.com/cosmos/cosmjs",
      },
      stats: {
        icon: Code,
        label: "Contributor",
        value: "Active",
      },
      gradient: "from-pink-500 via-purple-500 to-orange-500",
    },
    {
      title: "CosmWasmJS",
      description:
        "Created the original CosmWasmJS SDK that powers countless blockchain applications. This toolkit makes it simple for developers to interact with smart contracts on CosmWasm networks.",
      image: "/projects/cosmwasmjs.jpg",
      tags: ["TypeScript", "Smart Contracts", "CosmWasm", "SDK", "Web3"],
      links: {
        github: "https://github.com/CosmWasm/cosmwasm-js",
      },
      stats: {
        icon: Star,
        label: "Author",
        value: "Original",
      },
      gradient: "from-purple-500 via-pink-500 to-orange-500",
      archived: true,
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      ref={ref}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/5 to-black" />
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
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
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium backdrop-blur-sm">
              My Work
            </div>
          </motion.div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            Featured <span className="gradient-text">Projects</span>
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
            Showcasing my work in blockchain, open source, and cutting-edge web
            applications
          </p>
        </motion.div>

        {/* Projects Grid with Bento Box Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Project - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onHoverStart={() => setHoveredProject(0)}
            onHoverEnd={() => setHoveredProject(null)}
            className="lg:col-span-12 group relative"
            style={{ perspective: "1000px" }}
          >
            <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all backdrop-blur-sm">
              {/* Animated border gradient */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)`,
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative grid lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-80 lg:h-[500px] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    animate={
                      hoveredProject === 0 ? { scale: 1.1 } : { scale: 1 }
                    }
                    transition={{ duration: 0.6 }}
                    style={{ left: '-140px', width: 'calc(100% + 140px)' }}
                  >
                    <Image
                      src={projects[0].image}
                      alt={projects[0].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent lg:bg-gradient-to-r lg:from-black/90 lg:via-black/60 lg:to-transparent" />
                  </motion.div>

                  {/* Floating Stats Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="absolute top-6 left-6 z-10"
                  >
                    {(() => {
                      const StatsIcon = projects[0].stats.icon;
                      return (
                        <div className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full">
                          <StatsIcon size={16} className="text-orange-400" />
                          <span className="text-sm font-bold text-white">
                            {projects[0].stats.value}
                          </span>
                          <span className="text-xs text-gray-300">
                            {projects[0].stats.label}
                          </span>
                        </div>
                      );
                    })()}
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="relative p-8 lg:p-12 flex flex-col justify-center">
                  {/* Decorative Corner Element */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 opacity-20"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${projects[0].gradient} rounded-full blur-2xl`}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-full text-orange-400 text-xs font-medium mb-6">
                      <Sparkles size={12} />
                      <span>Featured Project</span>
                    </div>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                  >
                    {projects[0].title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="text-gray-300 text-lg leading-relaxed mb-8"
                  >
                    {projects[0].description}
                  </motion.p>

                  {/* Tags */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap gap-2 mb-8"
                  >
                    {projects[0].tags.map((tag, idx) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 + idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:border-white/30 hover:bg-white/10 transition-all cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 }}
                    className="flex flex-wrap gap-4"
                  >
                    <motion.a
                      href={projects[0].links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full text-white font-semibold overflow-hidden"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <ExternalLink size={18} className="relative z-10" />
                      <span className="relative z-10">Visit Website</span>
                      <ArrowUpRight
                        size={16}
                        className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                      />
                    </motion.a>
                    <motion.a
                      href={projects[0].links.app}
                      className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-full text-white font-semibold transition-all backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Smartphone size={18} />
                      <span>Get App</span>
                    </motion.a>
                  </motion.div>
                </div>
              </div>

              {/* Subtle glow */}
              <div
                className={`absolute -inset-px bg-gradient-to-br ${projects[0].gradient} opacity-0 group-hover:opacity-10 blur-2xl -z-10 rounded-3xl transition-opacity duration-500`}
              />
            </div>
          </motion.div>

          {/* Other Projects - Side by Side */}
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              onHoverStart={() => setHoveredProject(index + 1)}
              onHoverEnd={() => setHoveredProject(null)}
              className="lg:col-span-6 group relative"
              style={{ perspective: "1000px" }}
            >
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all backdrop-blur-sm">
                {/* Animated Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} blur-2xl rounded-full`}
                  />
                </motion.div>

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  <motion.div
                    className="relative w-full h-full flex items-center justify-center p-8"
                    animate={
                      hoveredProject === index + 1
                        ? { scale: 1.05 }
                        : { scale: 1 }
                    }
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Stats Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    className="absolute bottom-4 left-4 z-10"
                  >
                    {(() => {
                      const StatsIcon = project.stats.icon;
                      return (
                        <div className="flex items-center gap-2 px-3 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full">
                          <StatsIcon size={14} className="text-pink-400" />
                          <span className="text-xs font-bold text-white">
                            {project.stats.value}
                          </span>
                          <span className="text-xs text-gray-300">
                            {project.stats.label}
                          </span>
                        </div>
                      );
                    })()}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 transition-all">
                      {project.title}
                    </h3>
                    {project.archived && (
                      <span className="px-2.5 py-1 text-xs font-semibold bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-full backdrop-blur-sm">
                        Archived
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          delay: 0.7 + index * 0.1 + tagIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:border-white/30 hover:bg-white/10 transition-all cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Button */}
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-full text-white text-sm font-semibold transition-all backdrop-blur-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={16} />
                    <span>View Repository</span>
                    <ArrowUpRight
                      size={14}
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    />
                  </motion.a>
                </div>

                {/* Subtle glow */}
                <div
                  className={`absolute -inset-px bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 blur-2xl -z-10 rounded-3xl transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
