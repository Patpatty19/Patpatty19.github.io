import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBriefcase, FaMapMarkerAlt, FaRegCalendarAlt, FaCheckCircle } from 'react-icons/fa'
import GradientText from './reactbits/GradientText'

type ExperienceEntry = {
  role: string
  company: string
  type: string
  period: string
  location: string
  summary?: string
  highlights?: string[]
  tech?: string[]
}

const experiences: ExperienceEntry[] = [
  {
    role: 'Full-Stack Developer & QA Tester',
    company: 'WyzLab Solutions OPC',
    type: 'Internship',
    period: 'May 2026 – October 2026',
    location: 'Muntinlupa City, Philippines · Remote',
    summary:
      'Full-stack engineer intern on an unreleased SaaS learning platform, delivering production ' +
      'features across five user roles with Next.js, React, TypeScript, and Supabase (PostgreSQL).',
    highlights: [
      'Shipped full-stack features across five user roles (admin, agency, creator, learner, reviewer) on an unreleased SaaS learning platform built with Next.js, React, TypeScript, and Supabase (PostgreSQL).',
      'Led an end-to-end authentication migration, validating post-migration behavior across every role — including OTP password recovery and OAuth redirect handling.',
      'Strengthened application security through input validation, authentication and session hardening, data-access (row-level security) controls, and credential encryption.',
      'Delivered learner-facing features including cohort-based enrollment (CSV bulk import and auto-provisioning), gamified rewards, in-app and email notifications, and media/document handling.',
      'Performed manual, automated, and API testing across authentication, enrollment, editor, and learner flows, documenting reproducible defects with staging-build evidence.',
      'Maintained and hardened existing LLM-powered features, including prompt-injection defense and content-safety validation.',
    ],
    tech: [
      'Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'SQL', 'Node.js',
      'REST APIs', 'Zod', 'Row-Level Security', 'OAuth', 'Jest', 'Playwright', 'Git', 'GitHub', 'CI/CD',
    ],
  },
  {
    role: 'Network IT Intern',
    company: 'T2G Network Innovations',
    type: 'Internship',
    period: '2022',
    location: 'Philippines',
    summary: 'Earlier internship focused on network and IT infrastructure support.',
    tech: ['Networking', 'IT Support'],
  },
]

const Experience: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="container" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Experience</span>
        <h2 className="section-title">
          <GradientText
            colors={['#6366f1', '#8b5cf6', '#a855f7', '#6366f1']}
            animationSpeed={4}
          >
            Where I've worked
          </GradientText>
        </h2>
        <p className="section-description">
          Internship experience building, securing, and testing production software
        </p>
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.article
            key={`${exp.company}-${exp.role}`}
            className="experience-item"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="experience-marker" aria-hidden="true">
              <span className="experience-dot" />
            </div>

            <div className="experience-card">
              <div className="experience-head">
                <h3 className="experience-role">{exp.role}</h3>
                <div className="experience-company-row">
                  <span className="experience-company">{exp.company}</span>
                </div>
                <div className="experience-meta">
                  <span><FaRegCalendarAlt /> {exp.period}</span>
                  <span><FaMapMarkerAlt /> {exp.location}</span>
                  <span><FaBriefcase /> {exp.type}</span>
                </div>
              </div>

              {exp.summary && <p className="experience-summary">{exp.summary}</p>}

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="experience-highlights">
                  {exp.highlights.map((item) => (
                    <li key={item}>
                      <FaCheckCircle className="experience-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {exp.tech && exp.tech.length > 0 && (
                <div className="experience-tech">
                  {exp.tech.map((t) => (
                    <span key={t} className="experience-chip">{t}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default Experience
