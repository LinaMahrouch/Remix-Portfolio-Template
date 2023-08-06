import { Disclosure } from '@headlessui/react'
import { Link } from '@remix-run/react'
import React from 'react'

const navbar = () => {
  return (
    <Disclosure as ="nav">
        {({open}) => (
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16'>
                    <div className='flex justify-between w-full'>
                        <div className='flex items-center'>
                            <Link to="/">
                                <h1 className='test-2xl font-medium '>Lina<span className='text-purple-800'>Mahrouch</span></h1>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        )}
    </Disclosure>
  )
}

export default navbar
