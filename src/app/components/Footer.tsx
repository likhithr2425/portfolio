'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Twitter } from 'lucide-react'

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/likhithr2425',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/poreddy-sai-likhith-reddy-303769364/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:likhithr.2425@gmail.com',
    label: 'Email',
  },
]

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full bg-gradient-to-t from-background to-secondary/20 border-t border-border/50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Top Section */}
        <div className="mb-16 pb-12 border-b border-border/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Let's build something amazing together
            </h3>
            <p className="text-foreground/60 text-lg leading-relaxed mb-8">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <a
              href="mailto:likhithreddy.dev@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-opacity group"
            >
              Start a conversation
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Likhith
            </h4>
            <p className="text-foreground/60 text-sm leading-relaxed">
              A passionate software engineer building beautiful and functional digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5 className="font-bold mb-4">Quick Links</h5>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h5 className="font-bold mb-4">Connect</h5>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all border border-border/50 hover:border-primary"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between text-foreground/60 text-sm"
        >
          <p>
            © {currentYear} Likhith. Built with <span className="text-accent">React</span>, <span className="text-primary">Next.js</span>, and love.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
