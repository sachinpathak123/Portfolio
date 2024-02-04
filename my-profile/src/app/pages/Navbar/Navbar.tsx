"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
const Navbar = () => {
    const links = [
        {
            id:1,
            link:'Home',
        },
        {
            id:2,
            link:'About-Us',
        },
        {
            id:2,
            link:'Projects',
        },
        {
            id:2,
            link:'Contact-Us',
        },
    ]
  return (
    <div>
      <div className=' flex items-center justify-center px-2 py-4 text-lg text-[#BCB4B4]'
      >
        <ul className='inline-flex text-[#BCB4B4]'>
        {links.map(({ id, link }) => {
              return (
                <motion.li
                  key={id}
                  style={{color:'#BCB4B4'}}
                  className="px-4 cursor-pointer font-medium text-[#BCB4B4]"
                  whileHover={{ scale: 1.2, color: "#fff" }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Link href='#'>{link}</Link>
                </motion.li>
              );
        }
              )}
       </ul>
       </div>
      </div>
  )
}

export default Navbar
