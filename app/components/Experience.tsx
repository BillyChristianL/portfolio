"use client"

import { IconArrowRight, IconArrowsMaximize, IconX } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'motion/react'
import Image, { type StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import type { IconType } from 'react-icons'
import {
  FaBrain,
  FaBriefcase,
  FaChartLine,
  FaCode,
  FaDatabase,
  FaDraftingCompass,
  FaGraduationCap,
  FaRobot,
  FaTools,
  FaVideo,
} from 'react-icons/fa'
import { assets } from '@/assets/assets'
import ScrollReveal from './ui/scroll-reveal'

type ExperienceProject = {
  number: string
  label: string
  title: string
  goal: string
  contribution: string
  architecture: string[]
  features: string[]
  tools: string[]
  image?: {
    src: string | StaticImageData
    alt: string
    caption: string
    eyebrow?: string
    overlay?: string
  }
  icon: IconType
}

type ExperienceItem = {
  period: string
  role: string
  company: string
  summary: string
  highlights?: string[]
  projects?: ExperienceProject[]
  projectKicker?: string
  projectHeading?: string
  projectBadge?: string
  icon: IconType
}

const thesisTitle =
  'Sensor-Based Geometry Acquisition and Trajectory Generation from Coarse Robot Paths for Robotic Laser Beam Welding'

const thesisTools = [
  'UR5e',
  'ROS 2',
  'Python',
  'OpenCV',
  'Docker',
  'Single-line scanner',
  'Laser processing head',
]

const thesisWorkflow = [
  {
    number: '01',
    title: 'Coarse seam scan',
    description: 'The UR5e follows an approximate robot path while the line scanner captures the first representation of the seam or groove.',
  },
  {
    number: '02',
    title: 'Initial trajectory',
    description: 'The sensor profiles are processed to estimate the seam geometry and generate an initial scan trajectory.',
  },
  {
    number: '03',
    title: 'Precision rescan',
    description: 'The robot follows the generated trajectory and scans the seam again from a better position to acquire more precise geometry.',
  },
  {
    number: '04',
    title: 'Welding path',
    description: 'The refined geometry is converted into the final path for the laser processing head to perform the welding operation.',
  },
]

const thesisImages = {
  physical: {
    src: '/thesis/ur5e-lab-setup.png',
    alt: 'Physical UR5e laboratory setup with the line scanner and laser processing head',
    label: 'Physical setup',
    caption: 'UR5e laboratory cell used for geometry acquisition and trajectory-development experiments.',
  },
  digital: {
    src: '/thesis/ur5e-rviz-scanner.png',
    alt: 'RViz model of the UR5e with the line scanner and laser processing head',
    label: 'Digital twin',
    caption: 'UR5e, scanner, and laser processing head integrated in the ROS 2 environment.',
  },
} as const

type ThesisImageKey = keyof typeof thesisImages

const mtiProjects: ExperienceProject[] = [
  {
    number: '01',
    label: 'Core algorithm',
    title: 'Tool-Wear Detection & Measurement Algorithm',
    goal: 'Build an image-processing pipeline that can locate wear on a CNC tool, determine its processing direction or rotation, segment the damaged region, and calculate the wear size.',
    contribution: 'Designed the complete analysis workflow, combining machine-learning inference with geometric and morphological image processing for repeatable wear measurements.',
    architecture: ['Tool-wear image', 'Wear localization', 'Direction & rotation', 'Segmentation', 'Size measurement'],
    features: [
      'Automatic localization of the worn region',
      'Processing-direction and rotation estimation',
      'Segmentation-based wear-size calculation',
      'Geometric analysis of irregular wear boundaries',
    ],
    tools: ['Python', 'PyTorch', 'OpenCV', 'NumPy', 'SciPy', 'scikit-image', 'NetworkX', 'Matplotlib'],
    icon: FaBrain,
  },
  {
    number: '02',
    label: 'Full-stack platform',
    title: 'Interactive CNC Tool-Wear Analysis Platform',
    goal: 'Turn the analysis algorithm into a complete application that automatically identifies and measures tool wear while still allowing users to correct masks and measure images manually.',
    contribution: 'Built the Next.js workspace and integrated three Python backend services for authentication, machine learning and image processing, and persistent data management.',
    architecture: ['Next.js workspace', 'Authentication service', 'SAM & image processing', 'Data service & database'],
    features: [
      'SAM-based automatic wear segmentation',
      'Automatic measurement immediately after upload',
      'Canva-like mask editing and manual measurement',
      'Persistent storage for images, masks, and results',
    ],
    tools: ['Next.js', 'Python', 'Django', 'Flask', 'SAM', 'REST APIs', 'Image Processing', 'Database'],
    icon: FaCode,
  },
  {
    number: '03',
    label: 'Automated measurement cell',
    title: 'Robot-Based Tool Measurement System',
    goal: 'Automate microscopic CNC-tool inspection by combining a Dobot CR5, a Dino-Lite microscope, calibrated robot motion, and a unified control application.',
    contribution: 'Designed and 3D-printed the microscope bracket, calibrated the system, modeled the table and measurement environment in URDF, implemented trajectory generation and robot APIs, and built the full-stack control workflow.',
    architecture: ['Next.js control interface', 'Auth, data & motion APIs', 'Trajectory service', 'Dobot CR5 & Dino-Lite'],
    features: [
      'Manual robot jogging and automatic trajectory execution',
      'Live microscope view directly inside the application',
      'Recording of robot poses and camera settings',
      'Calibrated URDF model of the measurement environment',
      'API-based integration of robot, camera, and database services',
    ],
    tools: ['Next.js', 'Python', 'Django', 'Flask', 'Dobot CR5', 'Dino-Lite', 'URDF', '3D Printing', 'REST APIs'],
    image: {
      src: '/mti/dobot-cr5-microscope.png',
      alt: 'Dobot CR5 with a Dino-Lite microscope mounted using a custom 3D-printed bracket',
      caption: 'Physical inspection setup: Dobot CR5, Dino-Lite microscope, and the custom 3D-printed mounting bracket.',
      eyebrow: 'Physical system',
      overlay: 'Custom microscope integration',
    },
    icon: FaRobot,
  },
]

const lmiProjects: ExperienceProject[] = [
  {
    number: '01',
    label: 'Process observability',
    title: 'LPBF Machine-Data Monitoring Platform',
    goal: 'Make the behavior of an LPBF machine visible during a build by continuously collecting PLC signals and presenting the process parameters as understandable time-series graphs.',
    contribution: 'Built the full-stack monitoring workflow with a Flask backend, connected the application to PLC data, stored the measurements in InfluxDB, and created Grafana dashboards for process observation and analysis.',
    architecture: ['LPBF machine & PLC', 'Flask acquisition service', 'InfluxDB', 'Grafana dashboards'],
    features: [
      'Automatic acquisition of machine and PLC values',
      'Live visualization of parameters during a build',
      'Time-series history for process comparison',
      'Structured data for troubleshooting and analysis',
    ],
    tools: ['Python', 'Flask', 'PLC', 'InfluxDB', 'Grafana', 'LPBF'],
    image: {
      src: assets.importer,
      alt: 'LPBF machine-data monitoring and visualization interface',
      caption: 'A data pipeline that turns raw PLC signals into traceable LPBF process information.',
      eyebrow: 'Process observability',
      overlay: 'PLC → InfluxDB → Grafana',
    },
    icon: FaChartLine,
  },
  {
    number: '02',
    label: 'Production preparation',
    title: 'C#/.NET Slicer & Machine Interface',
    goal: 'Convert build and vector data into machine-executable instructions and connect the preparation workflow with the PLC-controlled LPBF system.',
    contribution: 'Worked on a C#/.NET slicer for vector-data processing and G-code generation, including OVF-related processing and communication with the machine through a Beckhoff ADS and PLC interface.',
    architecture: ['3D build data', 'Slicing & vector logic', 'G-code / OVF', 'Beckhoff ADS & PLC', 'LPBF machine'],
    features: [
      'Processing of vector-based build data',
      'Generation of machine instructions and G-code',
      'OVF-related production-data workflow',
      'Interface between preparation software and PLC',
    ],
    tools: ['C#', '.NET', 'G-code', 'OVF', 'Beckhoff ADS', 'PLC'],
    image: {
      src: assets.laser,
      alt: 'Laser-based metal additive manufacturing process',
      caption: 'Software preparation and machine communication for an LPBF production workflow.',
      eyebrow: 'Machine interface',
      overlay: 'Slicing & G-code workflow',
    },
    icon: FaCode,
  },
  {
    number: '03',
    label: 'Process data platform',
    title: 'LPBF Process Data Hub',
    goal: 'Create a shared, Google Drive-like workspace where teams can collect and explore the large, connected datasets generated by metal additive manufacturing experiments.',
    contribution: 'Developed the platform with a React frontend, a NestJS backend, and PostgreSQL, organizing layer images, process parameters, material information, and experiment data in one searchable system.',
    architecture: ['React workspace', 'NestJS API', 'PostgreSQL', 'Layer images & process files'],
    features: [
      'Upload and organization of build datasets',
      'Per-layer image browsing for LPBF processes',
      'Process-parameter and material documentation',
      'Centralized access to experiment history',
    ],
    tools: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'REST APIs', 'Data Management'],
    image: {
      src: assets.loggin,
      alt: 'Software interface for logging and managing LPBF process data',
      caption: 'One structured workspace for layer images, materials, parameters, and experiment records.',
      eyebrow: 'Data platform',
      overlay: 'Layer images & process metadata',
    },
    icon: FaDatabase,
  },
  {
    number: '04',
    label: 'Mechanical concept',
    title: 'LPBF Powder-Preheating Concept',
    goal: 'Improve process stability and printed-part quality by developing a concept for controlled powder preheating in the LPBF build environment.',
    contribution: 'Designed the mechanical preheating concept in SolidWorks and explored how it could be integrated into the machine while considering the thermal behavior and practical constraints of the build process.',
    architecture: ['Process requirements', 'Preheating concept', 'SolidWorks CAD', 'LPBF integration review'],
    features: [
      'Powder-bed preheating concept',
      'Design focused on improved thermal stability',
      'Mechanical integration with the build environment',
      'Iterative CAD development and evaluation',
    ],
    tools: ['SolidWorks', 'CAD', 'LPBF', 'Mechanical Design', 'Thermal Concept'],
    image: {
      src: assets.heater,
      alt: 'Industrial laser process used as a visual for an LPBF preheating concept',
      caption: 'A mechanical concept aimed at reducing thermal gradients and supporting more stable LPBF builds.',
      eyebrow: 'Mechanical concept',
      overlay: 'Powder preheating for LPBF',
    },
    icon: FaDraftingCompass,
  },
  {
    number: '05',
    label: 'In-machine monitoring',
    title: 'LPBF Camera Observation System',
    goal: 'Provide a clear visual view inside the LPBF machine so the printing process can be observed from a dedicated application while a build is running.',
    contribution: 'Built and integrated a camera-based monitoring solution, processed the image stream with OpenCV, and developed a React frontend for viewing the printing process through an accessible user interface.',
    architecture: ['In-machine camera', 'OpenCV processing', 'Image stream', 'React monitoring interface'],
    features: [
      'Visual observation of the active LPBF process',
      'Camera integration inside the printing machine',
      'OpenCV-based image and stream processing',
      'React interface for convenient process viewing',
    ],
    tools: ['OpenCV', 'React', 'Camera Integration', 'Computer Vision', 'LPBF'],
    image: {
      src: assets.lpbf,
      alt: 'LPBF printing process observed inside an additive manufacturing machine',
      caption: 'An in-machine vision system for observing the LPBF process through a dedicated frontend.',
      eyebrow: 'Visual monitoring',
      overlay: 'Camera → OpenCV → React',
    },
    icon: FaVideo,
  },
]

