import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { 
  FaEnvelope, 
  FaPhone, 
  FaGithub, 
  FaLinkedinIn,
  FaPaperPlane,
  FaCheck,
  FaExclamationTriangle
} from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import GradientText from './reactbits/GradientText'
import Magnet from './reactbits/Magnet'


const EMAILJS_SERVICE_ID = 'service_3fhhg2c'     
const EMAILJS_TEMPLATE_ID = 'template_tuhjqsh'   
const EMAILJS_PUBLIC_KEY = '7JMdQkTUYTqV7S0aN'     

const Contact: React.FC = () => {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

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
        <span className="section-label">Contact</span>
        <h2 className="section-title">
          <GradientText
            colors={['#22d3ee', '#6366f1', '#8b5cf6', '#22d3ee']}
            animationSpeed={4}
          >
            Get In Touch
          </GradientText>
        </h2>
        <p className="section-description">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </motion.div>

      <motion.div
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="contact-info">
          <motion.div className="contact-intro" variants={itemVariants}>
            <p className="contact-intro-text">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </motion.div>

          <motion.div className="contact-methods" variants={itemVariants}>
            <motion.a
              href="mailto:babalapatrick@gmail.com"
              className="contact-method"
              whileHover={{ x: 8 }}
            >
              <div className="contact-method-icon">
                <FaEnvelope />
              </div>
              <div className="contact-method-content">
                <h4>Email</h4>
                <p>babalapatrick@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+639955663994"
              className="contact-method"
              whileHover={{ x: 8 }}
            >
              <div className="contact-method-icon">
                <FaPhone />
              </div>
              <div className="contact-method-content">
                <h4>Phone</h4>
                <p>+63 995-566-3994</p>
              </div>
            </motion.a>

            <motion.div
              className="contact-method"
              style={{ cursor: 'default' }}
            >
              <div className="contact-method-icon">
                <HiLocationMarker />
              </div>
              <div className="contact-method-content">
                <h4>Location</h4>
                <p>Philippines</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="contact-social" variants={itemVariants}>
            <Magnet magnetStrength={5}>
              <motion.a
                className="social-link"
                href="https://github.com/Patpatty19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
            </Magnet>
            <Magnet magnetStrength={5}>
              <motion.a
                className="social-link"
                href="https://www.linkedin.com/in/patrick-miguel-babala/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedinIn />
              </motion.a>
            </Magnet>
          </motion.div>
        </div>

        <motion.div className="contact-form-wrapper" variants={itemVariants}>
          <h3 className="contact-form-title">Send Me a Message</h3>
          <form 
            ref={formRef}
            className="contact-form"
            onSubmit={async (e) => {
              e.preventDefault()
              setIsSubmitting(true)
              setSubmitStatus('idle')
              
              try {
                await emailjs.sendForm(
                  EMAILJS_SERVICE_ID,
                  EMAILJS_TEMPLATE_ID,
                  formRef.current!,
                  EMAILJS_PUBLIC_KEY
                )
                setSubmitStatus('success')
                setStatusMessage('Message sent successfully! I\'ll get back to you soon.')
                formRef.current?.reset()
              } catch (error) {
                setSubmitStatus('error')
                setStatusMessage('Failed to send message. Please try again or email me directly.')
                console.error('EmailJS Error:', error)
              } finally {
                setIsSubmitting(false)
                // Reset status after 5 seconds
                setTimeout(() => {
                  setSubmitStatus('idle')
                  setStatusMessage('')
                }, 5000)
              }
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="John Doe"
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="john@example.com"
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Tell me about your project..."
                rows={5}
                required 
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    style={{ display: 'inline-block' }}
                  >
                    ⏳
                  </motion.span>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </motion.button>

            {submitStatus !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`form-status ${submitStatus}`}
                style={{
                  marginTop: 'var(--space-4)',
                  padding: 'var(--space-3) var(--space-4)',
                  borderRadius: 'var(--radius)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  fontSize: '14px',
                  background: submitStatus === 'success' 
                    ? 'rgba(34, 197, 94, 0.15)' 
                    : 'rgba(239, 68, 68, 0.15)',
                  color: submitStatus === 'success' ? '#22c55e' : '#ef4444',
                  border: `1px solid ${submitStatus === 'success' ? '#22c55e' : '#ef4444'}`,
                }}
              >
                {submitStatus === 'success' ? <FaCheck /> : <FaExclamationTriangle />}
                {statusMessage}
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact
