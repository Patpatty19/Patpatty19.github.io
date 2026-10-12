import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import GradientText from './reactbits/GradientText'
import BlurText from './reactbits/BlurText'
import Magnet from './reactbits/Magnet'
import TypingText from './reactbits/TypingText'

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <div className="hero">
      <motion.div
        className="hero-inner"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-greeting" variants={itemVariants}>
          <span className="wave">👋</span>
          <span>Hello, I'm</span>
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          Patrick Miguel{' '}
          <GradientText
            colors={['#6366f1', '#8b5cf6', '#a855f7', '#6366f1']}
            animationSpeed={4}
          >
            Babala
          </GradientText>
        </motion.h1>

        <motion.div variants={itemVariants} className="hero-role">
          <span className="hero-role-prefix">I'm a </span>
          <TypingText
            words={['Full-Stack Developer', 'QA Tester', 'Software Developer', 'Mobile Developer']}
            className="hero-role-typing"
            typingSpeed={80}
            deletingSpeed={40}
            delayBetween={2500}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <BlurText
            text="Full-stack developer and QA tester building, securing, and testing production web platforms with Next.js, React, TypeScript, and Supabase — plus web and mobile work in Java, Flutter, Kotlin, and PHP/Laravel."
            className="hero-subtitle"
            delay={50}
            animateBy="words"
          />
        </motion.div>

    

        <motion.div className="hero-ctas" variants={itemVariants}>
          <Magnet padding={50} magnetStrength={3}>
            <motion.a
              className="btn btn-primary"
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </Magnet>
          <Magnet padding={50} magnetStrength={3}>
            <motion.a
              className="btn btn-secondary"
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </Magnet>
        </motion.div>

        <motion.div className="hero-social" variants={itemVariants}>
          <Magnet padding={40} magnetStrength={2}>
            <motion.a
              className="social-link"
              href="https://github.com/Patpatty19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
          </Magnet>
          <Magnet padding={40} magnetStrength={2}>
            <motion.a
              className="social-link"
              href="https://www.linkedin.com/in/patrick-miguel-babala/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedinIn />
            </motion.a>
          </Magnet>
          <Magnet padding={40} magnetStrength={2}>
            <motion.a
              className="social-link"
              href="mailto:babalapatrick@gmail.com"
              aria-label="Email"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </Magnet>
        </motion.div>
      </motion.div>

      <motion.a
        className="scroll-indicator"
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span>Scroll down</span>
        <div className="mouse" />
        <HiArrowDown className="scroll-arrow" />
      </motion.a>
    </div>
  )
}

export default Hero
