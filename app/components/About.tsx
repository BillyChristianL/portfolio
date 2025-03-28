import Image from 'next/image'
import React from 'react'
import { assets, infoList, toolsData } from '@/assets/assets'


const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-serif'>
            Introduction
        </h4>
        <h2 className='text-center text-5xl font-serif'>
            About me 
        </h2>
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-serif text-justify'>
                Born in East Nusa Tenggara, Indonesia, I carried my curiosity through high school and beyond. Drawn to Germany, not just for academics but for its precision engineering and innovation, I saw it as a gateway to global industry. This journey is more than geography—it’s about learning progress from the best and bringing those lessons back home.
                </p>

                <h4 className='font-bold my-6 text-gray-700 font-serif'>Education History</h4>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon,description, title},index)=> (
                        <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-1 hover:shadow-boxShadow duration-500'>
                            <Image src={icon} alt={title} className='w-30 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </li>
                    ))}
                </ul>

                {/* <h4 className='my-6 text-gray-700 font-serif'>
                    Tools I Use
                </h4> */}

                {/* <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index)=> (
                        <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-boxShadow '>
                            <Image src={tool} alt="tool" className='w-5 sm:w-7' />

                        </li>
                    ))}
                </ul> */}


            </div>
        </div>
    </div>
  )
}

export default About