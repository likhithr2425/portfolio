'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    title: 'SDE 1',
    company: 'Amazon',
    period: 'July 2025 - Present',
    description:
      'Working as Software Development Engineer at Amazon, building scalable systems and contributing to core infrastructure projects.',
    skills: ['TypeScript', 'React', 'AWS', 'Node.js', 'DynamoDB'],
    icon: '🚀',
  },
  {
    title: 'SDE Intern',
    company: 'Amazon',
    period: 'January 2025 - June 2025',
    description:
      'Completed intensive internship program, developing full-stack features and learning industry best practices at scale.',
    skills: ['JavaScript', 'AWS', 'System Design', 'React', 'Backend'],
    icon: '💼',
  },
  {
    title: 'Software Developer',
    company: 'RockFort Lab Ventures',
    period: 'February 2024 - June 2024',
    description:
      'Developed web applications using modern tech stack, collaborated with cross-functional teams on product development.',
    skills: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    icon: '⚡',
  },
]

const EducationCard = ({ experience, index }: { experience: (typeof experiences)[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="relative group"
    >
      <div className="absolute -left-20 top-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl ring-4 ring-background">
        {experience.icon}
      </div>

      <div className="ml-0 p-6 bg-secondary hover:bg-secondary/80 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-xl font-bold text-foreground">{experience.title}</h3>
            <p className="text-accent font-medium">{experience.company}</p>
          </div>
          <span className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full whitespace-nowrap ml-4">
            {experience.period}
          </span>
        </div>

        <p className="text-foreground/70 my-4 leading-relaxed">{experience.description}</p>

        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium bg-primary/20 text-accent rounded-full border border-primary/30 hover:border-primary transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!timelineRef.current) return

    gsap.fromTo(
      timelineRef.current,
      { backgroundSize: '100% 0%' },
      {
        backgroundSize: '100% 100%',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full py-32 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">02. Work Experience</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-foreground/60 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            From startups to Fortune 500 companies, building products that matter and learning along the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="relative space-y-12"
          style={{
            backgroundImage: `linear-gradient(to bottom, var(--primary), var(--primary))`,
            backgroundSize: '100% 0%',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent md:transform md:-translate-x-1/2"></div>

          {/* Experience Cards */}
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`relative ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:w-5/12 md:pr-12' : 'md:ml-auto md:w-5/12 md:pl-12'}`}
            >
              <EducationCard experience={experience} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
