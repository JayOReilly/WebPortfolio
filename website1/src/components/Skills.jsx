import React from 'react'
import HTML from '../assets/html-5.png';
import TAILWIND from '../assets/tailwind-css-icon.png';
import JAVASCRIPT from '../assets/js.png';
import CSS from '../assets/css.png';
import JAVA from '../assets/java.png';
import ANDROID from '../assets/android.png';
import REACT from '../assets/physics.png';
import GITHUB from '../assets/github2.png';
import FIREBASE from '../assets/fire.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-gradient-to-b from-indigo-900 via-indigo-900 to-indigo-900 w-full h-screen text-white text-center col-span-3' >
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <div>
                     <p className='text-4xl font-bold inline border-b-4 text-[#18fb2f]   border-pink-600'>Skills</p>
                    <p className='py-4'>These are some technologies ive learned and currently learning</p>
                 </div>
             </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-10 text-center py-8 '>
            <div className='shadow-md shadow-black hover:scale-110 duration-300 '> 
                <img className='w-20 mx-auto' src={HTML} alt="html Icon"/>
                <p>HTML</p>
            </div>
            <div className='shadow-md shadow-black  hover:scale-110 duration-200 '> 
                <img className='w-20 mx-auto' src={JAVASCRIPT} alt="html Icon"/>
                <p>JAVASRIPT</p>
            </div>
            <div className='shadow-md shadow-black hover:scale-110 duration-100 '> 
                <img className='w-20 mx-auto' src={CSS} alt="html Icon"/>
                <p>CSS</p>
            </div>
            <div className='shadow-md shadow-black  hover:scale-110 duration-500 '> 
                <img className='w-20 mx-auto' src={TAILWIND} alt="html Icon"/>
                <p>TAILWIND CSS</p>
            </div>   
            <div className='shadow-md shadow-black  hover:scale-110 duration-500 '> 
                <img className='w-20 mx-auto' src={JAVA} alt="html Icon"/>
                <p>JAVA</p>
            </div>
            <div className='shadow-md shadow-black  hover:scale-110 duration-500 '> 
                <img className='w-20 mx-auto ' src={ANDROID} alt="html Icon"/>
                <p>ANDROID STUDIO</p>
            </div>
            <div className='shadow-md shadow-black  hover:scale-110 duration-500 '> 
                <img className='w-20 mx-auto' src={REACT} alt="html Icon"/>
                <p>React</p>
            </div>
            <div className='shadow-md shadow-black  hover:scale-110 duration-500 '> 
                <img className='w-30 h-26 mx-auto ' src={FIREBASE} alt="html Icon"/>
                <p></p>
            </div>
            

        </div>
     </div>

    </div>
  )
}

export default Skills