const experiences: ExperienceItem[] = [
  {
    period: '2025 - 2026',
    role: 'Student Assistant',
    company: 'Manufacturing Technology Institute, RWTH Aachen',
    summary:
      'Developed three connected systems that progressed from a core computer-vision algorithm to a full-stack analysis platform and finally an automated robot-based measurement cell.',
    projects: mtiProjects,
    projectKicker: 'From algorithm to automation',
    projectHeading: 'Three connected systems at MTI',
    projectBadge: '3 case studies',
    icon: FaRobot,
  },
  {
    period: '2023 - 2025',
    role: 'Software Developer',
    company: 'Laser Melting Innovations GmbH',
    summary:
      'Delivered five projects across the LPBF lifecycle—from live machine and camera monitoring to production preparation, collaborative process-data management, and mechanical concept development.',
    projects: lmiProjects,
    projectKicker: 'From machine data to process innovation',
    projectHeading: 'Five LPBF software & engineering projects',
    projectBadge: '5 case studies',
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
      'Created automation and diagnostic concepts for a process-automation plant.',
      'Programmed PLC controls for plant operation and automation tasks.',
    ],
    icon: FaTools,
  },
]

const Experience = () => {
  const [activeThesisImage, setActiveThesisImage] = useState<ThesisImageKey | null>(null)

  useEffect(() => {
    if (!activeThesisImage) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveThesisImage(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [activeThesisImage])

  return (
    <ScrollReveal id='experience' amount={0.01} className='w-full scroll-mt-20 px-[8%] py-10 sm:px-[12%]'>
      <h4 className='mb-2 text-center text-lg font-serif'>
        Where I applied my skills
      </h4>
      <h2 className='text-center text-5xl font-serif'>
        Experience
      </h2>

      <p className='mx-auto mb-14 mt-5 max-w-2xl text-center font-serif'>
        Professional and academic work across industrial software, robotics, automation, machine learning, and manufacturing technology.
      </p>

      <section className='mx-auto mb-16 max-w-6xl overflow-hidden rounded-lg border border-darkHover/30 bg-lightHover/50 transition duration-500 hover:shadow-boxShadow'>
        <div className='p-6 sm:p-8'>
          <div className='flex flex-wrap items-center justify-between gap-3'>
            <div className='flex items-center gap-3 text-darkHover'>
              <span className='flex h-10 w-10 items-center justify-center rounded-md border border-darkHover bg-white'>
                <FaGraduationCap className='h-5 w-5' />
              </span>
              <div>
                <p className='text-sm font-semibold'>Current Master Thesis</p>
                <p className='text-xs text-gray-600'>Robotics · Sensor integration · Laser beam welding</p>
              </div>
            </div>
            <span className='rounded-md border border-darkHover/30 bg-white px-3 py-1 text-xs font-semibold text-darkHover'>
              Scan broadly. Refine locally. Weld accurately.
            </span>
          </div>

          <h3 className='mt-6 max-w-5xl text-2xl leading-8 text-gray-900 sm:text-3xl sm:leading-10'>
            {thesisTitle}
          </h3>
          <p className='mt-4 max-w-4xl text-sm leading-7 text-gray-700 sm:text-base'>
            I am developing a sensor-guided workflow that turns a coarse robot path into a welding-ready trajectory. A UR5e carries a single-line scanner and a laser processing head, allowing the same robotic system to acquire the seam geometry, refine it through a second scan, and generate the final laser welding path.
          </p>

          <div className='relative mt-7 pb-20 sm:pb-24'>
            <button
              type='button'
              onClick={() => setActiveThesisImage('physical')}
              className='group relative block w-full overflow-hidden rounded-lg border border-gray-300 bg-white text-left shadow-[6px_6px_0_#000] transition duration-500 hover:-translate-y-1 hover:shadow-[8px_8px_0_#000]'
              aria-label='Open the physical UR5e setup image'
            >
              <div className='relative aspect-[4/3] overflow-hidden bg-gray-100 sm:aspect-[16/9] lg:aspect-[16/8]'>
                <Image
                  src={thesisImages.physical.src}
                  alt={thesisImages.physical.alt}
                  fill
                  sizes='(max-width: 1280px) 84vw, 1152px'
                  className='object-cover object-center transition duration-700 group-hover:scale-[1.025]'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/15' />
              </div>

              <span className='absolute left-4 top-4 rounded-md border border-white/70 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-darkHover backdrop-blur sm:left-6 sm:top-6'>
                {thesisImages.physical.label}
              </span>
              <span className='absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-md border border-white/70 bg-white/90 text-darkHover opacity-90 transition group-hover:scale-105 group-hover:opacity-100 sm:right-6 sm:top-6'>
                <IconArrowsMaximize className='h-4 w-4' />
              </span>
              <span className='absolute bottom-5 right-5 hidden max-w-sm text-right text-sm leading-6 text-white sm:block lg:bottom-7 lg:right-7'>
                {thesisImages.physical.caption}
              </span>
            </button>

            <button
              type='button'
              onClick={() => setActiveThesisImage('digital')}
              className='group absolute bottom-0 left-4 z-10 w-[72%] max-w-[480px] overflow-hidden rounded-lg border border-darkHover bg-[#282828] text-left shadow-[6px_6px_0_#000] transition duration-500 hover:-translate-y-1 hover:shadow-[8px_8px_0_#000] sm:left-8 sm:w-[54%] lg:w-[46%]'
              aria-label='Open the RViz digital twin image'
            >
              <div className='relative aspect-[16/10] overflow-hidden'>
                <Image
                  src={thesisImages.digital.src}
                  alt={thesisImages.digital.alt}
                  fill
                  sizes='(max-width: 640px) 68vw, (max-width: 1024px) 46vw, 480px'
                  className='object-contain transition duration-700 group-hover:scale-[1.025]'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10' />
              </div>

              <span className='absolute left-3 top-3 rounded-md border border-white/60 bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-darkHover backdrop-blur sm:left-4 sm:top-4 sm:text-xs'>
                {thesisImages.digital.label}
              </span>
              <span className='absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-md border border-white/60 bg-white/90 text-darkHover sm:right-4 sm:top-4'>
                <IconArrowsMaximize className='h-3.5 w-3.5' />
              </span>
              <span className='absolute bottom-3 left-3 right-3 hidden text-xs leading-5 text-white sm:block sm:bottom-4 sm:left-4 sm:right-4'>
                {thesisImages.digital.caption}
              </span>
            </button>

            <div className='absolute bottom-5 right-1 hidden items-center gap-2 rounded-md border border-darkHover/30 bg-white px-3 py-2 text-xs font-semibold text-darkHover shadow-[3px_3px_0_#000] md:flex lg:right-5'>
              <span>Digital model</span>
              <IconArrowRight className='h-4 w-4' />
              <span>Physical integration</span>
            </div>
          </div>

          <div className='mt-8'>
            <div className='mb-4'>
              <p className='text-sm font-semibold uppercase tracking-[0.16em] text-darkHover'>
                Scan-to-weld workflow
              </p>
              <p className='mt-1 text-sm text-gray-600'>
                A two-pass measurement strategy progressively improves the seam geometry before welding.
              </p>
            </div>

            <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
              {thesisWorkflow.map(({ number, title, description }) => (
                <article key={number} className='rounded-lg border border-darkHover/20 bg-white p-4'>
                  <div className='flex items-center gap-3'>
                    <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-darkHover bg-lightHover text-xs font-bold text-darkHover'>
                      {number}
                    </span>
                    <h4 className='text-base text-gray-900'>{title}</h4>
                  </div>
                  <p className='mt-3 text-sm leading-6 text-gray-600'>{description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className='mt-8 grid gap-6 border-t border-darkHover/15 pt-6 lg:grid-cols-[1.2fr_0.8fr]'>
            <div>
              <p className='text-sm font-semibold text-gray-900'>My contribution</p>
              <p className='mt-2 text-sm leading-7 text-gray-600'>
                I integrated the robot, line scanner, and laser processing head into one workflow; developed the two-pass geometry-acquisition strategy; processed the scan data; and generated the refined trajectories for scanning and laser welding. The software is organized as a reproducible ROS 2 system using Docker, Python, and OpenCV.
              </p>
            </div>

            <div>
              <p className='text-sm font-semibold text-gray-900'>System &amp; tools</p>
              <div className='mt-3 flex flex-wrap gap-2'>
                {thesisTools.map((tool) => (
                  <span
                    key={tool}
                    className='rounded-md border border-darkHover/30 bg-white px-3 py-1.5 text-xs font-semibold text-darkHover'
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeThesisImage && (
          <motion.div
            className='fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8'
            role='dialog'
            aria-modal='true'
            aria-label={`${thesisImages[activeThesisImage].label} image preview`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveThesisImage(null)}
          >
            <button
              type='button'
              onClick={() => setActiveThesisImage(null)}
              className='absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-md border border-white/70 bg-white text-darkHover shadow-[4px_4px_0_#000] transition hover:-translate-y-0.5 sm:right-8 sm:top-8'
              aria-label='Close image preview'
            >
              <IconX className='h-5 w-5' />
            </button>

            <motion.figure
              className='w-full max-w-6xl overflow-hidden rounded-lg border border-white/40 bg-[#181818] shadow-[8px_8px_0_#000]'
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className='relative h-[70vh] min-h-[280px] w-full'>
                <Image
                  src={thesisImages[activeThesisImage].src}
                  alt={thesisImages[activeThesisImage].alt}
                  fill
                  sizes='95vw'
                  className='object-contain'
                  priority
                />
              </div>
              <figcaption className='flex flex-col gap-1 border-t border-white/20 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between'>
                <span className='text-sm font-semibold uppercase tracking-[0.16em] text-darkHover'>
                  {thesisImages[activeThesisImage].label}
                </span>
                <span className='text-sm text-gray-600'>
                  {thesisImages[activeThesisImage].caption}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>

      <div className='relative mx-auto max-w-5xl pl-9'>
        <motion.div
          className='absolute left-3 top-2 h-full w-px origin-top bg-gradient-to-b from-darkHover via-gray-300 to-transparent'
          aria-hidden='true'
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />

        {experiences.map(({ period, role, company, summary, highlights, projects, projectKicker, projectHeading, projectBadge, icon: Icon }, index) => (
          <motion.article
            key={`${role}-${period}`}
            className='relative pb-8 last:pb-0'
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className='absolute -left-9 top-1 flex h-7 w-7 items-center justify-center rounded-md border border-darkHover bg-white text-darkHover shadow-[2px_2px_0_#000]'>
              <Icon className='h-3.5 w-3.5' />
            </span>

            <div className='rounded-lg border border-gray-300 bg-white p-5 transition duration-500 hover:border-darkHover hover:shadow-boxShadow sm:p-6'>
              <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
                <div>
                  <p className='text-sm font-semibold text-darkHover'>
                    {company}
                  </p>
                  <h3 className='mt-1 text-2xl text-gray-900'>
                    {role}
                  </h3>
                </div>
                <span className='w-fit rounded-md border border-darkHover/30 bg-lightHover px-3 py-1 text-sm font-semibold text-darkHover'>
                  {period}
                </span>
              </div>

              <p className='mt-4 max-w-3xl text-sm leading-6 text-gray-600'>
                {summary}
              </p>

              {projects && (
                <div className='mt-7 border-t border-gray-200 pt-6'>
                  <div className='mb-6 flex flex-wrap items-end justify-between gap-3'>
                    <div>
                      <p className='text-sm font-semibold uppercase tracking-[0.16em] text-darkHover'>
                        {projectKicker}
                      </p>
                      <h4 className='mt-1 text-xl text-gray-900'>
                        {projectHeading}
                      </h4>
                    </div>
                    <span className='rounded-md border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-600'>
                      {projectBadge}
                    </span>
                  </div>

                  <div className={`mb-6 grid overflow-hidden rounded-lg border border-darkHover/20 bg-lightHover/30 ${projects.length === 5 ? 'sm:grid-cols-2 xl:grid-cols-5' : projects.length === 4 ? 'sm:grid-cols-2 xl:grid-cols-4' : 'sm:grid-cols-3'}`}>
                    {projects.map((project, projectIndex) => (
                      <div
                        key={project.number}
                        className='relative flex items-center gap-3 border-b border-darkHover/15 px-4 py-3 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0'
                      >
                        <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-darkHover bg-white text-xs font-bold text-darkHover'>
                          {project.number}
                        </span>
                        <div>
                          <p className='text-xs font-semibold uppercase tracking-[0.12em] text-darkHover'>{project.label}</p>
                          <p className='mt-0.5 text-xs text-gray-600'>{project.title}</p>
                        </div>
                        {projectIndex < projects.length - 1 && (
                          <span className='absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-r border-t border-darkHover/20 bg-lightHover sm:block' aria-hidden='true' />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className='grid gap-6'>
                    {projects.map((project, projectIndex) => {
                      const ProjectIcon = project.icon

                      return (
                        <motion.section
                          key={project.title}
                          className='relative overflow-hidden rounded-lg border border-darkHover/20 bg-lightHover/30 p-5 transition duration-500 hover:border-darkHover hover:bg-white hover:shadow-[5px_5px_0_#000] sm:p-6'
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.15 }}
                          transition={{ duration: 0.5, delay: projectIndex * 0.06, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <span className='pointer-events-none absolute -right-2 -top-7 select-none text-[110px] font-bold leading-none text-darkHover/[0.04]' aria-hidden='true'>
                            {project.number}
                          </span>

                          <div className='relative grid gap-7 lg:grid-cols-[0.9fr_1.1fr]'>
                            <div>
                              <div className='flex items-center gap-3'>
                                <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-darkHover bg-white text-darkHover shadow-[2px_2px_0_#000]'>
                                  <ProjectIcon className='h-4 w-4' />
                                </span>
                                <div>
                                  <p className='text-xs font-semibold uppercase tracking-[0.16em] text-darkHover'>
                                    Project {project.number} · {project.label}
                                  </p>
                                  <h5 className='mt-1 text-xl leading-7 text-gray-900'>
                                    {project.title}
                                  </h5>
                                </div>
                              </div>

                              <div className='mt-5 space-y-4 text-sm leading-6'>
                                <div>
                                  <p className='font-semibold text-gray-900'>The challenge</p>
                                  <p className='mt-1 text-gray-600'>{project.goal}</p>
                                </div>
                                <div>
                                  <p className='font-semibold text-gray-900'>What I built</p>
                                  <p className='mt-1 text-gray-600'>{project.contribution}</p>
                                </div>
                              </div>
                            </div>

                            <div className='grid gap-4'>
                              {project.image && (
                                <figure className='group overflow-hidden rounded-lg border border-darkHover/20 bg-white shadow-[4px_4px_0_#000]'>
                                  <div className='relative aspect-[16/9] overflow-hidden bg-gray-100'>
                                    <Image
                                      src={project.image.src}
                                      alt={project.image.alt}
                                      fill
                                      sizes='(max-width: 1024px) 84vw, 520px'
                                      className='object-cover object-center transition duration-700 group-hover:scale-[1.025]'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10' />
                                    <span className='absolute left-3 top-3 rounded-md border border-white/70 bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-darkHover backdrop-blur sm:left-4 sm:top-4 sm:text-xs'>
                                      {project.image.eyebrow ?? 'Project visual'}
                                    </span>
                                    {project.image.overlay && (
                                      <span className='absolute bottom-3 left-3 rounded-md border border-white/40 bg-black/45 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur sm:bottom-4 sm:left-4 sm:text-xs'>
                                        {project.image.overlay}
                                      </span>
                                    )}
                                  </div>
                                  <figcaption className='border-t border-gray-200 px-4 py-3 text-xs leading-5 text-gray-600'>
                                    {project.image.caption}
                                  </figcaption>
                                </figure>
                              )}

                              <div className='rounded-lg border border-darkHover/15 bg-white/80 p-4 sm:p-5'>
                                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-darkHover'>System pipeline</p>
                                <div className='mt-3 flex flex-wrap items-center gap-2'>
                                  {project.architecture.map((step, stepIndex) => (
                                    <React.Fragment key={step}>
                                      <span className='rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700'>
                                        {step}
                                      </span>
                                      {stepIndex < project.architecture.length - 1 && (
                                        <span className='text-xs font-semibold text-darkHover' aria-hidden='true'>→</span>
                                      )}
                                    </React.Fragment>
                                  ))}
                                </div>

                                <p className='mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-darkHover'>Key capabilities</p>
                                <ul className='mt-3 grid gap-2 sm:grid-cols-2'>
                                  {project.features.map((feature) => (
                                    <li key={feature} className='flex gap-2 text-xs leading-5 text-gray-600'>
                                      <span className='mt-1.5 h-2 w-2 shrink-0 rounded-sm border border-darkHover bg-lightHover' />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className='relative mt-6 flex flex-wrap gap-2 border-t border-darkHover/10 pt-4'>
                            {project.tools.map((tool) => (
                              <span
                                key={tool}
                                className='rounded-md border border-darkHover/30 bg-white px-2.5 py-1 text-xs font-semibold text-darkHover'
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </motion.section>
                      )
                    })}
                  </div>
                </div>
              )}

              {highlights && (
                <ul className='mt-5 grid gap-2 text-sm leading-6 text-gray-700'>
                  {highlights.map((highlight) => (
                    <li key={highlight} className='flex gap-3'>
                      <span className='mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-darkHover' />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </ScrollReveal>
  )
}

export default Experience
