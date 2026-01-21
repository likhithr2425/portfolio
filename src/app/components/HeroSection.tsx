'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { Github, Mail, ExternalLink } from 'lucide-react'

export function HeroSection() {
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const scrollProgress = 1 - rect.top / window.innerHeight

      if (titleRef.current) {
        gsap.to(titleRef.current, {
          y: scrollProgress * 100,
          opacity: Math.max(1 - scrollProgress * 2, 0),
          duration: 0.1,
          overwrite: 'auto',
        })
      }

      if (subtitleRef.current) {
        gsap.to(subtitleRef.current, {
          y: scrollProgress * 50,
          opacity: Math.max(1 - scrollProgress * 1.5, 0),
          duration: 0.1,
          overwrite: 'auto',
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-between overflow-hidden bg-gradient-to-b from-background via-background to-primary/5"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Left Content */}
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex-1 px-8 md:px-16 max-w-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-7xl font-bold mt-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-tight"
        >
          Likhith
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          ref={subtitleRef}
          className="text-xl md:text-2xl text-foreground/80 mt-4 leading-relaxed"
        >
          SDE at Amazon | Full-Stack Developer | Tech Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-foreground/60 mt-6 leading-relaxed max-w-md"
        >
          Crafting elegant solutions and building scalable systems. Currently working on cutting-edge projects at Amazon while exploring modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-6 mt-10"
        >
          <a
            href="https://github.com/likhithr2425"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/80 text-primary-foreground transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            GitHub
            <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="mailto:likhithr.2425@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 transform hover:scale-105"
          >
            <Mail size={20} />
            Contact
          </a>
        </motion.div>
      </motion.div>

      {/* Right Content - 3D Character */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-5 flex-1 h-full hidden lg:flex items-center justify-center"
      >
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-foreground/60 text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
