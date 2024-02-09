"use client"
import { motion } from 'framer-motion'
import React from 'react'
// import Side from './Side'
const Home = () => {
  return (
    <div className='flex items-center gap-8 justify-center mx-36 my-12'>
     <img src="/updated.jpeg" alt="an image" className='w-1/3 h-1/3 my-10 px-12' />
      <div className='flex flex-col items-start justify-start'>
        <h1 className='text-4xl font-semibold'>
          Hello I am Sachin Pathak...
        </h1>
        <motion.div className='w-1 h-0.5 bg-black' 
        animate={{width:'30rem'}} 
        transition={{duration:0.8, ease:"easeInOut", loop: true }}/>
        <p className='text-lg font-thin pr-40 py-6'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, non. Ullam ea debitis, excepturi placeat nesciunt, dicta repellat obcaecati ducimus aspernatur quaerat optio voluptate eos assumenda laboriosam quibusdam magnam et!
        </p>
        <div>
          <motion.button className='my-3 px-4 py-3 bg-black text-white rounded-md'
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }}   // Scale down on tap
            transition={{ duration: 0.3 }} // Transition duration
            >My Projects</motion.button>
        </div>
      </div>
    </div>
  )
}

export default Home
