import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProjectCard from './ProjectCard'
import GradientText from './reactbits/GradientText'

// Projects data
const projects = [
  {
    title: 'PayGoal',
    description: 'A smart allowance and goal tracking Flutter application with Firebase backend, designed for families who want to teach financial literacy.',
    tech: ['Flutter', 'Firebase'],
    category: 'Mobile Android Application',
    githubUrl: 'https://github.com/Patpatty19/allowance_manager',
    liveUrl: 'https://patpatty19.github.io/allowance_manager/',
    image: '/paygoal.png',
  },
  {
    title: 'BlogShark',
    description: 'A Blog website that is similar to a social media application. Developed entirely using Laravel and SQLite.',
    tech: ['Laravel', 'SQLite', 'JavaScript', 'CSS'],
    category: 'Website',
    githubUrl: 'https://github.com/Patpatty19/dywebFinals',
    liveUrl: 'https://www.youtube.com/watch?v=T-8okZkfd_0',
    image: '/blogshark.png',
    videoId: 'T-8okZkfd_0',
  },
  {
    title: 'TrackCura',
    description: 'A role-based Android app for managing patients, appointments, and medical records.',
    tech: ['Kotlin'],
    category: 'Mobile Android Application',
    githubUrl: 'https://github.com/Patpatty19/TrackCura',
    liveUrl: 'https://youtu.be/aSf4b1P8frM',
    image: '/trackcura.png',
    videoId: 'aSf4b1P8frM',
  },
  {
    title: "Archer's Adventure",
    description: 'A simple 2D platformer game developed using Unity. The goal of the game is to collect all the power ups throughout the map.',
    tech: ['C#', 'Unity'],
    category: 'Game Application',
    githubUrl: 'https://github.com/Patpatty19/Archers-Adventure-Game',
    liveUrl: 'https://patpatty19.github.io/Archers-Adventure-Game/',
    image: '/archer.png',
  },
  {
    title: 'Software Quality Assurance Testing',
    description: 'Performed SQA Testing on a website (SwagLabs) with complete documentation and reports.',
    tech: ['Google Sheets', 'Google Docs', 'Google Drive'],
    category: 'Documentation',
    githubUrl: 'https://drive.google.com/drive/folders/1sgf-VHtrfSOUDeacBCE7iMIWKMr7Qum4?usp=sharing',
    liveUrl: 'https://youtu.be/hs2RvadOl4s',
    image: '/sqa.png',
    videoId: 'hs2RvadOl4s',
  },
  {
    title: 'Bank Churners Data',
    description: 'Analyzing a credit card customer churn dataset to develop a predictive model to identify churn-prone customers early.',
    tech: ['Altair AI Studio', 'Google Colab', 'Google Docs'],
    category: 'Data Mining',
    githubUrl: '/churners.pdf',
    liveUrl: 'https://youtu.be/7qFYCiRF-fs',
    image: '/altair.png',
    videoId: '7qFYCiRF-fs',
  },
  {
    title: 'PBI Fitness',
    description: 'A personalized fitness tracking and insights dashboard initially developed using PowerBI.',
    tech: ['PowerBI', 'HTML', 'CSS', 'JavaScript'],
    category: 'Website',
    githubUrl: 'https://github.com/Patpatty19/fitness-dashboard',
    liveUrl: 'https://patpatty19.github.io/fitness-dashboard/',
    image: '/pbi.png',
  },
  {
    title: 'Medical Insurance Data',
    description: 'Analyzing a medical insurance dataset to develop a system that shows the charges for insurance.',
    tech: ['JupyterLab', 'Python', 'Excel'],
    category: 'Data Science',
    liveUrl: 'https://youtu.be/aV1ln-5Xo4k',
    image: '/jupyter.jpg',
    videoId: 'aV1ln-5Xo4k',
  },
  {
    title: 'Lakbay',
    description: 'A mobile application enhancing travel experiences through scenic route navigation and local culture promotion. Developed as our Thesis project.',
    tech: ['Kotlin', 'Python', 'Firebase'],
    category: 'Mobile Application',
    image: '/lakbay.png',
    wip: true,
  },
]

const Projects: React.FC = () => {
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
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">
          <GradientText
            colors={['#f472b6', '#8b5cf6', '#6366f1', '#f472b6']}
            animationSpeed={4}
          >
            Featured Projects
          </GradientText>
        </h2>
        <p className="section-description">
          A selection of projects showcasing my skills and experience
        </p>
      </motion.div>

      <div className="projects-grid" style={{ position: 'relative', zIndex: 1 }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tech={project.tech}
              category={project.category}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              image={project.image}
              videoId={'videoId' in project ? project.videoId : undefined}
              wip={'wip' in project ? project.wip : undefined}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ textAlign: 'center', marginTop: '48px' }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <motion.a
          href="https://github.com/Patpatty19"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View More on GitHub
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Projects
