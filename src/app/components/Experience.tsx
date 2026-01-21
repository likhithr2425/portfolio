'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Transform scroll progress to fill percentage (0-100%)
  const fillProgress = useTransform(scrollYProgress, [0, 1], [0, 100])

  const experiences = [
    {
      role: 'SDE 1',
      company: 'Amazon',
      period: 'Jul 2025 – Present',
      description: 'Working as Software Development Engineer at Amazon, building scalable systems and contributing to core infrastructure projects.',
      highlights: [
        'High-throughput, fault-tolerant systems for 30M+ daily users',
        'Latency reduction from 180ms → 140ms',
        'Playback infra rollout to 70M+ users',
      ],
      tech: ['TypeScript', 'React', 'AWS', 'Node.js', 'DynamoDB'],
    },
    {
      role: 'SDE Intern',
      company: 'Amazon',
      period: 'Jan 2025 – Jun 2025',
      description: 'Completed intensive internship program, developing full-stack features and learning industry best practices at scale.',
      highlights: [
        'Event pipeline processing 15M+ events/day',
        'Feature-flagged experiments for 2M+ users',
      ],
      tech: ['JavaScript', 'AWS', 'System Design', 'React', 'Backend'],
    },
    {
      role: 'Software Developer',
      company: 'RockFort Labs Ventures',
      period: 'Feb 2024 – Jun 2024',
      description: 'Developed web applications using modern tech stack, collaborated with cross-functional teams on product development.',
      highlights: [
        'Serverless dashboards for ML inference logs',
        '40% load-time reduction',
      ],
      tech: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="relative py-32 px-6 bg-background overflow-hidden">
      {/* Scroll-driven background fill */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"
        style={{
          opacity: useTransform(fillProgress, [0, 100], [0, 0.15]),
          scaleY: useTransform(fillProgress, [0, 100], [0, 1]),
          transformOrigin: 'top',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-secondary text-sm tracking-widest uppercase mb-4">02. Work Experience</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">My Journey</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            From startups to Fortune 500 companies, building products that matter and learning along the way.
          </p>
        </motion.div>

        <div className="relative">
          {/* Elegant vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`relative md:flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Simple dot marker */}
                <div className="absolute left-0 md:left-1/2 top-2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-[5px] border-2 border-background" />

                {/* Content card */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-8 md:ml-0`}>
                  <div className="group">
                    <div className="mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-secondary font-medium">{exp.company}</p>
                      <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                    </div>

                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{exp.description}</p>

                    <ul className="space-y-1.5 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 mt-0.5">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 border border-secondary/30 rounded text-xs text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
