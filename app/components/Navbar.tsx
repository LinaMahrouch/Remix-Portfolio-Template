import { Disclosure } from '@headlessui/react'
import { Link } from '@remix-run/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Theme, useTheme } from 'remix-themes'
import Dbutton from './Dbutton'
import ColorChangingWrapper from './ColorChangingWrapper'
import { motion } from "framer-motion"
import MotionText from '../components/MotionText'

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

const Navbar = () => {
    const [darkTheme, setDarkTheme] = useTheme();
    return (


        <Disclosure as="header">
            {({ open }) => (
                <>
                    <div className='  mx-5  px-4  lg:px-8   font-bold'>
                        <div className='flex justify-between h-16'>
                            <div className='flex justify-between w-full'>
                                <div className='flex items-center text-3xl '>
                                    <Link to="/">
                                        <ColorChangingWrapper size="medium">ElinaCodes</ColorChangingWrapper>
                                    </Link>
                                </div>
                                <div className='hidden sm:nl-6 sm:flex sm:space-x-8 '>
                                    {/*navlink gives an active state*/}
                                    <NavLink className={({ isActive }) => isActive ? 'border-purple-900   dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2  font-semibold' : "border-transparent text-gray-500 dark:text-gray-200 dark:hover:text-white dark:hover:bg-zinc-700 inline-flex items-center px-1 pt-1 border-b-2  font-semibold "}
                                        to="/">
                                        Home

                                    </NavLink>
                                    <NavLink className={({ isActive }) => isActive ? 'border-purple-900  dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2  font-medium' : "hover:text-gray-800 border-transparent text-gray-500 dark:text-gray-200 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2  font-medium"}
                                        to="/blog">
                                        Blog

                                    </NavLink>
                                    <NavLink className={({ isActive }) => isActive ? 'border-purple-900 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2  font-semibold' : " hover:text-gray-800 border-transparent text-gray-500 dark:text-gray-200 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2  font-medium"}
                                        to="/projects">
                                        Projects

                                    </NavLink>
                                   
                                   
                                    

                                </div>
                                <div className='hidden sm:nl-6 sm:flex sm:space-x-8'>
                                   
                                    {/*switch between dark and light mode*/}
                                    <Dbutton />

                                    <button><a href="https://github.com/LinaMahrouch" target="_blank">
                                        <motion.svg
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            height="1em"
                                            width="1em"
                                            className="w-6 h-6  dark:text-slate-100 dark:hover:text-slate-300"
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
                                    </button>




                                </div>
                                {/*test*/}


                            </div>
                            <div className='-mr-3 flex items-center sm:hidden'>
                                <div className='flex space-x-4'>

                                
                                    <Dbutton />
                                    <button><a href="https://github.com/LinaMahrouch" target="_blank">
                                        <motion.svg
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            height="1em"
                                            width="1em"
                                            className="w-6 h-6  dark:text-slate-100 dark:hover:text-slate-300"
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
                                    </button>
                                </div>

                                <Disclosure.Button className="inline-flex item-center justify-center p-2 ml-3 rounded-md text-zinc-800 hover:text-pink-100 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-800 dark:hover:bg-zinc-800">

                                    {open ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>


                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                        </svg>


                                    )}
                                </Disclosure.Button>
                            </div>

                        </div>

                    </div>
                    <Disclosure.Panel className="sm:hidden ">
                        <div className='pt-2 pb-3 space-y-1 '>
                            <NavLink
                                className={({ isActive }) => isActive ? "bg-teal-50  border-violet-500 dark:text-slate-100  block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-violet-900"
                                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-indigo-900 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover:bg-neutral-600"}
                                to="/">

                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? "bg-teal-50 border-violet-500 dark:text-slate-100 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-zinc-600"
                                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-indigo-900 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover:bg-neutral-600"}
                                to="/Blog">

                                Blog
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? "bg-teal-50 border-violet-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-indigo-900 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover:bg-neutral-600"}
                                to="/Projects">

                                Projects
                            </NavLink>
                           
                           
                        </div>


                    </Disclosure.Panel></>
            )}
        </Disclosure>



    )
}

export default Navbar
