import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
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
          {navLinks.map((link, index) => (
            <Magnet key={link.href} magnetStrength={3}>
              <motion.a
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ color: 'var(--color-primary)' }}
              >
                {link.label}
              </motion.a>
            </Magnet>
          ))}
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
