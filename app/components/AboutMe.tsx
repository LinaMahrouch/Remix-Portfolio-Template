import { motion } from 'framer-motion';
import MyImg from '../../public/MyImg.jpeg';
import MotionText from '../components/MotionText';

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};
const slideUpFadeIn = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const AboutMe = () => {
  return (
    <div className="grid max-w-prose gap-2.5 justify-items-center py-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.img
        src={MyImg}
        className="h-48 w-48 rounded-full object-cover "
        alt="Your Image"
        variants={imageVariants}
        initial="initial"
        whileHover="hover"
      />

      <motion.div
        variants={slideUpFadeIn}
        initial="hidden"
        animate="visible"
        className="text-2xl text-zinc-900 dark:text-slate-200 font-bold leading-8 tracking-tight"
      >
        <span className="text-purple-700">M</span>ahrouch Lina.
      </motion.div>

      <MotionText
        duration={1}
        className="text-zinc-600 dark:text-gray-400 font-bold max-w-sm text-center"
      >
        Frontend software engineer who's a gaming geek and tech enthusiast. 🚀🕹️
      </MotionText>

      <div className="flex space-x-5 pt-6">
        <a href="https://x.com/Lina_VLR" target="_blank">
          <motion.svg
            viewBox="0 0 300 300"
            version="1.1"
            fill="currentColor"
            className="w-7 h-7 dark:text-slate-100  dark:hover:text-slate-300 text-zinc-800 hover:text-zinc-700"
            whileHover="hover"
            variants={imageVariants}
            initial="initial"
          >
            <motion.path
              d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"
              animate={{ pathLength: 1, opacity: 1 }}
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
            <motion.path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
          </motion.svg>
        </a>
        <a
          href="https://www.linkedin.com/in/lina-mahrouch-733214223/"
          target="_blank"
        >
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
  );
};

export default AboutMe;
