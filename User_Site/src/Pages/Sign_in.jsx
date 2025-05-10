import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin,FaGithub, FaFacebook } from "react-icons/fa";
const Sign_in = () => {
  return (
    <div className='flex h-screen font-Montserrat '>
        {/*Leftside part*/}
      <div className='bg-blue-500 w-1/2 rounded '></div>
      {/*Rightside part*/}
      <div className='bg-gray-200 flex w-screen items-center justify-center text-[19px]'>
        <div className=' hover:bg-ms-3'>
            <div className='text-center p-2 font-medium text-[30px]'>Login</div>
            <div className='p-2'>
                <label>Email & Phone number<input type='text' className='border border-gray-600 outline-none w-full p-2 rounded-full'></input></label></div>
            <div className='p-2'>
                <label>Password<input type='password' className='border border-gray-600 outline-none w-full p-2 rounded-full'></input></label></div>
            <div className='flex justify-between mt-3 gap-4 text-[15px]'>
                <div>Don't have an account?<a href='' className='underline text-blue font-semibold hover:text-gray-400'>Sign up</a></div>
                <div><a href=''className='text-[16px] rounded p-2 hover:text-blue-500 hover:bg-gray-300'>Forgot Password?</a></div>
            </div>
                {/*Sign in button*/}
            <div className='mt-8'><button className='items-center text-white p-2 w-full rounded-full shadow-inner shadow-blue-300 bg-blue-600 hover:bg-blue-400'>Sign in</button></div>

            {/*Divider*/}
            <div className='flex items-center mt-6'>
                <div className='border flex-grow border-gray-400'></div>
                <span className='mx-2 text-blue-500 text-[19px]'>OR</span>
                <div className='border flex-grow border-gray-400'></div>
            </div>
            {/*google,github,linkedin,facebook buttons*/}
            <div className='flex justify-between gap-2 mt-3'>
                <button className='rounded-full shadow-inner shadow-gray-500 hover:bg-gray-300 w-full flex gap-2 bg-white items-center justify-center p-2'onClick={''}><FcGoogle />Google</button>
                <button className='rounded-full shadow-inner shadow-blue-300 hover:bg-blue-500 w-full flex gap-2 bg-blue-600 text-white items-center justify-center p-2'onClick={''}><FaLinkedin />Linkedin</button>
            </div>
            <div className='flex justify-between gap-2 mt-3'>
                <button className='rounded-full shadow-inner shadow-gray-500 hover:bg-gray-300 w-full flex gap-2 bg-white items-center justify-center p-2'onClick={''}><FaGithub />Github</button>
                <button className='rounded-full shadow-inner shadow-blue-300 hover:bg-blue-500 flex gap-2 w-full bg-blue-600 text-white items-center justify-center p-2'onClick={''}><FaFacebook />Facebook</button>
            </div>

       </div>
      </div>
      
    </div>
  )
}

export default Sign_in
