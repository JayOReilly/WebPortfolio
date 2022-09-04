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
         Thank you for visiting my website, I am a developer from Dublin specializing in the front end.
         I returned to study in 2018 as a 26 year old and now have finished 4 years at the age of 30.
         

        </p>
        <p className='text-2xl sm:text-2xl font-bold text-[#62ff08]'>I really enjoy the designing websites and applications, I have built applications with 
          Android Studio and most recently have found myself so interested in using React.js with Tailwind.
          I am truly passionate about being a developer!
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