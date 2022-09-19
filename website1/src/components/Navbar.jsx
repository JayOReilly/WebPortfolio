import React, {useState} from 'react'
import {Link} from 'react-scroll'

import { BsPlus, BsFillLightningFill,BsGearFill,BsFillPersonLinesFill } from 'react-icons/bs'
import {FaFire,FaPoo,FaCross,FaCode,FaBars,FaTimes,FaFacebook,FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiArrowNarrowLight,HiArrowNarrowRight,HiOutlineMail} from 'react-icons/hi'


const Navbar = () => {
const [nav, setNavbar] = useState(false)
const handleClick = () => setNavbar(!nav)

    return (
        <div className='fixed w-full h-[100px] text-[#18fb2f]  flex justify-between items-center
        px-4 bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-900 '>
        

        <div className='flex'>
            <ul className='hidden md:flex flex-row space-x-10 justify-center '>
                <li className=' px-6 py-2 hover:rounded-lg hover:bg-[#67fb18] hover:animate-pulse hover:text-[#eae6e6]'>
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className='px-6 py-2 hover:rounded-lg hover:bg-[#67fb18] hover:animate-pulse hover:text-[#eae6e6]'>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className='px-6 py-2 hover:rounded-lg hover:bg-[#67fb18] hover:animate-pulse hover:text-[#eae6e6]'>
                    <Link to="work" smooth={true} duration={500}>Work</Link>
                </li>
                <li className=' px-6 py-2 hover:rounded-lg hover:bg-[#67fb18] hover:animate-pulse hover:text-[#eae6e6]'>
                    <Link to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li className=' px-6 py-2 hover:rounded-lg hover:bg-[#67fb18] hover:animate-pulse hover:text-[#eae6e6]'>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
        
                
            </ul>
        </div>
       
       
       
       
       
        
        {/*Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-8px] duration-300'>
                    <a className='flex justify-between items-center w-full text-white bg-blue-600' 
                    href='https://www.linkedin.com/in/james-jamie-o-reilly-6b9a45207/'> LinkedIn <FaLinkedin size={30}/></a>
                </li>  
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-8px] duration-300'>
                    <a className='flex justify-between items-center w-full text-white bg-[#9c17c1]'>
                    <Link to="contact"  smooth={true} duration={500}>Email Me</Link> <HiOutlineMail size={30}/></a>
                </li>
                <Link to="work" smooth={true} duration={500}></Link>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-8px] duration-300'>
                    <a className='flex justify-between items-center w-full text-white bg-[#130101]' 
                    href='https://github.com/JayOReilly'> GitHub <FaGithub size={30}/></a>
                </li>
                
                    
                        
                        
                    
                
            </ul>
        </div>

       
        
        </div>
    )

}

export default Navbar