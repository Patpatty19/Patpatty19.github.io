import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaPlay, FaFilePdf } from 'react-icons/fa'
import { 
  SiFlutter, SiFirebase, SiLaravel, SiSqlite, SiJavascript, SiCss3,
  SiKotlin, SiSharp, SiUnity, SiReact, SiTypescript, SiNodedotjs,
  SiPython, SiHtml5, SiTailwindcss, SiMongodb, SiPostgresql,
  SiGooglesheets, SiGoogledocs, SiGoogledrive, SiGooglecolab, SiJupyter
} from 'react-icons/si'
import { FaRobot, FaChartBar, FaFileExcel } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import TiltCard from './reactbits/TiltCard'

// Tech configuration with icons and brand colors
const techConfig: Record<string, { icon: IconType; bgLight: string; bgDark: string; textLight: string; textDark: string }> = {
  'Flutter': { icon: SiFlutter, bgLight: '#e3f2fd', bgDark: 'rgba(2, 119, 189, 0.25)', textLight: '#0277bd', textDark: '#4fc3f7' },
  'Firebase': { icon: SiFirebase, bgLight: '#fff3e0', bgDark: 'rgba(255, 152, 0, 0.2)', textLight: '#e65100', textDark: '#ffb74d' },
  'Laravel': { icon: SiLaravel, bgLight: '#ffebee', bgDark: 'rgba(255, 45, 32, 0.2)', textLight: '#c62828', textDark: '#ff8a80' },
  'SQLite': { icon: SiSqlite, bgLight: '#e3f2fd', bgDark: 'rgba(0, 122, 204, 0.2)', textLight: '#01579b', textDark: '#64b5f6' },
  'JavaScript': { icon: SiJavascript, bgLight: '#fffde7', bgDark: 'rgba(247, 223, 30, 0.2)', textLight: '#f57f17', textDark: '#fff176' },
  'CSS': { icon: SiCss3, bgLight: '#e3f2fd', bgDark: 'rgba(33, 150, 243, 0.2)', textLight: '#1565c0', textDark: '#64b5f6' },
  'Kotlin': { icon: SiKotlin, bgLight: '#f3e5f5', bgDark: 'rgba(127, 82, 255, 0.2)', textLight: '#6a1b9a', textDark: '#b388ff' },
  'C#': { icon: SiSharp, bgLight: '#ede7f6', bgDark: 'rgba(104, 33, 122, 0.2)', textLight: '#4a148c', textDark: '#ce93d8' },
  'Unity': { icon: SiUnity, bgLight: '#eceff1', bgDark: 'rgba(255, 255, 255, 0.15)', textLight: '#37474f', textDark: '#b0bec5' },
  'React': { icon: SiReact, bgLight: '#e3f2fd', bgDark: 'rgba(97, 218, 251, 0.2)', textLight: '#0288d1', textDark: '#4fc3f7' },
  'TypeScript': { icon: SiTypescript, bgLight: '#e3f2fd', bgDark: 'rgba(49, 120, 198, 0.2)', textLight: '#1565c0', textDark: '#64b5f6' },
  'Node.js': { icon: SiNodedotjs, bgLight: '#e8f5e9', bgDark: 'rgba(104, 159, 56, 0.2)', textLight: '#2e7d32', textDark: '#81c784' },
  'Python': { icon: SiPython, bgLight: '#fff8e1', bgDark: 'rgba(255, 211, 67, 0.2)', textLight: '#f57f17', textDark: '#ffd54f' },
  'HTML5': { icon: SiHtml5, bgLight: '#fff3e0', bgDark: 'rgba(227, 79, 38, 0.2)', textLight: '#e65100', textDark: '#ff8a65' },
  'Tailwind': { icon: SiTailwindcss, bgLight: '#e0f7fa', bgDark: 'rgba(6, 182, 212, 0.2)', textLight: '#00838f', textDark: '#4dd0e1' },
  'MongoDB': { icon: SiMongodb, bgLight: '#e8f5e9', bgDark: 'rgba(76, 175, 80, 0.2)', textLight: '#2e7d32', textDark: '#81c784' },
  'PostgreSQL': { icon: SiPostgresql, bgLight: '#e3f2fd', bgDark: 'rgba(51, 103, 145, 0.2)', textLight: '#1565c0', textDark: '#64b5f6' },
  'Google Sheets': { icon: SiGooglesheets, bgLight: '#e8f5e9', bgDark: 'rgba(52, 168, 83, 0.2)', textLight: '#1e7e34', textDark: '#81c784' },
  'Google Docs': { icon: SiGoogledocs, bgLight: '#e3f2fd', bgDark: 'rgba(66, 133, 244, 0.2)', textLight: '#1a73e8', textDark: '#64b5f6' },
  'Google Drive': { icon: SiGoogledrive, bgLight: '#fff8e1', bgDark: 'rgba(251, 188, 4, 0.2)', textLight: '#f9a825', textDark: '#ffd54f' },
  'Google Colab': { icon: SiGooglecolab, bgLight: '#fff3e0', bgDark: 'rgba(249, 171, 0, 0.2)', textLight: '#e65100', textDark: '#ffb74d' },
  'Altair AI Studio': { icon: FaRobot, bgLight: '#ffebee', bgDark: 'rgba(211, 47, 47, 0.2)', textLight: '#c62828', textDark: '#ef9a9a' },
  'PowerBI': { icon: FaChartBar, bgLight: '#fff8e1', bgDark: 'rgba(242, 200, 15, 0.2)', textLight: '#c79400', textDark: '#f2c80f' },
  'HTML': { icon: SiHtml5, bgLight: '#fff3e0', bgDark: 'rgba(227, 79, 38, 0.2)', textLight: '#e65100', textDark: '#ff8a65' },
  'JupyterLab': { icon: SiJupyter, bgLight: '#fff3e0', bgDark: 'rgba(247, 119, 33, 0.2)', textLight: '#e65100', textDark: '#f77721' },
  'Excel': { icon: FaFileExcel, bgLight: '#e8f5e9', bgDark: 'rgba(33, 115, 70, 0.2)', textLight: '#1e7e34', textDark: '#81c784' },
}

