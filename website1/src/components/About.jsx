import React from 'react'
import Typical from 'react-typical';
import Typewriter from 'typewriter-effect';


const About = () => {
  return (

  




    <div name='about' className='w-full h-screen flex flex-col bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-900' >
        <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 '>
                <div className='sm:text-right pb-8 pl-4'>
                 
                    <p className='text-4xl font bold inline border-b-4  text-[#18fb2f] border-pink-400 '>
                        
                        
                        About Me!
                    </p>
                   
                    
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px]  w-full px-4 grid grid-cols-2 gap-8 text-pink-400'>
                    <div className='sm:text-right pb-8 pl-4'>
                                            
                        <p className='text-2xl text-white'>I would describe myself as a humble person exercising patience when learning and navigating through life.
                        I have been told i am a great communicator and can express my opinions clearly. I have always been a creative person and love to design and implement my ideas. I formally produced electronic music to express my creativity
                        and have now found that same type of satisfaction in Web Development.
                        
                         
                
                         </p>
                    </div>
                    <div>
                        <h1 className=' text-2xl text-[#18fb2f] '>Since embarking on this journey i have un earthed a great passion for this!
                        I am passionate about creating a great user experience and learning from those who have gone before me.
                        When approaching the design i always put myself in the shoes of a user to get a well rounded view of how the UI should be.
                        </h1>
                    </div>
                </div>

                   

        </div>
    </div>    
     
  )
}

export default About