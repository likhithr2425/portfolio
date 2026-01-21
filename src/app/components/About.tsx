'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-secondary text-sm tracking-widest uppercase mb-4">01. About Me</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Who I Am
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl lg:text-2xl leading-relaxed text-muted-foreground max-w-3xl"
        >
          Software Engineer with 16+ months of production experience building scalable, performance-critical systems across mobile and backend platforms. Strong focus on reliability, observability, and distributed systems at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-sm tracking-widest text-muted-foreground uppercase mb-3 font-medium">Current Role</h3>
            <p className="text-lg text-foreground">
              Software Development Engineer I at Amazon
            </p>
          </div>

          <div>
            <h3 className="text-sm tracking-widest text-muted-foreground uppercase mb-3 font-medium">Education</h3>
            <p className="text-lg text-foreground">
              Sastra University, Tamil Nadu
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
