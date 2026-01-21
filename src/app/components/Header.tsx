'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-primary tracking-tight">
          LK
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="text-sm px-6 py-2.5 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300"
        >
          Get In Touch
        </a>
      </div>
    </motion.header>
  )
}
