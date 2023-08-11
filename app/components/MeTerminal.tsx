import React from 'react'
import TypingEffect from './TypingEffect';


const KnowMe = () => {
  return (

    <div className="prose  prose-xl mt-4 mx-5 mb-4 pl-5 pt-10 pb-8 dark:prose-invert xl:col-span-2">
      <div className=" ">
        <div className="w-full shadow subpixel-antialiased rounded h-64 bg-black dark:bg-white border-black dark:border-white mx-auto">
          <div className="flex items-center h-6 rounded-t  border-b border-gray-500 text-center text-black" id="headerTerminal">
            <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
            </div>
            <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
            </div>
            <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
            </div>
            <div className="mx-auto pr-16" id="terminaltitle">
              <p className="text-center text-sm dark:text-black text-white dark:font-bold">Terminal</p>
            </div>

          </div>
          <div className="pl-1 pt-1 h-auto  dark:text-zinc-900 text-sm bg-black font-semibold text-md text-white dark:bg-white"  id="console font-serif ">
         
          <p className=" pl-1 text-lg font-bold">
          <TypingEffect text="Hii, I'm Lina Mahrouch 👋" /></p>
            <p className="pl-1 pb-1 text-1em">A Frontend Software Engineer, professional Valorant player, and competitive tennis enthusiast based in Morocco. I have a passion for creating impactful fullstack web applications with React and its frameworks, especially <a href="https://remix.run/" className='text-white rounded dark:text-black dark:bg-slate-300' > Remix.Run</a> & <a href="https://remix.run/" className=' dark:bg-slate-300 rounded text-white dark:text-black' >NextJs.</a> </p> <p className="pl-1 pb-1"> Precision defines me, both in the digital realm and on the court. </p> 
            <p className="pl-1 pb-1"> Let's connect!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KnowMe
