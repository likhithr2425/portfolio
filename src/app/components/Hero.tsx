'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.p variants={itemVariants} className="text-secondary text-sm tracking-widest uppercase font-medium">
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold text-primary leading-tight"
          >
            Likhith
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-md leading-relaxed"
          >
            SDE at Amazon | Full-Stack Developer | Tech Enthusiast
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base text-muted-foreground max-w-lg leading-relaxed"
          >
            Crafting elegant solutions and building scalable systems. Currently working on cutting-edge projects at Amazon while exploring modern web technologies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 pt-4"
          >
            <Link
              href="https://github.com/likhithr2425"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 flex items-center gap-2 group"
            >
              GitHub
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition-all duration-300 flex items-center gap-2 group"
            >
              Contact
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center h-96 relative"
        >
          <iframe
            src="https://my.spline.design/3a0e7933-4ce5-47d7-aa9c-cdfdd973f9b5/scene"
            frameBorder="0"
            width="100%"
            height="100%"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            loading="lazy"
            allow="accelerometer; ambient-light-sensor; autoplay; camera; display-capture; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; payment; picture-in-picture; usb; vr; xr-spatial-tracking"
            allowFullScreen={true}
          />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-center text-muted-foreground text-sm">Scroll to explore</div>
      </motion.div>
    </section>
  )
}