type TechItem = {
  name: string
  icon?: IconType
  color?: string
}

type Props = {
  title: string
  description: string
  tech?: (string | TechItem)[]
  category?: string
  githubUrl?: string
  liveUrl?: string
  image?: string
  videoId?: string  // YouTube video ID for hover preview
  wip?: boolean  // Work in progress badge
}

const ProjectCard: React.FC<Props> = ({ 
  title, 
  description, 
  tech = [], 
  category = 'Web Development',
  githubUrl,
  liveUrl,
  image,
  videoId,
  wip = false,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  
  // Check if liveUrl is a video demo (Google Drive or YouTube)
  const isVideoDemo = liveUrl?.includes('drive.google.com') || liveUrl?.includes('youtube.com') || liveUrl?.includes('youtu.be')
  
  // Check if githubUrl is a PDF file or Google Drive link
  const isPdfLink = githubUrl?.endsWith('.pdf')
  const isDriveLink = githubUrl?.includes('drive.google.com')

  return (
    <TiltCard tiltMaxX={10} tiltMaxY={10} scale={1.02} glare maxGlare={0.15}>
      <motion.article 
        className="project-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      <div className="project-image">
        {/* WIP Badge */}
        {wip && (
          <div className="wip-badge">
            <span>🚧 Work in Progress</span>
          </div>
        )}
        {/* Show video on hover if videoId exists */}
        {videoId && isHovered ? (
          <iframe
            className="project-video"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1`}
            title={`${title} demo`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : image ? (
          <img src={image} alt={title} className="project-img" />
        ) : (
          <div className="project-placeholder">
            <FaCode />
          </div>
        )}
        <div className="project-overlay">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={isPdfLink ? "View PDF document" : isDriveLink ? "View Google Drive" : "View GitHub repository"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {isPdfLink ? <FaFilePdf /> : isDriveLink ? <SiGoogledrive /> : <FaGithub />}
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={isVideoDemo ? "Watch demo video" : "View live site"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {isVideoDemo ? <FaPlay /> : <FaExternalLinkAlt />}
            </motion.a>
          )}
        </div>
      </div>
      
      <div className="project-content">
        <span className="project-category">{category}</span>
        <h4 className="project-title">{title}</h4>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {tech.map((t, idx) => {
            const name = typeof t === 'string' ? t : t.name
            const config = techConfig[name]
            const Icon = config?.icon
            return (
              <span 
                key={`${name}-${idx}`} 
                className="tech-chip"
                data-tech={name}
                style={{
                  '--tech-bg-light': config?.bgLight || '#f3e8ff',
                  '--tech-bg-dark': config?.bgDark || 'rgba(139, 92, 246, 0.2)',
                  '--tech-text-light': config?.textLight || '#7c3aed',
                  '--tech-text-dark': config?.textDark || '#c4b5fd',
                } as React.CSSProperties}
              >
                {Icon && <Icon className="tech-icon" />}
                {name}
              </span>
            )
          })}
        </div>
      </div>
    </motion.article>
    </TiltCard>
  )
}

export default ProjectCard
