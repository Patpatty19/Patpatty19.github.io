import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'
import Magnet from './reactbits/Magnet'
import DecryptedText from './reactbits/DecryptedText'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1))
      let currentSection = ''
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Check if section is in viewport (with some offset for header)
          if (rect.top <= 150 && rect.bottom > 150) {
            currentSection = sectionId
            break
          }
        }
      }
      
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`site-header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="header-inner">
        <motion.a 
          className="brand" 
          href="#hero"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="brand-logo">P</div>
          <div className="brand-text">
            <DecryptedText 
              text="Patrick Miguel" 
              className="brand-name"
              speed={40}
              maxIterations={15}
            />
            <span className="brand-job">Software Developer</span>
          </div>
        </motion.a>

        <nav className={`site-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          <div className="mobile-nav-header">
            <span className="mobile-nav-title">Menu</span>
            <ThemeToggle />
          </div>
          
          <div className="mobile-nav-links">
            {navLinks.map((link, index) => (
              <Magnet key={link.href} magnetStrength={3}>
                <motion.a
                  href={link.href}
                  className={activeSection === link.href.slice(1) ? 'active' : ''}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.label}
                </motion.a>
              </Magnet>
            ))}
          </div>

          <div className="mobile-nav-footer">
            <p className="mobile-nav-cta">Let's connect</p>
            <div className="mobile-nav-social">
              <a href="https://github.com/Patpatty19" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/patrick-miguel-babala/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="mailto:babalapatrick@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
            <a href="#contact" className="mobile-nav-contact-btn" onClick={() => setOpen(false)}>
              Get in Touch
            </a>
          </div>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <motion.button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setOpen((s) => !s)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiX />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMenuAlt3 />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
