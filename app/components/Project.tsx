import { testimonials } from '@/assets/assets'

import React from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials'


const Work = () => {
    
  return (
    <div id='project' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-serif'>
            What I did 
        </h4>
        <h2 className='text-center text-5xl font-serif'>
            My Projects
        </h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-serif'>
          These are the projects I worked on with my program knowledge.

        </p>
        

        <AnimatedTestimonials testimonials={testimonials} />
       
    </div>
  )
}

export default Work