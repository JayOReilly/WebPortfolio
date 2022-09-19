import React from 'react'
import LOGIN from '../assets/LoginStudent.jpg';
import JAVA from '../assets/js.png';
import COMING from '../assets/coming.jpg'
import THREE from '../assets/threeJS-Landing.jpg';





const Work = () => {
    return (
      <div name='work' className='w-full md:h-screen text-gray-300 bg-gradient-to-b from-indigo-900 via-indigo-900 to-indigo-900'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-[#18fb2f] border-pink-400'>
              Work
            </p>
            <p className='py-6'>Here is some of my projects</p>
            <p className='py-6 text-pink-400'>More to come!</p>
          </div>
  
  {/* Container */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
  
              {/* Grid Item */}
            <div
              style={{ backgroundImage: `url(${LOGIN})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-1xl font-bold text-[#18fb2f] tracking-wider'>
                  4th Year Project
                </span>
                <div className='pt-8 text-center'>
                 
                  <a href='https://github.com/JayOReilly/StudentHousingApp'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#18fb2f] font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${THREE})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-[#18fb2f] tracking-wider'>
                  Three.Js - Space Orbit
                </span>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    
                  </a>
                  <a href='https://github.com/JayOReilly/Space-three.js'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#18fb2f] font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
              {/* Grid Item */}
            <div
              style={{ backgroundImage: `url(${COMING})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
                </span>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${COMING})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
                </span>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
              {/* Grid Item */}
            <div
              style={{ backgroundImage: `url(${COMING})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
                </span>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${COMING})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
                </span>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Work;



