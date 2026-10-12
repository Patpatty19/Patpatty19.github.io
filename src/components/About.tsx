import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaAward,
  FaCertificate,
  FaTrophy,
  FaMedal,
  FaFileDownload
} from 'react-icons/fa'
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiPython,
  SiPhp,
  SiLaravel,
  SiFlutter,
  SiMysql,
  SiFirebase,
  SiCplusplus,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql,
  SiJest
} from 'react-icons/si'
import { FaJava, FaVial } from 'react-icons/fa'
import { TbBrandKotlin, TbBrandCSharp } from 'react-icons/tb'
import GradientText from './reactbits/GradientText'
import Magnet from './reactbits/Magnet'

const skills = [
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#64748b' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'HTML/CSS', icon: SiHtml5, color: '#E34F26' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
  { name: 'SQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Jest', icon: SiJest, color: '#C21325' },
  { name: 'Playwright', icon: FaVial, color: '#2EAD33' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'Kotlin', icon: TbBrandKotlin, color: '#7F52FF' },
  { name: 'C#', icon: TbBrandCSharp, color: '#512BD4' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
]

const awards = [
  {
    icon: FaTrophy,
    title: 'Multiple Innovation Honors, 3rd Inabel Awards',
    org: 'Design & Experience, Internet of Things, and Enterprise Systems Innovation · 2026',
  },
  {
    icon: FaCertificate,
    title: 'Alibaba Cloud Certification',
    org: 'Alibaba Cloud - "AI Journey with Alibaba Cloud" seminar',
  },
  {
    icon: FaAward,
    title: '2nd Runner-Up, Shark Tank Convention',
    org: 'CIIT College - Technopreneurship Event',
  },
  {
    icon: FaMedal,
    title: 'Best Industry-Ready Project (Nominee)',
    org: '2nd Inabel Awards - Weaving the Best Filipino Creatives · 2025',
  },
  {
    icon: FaAward,
    title: 'Project Showcase Representative',
    org: 'CIIT College Open House Event',
  },
]

const About: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="container" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">About Me</span>
        <h2 className="section-title">
          <GradientText
            colors={['#6366f1', '#8b5cf6', '#a855f7', '#6366f1']}
            animationSpeed={4}
          >
            Get to know me
          </GradientText>
        </h2>
        <p className="section-description">
          Full-stack developer and QA tester focused on building, securing, and testing production software
        </p>
      </motion.div>

      <motion.div
        className="about-layout"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Left Column - Profile & Info */}
        <div className="about-left">
          <motion.div className="about-profile" variants={itemVariants}>
            <div className="about-image-container">
              <img 
                src="/profile.jpg" 
                alt="Babala" 
                className="about-image"
              />
              <div className="about-image-border" />
            </div>
          </motion.div>

          <motion.p className="about-intro" variants={itemVariants}>
            I'm a <strong>Software Engineering student</strong> at CIIT College of Arts and Technology
            and a full-stack developer and QA tester with internship experience building, securing, and
            testing a production web platform. Skilled in Next.js, React, TypeScript, and Supabase
            (PostgreSQL), with strengths in authentication, application security, and software quality
            assurance. I combine web and mobile development (Java, Flutter, Kotlin, PHP/Laravel) with a
            proven ability to ship and review production code in fast-moving teams.
          </motion.p>
        </div>

        {/* Right Column - Skills, Awards & Stats */}
        <div className="about-right">
          <motion.div className="about-section" variants={itemVariants}>
            <h3 className="about-section-title">Tech Stack</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <Magnet key={skill.name} magnetStrength={2} padding={10}>
                  <motion.div
                    className="skill-icon-wrapper"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ '--skill-color': skill.color } as React.CSSProperties}
                  >
                    <skill.icon className="skill-icon" style={{ color: skill.color }} />
                    <span className="skill-tooltip">{skill.name}</span>
                  </motion.div>
                </Magnet>
              ))}
            </div>
          </motion.div>

          <motion.div className="about-section" variants={itemVariants}>
            <h3 className="about-section-title">Achievements</h3>
            <div className="awards-grid">
              {awards.map((award) => (
                <Magnet key={award.title} magnetStrength={2} padding={10}>
                  <motion.div
                    className="award-icon-wrapper"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <award.icon className="award-icon-main" />
                    <div className="award-tooltip">
                      <h4>{award.title}</h4>
                      <p>{award.org}</p>
                    </div>
                  </motion.div>
                </Magnet>
              ))}
            </div>
          </motion.div>

          <motion.div className="about-stats" variants={itemVariants}>
            <div className="stat-item">
              <FaGraduationCap className="stat-icon" />
              <div>
                <span className="stat-label">Education</span>
                <span className="stat-value">BS Computer Science, Major in Software Engineering</span>
                <span className="stat-sub">CIIT College • 2022 - Present</span>
              </div>
            </div>
            <motion.a
              className="stat-item stat-item-link"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaFileDownload className="stat-icon" />
              <div>
                <span className="stat-label">Resume</span>
                <span className="stat-value">View & Download</span>
                <span className="stat-sub">ATS-Formatted PDF</span>
              </div>
            </motion.a>
            <div className="stat-item">
              <FaBriefcase className="stat-icon" />
              <div>
                <span className="stat-label">Experience</span>
                <span className="stat-value">Full-Stack Developer &amp; QA Tester</span>
                <span className="stat-sub">WyzLab Solutions • 2026</span>
              </div>
            </div>
            <div className="stat-item">
              <FaBriefcase className="stat-icon" />
              <div>
                <span className="stat-label">Experience</span>
                <span className="stat-value">Network IT Intern</span>
                <span className="stat-sub">T2G Network Innovations • 2022</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
