'use client'

import React from "react"

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management and payment processing.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Tailwind CSS'],
    image: 'bg-gradient-to-br from-blue-600 to-blue-800',
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates, drag-and-drop interface, and team collaboration features.',
    tech: ['React', 'Firebase', 'Redux', 'Material-UI', 'Socket.io'],
    image: 'bg-gradient-to-br from-purple-600 to-purple-800',
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    title: 'AI Content Generator',
    description: 'AI-powered content generation platform using GPT API with prompt engineering and content optimization.',
    tech: ['Next.js', 'OpenAI API', 'React Query', 'Supabase', 'Vercel AI SDK'],
    image: 'bg-gradient-to-br from-orange-600 to-orange-800',
    links: {
      github: '#',
      live: '#',
    },
  },
]

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      gsap.to(cardRef.current, {
        '--mouse-x': `${x}px`,
        '--mouse-y': `${y}px`,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto',
      } as any)
    }

    cardRef.current.addEventListener('mousemove', handleMouseMove)
    return () => cardRef.current?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: '-100px' }}
      className="group relative h-full"
      style={{
        '--mouse-x': '0px',
        '--mouse-y': '0px',
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>

      <div className="relative h-full p-6 bg-secondary border border-border/50 group-hover:border-primary/50 rounded-xl overflow-hidden transition-all duration-300 backdrop-blur-sm">
        {/* Background Image */}
        <div className={`absolute inset-0 ${project.image} opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-foreground/60 mt-3 leading-relaxed flex-grow">{project.description}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-primary/20 text-accent rounded-full border border-primary/30 hover:border-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-border/50">
            <a
              href={project.links.github}
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-medium text-sm"
            >
              <Github size={18} />
              Code
            </a>
            <a
              href={project.links.live}
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors font-medium text-sm ml-auto"
            >
              Live Demo
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={sectionRef} className="relative w-full py-32 px-4 md:px-8 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">03. Featured Projects</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            My Work
          </h2>
          <p className="text-foreground/60 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            A selection of projects showcasing my skills in full-stack development, system design, and modern web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/60 mb-6">
            Interested in seeing more? Check out my GitHub for additional projects.
          </p>
          <a
            href="https://github.com/likhithr2425"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <Github size={20} />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}
