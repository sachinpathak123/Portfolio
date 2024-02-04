"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Side from './Side'
const Home = () => {
  return (
    <div className='my-8'>
      <div className='container w-screen mx-8'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-white text-center text-5xl font-bold z-50'><span className='text-lg text-[#BCB4B4] font-thin'>Hello, This is</span><br /> Sachin Pathak</h1>
        <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/prof-2.jpg')`,
                     backgroundRepeat:'no-repeat',
                     backgroundSize:'cover',
                     backgroundPosition:'70% 30%',
    }} className='w-[50rem] h-[70vh] mt-[-20px] border border-1 border-white flex flex-col items-center justify-end'>
    <p className='font-thin text-slate-100 text-md px-28 text-center'>I am a student in 3rd Year NIT AP learning technologies. I love to develop and make new web experiences for the people.</p>
    <motion.button className='m-5 py-2 px-4 bg-[#BCB4B4] rounded-sm'
    whileHover={{
        backgroundColor:'white',
        
    }}
    transition={{
        type:'spring',
        stiffness:300,
        duration:1.6
    }}>My projects</motion.button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
