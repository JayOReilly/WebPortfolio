import React from 'react'
import {HiArrowNarrowLight,HiArrowNarrowRight,HiOutlineMail} from 'react-icons/hi'
import Scroll from 'react-scroll-component';
import {Link} from 'react-scroll'
import Typewriter from 'typewriter-effect';





const Home = () => {

  return (

    
    <div name='home' className='w-full h-screen bg-gradient-to-tl  from-indigo-900 via-indigo-900 to-indigo-900 '>
        
        
        {/**Container */}
        <div className='max-w-[1000px] mx-auto px-4    text-white flex flex-col justify-center h-full'>
          <p className='text text-4xl'>Hi, my name is</p>
            <h2 className='  text-6xl sm:text-7xl font-bold text-[#ccd6f6]'>
           
           
            <Typewriter 

                                


                  onInit={(typewriter) => {
                   typewriter.typeString("James O'Reilly") 
    
                    .pauseFor(1000)
                     
   


                    .start();

    
                    }


                    }

                    />
           
            
            </h2>
        <h2 className=' text-4xl sm:text-4xl font-bold text-[#62ff08]  hover:scale-110 duration-300 '>
          Software Developer 
        </h2>
        <p className='text-2xl sm:text-2xl font-bold  text-pink-400'>
         Thank you for visiting my website, I am a developer from Dublin,Ireland specializing in the front end.
         I returned to study in 2018 as a 26 year old and now have finished 4 years of Computer Science at the age of 30.
         

        </p>
        <p className='text-2xl sm:text-2xl font-bold text-[#62ff08]'>I am passionate about designing,styling and developing websites and applications
           with full functionality, Recently i have been working alot with React and all things Javascript.
           I am on the path to becoming a better all rounder and always grab an oppurtunity to soak in advice and tips from more experienced devs.
          
         </p>

        <div>
            <button click className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-500 hover:border-purple-400'>
            <Link to="work" smooth={true} duration={500}>Check out my work!</Link>
                
                
                <span className='group-hover:rotate-90 duration-300 '>
                    <HiArrowNarrowRight className='ml-3 ' />

                </span>

            </button>
        </div>
      
      
      </div> 





    </div>
  
    )

}



export default Home