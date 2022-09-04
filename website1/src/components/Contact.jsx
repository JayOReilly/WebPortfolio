import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-900  flex justify-center items-center py-4'>
        <form method='POST' action='https://getform.io/f/cbb4f815-29f2-442a-847d-f638d5133e46' className='flex flex-col max-w-[600px] w-full bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-900'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-[#18fb2f]'>Contact</p>
                <p className='text-white py-4'>Get in touch!</p>
            </div>
            <input className='bg-white p-2 border-2 ' type="text" placeholder='Name' name='name'></input>
            <input className='bg-white my-4 p-2' type="email" placeholder='Email' name='email'></input>
            <textarea className='bg-white p-2' name="message" row="10" placeholder='Your message . . .'></textarea>
            
            <button className='text-[#18fb2f] border-pink-600 px-4 py-4 my-8 mx-auto  border-2 hover:bg-pink-600 hover:text-white'>Submit</button>

        </form>
        
    </div>
  )
}

export default Contact