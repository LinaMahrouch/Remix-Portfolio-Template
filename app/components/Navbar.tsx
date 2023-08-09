import { Disclosure } from '@headlessui/react'
import { Link } from '@remix-run/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Theme, useTheme } from 'remix-themes'
import Dbutton from './Dbutton'

const Navbar = () => {
    const [darkTheme, setDarkTheme] = useTheme();
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <><div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between h-16'>
                        <div className='flex justify-between w-full'>
                            <div className='flex items-center'>
                                <Link to="/">
                                    <h1 className='test-2xl font-medium '>Lina<span className='text-purple-800'>Mahrouch</span></h1>
                                </Link>
                            </div>
                            <div className='hidden sm:nl-6 sm:flex sm:space-x-8'>
                                {/*navlink gives an active state*/}
                                <NavLink className={({ isActive }) => isActive ? 'border-purple-900  dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold' : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold "}
                                    to="/">
                                    Home

                                </NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'border-purple-900 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold' : " hover:text-gray-800 border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
                                    to="/projects">
                                    Projects

                                </NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'border-purple-900  dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' : "hover:text-gray-800 border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
                                    to="/blog">
                                    Blog

                                </NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'border-purple-900  dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' : "hover:text-gray-800 border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
                                    to="/contactme">
                                    Contact Me

                                </NavLink>
                                {/*switch between dark and light mode*/}
                              <Dbutton/>
                            </div>
                        </div>
                        <div className='-mr-3 flex items-center sm:hidden'>
                            <div className='mr-3'>

                            
                            <Dbutton/>
                            </div>

                            <Disclosure.Button className="inline-flex item-center justify-center p-2 rounded-md text-zinc-800 hover:text-pink-100 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-800 dark:hover:bg-zinc-800">

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

                </div><Disclosure.Panel className="sm:hidden">
                    <div className='pt-2 pb-3 space-y-1'>
                                    <NavLink 
                                    className={({isActive}) =>isActive ?  "bg-teal-50 border-violet-500 text-slate-00 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-violet-900"
                                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-indigo-900 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover:bg-gray-700"}
                                    to="/">
                                     
                                        Home
                                    </NavLink>
                                    <NavLink 
                                    className={({isActive}) =>isActive ?  "bg-teal-50 border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-indigo-900 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover:bg-neutral-600"}
                                    to="/Projects">
                                     
                                       Projects
                                    </NavLink>
                                    <NavLink 
                                    className={({isActive}) =>isActive ?  "bg-teal-50 border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-indigo-900 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover:bg-neutral-600"}
                                    to="/Blog">
                                     
                                        Blog
                                    </NavLink>
                                    <NavLink 
                                    className={({isActive}) =>isActive ?  "bg-teal-50 border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-indigo-900 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover:bg-neutral-600"}
                                    to="/contactme">
                                     
                                        Contact me
                                    </NavLink>
                    </div>

                    </Disclosure.Panel></>
            )}
        </Disclosure>
    )
}

export default Navbar
