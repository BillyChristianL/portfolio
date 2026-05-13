import Image from 'next/image'
import React from 'react'
import { FaRegCopyright,FaInstagram } from "react-icons/fa";
import {FiGithub} from "react-icons/fi"
import {CiLinkedin} from "react-icons/ci"
import ScrollReveal from './ui/scroll-reveal'

const Footer = () => {
  return (
    <ScrollReveal className='mt-20'>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 '>
            <p className='flex flex-row items-center gap-1'>
                <FaRegCopyright />
                2025 Billy Ch. Lugito. All Right Reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li>
                    <a href="https://github.com/BillyChristianL" target='_blank'>
                      <FiGithub className='size-6 transition duration-300 hover:-translate-y-1 hover:scale-110'/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/billy-christian-lugito-97b2661b4/" target='_blank'>
                      <CiLinkedin className='size-6 transition duration-300 hover:-translate-y-1 hover:scale-110' />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/billylugito/" target='_blank'>
                      <FaInstagram className='size-6 transition duration-300 hover:-translate-y-1 hover:scale-110' />
                    </a>
                </li>
            </ul>
        </div>
    </ScrollReveal>
  )
}

export default Footer
