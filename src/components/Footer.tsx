import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <motion.a 
              className="brand" 
              href="#hero"
              whileHover={{ scale: 1.02 }}
            >
              <div className="brand-logo">P</div>
              <div className="brand-text">
                <span className="brand-name">Patrick Miguel</span>
                <span className="brand-job">Software Developer</span>
              </div>
            </motion.a>
            <p>
              Building and testing responsive, functional web and mobile applications with modern technologies. 
              Always eager to learn and collaborate on exciting projects.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="https://github.com/Patpatty19" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/patrick-miguel-babala/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:babalapatrick@gmail.com">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <small>
            © {currentYear} Patrick Miguel Babala. All rights reserved.
          </small>
          <div className="footer-social">
            <motion.a
              className="social-link"
              href="https://github.com/Patpatty19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -2 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              className="social-link"
              href="https://www.linkedin.com/in/patrick-miguel-babala/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -2 }}
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              className="social-link"
              href="mailto:babalapatrick@gmail.com"
              aria-label="Email"
              whileHover={{ y: -2 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
