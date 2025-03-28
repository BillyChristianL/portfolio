import { assets, skillData } from '@/assets/assets'

import Image from 'next/image'
import React from 'react'
const Services = () => {
  return (
    <div id='skill' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-serif'>
            Whan can I do 
        </h4>
        <h2 className='text-center text-5xl font-serif'>
            My Skills
        </h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-serif'>
          Over the years, I have learned a lot about programming and construction design. Here, you can see my capabilities in these fields
        </p>
        
        <div className='grid grid-auto-fit gap-6 my-10 '>
            {skillData.map(({icon, title, description},index)=> (
                
                <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-boxShadow cursor-pointer hover:-translate-1 duration-500'>
                  
                    <div className='flex gap-2 flex-wrap'>
                        {icon.map(({img, link}, index)=>(
                            <a href={link} key={index}>
                                 <Image  src={img} alt='icon' className='w-10 rounded-md border-1 h-full border-gray-400' />
                            </a>
                           
                        ))}

                    </div>
                    
                    
                    <h3 className='text-lg my-4 text-gray-700'>
                        {title}
                    </h3>
                    <p className='text-sm text-gray-600 leading-5'>
                        {description}
                    </p>
                   
                </div>
                
            ))}
        </div>

        
        
    </div>
  )
}

export default Services