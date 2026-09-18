import { skillData } from '@/assets/assets'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'
import type { IconType } from 'react-icons'
import { FaBrain, FaCode, FaDraftingCompass, FaRobot } from 'react-icons/fa'
import ScrollReveal from './ui/scroll-reveal'

type Capability = {
  title: string
  description: string
  icon: IconType
}

const skillHighlights: Record<string, string[]> = {
  'Programming Languages': ['Python', 'TypeScript', 'C#/.NET', 'Rust', 'Dart'],
  Frameworks: ['Next.js', 'Flask', 'Django REST', 'Flutter'],
  'Other Tools': ['Docker', 'MATLAB', 'Codesys', 'ROS2'],
  'Design Tools': ['SolidWorks', 'Fusion 360', 'Inventor', 'CAD'],
}

const capabilities: Capability[] = [
  {
    title: 'Industrial Software',
    description: 'Frontend and backend applications for manufacturing data, process workflows, and machine interfaces.',
    icon: FaCode,
  },
  {
    title: 'Robotics & Automation',
    description: 'Robot programming, PLC-based automation, process integration, and production-system support.',
    icon: FaRobot,
  },
  {
    title: 'Computer Vision',
    description: 'Image-processing workflows for monitoring manufacturing processes and measuring tool wear.',
    icon: FaBrain,
  },
  {
    title: 'Mechanical Design',
    description: 'CAD design, rapid prototyping, and engineering concepts for manufacturing applications.',
    icon: FaDraftingCompass,
  },
]

const Skills = () => {
  return (
    <ScrollReveal id='skill' className='w-full scroll-mt-20 px-[8%] py-10 sm:px-[12%]'>
      <h4 className='mb-2 text-center text-lg font-serif'>
        What I work with
      </h4>
      <h2 className='text-center text-5xl font-serif'>
        Technical Skills
      </h2>

      <p className='mx-auto mb-12 mt-5 max-w-2xl text-center font-serif'>
        A practical toolkit for building software, robotics, automation, and mechanical-engineering solutions for industrial applications.
      </p>

      <div className='mb-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {capabilities.map(({ title, description, icon: Icon }, index) => (
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

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4'>
        {skillData.map(({ icon, title, description }) => (
          <article
            key={title}
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
    </ScrollReveal>
  )
}

export default Skills
