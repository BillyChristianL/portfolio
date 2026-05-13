"use client"

import { testimonials } from '@/assets/assets'

import React, { useMemo, useState } from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials'
import ScrollReveal from './ui/scroll-reveal'

const projectCategories = ['All', 'Software', 'Robotics', 'Automation', 'Machine Learning', 'CAD']

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredTestimonials = useMemo(() => {
    if (selectedCategory === 'All') {
      return testimonials
    }

    return testimonials.filter((testimonial) => testimonial.category === selectedCategory)
  }, [selectedCategory])
    
    
  return (
    <ScrollReveal id='project' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-serif'>
            What I did 
        </h4>
        <h2 className='text-center text-5xl font-serif'>
            My Projects
        </h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-serif'>
          These are selected projects where I combined software, robotics, automation, machine learning, and mechanical design.

        </p>

        <div className='mb-10 flex flex-wrap justify-center gap-3'>
          {projectCategories.map((category) => {
            const isSelected = selectedCategory === category

            return (
              <button
                key={category}
                type='button'
                onClick={() => setSelectedCategory(category)}
                className={`rounded-md border px-4 py-1.5 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:border-darkHover hover:bg-lightHover ${
                  isSelected
                    ? 'border-darkHover bg-lightHover text-darkHover shadow-[3px_3px_0_#000]'
                    : 'border-gray-300 bg-white text-gray-700'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <AnimatedTestimonials testimonials={filteredTestimonials} />
       
    </ScrollReveal>
  )
}

export default Work
