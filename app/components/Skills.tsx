import { skillData } from '@/assets/assets'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'
import type { IconType } from 'react-icons'
import { FaBrain, FaBriefcase, FaGraduationCap, FaRobot, FaTools } from 'react-icons/fa'
import ScrollReveal from './ui/scroll-reveal'

type Experience = {
  period: string
  role: string
  company: string
  summary: string
  highlights: string[]
  icon: IconType
}

type FocusItem = {
  title: string
  description: string
  icon: IconType
}

const skillHighlights: Record<string, string[]> = {
  'Programming Languages': ['Python', 'TypeScript', 'C#/.NET', 'Rust'],
  Frameworks: ['Next.js', 'Flask', 'Django REST', 'Flutter'],
  'Other Tools': ['Docker', 'MATLAB', 'Codesys', 'ROS2'],
  'Design Tools': ['SolidWorks', 'Fusion 360', 'Inventor', 'CAD'],
}

const thesisTitle =
  'Sensor-Based Geometry Acquisition and Trajectory Generation from Coarse Robot Paths for Robotic Laser Beam Welding'

const thesisTopics = [
  'Robotics',
  'Sensor-based geometry acquisition',
  'Trajectory generation',
  'Laser beam welding',
]

const currentFocus: FocusItem[] = [
  {
    title: 'Robotic Laser Beam Welding',
    description: 'Master thesis work on sensor-based geometry acquisition and trajectory generation.',
    icon: FaGraduationCap,
  },
  {
    title: 'CNC Tool-Wear Analysis',
    description: 'Image-processing workflow to measure wear on CNC tools from captured images.',
    icon: FaBrain,
  },
  {
    title: 'Manufacturing Web Apps',
    description: 'Dockerized Next.js and Python systems for industrial data and process workflows.',
    icon: FaBriefcase,
  },
  {
    title: 'Robot Programming',
    description: 'Robot coding and automation support for manufacturing technology tasks.',
    icon: FaRobot,
  },
]

const experiences: Experience[] = [
  {
    period: '2025 - 2026',
    role: 'Student Assistant',
    company: 'Manufacturing Technology Institute, RWTH Aachen',
    summary:
      'Supported robotics, full-stack software, computer vision, and manufacturing prototyping work for CNC tool-wear analysis.',
    highlights: [
      'Programmed robots for manufacturing and automation workflows.',
      'Built a Dockerized full-stack web application with Next.js and a Python backend.',
      'Developed an image-processing model to analyze CNC tool images and measure tool wear.',
      'Created CAD designs and produced prototypes with 3D printing.',
    ],
    icon: FaRobot,
  },
  {
    period: '2023 - 2025',
    role: 'Software Developer',
    company: 'Laser Melting Innovations GmbH',
    summary:
      'Developed software for metal additive manufacturing workflows, machine data handling, and production process support.',
    highlights: [
      'Built full-stack data visualization software for automatic machine data capture with Python, Flask, and Grafana.',
      'Developed a Django REST API machine interface to connect software workflows with machine functions.',
      'Created a C#/.NET 3D printer slicer for vector data processing and G-code generation.',
      'Built data hub software for metal powder experiments and 3D printing process parameters.',
    ],
    icon: FaBriefcase,
  },
  {
    period: '2023',
    role: 'Machine Learning Project',
    company: 'RWTH Aachen',
    summary:
      'Worked on data preparation, model development, optimization, and evaluation for supervised and unsupervised learning tasks.',
    highlights: [
      'Prepared training, validation, and test data with PyTorch, scikit-learn, Matplotlib, NumPy, and pandas.',
      'Evaluated neural networks, linear and logistic regression, decision trees, SVM, and K-means clustering.',
    ],
    icon: FaBrain,
  },
  {
    period: '2023',
    role: 'Automation for Production Systems Project',
    company: 'RWTH Aachen',
    summary:
      'Designed and implemented support software for detecting process faults in robotic adhesive processes.',
    highlights: [
      'Developed a concept to assist robot users during automatic process-error detection and handling.',
      'Implemented a full-stack application prototype with Python and Flask.',
    ],
    icon: FaRobot,
  },
  {
    period: '2023',
    role: 'Process Automation Internship',
    company: 'RWTH Aachen',
    summary:
      'Analyzed plant workflows and applied automation and diagnostic concepts to industrial process control.',
    highlights: [
      'Created automation and diagnostic concepts for a process automation plant.',
      'Programmed PLC controls for plant operation and automation tasks.',
    ],
    icon: FaTools,
  },
]

