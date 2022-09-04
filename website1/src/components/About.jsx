import React from 'react'
import Typical from 'react-typical';
import Typewriter from 'typewriter-effect';


const About = () => {
  return (

  




    <div name='about' className='w-full h-screen flex flex-col bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-900' >
        <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 '>
                <div className='sm:text-right pb-8 pl-4'>
                 
                    <p className='text-4xl font bold inline border-b-4  text-[#18fb2f] border-pink-600 '>
                        
                        
                        About Me!
                    </p>
                   
                    
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px]  w-full px-4 grid grid-cols-2 gap-8 text-pink-600'>
                    <div className='sm:text-right pb-8 pl-4'>
                                            
                        <p className='text-4xl text-white'>Thank you for checking out my website, Im currently building a portfolio working with Three.js, Api's, UX Design 
                        and all things creative! I am also honing my skills as a full stack developer and love to indulge in learning new material. </p>
                    </div>
                    <div>
                        <h1 className=' text-4xl text-[#18fb2f] '>I am passionate about creating fully functional websites and improving my skills. I love
                        to express my creative side when styling websites and always give my full attention to the smallest of detail.
                        I am always learning and trying to improve my skillset.
                        </h1>
                    </div>
                </div>

                   

        </div>
    </div>    
     
  )
}

export default About