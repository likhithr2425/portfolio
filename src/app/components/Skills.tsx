'use client'

import { motion } from 'framer-motion'

export function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      items: ['Java', 'C++', 'Python', 'TypeScript', 'Kotlin', 'Go'],
    },
    {
      title: 'Backend & Systems',
      items: ['Distributed Systems', 'Microservices', 'Event-Driven Architecture', 'System Design', 'High-Throughput Systems'],
    },
    {
      title: 'Cloud & DevOps',
      items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'PostgreSQL', 'Redis'],
    },
    {
      title: 'Frontend',
      items: ['React', 'React Native', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Mobile',
      items: ['Android', 'Kotlin', 'Jetpack Compose', 'MVI Architecture'],
    },
    {
      title: 'Tools & Practices',
      items: ['Git', 'Linux', 'Performance Optimization', 'Observability', 'Code Review'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="skills" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
            Expertise
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-foreground">
            Skills & Technologies
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={categoryVariants}>
              <h3 className="text-sm tracking-widest text-muted-foreground uppercase mb-6 font-medium">
                {category.title}
              </h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="px-4 py-2 bg-primary text-primary-foreground rounded transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-default hover:bg-accent">
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