const Skills = () => {
  return (
    <ScrollReveal id='skill' className='w-full px-[8%] py-10 scroll-mt-20 sm:px-[12%]'>
      <h4 className='text-center mb-2 text-lg font-serif'>
        What I can do
      </h4>
      <h2 className='text-center text-5xl font-serif'>
        Skills & Experience
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-serif'>
        My work combines software development, robotics, automation, machine learning, and mechanical design for industrial engineering problems.
      </p>

      <div className='mb-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {currentFocus.map(({ title, description, icon: Icon }, index) => (
          <motion.article
            key={title}
            className='rounded-lg border border-darkHover/20 bg-lightHover/40 p-5 transition duration-500 hover:-translate-y-1 hover:border-darkHover hover:bg-white hover:shadow-boxShadow'
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className='flex h-10 w-10 items-center justify-center rounded-md border border-darkHover bg-white text-darkHover'>
              <Icon className='h-5 w-5' />
            </div>
            <h3 className='mt-4 text-lg text-gray-900'>
              {title}
            </h3>
            <p className='mt-2 text-sm leading-6 text-gray-600'>
              {description}
            </p>
          </motion.article>
        ))}
      </div>

      <div className='grid grid-cols-1 gap-6 my-10 md:grid-cols-2 xl:grid-cols-4'>
        {skillData.map(({ icon, title, description }, index) => (
          <article
            key={index}
            className='group flex h-full flex-col rounded-lg border border-gray-300 bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-darkHover hover:bg-lightHover/40 hover:shadow-boxShadow'
          >
            <div className='flex min-h-12 flex-wrap gap-2'>
              {icon.map(({ img, link }, iconIndex) => {
                const iconImage = (
                  <Image
                    src={img}
                    alt={`${title} icon`}
                    className='h-10 w-10 rounded-md border border-gray-300 bg-white p-1 object-contain transition duration-300 group-hover:border-darkHover'
                  />
                )

                return link ? (
                  <a
                    href={link}
                    key={iconIndex}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`${title} technology reference`}
                    className='block transition duration-300 hover:-translate-y-1 hover:scale-110'
                  >
                    {iconImage}
                  </a>
                ) : (
                  <span key={iconIndex} className='block transition duration-300 hover:-translate-y-1 hover:scale-110'>
                    {iconImage}
                  </span>
                )
              })}
            </div>

            <h3 className='mt-6 text-xl text-gray-800'>
              {title}
            </h3>
            <p className='mt-3 flex-1 text-sm leading-6 text-gray-600'>
              {description}
            </p>

            <div className='mt-5 flex flex-wrap gap-2'>
              {skillHighlights[title]?.map((item) => (
                <span
                  key={item}
                  className='rounded-md border border-gray-300 bg-white px-2.5 py-1 text-xs font-medium text-gray-700'
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className='mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.35fr] lg:items-start'>
        <section className='rounded-lg border border-darkHover/30 bg-lightHover/50 p-6 transition duration-500 hover:-translate-y-1 hover:shadow-boxShadow'>
          <div className='flex items-center gap-3 text-darkHover'>
            <span className='flex h-10 w-10 items-center justify-center rounded-md border border-darkHover bg-white'>
              <FaGraduationCap className='h-5 w-5' />
            </span>
            <p className='text-sm font-semibold'>
              Master Thesis
            </p>
          </div>

          <h3 className='mt-5 text-2xl leading-8 text-gray-900'>
            {thesisTitle}
          </h3>
          <p className='mt-4 text-sm leading-6 text-gray-700'>
            A robotics-focused thesis connecting sensor-based geometry acquisition with trajectory generation for laser beam welding from coarse robot paths.
          </p>

          <div className='mt-6 flex flex-wrap gap-2'>
            {thesisTopics.map((topic) => (
              <span
                key={topic}
                className='rounded-md border border-darkHover/30 bg-white px-3 py-1.5 text-xs font-medium text-darkHover'
              >
                {topic}
              </span>
            ))}
          </div>
        </section>

        <section id='experience' className='scroll-mt-24'>
          <div className='mb-6'>
            <h3 className='text-3xl text-gray-900'>
              Work Experience Timeline
            </h3>
            <p className='mt-3 max-w-2xl text-sm leading-6 text-gray-600'>
              Selected roles and university projects from my CV, focused on industrial software, automation, robotics, and machine learning.
            </p>
          </div>

          <div className='relative pl-9'>
            <motion.div
              className='absolute left-3 top-2 h-full w-px origin-top bg-gradient-to-b from-darkHover via-gray-300 to-transparent'
              aria-hidden='true'
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />

            {experiences.map(({ period, role, company, summary, highlights, icon: Icon }, index) => (
              <motion.article
                key={`${role}-${period}`}
                className='relative pb-7 last:pb-0'
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  className='absolute -left-9 top-1 flex h-7 w-7 items-center justify-center rounded-md border border-darkHover bg-white text-darkHover shadow-[2px_2px_0_#000]'
                  initial={{ opacity: 0, scale: 0.65 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.35, delay: index * 0.08, type: 'spring', stiffness: 220, damping: 16 }}
                >
                  <Icon className='h-3.5 w-3.5' />
                </motion.span>

                <div className='rounded-lg border border-gray-300 bg-white p-5 transition duration-500 hover:-translate-y-1 hover:border-darkHover hover:shadow-boxShadow'>
                  <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
                    <div>
                      <p className='text-sm font-semibold text-darkHover'>
                        {company}
                      </p>
                      <h4 className='mt-1 text-xl text-gray-900'>
                        {role}
                      </h4>
                    </div>
                    <span className='w-fit rounded-md border border-darkHover/30 bg-lightHover px-3 py-1 text-sm font-semibold text-darkHover'>
                      {period}
                    </span>
                  </div>

                  <p className='mt-4 text-sm leading-6 text-gray-600'>
                    {summary}
                  </p>

                  <ul className='mt-4 grid gap-2 text-sm leading-6 text-gray-700'>
                    {highlights.map((highlight) => (
                      <li key={highlight} className='flex gap-3'>
                        <span className='mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-darkHover' />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </ScrollReveal>
  )
}

export default Skills
