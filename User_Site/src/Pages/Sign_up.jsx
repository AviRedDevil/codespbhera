import React from 'react'

const Sign_up = () => {
  const a=()=>{
    alert("i am clicked")
  }
  return (
    <div className='flex h-screen font-Montserrat'>
      {/* Leftside part*/}
      <div className=' bg-blue-500 rounded-r-xl flex w-1/2 items-center justify-center'>
      <div className='text-white'>
        {/*Fill your details step start*/}
        <div className='flex items-center gap-3'>
          <div className='bg-white outline-2 outline-offset-4 w-5 h-5 rounded-full'></div>
          <div>Fill your details</div>
        </div>
        {/*Fill your details step End here*/}

        {/*Add experince step start*/}
        <div className='outline-2 outline-offset-2 bg-white w-5 h-40'></div>
        <div className='flex items-center gap-3'>
          <div className='bg-white outline-2 outline-offset-4 w-5 h-5 rounded-full'></div>
          <div>Add bio & experience</div>
        </div>
        <div className='outline-2 outline-offset-2 bg-white w-5 h-40'></div>
        <div className='flex items-center gap-3'>
          <div className='bg-white outline-2 outline-offset-4 w-5 h-5 rounded-full'></div>
          <div>Complete</div>
        </div>
      </div>
      </div>
      {/*Rightside part*/}
       {/*Start form section*/}
      <div className='text-[15px] bg-gray-200 flex w-screen font- justify-center items-center'>
        <div className=' ms-2'>
          <div className='text-[25px] text-center p-2 text-blue-500 font-medium'>Create an account</div>
          <div className='p-2   flex'>
                    <label className=''><input id='usertype_as_a_developer' type='radio'></input></label><span className='ms-2'>As a Developer</span>
                    <label className='ms-2'><input id='usertype_as_a_HR'  type='radio'></input></label><span className='ms-2'>As a HR</span>
                    <label className='ms-2'><input id='usertype_as_a_company'  type='radio'></input></label><span className='ms-2'>As a Company</span>
          </div>
        <div className='p-2'>
            <label>FullName*
              <input type='text'className='border border-gray-600 outline-none w-full p-2 rounded-full'></input></label>
          </div>
          <div className='p-2 justify-between gap-2 flex'>
            <label>Gender*<select id='register_page_gender' className='outline-none  border-gray-600 rounded-full border p-2 px-8 w-full'>
            <option></option>
            <option>Male</option>
            <option>Female</option>
            <option>Transgender</option>
            <option>Others</option>
              </select></label>
            <div>
              <label>Date of birth*<input id='register_page_dateofbirth'type='date'className=' border-gray-600 rounded-full border p-2 outline-none w-full'></input></label>
            </div>
          
          </div>
          <div className='p-2'>
            <label>Phone Number*<input id='register_page_phonernumber'type='text'className='border-gray-600  rounded-full border p-2 outline-none w-full'></input></label>
          </div>
          <div className='p-2'>
            <label>Email*<input id='register_page_email'type='email'className='border-gray-600  rounded-full border p-2 outline-none w-full'></input></label>
          </div>
          <div className='p-2'>
            <input id='register_page_terms&conditon_checkbox'type='checkbox'></input>
            <label className='p-2'>By signing up you agree to 
              our <a href="#" className='underline text-blue-500 hover:text-gray-500'onClick={a}>Terms of Service</a> and <a href="#" className='underline text-blue-500 hover:text-gray-500'onClick={a}>Privacy Policy</a></label>
          </div>
          {/*Next step button*/}
          <div className='p-2'>
            <button className='w-full shadow-inner shadow-blue-300 bg-blue-600 p-2 mt-4 text-white  rounded-full hover:bg-blue-500'onClick={a}>Next</button>
          </div>
          {/*log in as text click*/}
          <div className='text-center mb-3'>Already have an account? <a href='#'className='underline font-semibold hover:text-gray-500'onClick={a}>Log in</a></div>
            
        </div>
      </div>
        
    </div>
  )
}

export default Sign_up
