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
      <div className=' flex items-center justify-center px-2 py-4 text-lg text-slate-500'
      >
        <ul className='inline-flex text-slate-800'>
        {links.map(({ id, link }) => {
              return (
                <motion.li
                  key={id}
                  style={{color:'rgb(100,116,139)'}}
                  className="px-4 cursor-pointer font-medium text-slate-500"
                  whileHover={{ scale: 1.2, color: "#000" }}
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
