import React from 'react'
import MyImg from "../../public/MyImg.jpeg"
import { motion } from "framer-motion"
const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 }
};

const Index = () => {
  return (
    <div className ="divide-y divide-gray-200 dark:divide-gray-700">
      <div className='space-y-2 pt-6 pb-8 md:space-x-5'>
        <h1 className='text-3xl font-extrabold font-serif leading-8 trackig-tight sm:leading-10 sm:text-4xl md:text-4xl md:leading-14'>
          <span className="text-purple-800 dark:text-blue-800 ">H</span>ome
        </h1>

      </div>

      <div className="items-center spacey-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
        <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />
         
          <motion.img
      src={MyImg}
      className=" h-48 w-48 rounded-full object-cover "
      alt="Your Image"
      variants={imageVariants}
      initial="initial"
      whileHover="hover"
    />

        </div>
        
      </div>
      
    </div>
  )
}

export default Index
