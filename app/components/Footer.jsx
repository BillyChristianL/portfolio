import Image from 'next/image'
import React from 'react'
import { FaRegCopyright,FaInstagram } from "react-icons/fa";
import {FiGithub} from "react-icons/fi"
import {CiLinkedin} from "react-icons/ci"

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 '>
            <p className='flex flex-row items-center gap-1'>
                <FaRegCopyright />
                2025 Billy Ch. Lugito. All Right Reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li>
                    <a href="https://github.com/BillyChristianL" target='_blank'>
                      <FiGithub className='size-6'/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/billy-christian-lugito-97b2661b4/" target='_blank'>
                      <CiLinkedin className='size-6' />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/billylugito/" target='_blank'>
                      <FaInstagram className='size-6' />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer