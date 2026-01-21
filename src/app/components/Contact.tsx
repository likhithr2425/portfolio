'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

export function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/likhithr2425',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/poreddy-sai-likhith-reddy-303769364/',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: 'mailto:likhithr.2425@gmail.com',
      icon: Mail,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="contact" className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-secondary text-sm tracking-widest uppercase mb-4">Get In Touch</p>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Let's build something amazing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities to collaborate.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6 justify-center my-12">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              // Use anchor tag for mailto links, Link component for others
              const isMailto = link.url.startsWith('mailto:')
              
              if (isMailto) {
                return (
                  <a
                    key={index}
                    href={link.url}
                    className="group flex items-center gap-2 px-6 py-3 border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </a>
                )
              }
              
              return (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-border/20"
        >
          <p className="text-xs text-muted-foreground tracking-widest uppercase">
            © 2025 Likhith. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
