import React from "react";

function contact(){
    return(
        <>
    <div class="max-w-[100vw] py-35 " id="contactus">
    <h1 className='text-[30px] text-center font-bold text-orange-600'>Get in touch</h1> 
    <div className='grid md:grid-cols-2 sm:grid-cols-1 py-20 '>
        <div className='max-w-[100vw] flex-col space-y-2' >
            <p className='text-lg text-orange-600 font-medium'>59740 Kulas Drive</p>
            <p className='text-lg text-orange-600 font-medium'>South Carolina,</p>
            <p className='text-lg text-orange-600 font-medium'>Corwinland,</p>
            <p className='text-lg text-orange-600 font-medium'>347-770-9446 x571</p>
            <p className='text-lg text-orange-600 font-medium'>956-920-0210</p> 
        
        </div>

        <div className='flex-col space-y-4'>
            <div className=''>
                <input className='px-3 h-10 w-80 rounded-lg bg-white text-gray-800 font-semibold focus:border-orange-500 focus:outline-none ' type='text' name='fname' placeholder='Name'></input>
            </div>
            <div className=''>
                <input className='px-3 h-10 w-80 rounded-lg bg-white text-gray-800 font-semibold focus:border-orange-500 focus:outline-none' type='email' name='' placeholder='Email'></input>      
            </div>
            <div className=''>
                <input className='px-3 h-20 w-80 rounded-lg bg-white text-gray-800 font-semibold focus:border-orange-500 focus:outline-none' type='text' name='' placeholder='Message'></input>      
            </div>
        </div>
        </div>
        <div>   
        <button className='py-3 px-20 mt-6 bg-transparent text-orange-700 border-orange-600 border-2  font-semibold rounded-full hover:bg-orange-700 hover:text-white hover:scale-105 duration-300' type='submit' name='submit'>Submit</button>
        </div>
  </div>
        </>
    )
}

export default contact