'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

export function Projects() {
  const projects = [
    {
      title: 'GitDeploy',
      description: 'CI/CD Platform for automated deployments with real-time monitoring and rollback capabilities.',
      highlights: [
        'Reduced release time by 65%',
        '99.2% deployment success rate',
      ],
      tech: ['TypeScript', 'Prisma', 'Stripe'],
      gradient: 'from-blue-600 to-blue-400',
      github: 'https://github.com/likhithr2425/gitDeploy',
      demo: null,
    },
    {
      title: 'CryptoTracker',
      description: 'Real-time cryptocurrency tracking app with live price updates and portfolio management.',
      highlights: [
        'Kotlin + Jetpack Compose + MVI',
        'Real-time crypto data visualization',
      ],
      tech: ['React', 'Firebase', 'Redux', 'Material-UI'],
      gradient: 'from-purple-600 to-purple-400',
      github: null,
      demo: null,
    },
    {
      title: 'Vocalize',
      description: 'Real-time collaborative music platform with strict state consistency and WebSocket support.',
      highlights: [
        '200+ concurrent users',
        'Strict state consistency',
      ],
      tech: ['Next.js', 'OpenAI API', 'React Query', 'Supabase'],
      gradient: 'from-amber-600 to-amber-400',
      github: null,
      demo: null,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-secondary text-sm tracking-widest uppercase mb-4">03. Featured Projects</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">Selected Work</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Gradient preview */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>

              {/* Card */}
              <div className="relative bg-card border border-border/50 p-6 h-full flex flex-col hover:border-border transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-1 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start">
                      <span className="text-secondary mr-2">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 border border-secondary rounded-full text-xs text-secondary hover:bg-secondary/10 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border/30">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Interested in seeing more? Check out my GitHub for additional projects.
          </p>
          <Link
            href="https://github.com/likhithr2425"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-foreground font-medium hover:opacity-90 transition-all duration-300 group"
          >
            <Github size={20} />
            View All Projects
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
