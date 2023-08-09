import React from 'react'
import MyImg from "../../public/MyImg.jpeg"
import { motion } from "framer-motion"
import MotionText from '../components/MotionText'
import ColorChangingWrapper from "../components/ColorChangingWrapper"
const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 }
};
const slideUpFadeIn = {
  hidden: {
    y: 50,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const Index = () => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className='space-y-2 pt-6 pb-8 md:space-x-5'>
        <h1 className='text-3xl font-extrabold font-serif leading-8 trackig-tight sm:leading-10 sm:text-4xl md:text-4xl md:leading-14'>
          Home
        </h1>

      </div>

      <div className="items-center spacey-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8 ">
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

          <motion.div
            variants={slideUpFadeIn}
            initial="hidden"
            animate="visible"
            className=" text-2xl  font-serif pt-2 pb-2 text-zinc-900 dark:text-slate-200 items-center font-bold leading-8 tracking-tight"
          >
            <span className='text-purple-700'>M</span>ahrouch Lina.

          </motion.div>


          <MotionText duration={1} className="text-zinc-600 dark:text-gray-400 text-center font-bold font-serif ">

          Frontend software engineer who's a gaming geek and tech enthusiast. 🚀🎨🕹️

          </MotionText>

          <div className="flex space-x-5 pt-6">
            <a href="https://github.com/LinaMahrouch" target="_blank">
              <motion.svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="1em"
                width="1em"
                className="w-7 h-7  dark:text-slate-100 dark:hover:text-slate-300"
                whileHover="hover"
                variants={imageVariants}
                initial="initial"
              >
                <motion.path
                  d="M8 .198a8 8 0 00-2.529 15.591c.4.074.547-.174.547-.385 0-.191-.008-.821-.011-1.489-2.226.484-2.695-.944-2.695-.944-.364-.925-.888-1.171-.888-1.171-.726-.497.055-.486.055-.486.803.056 1.226.824 1.226.824.714 1.223 1.872.869 2.328.665.072-.517.279-.87.508-1.07-1.777-.202-3.645-.888-3.645-3.954 0-.873.313-1.587.824-2.147-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.201.82A7.672 7.672 0 018 4.066c.68.003 1.365.092 2.004.269 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.079 2.117.513.56.823 1.274.823 2.147 0 3.073-1.872 3.749-3.653 3.947.287.248.543.735.543 1.481 0 1.07-.009 1.932-.009 2.195 0 .213.144.462.55.384A8 8 0 008.001.196z" animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2 }}
                />
              </motion.svg>
            </a>
            <a href="https://x.com/Lina_VLR" target="_blank">
              <motion.svg
                viewBox="0 0 300 300" version="1.1"
                fill="currentColor"
                className="w-7 h-7 dark:text-slate-100  dark:hover:text-slate-300 text-zinc-800 hover:text-zinc-700"
                whileHover="hover"
                variants={imageVariants}
                initial="initial"
              >
                <motion.path
                  d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2 }}
                />
              </motion.svg>
            </a>
            <a href="https://www.instagram.com/elina_codes" target="_blank">
              <motion.svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                className="w-8 h-8  dark:text-slate-100  dark:hover:text-zinc-300 text-zinc-900 hover:text-zinc-700"
                whileHover="hover"
                variants={imageVariants}
                initial="initial"
              >
                <motion.path
                  d="M7 2 H17 A5 5 0 0 1 22 7 V17 A5 5 0 0 1 17 22 H7 A5 5 0 0 1 2 17 V7 A5 5 0 0 1 7 2 z"

                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2 }}
                />
                <motion.path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"
                />
              </motion.svg>
            </a>
            <a href="https://www.linkedin.com/in/lina-mahrouch-733214223/" target="_blank">
            <motion.svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className="w-8 h-8 text-zinc-900 dark:text-slate-100 dark:hover:text-slate-300"
              whileHover="hover"
              variants={imageVariants}
              initial="initial"
            >
              <motion.path
                d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2 }}
              />
            </motion.svg>
            </a>


          </div>




        </div>

      </div>

    </div>
  )
}

export default Index
